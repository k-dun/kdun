import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function Projects() {

  const projects = [
    {
      title: 'Hoodlums',
      description: 'Website for the digital art project: Hoodlums.',
      tech: ['Next.js', 'Javascript', 'React', 'TailwindCSS'],
      imageUrl: '/hoodlums.png',
      codeUrl: 'https://github.com/k-dun/hoodlumsNFT',
      liveUrl: 'https://www.hoodlums.io',
    },
    {
      title: 'Hoodlums',
      description: 'Website for the digital art project: Hoodlums.',
      tech: ['Next.js', 'Javascript', 'React', 'TailwindCSS'],
      imageUrl: '/hoodlums.png',
      codeUrl: 'https://github.com/k-dun/hoodlumsNFT',
      liveUrl: 'https://www.hoodlums.io',
    },
  ];

  return (
    <>
      <section id="projects" className="w-[90svw] md:w-[70vw] lg:w-[100vw] lg:ml-32 bg-[#FCFAFF] mx-auto pt-[12svh] flex flex-col justify-center items-center pb-4">
        <h3 className="text-xl self-start md:text-2xl mb-10 font-semibold"><span className="text-[#FF8080]">01</span> PROJECTS</h3>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
}