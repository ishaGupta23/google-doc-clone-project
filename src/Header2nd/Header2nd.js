import React from 'react';
import styles from './header2nd.module.css'
import DropDownSize from './DropDownSize';
import TextStyles from './TextStyles';
import ToggleButtonsMultiple from './ToggleButtonsMultiple';

import IconButtons from './IconButtons';
import FontType from './FontType';


const Header2nd = () => {
    const divRef = React.useRef();
    
    return ( <div className={styles.main}>
        <div className={styles.container}>


            <ToggleButtonsMultiple/>
          
            
             
        </div>
        </div>
    );
}

export default Header2nd;
