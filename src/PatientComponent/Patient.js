import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

import './Patient.css';


class Patient extends Component {


    shareTheData = () => {
        this.props.closedModal();
    };
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Vaccine: {this.props.info.immunizationType}</CardTitle>
                    <CardText>Type of vaccine: {this.props.info.typeOfVaccine}</CardText>
                    <CardText>Date vaccine given: {this.props.info.immunizationDate}</CardText>
                    <CardText>Funding site: {this.props.info.fundingSource}</CardText>
                    <CardText>Route and site: {this.props.info.routeAndSide}</CardText>
                    <CardText>Vaccine Lot: {this.props.info.vaccineLot}</CardText>
                    <CardText>Vaccine Mfr.: {this.props.info.vaccineMfr}</CardText>
                    <CardText>Date on VIS: {this.props.info.dateOnVIS}</CardText>
                    <CardText>Date given: {this.props.info.immunizationDate}</CardText>
                    <CardText>Vaccinator: {this.props.info.doctorId}</CardText>
                    <div className='form-group'>
                        <label>
                            Recipient address
                            <input className='form-control' type="text" name="recipient" onChange={this.props.setRecipient} />
                        </label>
                    </div>
                    <Button onClick={this.props.clicked}>close</Button>  <Button color="primary" onClick={this.shareTheData}>Share</Button>
                </CardBody>
            </Card>

        );
    }
}
export default Patient;