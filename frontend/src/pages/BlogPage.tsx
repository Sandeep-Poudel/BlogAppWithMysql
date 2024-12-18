import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateBlog from "../components/UpdateBlog";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogPage() {
    interface Post {
        id: number;
        title: string;
        description: string;
        author: string;
        pic: string;
        createdAt: string;
        updatedAt: string;
    }
    const { id } = useParams<{ id: string }>();
    const [update, setUpdate] = useState(false);
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(false);

    const getPost = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `http://localhost:3000/api/blog/${id}`
            );
            setPost(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    const deletePost = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:3000/api/blog/${id}`
            );
            console.log("Post deleted successfully:", response.data);

        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    const handleClick = () => {
        setUpdate(!update);
    };

    return (
        <div className="bg-verydark justify-around  items-center flex flex-col my-8 gap-8 text-white">
            
            <div className="h-fit bg-dark w-[800px] rounded-lg flex flex-col p-6">
                {!update ? (
                    <>
                        <h3 className="text-3xl font-semibold leading-[1.1rem] mb-3">
                            {post?.title}
                        </h3>
                        <p className="text-sm font-semibold text-gray-300">
                            By {post?.author} | {post?.createdAt}
                        </p>
                        <img
                            src={post?.pic}
                            alt="random"
                            className="w-auto h-60 rounded-xl object-cover my-4"
                        />

                        <p className=" text-gray-300">{post?.description}</p>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                                onClick={handleClick}

                            >
                                Update
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 ml-4" onClick={deletePost}>
                                Delete
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="text-3xl font-semibold leading-[1.1rem] mb-3">
                            Edit
                        </h3>
                        
                    </>
                )}
            </div>

            <div className="flex justify-center items-start w-full gap-8 px-8 h-fit ">
                <div className="bg-dark w-1/4 px-6 py-4 rounded-md shadow-md flex flex-col justify-center items-start flex-col gap-2 h-full">
                    <div className="text-lg font-bold flex-1">Author</div>
                    <div className="flex items-center gap-5">
                        <img
                            src={post?.pic}
                            alt="random"
                            className="w-12 h-12 rounded-full"
                        />

                        <div className="flex flex-col">
                            <div className="text-sm font-bold">
                                {post?.author}
                            </div>
                            <div className="text-xs text-gray-300">
                                Joined on {post?.createdAt}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark w-3/4 px-6 py-4 rounded-md shadow-md flex flex-col justify-center items-start flex-col gap-4">
                    <div className="text-lg font-bold flex-1">
                        Related blogs
                    </div>
                    <div className="flex flex-col">
                        <Link to={""}> THe namepasldjf</Link>
                        <Link to={""}> THe namepasldjf</Link>
                        <Link to={""}> THe namepasldjf</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlogPage;
