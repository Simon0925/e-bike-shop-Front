import Arrow from '../../SVG/Arrow/Arrow';
import styles from './CardMenu.module.scss';

interface CardMenuProps {
    text: string;
    photo: string;
}

export default function CardMenu({ text, photo }: CardMenuProps) {
    return (
        <ul className={styles.container}>
            <li>
                <a>
                    <img alt='bike' src={photo} />
                    <div className={styles.title}>
                        <span>{text}</span>
                        <div className={styles.square}>
                            <Arrow activeColor={''} color={'white'} />
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    );
}
