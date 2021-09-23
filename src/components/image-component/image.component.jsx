import React from 'react'

import './image.styles.scss'

export const Image = (src)=>{
    //passing src into this component makes it an object for some reason
    
    return(
        <div className='img-con'>
            <img className='img' src={src.src} alt={src.alt}/>
        </div>
    )
}