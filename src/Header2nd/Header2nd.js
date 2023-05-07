import React from "react";

import { AiOutlinePrinter, AiOutlineFormatPainter } from "react-icons/ai";

import styles from "./header2nd.module.css";

import ToggleButtonsMultiple from "./ToggleButtonsMultiple";


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

        <AiOutlinePrinter className={styles.icon} onClick={handlePrint} />

        <ToggleButtonsMultiple />

      </div>
    </div>
  );
};

export default Header2nd;
