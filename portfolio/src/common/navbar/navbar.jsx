// import React, { useEffect } from 'react'
// import styles from './navbar.module.scss'
// import { my_name, navbar_labels } from '../../helpers/constants'
// import { ReactComponent as Burger } from '../../assets/icons/hamburger.svg'


// const Navbar = () => {
//     const [visible, setVisible] = React.useState(false);
//     const [navbarAccordion, setNavbarAccordion] = React.useState(false);
//     const [activeIndex, setActiveIndex] = React.useState(0);

//     //Default States
//     useEffect(() => { setActiveIndex(0) }, [])

//     useEffect(() => {
//         const renderVisible = () => {
//             if (window.innerWidth > 768) {
//                 setVisible(false)
//                 setNavbarAccordion(false)
//             }
//             setVisible(true)
//         }
//         renderVisible()

//         // Add event listener for window resize
//         window.addEventListener("resize", renderVisible);

//         // Clean up the event listener on unmount
//         return () => {
//             window.removeEventListener("resize", renderVisible);
//         };
//     }, [visible])

//     const handleAccordion = () => {
//         setNavbarAccordion(!navbarAccordion)
//     }

//     const switchTabs = (index, id) => {
//         setActiveIndex(index);
//         setNavbarAccordion(false)
//         const navbarHeight = 60; // Adjust based on your Navbar's height
//         const element = document.getElementById(id);

//         if (element) {
//             const elementPosition = element.offsetTop; // Get the position of the element
//             const offsetPosition = elementPosition - navbarHeight;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth',
//             });
//         }
//     }

//        // Observer to track active section
//        useEffect(() => {
//         const sections = navbar_labels.map(label => document.getElementById(label));

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         const index = navbar_labels.indexOf(entry.target.id);
//                         if (index !== -1) {
//                             setActiveIndex(index);
//                         }
//                     }
//                 });
//             },
//             { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 }
//         );

//         sections.forEach(section => {
//             if (section) observer.observe(section);
//         });

//         return () => {
//             sections.forEach(section => {
//                 if (section) observer.unobserve(section);
//             });
//         };
//     }, [activeIndex]);



//     return (
//         <div className={styles.container}>
//             <div className={styles.name}>
//                 {my_name}
//             </div>
//             {/*Hamburger Icon */}
//             {visible &&
//                 <div className={styles.hamburger} onClick={handleAccordion}>
//                     <Burger width={40} height={40} />
//                 </div>
//             }
//             <div className={navbarAccordion ? styles.navbar_children_container : styles.navbar_container}>
//                 {navbar_labels.map((label, index) => {
//                     return (
//                         <div key={index} className={index === activeIndex ? styles.active_navbar_item : styles.navbar_item} onClick={() => switchTabs(index, label)}>
//                             <label>{label}</label>
//                         </div>)
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Navbar
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import { my_name, navbar_labels } from '../../helpers/constants';
import { ReactComponent as Burger } from '../../assets/icons/hamburger.svg';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [navbarAccordion, setNavbarAccordion] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle Responsive Navbar Visibility
    useEffect(() => {
        const renderVisible = () => {
            if (window.innerWidth > 768) {
                setVisible(false);
                setNavbarAccordion(false);
            } else {
                setVisible(true);
            }
        };
        renderVisible();

        window.addEventListener('resize', renderVisible);
        return () => window.removeEventListener('resize', renderVisible);
    }, []);

    const handleAccordion = () => {
        setNavbarAccordion(!navbarAccordion);
    };

    const switchTabs = (index, id) => {
        setActiveIndex(index);
        setNavbarAccordion(false);
        const navbarHeight = 60;
        const element = document.getElementById(id);

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    // Track which section is in viewport
    useEffect(() => {
        const sections = navbar_labels.map(label => document.getElementById(label));

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let activeSectionIndex = activeIndex;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = navbar_labels.indexOf(entry.target.id);
                        if (index !== -1 && index !== activeIndex) {
                            activeSectionIndex = index;
                        }
                    }
                });
                if (activeSectionIndex !== activeIndex) {
                    setActiveIndex(activeSectionIndex);
                }
            },
            {
                root: null,
                rootMargin: '10% 0px -10% 0px',
                threshold: 0.2
            }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [activeIndex]); // Rerun when activeIndex changes

    return (
        <div className={styles.container}>
            <div className={styles.name}>{my_name}</div>
            {visible && (
                <div className={styles.hamburger} onClick={handleAccordion}>
                    <Burger width={40} height={40} />
                </div>
            )}
            <div className={navbarAccordion ? styles.navbar_children_container : styles.navbar_container}>
                {navbar_labels.map((label, index) => (
                    <div
                        key={index}
                        className={index === activeIndex ? styles.active_navbar_item : styles.navbar_item}
                        onClick={() => switchTabs(index, label)}
                    >
                        <label>{label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
