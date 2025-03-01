import { Form } from "react-router-dom";
import InfoUpload from "./InfoUpload";
import EditEntries from "./EditEntries";
import { useCreationCtx } from "../../hooks/useCreationCtx";

const ContestForm = ({ children }) => {
  const { creation } = useCreationCtx();
  const { activeTab } = creation;
  return (
    <Form className="from-primary-700 to-primary-900 text-primary-100 bg-linear-to-b">
      {activeTab === "info" && <InfoUpload />}
      {activeTab === "edit" && <EditEntries />}
      {children}
    </Form>
  );
};

export default ContestForm;
