import React from "react";
import HeaderSection from "../../components/home-header";
import CategoryTab from '../../components/category-tab';
import { headerData } from "./data";
import FeaturedProducts from "../../components/home-featured-products";

function Home() {
  return (<>
  <HeaderSection {...headerData} />
  <CategoryTab />
  <FeaturedProducts />
  </>)
}

export default Home;
