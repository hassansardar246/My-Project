import React, {useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = {
    responsive:{
      0:{
          items:1,
      },
      768:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
  
  }
  return (
    <div className="container about mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="about-h1">What They Think About Our Service</h1>
        </div>
        <div className="col-md-6">
          <p className=" about-p" style={{ color: "#76777D" }}>
            The following are the opinoins of customer who have used and
            experienced our services
          </p>
        </div>
      </div>
     
      <OwlCarousel loop margin={10} autoplay={true} {...values}
       >
    <div className='item about-item'>
            <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
</div>
    <div className='item about-item'>
    <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
    
          </div>

    <div className='item about-item'>
    <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
          </div>

    <div className='item about-item'>
    <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
          </div>
          <div className='item about-item'>
            <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
</div>
    <div className='item about-item'>
    <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
    
          </div>

    <div className='item about-item'>
    <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
          </div>

    <div className='item about-item'>
    <div className="about-table  ">
              <div className="about-header text-center ">
                
                <p><span style={{color:'#e25050'}}>"</span> A service that really help me to watch my favorite movies from various series that i always look forward to <span style={{color:'#e25050'}}>"</span></p>
                
             <img src="https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png?format=300w" className="mx-auto"
             style={{width:'100px'}} alt=""/>
             <h4>William Algris</h4>
             <p>Freelancer</p>
            </div>
          </div>
          </div>
</OwlCarousel>
    </div>
  );
};

export default About;
