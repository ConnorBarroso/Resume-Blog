import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { client } from '../../contentful/client'

import Post from '../post-component/post.component'

import './post-list.styles.scss'

const PostList = ()=> {
  const history= useHistory()
    const [posts, setPosts]=useState( [] )

    useEffect(()=> {
        client.getEntries()
        .then((Response)=>{
          setPosts(Response.items)
          console.log(Response)
          
        })
      },[])
      console.log(posts)
    
    const handleOnClick = (id)=>{
      history.push(`/article/${id}`)

    }
    return(
        <div className='post-list'>
            {
                posts?.map((post)=>{
                    return(
                      <div className='post' onClick={()=>handleOnClick(post.sys.id)}><Post key={post.sys.id} id={post.sys.id} post={post.fields} /></div>  
                    )
                    
                })
            }
        </div>
    )
}

export default PostList