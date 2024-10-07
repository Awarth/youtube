import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

function Home() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    //make a request to get all the videos based on the query, page and limit
    setVideo(1);
  }, []);

  return (
    <>
      {!video ? (
        <div className="flex w-full h-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="wrapper w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 min-[1960px]:grid-cols-5 grid-flow-row gap-4">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      )}
    </>
  );
}

export default Home;
