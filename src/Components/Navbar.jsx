import React from 'react';
import './css/Navbar.css';
import './Js/Dropdown.js';
export default function Navbar(){
	return(
		<>
		<div className="navbar">
				<ul className="navbar-items-ul">
				<li><a href="/">Home</a></li>
				<li><a href="/">About</a></li>
				<li  id="service"><a href="/" className="target-drop">Services</a>
					<ul className="service-dropdown" id="dropdown-main">
						<li className="dropdown-stack">Web Development</li>
						<li className="dropdown-stack">App Development</li>
						<li className="dropdown-stack">Server Development</li>
						<li className="dropdown-stack">Computer Vision</li>

					</ul>
				</li>
				<li><a href="/">Info</a></li>
				<li><a href="/">Help</a></li>
				</ul>
		</div>

		</>
		)
}