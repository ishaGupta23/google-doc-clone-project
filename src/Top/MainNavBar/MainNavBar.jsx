import styles from "./MainNavBar.module.css";
import { MdDriveFileMoveOutline, MdOutlineLock } from "react-icons/md";
import NavLinks from "../NavLinks/NavLinks";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import VideoFileRoundedIcon from "@mui/icons-material/VideoFileRounded";
import { useState } from "react";

const MainNavBar = () => {
  const [title, setTitle] = useState("Untitled document");
  const [editing, setEditing] = useState(false);

  return (
    <div className={styles.MainContainer}>
      <div className={styles.LeftSection}>
        <div className={styles.DocImg}>
          <img
            src="https://icon-library.com/images/google-docs-icon-png/google-docs-icon-png-6.jpg"
            alt="doc-img"
          />
        </div>
        <div className={styles.ContentSection}>
          <div className={styles.Headiding}>
            {editing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setEditing(false)}
                autoFocus
              />
            ) : (
              <h3 onClick={() => setEditing(true)}>{title}</h3>
            )}

            <MdDriveFileMoveOutline
              style={{
                fontSize: "20px",
                marginLeft: "5px",
                height: "18px",
                marginBottom: "0px",
              }}
            />
          </div>
          <div>
            <NavLinks />
          </div>
        </div>
      </div>
      <div className={styles.RightSection}>
        <div className={styles.IconsSection}>
          <MessageRoundedIcon
            className={styles.Icons}
            style={{ fontSize: "34px" }}
          />
          <VideoFileRoundedIcon
            className={styles.Icons}
            style={{ fontSize: "34px" }}
          />
        </div>
        <div className={styles.Share}>
          <button>
            <MdOutlineLock />
            Share
          </button>
        </div>

        <div className={styles.UserLogo}>
          <AccountCircleRoundedIcon
            className={styles.Logo}
            style={{ fontSize: "45px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default MainNavBar;
