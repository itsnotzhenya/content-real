import { h } from 'preact';
import styles from './styles.css';

export const Menu = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>Number</li>
        <li>Currency</li>
        <li>Names</li>
        <li>Date & Time</li>
        <li>Phone number</li>
        <li>Email</li>
        <li>Country</li>
        <li>City</li>
        <li>Address</li>
        <li>Usernames</li>
      </ul>
    </div>
  );
};
