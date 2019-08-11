import React from 'react';
import {Button} from 'bootstrap-4-react';
function MyButton (props) {
    return (
        <Button className="btn btn-primary">{props.text}</Button>
    )
}
export default MyButton;