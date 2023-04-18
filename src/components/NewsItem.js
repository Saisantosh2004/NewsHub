import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props
        // console.log(source)
        return (
        <div>
            <div className="card shadow-lg" style={{backgroundColor:"#FFFBF5",color:"black"}}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{width:'100%'}}>
                    +{source}+
                </span>
                <img className="card-img-top" src={imageUrl?imageUrl:"../../red.jpeg"}  style={{height:'12rem' }}/>
                <div className="card-body">

                    <p className="card-text" ><small style={{color:"cyan !important"}} className="text-body-secondary">By {!author?"Anonymous":author} on {(new Date(date)).toGMTString()}</small></p>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" style={{}}>Read more</a>

                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem

// https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwY29sb3VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80
