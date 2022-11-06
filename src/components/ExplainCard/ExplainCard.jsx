import React from 'react';
import styles from "./ExplainCard.module.scss";

const ExplainCard = () => {
  return (
    <div className={styles.exp_card}>
      <p className={styles.title}>Work History</p>
      <p className={styles.dis}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
      <div className={styles.work_exp}>
        <p className={styles.job_name}>UI Developer</p>
        <div>
          <p className={styles.job_name}>Flynava technology</p>
          <p className={styles.job_dis}>I started my carrer as a frontend web develpoer</p>
        </div>
      </div>
    </div>
  )
}

export default ExplainCard