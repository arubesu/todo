import Image from 'next/image';
import React from 'react';

import styles from './Header.module.css';
import logoImg from '../public/logo.svg';

export const Header: React.FC = () => {
    return (
        <header
            className={styles.header}
        >
            <Image
                src={logoImg}
                height={48}
                width={126}
                alt="A logo image with a blue rocket launch followed by a text written todo in blue and purple"
            />

        </header>
    );
}