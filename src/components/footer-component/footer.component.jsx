import React from 'react'
import LinkedinLogo from '../../resources/linkedin.svg'

import './footer.styles.scss'


const Footer = ()=>{
    return (
        <div className='footer-con'>
            <div className='link-con'>
                <a href='https://ca.linkedin.com/in/connor-barroso-926513217?' target="_blank" rel="noreferrer"><img className='link-img' src={LinkedinLogo} alt='linkedin logo'/></a>
                <a href='mailto:connor.barroso@gmail.com' id='margin-left' target="_blank" rel="noreferrer"><img className='link-img' src='https://scontent.fymq2-1.fna.fbcdn.net/v/t1.15752-9/241903693_257948099520310_8324435721388279776_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gSBlGuCeclUAX9VAPOr&tn=WP8ApEKM8L91Iq-F&_nc_ht=scontent.fymq2-1.fna&oh=4f51b4006549720057d0cc27a7c25a33&oe=61686633' alt='email logo'/></a>
                <a href='https://github.com/ConnorBarroso' id='margin-left' target="_blank" rel="noreferrer"><img className='link-img' src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-3.png&r=33&g=36&b=61' alt='github logo'/></a>
            </div>
            <div className='copy-con'>Design by Tinjo Thomas</div>
        </div>
    )
}

export default Footer