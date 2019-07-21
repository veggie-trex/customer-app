import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';


class Patient extends Component {


    shareTheData = () => {
        this.props.closedModal();
    };
    render() {
        return (
            <Row>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.info.id}</CardTitle>
                        <CardSubtitle>{this.props.info.title}}</CardSubtitle>
                        <CardText>{this.props.info.body}</CardText>
                        <Button onClick={this.props.clicked}>close</Button> | <Button color="primary" onClick={this.shareTheData}>Share</Button>

                    </CardBody>
                </Card>
            </Row>

        );
    }
}
export default Patient;