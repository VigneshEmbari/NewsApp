import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
 
const News=(props)=>{

    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalArticles]=useState(0)
    
    // constructor(){
    //     super();
    //     state={
    //         articles:[],
    //         loading:true,
    //         page:1,
    //         totalArticles:0
    //     }
    // }

    const updateNews= async ()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData= await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalArticles(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
    }  

    useEffect(()=>{
      updateNews();
    },[]);

    // handlePreviousClick=async ()=>{
    //   setState({page:state.page-1});
    //   updateNews();
    // }

    // handleNextClick=async ()=>{
    //   setState({page:state.page+1});
    //   updateNews();
    // }

    const fetchMoreData = async () => {
      
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1);
      // setState({loading:true});
      let data=await fetch(url);
      let parsedData= await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalArticles(parsedData.totalResults)
      setLoading(false)
    };


     return (
       <>
         <h1 className='text-center' style={{marginTop:"80px"}}><b>{props.heading}</b></h1>
         {loading&&<Spinner/>}
         <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
          <div className="container">

          </div>
          
         <div className="row my-5">
            {articles.map((element)=>{
              return <div className="col md-3" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,50):""}description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
         </div>
         </InfiniteScroll>
         {/* <div className="container mx-3 d-flex justify-content-between">
            <button disabled={state.page<=1} type="button" className="btn btn-primary" onClick={handlePreviousClick}>&larr; Previous</button>
            <button disabled={state.page+1>Math.ceil(state.totalArticles/props.pageSize)} type="button" className="btn btn-primary mx-3" onClick={handleNextClick}>Next &rarr;</button>
         </div> */}
        </>
     )
 }
 
 
 export default News