import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
const patient = (props) => {
    return (
        <Row>
            <Card>
                <CardImg top width="100" height="200" src="http://lorempixel.com/g/200/200/" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>close</Button>
                </CardBody>
            </Card>
            </Row>
    );
}
export default patient;