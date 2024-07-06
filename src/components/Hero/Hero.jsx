import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jana</h1>
            <p className={styles.description}>
                I'm a college student with a major in Computer Science with specialization in IoT and Automation.
                I've done various projects under Machine Learning and web development
            </p>
            <a href="mailto:janabalu2003@gmail.com" className={styles.contactBtn}>Contact Me</a>  
        </div>
        <img src={getImageUrl("hero/cropped_image.png")} alt="hero image" className={styles.heroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

        
    </section>;
}