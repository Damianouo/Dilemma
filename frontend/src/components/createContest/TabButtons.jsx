import Button from "../UI/Button";
import { twMerge as tm } from "tailwind-merge";
import { useCreationCtx } from "../../hooks/useCreationCtx";

const tabs = [
  { label: "Info/Links Upload", tabName: "info" },
  { label: "Edit entries", tabName: "edit" },
];

const TabButtons = () => {
  const { creation, handler } = useCreationCtx();
  const { activeTab } = creation;
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <Button
          key={tab.tabName}
          className={tm(
            "rounded-none",
            activeTab === tab.tabName
              ? "bg-primary-300 hover:bg-primary-200"
              : "bg-primary-600 text-secondary-300 hover:bg-primary-500",
          )}
          onClick={() => handler.changeTab(tab.tabName)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default TabButtons;
