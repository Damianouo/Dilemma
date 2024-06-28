import { useCreationCtx } from "../../hooks/useCreationCtx";
import Button from "../UI/Button";
import ChevronLeftSvg from "../svgs/ChevronLeftSvg";
import ChevronRightSvg from "../svgs/ChevronRightSvg";
const PageButtons = () => {
  const { creation, handler } = useCreationCtx();

  const totalEntries = creation.content.entries.length;
  const totalDisplayedEntries = 10;
  const totalPages = Math.ceil(totalEntries / totalDisplayedEntries);

  const pageButtonArr = [];
  if (totalEntries > 0) {
    for (let i = 1; i <= totalPages; i++) {
      pageButtonArr.push(i);
    }
  } else {
    pageButtonArr.push(1);
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        className="bg-secondary-600 px-6 text-primary-200"
        disabled={creation.pageNum === 1}
        onClick={handler.previousPage}
      >
        <ChevronLeftSvg />
      </Button>
      {pageButtonArr.map((pageNum) => (
        <Button
          className="h-10 w-10 bg-primary-300 "
          type="button"
          key={"pageButton" + pageNum}
          disabled={creation.pageNum === pageNum}
          onClick={() => handler.changePage(pageNum)}
        >
          {pageNum}
        </Button>
      ))}
      <Button
        className="bg-secondary-600 px-6 text-primary-200"
        disabled={creation.pageNum === totalPages}
        onClick={handler.nextPage}
      >
        <ChevronRightSvg />
      </Button>
    </div>
  );
};

export default PageButtons;
