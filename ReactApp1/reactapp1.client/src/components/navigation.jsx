import { Link, Outlet } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">SG React Web Site</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/sreevanigaddam/MyFirstAngularApp1" target="_blank" rel="noopener noreferrer">Link(App source code)</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Market Data
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/currency">Currency</Link>
                                <Link className="dropdown-item" to="/another-action">Rates</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/something-else">...</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                    </form>
                </div>
            </nav>
            <div className="container" style={{ marginTop: '70px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Navigation;


