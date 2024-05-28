import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[90svw] md:w-[75vw] flex flex-col rounded pt-6">
      <Image src={project.imageUrl} className="items-start rounded-t md:rounded-md md:w-[75vw]" width={800} height={450} alt={project.title} />
      <p className="font-semibold text-xl md:text-2xl px-3 md:px-0 pt-6">{project.title}</p>
      <p className="text-lg md:text-xl px-3 md:px-0 py-5">{project.description}</p>
      <p className="px-2 md:px-0 flex flex-wrap">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-[#202020] text-[#FCFAFF] text-sm md:text-base rounded-2xl px-6 py-1.5 mx-1 my-1">
            {tech}
          </span>
        ))}
      </p>
      <div className="w-full flex flex-row py-8 pr-8 pl-3 md:pl-0 justify-around md:justify-start">
        <Link href={project.codeUrl} target="_blank">
          <button className="w-[38svw] md:w-[30vw] font-semibold text-[#202020] bg-[#FCFAFF] text-base md:text-lg px-5 py-3 rounded-md border border-[#202020] justify-center mr-2 md:mr-4">Code</button>
        </Link>
        <Link href={project.liveUrl} target="_blank">
          <button className="w-[38svw] md:w-[30vw] font-semibold text-[#202020] bg-[#FCFAFF] text-base md:text-lg px-5 py-3 rounded-md border border-[#FF8080] flex flex-row justify-center">Link</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;