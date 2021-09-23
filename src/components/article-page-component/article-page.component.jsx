import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client } from '../../contentful/client'
import { formatRelative } from 'date-fns'
//library imports

import { Text } from '../text-component/text.component'
import { Image } from '../image-component/image.component'
//component imports


import './article-page.styles.scss'
//stylesheet


const ArticlePage = ()=>{
    const id =useParams().id

    const [articleInfo, setArticleInfo] = useState( [] )
    

    useEffect(()=>{
        client.getEntry(id)
        .then((response)=> { 
            setArticleInfo(response)
            console.log('Article Info',response)
           
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
    const relativeDate =(date)=>{
        const newDate =formatRelative(new Date(date), new Date())
        return newDate
    }
    
    const article = articleInfo.fields
    
    const videoId = article?.youtubeVideoId
    

    const links = hyperlinkFilter()
    
    return(
        <div className='article-page'>
            <div className='article-con'>

                <h1 className='title'>{article?.title}</h1> 

                <div className='details-con'>

                {articleInfo?.sys?.createdAt &&( 
                        <p className='timestamp'>
                            {!articleInfo?.sys?.updatedAt? 
                                (relativeDate(articleInfo?.sys?.createdAt))
                                :(relativeDate(articleInfo?.sys?.updatedAt))
                            }
                        </p> 
                    )}

                    {article?.tags &&
                    ( <p className='tags'>{article?.tags}</p>)
                    }

                </div>

                <p className='text'>{article?.description}</p>

                {
                    article?.imageMain && (
                        <div className='image-con'>
                            <Image src={article?.imageMain?.fields?.file?.url}/>
                        </div>
                    )
                }

                {
                    article?.heading1 &&(
                    <h2 className='heading'>{article?.heading1}</h2>)
                }

                {
                article?.text1 && (
                    <div className='textbox'>{
                    <Text directory={article?.text1?.content}/>
                    }</div>
                )
                }
                
                {
                    article?.image1 && (
                        <div >
                            <Image src={article?.image1?.fields?.file?.url}/>
                        </div>
                    )
                }

                {
                    article?.subHeading11 &&(
                    <h3 className='subheading'>{article?.subHeading11}</h3>)
                }

                {
                article?.text11 && (
                    <div className='textbox'>{
                    <Text directory={article?.text11?.content}/>
                    }</div>
                )
                }

                {
                    article?.image11 && (
                        <div className='image-con'>
                            <Image src={article?.image11?.fields?.file?.url}/>
                        </div>
                    )
                }

                {
                    article?.heading2 &&(
                    <h2 className='heading'>{article?.heading2}</h2>)
                }

                {
                article?.text2 && (
                    <div className='textbox'>{
                    <Text directory={article?.text2?.content}/>
                    }</div>
                )
                }

                {
                    article?.image2 && (
                        <div className='image-con'>
                            <Image src={article?.image2?.fields?.file?.url}/>
                        </div>
                    )
                }

                {
                    article?.subheading21 &&
                    (<h3 className='subheading'>{article?.subheading21}</h3>)
                }

                {
                article?.text21 && (
                    <div className='textbox'>{
                    <Text directory={article?.text21?.content}/>
                    }</div>
                )
                }

                {
                    article?.image21 && (
                        <div className='image-con'>
                            <Image src={article?.image21?.fields?.file?.url}/>
                        </div>
                    )
                }

                
            </div>
        </div>
           
    )
}

export default ArticlePage