import React from 'react'
import { useState } from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import logo from '../../Assets/logo.svg'
import FeatureDropdown from "../../Component/Dropdown/Features/featureDropdown"
import CompanyDropdown from '../Dropdown/Company/CompanyDropdown'
import '../Nav/Nav.css'

const Nav = () => {

    const[openFeatures, setOpenFeatures] = useState(true);
    const featuresMenu = () => {
        setOpenFeatures(!openFeatures);
        
      };

    const [openCompany, setOpenCompany] = useState(true)
    const companyMenu = () => {
        setOpenCompany(!openCompany);
    };

  return (
    <>
     <div className="container">
            <nav>
                <img src={logo} alt='logo'/>
                <div className="navbar">
                <div className="list_items">
                <ul>
                    <li  onClick={() => featuresMenu()}>
                        
                        <div>
                            <p  classname="nav-list">Features <MdKeyboardArrowDown className="icon"/></p>
                        </div>
                        {!openFeatures ? (
                       <div>
                           <FeatureDropdown/>
                       </div> 
                ) : (
                   false
                    )}
                    
                    </li >
                    <li  onClick={() => companyMenu()}>
                        
                        <div>
                         <p  classname="nav-list"> Company <MdKeyboardArrowDown className="icon"/></p>
                        </div>
                        {!openCompany ? (
                            <div>
                                <CompanyDropdown/>
                            </div>
                        ) : (
                            false
                        )}

                        </li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
                </div>

                <div className="register">
                    <ul>
                        <li>Login</li>
                    </ul>
                    <button className="btn">Register</button>
                </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Nav
