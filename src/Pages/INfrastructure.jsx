import Banner from "../Components/Banner";
import MainCard from "../Components/CardINfrastructure/MainCard";
const INfrastructure = () => {
  return (
    <div>
      <div>
        {" "}
        <Banner title="INfrastructure" />
      </div>

      <div className="gird grid-cols-3 bg-gray-100 py-9 p-20 ">
        <MainCard />
      </div>
    </div>
  );
};

export default INfrastructure;
