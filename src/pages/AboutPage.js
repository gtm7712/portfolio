import React from 'react'
import ImageSection from '../components/ImageSection'
import Title from '../components/Title'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
        </div>
    )
}

export default AboutPage;
