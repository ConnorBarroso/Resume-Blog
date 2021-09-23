import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../contentful/client'

import Post from '../post-component/post.component'
import { Image } from '../image-component/image.component'

import './home-page.styles.scss'

const Homepage = ()=>{
    const [posts, setPosts]=useState( [] )
    const [recentPosts, setRecentPosts]=useState( [] )
    const [works, setWorks]=useState( [] )

    useEffect(()=> {
        client.getEntries()
        .then((Response)=>{
          setPosts(Response.items)
          console.log(Response) 
            
        })
      },[])
    console.log('all posts',posts)
      

    useEffect(() => {
        setRecentPosts(posts.slice(0,2))
          console.log('recent posts', recentPosts)
    }, [posts])

    useEffect(() => {
        const filter = posts.filter(post => post.fields.tags.includes('Work'))
        setWorks(filter)
        console.log('works',works)
    }, [posts])

    return(
        <div className='homepage'>
            <div className='div-1'>
                <div className='intro-con'>
                <h1 className='intro'>Hi I'm Connor ,<br/> Your Front-end Developer</h1>
                <p className='intro-des'>I am a React.js front end developer. I am building this blog to demonstrate my portfolio and to show how my skills in development change and mature over my career.</p>
                <a className='resume-button'href='https://docs.google.com/document/d/1J1gie1sOwt2gH3p6SCPYE78fcxxri6Hv4fDzG8xBzhU/edit?usp=sharing' target="_blank" rel="noreferrer">View my Resume</a>
            </div>
            <img className='portrait' alt='portrait' src='https://scontent.fymq2-1.fna.fbcdn.net/v/t1.6435-9/203434578_1881649052014463_5108897948529942915_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0QHqg9ePrJ4AX98e8Xv&_nc_ht=scontent.fymq2-1.fna&oh=eff954bda5966441c9f770b45b6a5bf6&oe=61694E1D'/>
            </div>
            <div className='div-2'>
                <div className='recent-con'>
                    <div className='recent-text-con'>
                        <h2 className='recent-posts'>Recent posts</h2>
                        <Link className='view' to='/Blog/'>View all</Link>
                    </div>
                    <div className='preview-con'>
                                {
                                    recentPosts?.map((recentPost)=>{
                                        
                                        return(
                                            
                                            <Post
                                            key={recentPost.sys.id}
                                            id={recentPost.sys.id} 
                                            post={recentPost.fields} 
                                            sys={recentPost.sys}
                                            />
                                        
                                        )
                                    })
                                }
                        </div>
                </div>
            </div>
            <div className='div-3'>
                
                <div className='work-preview-con'>
                   <h2 className='featured'>Featured works</h2> 
                    {
                        works?.map((work)=>{
                            return(
                            <div className='work-con'>
                                <Image src={work?.fields?.imageMain?.fields?.file?.url}/>
                                <Post
                                key={work.sys.id}
                                id={work.sys.id} 
                                post={work.fields} 
                                sys={work.sys}
                            />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Homepage