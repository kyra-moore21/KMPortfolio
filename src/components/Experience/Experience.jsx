import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const Skills = () => {
  return (
    <section  className={styles.container} id="experience">
      <h2 className={styles.title} >Skills & Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((h, id) => {
            return (
              <div  key={id}>
                
              <li className={styles.historyItem}> 
                <img src={getImageUrl(h.img)} alt={`${h.Institution} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{h.title}</h3>
                  <h4>{h.institution}</h4>
                  <p>{h.endDate}</p>
                </div>
              </li>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
