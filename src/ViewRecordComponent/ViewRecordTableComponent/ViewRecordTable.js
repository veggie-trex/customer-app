import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import Modal from 'react-modal';
import ShareButton from '../../ShareButtonComponent/ShareButton'
import Patient from '../../PatientComponent/Patient'
import axios from 'axios';

import "./ViewRecordTable.css";

Modal.setAppElement('#root');

class Record extends Component {

    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    state = {
        modalIsOpen: false,
        data: {},
    };

    openModal(data) {
        var obj = { ...this.state.data };
        obj = data;
        this.setState({ 
            modalIsOpen: true,
            data: obj
         });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    shareAllRecordersHandler = () => {

        axios.post("", this.props.arrayrecords).then((reponse) => {
            console.log(reponse);
        })
    }

    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <div>
                <Button color="primary" size="lg" onClick={this.shareAllRecordersHandler}>Share All Records</Button>
                <br />

                <Table dark>
                    <thead>
                        <tr>
                            <th scope="row">#</th>
                            <th>Doctor ID</th>
                            <th>Immunization Type</th>
                            <th>Date</th>
                            <th>Next Immunization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.arrayrecords.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.doctorId}</td>
                                    <td>{data.immunizationType}</td>
                                    <td>{data.immunizationDate}</td>
                                    <td>{data.nextImmunizationDate}</td>
                                    <td><ShareButton cliked={this.openModal.bind(this, data)}>Share Info</ShareButton></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}>
                    <Patient clicked={this.closeModal} info={this.state.data} closedModal={this.closeModal} />
                </Modal>
            </div>
        );
    }
}
export default Record