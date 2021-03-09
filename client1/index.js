import React from 'react';
import ReactDOM from 'react-dom';
import{ ipConfig } from './ipconfig'
import axios from 'axios'
import Router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
// boostrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class Index extends React.Component{

    // componentDidMount() {
    //     // fetch()
    //     // axios.get
    //     fetch(`${ipConfig}/get`)
    //     .then(res => res.text())
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err))
    // }
    render(){
        return(
                <>
                    {/* <Link to="/">Home</Link> */}
                    <Router></Router>
                </>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))