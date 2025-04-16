const SkeletonCard = () => {
  return (
    <div className="animate-pulse border flex flex-col items-center p-3 bg-[#090909] border-[#181818]">
      <div className="bg-gray-700 h-[150px] w-[200px] mb-4 rounded"></div>
      <div className="bg-gray-700 h-4 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-700 h-3 w-full mb-2 rounded"></div>
      <div className="bg-gray-700 h-3 w-5/6 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
