import React from "react";
import Navbar from './navbar.jsx'
import Footer from "../footer.jsx";
import { Link } from "react-router-dom";

const Home=() =>{
    return(
        
        <div>
            <Navbar/>
            <div className="bg-stone-200">
        <div className=" bg container mx-auto">
          <div className="text-2xl text-left font-light font-sans  pt-20 mx-auto">
            Featured
          </div>
          <div className="text-7xl text-left  font-extralight font-sans pt-10 mx-auto">
            Weekly Deals
          </div>
          <div className="pb-40 mx-auto">
            <div className="grid  grid-cols-4 mx-auto pt-40 gap-4">
              <div>
                <img className=" transition-transform duration-300 transform hover:scale-125 peer h-100 w-full rounded-3xl" src="/caps_images/heade_3.png"  />
                <p className="pt-5 font-light "> Quisque lorem tortor</p>
                <p className="font-light">$ 25</p>
              </div>
              <div>
                <Link to="detail">
                <img className=" transition-transform duration-300 transform hover:scale-125 peer h-100 w-full rounded-3xl " src="/caps_images/generate person wearing caps.jpg" />
                </Link>
                <p className="pt-5 font-light ">Curabitur et ligula</p>
                <p className="font-light">$ 40</p>
              </div>
              <div>
                <img className=" transition-transform duration-300 transform hover:scale-125 peer h-100 w-full rounded-3xl" src="/caps_images/image_7.jpg"  />
                <p className="pt-5 font-light ">Etiam ullamcorper</p>
                <p className="font-light">$ 65</p>
              </div>
              <div>
                <img className=" transition-transform duration-300 transform hover:scale-125 peer h-100 w-full rounded-3xl" src="/caps_images/dc49e20af623077ec55e5e55f7a1808c.jpg" />
                <p className="pt-5 font-light ">Nulla imperdiet sit amet</p>
                <p className="font-light">$ 50</p>
              </div>
            </div>
            <div className="text-center mt-20">
              <button href="#" className=" transition duration-400 hover:scale-130 bg-black text-white rounded-2xl h-15 w-60 font-roboto font-bold">See all Products</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 ">
        <div className=" pt-40 pb-40">
          <div className="text-7xl text-center font-roboto font-light">
            Who we are
          </div>
          <div>
            <div className=" container mx-auto grid grid-cols-2 mt-20 pt-20 text-center gap-0">
              <div className="w-full h-full  ">
                <img src="../caps_images/ChatGPT Image Apr 6, 2025, 03_24_38 PM.png"/>
              </div>
              <div className="">
                <div className="w-full h-full  bg-stone-200  ">
                  <p className="text-center text-5xl justify-center p-10 "> Our Story</p>
                  <p className="text-center text-1xl  font-light justify-center p-5 ">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum eleifend erat at justo fringilla imperdiet id ac magna ac magna.</p>
                  <p className="text-center text-1xl  font-light justify-center p-5 ">Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna eu, molestie tortor lorem eget egestas.</p>
                  <div className="text-center ">
                    <button href="#" className="bg-black transition duration-400 hover:scale-130 rounded-2xl h-15 w-60 text-white font-roboto font-bold">Learn More</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container  mx-auto">
          <div className="p-30 text-center  grid grid-cols-4 gap-4">
            <div className=" align-middle text-center">
              <img className="h-18 w-18 mt-5" src="/caps_images/card.jpg" alt="" />
              <div className="text-start justify-center ">
                <p className="text-2xl font-light">Online payment</p>
                <br />

                <p className="font-light">Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
              </div>
            </div>
            <div className="">
              <img className="h-23 w-23" src="/caps_images/truck.jpg" />
              <div className="text-start justify-center ">
                <p className="text-2xl font-light">Always free shipping </p>
                <br />

                <p className="font-light"> Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
              </div>

            </div>
            <div>
              <img className="h-20 w-20 mt-3" src="/caps_images/time.jpg"  />
              <div className="text-start justify-center ">
                <p className="text-2xl font-light">14 day return policy</p>
                <br />

                <p className="font-light">Nulla imperdiet sit amet magna vestibulum dapibus</p>
              </div>
            </div>
            <div>
              <img className="h-18 w-18 mt-4" src="/caps_images/assurance.jpg"  />
              <div className="text-start justify-center ">
                <p className="text-2xl font-light">Quick delivery in 48h</p>
                <br />

                <p className="font-light">Nullam wisi ultricies gravida vitae dapibus risus</p>
              </div>
            </div>
          </div>

          <div>
            <div className="p-30 mx-auto grid grid-cols-4 ">
              <div >
                <img className="w-full h-full" src="/caps_images/image_9.jpg" />
              </div>
              <div>
                <img className="w-200 h-full" src="/caps_images/image_1.jpg" />
              </div>
              <div className="w-full h-full text-center pt-10 text-2xl bg-amber-300" >
                GET 20% OFF

                <br />
                <p className="font-light" >Fusce dolor velit laoreet</p>
                <br />
                <button href="#" className="bg-black transition duration-400 hover:scale-130 rounded-2xl font-bold h-10 w-30 text-white text-xs"><p>Learn More</p></button>
              </div>
              <div>
                <img className="w-full h-full" src="../caps_images/image_7.jpg"   />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>


        </div>
    )
} 

export default Home
