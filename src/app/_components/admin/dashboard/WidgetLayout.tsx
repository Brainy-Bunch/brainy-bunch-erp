import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

type TWidgetProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  link: string;
};

const WidgetLayout = ({
  children,
  className,
  title,
  link,
  ...props
}: TWidgetProps) => {
  return (
    <div className="w-full border rounded-md bg-white">
      <div className="p-4 border-b flex items-center justify-between ">
        <h1 className="font-semibold">{title}</h1>
        <Link href={link}>
          <ArrowUpRight size={14} strokeWidth={3} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default WidgetLayout;
