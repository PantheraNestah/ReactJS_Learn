import "../css/style.min.css"

export default function StackSection() {
    
        return (
            <>
                <section className="sect_stack col-10 d-flex justify-content-center">
                    <div className="sect_stack_container col-8 mx-auto">
                        <div className="center-line"></div>
                        <ul className="stack_list border d-flex flex-column align-items-center">
                            <li className="item col-lg-2 text-center">HTML & CSS</li>
                            <li className="item col-lg-2 text-center">JavaScript</li>
                            <li className="item col-lg-2 text-center">React JS</li>
                            <li className="item col-lg-2 text-center">Java</li>
                            <li className="item col-lg-2 text-center">Spring Boot</li>
                            <li className="item col-lg-2 text-center">Python</li>
                            <li className="item col-lg-2 text-center">Django</li>
                            <li className="item col-lg-2 text-center">MySQL</li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }