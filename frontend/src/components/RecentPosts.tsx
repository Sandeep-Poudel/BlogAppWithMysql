import classNames from "classnames";
import { Link } from "react-router-dom";
function RecentPosts() {
    const outerDiv = classNames("bg-dark px-6 py-4 rounded-md shadow-md flex justify-center items-start flex-col gap-4 h-fit w-5/6 ",
        "sm:w-3/4",
    );

    return (
        <div className={outerDiv}>
            <div className="text-lg font-bold flex-1">Related blogs</div>
            <div className="flex flex-col">
                <Link to={""}> Link to a blog post</Link>
                
            </div>
        </div>
    );
}
export default RecentPosts;
