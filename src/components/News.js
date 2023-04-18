import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from "prop-types";

export class News extends Component {

    static defaultProps={
        country:'in',
        category:'general',
        pageSize:6
    }

    static propTypes={
        country: PropTypes.string,
        categroy:PropTypes.string,
        pageSize:PropTypes.number
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }

        // let t=;
        // t=`${this.props.category.charAt(0).toUpperCase+this.props.category.slice(1)}`;
        if(this.props.name==='home' || this.props.name==='def' ){
            document.title=`NewsMonkey`;
            
        }else{
            document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
        }
    }

    
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9967197277d4d1cad4777de95b30285&pageSize=${this.props.pageSize}&page=1`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
    });

    }

    handlePrevClick = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9967197277d4d1cad4777de95b30285&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            loading:false
        });
    }

    handleNextClick = async ()=>{
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9967197277d4d1cad4777de95b30285&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles,
                loading:false
            });
    }

    

    render() {
        return (
        <div className='my-3 container'>
            <h2 className='text-center' style={{margin:'80px 0px 20px 0px'}}>News Monkey - Top HeadLines</h2>
            {this.state.loading && <Spinner/>}
            {!this.state.loading && <div className="container">
                <div className="row my-2">
                    {this.state.articles.map((element)=>{
                        return <div className="col-lg-4 col-md-6 my-2" key={element.url}><NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,110):"Click on Read More"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                    <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>}
        </div>
        )
    }
}

export default News
