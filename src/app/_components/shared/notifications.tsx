import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <button className="size-8 relative rounded-md  lg:text-neutral-500 lg:hover:text-black lg:hover:bg-neutral-200/70 border-neutral-200 grid place-items-center">
      <Bell size={18} strokeWidth={2} />
      <div className="size-2.5 rounded-full absolute top-0 right-0 bg-orange-500" />
    </button>
  );
};

export default Notifications;
