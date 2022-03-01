import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import Slider from '../components/Swiper'
import TravelTypes from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Slider/>
    </Flex>
  )
}

export default Home
