import React, { useState, useEffect } from 'react'
import { client } from '../../contentful/client'
import Post from '../post-component/post.component'
import { Image } from '../image-component/image.component'

import './works-page.styles.scss'

const Workspage = ()=>{
    const [posts, setPosts]=useState( [] )
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
        const filter = posts.filter(post => post.fields.tags.includes('Work'))
        setWorks(filter)
        console.log('works',works)
    }, [posts])


    return(
        <div className='works-page'>
            <h1 className='works'>Work</h1>
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
    )
}

export default Workspage