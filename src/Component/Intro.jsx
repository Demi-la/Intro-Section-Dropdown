import React from "react";
import "./Intro.css"
import databiz from '../Assets/client-databiz.svg'
import audio from '../Assets/client-audiophile.svg'
import meet from '../Assets/client-meet.svg'
import maker from '../Assets/client-maker.svg'
import image from '../Assets/image-hero-desktop.png'
import Nav from "./Nav/Nav";



const Intro = () => {
   
    
    // const[
    //     openCompany,

    //      setOpenCompany
    //     ] = useState()


    // const companyItems = [
    //     {text: "History"},
    //     {text: "Our History"},
    //     {text: "Blog"},
    // ]
    return (
     <>
     <div className="section">
     
        <Nav/>

     <div className="body">
        <div className="body_container">
            <div className="left_side">
                <h1>Make <br/>remote work</h1>
                <p> Get your team in sync, no matter your location.<br/>
                    Streamline processes, create team rituals, and<br/> watch productivity soar. Learn more</p>
                    <button>Learn more</button>

             <div className="footer">
            <img src={databiz} alt='logo'/>
            <img src={audio} alt='logo'/>
            <img src={meet} alt='logo'/>
            <img src={maker} alt='logo'/>
            </div>
            </div>
            
         
            <div className="right_side">
            <img src={image} alt='logo'/>
            </div>
        </div>
     </div>

     </div>
     </>
    )
}

export  default Intro;