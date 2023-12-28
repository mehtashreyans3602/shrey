import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header';
import Base from '@/components/Base/Base';
import ProjectCard from '@/components/Project/ProjectCard';
import AboutComponent from '@/components/About/AboutComponent';
import ContactComponent from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Data from '@/Data/projectData';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const SortedData = [...Data].sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
  return (
    <div className="bg-black w-full overflow-scroll">
      <div className="mt-28">
        <Base />
        <AboutComponent />
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-blue-950 to-black w-full">
          <div className="text-5xl text-center text-white items-center justify-center md:p-4 md:m-4 w-full">
            <div className="flex items-center justify-evenly ">
              <h1 className="mt-20 mb-5 p-4 border-b-4 border-blue-800 hover:border-white">Projects</h1>
            </div>
          </div>
          <div className="flex flex-col md:m-4 overflow-hidden p-3 gap-4">
            <div className=''><Link className="px-4 py-2 ring-2 rounded-full text-white" href="/Project">See All </Link></div>
            <div className="md:m-4 md:p-2 grid md:grid-cols-3 grid-flow-row md:gap-24 justify-start md:overflow-x-scroll">
              {SortedData.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
        <ContactComponent />
      </div>
    </div>
  )
}
