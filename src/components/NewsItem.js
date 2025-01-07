import React, { props } from 'react'

const NewsItem=(props)=>{
    let {imageUrl,title,description,newsUrl,author,date,source}=props;
    return (
      <div className="mx-3 my-2">
            <div className="card" style={{width: "20rem"}}>
               <img src={imageUrl?imageUrl:"noimage.jpg"} className="card-img-top" alt="image" style={{width:"318px",height:"200px"}}/>
               <div className="card-body">
                   <h5 className="card-title">{title}...</h5>
                   <p className="card-text">{description}...</p>
                   <small>By {!author?'unknown':author} on {new Date(date).toGMTString()}</small>
                   <p>source: {source}</p>
                   <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read more</a>
               </div>
            </div>  
      </div>
    )
}

export default NewsItem