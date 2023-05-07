import React from 'react'
import featureItems from './featureItems'
import {Link} from 'react-router-dom'

const featureDropdown = () => {
    return (
        <>
           <ul className='dropdown_menu' >
            {featureItems.map((item) => {
                return(
                    <li key={item.id}>
                        <Link to={item.path}  className={item.cName}  onClick={() => null}
                           >
                          {item.icon}  {item.text}
                        </Link>
                    </li>
                );
            })}
          </ul>


{/* <li className="dropdown-item">
    
      <img src={props.icon} alt={props.text} />
      <a href="#">{props.text}</a>
    </li> */}
        </>
      )
}

export default featureDropdown
