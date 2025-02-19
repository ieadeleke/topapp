import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useMemo } from "react";

export type ListItemProps = {
  name: string;
  href: string;
  newTab?: boolean;
  isActive?: boolean;
  startIcon?: JSX.Element;
};

export const ListItem = (props: ListItemProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return pathname == props.href;
  }, [pathname]);

  return (
    <Link
      href={props.href}
      passHref
      target={props.newTab ? "_blank" : undefined}
      rel={props.newTab ? "noreferrer noopener" : undefined}
      className={`flex rounded-md ${
        isActive ? "text-white" : "text-gray-800"
      } ${isActive ? "bg-primary" : "bg-transparent"} ${
        isActive ? "border-l-[5px] border-primary" : ""
      } ${
        isActive ? "font-bold" : ""
      } items-center gap-4 px-3 py-3 hover:bg-primary-20`}
    >
      {props.startIcon}
      <p
        className={`hidden text-sm ${
          isActive ? "text-base-semibold" : "text-base-regular"
        } lg:block`}
      >
        {props.name}
      </p>
    </Link>
  );
};
