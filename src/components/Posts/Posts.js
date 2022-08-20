import { Button } from '@mui/material'
import React from 'react'
import './post.css'
const Posts = ({removeDoc,...post}) => {
  return (
    <div>
        {post.title}
        {post.category.map(el => <span className={el === "HTML" ? "html"  : el === "CSS"   ? "css"  : el === "Javascript"  ? "javascript" : el === "ReactJs" ? "react" : ""}>{el}</span>)}

        <Button variant='contained' sx={{bgcolor:"#ff3d00"}} onClick={() => removeDoc(post.id)}>Del</Button>
    </div>
  )
}

export default Posts










// var result =
//   el === "HTML" ? "html"  : el === "CSS"   ? "css"  : el === "Javascript"  ? "javascript" : "Air Quality is EXCELLENT";