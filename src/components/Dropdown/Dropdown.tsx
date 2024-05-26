
import Arrow from '../../SVG/Arrow/Arrow';
import ModalWindow from '../ModalWindow/ModalWindow';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  text: string;
  modal: boolean;
}

export default function Dropdown({ text, modal }: DropdownProps) {
 

  return (
    <>
      <li>
        <a className={modal ? styles.active : styles.notActive} >
          {text}
          <Arrow active={modal} activeColor={'#00aff0'} color="black" />
        </a>
      </li>
      <div className={modal ? styles.menuActive : styles.menuNotActive}>
        
      </div>
      {modal && <ModalWindow />}
    </>
  );
}
