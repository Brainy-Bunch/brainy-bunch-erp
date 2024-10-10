import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type TPageType = {
  page_name: string;
  page_path: string;
};

const pages: TPageType[] = [
  {
    page_name: "Dashboard Overview",
    page_path: "/admin/dashboard",
  },
  { page_name: "Manage Coaches", page_path: "/admin/coaches" },
  { page_name: "Class Schedules", page_path: "/admin/classes" },
  { page_name: "Client Directory", page_path: "/admin/clients" },
  { page_name: "Sales Analytics", page_path: "/admin/sales" },
  { page_name: "Settings", page_path: "/admin/sales" },
];

const Navigationbar = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="hidden lg:flex items-start px-6 mt-3   border-b w-full">
      <div className="flex items-center">
        {pages.map((page, index) => (
          <div
            key={index}
            className={cn(
              "pb-1",
              path === page.page_path
                ? "border-b border-black text-black"
                : "border-b border-transparent text-neutral-500"
            )}
          >
            <Button
              className="text-sm  font-normal px-4 hover:bg-neutral-200/70 hover:text-black h-8 "
              variant={"ghost"}
            >
              {page.page_name}
            </Button>
          </div>
        ))}
      </div>
 
    </div>
  );
};

export default Navigationbar;
