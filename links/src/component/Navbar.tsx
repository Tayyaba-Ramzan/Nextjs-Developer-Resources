import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <nav>
                <div className="flex">
                    <div className="logo">Tayyaba Ramzan</div>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Link href="/CV (3).pdf"><button>Dowload CV</button></Link>
                </div>
            </nav>
        </>
    )
}