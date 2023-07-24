import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getShoppingCart } from "../../utilities/fakedb";
import ShowAppliedJob from "../ShowAppliedJob/ShowAppliedJob";

const AppliedJob = () => {
  const loadData = useLoaderData();
  const [jobs, setjobs] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [onsiteJobs, setOnsiteJobs] = useState([]);
  useEffect(() => {
    const saveCard = [];
    const storedCard = getShoppingCart();
    for (const id in storedCard) {
      const findData = loadData.find((data) => data.id === parseInt(id));

      if (findData) {
        saveCard.push(findData);
      }
    }
    setjobs(saveCard);
    setOnsiteJobs(saveCard);
    setRemoteJobs(saveCard);
  }, []);
  const showRemote = () => {
    const remoteData = remoteJobs.filter(
      (remotejob) => remotejob.job_type === "Remote"
    );
    setjobs(remoteData);
  };
  const showOnsite = () => {
    const onsiteData = onsiteJobs.filter(
      (onsiteJob) => onsiteJob.job_type === "Onsite"
    );
    setjobs(onsiteData);
  };
  return (
    <div className=" mx-auto ">
      {/* <h1 className="text-2xl font-semibold text-center bg-violet-50 py-10">
        Applied Jobs
      </h1> */}
      <h1 className="text-center text-2xl font-[800] py-10 bg-violet-50">
        Applied Jobs
      </h1>

      <div className="text-right py-2 m-8 ">
        <select
          name="job-types"
          className="bg-violet-50 p-4 mx-20 rounded-[8px] font-semibold"
        >
          <option value="Filter">Filter By</option>
          <option value="Remote">
            <button onClick={() => showRemote()}>Remote</button>
          </option>
          <option value="Onsite">
            <button onClick={() => showOnsite()}>Onsite</button>
          </option>
        </select>
      </div>

      <div className="text-center">
        <button
          onClick={() => showRemote()}
          className="bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 mx-2 text-center rounded text-white"
        >
          Remote Jobs
        </button>
        <button
          onClick={() => showOnsite()}
          className="bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 text-center rounded text-white"
        >
          Onsite Jobs
        </button>
      </div>
      <div className="m-8">
        {jobs.map((job) => (
          <ShowAppliedJob key={job.id} job={job}></ShowAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
