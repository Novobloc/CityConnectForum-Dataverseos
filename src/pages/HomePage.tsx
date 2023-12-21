/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "react-router-dom";
import TwitterComponent from "../components/TwitterComponent";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <TwitterComponent />
    </>
  );
}
