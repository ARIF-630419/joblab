const Category = ({ category }) => {
  const { title, img, availableJob } = category;

  return (
    <div className="bg-[#FAF8FF] p-10 rounded-lg mb-4">
      <img
        className="w-10 h-10 mb-10 bg-[#EFECFF] p-3 rounded-lg"
        src={img}
        alt=""
      />
      <h2 className="text-xl font-extrabold text-[#474747]">{title}</h2>
      <p className="text-base text-[#A3A3A3] font-medium mt-1">
        {availableJob}
      </p>
    </div>
  );
};

export default Category;
