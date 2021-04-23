import Link from 'next/link';

const about = () => {
    return (
        <div>
            <nav>
                <Link href="/"><a >Home</a></Link>
                <br/>
                <Link href="/about"><a>About</a></Link>
            </nav>
            <p>About</p>
        </div>
    )
}

export default about;
