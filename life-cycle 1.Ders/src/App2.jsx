import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };


    // this.handleClickCount = this.handleClickCount.bind(this)

    this.handleClickCount = () => {
        this.setState({ count: this.state.count + 1 });  
    }

 }
 componentDidMount(){
    console.log("burası bir kere çalışır")
 }

 componentDidUpdate(){
    console.log(this.state.count)
 }
 componentWillUnmount(){
    console.log("burası sökülürken çalışır")
 }

 //memozation
/* shouldComponentUpdate(){
    return true 
 } */

    render() {
      console.log(this.state.count)
      return (
        <>
            <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
            <button onClick={this.handleClickCount.bind(this)}>
                count is {this.state.count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
        </>
        )
    }
}