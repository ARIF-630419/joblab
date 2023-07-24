import { Link } from "react-router-dom";
import a from "../../assets/Icons/Frame-4.png";

const ShowAppliedJob = ({ job }) => {
  const { id, img, job_title, company_name, address, job_time, job_type } = job;

  return (
    <div className="flex  items-center border-[1px] border-solid border-violet-500 my-4 rounded-[8px] mx-20 justify-between p-4">
      <div>
        <img className="w-[240px] h-[240px] rounded-[8px]" src={img} alt="" />
      </div>
      <div>
        <h2 className="text-[24px] font-[800] my-4">{job_title}</h2>
        <p className="mb-2">{company_name}</p>
        <div className="flex mb-2">
          <p className="border-[1px] border-[#E8E8E8] p-2 mr-2">{job_type}</p>
          <p className="border-[1px] border-[#E8E8E8] p-2 ">{job_time}</p>
        </div>
        <div className="flex mb-2 ">
          <img src={a} className="pr-2" alt="" />
          <p>
            Address:
            <span> {address}</span>
          </p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <button className=" font-[800] text-[20px] text-[white] px-[26px] py-[19px] rounded-[8px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            {/* <Link to="/viewDetais"> View Details</Link> */}
            <Link to={`/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAppliedJob;
