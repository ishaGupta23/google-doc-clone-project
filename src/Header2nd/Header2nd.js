import React from "react";
import { BiUndo, BiRedo } from "react-icons/bi";
import { AiOutlinePrinter, AiOutlineFormatPainter } from "react-icons/ai";
import { MdOutlineSpellcheck } from "react-icons/md";
import styles from "./header2nd.module.css";
import DropDownSize from "./DropDownSize";
import TextStyles from "./TextStyles";
import FontSize from "./FontSize";
import IncDecCounter from "./IncDecCounter";
import ToggleButtonsMultiple from "./ToggleButtonsMultiple";
import Allign from "./Allign";

const Header2nd = () => {
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
    <div className={styles.main}>
      <div className={styles.container}>
        <BiUndo className={styles.icon} />
        <BiRedo className={styles.icon} />
        <AiOutlinePrinter className={styles.icon} onClick={handlePrint} />
        <MdOutlineSpellcheck className={styles.icon} />
        <AiOutlineFormatPainter className={styles.icon} />
        <DropDownSize />
        <TextStyles />
        <FontSize />
        <IncDecCounter />
        <ToggleButtonsMultiple />
        <Allign />
      </div>
    </div>
  );
};

export default Header2nd;
