import React from 'react';
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import ProjectCard from './ProjectCard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import SwiperCore, { Navigation, Pagination } from 'swiper';

//SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
    return (
      <section className={styles.container} id="projects">
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.projects}>
              {
                  projects.map((p, id) => {
                      return (
                          <ProjectCard key={id} p = {p}/>
                      )
                  })
              }
          </div>
      </section>
    )
  }
  

export default Projects
