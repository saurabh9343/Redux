import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

   const cartdata =useSelector((state)=>state.cartData);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary text-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-dark" href="#">Navbar</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                        </ul>

                        {/* Badge */}
                        <span
                            className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mx-3"
                            style={{ width: "30px", height: "30px", fontSize: "14px" }}
                        >
                           {cartdata.length}
                        </span>

                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
