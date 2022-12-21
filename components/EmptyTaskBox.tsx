import Image from 'next/image';
import React from 'react';
import clipBoardImg from '../public/Clipboard.svg'

import styles from './EmptyTaskBox.module.css';

export const EmptyTaskBox: React.FC = () => {
    return (
        <>
            <Image
                className={styles.icon}
                alt='Clipboard Image'
                src={clipBoardImg}
                height={56}
                width={56}
            />

            <p className={styles.emptyMessage}>You still have no tasks registered</p>
            <p className={styles.emptyMessage}>Create tasks and organize your life</p>
        </>
    );
}
