import { useState } from 'react'
import Button from './components/Button'
import Moduletitle from './components/Moduletitle'
import Blog from './components/Blog'
import Header from './components/Header'
import Hero from './Hero'
import './App.css'
import Image from './assets/Image.png'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <div className="aboutme">
        <Moduletitle />
        <div className='innerDivContainer'>
          <div className='innerDiv'>
            <div className='aboutBtn'>About Me</div>
            <div className='aboutMetexts'>
              <h1 className='name'>Hello!</h1>
              My name is Ayomide and I specialize in web developement that utilizes <span className="name">HTML</span>, <span className="name">CSS</span>, <span className="name">JS</span>, and <span className="name">REACT</span>.
I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
When I'm not coding, I am <span className="name">writing blogs</span>, reading, or watching some great movies.
I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </div>
          </div>
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="skills">
        <Moduletitle title="Skills" texts="I am striving to never stop learning and improving" />
        <div className='skillcardContainer'>
          <div className="skillcard">
            <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9999 21.6666C10.2635 21.6666 9.66658 22.2635 9.66658 22.9999C9.66658 23.7363 10.2635 24.3333 10.9999 24.3333H11.0133C11.7496 24.3333 12.3466 23.7363 12.3466 22.9999C12.3466 22.2635 11.7496 21.6666 11.0133 21.6666H10.9999Z" fill="#292F36"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33325 0.333252C2.12411 0.333252 0.333252 2.12411 0.333252 4.33325V25.6666C0.333252 27.8757 2.12411 29.6666 4.33325 29.6666H17.6666C19.8757 29.6666 21.6666 27.8757 21.6666 25.6666V4.33325C21.6666 2.12411 19.8757 0.333252 17.6666 0.333252H4.33325ZM2.99992 4.33325C2.99992 3.59687 3.59687 2.99992 4.33325 2.99992H17.6666C18.403 2.99992 18.9999 3.59687 18.9999 4.33325V25.6666C18.9999 26.403 18.403 26.9999 17.6666 26.9999H4.33325C3.59687 26.9999 2.99992 26.403 2.99992 25.6666V4.33325Z" fill="#292F36"/>
</svg>
            <h2>Responsive Design</h2>

            <p className="skillchain">
              html-css-js-react
            </p>
          </div>
          <div className="skillcard">
          <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 22.0001H25.6666C27.8757 22.0001 29.6666 20.2092 29.6666 18.0001V4.66675C29.6666 2.45761 27.8757 0.666748 25.6666 0.666748H4.33325C2.12411 0.666748 0.333252 2.45761 0.333252 4.66675V18.0001C0.333252 20.2092 2.12411 22.0001 4.33325 22.0001H13.6666V24.6667H9.66658C8.93021 24.6667 8.33325 25.2637 8.33325 26.0001C8.33325 26.7365 8.93021 27.3334 9.66658 27.3334H20.3333C21.0696 27.3334 21.6666 26.7365 21.6666 26.0001C21.6666 25.2637 21.0696 24.6667 20.3333 24.6667H16.3333V22.0001ZM4.33325 3.33341C3.59687 3.33341 2.99992 3.93037 2.99992 4.66675V18.0001C2.99992 18.7365 3.59687 19.3334 4.33325 19.3334H25.6666C26.403 19.3334 26.9999 18.7365 26.9999 18.0001V4.66675C26.9999 3.93037 26.403 3.33341 25.6666 3.33341H4.33325Z" fill="#292F36"/>
