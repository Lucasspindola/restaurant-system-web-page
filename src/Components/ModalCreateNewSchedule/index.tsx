import * as yup from "yup";
import { Container, ContainerRegisterContact } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import {
  RestaurantContext,
  iRestaurantContext,
} from "../../Contexts/RestaurantContext";
const schema = yup.object().shape({
  dayWeek: yup.string().required("Campo dia da semana obrigatório!"),
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

export interface INewSchedule {
  dayWeek: string;
  openTime: string;
  closingTime: string;
}
const options = [
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
  "domingo",
];

export const ModalCreateNewSchedulester = () => {
  const { setModalNewScheduleBoolean, newSchedule } =
    useContext<iRestaurantContext>(RestaurantContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewSchedule>({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <ContainerRegisterContact onSubmit={handleSubmit(newSchedule)}>
        <div className="titleContainerContact">
          <h1>Adicionar novo horário</h1>
          <button
            onClick={() => {
              setModalNewScheduleBoolean(false);
            }}
            className="btnExitRegister"
          >
            X
          </button>
        </div>
        <form className="formRegister">
          <div className="contains">
            <select id="dayWeek" {...register("dayWeek")}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="contains">
            <label htmlFor="openTime">Horário de abrir:</label>
            <input
              id="openTime"
              placeholder="Ex: 00:00"
              {...register("openTime")}
            />
          </div>
          {<p>{errors.openTime?.message}</p>}
          <div className="contains">
            <label htmlFor="closingTime">Horário de fechar:</label>
            <input
              id="closingTime"
              placeholder="Ex: 00:00"
              {...register("closingTime")}
            />
          </div>
          {<p>{errors.closingTime?.message}</p>}

          <button type="submit" className="btnRegisterContact">
            Adicionar
          </button>
        </form>
      </ContainerRegisterContact>
    </Container>
  );
};
