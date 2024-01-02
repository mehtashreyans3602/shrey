'use client';
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import ProjectComponent from "@/components/Project/ProjectComponent";
const Project = () => {

    return (
        <>
            <Header />
            <div className="bg-black w-full overflow-scroll">
                <ProjectComponent />
            </div>
        </>
    )
}
export default Project;