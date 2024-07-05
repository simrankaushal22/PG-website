import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          
          <div>
            <Heading title='Welcome to My Pg Website 

' subtitle='About Us' />

          <p>Book My PG is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by Location with Specific requirement by filtering by Location, IT Parks, Land Mark, Price, Room type, Amenities, Gender and Food. .</p>
          <br/>
          <h1 className="hii">who we are ? </h1> 
          <br/>
          <p>
We are a set of well-selected and chosen Paying Guest services. This is a platform where those, who are willing to open their homes to guests, meet the people looking for wonderful homes to stay in and not have to look for hotels or favors in any city for their long stays. We ensure the places listed and the people looking for a stay are selected based on careful filtering criteria so that both parties benefit and the safety of all involved persons is ensured. We know how important a safe home is to you at both ends of the deal and that is a promise we make.</p>
<img  className="roomimg" src='https://imagecdn.99acres.com/media1/22504/14/450094278M-1704816214322.jpg'alt='' />
<br/>
<h1 className="hii">What we do ? </h1>  
<br/>
<p>We put together a list of places where our guests can stay as a PG. This is done based on listings on our site by homeowners. We ensure that not only are they a safe home for the guest but the guest too is safe for them. These places can be searched based on locality, budget, need, and multiple other filters. Find the perfect PG stay or guest with us.

<br/>

To meet our aim, we eliminate the two major problems a guest or host may face. The first of these is a lack of information for anyone new in a city. Our site will list all the information you can seek not just about the house and homeowners but also the locality and other aspects. The other is the loss of capital to a host when a paying guest leaves. We do not wish our homeowners and makers to lose money waiting for the next stroke of luck and therefore listing with us helps them find a guest sooner.</p>


<img  className="roomimg2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeSxwNACkpAj8ynSMoxPfFuiNxBQ7Q8ABHA&s'alt='' />

<br/>
<h1 className="hii">What are we aiming at?</h1> 
<br/>
<p>Our aim and motto are simple and singular. To provide the guests with a PG that feels like home best fitting their needs and the homeowners a guest who fits right in. To attain this we work with homeowners and guests to give everyone involved the best possible experience.

Our method of arriving at this involves detailed verification of all parties, a good database of homes and guests and being updated in real-time ensuring there is no problem for either party to find the right person/ home sitting where they are from their systems.

So come together home makers/ owners and guests to find what you seek. We hope we will be able to give you what you seek with us. We hope to make the PG community a secure one where all people get the best out of the system.</p>
<hr/>


          </div>
        </div>
      </section>
    </>
  )
}

export default About








