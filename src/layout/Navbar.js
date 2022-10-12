import React from "react";

import logo from "../assets/logo.png";

const Navigation = () => {
    return(
        <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:"#A1D6E2"}}>
        <div class="container">
          <a class="navbar-brand" style={{marginLeft: "100px"}} href="#"><img src={logo}  style={{width:"50px", height: "50px"}}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">VIH / SIDA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">IST</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">TUBERCULOSE</a>
              </li>
               <li class="nav-item">
                <a class="nav-link ms-5" href="#"><i className="bi bi-search"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation ;