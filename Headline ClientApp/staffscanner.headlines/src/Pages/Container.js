import React from "react";

export default function Container(props) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark-new">
                    <a className="navbar-brand" href="/">
                        News Headlines
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home <span className="sr-only"></span>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <form className="form-inline mt-2">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success" type="submit">
                                Search
                            </button> */}
                        </form>
                    </div>
                </nav>
            </header>

            <div className="container container-main">{props.children}</div>

            <footer className="footer">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <span className="text-muted">StaffScanner News Headlines Challenge Inc.</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
