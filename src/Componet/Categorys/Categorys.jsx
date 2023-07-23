import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
const Categorys = () => {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    axios.get("JobCategory.json").then((data) => setCategory(data.data));
  }, []);
  return (
    <div>
      <h2 className="text-[48px] text-center font-[800]">Job Category List</h2>
      <p className="text-[16px] font-[500 ] text-center leading-[26px] mb-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {categorys.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
