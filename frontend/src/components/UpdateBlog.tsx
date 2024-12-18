import { useState } from "react";
function UpdateBlog({
    update,
    post = { title: "", author: "", description: "" },
}: {
    update?: boolean;
    post?: { title: string; author: string; description: string };
}) {
    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author);
    const [description, setDescription] = useState(post.description);

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };
    const handleClick = () => {
        
    };
    return (
        <div>
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
            <div className="flex justify-end"></div>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 ml-4"
                    onClick={handleClick}
                >
                    {update ? "Update" : "Create"}
                </button>
            </div>
    
    );
}
export default UpdateBlog;
