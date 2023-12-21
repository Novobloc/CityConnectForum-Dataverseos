/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState, useRef } from "react";
import TwitterComponent from "../components/TwitterComponent";
import storage from "../utils/storage";
import { useIdentity } from "../hooks/useIdentity";
import { Model } from "../types";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const { connectIdentity } = useIdentity();
  const [did, setDid] = useState(null);
  const [postModel, setPostModel] = useState<Model>();
  const [connectLoading, setConnectLoading] = useState(false);

  const ellipseAddress = (address = "", width = 10) => {
    if (!address) {
      return "";
    }
    return `${address.slice(0, width)}...${address.slice(-width)}`;
  };
  //   useEffect(() => {
  //     const { streams, ...rest } = app.models.find((model) => model.modelName === "post");

  //     const stream = streams.find((stream) => stream.latest && stream);

  //     setPostModel({
  //       ...rest,
  //       ...stream
  //     });

  //     const storeDID = storage.getItem("DID");
  //     if (!storeDID) {
  //       return;
  //     }

  //     setTimeout(() => {
  //       connect();
  //     }, 10);
  //   }, []);

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
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <button className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-gradient-to-r from-cyan-500  to-fuchsia-500 rounded-full border-slate-400 focus:outline-none"></button>
              <span className="mx-auto ml-0 text-xl tracking-widest uppercase  leading-none  font-thin  text-slate-900 select-none">
                Community Forum
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
      <TwitterComponent />
    </>
  );
}
