import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/All Images/Vector-1.png";
import img2 from "../../assets/All Images/Vector.png";
import "./ViewDetails.css";
import t from "../../assets/Icons/Frame-1.png";
import p from "../../assets/Icons/Frame-2.png";
import e from "../../assets/Icons/Frame-3.png";
import a from "../../assets/Icons/Frame-4.png";
import s from "../../assets/Icons/Frame.png";
import { addToDb } from "../../utilities/fakedb";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewDetais = () => {
  const paramsId = useParams();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobDetails.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const getid = parseInt(paramsId.id);
  const smalljobs = jobs.find((job) => job.id === getid);
  console.log(smalljobs);
  const handleAddToDb = (jobData) => {
    addToDb(jobData.id);
    toast("successful to apply");
  };
  if (jobs.length < 1) {
    return;
  }
  const {
    job_description,
    job_title,
    job_responsibility,
    educational_requirement,
    experience,
    salary,
    phone,
    address,
    email,
  } = smalljobs;
  return (
    <div>
      <div className="relative mb-[200px]">
        <img
          src={img2}
          className="w-[340px] h-[220px] absolute left-0 "
          alt=""
        />
        <img
          src={img1}
          className="w-[340px] h-[220px] absolute right-[-50px] bottom-[0px]"
          alt=""
        />
        <h3 className="text-center mt-10 pt-4 text-[32px] font-[800]">
          Job Details
        </h3>
      </div>
      <div className="separate sm:grid-cols-1 md:grid-cols-2 px-20 mr-4 mb-4">
        <div className="padding">
          <p>
            <span className="textbold">job_description:</span>
            {job_description}
          </p>
          <p>
            <span className="textbold">job_responsibility:</span>
            {job_responsibility}
          </p>
          <p className="textbold">Educational Requirement:</p>
          <p>{educational_requirement}</p>
          <p className="textbold">Experience</p>
          <p>{experience}</p>
        </div>

        <dir>
          <div>
            <div className="bg-[#F4F2FF] rounded-[8px] p-10">
              <p className="textbold mb-2 "> Job Details:</p>
              <div className="flex mb-2 ">
                <img src={s} className="pr-2" alt="" />
                <p>
                  Salary:
                  <span> {salary}</span>
                </p>
              </div>
              <div className="flex mb-2 ">
                <img src={t} className="pr-2" alt="" />
                <p>
                  Job Title:
                  <span> {job_title}</span>
                </p>
              </div>
              <p className="textbold mb-2 ">Contact Information: </p>
              <div className="flex mb-2 ">
                <img src={p} className="pr-2" alt="" />
                <p>
                  Phone:
                  <span> {phone}</span>
                </p>
              </div>
              <div className="flex mb-2 ">
                <img src={a} className="pr-2" alt="" />
                <p>
                  Address:
                  <span> {address}</span>
                </p>
              </div>
              <div className="flex mb-2 ">
                <img src={e} className="pr-2" alt="" />
                <p>
                  Email:
                  <span> {email}</span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleAddToDb(smalljobs)}
            className=" font-[800] text-[20px] text-[white] px-[26px] py-[19px] w-[100%] my-6 rounded-[8px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
          >
            {/* <Link to="/viewDetais"> View Details</Link> */}
            Apply Now
          </button>
          <ToastContainer></ToastContainer>
        </dir>
      </div>
    </div>
  );
};

export default ViewDetais;
