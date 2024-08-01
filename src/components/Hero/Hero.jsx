import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Kyra</h1>
            <p className={styles.description} >I'm a fullstack developer using React, Angular, C# .Net, and SQL. Reach out if you'd like to connect! </p>
            <a href="mailto:kyra.moore21@icloud.com" className={styles.contactBtn} >Contact Me</a>
        </div>
        <img src={getImageUrl("circleKyra.png")} alt="image of me"  className={styles.heroImg} />
        <div class={styles.topBlur} /> 
        <div class={styles.bottomBlur} /> 
        
    </section>
  )
}

export default Hero
