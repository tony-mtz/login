
import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({});
const mapDispatchToProps = ({});

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>Main Container</h1>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);