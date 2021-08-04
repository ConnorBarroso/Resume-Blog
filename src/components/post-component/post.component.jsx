import React from 'react'
import YouTube from 'react-youtube'
import { opts } from './opts'
import { Image } from '../image-component/image.component'

import './post.styles.scss'


const Post = ({post})=> {
    // post = post.fields 
    
    
    const videoId = post?.youtubeVideoId

    return(
        <div className='post-con'>
            <h1 className='title'>{post?.title}</h1>
            {post.image && <div className='img-com-con'><Image src={post.image.fields.file.url} /></div> }
            {post.album && 
                post.album?.map((image)=>(
                    <div className='img-com-con' ><Image key={image.sys.id} src={image.fields.file.url} /></div>
                ))}
            {videoId && (<YouTube vi opts={opts} videoId={videoId}/>)}

            {
               typeof post.text =='string' ? (<div className='textbox' >{post.text}</div>)

               :(
                   post.text?.content?.map((textBox, index)=>(
                       <div key={index} className='textbox'>{textBox.content[0].value}</div>
                   ))
               )
            }

            

 
        </div>
    )
}


export default Post