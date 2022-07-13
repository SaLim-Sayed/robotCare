import React, { Component } from 'react';
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import Navbar from "../NavBar/Navbar";

export class FirstAid extends Component {
    state = {
        value: "",
        prediction: ''
    }



    predictionHandle = async () => {
        const baseURL = 'https://nlp-firstaid-api.herokuapp.com/predict/?text= ' + this.state.value;
        await axios.get(baseURL).then((response) => {
            this.setState({
                prediction: response.data
            });
            console.log(response.data);


        }).catch(err => console.log('err'))
    }

    setValue = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        
        
        return (
            <>
        <Navbar/>
        <div className='faid'>
            <div className='container aid'>

                <br />
                <div className="App">
                    <div className="check">
                        <h1 className=' lbl'>Enter a description of your pain 
                            {/*  <input    value={this.state.value}  onKeyUp={() => this.predictionHandle()} onChange={this.setValue} /> */}
                            <button className='btn  mx-2  ' onClick={() => this.predictionHandle()}>  <input value={this.state.value} onKeyUp={() => this.predictionHandle()} onChange={this.setValue} />
                                <button className='btn btn-success mx-2'><HiSearch /></button>
                            </button>
                        </h1>
                    </div>
                    <p className='source-text '><i>{this.state.prediction.source_text}<u>{this.state.prediction.translation}</u></i> </p>

                    <div className="pred container   ">
                        <p className='firstAid1 p-4'>{this.state.prediction.firstaid_instructions}</p>
                        <p className='firstAid2 '>{this.state.prediction.firstaid_instructions_in_arabic}</p>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}

export default FirstAid;
