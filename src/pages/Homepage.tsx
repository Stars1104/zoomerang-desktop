import { useEffect, useState } from "react";
import BackgroundImage from "../assets/background-image.png"
import MobileBackgroundImage from "../assets/background-image-mobile.jpg"
import Logo from "../assets/logo.png"

const HomePage = () => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 425);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`w-full h-screen flex justify-center items-center bg-no-repeat bg-cover relative`}
            style={{ backgroundImage: `url(${isMobile ? MobileBackgroundImage : BackgroundImage})`, backgroundSize: isMobile ? "100% 100%" : "", }}>
            <div className={`${isMobile ? "absolute top-0 left-0 w-full h-full bg-[#0F0D0D] opacity-60 inset-0" : "hidden"}`}></div>

            {/* Logo */}
            <img src={Logo} alt="logo" className="absolute md:top-2 top-56 md:left-2 left-7 w-[250px] md:w-[150px] md:flex hidden" />

            {/* Title */}
            <div className="flex flex-col items-center justify-center gap-8 md:h-auto h-full z-10 px-4 relative">
                <img src={Logo} alt="logo" className="w-[250px] md:w-[150px] md:hidden flex" />
                <h1 className="text-[#FFFFFF] md:text-[48px] text-[24px] font-[600] font-[Inter] md:mt-0 mt-20">Enjoy The World In Briefs</h1>
                <span className="lg:w-[55rem] md:w-[45rem] w-full text-center text-[#9A9A9A] md:text-[26px] text-[18px] font-[400] font-[Inter]">Create viral videos effortlessly with Zoomerang! Trendy effects seamless transitions, and powerful tools all in one app! 🎶"</span>

                <div className="group cursor-pointer md:relative absolute md:bottom-0 bottom-12">
                    <div className="relative w-[250px] h-[75px] opacity-90 overflow-hidden rounded-xl z-10 cursor-pointer">
                        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all cursor-pointer 
                            duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>
                        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl cursor-pointer inset-0.5 bg-[#1c7a7e]">
                            <button name="text"
                                className="text-white font-bold text-[26px] h-full opacity-90 w-full px-12 py-3 rounded-xl cursor-pointer border border-[#1c7a7e] bg-[linear-gradient(90deg,_#0E3D3F,_#000000_100%)]">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;