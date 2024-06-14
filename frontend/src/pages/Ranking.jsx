import { useParams } from "react-router-dom";
import { dummyContests } from "../dummyData";

const Ranking = () => {
  const { contestId } = useParams();
  const content = dummyContests.find((element) => element.id === contestId);
  const sortedItems = content.items.toSorted((a, b) => b.winCount - a.winCount);
  return (
    <div>
      <h2>{content.title}</h2>
      <ul className="flex flex-col gap-4 ">
        {sortedItems.map((item) => (
          <li key={item.itemTitle} className="flex gap-4">
            <span>{item.itemTitle}</span>
            <span>Win :{item.winCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
