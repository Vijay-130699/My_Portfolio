import React, { useEffect } from 'react'
import styles from './navbar.module.scss'
import { my_name, navbar_labels } from '../../helpers/constants'
import { ReactComponent as Burger } from '../../assets/icons/hamburger.svg'


const Navbar = () => {
    const [visible, setVisible] = React.useState(false);
    const [navbarAccordion, setNavbarAccordion] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);

    //Default States
    useEffect(() => { setActiveIndex(0) }, [])

    useEffect(() => {
        const renderVisible = () => {
            if (window.innerWidth > 768) {
                setVisible(false)
                setNavbarAccordion(false)
            }
            setVisible(true)
        }
        renderVisible()

        // Add event listener for window resize
        window.addEventListener("resize", renderVisible);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("resize", renderVisible);
        };
    }, [visible])

    const handleAccordion = () => {
        setNavbarAccordion(!navbarAccordion)
    }

    const switchTabs = (index, id) => {
        setActiveIndex(index);
        setNavbarAccordion(false)
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
            <div className={styles.name}>
                {my_name}
            </div>
            {/*Hamburger Icon */}
            {visible &&
                <div className={styles.hamburger} onClick={handleAccordion}>
                    <Burger width={40} height={40} />
                </div>
            }
            <div className={navbarAccordion ? styles.navbar_children_container : styles.navbar_container}>
                {navbar_labels.map((label, index) => {
                    return (
                        <div key={index} className={index === activeIndex ? styles.active_navbar_item : styles.navbar_item} onClick={() => switchTabs(index, label)}>
                            <label>{label}</label>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Navbar