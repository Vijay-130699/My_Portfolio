import React from 'react'
import styles from './styles.module.scss'
import { download_CV_label, educational_info_content, resume_content, resume_labels, work_info_content } from '../../helpers/constants'
import CommonButton from '../../common/common-button/common-button'
import { downloadResume } from '../../helpers/utility'
const Resume = () => {
    return (
        <div className={styles.container} id='resume'>
            <div className={styles.resume_container}>
                <label className={styles.position_resume}>{resume_labels}</label>
                <div className={styles.resume_labels_container}>
                    <label className={styles.resume_labels}>{resume_labels}</label>

                </div>
            </div>
            <div className={styles.resume_content_container}>
                <p className={styles.resume_content}>
                    {resume_content}
                </p>
            </div>
            <div className={styles.education_professional_container}>
                <div className={styles.educational_container}>
                    {educational_info_content?.map((item, index) => {
                        return (
                            <div key={index} className={styles.item_container}>
                                <label className={styles.date_value}>{item?.date}</label>
                                <label className={styles.degree_value}>{item?.degree}</label>
                                <label className={styles.college_value}>{item?.college}</label>
                                <p className={styles.description_value}>{item?.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.professional_container}>
                    {work_info_content?.map((item, index) => {
                        return (
                            <div key={index} className={styles.item_container}>
                                <label className={styles.date_value}>{item?.date}</label>
                                <label className={styles.role_value}>{item?.role}</label>
                                <label className={styles.company_value}>{item?.company}</label>
                                <p className={styles.description_value}>{item?.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <CommonButton name={download_CV_label} buttonContainerClass={styles.button_container} buttonClass={styles.button} onClick={downloadResume} />
        </div>
    )
}

export default Resume