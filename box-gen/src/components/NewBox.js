import React from 'react';
import styled from './css/Box.module.css'

const NewBox = props => {
    var allBoxes = props.color

    return(
        <div className={styled.boxes}>
            {
                allBoxes.map( (item, x) => (
                    <div className={styled.Box} key={ x } style={{ backgroundColor: item[0][0], height: item[0][1] + "px", width:item[0][2] + "px" }} ><span></span></div> 
                ))
            }
        </div>
    );
}
export default NewBox;