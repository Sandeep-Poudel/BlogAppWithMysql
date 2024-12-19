import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BlogItem from "../components/blogpage/BlogItem";
import { useNavigate } from "react-router-dom";
import UpdateBlog from "../components/blogpage/UpdateBlog";
import AuthorCard from "../components/AuthorCard";
import RecentPosts from "../components/RecentPosts";
import classNames from "classnames";

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
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const getPost = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `http://localhost:3000/api/blog/${id}`
            );
            setPost(response.data);
            setError(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
            console.error(error);
        }
    };

    const deletePost = async () => {
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 700)); // Delay for 1.5 seconds
            const response = await axios.delete(
                `http://localhost:3000/api/blog/${id}`
            );
            console.log("Post deleted successfully:", response.data);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.error("Error deleting post:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const handleClick = () => {
        setUpdate(!update);
    };

    const updatePost = (data: Post) => {
        setPost(data);
        setUpdate(false);
    }


    const AuthorDiv = classNames(
        "flex justify-center items-center w-full gap-8 px-8 flex-col",
        "sm:flex-row sm:items-start"
    );

    const blogContainer = classNames(
        "h-fit bg-dark min-w-[200px] rounded-lg flex flex-col p-4 m-2",
        "sm:w-[400px] sm:p-6",
        "md:w-[600px]",
        "lg:w-[800px]"
    );

    const container = classNames(
        "bg-verydark  justify-between  items-center flex flex-col my-8 gap-8 text-white min-h-[80vh]"
    );
    return (
        <div className={container}>
            {error ? (
                <h1 className="text-3xl">Error fetching Blog.</h1>
            ) : (
                <>
                    <>
                        {!update ? (
                            <div className={blogContainer}>
                                <BlogItem
                                    deletePost={deletePost}
                                    post={post}
                                    handleClick={handleClick}
                                    loading={loading}
                                />
                            </div>
                        ) : (
                            <>
                                <UpdateBlog post={post} update={updatePost} />
                            </>
                        )}
                    </>

                    <div className={AuthorDiv}>
                        <AuthorCard post={post} />
                        <RecentPosts />
                    </div>
                </>
            )}
        </div>
    );
}
export default BlogPage;
