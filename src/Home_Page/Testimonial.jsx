import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faQuoteLeft,faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll';
function Testimonial() {
  let [testimonial,setTestimonial] = useState(
    [
      {
        name : "Mr.",
        address : "Chennai , Tamilnadu",
        comment : "We managed everything using spreadsheets but it was not practical after 3 months. OrderHub helped us streamline and organize our business. Mobile app is very helpful as you can keep track of your customer requests even when you're travelling.",
        image : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg"
      },
      {
        name : "Mr.George Maker",
        address : "Bengaluru , Karnataka",
        comment : "A great system. It has resolved all bottlenecks for small-medium business. Every step has been taken care of. We can finally focus on the market without wasting time on day to day paperwork,Thank You very much for OrderHub to launch this application and site. ",
        image : "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201906/anil_ambani_rg_660_061719030020.jpg"
      },{
        name : "Ms.Madonna Sebastian",
        address : "Palakkad,Kerala",
        comment :"Thanks to the OrderHub's Inventory team for this wonderful system.Our stock management become much better after using OrderHub.It has made automation so much simpler.Now, OrderHub's support team adds to my peace of mind. Thanks again for this wonderful software.",
        image : "https://images.indianexpress.com/2016/02/madonna-sebastian-premam-480.jpg"
      }
    ]
  );
  return <>
  <Element name="testimonial" className='testimonial_page'>
    <h3>Testimonials</h3>
    <div className='testimonial_container'>
    {
        
          testimonial.map((e,i)=>{
            return <div key={i} className='testimonials' >
              <div className='testimonial_stars'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
              </div>
              <div className='testimonial_content'>
                  <p><sup><FontAwesomeIcon icon={faQuoteLeft} /></sup>{e.comment}<sup><FontAwesomeIcon icon={faQuoteRight} /></sup></p>
                  <img src={e.image} />&nbsp;&nbsp;&nbsp;
                  <div>
                    <h6>{e.name}</h6>
                    <p>{e.address}</p>
                  </div>
              </div>
            </div>
          })  
        
    }
    </div>
      
  </Element>
  </>
}

export default Testimonial