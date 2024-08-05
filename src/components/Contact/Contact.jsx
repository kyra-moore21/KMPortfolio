import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id='contact' >
        
      <div className={styles.container} >
        <div className={styles.Text}>
      <h1>Contact</h1>
      <h3>Connect with me!</h3>
        </div>
      <ul className={styles.Links} >
        <li className={styles.Link}><img src=
        {getImageUrl("emailIcon.png")} /><a href="mailto:kyra.moore21@icloud.com" >kyra.moore21@icloud.com</a></li>
        <li className={styles.Link}><img src=
        {getImageUrl("linkedinIcon.png")} /><a href="https://www.linkedin.com/in/kyramoore21/" >https://www.linkedin.com/in/kyramoore21/</a></li>
         <li className={styles.Link}><img src=
        {getImageUrl("githubIcon.png")} /><a href="https://github.com/kyra-moore21" >https://github.com/kyra-moore21</a></li>
      </ul>
      </div>
      <div className={styles.attributes}>
        <p><a href="https://www.freepik.com/search">Icon by Freepik</a></p>
        <p><a href="https://www.freepik.com/search">Icon by Pixel perfect</a></p>
        <p><a href="https://www.freepik.com/search">Icon by Fajrul Fitrianto</a></p>
        <p></p>
      </div>
    </section>
    
  )
}

export default Contact
