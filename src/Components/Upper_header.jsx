import React from 'react';
import './css/Upper_header.css';
export default function Upper_header(){
	return(
		<>
		<div class="main-header">
			<h5 class="main-header-h6">Manna <span class="main-header-span">360</span></h5>
			<div class="main-header-sidebar">
				<button class="main-header-sidebar-btn1"><img src="https://img.icons8.com/ios-glyphs/20/000000/user--v1.png"/>New User</button>
				<button  class="main-header-sidebar-btn2"><img src="https://img.icons8.com/ios-glyphs/20/000000/lock--v1.png"/>Login</button>
			</div>
		</div>

		</>
		)
} 