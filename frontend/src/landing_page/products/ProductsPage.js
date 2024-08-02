import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection imageUrl="media/images/kite.png" productName="Kite" productDesrption="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <RightSection imageUrl="media/images/console.png" productName="Console" productDescrption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />
      <LeftSection imageUrl="media/images/coin.png" productName="Coin" productDesrption="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <RightSection imageUrl="media/images/kiteconnect.png" productName="Kite Connect API" productDescrption="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." />
      <LeftSection imageUrl="media/images/varsity.png" productName="Varsity mobile" productDesrption="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <p className="text-center fs-4">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech/" style={{ textDecoration: "none", color: "#387ed1" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
