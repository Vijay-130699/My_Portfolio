import React from 'react'
import styles from './styles.module.scss'
import { achievements_info, achievements_label, my_achievements_label } from '../../helpers/constants'
import achievements from '../../assets/images/achieve.png'
const Achievements = () => {

    return (
        <div className={styles.container} id='achievements'>
            <div className={styles.achievements_container}>
                <label className={styles.achievements_label_positioned}>{achievements_label}</label>
                <label className={styles.my_achievements_label}>
                    {my_achievements_label}
                </label>
            </div>

            <div className={styles.achievements_info_container}>
                <div className={styles.achievements_image_container}>
                    <img src={achievements} alt='achievements' className={styles.achievementes_image} />
                </div>
                <div className={styles.achievements_list_container}>
                    {achievements_info?.map((item, index) => {
                        return (
                            <div key={index} className={styles.achievement_item_container}>
                                <label className={styles.achievement_label}>{item?.label}</label>
                                <p className={styles.achievement_description}>{item?.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Achievements