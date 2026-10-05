import { useParams } from "react-router-dom";
import { findAppPrivacy } from "./registry";
import NotFound from "../pages/NotFound";

const AppPrivacy = () => {
  const { appId } = useParams<{ appId: string }>();
  const entry = appId ? findAppPrivacy(appId) : undefined;
  if (!entry) return <NotFound />;
  const Policy = entry.policy;
  return <Policy />;
};

export default AppPrivacy;
