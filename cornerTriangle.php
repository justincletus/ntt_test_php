<?php
header("Content-type: image/png");
 
$img_width = 800;
$img_height = 600;
 
$img = imagecreatetruecolor($img_width, $img_height);
 
$black = imagecolorallocate($img, 0, 0, 0);
$white = imagecolorallocate($img, 255, 255, 255);
$red   = imagecolorallocate($img, 255, 0, 0);
$green = imagecolorallocate($img, 0, 255, 0);
$blue  = imagecolorallocate($img, 0, 0, 255);
$orange = imagecolorallocate($img, 255, 200, 0);
 
imagefill($img, 0, 0, $white);
 
imagepolygon($img, [$img_width*3/10, $img_height*2/10, $img_width*2/10, $img_height*5/10, $img_width*4/10, $img_height*5/10], 3, $red);

imagepolygon($img, 
	[
		$img_width*3/10, $img_height*2/10,
		190, 180,
		300, 180
	], 3, $red);

imagepolygon($img, 
	[
		230, 310,
		140, 310,
		180, 230

	], 3, $red);

imagepolygon($img, 
[
	300, 230,
	340, 310,
	250, 310

], 3, $red);

 
imagepng($img);