import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {ReactComponent as ReactLogo} from './iconmonstr-angel-right-thin.svg'

import './mobile-header.styles.scss'
export const MobileHeader = ({toggle})=>{

    const location= useLocation()
    const url = location.pathname

    const handleOnClick =()=>{
        toggle(false)
    }

    
    
    return(
       
        <div className='mobile-link-con'>
            <div className='close' onClick={()=>handleOnClick()}><ReactLogo/></div>
                <div className='text-con'>
                  {
                url.includes('/Home/') ?
                (<Link  className='header-link-active' to='/Home/' onClick={()=>handleOnClick()}>Home</Link>)
                : (<Link  className='header-link' to='/Home/' onClick={()=>handleOnClick()} >Home</Link>)
                }

                {
                url.includes('/Works/') ?
                (<Link  className='header-link-active' to='/Works/' onClick={()=>handleOnClick()}>Works</Link>)
                : (<Link  className='header-link' to='/Works/' onClick={()=>handleOnClick()}>Works</Link>)
                }

                {
                url.includes('/article/') || url.includes('/Blog/') ?
                (<Link  className='header-link-active' to='/Blog/' onClick={()=>handleOnClick()}>Blog</Link>)
                : (<Link  className='header-link' to='/Blog/' onClick={()=>handleOnClick()}>Blog</Link>)
                }  
                </div>
                 

            </div>
    )
}