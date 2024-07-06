import React from "react";

import { getImageUrl } from "../../utils";
import skills from "../../data/techskills.json";
import styles from "./Skills.module.css";


export const Skills = () => {
    return( 
    <section className={styles.container} id="skill">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })}
            </div>
            
        </div>
    </section>
    );
};