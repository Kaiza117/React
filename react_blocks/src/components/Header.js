import React, {Component} from 'react';
import styles from './css/Header.module.css';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={ styles.header }>
            </div>
        )
    }

}



export default Header;