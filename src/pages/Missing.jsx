import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }} className="grid gap-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-[100px] font-bold ">Oops!</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-red-800">Page Not Found</p>
            <div className="flexGrow">
                <Link to="/" className="bg-[#095EDC] text-white px-7 py-3 rounded-[10px] text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Visit Our Homepage</Link>
            </div>
        </article>
    )
}

export default Missing