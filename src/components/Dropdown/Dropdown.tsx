
import Arrow from '../../SVG/Arrow/Arrow';
import ModalWindow from '../ModalWindow/ModalWindow';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  text: string;
  modal: boolean;
  menu?: React.ReactNode;
}

export default function Dropdown({ text, modal,menu }: DropdownProps) {
 

  return (

    <div className={styles['wrap']}>
      <li>
        <a className={modal ? styles.active : styles.notActive} >
          {text}
          <Arrow active={modal} activeColor={'#00aff0'} color="black" />
        </a>
      </li>

        

        { modal ? menu : null}
      
      {modal && <ModalWindow />}
      </div>
    
  );
}
