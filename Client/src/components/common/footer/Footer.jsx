import React,{ useState } from "react"
import { footer } from "../../data/Data"
import axios from 'axios';
import "./footer.css"

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/subscribe', { email });
      setMessage('Subscription successful');
      setEmail(''); // Clear the email field
      setTimeout(() => setMessage(''), 3000); // Hide the message after 3 seconds
    } catch (err) {
      console.error(err); // Log the error to console for debugging
      setMessage(err.response.data.message);
    }
  };
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <a href="/signup">
            <button className='btn5'>Contact Us Today</button></a>
            
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.jpg' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              {/* <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p> */}

            <form  onSubmit={handleSubmit}>
              <div className='input flex'>
                <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address'  required/>
                <button type="submit">Subscribe</button>
                {message && <p>{message}</p>}
              </div>
            </form>
            </div>
          </div>

          {/* {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 MyPg. Designd By Simran Kaushal.</span>
      </div>
    </>
  )
}

export default Footer
