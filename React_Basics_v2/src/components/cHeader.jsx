import "../css/style.min.css"

export default function MyHeader() {

    return (
        <>
            <header className="col-12 border d-flex justify-content-end">
                <nav className="col-10 d-flex align-items-end justify-content-end pe-4">
                    <ul className="col-6 d-flex align-items-end justify-content-between">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">My Stack</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Experience</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}