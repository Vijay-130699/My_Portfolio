import React from 'react'
import styles from './styles.module.scss'
import { about_me_labels, about, self_intro, about_me_info, download_CV_label } from '../../helpers/constants'
import My_profile from '../../assets//images/Vijay.webp'
import CommonButton from '../../common/common-button/common-button'
import { downloadResume } from '../../helpers/utility'
const About = () => {

    return (
        <div className={styles.container} id='about'>
            <div className={styles.about_me_container}>
                <label className={styles.about_label}>{about} </label>
                <div className={styles.about_me}>
                    {about_me_labels}
                    <p className={styles.self_intro_label}>{self_intro}</p>
                </div>

                <div className={styles.secondary_container}>
                    {about_me_info?.map((item, index) => {
                        return (
                            <div className={styles.label_value_container} key={index}>
                                <div className={styles.label}>{item?.label} : </div>
                                <div className={styles.value}>{item?.value}</div>
                            </div>

                        )
                    })}
                </div>

                <CommonButton name={download_CV_label} buttonContainerClass={styles.buttonContainer} buttonClass={styles.button} onClick={downloadResume} />
            </div>
            <img src={My_profile} alt="profile" className={styles.profile_image} loading='lazy' />
        </div>
    )
}

export default About