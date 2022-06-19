import './Navbar.css';
import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <div className="container pt-1 pb-1">
                <div className="text-end">
                    <a href="" className='pe-3 ' style={{ borderRight: "1px solid lightgrey", color: "#666666", fontSize: "14px" }} >Marketplace</a>
                    <a href="" className='ps-3 pe-3' style={{ borderRight: "1px solid lightgrey", color: "#666666", fontSize: "14px" }}>Help & FAQs</a>
                    <img src="https://bit.ly/3tJ6TdC" className='ms-3' style={{ width: "15px", height: "15px", borderRadius: "50%", verticalAlign: "middle" }} alt="" />
                </div>
            </div>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbackground">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a className="display-4 text-white logo pe-3 " href="/">asos</a>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                            <ul className="navbar-nav mb-lg-0 ">
                                <li className="nav-item navText">
                                    <a className="nav-link text-white " href="/womens">WOMEN</a>
                                </li>
                                <li className="nav-item navText">
                                    <a className="nav-link text-white " href="/mens">MEN</a>
                                </li>
                            </ul>

                            <div className="input-group">

                                <input className="form-control ms-4 inputarea" type="search" placeholder="Search for items and brands" aria-label="Search" />
                            </div>
                            <div className='diff-sym'>
                                <Link to = "/signup"><i class="fa-regular fa-user symb ms-4"></i></Link>
                                <i class="fa-regular fa-heart symb ms-4"></i>
                                <i class="fas fa-shopping-cart ms-4" style={{color:"white"}}></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            
            <div className='bottom'>
                <div className='container bottom_content'>

                <div className='row'>

                    <div className='col-lg-4 tag'>
                        <button >WOMEN</button>
                    </div>

                    <div className='col-lg-4 text-center '>
                        <strong className='dsc-text '>SALE: UP TO 70% OFF! <br/> IT'S CALLED BIG DISCOUNT ENERGY
                                 
                        </strong>
                    </div>

                    <div className='col-lg-4  text-end tag'>
                        <button className='me-5'>MEN</button>
                    </div>
                </div>
                </div>


            </div>

        </div>
    )
}