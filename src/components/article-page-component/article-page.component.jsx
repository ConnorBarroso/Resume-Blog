import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router'
import { client } from '../../contentful/client'

import { opts } from '../post-component/opts'
import { Image } from '../image-component/image.component'


const ArticlePage = ()=>{
    const id =useParams().id
    console.log(id)

    const [article, setArticle] = useState( [] )

    useEffect(()=>{
        client.getEntry(id)
        .then((response)=> {
            console.log(response) 
            setArticle(response)
        })
        .catch(console.error)
    },[])
    
    
    
    const post = article.fields
    const videoId = post?.youtubeVideoId

    return(
        <div className='post-con'>
            <h1 className='title'>{post?.title}</h1>
            <div className='media-con'>
               {post?.image && <div className='img-com-con'><Image src={post.image.fields.file.url} /></div> }
            {post?.album && 
                post.album?.map((image)=>(
                    <div className='img-com-con' ><Image key={image.sys.id} src={image.fields.file.url} /></div>
                    
                    
                ))} 
                {videoId && (<YouTube vi opts={opts} videoId={videoId}/>)}
            </div>
            
            

            {
               typeof post?.text =='string' ? (<div className='textbox' >{post.text}</div>)

               :(
                   post?.text?.content?.map((textBox, index)=>(
                       <div key={index} className='textbox'>{textBox.content[0].value}</div>
                   ))
               )
            }

            

 
        </div>
    )
}

export default ArticlePage