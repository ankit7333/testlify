import styles from './styles.module.scss';
import Button from '../../ui/Button';

export default function Date() {
  return (
    <div className={styles.date}>
      <Button><span className={`icon ${styles.arrow__left}`} /></Button>
      <input type='date' />
      <Button><span className={`icon ${styles.arrow__right}`} /></Button>
    </div>
  );
}
