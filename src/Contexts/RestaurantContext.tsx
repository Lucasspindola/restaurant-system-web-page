import React, { ReactNode, createContext, useState } from "react";

import { toast } from "react-toastify";
import { instance } from "../Services/api";

interface iRestaurantContextProps {
  children: ReactNode;
}

export interface INewSchedule {
  dayWeek: string;
  openTime: string;
  closingTime: string;
}
interface IOpeningHour {
  id: string;
  openTime: string;
  closingTime: string;
}
export interface iRestaurantContext {
  setModalNewScheduleBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  modalNewScheduleBoolean: boolean;
  // updateUserData: (data: IUpdateUserRequest) => void;
  updateUserState: boolean;
  setUpdateUserState: React.Dispatch<React.SetStateAction<boolean>>;
  userDataState: boolean;
  setUserDataState: React.Dispatch<React.SetStateAction<boolean>>;
  newSchedule: (data: INewSchedule) => void;
  isDeletingOrAdd: boolean;
  setIsDeletingOrAdd: React.Dispatch<React.SetStateAction<boolean>>;
  currentOpeningTime: IOpeningHour | null;
  setCurrentOpeningTime: React.Dispatch<
    React.SetStateAction<IOpeningHour | null>
  >;
}
export const RestaurantContext = createContext({} as iRestaurantContext);

export const RestaurantContextProvider = ({
  children,
}: iRestaurantContextProps) => {
  const [modalNewScheduleBoolean, setModalNewScheduleBoolean] =
    useState<boolean>(false);
  const [updateUserState, setUpdateUserState] = useState<boolean>(false);
  const [userDataState, setUserDataState] = useState<boolean>(false);
  const [isDeletingOrAdd, setIsDeletingOrAdd] = useState(false);
  const [currentOpeningTime, setCurrentOpeningTime] =
    useState<IOpeningHour | null>({
      id: "",
      openTime: "",
      closingTime: "",
    });

  const newSchedule = (data: INewSchedule) => {
    const token = window.localStorage.getItem("authToken");
    instance
      .post("/schedules", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        response && toast.success("Criado com sucesso!");
        setIsDeletingOrAdd(!isDeletingOrAdd);
        setModalNewScheduleBoolean(false);
      })
      .catch((error) => {
        error && toast.success("Houve um problema, tente novamente!");
        console.log(error);
      });
  };

  return (
    <RestaurantContext.Provider
      value={{
        modalNewScheduleBoolean,
        setModalNewScheduleBoolean,
        updateUserState,
        setUpdateUserState,
        userDataState,
        setUserDataState,
        newSchedule,
        isDeletingOrAdd,
        setIsDeletingOrAdd,
        currentOpeningTime,
        setCurrentOpeningTime,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
