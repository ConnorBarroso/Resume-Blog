import React from 'react'

import './header.styles.scss'

const Header = ({closeHeader})=>{
    return(
        <div className='header-con'>
            <button className='header-x' onClick={closeHeader}>x</button>
            <div className='text-con'>
                <h1>Welcome, I'm Connor Barroso.</h1>
                <p>
                    I am a React.js front end developer. I am building this blog to demonstrate my
                    portfolio and to show how my skills in development change and mature over my 
                    career.
                </p>
            </div>
            <div className='img-con'><img className='img' src='http://images.ctfassets.net/mh11o5zx6qwn/7tQhY0V6NEk3J0AvW80BHW/c1ef4a7639340c1328b7324b9725f833/profile-picture.jpg' alt='portrait' /></div>
        </div> 
    )
   
}

export default Header