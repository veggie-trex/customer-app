import React, { Component } from 'react';
import axios from 'axios'
import ViewRecordTable from '../ViewRecordComponent/ViewRecordTableComponent/ViewRecordTable'
class ViewRecord extends Component {
    state = {
         data: [],
         patientId: '1'
    }

    componentDidMount() {
        axios.get(`${process.env.VEGGIE_T_REX_API}patients/${this.state.patientId}/records`)
        .then(response => {
            console.log(response)
                this.setState({data: response.data})
            });
    }

    render() {

        console.log(this.state.data);
        return (
        <div>
            <ViewRecordTable arrayrecords={this.state.data}  />

        </div>
        );
    }
}

export default ViewRecord