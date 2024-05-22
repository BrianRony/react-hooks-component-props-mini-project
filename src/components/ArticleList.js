import React from "react";
import Article from "./Article";

function ArticleList ({posts}){
    const blogPost = posts.map((post)=> {
       return <Article 
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    })
    console.log(blogPost)
    return (
        <main>{blogPost}</main>
    )
}

export default ArticleList