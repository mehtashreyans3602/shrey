import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="w-full font-medium text-white text-base bg-black">
            <div className="flex items-center md:justify-between justify-center border-t-4 border-blue-800 md:p-10 p-4 gap-4 flex-wrap w-full">

                <span className=" ">Copyright ©2023 Shreyans Mehta</span>
                <div className=' flex flex-col gap-2 text-center'>
                    <div className='flex justify-around items-center text-blue-500 text-2xl space-x-8'>
                        
                <p className='text-white text-lg'>Connect with Me :</p>
                        <a href="https://github.com/mehtashreyans3602"><button><FaGithub className='hover:text-white' /></button></a>
                        <a href="https://www.instagram.com/shreyans3602/"><button><FaInstagram className='hover:text-white' /></button></a>
                        <a href="https://www.linkedin.com/in/shreyans-mehta-4b406a1b3/"><button><FaLinkedinIn className='hover:text-white' /></button></a>

                    </div>
                </div>

            </div>
        </div>
    )
};
export default Footer;