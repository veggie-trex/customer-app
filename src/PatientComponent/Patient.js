import React, {Component} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';


class Patient extends Component {
   
    
    shareTheData= ()=>{
           console.log("Share the info")
           this.props.closedModal();
           
    };
    render(){
    return (
       
        <Row>
            <Card>
                <CardImg top width="100" height="100" src="http://lorempixel.com/g/200/200/" alt="Card image cap" />
                <br/>
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