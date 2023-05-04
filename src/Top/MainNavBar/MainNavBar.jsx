import styles from "./MainNavBar.module.css";
import { MdDriveFileMoveOutline } from "react-icons/md";
import NavLinks from "../NavLinks/NavLinks";

const MainNavBar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.DocImg}>
        <img
          src="https://icon-library.com/images/google-docs-icon-png/google-docs-icon-png-6.jpg"
          alt="doc-img"
        />
      </div>
      <div className={styles.ContentSection}>
        <div className={styles.Headiding}>
          <h3>Untitled document</h3>
          <MdDriveFileMoveOutline
            style={{ fontSize: "20px", marginTop: "1px" }}
          />
        </div>
        <div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
