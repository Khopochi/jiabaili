import React from 'react';
import './home.scss'
import { Navbar } from '../../components/navbar/Navbar';
import { LowerNav } from '../../components/lowernav/LowerNav';
import { Headerslider } from '../../components/headerslider/Headerslider';
import { Trending } from '../../parts/trending/Trending';
import { TrendingProduct } from '../../components/trendingproduct/TrendingProduct';
import { HotCategory } from '../../parts/hotcategories/HotCategory';
import { SingleHotCat } from '../../components/hotcatgory/SingleHotCat';
import { Card } from '../../components/card/Card';

export const Home = () => {
  return (
    <div className="home">
      <div className="unmovable">
      <Navbar/>
      </div>
        <LowerNav/>
        <Headerslider/>
        <Trending/>
        <div className="trendingDiv">
            <TrendingProduct/>
            <TrendingProduct/>
            <TrendingProduct/>
            <TrendingProduct/>
            <TrendingProduct/>
        </div>
        <HotCategory/>
        <div className="hotCategoryDiv">
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
          <SingleHotCat/>
        </div>
        <div className="cardsarea">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          gdhywfdyuwfgdyuywfyud
        </div>
    </div>
  )
}
