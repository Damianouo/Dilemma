import Button from "../UI/Button";
import { useCreationCtx } from "../../hooks/useCreationCtx";
import { cn } from "../../utils/cn";

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
          className={cn(
            "rounded-none",
            activeTab === tab.tabName
              ? "from-secondary-300 to-secondary-500 text-primary-950 font-bold"
              : "bg-secondary-800 hover:bg-secondary-600 bg-none",
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
