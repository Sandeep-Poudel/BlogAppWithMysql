import convertToLacale from "../../utils/timeFormat";
import Button from "../resuable/Button";
function BlogItem({ post, handleClick, deletePost,loading}: { post: any; handleClick: any; deletePost: any ;loading:boolean}) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-semibold leading-[1.1rem] mb-3">
                {post?.title}
            </h3>
            <p className="text-sm font-semibold text-gray-300">
                By {post?.author} | {convertToLacale(post?.updatedAt)}
            </p>
            <img
                src={post?.pic}
                alt="random"
                className="w-auto h-60 rounded-xl object-cover my-4"
            />

            <p className=" text-gray-300">{post?.description}</p>
            <div className="flex justify-end">
                <Button onClick={handleClick} primary rounded>
                    Update
                </Button>
                <Button
                    onClick={deletePost}
                    rounded
                    danger
                    loading={loading}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
export default BlogItem;