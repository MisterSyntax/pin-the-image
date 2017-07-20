import React from 'react'

import PictureClicker from '../../containers/PictureClicker'
import PictureSelector from '../PictureSelector'

const Home = () => {
    return (<div id='home'>
            <PictureSelector />
            <PictureClicker imgName="dog2.png" imgId="10001"/>
        </div>)
}

export default Home