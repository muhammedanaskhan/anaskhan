import classes from './background.module.css';
import Section from './section';
function Background() {
    return (
        <Section className={classes.background}>
            <div className={classes.background_title}>
                BACKGROUND 👨‍💻
            </div>
            <div className={classes.background_content}>
                <p>I&rsquo;m currently pursuing Engineering in Electronics and Communication at <a href="https://www.medicaps.ac.in/" className={classes.background_link} target="_blank" rel="noreferrer">Medi-Caps University.</a> I&rsquo;ve also been a mentor at <a href="https://gdsc.community.dev/medi-caps-university-indore/" className={classes.background_link} target="_blank" rel="noreferrer">Google Developer Student Club</a> on my University Campus.</p>
                <p>As a FrontEnd developer, I enjoy learning new frameworks and libraries. Recently I have studied ReactJs, which is a JavaScript library. When developing web-apps I aim for a beautiful, responsive product with pixel-perfect user experience.</p>
                <p><span>When I&apos;m not coding</span>, I&apos;m probably writing blogs, or creating content on twitter.</p>
            </div>
        </Section>
    )

}
export default Background;