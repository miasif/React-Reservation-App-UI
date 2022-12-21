import React from 'react';
import Featured from '../../components/Featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Header from '../../components/Header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>

        <FeaturedProperties />
        <MailList />
      </div>
    </>
  );
}
export default Home;
