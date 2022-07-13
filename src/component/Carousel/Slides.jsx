import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import img1 from '../../images/Conversational-Challenges-in-Healthcare-Institutions.png'

import img2 from '../../images/Male_Doctor-512.png'
import img3 from '../../images/370-3702952_1507481184696-medical-diagnosis-png-clipart.png'
import img4 from '../../images/chatbot-health-care-300x300.png'

function Slides() {
  return (
    <div className='"container-fluid" '>
    <Carousel  className=" car">
      <Carousel.Item className="ms-5 mt-5">
        <div className="pm">
          
            <h1 className="om">Online Diagnostics</h1><p> Our service offers you many
            advantages.. <br></br>Like providing you with a robotic doctor
            <br></br> It displays a list of symptoms that you<br></br>can choose from and provides you with <br></br>the necessary diagnosis <br>
            </br>and more information as well.<br></br>
            <Link className="cha" to={'/prediction'}>check now</Link>
          </p>
        </div>
        <img
          src={img1}
          className="d-block center"
          alt="...."
        />
      </Carousel.Item>

      <Carousel.Item className="ms-5 mt-5">
        <div className="pm">
          
            <h1 className="om">Online Doctor</h1><p> You can also open a session
            with a real doctor... <br></br>through our service<br></br>without
            the need to make an effort.<br></br>{" "}
            <Link className="cha" to={'/cha'}>Make session</Link>
          </p>
        </div>
        <img
          src={img2}
          className="d-block xim  center1"
          alt="...."
        />
      </Carousel.Item>

      <Carousel.Item className="ms-5 mt-5">
        <div className="pm">
          
            <h1 className="om">Online Appointment</h1> <p>We show you some of the
            best doctors<br></br> in all fields ... <br></br>You can communicate
            and<br></br> book an appointment with them.<br></br>{" "}
            <Link className="cha" to={'/cha'}>Have Appointment</Link>
          </p>
        </div>
        <img
          src={img3}
          className="d-block  center2"
          alt="...."
        />
      </Carousel.Item>

      <Carousel.Item className="ms-5 mt-5">
        <div className="pm">
          
            <h1 className="om">Online First Aid</h1> <p>You can get information on
            first aid.. <br></br> help people with your self,<br></br> and save
            their lives.<br></br> <Link className="cha" to={'/firstaid'}>Have Help</Link>
          </p>
        </div>
        <img
          src={img4}
          className="d-block  xi   center3"
          alt="...."
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default Slides;
