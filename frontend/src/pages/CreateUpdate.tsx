import { useState } from "react";
import axios from "axios";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

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
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const handleClick = async () => {
        console.log(title, author, description);
        await createPost();
    };
    return (
        <div className="bg-verydark justify-around  items-center flex flex-col my-8 gap-8 text-white">
            <div className="h-fit bg-dark w-[800px] rounded-lg flex flex-col p-6">
                <h3 className="text-3xl font-semibold leading-[1.1rem] mb-6">
                    Create
                </h3>
                <form className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            onChange={handleTitleChange}
                            value={title}
                            className="bg-lightGray text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:border-gray-600 border-2 border-transparent"
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="author" className="text-gray-300">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            onChange={handleAuthorChange}
                            value={author}
                            className="bg-lightGray text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:border-gray-600 border-2 border-transparent"
                            placeholder="Author"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="text-gray-300">
                            Description
                        </label>
                        <textarea
                            id="content"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="bg-lightGray h-[400px] overflow:hidden text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:border-gray-600 border-2 border-transparent min-h-[400px]"
                            placeholder="Content"
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = "auto";
                                target.style.height = `${target.scrollHeight}px`;
                            }}
                        ></textarea>
                    </div>
                </form>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 ml-4"
                        onClick={handleClick}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
