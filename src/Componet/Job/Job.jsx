import { Link } from "react-router-dom";

const Job = ({ smallJob }) => {
  const {
    company_name,
    id,
    img,
    job_title,
    job_time,
    job_type,
    job_location,
    salary,
  } = smallJob;

  return (
    <div className=" p-10 border-[1px] border-[#E8E8E8] ">
      <img className="w-[110px] h-[40px]" src={img} alt="" />
      <h2 className="text-[24px] font-[800] my-4">{job_title}</h2>
      <p className="mb-2">{company_name}</p>
      <div className="flex mb-2">
        <p className="border-[1px] border-[#E8E8E8] p-2 mr-2">{job_type}</p>
        <p className="border-[1px] border-[#E8E8E8] p-2 ">{job_time}</p>
      </div>
      <div className="flex mb-4">
        <p>{job_location}</p>
        <p>{salary}</p>
      </div>
      <div className="text-center">
        <button className=" font-[800] text-[20px] text-[white] px-[26px] py-[19px] rounded-[8px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {/* <Link to="/viewDetais"> View Details</Link> */}
          <Link to={`/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Job;
