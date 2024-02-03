
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaQuestionCircle} from "react-icons/fa"
import Navbar from './Navbar'
const Header = () => {
   return (
    <>
    <header className='header text-white '>
    <Container>
        <div className="header-cnt">
            <div className="header-cnt-top fs-13  flex align-center justify-between">
            <div className="header-cnt-top-1">
                <ul className='flex align-center header-items'>
                <li>
                <Link to="/sellet" className='header-link'>Sellet Center</Link>

                </li>
                <li className='vert-line'>|</li>
                <li>
                <Link to="/sellet" className='header-link'>Download</Link>

                </li>
                <li className='vert-line'>|</li>
                <li className='header-social-link' >
                <span  className='header-link'>Follow us on </span>
                <ul className='header-social-link'>
                   <li className=' '>
                   <a href="/facebook" className='header-link'>
                        <FaFacebook className="header-icon"/>
                    </a>
                   </li>
                   <li className=''>
                   <a href="/instagram" className='header-link'>
                        <FaInstagram className="header-icon"/>
                    </a>
                   </li>
                </ul>
               

                </li>
                </ul>
            </div>
            <div className="header-cnt-top-right">
                <ul className='flex align-center header-items'>
                <li>
                <Link to="/sellet" className='header-link'> 
                <FaQuestionCircle className="header-icon"/>
                </Link>

                </li>
                <li className='vert-line'>|</li>
                <li>
                <span  className='header-link'> Support </span>

                </li>
                <li className='vert-line'>|</li>
                <div className='profile'>
                            {/* <div className="profile__actions" >
                               
                                        <span>Logout</span>
                                  
                                        <div className='d-flex align-items-center justify-content-center flex-column'>
                                            <Link to='/signup'>Signup</Link>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/dashboard'>Dashboard</Link>
                                        </div>
                                   
                            </div> */}
                        </div>
                <li>
                <Link to="/registed" className='header-link'>Registed</Link>

                </li>
                <li className='vert-line'>|</li>
                <li>
                <Link to="/login" className='header-link'>Log In</Link>

                </li>
                <li>
                <Link to="/user" className='header-link'>User</Link>

                </li>
                <li>
                <Link to="/phone-verify" className='header-link'>Phone Verify</Link>

                </li>
                </ul>
            </div>


            </div>
            <div className="header-cnt-bottom">
            <Navbar/>
            </div>
        </div>
    </Container>

    </header>
    </>
  )
}

export default Header