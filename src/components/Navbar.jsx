import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="grid grid-cols-custom-layout w-full gap-4">
        <div className="flex justify-start items-center">
            <p className="text-muted font-bold text-3xl">
                // Micro Jam
            </p>
        </div>
        <div className="flex justify-end items-center">
            <p className="flex justify-center items-center font-bold text-lg">
                <span className="text-primary underline">
                    <Link to="/">home</Link>
                </span>
                <span className="text-muted mx-[0.5rem]">
                    /
                </span>
                <span className="text-primary underline">
                    <Link to="/jams">jams</Link>
                </span>
                <span className="text-muted mx-[0.5rem]">
                    /
                </span>
                <span className="text-primary underline">
                    <Link to="/hof">hall of fame</Link>
                </span>
                <span className="text-muted mx-[0.5rem]">
                    /
                </span>
                <span className="text-primary underline">
                    <Link to="/voting">voting</Link>
                </span>
            </p>
        </div>
    </div>
  )
}

export default Navbar