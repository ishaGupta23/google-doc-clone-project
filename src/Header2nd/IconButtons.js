import React from 'react';
import { BiUndo,BiRedo } from "react-icons/bi";
import { AiOutlinePrinter,AiOutlineFormatPainter} from "react-icons/ai";
import { MdOutlineSpellcheck } from "react-icons/md";
import styles from './header2nd.module.css'
import { IconButton } from '@mui/material';

const IconButtons = () => {

    return (    
        <div>
            <IconButton> <BiUndo  className={styles.icon} 
            onClick={() => document.execCommand('undo')}/></IconButton>
            <IconButton><BiRedo className={styles.icon}
            onClick={() => document.execCommand('redo')}/></IconButton>
            <IconButton><AiOutlinePrinter className={styles.icon}/></IconButton>
            <IconButton><AiOutlineFormatPainter className={styles.icon}/></IconButton>
            
            
            
            
            
        </div>
    );
}

export default IconButtons;
