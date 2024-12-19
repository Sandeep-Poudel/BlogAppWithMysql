import classNames from "classnames";

function Skeleton({
    times,
    className,
    dark,
    ...rest
}: {
    times: number;
    className?: string;
    dark?: boolean;
    rest?: object;
}) {
    const outerClassNames = classNames(
        "relative",
        "overflow-hidden",
        "rounded",
        "mb-2.5",
        dark ? "bg-gray-800" : "bg-gray-200",
        className
    );

    const innerClassNames = classNames(
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-translate-x-full",
        "bg-gradient-to-r",
        dark
            ? "from-gray-800 to-gray-800 via-gray-700"
            : "from-gray-200 via-white to-gray-200"
    );

    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return (
                <div key={i} className={outerClassNames} {...rest}>
                    <div className={innerClassNames} />
                </div>
            );
        });

    return boxes;
}
export default Skeleton;
