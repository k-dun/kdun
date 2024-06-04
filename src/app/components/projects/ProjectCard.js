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
        <div className="w-full flex flex-row py-8 pr-8 pl-3 md:pl-0 justify-around md:justify-start">
          <Link href={project.codeUrl} target="_blank">
            <button className="w-[38svw] md:w-[26vw] lg:w-[12vw] font-semibold text-[#202020] bg-[#FCFAFF] shadow-md hover:shadow-xl text-base px-5 py-3 rounded-md border border-[#202020] mr-2 md:mr-4">Code</button>
          </Link>
          {project.liveUrl && project.liveUrl.trim() !== "" && (
            <Link href={project.liveUrl} target="_blank">
              <button className="w-[38svw] md:w-[26vw] lg:w-[12vw] font-semibold text-[#202020] bg-[#F4B7AA] shadow-md hover:shadow-xl text-base px-5 py-3 rounded-md border border-[#202020]">
                Live
              </button>
            </Link>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;