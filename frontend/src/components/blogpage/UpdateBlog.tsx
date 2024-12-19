import { useState } from "react";
import Button from "../resuable/Button";
import axios from "axios";
import classNames from "classnames";

function UpdateBlog({
    post,
    update,
}: {
    post?: { id: number; title: string; author: string; description: string };
    update: any;
}) {
    const [title, setTitle] = useState(post?.title || "");
    const [author, setAuthor] = useState(post?.author || "");
    const [description, setDescription] = useState(post?.description || "");
    const [loading, setLoading] = useState(false);

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
    const updatePost = async () => {
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 700)); // Delay for 1.5 seconds
            const response = await axios.put(
                `http://localhost:3000/api/blog/${post?.id}`,
                {
                    title,
                    author,
                    description,
                }
            );
            console.log("Post updated successfully:", response.data);
            setLoading(false);
            update(response.data);
        } catch (error) {
            console.error("Error updating post:", error);
            setLoading(false);
        }
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
        "sm:w-[400px] sm:p-6 flex-grow",
        "md:w-[600px]",
        "lg:w-[800px]",
    );
    return (
        <div className={blogContainer}>
            <h3 className="text-3xl font-semibold leading-[1.1rem] mb-3">
                Edit
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
                <Button onClick={updatePost} primary loading={loading}>
                    Save
                </Button>
            </div>
        </div>
    );
}
export default UpdateBlog;
