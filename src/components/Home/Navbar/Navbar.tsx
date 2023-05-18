import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </div>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/teams");
          }}
        >
          Teams
        </div>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/events");
          }}
        >
          Events
        </div>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </div>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Blogs
        </div>
        <div
          className={styles.click}
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
