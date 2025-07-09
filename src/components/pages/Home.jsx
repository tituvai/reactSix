import React from 'react'
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import Ads from '../layouts/Ads'
import Arrival from '../layouts/Arrival'
import BestSeller from '../layouts/BestSeller'

const Home = () => {
  return (
    <>
      <Banner/>
      <Information/>
      <Ads/>
      <Arrival/>
      <BestSeller/>
    </>
  )
}

export default Home