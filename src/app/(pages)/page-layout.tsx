import Header from "../_components/shared/header";
import Navigationbar from "../_components/shared/navigation-bar";
import { useAuth } from "../context/authContext";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useAuth();

  return (
    <div className=" pb-20 min-h-[200vh]">
      <Header role={user.user?.role || ""} />
      <Navigationbar />
      {children}
    </div>
  );
};

export default PageLayout;
