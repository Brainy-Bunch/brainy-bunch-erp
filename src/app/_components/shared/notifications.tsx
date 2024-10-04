import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <div className="size-9 relative rounded-full border border-slate-200 grid place-items-center">
      <Bell size={16} />

      <div className="size-2.5 rounded-full absolute top-0 right-0 bg-orange-500"/>
    </div>
  );
};

export default Notifications;
