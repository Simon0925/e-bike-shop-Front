import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './HeaderNavBar.module.scss';
import ElectricBikesDropdown from '../ElectricBikesDropdown/ElectricBikesDropdown';
import ServiceAdviceDropdown from '../ServiceAdviceDropdown/ServiceAdviceDropdown';
import AboutHeibikeDropDown from '../AboutHeibikeDropDown/AboutHeibikeDropDown';

export default function HeaderNavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(prevActive => (prevActive === dropdown ? null : dropdown));
  };

  return (
    <div className={styles.wrap}>
      <div onClick={() => handleDropdownClick('eB')}>
        <Dropdown menu={<ElectricBikesDropdown />} text="ELECTRIC BIKES" modal={activeDropdown === 'eB'} />
      </div>
      <div onClick={() => handleDropdownClick('sA')}>
        <Dropdown menu={<ServiceAdviceDropdown />} text="SERVICE & ADVICE" modal={activeDropdown === 'sA'} />
      </div>
      <div onClick={() => handleDropdownClick('aH')}>
        <Dropdown menu={<AboutHeibikeDropDown />} text="ABOUT HEIBIKE" modal={activeDropdown === 'aH'} />
      </div>
      <li className={styles.link}>
        <a href="#">FIND A STORE</a>
      </li>
    </div>
  );
}
