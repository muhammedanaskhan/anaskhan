import classes from './header.module.css';
import Button from './UI/button';
function Header() {
    return (
        <>
            <h5 className={classes.header_logo}>Anas</h5>
            <div className={classes.header_background}></div>
            <header className={classes.header}>
                <h1>HI THERE👋, I&rsquo;m!</h1>
                <h2 className={classes.header_info}>Muhammed Anas Khan</h2>
                <h3 className={classes.header_tag}>FrontEnd Developer</h3>
                {/* <h4 className={classes.header_details}>Python Developer focused on building webapps with pixel perfect User Experince.</h4> */}
                <div className={classes.cta}>
                    <Button> <a lass="resume" href="./Anas_Cv.pdf" target="_blank" rel="noopener noreferrer">Downlod Resume</a> </Button>
                </div>
                <h3 className={classes.header_contact}> <span>Get in touch </span> <span className={classes.emoji_pointer}>👉</span><span> <a href="mailto:muhammedanas5186@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.header_contact_link}>muhammedanas5186@gmail.com</a> </span> </h3>
            </header>
        </>
    )
}
export default Header;