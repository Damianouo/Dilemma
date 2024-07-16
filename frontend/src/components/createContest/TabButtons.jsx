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
              ? "from-secondary-300 to-secondary-500 font-bold text-primary-950"
              : "bg-secondary-800 bg-none hover:bg-secondary-600",
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
