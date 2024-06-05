import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[90svw] md:w-[70vw] lg:w-full flex flex-col rounded pt-6 lg:pt-10">
      <Image src={project.imageUrl} className="items-start rounded-t md:rounded-md md:w-[70vw] lg:w-[35vw] border border-[#202020] shadow-lg" width={800} height={450} alt={project.title} />
      <div className="lg:flex lg:flex-col lg:w-[35vw]">
        <p className="font-semibold text-lg px-3 md:px-0 pt-6">{project.title}</p>
        <p className="text-base px-3 md:px-0 py-5 flex-wrap">{project.description}</p>
        <p className="px-2 md:px-0 flex flex-wrap">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-[#202020] text-[#FCFAFF] text-sm shadow-md rounded-2xl px-6 lg:px-8 py-1.5 lg:py-2 mx-1 lg:mx-0 lg:mr-2 my-1 lg:my-2 lg:flex-wrap">
              {tech}
            </span>
          ))}
        </p>
        <div className="w-full flex flex-row py-8 pr-8 pl-3 md:pl-0 justify-start">
          <Link href={project.codeUrl} target="_blank" className="">
            <button className="w-[42svw] md:w-[26vw] lg:w-[14vw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#202020] shadow-md hover:shadow-xl mr-2 flex flex-row justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg><span className="pl-2 bg-[#FCFAFF]">Code</span>
            </button>
          </Link>
          {project.liveUrl && project.liveUrl.trim() !== "" && (
            <Link href={project.liveUrl} target="_blank">
              <button className="w-[42svw] md:w-[26vw] lg:w-[14vw] font-semibold text-[#202020] bg-[#F4B7AA] text-base px-5 py-3 rounded-md border border-[#202020] shadow-md hover:shadow-xl mr-2 flex flex-row justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-app-window bg-[#F4B7AA]"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg><span className="pl-2 bg-[#F4B7AA]">Live</span>
              </button>
            </Link>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;