import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo_container}>
      <Link href="/">
        <a>
          <img src="http://badgerlordgames.com/wp-content/uploads/2020/10/BLG_LOGO_HORIZONTAL_CMYK.png" />
        </a>
      </Link>
    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Learn to Play</li>
      <li>One Shots</li>
      <li>Campaigns</li>
      <li>Contact</li>
    </ul>
  </header> 
);

export default Header;
