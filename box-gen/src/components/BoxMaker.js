import React, { useState } from 'react';
import styled from './css/Box.module.css'


const BoxMaker = props => {
    const [box,setBox] = useState({
        color: "",
        height: "",
        width: ""
    });

    const handleOnChange = (event) => {
        setBox({ ...box,
            [event.target.name]: event.target.value })
    }
    const createBox = (event) => {
        event.preventDefault();
        props.createBox( [box.color, box.height, box.width] );
        setBox({ color: "", height: "", width: "" })
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <div className={styled.box}>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" value={ box.color } onChange={ handleOnChange } />
                </div>

                <div>
                    <label htmlFor="height" >Height:</label>
                    <input type="number" name="height" value={ box.height } onChange={ handleOnChange } />
                </div> 

                <div>
                    <label htmlFor="width" >Width:</label>
                    <input type="number" name="width" value={ box.width } onChange={ handleOnChange }/>
                </div>

                <input type="submit" value="Create" className={styled.submit} onClick={ createBox }/>
            </div>
        </div>
    );
};

export default BoxMaker;