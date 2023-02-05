import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "React Movie",
            tech: "React, TMDB API, Firebase",
            github: "https://github.com/muhammedanaskhan/react-movie",
            live: "https://react-movie-tau-ten.vercel.app/"
        },
        {
            name: "Cryptobase",
            tech: "React, React-toolkit, Ant design, Chart js",
            github: "https://github.com/muhammedanaskhan/Cryptobase",
            live: "https://cryptobase-one.vercel.app/"
        },
        {
            name: "SHOPX",
            tech: "REACT, FIREBASE, CONTEXT API",
            github: "https://github.com/muhammedanaskhan/shopx",
            live: "http://shopx-one.vercel.app/"
        },
    ]
    return (
        <Section>
            <div className="section_title">
                Featured Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects?.map(project => <ProjectBox key={project.github} name={project.name} tech={project.tech} github={project.github} live={project.live} />)}
            </div>
        </Section>
    )
}
export default Projects;