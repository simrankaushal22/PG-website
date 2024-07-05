import React from "react"
import "./Servi.css"

const Servi = () => {
  return (
    <>
       
        <section className='services '>
        <div className='container flex mtop'>
        <div className='leftrow'>
        <h1 className="servih1">Our Services</h1>
        

    <p>  1. Fully Furnished Rooms: Our rooms come fully furnished with comfortable beds, study desks, chairs, wardrobes, and essential amenities to provide you with a cozy and functional living space.</p>
        <br/>
     <p> 2. Housekeeping: Enjoy a clean and tidy environment with our regular housekeeping services. Our dedicated staff ensures that all common areas and facilities are well-maintained to enhance your living experience.</p>
<br/>
    <p> 3. High-Speed Internet: Stay connected with high-speed internet access available throughout the premises. Whether you need to study, work, or simply unwind with your favorite shows, we've got you covered.</p>
<br/>
    <p> 4. 24/7 Security: Your safety is our top priority. Our premises are equipped with round-the-clock security surveillance and trained personnel to ensure a secure living environment for all our residents.</p>
<br/>
    <p> 5. Laundry Facilities: Save time and effort with our on-site laundry facilities. Say goodbye to the hassle of finding a laundromat – simply drop off your laundry and let us take care of the rest.</p>
</div>
<div className='rightrow'>
  
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kU64bwYdSHtL86Zg73WD__Qoqtu8AAILug&s' alt='' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6cZNbsWJCMxK1ewI-tKeNQAeQha-MraiqA&s' alt='' />
            <img src='data:image/png;base64,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' alt='' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAFXQTEaKk4_mGvgnrMtSjuMOao_vdxXFQw&s' alt='' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH69yyX8HBvS_kgrZGA2DQ7B-AcRQzyPwWuQ&s' alt='' />
            </div>
          </div>
          
      </section>
      
    </>
    
  )
}

export default Servi
