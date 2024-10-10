import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
    <div className="hidden lg:flex items-start px-6 pt-2 sticky top-0 z-[9999] bg-white   border-b w-full">
      <div className="flex items-center">
        {pages.map((page, index) => (
          <div
            key={index}
            className={cn(
              "pb-1",
              path === page.page_path
                ? "border-b-2 border-black text-black"
                : "border-b-2 border-transparent text-neutral-500"
            )}
          >
            <Link href={page.page_path}>
              <Button
                className="text-sm  font-normal px-4 hover:bg-neutral-200/70 hover:text-black h-7 "
                variant={"ghost"}
              >
                {page.page_name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigationbar;
