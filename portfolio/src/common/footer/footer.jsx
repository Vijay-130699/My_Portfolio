import React from 'react'
import styles from './styles.module.scss'
import { about, email_value, footer_logos, links_label, my_facebook_url, my_insta_url, navbar_labels, phone_value, question_label, self_intro, structured_address, website_url } from '../../helpers/constants'
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import arrow from '../../assets/icons/right.svg'
import location from '../../assets/icons/Location.svg'
import phone from '../../assets/icons/yellow-phone.svg'
import mail from '../../assets/icons/yellow-mail.svg'
const Footer = () => {

    const renderLogo = (name) => {
        console.log(name, "name")
        switch (name) {
            case 'facebook': return facebook
            case 'instagram': return instagram
            case 'linkedin': return linkedin
            default: return
        }
    }

    const routeToSite = (name) => {
        switch (name) {
            case 'facebook': return window.open(my_facebook_url, '_blank').focus()
            case 'instagram': return window.open(my_insta_url, '_blank').focus()
            case 'linkedin': return window.open(website_url, '_blank').focus()
            default: return
        }
    }

    const switchTabs = (index, id) => {
        const navbarHeight = 60; // Adjust based on your Navbar's height
        const element = document.getElementById(id);

        if (element) {
            const elementPosition = element.offsetTop; // Get the position of the element
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.label_value_container}>
                <label className={styles.label}>{about}</label>
                <p className={styles.paragraph}>
                    {self_intro}
                </p>
                <div className={styles.image_container}>
                    {footer_logos?.map((item, index) =>
                        <img alt='logo'
                            src={renderLogo(item)}
                            className={styles.image}
                            key={index}
                            onClick={() => routeToSite(item)}
                        />
                    )}
                </div>
            </div>
            <div className={styles.label_value_container}>
                <label className={styles.label}>{links_label}</label>
                {navbar_labels?.map((item, index) => {
                    return (<div key={index} className={styles.image_label_container} onClick={() => switchTabs(index, item)}>
                        <img alt='arrow' src={arrow} className={styles.image} />
                        <label className={styles.links_header}>{item}</label>
                    </div>)
                })}
            </div>
            <div className={styles.label_value_container}>
                <label className={styles.label}>{question_label}</label>

                <div className={styles.image_label_containers}>
                    <img alt='location' src={location} className={styles.location} />
                    <label className={styles.label_value}>
                        {structured_address}
                    </label>
                </div>

                <div className={styles.image_label_containers}>
                    <img alt='phone' src={phone} className={styles.location} />
                    <label className={styles.label_value}>
                        {phone_value}
                    </label>
                </div>

                <div className={styles.image_label_containers}>
                    <img alt='mail' src={mail} className={styles.location} />
                    <label className={styles.label_value}>
                        {email_value}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Footer