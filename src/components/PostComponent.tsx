import Avatar from "react-avatar";
import { HeartIcon } from "@heroicons/react/20/solid";
import PostPublishComponent from "./PostPublishComponent";

const ellipseAddress = (address = "", width = 10) => {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

const Post = ({ randomUUID, createdAt, title, content, images }: any) => {
  return (
    <>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <Avatar name={ellipseAddress(randomUUID, 12).split("").reverse().join()} size="50" round="100px" />
            </div>

            <div className="ml-3">
              <p className="text-base font-mono leading-6 font-medium text-black">
                {ellipseAddress(randomUUID, 12)}
                <span className="pl-3 text-sm leading-5 font-medium italic font-mono text-slate-600">{createdAt}</span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-[#0F1419] flex-shrink">{title}</p>
        <p className="text-base width-auto font-medium text-[#0F1419] flex-shrink">{content}</p>

        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              {postActions.map((action, index) => (
                <PostAction key={index} icon={action.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-neutral-200" />
    </>
  );
};

const PostAction = ({ icon: Icon }) => {
  return (
    <div className="flex-1 text-center py-2 m-2">
      <a
        href="#"
        className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-red-700">
        {<Icon />}
      </a>
    </div>
  );
};

const postActions = [{ icon: HeartIcon }];

const PostComponent = ({ publishPost, posts }: any) => {
  console.log(posts, "posts satya");

  return (
    <div className="">
      <div className="flex">
        <div className="w-full lg:w-2/3 max-w-7xl mx-auto h-auto ">
          <PostPublishComponent publishPost={publishPost} />

          {posts && posts.length > 0 && posts.map((post, index) => <Post key={index} {...post} />)}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
