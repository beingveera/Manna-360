import React from 'react';
import './css/Seller.css'
import Donet from './Data/Donet_Data.js';
export default function Seller(props){
	return(
		<>
			<div className="seller" style={props.style}>
				<div className="seller-header">
					<h5>Best Seller</h5>
					<img src={props.logo} className="logo" style={props.logoStyle}/>
					<div className="scroller">
							<span className="left-scroller">&lt;</span>
							<span className="right-scroller">&gt;</span>
					</div>
				</div>

				<div className="seller-card-section">
				{
					props.Data.map((item,index)=>{
						return(
							<>

							<div className="seller-card" style={props.cardStyle}>
								<img src={item.imag} alt="image can`t Open" className="donet-item"/>
								<p className="product-name">{item.Name}</p>
								<p className="product-price">Price :- {item.price}</p>
								<hr />
								<div className="panigation">
									<div class="panigation-count">
										<button className="plus">+</button>
										<span className="product-count">0</span>
										<button className="minus">-</button>
									</div>
									
									<div className="cart-container">
										<button><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"/></button>
									</div>
								</div>
								


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