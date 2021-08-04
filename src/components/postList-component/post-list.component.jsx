import React from 'react'
import Post from '../post-component/post.component'

import './post-list.styles.scss'

const PostList = ({posts})=> {
    return(
        <div className='post-list'>
            {
                posts?.map((post)=>{
                    return(
                      <div className='post'>{<Post key={post.sys.id} post={post.fields} />}</div>  
                    )
                    
                })
            }
        </div>
    )
}

export default PostList