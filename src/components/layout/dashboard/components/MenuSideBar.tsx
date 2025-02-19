import HomeIcon from "@/assets/icons/ic_home.svg";
import HistoryIcon from "@/assets/icons/ic_history.svg";
import SettingsIcon from "@/assets/icons/ic_settings.svg";
import LogOutIcon from "@/assets/icons/ic_logout.svg";
import { ListItem } from "./ListItem";
import { Divider } from "@/components/Divider";
import {
  ConfirmationDialog,
  ConfirmationDialogRef,
} from "@/components/ConfirmationDialog";
import { useRef } from "react";
import logOut from "@/utils/auth/logOut";

export const MenuSideBar = () => {
  const confirmationDialogRef = useRef<ConfirmationDialogRef>(null);

  function handleLogout() {
    confirmationDialogRef.current?.showConfirmationDialog({
      data: {
        title: "Are you sure you want to logout?",
        description: "Your active session will be removed from this device",
      },
      onCancel: () => {
        confirmationDialogRef.current?.closeConfirmationDialog();
      },

      onConfirm: () => {
        confirmationDialogRef.current?.closeConfirmationDialog();
        logOut();
        location.href = "/";
      },
    });
  }

  return (
    <div className="w-full h-full flex flex-col gap-8 items-center bg-white overflow-y-scroll no-scrollbar px-0 py-6 lg:px-2 lg:items-start">
      <ConfirmationDialog ref={confirmationDialogRef} />

      <div className="flex flex-col gap-5 mt-4 lg:w-full">
        <ListItem
          isActive
          startIcon={<HomeIcon />}
          name="Home"
          href="/dashboard"
        />
        <ListItem
          startIcon={<HistoryIcon />}
          name="History"
          href="/dashboard/history"
        />
        <ListItem
          startIcon={<SettingsIcon />}
          name="Settings"
          href="/dashboard/settings"
        />

        <Divider />
        <div
          onClick={handleLogout}
          className={`flex cursor-pointer bg-red-600 text-white rounded-md items-center gap-4 px-3 py-3 hover:bg-primary-20`}
        >
          <LogOutIcon />
          <p className={`hidden text-sm lg:block`}>Log Out</p>
        </div>
      </div>
    </div>
  );
};
