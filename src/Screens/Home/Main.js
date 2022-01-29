import React from 'react'
import BestSeller from './BestSeller'
import FeaturedProduct from './FeaturedProduct'
import HotProducts from './HotProducts'
import LatestNews from './LatestNews'
import Progress from './Progress'
import Shop from './Shop'
import Slider from './Slider'

function Main() {
    return (
        <div>
            <Slider/>
            <HotProducts/>
            <BestSeller/>
            <Shop/>
            <Progress/>
            <LatestNews/>
            <FeaturedProduct/>
        </div>
    )
}

export default Main
