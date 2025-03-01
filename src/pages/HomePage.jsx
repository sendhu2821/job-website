import React from "react";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import HeroCard from "../components/HeroCard";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroCard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
