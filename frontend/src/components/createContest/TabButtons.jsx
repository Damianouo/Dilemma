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
              ? "bg-secondary-400 text-secondary-950 pointer-events-none font-bold"
              : "bg-secondary-800 text-secondary-300 hover:bg-secondary-700",
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
