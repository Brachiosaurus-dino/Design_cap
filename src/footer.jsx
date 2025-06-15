import React from "react";

const Footer =() => {
    return(
        <div>
            <div className="bg-slate-400">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          <div className="p-20 space-y-3">
            <a href="#" className="flex p-0 items-start justify-start space-x-3 rtl:space-x-reverse">
              <img src="../caps_images/9ed5e315-af6c-47d2-8f0f-ca7d3f12e044.png" className="h-10" />
              <span className="self-center font-bold  drop-shadow-sm whitespace-nowrap font-roboto  ">Topperz</span>
            </a>
            <a href="#" className="flex p-0 items-start justify-start space-x-3 rtl:space-x-reverse">
              <img src="../caps_images/d3d6553c-6b18-4a8d-9792-f4f94194696f.png" className="h-10"  />
              <span className="self-center font-bold  drop-shadow-sm whitespace-nowrap font-roboto ">+61 (0) 383 766 284</span>
            </a>
            <a href="#" className="flex p-0 items-start justify-start space-x-3 rtl:space-x-reverse">
              <img src="../caps_images/d7ab897f-46f0-40f7-9c77-7ceddc0884fd.png" className="h-10"  />
              <span className="self-center font-bold  drop-shadow-sm whitespace-nowrap font-roboto ">noreply@envato.com</span>
            </a>
           
            

          </div>
          <div className="p-20">
            <div className="space-y-3" >
              <p className="font-bold font-roboto ">Delivery</p>
              <p className="font-light mt-4"> How it Works</p>
              <p className="font-light"> Free Delivery </p>
              <p className="font-light"> FAQ</p>
              <p className="font-light"> Payment Methods</p>
              <p className="font-light"> Delivery Area</p>

            </div>
          </div>

          <div className="p-20">
            <div  className="space-y-3" >
              <p className="font-bold font-roboto  ">Customer service</p>
              <p className="font-light mt-4"> Orders</p>
              <p className="font-light"> Downloads </p>
              <p className="font-light"> Addresses</p>
              <p className="font-light"> Account Details</p>
              <p className="font-light"> Logout</p>

            </div>
          </div>
          <div className="p-20"> 
          <div  className="space-y-3" >
              <p className="font-bold font-roboto ">Useful links</p>
              <p className="font-light mt-4"> Contact Us</p>
              <p className="font-light"> Help & ABout Us </p>
              <p className="font-light"> Shiping and returns</p>
              <p className="font-light"> Account Details</p>
              <p className="font-light"> Logout</p>

            </div>
          </div>

        </div>
        <p className=" pb-10 text-center font-roboto font-light"> © 2025 Mantiss by Home group | All Rights Reserved | Powered by Mantiss</p>
      </div>
        </div>
    )
}

export default Footer