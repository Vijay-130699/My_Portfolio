import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'
const LandingLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.children_container}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LandingLayout