</svg>

            <h2>Web Development</h2>
            <p className="skillchain">
              html-css-js-react
            </p>
          </div>
        </div>
        <div className='skillCircleContainer'>
          <div className="skillCircle html">
            <svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.4375 0L0.625 2.1875L4.125 41.75L4.25 43.125L5.5625 43.5L21.4375 47.9375L21.9375 48.0625L22.5 47.9375L38.375 43.5625L39.6875 43.1875L39.8125 41.8125L43.375 2.1875L43.5625 0.0625H41.375L2.625 0H0.4375ZM4.8125 4L39.1875 4.0625L35.9375 40.0625L22 43.9375L8 40.0625L4.8125 4ZM9.625 10L10.9375 24.9375H28.0625L27.5 31.375L22 32.875H21.9375L16.4375 31.375L16.125 27.25H11.125L11.8125 35.1875L21.9375 38H22L32.125 35.1875L33.5 20H15.4375L15 14.9375H33.9375L34.375 10H9.625Z" fill="white"/>
  </svg><span className="languageName">HTML</span>
          </div>
          <div className="skillCircle css">
            <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0L4 42L20 48L36 42L40 0H0ZM6.66406 6H33.3047L32.7812 12L21.3906 18H26.2422H32H32.2461L31.2227 30.0156L31.2617 30L30.7109 36L20 40L9.26953 36L8.60938 28H14.6523L14.9648 32.0664L20 33.8086L25.043 32.1016L25.7344 24H8.26172L7.74609 18L19.5664 12H7.21875L6.66406 6Z" fill="white"/>
  </svg><span className="languageName">CSS</span>
          </div>
          <div className="skillCircle js">
            <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.9883 0C23.2583 0 22.5284 0.179063 21.8984 0.539062L2.07812 11.9805C0.798125 12.7205 0 14.1216 0 15.6016V36.3594C0 37.8594 0.798125 39.2405 2.07812 39.9805L7.28125 42.9805C9.80125 44.2205 10.6998 44.2188 11.8398 44.2188C15.5798 44.2188 17.7188 41.9591 17.7188 38.0391V16.6211C17.7188 16.3011 17.4606 16.0391 17.1406 16.0391H14.6406C14.3006 16.0391 14.0586 16.3011 14.0586 16.6211V38.0195C14.0586 39.7795 12.2408 41.4991 9.30078 40.0391L3.85938 36.8984C3.65937 36.7984 3.53906 36.5794 3.53906 36.3594V15.6211C3.53906 15.3811 3.65937 15.1786 3.85938 15.0586L23.6797 3.62109C23.8597 3.50109 24.1008 3.50109 24.3008 3.62109L44.1211 15.0586C44.3211 15.1786 44.4414 15.3816 44.4414 15.6016V36.3594C44.4414 36.5794 44.3206 36.7984 44.1406 36.8984L24.3008 48.3594C24.1208 48.4594 23.8597 48.4594 23.6797 48.3594L18.5781 45.3398C18.4381 45.2398 18.2416 45.2208 18.1016 45.3008C16.6816 46.1008 16.4216 46.2002 15.1016 46.6602C14.7816 46.7602 14.2812 46.9595 15.2812 47.5195L21.8984 51.4414C22.5384 51.8014 23.2605 52 23.9805 52C24.7205 52 25.4381 51.8014 26.0781 51.4414L45.9219 39.9805C47.2019 39.2405 48 37.8594 48 36.3594V15.6211C48 14.1211 47.2019 12.74 45.9219 12L26.0781 0.539062C25.4481 0.179063 24.7183 0 23.9883 0ZM29.3203 16.0117C23.6603 16.0117 20.2812 18.4102 20.2812 22.4102C20.2812 26.7502 23.6381 27.9483 29.0781 28.4883C35.5781 29.1283 36.0781 30.0911 36.0781 31.3711C36.0781 33.5711 34.3011 34.5117 30.1211 34.5117C24.8611 34.5117 23.7003 33.1898 23.3203 30.5898C23.2803 30.3098 23.0417 30.1094 22.7617 30.1094H20.1797C19.8597 30.1094 19.6211 30.3719 19.6211 30.6719C19.6211 34.0119 21.4411 37.9883 30.1211 37.9883C36.4011 37.9883 40 35.5114 40 31.1914C40 26.9114 37.0995 25.7692 31.0195 24.9492C24.8395 24.1492 24.2188 23.7291 24.2188 22.2891C24.2188 21.0891 24.7603 19.5117 29.3203 19.5117C33.3803 19.5117 34.8995 20.3889 35.5195 23.1289C35.5795 23.3889 35.7981 23.5898 36.0781 23.5898H38.6602C38.8202 23.5898 38.9581 23.5106 39.0781 23.3906C39.1781 23.2906 39.2387 23.1292 39.2188 22.9492C38.8187 18.2292 35.6803 16.0117 29.3203 16.0117Z" fill="white"/>
  </svg><span className="languageName">JS</span>
          </div>
          <div className="skillCircle react">
            <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.8086 0.718729C17.118 0.606618 15.4564 0.909104 14 1.74998C12.0581 2.87114 10.7649 4.78489 10.0703 6.98826C9.37571 9.19163 9.21518 11.7309 9.46875 14.5039C9.49443 14.7848 9.54385 15.0775 9.57812 15.3633C9.31305 15.4766 9.0339 15.5808 8.77734 15.6992C6.24908 16.8661 4.13119 18.2733 2.57031 19.9765C1.00944 21.6798 0 23.7576 0 26C0 28.2423 1.00944 30.3202 2.57031 32.0234C4.13119 33.7266 6.24908 35.1339 8.77734 36.3008C9.0339 36.4192 9.31305 36.5233 9.57812 36.6367C9.54385 36.9224 9.49443 37.2152 9.46875 37.4961C9.21518 40.2691 9.37571 42.8083 10.0703 45.0117C10.7649 47.2151 12.0581 49.1288 14 50.25C15.9419 51.3711 18.2445 51.5353 20.5 51.0351C22.7555 50.535 25.0339 49.4029 27.3086 47.7969C27.5389 47.6343 27.7698 47.4459 28 47.2734C28.2302 47.4459 28.4611 47.6343 28.6914 47.7969C30.9661 49.4029 33.2445 50.535 35.5 51.0351C37.7555 51.5353 40.0581 51.3711 42 50.25C43.9419 49.1288 45.2351 47.2151 45.9297 45.0117C46.6243 42.8083 46.7848 40.2691 46.5312 37.4961C46.5056 37.2152 46.4562 36.9224 46.4219 36.6367C46.687 36.5233 46.9661 36.4192 47.2227 36.3008C49.7509 35.1339 51.8688 33.7266 53.4297 32.0234C54.9906 30.3202 56 28.2423 56 26C56 23.7576 54.9906 21.6798 53.4297 19.9765C51.8688 18.2733 49.7509 16.8661 47.2227 15.6992C46.9661 15.5808 46.687 15.4766 46.4219 15.3633C46.4562 15.0775 46.5056 14.7848 46.5312 14.5039C46.7848 11.7309 46.6243 9.19163 45.9297 6.98826C45.2351 4.78489 43.9419 2.87114 42 1.74998C40.0581 0.628813 37.7555 0.464679 35.5 0.964822C33.2445 1.46497 30.9661 2.59701 28.6914 4.2031C28.4611 4.3657 28.2302 4.55409 28 4.72654C27.7698 4.55409 27.5389 4.3657 27.3086 4.2031C25.0339 2.59701 22.7555 1.46497 20.5 0.964822C19.9361 0.839786 19.3721 0.756099 18.8086 0.718729ZM18.5469 4.7031C18.8877 4.72876 19.25 4.78532 19.6367 4.87107C21.1481 5.20621 22.9581 6.05452 24.8672 7.38279C23.2772 8.89113 21.7124 10.6071 20.2188 12.5273C17.8117 12.8607 15.5444 13.3544 13.4453 13.9765C13.2498 11.66 13.4175 9.66737 13.8828 8.19138C14.3592 6.68028 15.0722 5.75051 16 5.21482C16.6959 4.81306 17.5244 4.62612 18.5469 4.7031ZM37.4531 4.7031C38.4756 4.62612 39.3041 4.81306 40 5.21482C40.9278 5.75051 41.6408 6.68029 42.1172 8.19138C42.5825 9.66737 42.7502 11.66 42.5547 13.9765C40.4556 13.3544 38.1883 12.8607 35.7812 12.5273C34.2876 10.6071 32.7228 8.89113 31.1328 7.38279C33.0419 6.05452 34.8519 5.20621 36.3633 4.87107C36.75 4.78532 37.1123 4.72876 37.4531 4.7031ZM28 9.91795C28.703 10.5679 29.4047 11.2907 30.1055 12.0469C29.408 12.0222 28.711 12 28 12C27.289 12 26.592 12.0222 25.8945 12.0469C26.5953 11.2907 27.297 10.5679 28 9.91795ZM28 16C29.9291 16 31.7988 16.1134 33.5977 16.3047C34.6627 17.7669 35.6956 19.3294 36.6602 21C37.6248 22.6707 38.4615 24.3464 39.1953 26C38.4615 27.6536 37.6248 29.3292 36.6602 31C35.6956 32.6706 34.6627 34.233 33.5977 35.6953C31.7988 35.8865 29.9291 36 28 36C26.0709 36 24.2012 35.8865 22.4023 35.6953C21.3373 34.233 20.3044 32.6706 19.3398 31C18.3752 29.3292 17.5385 27.6536 16.8047 26C17.5385 24.3464 18.3752 22.6707 19.3398 21C20.3044 19.3294 21.3373 17.7669 22.4023 16.3047C24.2012 16.1134 26.0709 16 28 16ZM16.9688 17.1992C16.5987 17.7908 16.2305 18.3843 15.875 19C15.5195 19.6157 15.1906 20.2313 14.8633 20.8476C14.5592 19.8641 14.2854 18.8934 14.0742 17.9609C14.9882 17.6772 15.9639 17.4279 16.9688 17.1992ZM39.0312 17.1992C40.0361 17.4279 41.0118 17.6772 41.9258 17.9609C41.7146 18.8934 41.4408 19.8641 41.1367 20.8476C40.8094 20.2313 40.4805 19.6157 40.125 19C39.7695 18.3843 39.4013 17.7908 39.0312 17.1992ZM10.3086 19.4062C10.8197 21.537 11.5255 23.7468 12.4414 26C11.5255 28.2532 10.8197 30.463 10.3086 32.5937C8.20562 31.605 6.56481 30.4609 5.51953 29.3203C4.44906 28.1522 4 27.0714 4 26C4 24.9286 4.44906 23.8478 5.51953 22.6797C6.56481 21.5391 8.20562 20.395 10.3086 19.4062ZM45.6914 19.4062C47.7944 20.395 49.4352 21.5391 50.4805 22.6797C51.5509 23.8478 52 24.9286 52 26C52 27.0714 51.5509 28.1522 50.4805 29.3203C49.4352 30.4609 47.7944 31.605 45.6914 32.5937C45.1803 30.463 44.4745 28.2532 43.5586 26C44.4745 23.7468 45.1803 21.537 45.6914 19.4062ZM28 20C24.71 20 22 22.71 22 26C22 29.29 24.71 32 28 32C31.29 32 34 29.29 34 26C34 22.71 31.29 20 28 20ZM28 24C29.1283 24 30 24.8717 30 26C30 27.1282 29.1283 28 28 28C26.8717 28 26 27.1282 26 26C26 24.8717 26.8717 24 28 24ZM14.8633 31.1523C15.1906 31.7686 15.5195 32.3843 15.875 33C16.2305 33.6157 16.5987 34.2091 16.9688 34.8008C15.9639 34.572 14.9882 34.3228 14.0742 34.039C14.2854 33.1066 14.5592 32.1358 14.8633 31.1523ZM41.1367 31.1523C41.4408 32.1358 41.7146 33.1066 41.9258 34.039C41.0118 34.3228 40.0361 34.572 39.0312 34.8008C39.4013 34.2091 39.7695 33.6157 40.125 33C40.4805 32.3843 40.8094 31.7686 41.1367 31.1523ZM13.4453 38.0234C15.5444 38.6456 17.8117 39.1392 20.2188 39.4726C21.7124 41.3929 23.2772 43.1088 24.8672 44.6172C22.9581 45.9454 21.1481 46.7937 19.6367 47.1289C18.0899 47.4719 16.9278 47.3208 16 46.7851C15.0722 46.2494 14.3592 45.3197 13.8828 43.8086C13.4175 42.3326 13.2498 40.3399 13.4453 38.0234ZM42.5547 38.0234C42.7502 40.3399 42.5825 42.3326 42.1172 43.8086C41.6408 45.3197 40.9278 46.2494 40 46.7851C39.0722 47.3208 37.9101 47.4719 36.3633 47.1289C34.8519 46.7937 33.0419 45.9454 31.1328 44.6172C32.7228 43.1088 34.2876 41.3929 35.7812 39.4726C38.1883 39.1392 40.4556 38.6456 42.5547 38.0234ZM25.8945 39.9531C26.592 39.9778 27.289 40 28 40C28.711 40 29.408 39.9778 30.1055 39.9531C29.4047 40.7093 28.703 41.4321 28 42.082C27.297 41.4321 26.5953 40.7093 25.8945 39.9531Z" fill="white"/>
  </svg><span className="languageName">REACT</span>
          </div>
        </div>
      </div>
      {/* <Blog /> */}
    </>
  )
}

export default App
