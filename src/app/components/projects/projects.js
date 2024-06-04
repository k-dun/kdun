import ProjectCard from './ProjectCard';

export default function Projects() {

  const projects = [
    {
      title: 'Filmue',
      description: 'Movie quiz web app for film buffs.',
      tech: ['Next.js', 'Typescript', 'React', 'TailwindCSS', 'Node.js', 'js-cookie', 'OMDb API'],
      imageUrl: '/filmue-1000-550.png',
      codeUrl: 'https://github.com/k-dun/filmue',
      liveUrl: 'https://filmue.vercel.app/',
    },
    {
      title: 'Hoodlums',
      description: 'Website for the digital art project: Hoodlums.',
      tech: ['Next.js', 'Javascript', 'React', 'TailwindCSS'],
      imageUrl: '/hoodlums-1000-550.png',
      codeUrl: 'https://github.com/k-dun/hoodlumsNFT',
      liveUrl: '',
    },
    {
      title: 'Career Companion',
      description: 'Final bootcamp group project: Web app helping job-hunters stay organised. A job applications tracker, custom Cover Letter and CV builder and a job interview simulator.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI API', 'TailwindCSS', 'CSS', 'HTML'],
      imageUrl: '/cc-makers-1000-550.png',
      codeUrl: 'https://github.com/francescoGuglielmi/career_companion',
      liveUrl: '',
    },
    {
      title: 'Makers BnB',
      description: 'First bootcamp group project: An Airbnb clone allowing users to list and rent spaces.',
      tech: ['Ruby', 'Sinatra', 'HTML', 'CSS', 'PostgreSQL', 'RSpec'],
      imageUrl: '/makers-bnb-1000-550.png',
      codeUrl: 'https://github.com/k-dun/Makers-bnb',
      liveUrl: '',
    },
  ];

  return (
    <>
      <section id="projects" className="w-[90svw] md:w-[70vw] lg:w-full lg:px-36 lg:mx-auto bg-[#FCFAFF] mx-auto pt-[14vh] flex flex-col justify-center items-center pb-4">
        <h3 className="text-xl self-start md:text-2xl mb-10 font-semibold"><span className="text-[#FF8080]">01</span> PROJECTS</h3>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:self-start">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}