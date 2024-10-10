import {
  ChevronsUpDown,
  LayoutDashboard,
  Users,
  UsersRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type TPageType = {
  page_name: string;
  page_path: string;
};

const pages: TPageType[] = [
  {
    page_name: "Dashboard",
    page_path: "/dashboard",
  },
  { page_name: "Coaches", page_path: "/admin/coaches" },
  { page_name: "Classes", page_path: "/admin/classes" },
  { page_name: "Clients", page_path: "/admin/Clients" },
  { page_name: "Sales", page_path: "/admin/sales" },
];
const PagesNavigation = () => {
  const router = useRouter();
  const path = usePathname();

  const page = path.split("/")[2];

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-transparent lg:hover:bg-neutral-100 lg:p-1 rounded-md lg:px-3">
          <div className="flex items-center gap-2">
            <p className="text-base text-neutral-600 lg:font-medium lg:capitalize">Joan Watiri</p>
            <ChevronsUpDown size={14} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[200px] lg:shadow shadow-sm p-2 flex z-[99999] flex-col gap-1 border border-slate-200"
          align="start"
          sideOffset={9}
        >
          {pages.map((page, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                router.push(page.page_path);
              }}
              className="text-base cursor-pointer lg:font-medium lg:text-neutral-600 hover:bg-neutral-200/70 lg:hover:text-black w-full flex items-center justify-between"
            >
              <p className="lowercase"> {page.page_name}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PagesNavigation;
