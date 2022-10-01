import React from 'react';
import Profile from "../../assets/image/Profile.JPG";
import styles from "./SkillCard.module.scss";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Linkeding from "../../assets/icons/Linkeding.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import Dribbble from "../../assets/icons/Dribbble.svg";
import ExtraIcon from "../../assets/icons/ExtraIcon.svg";

const SocialIcon = ({ icon, alt }) => {
  return (
    <img src={icon} alt={alt} />
  )
}
const PerInfo = ({ heading, ans, no }) => {
  return (
    <div className="flex_between_center">
      <p className={styles.per_heading}>{heading}</p>
      <p className={`${no && styles.per_no} ${styles.per_text}`}>{no || ans}</p>
    </div>
  )
}
const LangCard = ({ language, per }) => {
  return (
    <>
      <div className="flex_between_center">
        <p>{language}</p>
        <p>{per}</p>
      </div>
      <div className={styles.bar} />
    </>
  )
}
const ExtraSkill = ({ title }) => {
  return (
    <div className="flex_start_center">
      <img src={ExtraIcon} alt="extra icon" />
      <p>{title}</p>
    </div>
  )
}
const SkillCard = () => {
  return (
    <div className={styles.skill_card}>
      <div className={styles.img_height}>
        <img src={Profile} alt="Profile Img" />
        <p className={styles.name}>Hitesh G N</p>
        <p className={styles.job_profile}>Front-End Developer</p>
      </div>
      <div className={`flex_between_center ${styles.icon_flex}`}>
        <SocialIcon icon={Facebook} alt="Face book Icon" />
        <SocialIcon icon={Instagram} alt="Instagram Icon" />
        <SocialIcon icon={Twitter} alt="Twitter Icon" />
        <SocialIcon icon={Linkeding} alt="Linkedin Icon" />
        <SocialIcon icon={Youtube} alt="Youtube Icon" />
        <SocialIcon icon={Dribbble} alt="Dribbble Icon" />
      </div>
      <div className={`${styles.per_card}`}>
        <PerInfo heading="Age: " ans="22" />
        <PerInfo heading="Residence: " ans="India" />
        <PerInfo heading="Job: " ans="Available" no="Not Available" />
        <PerInfo heading="Address: " ans="Banglore, India" />
      </div>
      <div className={styles.language}>
        <p className={styles.lang_title}>Languages</p>
        <LangCard language="English" per="90%" />
        <LangCard language="Hindi" per="90%" />
        <LangCard language="Kannada" per="100%" />
      </div>
      <div className={styles.language}>
        <p className={styles.lang_title}>Skill</p>
        <LangCard language="React" per="100%" />
        <LangCard language="Js" per="100%" />
        <LangCard language="Java" per="100%" />
        <LangCard language="Html" per="100%" />
        <LangCard language="CSS" per="100%" />
      </div>
      <div className={styles.language}>
        <p className={styles.lang_title}>Extra Skill</p>
        <div>
          <ExtraSkill title="Bootstrap, Material UI" />
          <ExtraSkill title="Chakra UI, Grid Js" />
          <ExtraSkill title="SCSS,  Redux" />
        </div>
      </div>
    </div>
  );
};

export default SkillCard