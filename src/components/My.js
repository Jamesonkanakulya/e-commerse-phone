import React from 'react'
import { FaGlobe, FaRegEnvelope ,FaPhoneAlt,FaMapMarkerAlt,FaMinus, } from "react-icons/fa";
import sancorp from '../images/sancorp.PNG'

function My() {

    
    return (
        <div className="container" >

           <div className="footerhead">
           {/* <FaMinus width="900" className="minusone"/> */}
           <div className="sancorp">

             <img src={sancorp} alt="SANCORP" />
           </div>
        
           </div>
            {/* <FaMinus className="minustwo"/> */}
            <div className="row">



        
           
            <div className="col-lg-2">
            <div className="my" style={{marginTop:'.0rem'}}>
                <span>
               Registered and licensed as a
                FREEZONE company under the Rules & Regulations of DMCC
              </span>

            </div>      
          </div>


        
            <div className="col-lg-4">
            <div className="my">
              <FaMapMarkerAlt   className="icons"/>
                <span>
               Unit 46E | Almas Tower | Jumeirah Lakes Towers
               PO Box 125938 | Dubai,UAE

              </span>

            </div>      
          </div>


           
            <div className="col-lg-2">
            <div className="my">
              <FaPhoneAlt  className="icons"/>
                <span>
                +971 4 878 362

              </span>

            </div>      
          </div>


           
            <div className="col-lg-2">
            <div className="my">
              <FaGlobe className="icons"/>
                <span>
                www.sancorpgroupltd.com

              </span>

            </div>      
          </div>


            <div className="col-lg-2">
            <div className="my">
            <FaRegEnvelope  className="icons" />
                <span>
              info@sancorp.com

              </span>

            </div>      
          </div>
      
       
           
         
            
        </div>

        </div>
    )
}

export default My
