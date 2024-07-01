
const Header = ()=>{
    return(
        <div className="flex justify-between items-center h-32 w-full px-16 border-b border-zinc-200" style={{backgroundColor: "#FFFFFB", fontFamily: "Bricolage Grotesque, sans-serif"}}>
            <h1 className="text-3xl font-bold opacity-50" style={{color: "#04021B"}}>SkillAfrica</h1>
            <ul className="text-lg font-normal md:flex justify-between hidden">
                <li>
                    <a href="#findfreelancers">Find freelancers</a>
                </li>
                <li className="ml-6">
                  <a href="#events">Events</a>  
                </li>
                <li className="ml-6">
                    <a href="#blog">Blogs</a>
                </li>
                <li className="ml-6">
                    <a href="#jobs">Jobs</a>
                </li>
                <li className="ml-6">
                    <a href="#about">About us</a>
                </li>
            </ul>
            <ul className="md:flex hidden justify-between text-lg font-normal items-center">
                <li className="text-lg font-normal">
                    <a href="#login">Log in</a>
                </li>
                <li className="font-semibold px-8 py-3 bg-red-700 text-white rounded-3xl ml-6" style={{backgroundColor: "#DC5F00"}}>
                    <a href="#signin">Sign in</a>
                </li>
            </ul>
        </div>
    )
}
export default Header;