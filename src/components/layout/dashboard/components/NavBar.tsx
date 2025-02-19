import { Avatar } from "@/components/image/Avatar";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { TextField } from "@/components/input/InputText";

export const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex min-h-20 bg-white px-8">
      <div className="flex flex-1 items-center gap-4">
        <h1>Overview</h1>
        <div className="flex-1" />
        <TextField.Input placeholder="Search" className="hidden w-[600px] bg-[#F9F9F9] px-4 rounded-md md:block" />
        <div className="flex-1" />

        <div className="hidden items-center space-x-4 md:flex">
          <img className="w-12 aspect-square rounded-lg bg-gray-300" />

          <div>
            <h1 className="font-semibold">Laura Ajike</h1>
            <p className="text-gray-500">laura@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
