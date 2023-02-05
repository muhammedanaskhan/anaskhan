import classes from './skills.module.css';
import Section from './section';
function Skills() {
    return (
        <Section>
            <div className="section_title">
                SKILLS 🔧
            </div>
            <div className="section_content">
                <div className={classes.skills}>
                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>LANGUAGES</div>
                        <ul>
                            <li className={classes.skills_category_item}>Javascript(ES6)</li>
                            <li className={classes.skills_category_item}>CSS</li>
                            <li className={classes.skills_category_item}>HTML</li>
                            <li className={classes.skills_category_item}>Java</li>
                            <li className={classes.skills_category_item}>Kotlin</li>
                        </ul>
                    </div>
                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>TOOLS</div>
                        <ul>
                            <li className={classes.skills_category_item}>Git & GitHub</li>
                            <li className={classes.skills_category_item}>FireBase</li>
                            <li className={classes.skills_category_item}>Chrome DevTools
                            </li>
                        </ul>
                    </div>
                    <div className={classes.skills_category}>
                        <div className={classes.skills_category}>FRAMEWORKS/LIBRARIES</div>
                        <ul>
                            <li className={classes.skills_category_item}>React</li>
                            <li className={classes.skills_category_item}>Redux</li>
                            <li className={classes.skills_category_item}>React-Router</li>
                            <li className={classes.skills_category_item}>Material-UI</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Skills;