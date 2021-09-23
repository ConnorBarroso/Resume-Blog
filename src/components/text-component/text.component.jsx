import React from 'react'

export const Text = (directory)=>{
    const realDirectory = directory.directory
    console.log(directory)
    return(
        <div>
          {
            realDirectory?.map((paragraph)=>{
                return(
                    <div className='paragraph' key={paragraph.index}>
                        <p className='text'>{paragraph.content[0]?.value}</p>
                    </div>
                )
            })
          
          }
        </div>
        
    )
}


