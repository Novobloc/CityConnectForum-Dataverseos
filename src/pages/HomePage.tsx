/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState, useRef } from "react";
import PostComponent from "../components/PostComponent";
import storage from "../utils/storage";
import { useIdentity } from "../hooks/useIdentity";
import { Model } from "../types";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import app from "../../output/app.json";
import { useContent } from "../hooks/useContent";
import Logo from "../assets/images/logo.png";


export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const { connectIdentity } = useIdentity();
  const [did, setDid] = useState(null);
  const [postModel, setPostModel] = useState<Model>();
  const [connectLoading, setConnectLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  const ellipseAddress = (address = "", width = 10) => {
    if (!address) {
      return "";
    }
    return `${address.slice(0, width)}...${address.slice(-width)}`;
  };
  useEffect(() => {
    const { streams, ...rest } = app.models.find((model) => model.modelName === "post");

    const stream = streams.find((stream) => stream.latest && stream);

    setPostModel({
      ...rest,
      ...stream
    });

    const storeDID = storage.getItem("DID");
    if (!storeDID) {
      return;
    }

    setTimeout(() => {
      connect();
    }, 10);
  }, []);

  const connect = async () => {
    setConnectLoading(true);
    setTimeout(() => {
      setConnectLoading(false);
    }, 3000);
    const did = await connectIdentity();
    console.log(did, "satyas");

    setConnectLoading(false);
    setDid(did);
    storage.setItem("DID", did);
  };

  const { createPublicContent, loadContents: loadPostContents } = useContent();

  useEffect(() => {
    loadPosts();
  }, [did]);

  const publishPost = async (data) => {
    const { title, content, plainText } = data;

    if (!title) {
      console.log({ content: "Title is required" });
      return;
    }

    if (!content) {
      console.log({ content: "Content is required" });
      return;
    }

    // setPublishLoading(true);

    const postData = {
      appVersion: "0.0.1",
      title,
      content,
      plainText,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      category: ["default"],
      tag: [],
      randomUUID: crypto.randomUUID()
    };
    await createPublicContent({
      model: postModel,
      content: {
        ...postData
      }
    });

    console.log({ content: "Publish Successfully" });

    loadPosts();
  };

  const loadPosts = async () => {
    try {
      if (!did) {
        return;
      }
      setLoading(true);

      const response = await loadPostContents({
        // did,
        modelId: postModel.modelId
      });

      let postData = [];

      for (const key of Object.keys(response)) {
        const item = response[key];
        let content = item.fileContent.content;
        content.randomUUID = key;
        postData.push(content);
      }
      postData = postData.reverse();
      const sortedArray = postData.sort((a: any, b: any) => new Date(b.createdAt) - new Date(a.createdAt));

      console.log("postData: ", postData);
      setPosts(sortedArray);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <img src={Logo} width={140} height={300} />
              <span className="mx-auto ml-2 text-xl tracking-widest uppercase  leading-none  font-thin  text-slate-900 select-none">
                 Forum
              </span>
            </Link>
          </div>
          <div className="inline-flex items-center ml-1 space-x-5 lg:justify-end">
            {!did && (
              <button
                disabled={connectLoading}
                onClick={connect}
                className="flex w-44 justify-center font-extralight bg-gradient-to-r from-cyan-500 via-blue-400  to-fuchsia-500   rounded-md  border border-transparent bg-gray-900 py-1 px-0 text-base text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-slate-500">
                Connect Wallet
              </button>
            )}
            {did && (
              <div className="flex-none justify-end mr-0">
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        {ellipseAddress(did, 12)}
                      </span>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </section>
      <PostComponent did={did} publishPost={publishPost} posts={posts} />
    </>
  );
}
