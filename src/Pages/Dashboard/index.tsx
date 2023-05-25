import { ContainerDashboard } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { instance } from "../../Services/api";
import { ModalCreateNewSchedulester } from "../../Components/ModalCreateNewSchedule";
import {
  RestaurantContext,
  iRestaurantContext,
} from "../../Contexts/RestaurantContext";
import { ModalUpdatedSchedulester } from "../../Components/ModalUpdatedSchedule";
import { toast } from "react-toastify";

export interface iContextContactDashboard {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  modalRegister: boolean;
}
interface IRestaurant {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  description: string;
  profileImage: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  daysOfWeek: IDayOfWeek[];
}

interface IDayOfWeek {
  id: string;
  dayWeek: string;
  openingHours: IOpeningHour[];
}

interface IOpeningHour {
  id: string;
  openTime: string;
  closingTime: string;
}

export const Dashboard = () => {
  const { id: idRestaurant } = useParams();
  const {
    modalNewScheduleBoolean,
    setModalNewScheduleBoolean,
    isDeletingOrAdd,
    setIsDeletingOrAdd,
    currentOpeningTime,
    setCurrentOpeningTime,
  } = useContext<iRestaurantContext>(RestaurantContext);
  const [restaurantData, setRestaurantData] = useState<IRestaurant[]>([]);

  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("authToken");
    navigate("/login");
  };

  const token = window.localStorage.getItem("authToken");

  useEffect(() => {
    instance
      .get(`/restaurants/${idRestaurant}`)
      .then((response) => {
        setRestaurantData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idRestaurant, isDeletingOrAdd]);

  const deleteSchedule = (dayWeekId: string, openingHourId: string) => {
    instance
      .delete(`/schedules/${dayWeekId}/${openingHourId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        response && toast.success("Deletado com sucesso!");
        setIsDeletingOrAdd(!isDeletingOrAdd);
      })
      .catch((error) => {
        console.log(error);
        error && toast.success("Ops, houve um erro, tente novamente!");
      });
  };

  return (
    <>
      {currentOpeningTime?.id !== "" ? <ModalUpdatedSchedulester /> : ""}
      {modalNewScheduleBoolean ? <ModalCreateNewSchedulester /> : ""}
      {token ? (
        <ContainerDashboard>
          <header>
            <button className="btnProfileEdit">
              <img
                className="logoIcon"
                src={restaurantData[0]?.profileImage}
                alt=""
              />
              Editar
            </button>

            <button onClick={() => logout()}>Sair</button>
          </header>

          <div className="containerInformationsProfile">
            <h2>Restaurante: {restaurantData[0]?.name}</h2>
            <p className="contactCurrent">
              Contato Atual: {restaurantData[0]?.phone}
            </p>
          </div>
          <div className="containerTitleUl">
            <span>Horários</span>

            <button onClick={() => setModalNewScheduleBoolean(true)}>+</button>
          </div>
          <main>
            <ul className="ulMain">
              {restaurantData?.map((restaurant) => (
                <li key={restaurant?.id}>
                  <ul className="x">
                    {restaurant?.daysOfWeek?.map((day?) => (
                      <li key={day?.id}>
                        <h4>{day?.dayWeek}</h4>
                        <ul className="ulHours">
                          {day?.openingHours.map((hour) => (
                            <li key={hour?.id}>
                              {hour?.openTime} - {hour?.closingTime}
                              <div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    deleteSchedule(day.id, hour.id);
                                  }}
                                >
                                  Deletar
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setCurrentOpeningTime(hour)}
                                >
                                  Editar
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </main>
        </ContainerDashboard>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};
