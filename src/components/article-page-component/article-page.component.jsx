import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router'
import { client } from '../../contentful/client'

import { opts } from '../post-component/opts'
import { Image } from '../image-component/image.component'


import './article-page.styles.scss'


const ArticlePage = ()=>{
    const id =useParams().id

    const [articleInfo, setArticleInfo] = useState( [] )
    

    useEffect(()=>{
        client.getEntry(id)
        .then((response)=> { 
            setArticleInfo(response)
            console.log(response)
           
        })
        .catch(console.error)
    },[])

    const hyperlinkFilter =()=>{
       const filter = article?.links?.content[0]?.content.filter(
           test=>//test is an item in the array
            test.nodeType === "hyperlink"
        )

        console.log('filter',filter)
        
        
        return filter

        
    }
    
    const article = articleInfo.fields
    
    const videoId = article?.youtubeVideoId
    

    const links = hyperlinkFilter()
    
    return(
        <div className='article-con'>
            <h1 className='title'>{article?.title}</h1> 

            {article?.description && 
                <div className='description'>
                    {article.description}
                </div>
            } 

            {
                <div className='media-con'>

               {article?.image && 
                    <div className='img-com-con'>
                        <Image src={article.image.fields.file.url} />
                    </div> 
                }

            {article?.album && 
                article.album?.map((image)=>(
                    <div className='img-com-con' key={image.sys.id} >
                        <Image  src={image.fields.file.url} />
                    </div>  
                ))
                }
           
                {videoId && (<YouTube vi opts={opts} videoId={videoId}/>)}
               
            </div>
            }
            
            

            {
               typeof article?.text =='string' ?
               (
                    <div className='textbox' >{article.text.value}</div>
                )
           
               :(
                   article?.text?.content[0]?.content?.map((textBox, index)=>(
                       <div key={index} className='textbox'>
                           {textBox.value}
                        </div>
                    ))
               )
            }
            <div className='link-con'>
            {
               links && 
               links?.map((link, index)=>(
                    <a 
                        key={index} 
                        href={link?.data?.uri}
                        target="_blank" 
                        rel="noreferrer">
                            {link?.content[0]?.value}
                    </a>
               ))
               }
            </div>
 
        </div>
    )
}

export default ArticlePage