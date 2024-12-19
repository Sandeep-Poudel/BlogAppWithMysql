const CardSkeleton = () => (
    <div className="p-4 w-96 h-90 bg-dark shadow-lg rounded-lg animate-pulse ">
        <div className="rounded-lg bg-lightGray h-56 mb-4"></div>
        <div className="h-6 bg-gray-500 w-3/4 mb-2 rounded-md"></div>
        <div className="h-6 bg-gray-500 w-1/2 rounded-md"></div>
    </div>
);

export default CardSkeleton;