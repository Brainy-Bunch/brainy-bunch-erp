import AdminProfileMenu from "./admin-profile";
import PagesNavigation from "./pages-menu";

type THeaderProps = {
  role: string;
};

const Header = ({ role }: THeaderProps) => {
  return (
    <header className="w-full p-6 flex items-center justify-between">
      <PagesNavigation />
      {/* {role === "admin" ? <AdminProfileMenu /> : null} */}
      <AdminProfileMenu />
    </header>
  );
};

export default Header;
