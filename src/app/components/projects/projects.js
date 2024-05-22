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
      <section id="projects" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center pt-[12svh] pb-4">
        <h3 className="w-[50svw] text-xl mb-16 font-semibold"><span className="text-[#FF8080]">01</span> PROJECTS</h3>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
}