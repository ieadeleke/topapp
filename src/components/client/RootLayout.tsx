"use client";

// import { GlobalContext } from "@/context/GlobalContext";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import {
  ControllableSnackBar,
  ControllableSnackBarRef,
  ControllableSnackBarStateParams,
} from "../snackbar/ControllableSnackbar";
import { Provider as ReduxProvider } from "react-redux";
import { useRef, useState } from "react";
import storeFactory from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import UserContext from "@/context/UserContext";
import { Profile } from "@/models/profile";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { store, persistor } = storeFactory();
  const snackBarRef = useRef<ControllableSnackBarRef>(null);
  const [user, setUser] = useState<Profile | null>(null);

  function showSnackBar(params: ControllableSnackBarStateParams) {
    snackBarRef.current?.open(params);
  }
  


  return (
    <div>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistor}>
            <GlobalActionContext.Provider
              value={{
                showSnackBar,
              }}
            >
              <UserContext.Provider
                value={{
                  user,
                  updateUser: setUser,
                }}
              >
                <div>
                  {children}
                  {/* <AuthModal /> */}
                  <ControllableSnackBar ref={snackBarRef} />
                </div>
              </UserContext.Provider>
            </GlobalActionContext.Provider>
          </PersistGate>
        </ReduxProvider>
      </ThemeProvider>
    </div>
  );
}
