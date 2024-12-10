export default function NavBar() {
    return (
        <>
            <nav className="absolute p-5 w-full text-white border-2 border-solid border-b-white border-t-transparent border-x-transparent">
                <div className="flex items-center text-2xl">
                    <a href="/"><img src="/images/logo.png" className="w-[100px]"/></a>
                        <div className="absolute right-60 space-x-10">
                            <a href="/" className="hover:text-[25px] hover:text-yellow">Home</a>
                            <a href="/discover" className="hover:text-[25px] hover:text-yellow">Discover</a>
                            <a href="/invite" className="hover:text-[25px] hover:text-yellow">Invite</a>
                            <a href="/more" className="hover:text-[25px] hover:text-yellow">More</a>
                        </div>
                </div>
            </nav>
        </>
    )
}