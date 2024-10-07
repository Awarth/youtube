function MyContent() {
  return (
    <div className="h-full w-full p-0 ">
      <h2 className="text-3xl mb-2">Videos</h2>
      <div className="w-full flex gap-4 overflow-x-auto scrollbar-hide mb-4">
        {/* map all the videos here */}
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Video 1
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Video 1
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Video 1
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Video 1
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Video 1
        </span>
      </div>
      <h2 className="text-3xl mb-4">Tweets</h2>
      <div className="w-full flex gap-4 overflow-x-auto scrollbar-hide">
        {/* map all the videos here */}
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Tweet
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Tweet
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Tweet
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Tweet
        </span>
        <span className="w-64 min-w-[12rem] md:min-w-[15rem] lg:min-w-[18rem] xl:min-w-[24rem] aspect-[16/11] border flex justify-center items-center rounded-md">
          Tweet
        </span>
      </div>
    </div>
  );
}

export default MyContent;
