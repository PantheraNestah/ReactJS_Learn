export default function MyLegend() {

    return (
        <>
            <section className="col-12 d-flex align-items-center justify-content-between p-2 pb-4 mb-4">
                <div className="legend_desc col-md-5 ps-1 d-flex flex-column align-items-start justify-content-between">
                    <div>
                        <h2>Gift Nestah P</h2>
                        <span>Software Developer</span>
                    </div>
                    <p>
                        I am a software developer with a passion for creating and developing software solutions, always looking for new challenges and opportunities to grow as a developer. I have a strong foundation in web development and a keen interest in Data and AI. Having a strong background in Computer Science, am a creative thinker always looking for new effective ways to solve problems and create innovative solutions. Am a self motivated individual with a deep value for collaboration and always looking to motivate and inspire my colleagues for the success of the whole team.
                    </p>
                    <div className="cv_connect d-flex justify-content-between">
                        <a href="#" className="bg-primary text-center me-2">My Resume</a>
                        <a href="#" className="text-center ms-2">Connect</a>
                    </div>
                </div>
                <div className="legend_img_cont">
                    <img src="/img/github_rudrabarad.gif" width={"600px"} alt="Gift Nestah P" />
                </div>
            </section>
        </>
    )
}