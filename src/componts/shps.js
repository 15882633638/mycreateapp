import React, { Component } from 'react'
import Url from 'url'

export default class Shps extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        console.log(props)
        console.log(Url.parse(props.location.search,true).query)
    }
    render() {
        return (
            <div>
                这是shps组件
               
            </div>
        )
    }
}

