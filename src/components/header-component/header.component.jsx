import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import './header.styles.scss'

const Header = ()=>{
   const location= useLocation()
    const url = location.pathname
    return(
        <div className='header-con'>
            {
                url.includes('/Home/') ?
                (<Link  className='header-link-active' to='/Home/'>Home</Link>)
                : (<Link  className='header-link' to='/Home/'>Home</Link>)
            }
            {
                url.includes('/Works/') ?
                (<Link  className='header-link-active' to='/Works/'>Works</Link>)
                : (<Link  className='header-link' to='/Works/'>Works</Link>)
            }
            {
                url.includes('/article/') || url.includes('/Blog/') ?
                (<Link  className='header-link-active' to='/Blog/'>Blog</Link>)
                : (<Link  className='header-link' to='/Blog/'>Blog</Link>)
            }
            
            
        </div> 
    )
   
}

export default Header