import React from 'react';
import { BiUndo,BiRedo } from "react-icons/bi";
import { AiOutlinePrinter,AiOutlineFormatPainter} from "react-icons/ai";
import { MdOutlineSpellcheck } from "react-icons/md";
import styles from './header2nd.module.css'
import { IconButton } from '@mui/material';

const IconButtons = () => {
    function handlePrint() {
        const printContents = document.querySelector(".content-box").innerHTML;
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
          <html>
            <head>
              <title>Print</title>
              <style>
                @media print {
                  body * {
                    visibility: hidden;
                  }
                  .content-box, .content-box * {
                    visibility: visible;
                  }
                  .content-box {
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                }
              </style>
            </head>
            <body>
              <div class="content-box">${printContents}</div>
            </body>
          </html>
        `);
    
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }

    return (    
        <div>
            <IconButton> <BiUndo  className={styles.icon} 
            onClick={() => document.execCommand('undo')}/></IconButton>
            <IconButton><BiRedo className={styles.icon}
            onClick={() => document.execCommand('redo')}/></IconButton>
            <IconButton onClick={handlePrint} ><AiOutlinePrinter className={styles.icon}/></IconButton>
            
            
            
            
            
            
        </div>
    );
}

export default IconButtons;
