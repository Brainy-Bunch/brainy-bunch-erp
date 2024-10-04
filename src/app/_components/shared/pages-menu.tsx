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
        <DropdownMenuTrigger className="outline-none ring-transparent">
          <div className="flex items-center gap-2">
            <p className="text-xl">{page}</p>
            <ChevronsUpDown size={14} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[200px] shadow-sm p-2 flex flex-col gap-1"
          align="start"
          sideOffset={10}
        >
          {pages.map((page, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                router.push(page.page_path);
              }}
              className="text-base w-full flex items-center justify-between"
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
