import React from 'react'
import Lottie from 'react-lottie'
import offline from '../assets/lottie/offline-loader.json'
import { renderInnerWidth } from '../helpers/utility'

const Offline = () => {
    return (
        <div>
            <Lottie
                options={
                    {
                        loop: true,
                        autoplay: true,
                        animationData: offline,
                        colSpan: true,
                    }
                }
                height={renderInnerWidth() ? 700 : 300}
                width={renderInnerWidth() ? 700 : 300}
            />
        </div>
    )
}

export default Offline