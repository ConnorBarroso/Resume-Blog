import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MobileHeader } from '../mobile-header-component/mobile-header.component'

import {ReactComponent as ReactLogo} from './header-symbol.svg'

import './header.styles.scss'

const Header = ()=>{
    const [menuToggle, setMenuToggle] = useState(false)
    const location= useLocation()
    const url = location.pathname

    

    
    return(
        <div className='header-con'>
            <div className='link-con'>
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
            
            
            
            
            { menuToggle ? (<MobileHeader toggle={setMenuToggle}/>)
            :(<ReactLogo className='menu-button' onClick={()=>setMenuToggle(true)}/>)
             }
           
            
        </div> 
    )
   
}

export default Header