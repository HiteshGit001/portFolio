import React from 'react';
import styles from "./MySkill.module.scss";
import ReactImg from "../../assets/image/ReactImg.png";
import CodingIcon from "../../assets/icons/CodingIcon.svg";
import javascript from "../../assets/image/javascript.png";

const SkillCard = ({ img, title, content }) => {
  return (
    <div className={styles.skill_box}>
      <img src={img} alt="React img" />
      <p className={styles.title}>{title}</p>
      <p>{content}</p>
    </div>
  )
}

const MySkill = () => {
  return (
    <div className={styles.container}>
      <p>My Skill</p>
      <p>
        These are some of my skill which I would like to show case them.
      </p>
      <div className={`${styles.card} flex_between_start`}>
        <SkillCard img={ReactImg} title="React" content="Functional component, Complex Application" />
        <SkillCard img={CodingIcon} title="Web Development" content="Some project we make Akasa, LC" />
        <SkillCard img={javascript} title="JS, CSS" content="Attractive UI creation"/>
      </div>
    </div>
  )
}

export default MySkill