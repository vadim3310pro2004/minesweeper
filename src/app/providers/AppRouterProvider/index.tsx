import { RouterProvider, RouterProviderProps } from "react-router-dom";
import router from "./router";
import { FC, useEffect } from "react";
import { useAppDispath } from "shared/hooks";
import { fetchUser } from "entities/accounts/store/account.slice";


export interface AppRouterProviderProps extends Omit<RouterProviderProps, "router"> { }


export const AppRouterProvider: FC<AppRouterProviderProps> = (props) => {
    const dispatch = useAppDispath();

    useEffect(
      () => {
        dispatch(fetchUser([]));
      },
      []
    );
  
  
    return (
        <RouterProvider
            router={router}
            {...props}
        />
    );
};