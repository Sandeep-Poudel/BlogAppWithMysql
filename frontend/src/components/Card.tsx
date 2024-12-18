import classNames from "classnames";

interface CardProps {
    title: string;
    description: string;
    author: string;
    pic: string;
    date:string;
}

function Card({ title, description, author, pic ,date}: CardProps) {

    const outerDiv = classNames("bg-dark p-4 w-[400px] rounded-lg  flex flex-col hover:scale-[101%]",
        "sm:w-[400px] sm:h-[380px]",
        "md:w-[350px] md:p-[3]",
        "lg:w-[400px]"
    )
    
    return (
        <div className={outerDiv}>
            <img
                src={pic}
                alt="random"
                className="w-auto h-52 rounded-xl object-cover mb-4"
            />
            <div>
                <h3 className="text-2xl font-semibold leading-[1.1rem] mb-2">{title}</h3>
                <p className="text-sm text-gray-300">By {author} | {date}</p>

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
