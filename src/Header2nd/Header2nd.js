import React from 'react';
import styles from './header2nd.module.css'
import DropDownSize from './DropDownSize';
import TextStyles from './TextStyles';
import FontSize from './FontSize';
import IncDecCounter from './IncDecCounter';
import ToggleButtonsMultiple from './ToggleButtonsMultiple';
import Allign from './Allign';
import IconButtons from './IconButtons';

const Header2nd = () => {
    const divRef = React.useRef();
    
    return ( <div className={styles.main}>
        <div className={styles.container}>
            <IconButtons/>
            <DropDownSize/>    
            <TextStyles/>
            <FontSize/>
            <IncDecCounter/>  
            <ToggleButtonsMultiple/>
            <Allign/>
             
        </div>
        </div>
    );
}

export default Header2nd;
