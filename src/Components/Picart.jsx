import React from 'react';
import './css/Picart.css';
import Banner from './Data/Banner_Data.js';

export default function Picart(){
	return(
		<>
			<div className="picart-outer">
				<div className="picart-inner">
					{
						Banner.map((item,index)=>{
							return(
								<>
									<div className="picart-row">
									<img src={item.Logo} style={item.LogoStyle} className="picart-row-logo"/>
										<p className="picart-row-p" style={item.AdsStyle}>{item.ads}</p> 
										<p className="picart-row-title" style={item.titleStyle}>{item.title}</p>
										<img src={item.Image} alt="lokehs" className="banner-image"/>
										<button className="picart-row-button" style={item.style}>Order Now</button>

									</div>
								</>
								)
						})
						
					}
				</div>
			</div>

		</>
		)
}