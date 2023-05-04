import React from 'react';
import { BiUndo,BiRedo } from "react-icons/bi";
import { AiOutlinePrinter,AiOutlineFormatPainter} from "react-icons/ai";
import { MdOutlineSpellcheck } from "react-icons/md";
import styles from './header2nd.module.css'
import { IconButton } from '@mui/material';

const IconButtons = () => {
    const createElement = (tagname, text) => {
        const node = document.createElement(tagname);
        node.innerText = text;
        return node;
      };
      const divRef = React.useRef();
      const format = ({ tagname, action }: any, event) => {
        const selection = window.getSelection().toString();
        const range = window.getSelection().getRangeAt(0);
    
        const insertNode = (node) => {
          range.deleteContents();
          range.insertNode(node);
        };
    
        if (tagname) {
          insertNode(createElement(tagname, selection));
          return;
        }
        if (action === 'undo') {
            divRef.current.innerHTML = divRef.current.innerText;
          }
    
      }
    return (    
        <div>
            <IconButton> <BiUndo  className={styles.icon} 
            onClick={() => format({ tagname: 'undo' })}/></IconButton>
            <IconButton><BiRedo className={styles.icon}/></IconButton>
            <IconButton><AiOutlinePrinter className={styles.icon}/></IconButton>
            <IconButton> <MdOutlineSpellcheck className={styles.icon}/></IconButton>
            <IconButton><AiOutlineFormatPainter className={styles.icon}/></IconButton>
            
            
            
            
            
        </div>
    );
}

export default IconButtons;
