import img from "../../assets/All Images/P3OLGJ1 copy 1.png";
import Categorys from "../Categorys/Categorys";
import FeaturesJob from "../FeaturesJob/FeaturesJob";
const Home = () => {
  return (
    <>
      <div className="flex p-[100px] bg-[#F9F9FF] mb-10 ">
        <div className="w-1/2">
          <h1 className="text-[80px] font-[800] leading-[100px] mt-[130px]">
            One Step <br /> Closer To Your <br /> <span>Dream Job</span>
          </h1>
          <p className="text-[18px] font-[500] leading-[30px] my-[24px]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="font-[800] text-[20px] text-[white] px-[26px] py-[19px] rounded-[8px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Get Started
          </button>
        </div>

        <div className="w-1/2">
          <img className="w-full h-[700px]" src={img} alt="img" />
        </div>
      </div>
      <Categorys></Categorys>
      <FeaturesJob></FeaturesJob>
    </>
  );
};

export default Home;
