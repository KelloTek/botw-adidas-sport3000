import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <nav className="absolute p-5 w-full text-white border-2 border-solid border-b-white border-t-transparent border-x-transparent">
                <div className="flex items-center text-2xl">
                    <Link href="/"><img src="/images/logo.png" className="w-[100px]"/></Link>
                        <div className="absolute right-60 space-x-10">
                            <Link href="/" className="hover:text-[25px] hover:text-yellow">Home</Link>
                            <Link href="/discover" className="hover:text-[25px] hover:text-yellow">Discover</Link>
                            <Link href="/invite" className="hover:text-[25px] hover:text-yellow">Invite</Link>
                            <Link href="/more" className="hover:text-[25px] hover:text-yellow">More</Link>
                        </div>
                </div>
            </nav>
        </>
    )
}