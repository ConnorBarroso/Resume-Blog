import React, { useState, useEffect } from 'react'

import { client } from '../../contentful/client'

import Post from '../post-component/post.component'

import './post-list.styles.scss'

const PostList = ()=> {
  
    const [posts, setPosts]=useState( [] )
    

    useEffect(()=> {
        client.getEntries()
        .then((Response)=>{
          setPosts(Response.items)
          console.log(Response) 
          
          
          
        })
      },[])
      console.log(posts)
    


    return(
        <div className='post-list'>
          <h1 className='title'>Blog</h1>
            {
                posts?.map((post)=>{
                    return(
                      <div className='post' >
                        <Post
                         key={post.sys.id}
                         id={post.sys.id} 
                         post={post.fields} 
                         sys={post.sys}
                        />
                      </div>  
                    )
                    
                })
            }
        </div>
    )
}

export default PostList