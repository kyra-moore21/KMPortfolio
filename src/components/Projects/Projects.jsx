import React from 'react';
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';

const Projects = () => {
    const prevButton = useRef(null);
    const nextButton = useRef(null);
    return (
      <section className={styles.container} id="projects">
        <div className={styles.header}>
          <h2 className={styles.title}>Projects</h2>
        <div className={styles.navigation}>
            <button ref={prevButton} className={styles.navButton}>❮</button>
            <button ref={nextButton} className={styles.navButton}>❯</button>
        </div>
        </div>
          <div className={styles.projects}>
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
                prevEl: prevButton.current,
                nextEl: nextButton.current
            }}
            pagination={{clickable: true}}
            onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = prevButton.current;
                swiper.params.navigation.nextEl = nextButton.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            breakpoints={{
                768: { // When the screen is wider than 768px
                    slidesPerView: 2,
                  },
                  1024: { // When the screen is wider than 1024px
                    slidesPerView: 3,
                  },
            }}
            >

            
              {
                  projects.map((p, id) => {
                      return (
                        <SwiperSlide key={id}>

                            <ProjectCard key={id} p = {p}/>
                        </SwiperSlide>
                      )
                  })
              }
              </Swiper>
          </div>
      </section>
    )
  }
  

export default Projects
