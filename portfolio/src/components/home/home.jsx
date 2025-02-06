import React, { useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import { description, full_name, hello_labels, i_am_a_label, i_am_label, job_role, place } from '../../helpers/constants'
import Profile from '../../assets/images/profile.png'
import Profile2 from '../../assets/images/image.png'
import PortfolioContext from '../../context/portfoliow-context';
const Home = () => {
    const {changeContent, setChangeContent,isFading, setIsFading} = useContext(PortfolioContext)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); // Start fade-out
            setTimeout(() => {
                setChangeContent((prev) => !prev); // Change content after fade-out
                setIsFading(false); // Trigger fade-in
            }, 700); // Duration of fade-out animation
        }, 5000); // Change content every 5 seconds

        return () => clearInterval(interval); // Clear interval on cleanup
    }, [setChangeContent, setIsFading]);
    return (
        <div id='home'>
            <div className={styles.container}>
                <div className={styles.name_container}>
                    <label className={`${styles.hello_label} ${!isFading ? styles.fade_in : styles.fade_out}`}>
                        {hello_labels}
                    </label>
                    <label className={`${styles.self_intro_label} ${!isFading ? styles.fade_in : styles.fade_out}`}>
                        <div>
                            {changeContent ? i_am_label : i_am_a_label}
                        </div>
                        <div className={styles.full_name_color}>{changeContent ? full_name : description}</div>
                    </label>
                    <label className={`${styles.job_title} ${!isFading ? styles.fade_in : styles.fade_out}`}>
                        {changeContent ? job_role : place}
                    </label>
                </div>
                <img loading='lazy' src={changeContent ? Profile : Profile2} alt="profile" className={`${styles.profile_image} ${!isFading ? styles.fade_in : styles.fade_out}`} />
            </div >
        </div>
    )
}

export default Home