import React from 'react'
import './App.css';



class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            categories:[],
            jokes:{},
        }
    }


    componentDidMount(){
        fetch("https://api.chucknorris.io/jokes/categories")
        .then((response)=>response.json())
        .then((data)=>this.setState({categories:data}))
    }
    handleChange = (e) =>{
        const joke=e; 
        console.log(joke);
        const url=`https://api.chucknorris.io/jokes/random?category=${joke}`;
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>this.setState({jokes:data}))
    }
    render(){
    return (
        <div className="container">
            <div className="row row-content">
                <h1 className="header-text col-12 col-md-12 col-sm-12">Chuck Norris</h1>
            
                <div className="jokes-names col-12 col-md-12 col-sm-12">
                {this.state.categories.map((categories,i)=>(
                    <button onClick={this.handleChange.bind(this,categories)} className="btn btn-block btn-primary col-2 col-sm-2 col-md-2 result-name" key={categories}>{categories} </button>
                    
                    ))}
                
                </div>
            </div>
            <div className="row row-content">
                <h1 className="col-12 col-md-6 col-sm-6 result-text">Selected Category : {this.state.jokes.categories}</h1>
            <div className="jokes-container col-12 col-md-12 col-sm-10">
                    
                    <h2> {this.state.jokes.value}</h2>
            </div>
            </div>
           <button className="newjokebutton col-12 col-md-12 col-sm-12" onClick={this.handleChange.bind(this,this.state.jokes.categories)}>New Joke</button>
        </div>
    )}
}


export default App;
