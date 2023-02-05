import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classes from './other-project.module.css';

function OtherProjects() {
    const projects = [
        {
            name: "Expense Tracker ",
            description: "An application to enter monthly expenses with demographics .",
            techItems: ["React", "HTML", "CSS"],
            github: "https://github.com/muhammedanaskhan/ExpenseTracker-React-App",
            // live: ""
        },
        // {
        //     name: "Website Blocker",
        //     description: "Detecting Motion using computer's webcam and plotting graph related to the data produced.",
        //     techItems: ["Python"],
        //     github: "https://github.com/ParagD25/Website-Blocker",
        //     // live: "",
        // },
        // {
        //     name: "BMI Calculator",
        //     description: "Web Application that calculates an individuals BMI using the data given by that individual (like height and weight).",
        //     techItems: ['Flask', "flask_sqlalchemy", "mail", "Python"],
        //     github: "https://github.com/ParagD25/BMI_Calculator",
        //     // live: ""
        // },
        // {
        //     name: "Currency Converter",
        //     description: "Creating Currency Convertion Mobile Application 📱.",
        //     techItems: ['Python', "Kivy"],
        //     github: "https://github.com/ParagD25/Currency_Converter",
        //     // live: ""
        // },
        // {
        //     name: "Mountain and Volcano Mapping",
        //     description: "Creating map using Folium library and pinning the locations of major volcanoes and mountains respectively.",
        //     techItems: ['Folium', "Pandas",'Python'],
        //     github: "https://github.com/ParagD25/mountain_volcano_mapping",
        //     // live: ""
        // }

    ]
    return (
        <Section>
            <div className="section_title">
                Other Projects
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects.map(project => <ProjectBox key={project.github} title={project.name} description={project.description} techItems={project.techItems} github={project.github} live={project.live} />)}
                < div className={classes.more} >
                    <a href="https://github.com/ParagD25?tab=repositories" target="_blank" rel="noopener noreferrer"><Button> More Projects</Button></a>
                </div>
            </div>
        </Section >
    )
}
export default OtherProjects;