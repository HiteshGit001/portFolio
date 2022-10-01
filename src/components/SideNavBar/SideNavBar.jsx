import React from 'react';
import Contact from "../../assets/icons/Contact.svg";
import Experience from "../../assets/icons/Experience.svg";
import Project from "../../assets/icons/Project.svg";
import Skill from "../../assets/icons/Skill.svg";
import EducationIcon from "../../assets/icons/EducationIcon.svg";
import Home from "../../assets/icons/Home.svg";
import styles from "./SideNavBar.module.scss";
import { useState } from 'react';

const NavIcon = ({ icon, title }) => {
  const [active, setActive] = useState("Home");

  return (
    <div className={styles.nav_icon}>
      <img className={active === title ? styles.img_active : null}
        onClick={() => {
          setActive(title)
          console.log(active, "act");
        }}
        src={icon}
        alt={`${title} Icon`} />
      <span className={styles.tool}>{title}</span>
      <span className={styles.tip} />
    </div>
  )
}
const SideNavBar = () => {
  return (
    <div className={styles.side_nav}>
      <NavIcon icon={Home} title="Home" />
      <NavIcon icon={Skill} title="Skill" />
      <NavIcon icon={EducationIcon} title="Education" />
      <NavIcon icon={Project} title="Project" />
      <NavIcon icon={Experience} title="Experience" />
      <NavIcon icon={Contact} title="Contact" />
    </div>
  )
}

export default SideNavBar