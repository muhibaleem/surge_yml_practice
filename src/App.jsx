import React, {Component} from 'react';
import './App.css';
import {Header, HeaderSecond} from './Components/header'
import Footer from './Components/Footer'


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends Component{
    constructor(){
        super()
        this.state={
            name: "brother",
            email: "123@gmail.com",
            value: ""
        }
    }

    set_name = () =>{
        this.setState({
            name: this.state.value
        })
    }

    get_name = () =>{
        console.log("Running..");
        console.log(this.state.name);
    }

    handleChange= (e)=>{
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <br/><br/>
                <HeaderSecond/>
                <br/><br/>
            <h1>Hello {this.state.name}</h1>
                <br/>
            <h2>Email is : {this.state.email}</h2>
                <br/>
                <input name="name" onChange={(e)=> this.handleChange(e)} type="text" placeholder="Enter Name"/>
                <input name="email" onChange={(e)=> this.handleChange(e)} type="text" placeholder="Enter Email"/>
                <br/>
                <button onClick={this.set_name}> SET NAME </button>
                <button onClick={this.get_name}> GET NAME </button>
                <br/>
                <Footer/>
            </div>

        )
    }
}

export default App;
