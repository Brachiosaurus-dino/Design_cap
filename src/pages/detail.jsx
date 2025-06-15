import Footer from "../footer.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    const [showNavbar, notShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        notShowNavbar(false);
      } else {
        notShowNavbar(true);
      }
  
      setLastScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <div>
           <div className=" text-center ">
        <img
          className="  rounded-md scale-100 transition-all duration-300 object-cover object-position-[50%_50%] "
          src="/caps_images/hop.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold font-roboto">
          From the streets to the stadium, we've got you covered
        </div>
        <div className="mt-50 absolute inset-0 flex items-center justify-center text-white font-light  text-2xl font-roboto">
          Wearing a cap to hide the messy hair, but still slaying the day
          <br />
          crafted to reflect your individualit
        </div>

        <div className="absolute top-0 left-0 text-start mt-10">
          <div className="container mx-auto fixed ">
             <nav
                         className={`bg-gray-200 fixed w-full z-40 top-0 start-0 transition-transform duration-300 ${
                           showNavbar ? "translate-y-0" : "-translate-y-full"
                         }`}
                       >
                         <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
                           <a
                             href="#"
                             className="flex items-center space-x-3 rtl:space-x-reverse"
                           >
                             <span className="self-center font-serif text-3xl font-light whitespace-nowrap ml-10 text-black-200">
                               Topperz
                             </span>
                           </a>
                           <div className="gap-10 flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse mr-10">
                             <img src="" alt="" srcSet="" />
                             <a href="#">
                               <img
                                 className="h-10 w-10"
                                 src="/caps_images/search-interface-symbol.png"
                                 alt="Search"
                               />
                             </a>
                             <a href="#">
                               <img
                                 className="h-10 w-10"
                                 src="/caps_images/shopping-cart.png"
                                 alt="Cart"
                               />
                             </a>
                           </div>
                           <div
                             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                             id="navbar-sticky"
                           >
                             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                               <li>
                                 <Link to={"/"}>
                                   <a
                                     href="#"
                                     className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                                   >
                                     Home
                                   </a>
                                 </Link>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                                 >
                                   About
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                                 >
                                   Services
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                                 >
                                   Contact
                                 </a>
                               </li>
                             </ul>
                           </div>
                         </div>
                       </nav>
          </div>
        </div>
      </div>


            <div className="bg-stone-300">
                <div className="container mx-auto">
                    <p className="mx-auto text-left  text-9xl p-20 font-light underline decoration-2  underline-offset-15  ">SHOP</p>
                    <div>
                        <div className=" mx-auto scale-90 text-center grid grid-cols-2 pb-20 gap-2">
                            <div className="h-full w-full">
                                <img className="rounded-3xl transition-transform duration-300 transform hover:scale-125 peer " src="/caps_images/generate person wearing caps.jpg" />
                            </div>
                            <div className="bg-stone-300 f-full w-full p-10">
                                <p className=" text-black text-left font-roboto font-semibold text-5xl">Curabitur et ligula</p>
                                <p className=" text-black text-left font-roboto font-semibold text-5xl mt-9">£11.20</p>
                                <p className="text-black font-light text-2xl text-left mt-9">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula porta urna.</p>
                                <div className="text-left mt-10">
                                    <div className="font-light text-2xl ">Occasinal : Casual</div>

                                    <div className="font-light text-2xl mt-5">Fitype : Regular</div>
                                    <div className="font-light text-2xl mt-5">Style : Elegant</div>

                                    <div className="font-light text-2xl mt-5">Material : Polyster</div>
                                </div>

                                <div className="text-left mt-10">
                                    <button href="#" className="bg-black transition duration-400 hover:scale-130 rounded-2xl h-15 w-60 text-white font-roboto font-bold">Add to Cart</button>
                                </div>

                            </div>

                        </div>
                        <div className=" ml-20 pb-20">
                            <p className="font-bold font-roboto text-2xl text-left">Description</p>
                            <p className="mt-5 font-semibold text-2xl text-left">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat convallis.</p>
                            <p className="mt-5 font-light text-left">* Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus</p>
                            <p className="mt-3 font-light text-left">* Cum sociis natoque penatibus et ultrices volutpat</p>
                            <p className="mt-3 font-light text-left">* Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus</p>
                            <p className="mt-3 font-light text-left">* Faucibus quis, porttitor eros cursus lectus, pellentesque eget</p>
                            <p className="mt-3 font-light text-left">* Bibendum a, gravida ullamcorper quam viverra consectetuer porttitor risus</p>
                            <div className="mt-5 font-light text-2xl text-left">
                                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum.
                            </div>
                            <div className="grid grid-cols-3 mt-20 text-center gap-4">
                            <div>Small</div>
                            <div>Dimension A</div>
                            <div>Dimension B</div>
                            <div>Small (S)</div>
                            <div>12 cm</div>
                            <div>38-41 cm</div>
                            <div>Medium (M)</div>
                            <div>13.5 cm</div>
                            <div>41-43 cm</div>
                            <div>Large (L)</div>
                            <div>15 cm</div>
                            <div>43-45 cm</div>
                            <div>X-Large (XL)</div>
                            <div>16.5 cm</div>
                            <div>45-47 cm</div>
                            

                        </div>

                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </div >
    )
}


export default Detail
