import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle ={"The best rooms have something to say about the people who live in them."}/>

          {/* <form className='flex'>
            
            <div className='box'>
              <span>Rooms</span>
              <input type='text' placeholder='Rooms' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
           
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form> */}
        </div>
      </section>
    </>
  )
}

export default Hero
