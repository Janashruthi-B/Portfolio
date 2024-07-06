import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="Qualification">
            <h2 className={styles.title}>Academic qualification</h2>
            <div className={styles.content}>
                <img 
                src={ getImageUrl("about/aboutImage.png")} 
                alt="me sitting with a lap"
                className={styles.aboutImage}></img>
            </div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Undergrad</h3>
                        <p>B.Tech CSE IoT and Automation</p>
                        <p>SASTRA University, Thanjavur, TN, 2021-2025</p>
                        <p>CGPA: 7.59/10</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>High School</h3>
                        <p>Kendriya Vidyalaya No.1, Trichy, TN, 2021</p>
                        <p>10th Percentage: 86.5</p>
                        <p>12th Percentage: 92.8</p>
                    </div>
                </li>
            </ul>
        </section>
    ) 
}