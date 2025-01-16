import React from 'react'

const ProgressBar = ({ progressContainer, label, value, progressBarCss, max_value, min_value, labelValueContainer, labelCSS, valueCSS }) => {
    return (
        <div className={progressContainer}>
            <div className={labelValueContainer}>
                <label className={labelCSS}>{label}</label>
                <label className={valueCSS}>{value}</label>
            </div>
            <progress max={max_value} min={min_value} className={progressBarCss}
                value={value}
            >
                {value}
            </progress>
        </div>
    )
}

export default ProgressBar