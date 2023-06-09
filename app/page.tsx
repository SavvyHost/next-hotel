"use client";
import loadable from "@loadable/component";
import Blog from "./component/Home/Blog";
import Loading from "./component/Home/loading";
import Footer from "./component/template/Footer";
import "./globals.css";

const HeroSectionMain = loadable(() => import("./component/Home/HeroSection") , {
  fallback:<Loading/>
});
const FeaturesSectionMain = loadable(() => import("./component/Home/FeaturesSection"), {
  fallback:<Loading/>
});
const SecurityMain = loadable(() => import("./component/Home/Security"), {
  fallback:<Loading/>
});
const AboutMain = loadable(() => import("./component/Home/About"), {
  fallback:<Loading/>
});
const SubscribeMain = loadable(() => import("./component/Home/Subscribe"), {
  fallback:<Loading/>
});

const SubmeMain = loadable(() => import("./component/Home/Subme"), {
  fallback:<Loading/>
});

const ExhibitionsMain = loadable(() => import("./component/Home/Exhibitions"), {
  fallback:<Loading/>
});
const BlogMain = loadable(() => import("./component/Home/Blog"), {
  fallback:<Loading/>
});






export default function Home() {
  return (
    <>
      <HeroSectionMain/>
      <FeaturesSectionMain/>
      <SecurityMain/>
      <AboutMain />
      <SubscribeMain />
      <SubmeMain />
      <ExhibitionsMain />
      <BlogMain />

    </>
  );
}
