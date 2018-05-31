import React, {Component} from 'react';
import Form from './Form'
import Info from './Info';
import axios from 'axios';

class Main extends Component {
    constructor(props){
        super(props);
        this.base = 'http://localhost:3030';
    }

    state={
        input: '',
        select: '',
        datos: [],
        planetas: []
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = () => {

        axios.get(`${this.base}/edad-planetas/${this.state.input}/${this.state.select}`)
            .then((result) => {

               this.setState({
                   datos: result.data
               })
            }).catch((err) => {

            });
    }

    handleSelectChange = (e) =>{

        this.setState({
            select: e.target.value
        })
    }

    componentDidMount(){
        axios.get(`${this.base}/planetas`)
        .then((result) => {

           this.setState({
               planetas: result.data.results,
               select: 2
           })
        }).catch((err) => {
           console.log(err)
        });
    }

    render(){

        return(
            <div>
                <Form planetas={this.state.planetas} handleSelectChange={this.handleSelectChange} handleClick={this.handleClick} handleChange={this.handleChange} valor={this.state.input}/>
                <Info datos={this.state.datos} />
            </div>
        )
    }
}

export default Main;
