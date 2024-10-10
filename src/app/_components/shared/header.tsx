import AdminProfileMenu from "./admin-profile";
import Notifications from "./notifications";
import PagesNavigation from "./pages-menu";

type THeaderProps = {
  role: string;
};

const Header = ({ role }: THeaderProps) => {
  return (
    <header className="w-full p-4 py-2 lg:pt-3 lg:px-6 border-b lg:border-none sticky top-0 bg-white  flex items-center justify-between">
      <div className="lg:hidden">
        <PagesNavigation />
      </div>
      <div className="lg:flex items-center gap-2 hidden">
        <div className="lg:block hidden size-6 bg-orange-500 rounded-full" />
        <p className="font-semibold text-">
          Brainy Management System
        </p>
      </div>
      {/* {role === "admin" ? <AdminProfileMenu /> : null} */}
      <div className="flex items-center gap-2 lg:gap-4">
        <a href="" className=" text-neutral-700 capitalize hover:text-black text-sm">
          changelog
        </a>
        <a href="" className=" text-neutral-700 capitalize hover:text-black text-sm">
          help
        </a>
        <div />
        <Notifications />
        <AdminProfileMenu />
      </div>
    </header>
  );
};

export default Header;
