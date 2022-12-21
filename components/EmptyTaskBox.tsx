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

            <p>You still have no tasks registered</p>
            <p>Create tasks and organize your life</p>
        </>
    );
}
