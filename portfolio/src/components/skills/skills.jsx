import React from 'react'
import styles from './styles.module.scss'
import { my_skills_label, skills_content, skills_info, skills_label } from '../../helpers/constants'
import ProgressBar from '../../common/progress-bar/progress-bar'
const Skills = () => {
    return (
        <div className={styles.container} id='skills'>
            <div className={styles.skills_position_container}>
                <label className={styles.skills_label}>
                    {skills_label}
                </label>
                <div className={styles.my_skills_container}>
                    <label className={styles.my_skills_label}>{my_skills_label}</label>
                </div>
                <p className={styles.skills_content}>
                    {skills_content}
                </p>
            </div>

            <div className={styles.skills_container}>
                {skills_info?.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.container} ${index % 2 === 0 ? styles.leftItem : styles.rightItem}`}>
                            <ProgressBar
                                label={item?.skills}
                                value={item?.percent}
                                min_value={item?.percent}
                                max_value={100}
                                progressContainer={styles.progress_container}
                                labelValueContainer={styles.label_value_container}
                                progressBarCss={styles.progress_bar_css}
                                labelCSS={styles.label_css}
                                valueCSS={styles.value_css}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills