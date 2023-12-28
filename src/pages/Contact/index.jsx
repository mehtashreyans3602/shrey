'use client';
import ContactComponent from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Contact = () => {
    return (
        <>
        
        <div className="bg-black w-full overflow-scroll">
            <div className="mt-20">
                <ContactComponent/>
            </div>
            
        </div>
        </>
    )
};
export default Contact;