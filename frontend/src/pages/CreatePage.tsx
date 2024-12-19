import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Button from "../components/resuable/Button";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(e.target.value);
    };

    const createPost = async () => {
        try {
            setLoading(true);

            await new Promise(resolve => setTimeout(resolve, 500)); // Delay for 1 second

            const response = await axios.post(
                "http://localhost:3000/api/blogs",
                {
                    title,
                    author,
                    description,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Post created successfully:", response.data);
            setLoading(false);
            navigate(`/blog/${response.data.id}`);

        } catch (error) {
            console.error("Error creating post:", error);
            setLoading(false);
        }
    };

    const handleClick = async () => {
        console.log(title, author, description);
        await createPost();
    };

    const inputFields = classNames(
            "bg-lightGray text-gray-200 px-4 py-2 rounded-md ",
            "focus:outline-none focus:border-gray-600 border-2 border-transparent"
        );
    
        const textArea = classNames(inputFields, "overflow:hidden min-h-[200px]",
            "md:min-h-[300px]"
        );
    
        const formStyles = classNames("flex flex-col gap-4 w-full");
        const formItems = classNames("flex flex-col");
        const blogContainer = classNames(
            "h-fit bg-dark min-w-[300px] rounded-lg flex flex-col p-4 m-2 w-3/4",
            "sm:min-w-[400px] sm:p-4 w-5/6 ",
            "md:w-[600px] md:p-6",
            "lg:w-[800px]",
        );

        const outerDiv = "bg-verydark justify-around  items-center flex flex-col my-8 gap-8 text-white"

    return (
        <div className={outerDiv}>
            <div className={blogContainer}>
                <h3 className="text-3xl font-semibold leading-[1.1rem] mb-6">
                    Create
                </h3>
                <form className={formStyles}>
                    <div className={formItems}>
                        <label htmlFor="title" className="text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            onChange={handleTitleChange}
                            value={title}
                            className={inputFields}
                            placeholder="Title"
                        />
                    </div>
                    <div className={formItems}>
                        <label htmlFor="author" className="text-gray-300">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            onChange={handleAuthorChange}
                            value={author}
                            className={inputFields}
                            placeholder="Author"
                        />
                    </div>
                    <div className={formItems}>
                        <label htmlFor="content" className="text-gray-300">
                            Description
                        </label>
                        <textarea
                            id="content"
                            value={description}
                            onChange={handleDescriptionChange}
                            className={textArea}
                            placeholder="Content"
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = "auto";
                                target.style.height = `${target.scrollHeight}px`;
                            }}
                        ></textarea>
                    </div>
                </form>
                <div className="flex justify-end mt-4">
                    <Button
                        onClick={handleClick}
                        primary
                        rounded
                        loading={loading}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
