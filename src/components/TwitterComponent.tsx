import React from "react";
import { ChatBubbleLeftEllipsisIcon, HandThumbUpIcon, HeartIcon, ArrowsUpDownIcon } from "@heroicons/react/20/solid";
// onClick={() => publishPost()}
const Tweet = ({ username, date, content, images }: any) => {
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
                {username}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {date}
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

// Tweet Action Component
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

// Sample data for tweets
const tweetsData = [
  {
    username: "Sonali Hirave",
    date: "@ShonaDesign . 16 April",
    content:
      "Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie",
    images: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
  },
  {
    username: "Sonali Hirave",
    date: "@ShonaDesign . 16 April",
    content:
      "Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie"
  }
  // Add more tweet data as needed
];

const tweetActions = [{ icon: HeartIcon }, { icon: ArrowsUpDownIcon }, { icon: ChatBubbleLeftEllipsisIcon }];

// Parent component using the Tweet component in a loop
const TwitterComponent = ({ publishPost }: any) => {
  return (
    <div className="bg-blue-900">
      <div className="flex">
        <div className="w-full lg:w-2/3 max-w-7xl mx-auto border border-gray-600 h-auto  border-t-0">
          {/* Render tweets using the Tweet component in a loop */}
          {tweetsData.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwitterComponent;
