import React from 'react';
import './css/About.css';
import AboutData from './Data/About_Data.js';

export default function About(){
	return(
		<>
		<div class="about">
		<div class="about-main">
			<h5 class="about-main-h5">About Us</h5>
			<div class="about-main-section">
				{
					AboutData.map((item,index)=>{
						return(
							<>
							<div class="about-main-section-box">
								<h5>{item.tag}</h5>
								<p>{item.Outline}</p>
							</div>

							</>
							)
					})
				
				}
			</div>
		</div>
	</div>

		</>
		)
}