import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './HeaderNavBar.module.scss';

export default function HeaderNavBar() {
  const [active, setActive] = useState<string | null>(null);

  const handleDropdownClick = (dropdown: string) => {
    setActive(prevActive => (prevActive === dropdown ? null : dropdown));
  };

  const openModal = {
    eB: active === 'eB',
    sA: active === 'sA',
    aH: active === 'aH',
  };

  return (
    <div className={styles.wrap}>
      <div onClick={() => handleDropdownClick('eB')}>
        <Dropdown text="ELECTRIC BIKE" modal={openModal.eB} />
      </div>
      <div onClick={() => handleDropdownClick('sA')}>
        <Dropdown text="SERVICE & ADVICE" modal={openModal.sA} />
      </div>
      <div onClick={() => handleDropdownClick('aH')}>
        <Dropdown text="ABOUT HEIBIKE" modal={openModal.aH} />
      </div>
      <li className={styles.link}>
        <a href="#">FIND A STORE</a>
      </li>
    </div>
  );
}
