import React from "react";
import { ChatBubbleLeftEllipsisIcon, HandThumbUpIcon, HeartIcon, ArrowsUpDownIcon } from "@heroicons/react/20/solid";
const ellipseAddress = (address = "", width = 10) => {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};
const Tweet = ({ randomUUID, createdAt, content, images }: any) => {
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

        {/* Additional content (e.g., images) */}
        {images && (
          <div className="md:flex-shrink pr-6 pt-3">
            <img className="rounded-lg w-full h-64" src={images} alt="Tweet Media" />
          </div>
        )}

        {/* Tweet actions */}
        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              {tweetActions.map((action, index) => (
                <TweetAction key={index} icon={action.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
};

const TweetAction = ({ icon: Icon }) => {
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

const tweetActions = [{ icon: HeartIcon }, { icon: ArrowsUpDownIcon }, { icon: ChatBubbleLeftEllipsisIcon }];

const TwitterComponent = ({ publishPost, posts }: any) => {
  console.log(posts, "posts satya");

  return (
    <div className="bg-blue-900">
      <div className="flex">
        <div className="w-full lg:w-2/3 max-w-7xl mx-auto border border-gray-600 h-auto  border-t-0">
          <div className="flex">
            <div className="m-2 w-10 py-1">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="flex-1 px-2 pt-2 mt-2">
              <textarea
                className=" bg-transparent text-gray-400 font-medium text-lg w-full"
                rows={2}
                cols={50}
                placeholder="What's happening?"></textarea>
            </div>
          </div>
          <div className="flex">
            <div className="w-10"></div>

            <div className="w-64 px-2">
              <div className="flex items-center">
                <div className="flex-1 text-center px-1 py-1 m-2">
                  <a
                    href="#"
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg
                      className="text-center h-7 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1 text-center py-2 m-2">
                  <a
                    href="#"
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg
                      className="text-center h-7 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1 text-center py-2 m-2">
                  <a
                    href="#"
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg
                      className="text-center h-7 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1 text-center py-2 m-2">
                  <a
                    href="#"
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg
                      className="text-center h-7 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <button
                className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
                onClick={() => publishPost()}>
                Publish
              </button>
            </div>
          </div>

          {/* Render tweets using the Tweet component in a loop */}
          {posts && posts.length > 0 && posts.map((post, index) => <Tweet key={index} {...post} />)}
        </div>
      </div>
    </div>
  );
};

export default TwitterComponent;
