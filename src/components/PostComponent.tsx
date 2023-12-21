import Avatar from "react-avatar";
import { HeartIcon } from "@heroicons/react/20/solid";
import PostPublishComponent from "./PostPublishComponent";
import { formatDistanceToNow } from "date-fns";
import NotConnected from "../assets/images/notconected.png";

const TimeAgo = ({ timestamp }) => {
  const formattedTime = formatDistanceToNow(new Date(timestamp), { addSuffix: true });

  return <span>{formattedTime}</span>;
};

const ellipseAddress = (address = "", width = 10) => {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

const Post = ({ randomUUID, createdAt, title, content, images }: any) => {
  return (
    <div className="flex p-4 pb-0 border-b border-neutral-200">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <Avatar name={ellipseAddress(randomUUID, 12).split("").reverse().join()} size="50" round="100px" />

          <div className="ml-3">
            <p className="text-base font-mono leading-6 font-medium text-black">
              {ellipseAddress(randomUUID, 12)}
              <span className="pl-3 text-sm leading-5 font-medium italic font-mono text-slate-600">
                <TimeAgo timestamp={createdAt} />
              </span>
            </p>
          </div>
        </div>
      </a>

      <div className="pl-16">
        <p className="text-lg font-medium text-[#0F1419] mb-2">{title}</p>
        <p className="text-base font-thin text-[#0F1419] mb-4">{content}</p>

        <div className="flex items-center space-x-4">
          {postActions.map((action, index) => (
            <PostAction key={index} icon={action.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PostAction = ({ icon: Icon }) => {
  return (
    <div className="flex-1 text-center py-2 m-2">
      <a href="#" className="w-6 mt-1 group flex items-center text-gray-500 py-2 text-base leading-6 font-medium rounded-full hover:text-red-700">
        {<Icon />}
      </a>
    </div>
  );
};

const postActions = [{ icon: HeartIcon }];

const PostComponent = ({ publishPost, posts, did }: any) => {
  console.log(posts, "posts satya");

  return (
    <div className="flex">
      <div className="w-full lg:w-2/3 max-w-7xl mx-auto h-auto ">
        {did ? (
          <PostPublishComponent publishPost={publishPost} />
        ) : (
          <div className="flex flex-col items-center  w-full mx-auto pt-10">
            <span className="font-mono">Wallet Not Connected</span>
            <img src={NotConnected} width={300} height={300} />
          </div>
        )}
        {posts && posts.length > 0 && posts.map((post, index) => <Post key={index} {...post} />)}
      </div>
    </div>
  );
};

export default PostComponent;
