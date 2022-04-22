import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center justify-between text-sm mx-2">
      <div className=" flex justify-start  items-center  basis-[10%]">
        <Link href={`/user/${comment.user_unique_id}`} passHref>
          <div className="relative w-12 h-12 rounded-full  mr-1">
            <Image
              src={comment.user_picture}
              alt="side-img"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center space-y-2 basis-[85%]">
        <p className="font-extrabold">{comment.user_displayname}</p>{" "}
        <span
          dangerouslySetInnerHTML={{
            __html: comment.comment != undefined ? comment.comment : "",
          }}
          className="comment-message"
        ></span>
        <div className="flex items-center space-x-3 text-gray-500">
          <span>{comment.created}</span>
          <div className="flex items-center space-x-1">
            <span>50</span>
            <BsHeartFill className="hover:fill-pink-500 text-pink-500" />
          </div>
          <p className="ml-3 cursor-pointer"> Reply</p>
        </div>
      </div>
      <div className="basis-[5%] hover:cursor-pointer hover:text-gray-400">
        <BsHeart />
      </div>
    </div>
  );
};

export default Comment;
