import React from 'react'
import CompanyItems from './CompanyItems'
import { Link } from 'react-router-dom'

const CompanyDropdown = () => {
  return (
    <>
      <ul className='company_dropdown'>
        {CompanyItems.map((item)=>{

            return(
                <li key={item.id}>
                  <Link to={item.path} className={item.cName} onClick={() => null}>
                    {item.text}
                  </Link>
                </li>
            )
        })}

      </ul>
    </>
  )
}

export default CompanyDropdown
