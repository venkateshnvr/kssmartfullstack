import React from 'react';
import ReactDOM from 'react-dom';
import{ ipConfig } from './ipconfig'
import axios from 'axios'
// import './index.css';

class App extends React.Component{

    componentDidMount() {
        // fetch()
        // axios.get
        fetch(`${ipConfig}/get`)
        .then(res => res.text())
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                Hello World
                <button>vvvvv</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))