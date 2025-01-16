import React from 'react'
import Lottie from 'react-lottie'
import suspenseLoader from '../assets/lottie/suspense-loader.json'
import { renderInnerWidth } from '../helpers/utility'
const SuspenseLoader = () => {
    return (
        <div>
            <Lottie
                options={
                    {
                        loop: true,
                        autoplay: true,
                        animationData: suspenseLoader,
                        colSpan: true,
                    }
                }
                height={renderInnerWidth() ? 800 : 300}
                width={renderInnerWidth() ? 800 : 300}
            />
        </div>
    )
}

export default SuspenseLoader