import React, { Component } from 'react';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 300,
            width: 200,
            isGrayscale: false,
            isBlurred: false,
        }
    }

    render() {
        return(
            <p>Photo Form Goes Here</p>
        )
    }
}

export default Photo;