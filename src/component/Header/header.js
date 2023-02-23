import React from 'react'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

function header() {
    return (
        <header id="header" className="header">
            <div className="header-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <Link to='/' className="navbar-brand">
                            <img src="assets/img/logo.png" alt="" className="main-logo" />
                        </Link>
                        <button className="navbar-toggler x" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="nav navbar-nav ml-auto">
                                {/* <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle active" to='/'>Home</Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item active"> <Link to='/'>Home 1</Link></li>
                                        <li className="dropdown-item"><Link to='/home_Page_2'>Home 2</Link></li>
                                    </ul>
                                </li> */}
                                    
                                <NavDropdown title="Home" id="basic-nav-dropdown active" >
                                    <NavDropdown.Item ><Link to='/'>Home 1</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to='/home_page_2'>
                                        Home 2
                                    </Link>
                                    </NavDropdown.Item>                           
                                </NavDropdown>


                                <li className="nav-item"><Link className="nav-link" to='/aboutUs'>About Us </Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/services'>Services</Link></li>
                                {/* <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" to='/blog'>Blog</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to='/blog'>Blog 1</Link></li>
                                        <li><Link className="dropdown-item" to='/blog_2'>Blog 2</Link></li>
                                    </ul>
                                </li> */}


                                <NavDropdown title="Blog" id="basic-nav-dropdown">
                                    <NavDropdown.Item ><Link to='/blog'>Blog 1</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to='/blog_2'>
                                        Blog 2
                                    </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>




                                <li className="nav-item"><Link className="nav-link" to='/contact'>Contact</Link></li>
                                {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                        <li><Link className="dropdown-item" to='error'>404</Link></li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">More...</a>
                                            <ul className="dropdown-menu child-submenu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                <li><a className="dropdown-item" href="#">One more link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                                      
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item ><Link to='/blog_details'>Blog Details</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to='/error'>404</Link></NavDropdown.Item>
                                    {/* <NavDropdown.Item><Link to='#'>
                                    <NavDropdown title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to='#'>Action</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to='#'>Another Action</Link></NavDropdown.Item>
                                        </NavDropdown> </Link>     
                                    </NavDropdown.Item> */}
                                </NavDropdown>
                               
                            





                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
       
    )
}

export default header