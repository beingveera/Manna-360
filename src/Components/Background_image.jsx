import React from 'react';
import './css/Background_image.css';
import image from './Image/tree.jpg'
export default function Background_image(){
	return(
		<>

			<div class="header-background">
				<img src={image} class="main-image" />
			</div>


		</>
		)
}