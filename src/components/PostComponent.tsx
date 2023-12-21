import React from "react";
import { ChatBubbleLeftEllipsisIcon, HeartIcon, ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import PostPublishComponent from "./PostPublishComponent";

const ellipseAddress = (address = "", width = 10) => {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

const Post = ({ randomUUID, createdAt, content, images }: any) => {
  return (
    <>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {ellipseAddress(randomUUID, 12)}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {createdAt}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">{content}</p>

        {images && (
          <div className="md:flex-shrink pr-6 pt-3">
            <img className="rounded-lg w-full h-64" src={images} alt="Post Media" />
          </div>
        )}

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
      <hr className="border-gray-600" />
    </>
  );
};

const PostAction = ({ icon: Icon }) => {
  return (
    <div className="flex-1 text-center py-2 m-2">
      <a
        href="#"
        className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
        {<Icon />}
      </a>
    </div>
  );
};

const postActions = [{ icon: HeartIcon }, { icon: ArrowsUpDownIcon }, { icon: ChatBubbleLeftEllipsisIcon }];

const PostComponent = ({ publishPost, posts }: any) => {
  console.log(posts, "posts satya");

  return (
    <div className="">
      <div className="flex">
        <div className="w-full lg:w-2/3 max-w-7xl mx-auto border border-gray-600 h-auto  border-t-0">
          <PostPublishComponent publishPost={publishPost} />

          {posts && posts.length > 0 && posts.map((post, index) => <Post key={index} {...post} />)}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
