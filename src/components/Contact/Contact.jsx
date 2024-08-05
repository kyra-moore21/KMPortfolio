import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id='contact' >
        
      <div className={styles.container} >
        <div className={styles.Text}>
      <h2>Contact</h2>
      <h3>Connect with me!</h3>
        </div>
      <ul className={styles.Links} >
        <li className={styles.Link}><img src=
        {getImageUrl("contactIcons/emailIcon.png")} alt='email icon' /><a href="mailto:kyra.moore21@icloud.com" >kyra.moore21@icloud.com</a></li>
        <li className={styles.Link}><img src=
        {getImageUrl("contactIcons/linkedinIcon.png")} alt='linkedIn icon' /><a href="https://www.linkedin.com/in/kyramoore21/" >linkedin.com/in/kyramoore21</a></li>
         <li className={styles.Link}><img src=
        {getImageUrl("contactIcons/githubIcon.png")}  alt='github icon' /><a href="https://github.com/kyra-moore21" >github.com/kyra-moore21</a></li>
      </ul>
      </div>
      <div className={styles.attributes}>
        <p><a href="https://www.freepik.com/search">Icon by Freepik</a></p>
        <p><a href="https://www.freepik.com/search">Icon by Fajrul Fitrianto</a></p>
        <p></p>
      </div>
    </section>
    
  )
}

export default Contact
