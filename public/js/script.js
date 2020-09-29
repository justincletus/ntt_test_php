$(document).ready(function() {
  $(document).on('click', '.edit-modal', function() {
        $('#footer_action_button').text("Update");
        $('#footer_action_button').addClass('glyphicon-check');
        $('#footer_action_button').removeClass('glyphicon-trash');
        $('.actionBtn').addClass('btn-success');
        $('.actionBtn').removeClass('btn-danger');
        $('.actionBtn').addClass('edit');
        $('.modal-title').text('Edit');
        $('.deleteContent').hide();
        $('.form-horizontal').show();
        $('#fid').val($(this).data('id'));
        $('#n').val($(this).data('name'));
        $('#router_value1').val($(this).data('router'));    
        $('#myModal').modal('show');
    });
    $(document).on('click', '.delete-modal', function() {
        $('#footer_action_button').text(" Delete");
        $('#footer_action_button').removeClass('glyphicon-check');
        $('#footer_action_button').addClass('glyphicon-trash');
        $('.actionBtn').removeClass('btn-success');
        $('.actionBtn').addClass('btn-danger');
        $('.actionBtn').addClass('delete');
        $('.modal-title').text('Delete');
        $('.did').text($(this).data('id'));
        $('.deleteContent').show();
        $('.form-horizontal').hide();
        $('.dname').html($(this).data('name'));
        $('#myModal').modal('show');
    });

    $('.modal-footer').on('click', '.edit', function() {
    	
        $.ajax({
            type: 'post',
            url: '/editItem',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $("#fid").val(),
                'name': $('#n').val(),
                'router_value': $('#router_value1').val(),
            },
            success: function(data) {            	
            	
                $('.item' + data.id).replaceWith("<tr class='item" + data.id + "'>" 
                		+ "<td>" + data.id + "</td>" 
                		+ "<td>" + data.name + "</td>" 
                		+ "<td>" + data.value + "</td>" 
                		+ "<td>" 
                			+ "<button class='edit-modal btn btn-info' data-id='" 
                			+ data.id + "' data-name='" + data.name + "' data-router='" + data.value + "'>" 
                			+ "<span class='glyphicon glyphicon-edit'></span> Edit</button>" 
                			+ " <button class='delete-modal btn btn-danger' data-id='" 
                			+ data.id + "' data-name='" + data.name + "' >" 
                			+ "<span class='glyphicon glyphicon-trash'>" 
                			+ "</span> Delete</button>" 
                		+ "</td></tr>");
                
                
            }
        });
    });
    $("#add").click(function() {
    	let name = $('input[name=name]').val();
    	
    	if (name) {
    		$.ajax({
                type: 'post',
                url: '/addItem',
                data: {
                    '_token': $('input[name=_token]').val(),
                    'name': $('input[name=name]').val(),
                    'router_value': $('input[name=router_value]').val(),
                },
                success: function(data) {
                    if ((data.errors)){
                      $('.error').removeClass('hidden');
                        $('.error').text(data.errors.name);
                    }
                    else {
                        $('.error').addClass('hidden');
                        $('#table').append("<tr class='item" + data.id + "'>" +
                        		"<td>" + data.id + "</td>" +
                        				"<td>" + data.name + "</td>"
                        				+ "<td>" + data.value + "</td>" 
                        				+ "<td>" + "<button class='edit-modal btn btn-info' data-id='" + data.id + "' data-name='" + data.name + "' data-value='" + data.value + "'>" +
                        								"<span class='glyphicon glyphicon-edit'></span> Edit</button> " +
                        								"<button class='delete-modal btn btn-danger' data-id='" + data.id + "' data-name='" + data.name + "'>" +
                        										"<span class='glyphicon glyphicon-trash'></span> Delete</button></td></tr>");
                    }
                    
                },

            });    		
    	}
    	else {
    		alert('Name is required');
    	}
        
        //$('#name').val('');
    });
    $('.modal-footer').on('click', '.delete', function() {
        $.ajax({
            type: 'post',
            url: '/deleteItem',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('.did').text()
            },
            success: function(data) {
                $('.item' + $('.did').text()).remove();
            }
        });
    });
    
    $('#generate_record').on('click', function() {
    	let g = prompt('How many records you want to generate?')
    	if (g) {
    		$.ajax({
                type: 'get',
                url: '/generateRecord',
                data: {
                    'g': g
                },
                success: function(data) {
                	location.reload();
                },
                error: function(err) {
                	console.log(err)
                }
            });
    		
    	}
    })
});
