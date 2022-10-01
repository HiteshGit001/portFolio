import React from 'react';
import styles from "./HeroHome.module.scss";
import CropImage from "../../assets/image/CropImage.png";
import MySkill from '../MySkill/MySkill';

const HeroHome = () => {
  return (
    <div className={`flex_col ${styles.col_gap}`}>
      <div className={`${styles.hero_box} flex_between_start`}>
        <div>
          <p>
            I’m Hitesh G N
            <span className={styles.hilight}> Front-end</span> Developer
          </p>
          <p>
            Hi my name is Hitesh G N, completed my Mechanical engineering, Built 2 website from scratch with in a span of 3 days, Proficient 👨‍💻 in HTML CSS JAVASCRIPT, and ❤ CSS and REACT JS.
          </p>
          <button type='button'>
            Contact Me
          </button>
        </div>
        <div>
          <img className={styles.img_profile} src={CropImage} alt="Profile Img" />
        </div>
      </div>
      <MySkill />
    </div>
  )
}

export default HeroHome