import React from 'react'
import Header from '../component/header/Header'
import Feature from '../component/features/Feature'
import Movies from '../component/movies/Movies'
import Footer from '../component/footer/Footer'


const Home = () => {
  return (
    <div>
      <Header />
    <Feature />
    <Movies />
    <Footer />
    {/* <Moviebox /> */}
    </div>
  )
}

export default Home
