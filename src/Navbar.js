import styles from "./Navbar.module.css";

function Navbar(props) {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>Movie App</div>
        <div>
          <img
            alt="icon"
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
            className={styles.cartIcon}
          />
          <span className={styles.cartCount}>{props.cartCount}</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
