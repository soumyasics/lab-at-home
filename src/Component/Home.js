import React from 'react'
import Carousel from './Carousel'
import Search from './Search'
import Category from './Category'
import Nav from './Nav'
import Aboutus from './Aboutus'
import CorouselHome from './CorouselHome'

function Home() {
  return (
    <>
    <Nav/>
          <CorouselHome/>
          <Aboutus/>
     {/* <Search/> */}
     {/* <Category/> */}
     {/* <Testimonal/> */}
    </>
  )
}

export default Home