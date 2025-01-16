import React from 'react'
import styles from './styles.module.scss'
const CommonButton = ({ onClick, name, buttonClass, buttonContainerClass }) => {
    return (
        <div className={buttonContainerClass} >
            <button onClick={onClick} className={`${buttonClass} ${styles.common_styles}`}>
                {name}
            </button>
        </div>
    )
}

export default CommonButton