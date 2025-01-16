import React from 'react'
import Lottie from 'react-lottie'
import v_letter from '../assets/lottie/V-letter.json'
import { renderInnerWidth } from '../helpers/utility'

const VletterLottie = () => {
    return (
        <div>
            <Lottie
                options={
                    {
                        loop: true,
                        autoplay: true,
                        animationData: v_letter,
                        colSpan: true,
                    }
                }
                height={100}
                width={100}
            />
        </div>
    )
}

export default VletterLottie