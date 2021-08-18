import React from 'react'

import './header.styles.scss'

const Header = ({closeHeader})=>{
    return(
        <div className='header-con'>
            <button className='header-x' onClick={closeHeader}>x</button>
            <div className='items-con'>
                <div className='text-con'>
                <h1 className='text'>Welcome, I'm Connor Barroso.</h1>
                <p className='text'>
                    I am a React.js front end developer. I am building this blog to demonstrate my
                    portfolio and to show how my skills in development change and mature over my 
                    career.
                </p>
            </div>
            <div className='link-con'>
                <a href='https://ca.linkedin.com/in/connor-barroso-926513217?' target="_blank" rel="noreferrer"><img className='link-img' src='https://image.flaticon.com/icons/png/512/174/174857.png' alt='linkedin logo'/></a>
                <a href='https://github.com/ConnorBarroso' target="_blank" rel="noreferrer"><img className='link-img' src='https://image.flaticon.com/icons/png/512/38/38401.png' alt='github logo'/></a>
                <a href='mailto:connor.barroso@gmail.com' target="_blank" rel="noreferrer"><img className='link-img' src='https://img-premium.flaticon.com/png/512/2875/premium/2875435.png?token=exp=1628625935~hmac=bdc671bb9522426e0c25d1c317947507' alt='gmail logo'/></a>
            </div>
            </div>
            
            <img className='img' src='http://images.ctfassets.net/mh11o5zx6qwn/7tQhY0V6NEk3J0AvW80BHW/c1ef4a7639340c1328b7324b9725f833/profile-picture.jpg' alt='portrait' />
            
        </div> 
    )
   
}

export default Header