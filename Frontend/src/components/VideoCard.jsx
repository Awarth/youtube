import avatar from "../assets/images/avatar.jpg";
import thumbnail from "../assets/images/thumbnail1.jpg";

function VideoCard() {
  return (
    <div className="flex flex-col rounded-md bg-[#191919] cursor-pointer aspect-[16/11]">
      <div className="relative">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full aspect-video rounded-t"
        />
        <p className="absolute bottom-1 right-1 text-white text-xs rounded p-1 backdrop-blur bg-opacity-40 bg-[#000000c5] ">
          00:00
        </p>
      </div>
      <div className="channelDetail border border-[#3d3d3d] bg-[#3d3d3d] rounded-b-md p-1 gap-2 flex justify-center items-center overflow-hidden">
        <img
          src={avatar}
          alt="avatar"
          className="aspect-square w-11 text-xs rounded-full"
        />
        <div className="w-full mb-1 text-white">
          <p>video title</p>
          <span className="text-xs flex flex-wrap leading-3 gap-2">
          <p className="w-fit">channel name</p>
            <p className="w-fit">100k views</p>
            <p className="w-fit">10hrs ago</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
