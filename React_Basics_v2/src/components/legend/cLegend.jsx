import React from 'react';
import "./cLegend.scss";

export default function MyLegend() {

    return (
        <>
            <section id="home" className="col-12 d-flex align-items-center justify-content-between p-2 pb-4 mb-4">
                <div className="legend_desc col-md-5 ps-1 d-flex flex-column align-items-start justify-content-between">
                    <div className="name_n_tag">
                        <h2>Gift Nestah</h2>
                        <span className="my_tags">Software Developer</span>
                    </div>
                    <p>
                        I am a software developer with a passion for creating and developing software solutions, always looking for new challenges and opportunities to grow as a developer. I have a strong foundation in web development and a keen interest in Data and AI. Having a strong background in Computer Science, am a creative thinker always looking for new effective ways to solve problems and create innovative solutions. Am a self motivated individual with a deep value for collaboration and always looking to motivate and inspire my colleagues for the success of the whole team.
                    </p>
                    <div className="cv_connect d-flex justify-content-between">
                        <a href="#" className="resume text-center me-2" disabled>My Resume</a>
                        <div className="socials d-flex align-items-center justify-content-center">
                            <a target="_blank" href="https://github.com/PantheraNestah" className="d-flex align-items-center justify-content-center"><i class="bi bi-github"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/gift-nestah1" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                            <a target="_blank" href="https://twitter.com/NiestaDe" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>
                </div>
                <div className="legend_img_cont">
                    <img src="/img/github_rudrabarad.gif" width={"600px"} alt="Gift Nestah P" />
                </div>
            </section>
        </>
    )
}