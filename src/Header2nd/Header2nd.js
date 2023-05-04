import React from 'react';
import { BiUndo,BiRedo } from "react-icons/bi";
import { AiOutlinePrinter,AiOutlineFormatPainter,AiOutlineItalic
         ,AiOutlineUnderline} from "react-icons/ai";
import { MdOutlineSpellcheck } from "react-icons/md";
import { BsTypeBold} from "react-icons/bs";
import styles from './header2nd.module.css'
import DropDownSize from './DropDownSize';
import TextStyles from './TextStyles';
import FontSize from './FontSize';
import IncDecCounter from './IncDecCounter';
import { TbTextColor} from "react-icons/tb";
import ToggleButtonsMultiple from './ToggleButtonsMultiple';
import Allign from './Allign';





const Header2nd = () => {
    
    return ( <div className={styles.main}>
        <div className={styles.container}>
            <BiUndo  className={styles.icon}/>
            <BiRedo className={styles.icon}/>
            <AiOutlinePrinter className={styles.icon}/>
            <MdOutlineSpellcheck className={styles.icon}/>
            <AiOutlineFormatPainter className={styles.icon}/>
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
