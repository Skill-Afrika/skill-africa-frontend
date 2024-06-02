// skill-africa-frontend/pages/under-construction.js
import { useEffect, useState } from 'react';
import styles from '../styles/UnderConstruction.module.css';  // Correctly import the CSS module

export default function UnderConstruction() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('http://localhost:8000/api/under-construction/')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => setMessage('Error fetching data'));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.animation}>
                {/* Simple under construction animation */}
                <div className={styles.crane}></div>
                <div className={styles.building}></div>
            </div>
            <h1>{message}</h1>
        </div>
    );
}
