import classNames from "classnames";
import convertToLacale from "../utils/timeFormat";

interface CardProps {
    title: string;
    description: string;
    author: string;
    pic: string;
    date: string;
}

function Card({ title, description, author, pic, date }: CardProps) {
    const outerDiv = classNames(
        "bg-dark p-4 w-auto rounded-lg  flex flex-col hover:scale-[101%] min-w-[300px] h-fit",
        "sm:w-[400px] sm:h-fit sm:p-[3]",
        "md:w-[350px] ",
        "lg:w-[400px] lg:pd-[4]"
    );

    return (
        <div className={outerDiv}>
            <img
                src={pic}
                alt="random"
                className="w-auto h-52 rounded-xl object-cover mb-4"
            />
            <div>
                <h3 className="text-2xl font-semibold leading-[1.1rem] mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-300">
                    By {author} | {convertToLacale(date)}
                </p>

                <div>
                    <p className="text-md mt-4 text-gray-300 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Card;
