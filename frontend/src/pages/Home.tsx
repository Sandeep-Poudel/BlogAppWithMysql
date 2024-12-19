import Card from "../components/Card";
import classNames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";
import CardSkeleton from "../components/resuable/CardSkeleton";
import { useEffect, useState } from "react";

function Home() {
    const [loading, setLoading] = useState(false);
    interface Post {
        id: number;
        title: string;
        description: string;
        author: string;
        pic: string;
        createdAt: string;
        updatedAt: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);
    const getPosts = async () => {
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 800)); // Delay for 1 second
            const response = await axios.get("http://localhost:3000/api/blogs");
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const renderPosts = posts.map((post) => {
        return (
            <Link to={`/blog/${post.id}`} key={post.id}>
                <Card
                    title={post.title}
                    description={post.description}
                    author={post.author}
                    pic={post.pic}
                    date={post.updatedAt}
                />
            </Link>
        );
    });

    const outerDiv = classNames(
        "bg-verydark mx-[2rem] justify-center flex h-full ",
        "lg:mx-[3rem]"
    );

    const innerDiv = classNames(
        "flex gap-2 pt-8 flex-wrap justify-center items-center text-gray-200  h-fit",
        " sm:gap-4",
        "md:px-2 md:justify-start ",
        "lg:max-w-[90%] lg:gap-8",
        "xl:px-4 "
    );

    return (
        <div className={outerDiv}>
            <div className={innerDiv}>
                {loading ? (
                    <CardSkeleton />
                ) : posts.length > 0 ? (
                    renderPosts
                ) : (
                    <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
                        <h1 className="text-3xl font-semibold text-center">
                            <span className="text-2xl">No posts found</span>
                            <br />
                            <span className="text-lg">
                                Try creating a new post
                            </span>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Home;
