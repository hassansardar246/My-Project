import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        
<footer className="text-center text-lg-start pt-2 mt-5 "> 
  <section className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
   
        <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 footer-header">
            Services
          </h6>
        <p>
            <Link className="footer-link" to={'/movies'}>Movies</Link>
          </p>
          {/* <p>
            <Link className="footer-link" to={'/'}>TV Channel</Link>
          </p> */}
          {/* <p>
            <Link className="footer-link" to={'/'} >Cinema Ticket</Link>
          </p> */}
          {/* <p>
            <Link className="footer-link" to={'/'} >Newsletter</Link>
          </p> */}
          {/* <p>
            <Link className="footer-link" to={'/'} >Blog Articles</Link>
          </p> */}
        </div>
       
        <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 footer-header">
            Information
          </h6>
          <p>
            <Link className="footer-link" to={'/SingUp'}>Sign Up</Link>
          </p>
          {/* <p>
            <Link className="footer-link" to={'/'}>Download App</Link>
          </p> */}
          <p>
            <Link className="footer-link" to={'/pricing'} >Choose Plan</Link>
          </p>
          {/* <p>
            <Link className="footer-link" to={'/'} >Pay Method</Link>
          </p> */}
        </div>
        
        <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4 footer-header">
            Company
          </h6>
          {/* <p>
            <Link className="footer-link" to={'/'} >PatnerShip</Link>
          </p> */}
          <p>
            <Link className="footer-link" to={'/'} >Terms of Use</Link>
          </p>
          <p>
            <Link className="footer-link" to={'/about'} >About</Link>
          </p>
          <p>
            <Link className="footer-link" to={'/pricing'} >Pricing</Link>
          </p>
          <p>
            <Link className="footer-link" to={'/about'} >Contact</Link>
          </p>
        </div>
        
        <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text=light ">
         
          <h6 className="text-uppercase fw-bold mb-4 footer-header">Get In Touch</h6>
          <p>Stay Connected with us and let's know more stories about new movies and More Explorer Us for get it</p>
          <div className='mt-4'>
      <Link className="footer-link  mx-2  footer-icons" to={'/'} >
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link className="footer-link mx-2 footer-icons" to={'/'} >
        <i className="fab fa-twitter"></i>
      </Link>
      
      <Link className="footer-link mx-2 footer-icons" to={'/'} >
        <i className="fab fa-instagram"></i>
      </Link>
      <Link className="footer-link mx-2 footer-icons" to={'/'} >
      <i className="fa-brands fa-pinterest-p"></i>
      </Link>
    </div>
        </div>
        
      </div>
    
    </div>
  </section>
</footer>

    </div>
  )
}

export default Footer