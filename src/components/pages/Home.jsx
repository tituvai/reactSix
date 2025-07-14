import React from 'react'
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import Ads from '../layouts/Ads'
import Arrival from '../layouts/Arrival'
import BestSeller from '../layouts/BestSeller'
import AddsTwo from '../layouts/AddsTwo'
import Offers from '../layouts/Offers'

const Home = () => {

  return (
    <>
      <Banner/>
      <Information/>
      <Ads/>
      <Arrival/>
      <BestSeller/>
      <AddsTwo/>
      <Offers/>
    </>
  )
}

export default Home