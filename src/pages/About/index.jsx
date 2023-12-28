'use client';


import AboutComponent from "@/components/About/AboutComponent";
import Footer from "@/components/Footer/Footer";
import TimeLine from "@/components/About/TimeLine";
const About = () => {
    return (
        <>
            
            <div className="bg-black w-full overflow-scroll">
            <div className=" mt-20">
            <AboutComponent />
            </div>
            <div>
                <TimeLine/>
            </div>
            
            </div>
        </>
    )
};
export default About;