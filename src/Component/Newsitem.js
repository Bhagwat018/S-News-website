import React, { useEffect, useState } from 'react'
// import Newsbox from './Newsbox'
import './Newsitem.css'

const Newsitem = () => {
 

let[mamu,setmamu]=useState([])
let rama = [...mamu]
useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${"sports"}&apiKey=7a80edc634a44f72975f5dffd5ddfc4d`
fetch(url).then(respo=>{return respo.json()}).then(elon=>{
    console.log(elon.articles)
    setmamu(elon.articles)
}).catch(e=>{console.log(e)})},[])


  return (
<>
<div className="container">
  <div className="row">
    <div className="col-lg-12">
  

    </div>
  </div>
 </div>
 


<div className="cont">
  <div className="cont2">
  {rama.map(non=>(
<div className="maiiiin">
<div class="card" style={{width: "18rem"}}>
  <img src={non.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{non.title}</h5>
    <p className="card-text">{non.description}...</p>
    <a href={non.url} className="btn btn-sm btn-primary">Read More</a>
  </div>

  
    </div>
    </div>
    ))}
  </div>
</div>
</>

  )
}

export default Newsitem
