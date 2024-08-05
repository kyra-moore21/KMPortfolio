import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
        
        <h2 className={styles.title} >About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("kyra2.png")} alt="Smiling photo of me
        " className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("fullstackIcon.png")} alt="server icon"/>
            <div  className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
                <p>I am skilled in both front and backend development</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("ux.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
            <h3>UX/UI Designer</h3>
            <p>I have a passion for building user friendly and acessible websites</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("paint-brush.png")} alt="Cursor Icon" />
            <div  className={styles.aboutItemText}>             
            <h3>Outside of coding</h3>
            <p>I love creating makeup looks, weightlifting, and exploring nature.</p>
            </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
