import React,{useEffect} from 'react'

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className='pricing-main'>
<div className='container-fluid pricing'>

    <div className='pricing p-0 m-0'>
        <h1 className='position-absolute top-50 start-50 translate-middle fw-bold'>
              About Us
        </h1>
    </div>
</div>
    </div>

    <div className="container  about-text ">
        <h1 className='text-center' style={{color:'#e25050'}}>
            Why Us?
        </h1>
        <p className='about-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem. Modi quibusdam recusandae quam sint totam ipsum laborum perferendis, porro enim quidem aliquid?
        </p>
        <div className="container mt-5 text-center">
            <div className="row">
                <div className="col-md-4 mt-5  text-uppercase about-col">
                    <h4 className='fw-bold'>Great Experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita autem cupiditate dicta necessitatibus laudantium iusto provident odio magni animi?</p>
                </div>
                <div className="col-md-4 mt-5  text-uppercase about-col">
                    <h4 className='fw-bold'>Dedicated team</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita autem cupiditate dicta necessitatibus laudantium iusto provident odio magni animi?</p>
                </div>
                <div className="col-md-4 mt-5  text-uppercase about-col">
                    <h4 className='fw-bold'>Flexible pricing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita autem cupiditate dicta necessitatibus laudantium iusto provident odio magni animi?</p>
                </div>
            </div>
        </div>
        <div className="container">
            <h2 className='text-uppercase text-center mt-5 fw-bold' style={{color:'#e25050'}}>Get in Touch</h2>
            <div className="row mt-5">
                <div className="col-md-6">
    <h4 className='fw-bold'>Ready To get Started?</h4>
    <p className='contact-p mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni nemo minus corrupti. Mollitia, tempore velit. Qui molestias voluptates suscipit?</p>
    <div className="row mt-5">
        <div className="col-sm-6 ">
            <h4 className='contact-h4'>
            Call Us
            </h4>
            <p className='contact-no'>+954849432</p>
        </div>
        <div className="col-sm-6">
            <h4 className='contact-h4'>Email Us</h4>
            <p className='contact-no'>support@gmail.com</p>
        </div>
    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <input className='contact-input' type="text" placeholder='First Name'/>
                        </div>
                        <div className="col-md-6">
                            <input className='contact-input' type="text" placeholder='Last Name'/>
                        </div>
                    </div>
                    
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <input className='contact-input' type="email" required placeholder='Email'/>
                        </div>
                        <div className="col-md-6">
                            <input className='contact-input' type="text" required placeholder='Service'/>
                        </div>
                </div>
                <div className="textarea mt-5">
                    <textarea name="" id=""  className='w-100' required placeholder='Write your Message' rows="5"></textarea>
                </div>
                <button className="btn_movie mx-0">Send</button>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage