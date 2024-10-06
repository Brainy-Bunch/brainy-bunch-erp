import AdminProfileMenu from "./admin-profile";
import Notifications from "./notifications";
import PagesNavigation from "./pages-menu";

type THeaderProps = {
  role: string;
};

const Header = ({ role }: THeaderProps) => {
  return (
    <header className="w-full p-4 py-2 border-b sticky top-0 z-[9999] bg-white  flex items-center justify-between">
      <PagesNavigation />
      {/* {role === "admin" ? <AdminProfileMenu /> : null} */}
      <div className="flex items-center gap-2">
        <Notifications />
        <AdminProfileMenu />
      </div>
    </header>
  );
};

export default Header;
