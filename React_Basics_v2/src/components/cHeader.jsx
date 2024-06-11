export default function MyHeader() {

    return (
        <>
            <header className="col-12 d-flex justify-content-end">
                <nav className="col-lg-7 d-flex align-items-end justify-content-end">
                    <ul className="col-lg-8 d-flex align-items-center justify-content-between">
                        <li><a className="nav_link" href="#">Home</a></li>
                        <li><a className="nav_link" href="#">My Stack</a></li>
                        <li><a className="nav_link" href="#">Projects</a></li>
                        <li><a className="nav_link" href="#">Experience</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}