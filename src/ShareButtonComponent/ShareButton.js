import React from 'react'
import { Button } from 'reactstrap';
const sharButton = (props) =>{
    console.log(props.title);
    return(
        <Button onClick={props.cliked} color="info">Share Info</Button>
    )
}

export default sharButton;