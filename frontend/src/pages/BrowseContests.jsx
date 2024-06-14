/* eslint-disable react/prop-types */
import ContestThumbnail from "../components/ContestThumbnail";
import { dummyContests } from "../dummyData";

const BrowseContests = () => {
  return (
    <div className="padding">
      <AllContests>
        {dummyContests.map((contest) => (
          <ContestThumbnail key={contest.id} contestContents={contest} />
        ))}
      </AllContests>
    </div>
  );
};

export default BrowseContests;

const AllContests = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};
