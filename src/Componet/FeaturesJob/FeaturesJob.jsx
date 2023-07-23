import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesJob = () => {
  const [jobs, setJobs] = useState([]);
  const [showAlls, setShowAlls] = useState([]);

  useEffect(() => {
    axios("jobDetails.json").then((data) => setJobs(data.data));
  }, []);
  const smallJobs = jobs.slice(0, 4);
  const handleSeeAllJobs = () => {
    const seeAllJob = jobs.map((job) => job);
    setShowAlls(seeAllJob);
  };

  return (
    <div id="feature">
      <h2 className="text-[48px] text-center font-[800]">Featured Jobs</h2>

      <p className="text-[16px] font-[500 ] text-center leading-[26px] mb-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 grid grid-cols-2 gap-6">
        {smallJobs.map((smallJob) => (
          <Job key={smallJob.id} smallJob={smallJob}></Job>
        ))}
        {showAlls.map((smallJob) => (
          <Job key={smallJob.id} smallJob={smallJob}></Job>
        ))}
      </div>
      <div className="text-center my-[50px]">
        <button
          onClick={handleSeeAllJobs}
          className="font-[800] text-[20px] text-[white] px-[26px] py-[19px] rounded-[8px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] "
        >
          See All Josb
        </button>
      </div>
    </div>
  );
};

export default FeaturesJob;
