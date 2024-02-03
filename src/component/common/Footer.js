import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="footer_section">
      <Container className='py-4 text-center'>
        <div className="flex align-center justify-center text-white fw-3 fs-14">
        <div className="footer-flex">
                <Link to="/" className='footer-link text-uppercase'>Privacy Policy</Link>

               
                <li className='vert-line'>|</li>
               
                <Link to="/" className='footer-link  text-uppercase'>Term Of Service</Link>
                <li className='vert-line'>|</li>
               
               <Link to="/" className='footer-link  text-uppercase'>About L&P StoreUp.</Link>
</div>
               <span  className='footer-copyright text-white fw-3 fs-14'>& 2023 L&P StoreUp. All Rights Reserved </span>
        </div>
      </Container>
    </footer>
    </>
  )
}

export default Footer