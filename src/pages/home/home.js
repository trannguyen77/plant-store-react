import React from "react";
import HeaderSection from "../../components/home-header";
import CategoryTab from '../../components/category-tab';
import { headerData } from "./data";

function Home() {
  return (<>
  <HeaderSection {...headerData} />
  <CategoryTab />
  </>)
}

export default Home;
