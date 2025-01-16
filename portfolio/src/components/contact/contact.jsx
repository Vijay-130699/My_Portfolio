import React from 'react'
import styles from './styles.module.scss'
import { address_label, contact_info_description, contact_labels, contact_me_labels, email_label, email_value, website_value, website_label, phone_label, phone_value, structured_address, website_url, thank_you_quotes } from '../../helpers/constants';
import address from "../../assets/icons/map.svg"
import phone from "../../assets/icons/phone.svg"
import email from "../../assets/icons/mail.svg"
import website from '../../assets/icons/website.svg'
import { toast } from 'react-toastify';
import mountain from '../../assets/images/mountains.png'

const Contact = () => {
    const handleUIPlay = (name) => {
        if (name === 'website') {
            return window.open(website_url, '_blank');
        }
        navigator.clipboard.writeText(name)
        toast.success("Copied Successfully")
    }
    return (
        <div className={styles.container} id='contact'>
            <div className={styles.contact_container}>
                <label className={styles.contact_label_positioned}>{contact_labels}</label>
                <label className={styles.my_contact_label}>
                    {contact_me_labels}
                </label>
            </div>
            <div className={styles.description_container}>
                <p className={styles.description_label}>
                    {contact_info_description}
                </p>
            </div>
            <div className={styles.image_container}>
                <div className={styles.icon_value_container}>
                    <div className={styles.list_image_container}>
                        <img alt='address' src={address} className={styles.image} />
                    </div>
                    <label className={styles.label}>{address_label}</label>
                    <p className={styles.paragraph}>
                        {structured_address}
                    </p>
                </div>

                <div className={styles.icon_value_container}>
                    <div className={styles.list_image_container}>
                        <img alt='phone' src={phone} className={styles.image} />
                    </div>
                    <label className={styles.label}>{phone_label}</label>
                    <h3 className={styles.value} onClick={() => handleUIPlay(phone_value)}>
                        {phone_value}
                    </h3>
                </div>

                <div className={styles.icon_value_container}>
                    <div className={styles.list_image_container}>
                        <img alt='email' src={email} className={styles.image} />
                    </div>
                    <label className={styles.label}>{email_label}</label>
                    <h3 className={styles.value} onClick={() => handleUIPlay(email_value)}>
                        {email_value}
                    </h3>
                </div>

                <div className={styles.icon_value_container}>
                    <div className={styles.list_image_container}>
                        <img alt='website' src={website} className={styles.image} />
                    </div>
                    <label className={styles.label}>{website_label}</label>
                    <h3 className={styles.website_value} onClick={() => handleUIPlay('website')}>
                        {website_value}
                    </h3>
                </div>
            </div>

            <div className={styles.footer_container}>
                <img alt='footer' src={mountain} className={styles.image} />
                <p className={styles.paragraph}>{thank_you_quotes}</p>
            </div>
        </div>
    )
}

export default Contact