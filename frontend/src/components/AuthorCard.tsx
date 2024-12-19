import classNames from "classnames";
import convertToLacale from "../utils/timeFormat";

function AuthorCard({ post }:{post:any}) {
    const outerdiv = classNames("bg-dark px-6 py-4 rounded-md shadow-md flex justify-center items-start flex-col gap-2 h-fit  w-5/6",
        "sm:min-w-[300px] sm:w-1/4",
    );
    const  innerDiv =classNames("flex flex-col items-between gap-3",
        "sm:flex-row sm:gap-5"
    )
    return (
        <div className={outerdiv}>
            <div className="text-lg font-bold flex-1">Author</div>
            <div className={innerDiv}>
                <img
                    src={post?.pic}
                    alt="random"
                    className="w-12 h-12 rounded-full"
                />

                <div className="flex flex-col">
                    <div className="text-sm font-bold">{post?.author}</div>
                    <div className="text-xs text-gray-300">
                        Created on { convertToLacale(post?.createdAt)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorCard;