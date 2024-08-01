import React from 'react'
import { getImageUrl } from '../../utils'; 
import styles from "./ProjectCard.module.css";
const ProjectCard = ({p : {title, imageSrc, description, skills, demo, githubFrontend, githubBackend}}) => {
  return (
    <div className={styles.container}>    
    <img src={getImageUrl(imageSrc)} alt={`${title} screenshot`}  className={styles.image}/> 
<h3  className={styles.title}>{title}</h3>
<p  className={styles.description}>{description}</p>
<ul  className={styles.skills}>{
 skills.map((s, id) => {
     return (
    <li key={id}  className={styles.skill}>{s}</li>)
        
 })
}</ul>
<div  className={styles.links}>
{demo && <a href={demo}  className={styles.link}>Demo</a>}
{githubFrontend && <a href={githubFrontend} className={styles.link}>Front-End</a>}
{githubBackend && <a href={githubBackend} className={styles.link}>Back-End</a>}
</div>
</div>
  )
}

export default ProjectCard
