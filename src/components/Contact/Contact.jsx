import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
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
    </section>
  )
}

export default Contact
