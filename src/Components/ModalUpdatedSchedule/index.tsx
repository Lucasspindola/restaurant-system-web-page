import * as yup from "yup";
import { Container, ContainerRegisterContact } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  RestaurantContext,
  iRestaurantContext,
} from "../../Contexts/RestaurantContext";
import { instance } from "../../Services/api";
const schema = yup.object().shape({
  openTime: yup
    .string()
    .required("Campo Obrigatório!")
    .matches(
      /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      "Formato de hora inválido."
    ),
  closingTime: yup
    .string()
    .required("Campo Obrigatório!")
    .matches(
      /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      "Formato de hora inválido."
    ),
});

export interface updatedSchedule {
  openTime: string;
  closingTime: string;
}
export interface returnedUpdatedSchedule {
  openTime: string;
  closingTime: string;
  id: string;
}

export const ModalUpdatedSchedulester = () => {
  const {
    currentOpeningTime,
    setCurrentOpeningTime,
    setIsDeletingOrAdd,
    isDeletingOrAdd,
  } = useContext<iRestaurantContext>(RestaurantContext);

  const [currentOpenTimeState, setCurrentOpenTimeState] = useState(
    currentOpeningTime?.openTime
  );
  const [currentClosingTimeState, setCurrentClosingTimeState] = useState(
    currentOpeningTime?.closingTime
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updatedSchedule>({
    resolver: yupResolver(schema),
  });

  const updatedSchedule = (data: updatedSchedule) => {
    const token = window.localStorage.getItem("authToken");
    instance
      .patch<returnedUpdatedSchedule>(
        `schedules/${currentOpeningTime?.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res && toast.success("Update realizado com sucesso!");
        setIsDeletingOrAdd(!isDeletingOrAdd);
        setCurrentOpeningTime({
          id: "",
          openTime: "",
          closingTime: "",
        });
        setCurrentOpenTimeState("00:00");
        setCurrentClosingTimeState("00:00");
      })
      .catch((err) => {
        err && toast.error("Ops!! Algo errado aconteceu.Tente mais tarde!");
      });
  };

  return (
    <Container>
      <ContainerRegisterContact onSubmit={handleSubmit(updatedSchedule)}>
        <div className="titleContainerContact">
          <h1>Adicionar novo horário</h1>
          <button
            onClick={() => {
              setCurrentOpeningTime({
                id: "",
                openTime: "",
                closingTime: "",
              });
            }}
            className="btnExitRegister"
          >
            X
          </button>
        </div>
        <form className="formRegister">
          <div className="contains">
            <label htmlFor="openTime">Horário de abrir:</label>
            <input
              id="openTime"
              placeholder="Ex: 00:00"
              defaultValue={currentOpenTimeState}
              {...register("openTime")}
            />
          </div>
          {<p>{errors.openTime?.message}</p>}
          <div className="contains">
            <label htmlFor="closingTime">Horário de fechar:</label>
            <input
              id="closingTime"
              placeholder="Ex: 00:00"
              defaultValue={currentClosingTimeState}
              {...register("closingTime")}
            />
          </div>
          {<p>{errors.closingTime?.message}</p>}
          <button type="submit" className="btnRegisterContact">
            Editar
          </button>
        </form>
      </ContainerRegisterContact>
    </Container>
  );
};
