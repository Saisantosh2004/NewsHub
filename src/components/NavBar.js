import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class NavBar extends Component {
  changeBg=(e)=>{
    // e.classList.add('bg-red');
    e.target.classList.add('text-warning');
  }
  oldBg=(e)=>{
    e.target.classList.remove('text-warning');
  }
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand mx-2" to="/">NewsMonkey</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mx-2">
                        <li className="nav-item active" aria-current='page'><Link className="nav-link " to="/home" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}>Home</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link  className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link  className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link  className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link  className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item" onMouseLeave={this.oldBg} onMouseOver={this.changeBg}><Link  className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </nav>
      </div>
    )
  }
}

export default NavBar
