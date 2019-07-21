import React from 'react';
import { Button } from 'reactstrap';

import './ShareButton.css';

const shareButton = (props) =>{
    return(
        <Button onClick={props.onClick} color="info">Share Info</Button>
    )
}

export default shareButton;