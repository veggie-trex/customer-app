import React, { Component } from 'react';
import axios from 'axios'
import ViewRecordTable from '../ViewRecordComponent/ViewRecordTableComponent/ViewRecordTable'
class ViewRecord extends Component {
    state = {
         data: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
                this.setState({data: response.data})
                //console.log(response);

            })
    }

    render() {

        console.log(this.state.data);
        return (
        <div>
            <ViewRecordTable arrayrecords={this.state.data}/>

        </div>
        );
    }
}

export default ViewRecord