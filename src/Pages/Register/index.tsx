// import { useContext } from "react";
// import { iRegisterUser, UserContext } from "../../Contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { instance } from "../../Services/api";
// import { FcBusinessContact } from "react-icons/fc";
// import logo from "../../Assets/Logo.png";

// export interface iRegisterUser {
//   name: string;ok
//   email: string;ok
//   password: string;ok
//   passwordConfirm: string;ok
//   isAdm: boolean;
//   phone: string;ok
//   profileImage: null | string;ok
// }
const options = [
  "restaurante",
  "lanchonete",
  "pizzaria",
  "sorveteria",
  "churrascaria",
  "cafeteria",
  "comida japonesa",
  "hamburgueria",
  "food truck",
];

export interface iRegisterUser {
  name: string;
  email: string;
  phone: string;
  document: string;
  description: string;
  profileImage: null | string;
  password: string;
  passwordConfirm: string;
  typeRestaurant: string;
}

const testPassword = new RegExp("^(?=.*\\d).{8,}$");

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Digite um email válido"),
  description: yup.string().required(),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(
      testPassword,
      "São obrigatórios pelo menos 8 caracteres, sendo pelo menos um numero."
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf(
      [yup.ref("password"), null],
      "É necessário que as senhas sejam idênticas."
    ),
  profileImage: yup.string().notRequired(),
  phone: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^[0-9]+$/, "fd")
    .min(8, "Mínimo de 8 dígitos é necessário.")
    .max(11, "Máximo de 11 dígitos é permitido"),
  document: yup.string().required("Campo obrigatório!"),
  typeRestaurant: yup.string().required(),
});
export const Register = () => {
  const registerUser = (data: iRegisterUser) => {
    if (data.profileImage === "") {
      data.profileImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFp9KnmSAKs9BYZtb2ULsD2lFlNI_pviYNw&usqp=CAU";
    }
    instance
      .post<iRegisterUser>("/restaurants", data)
      .then((response) => {
        console.log(response);
        navigate("/login");

        // sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        console.log(err, "ERRO> AQUII");

        // toast.error(`Ops, houve um erro em nosso servidor. Tente novamente!`);
      });
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: yupResolver(schema),
  });

  // const { registerUser } = useContext(UserContext);

  return (
    <RegisterContainer>
      <div className="containerLogoAndBtnReturn">
        {/* <FcBusinessContact
          className="logoIcon"
          style={{ width: "100%", height: "100%" }}
        /> */}
        <button className="returnBtn" onClick={() => navigate("/login")}>
          Voltar
        </button>
      </div>
      <div className="containerForm">
        <div className="ContainerTitleForm">
          <h1>Cadastre seu Restaurante</h1>
        </div>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome do restaurante</label>
          <input
            id="name"
            placeholder="Digite aqui o nome de seu restaurante"
            type="text"
            {...register("name")}
          />
          {<p>{errors.name?.message}</p>}

          <label htmlFor="typeRestaurant">Tipo</label>
          <select id="typeRestaurant" {...register("typeRestaurant")}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {<p>{errors.typeRestaurant?.message}</p>}

          <label htmlFor="name">Descrição</label>
          <input
            id="description"
            placeholder="Digite uma descrição do seu restaurante aqui"
            type="description"
            {...register("description")}
          />
          {<p>{errors.description?.message}</p>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            type="text"
            {...register("email")}
          />
          {<p> {errors.email?.message}</p>}
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {<p>{errors.password?.message}</p>}
          <label htmlFor="passwordConfirm">Confirmar Senha</label>
          <input
            id="passwordConfirm"
            placeholder="Confirme aqui sua senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {<p>{errors.passwordConfirm?.message}</p>}
          <label htmlFor="profileImage">Imagem de Perfil:</label>
          <input
            id="profileImage"
            placeholder="URL da sua imagem"
            type="text"
            {...register("profileImage")}
          />
          {<p>{errors.profileImage?.message}</p>}
          <label htmlFor="phone">Contato</label>
          <input
            id="phone"
            placeholder="Opção de contato"
            type="text"
            {...register("phone")}
          />
          {<p>{errors.phone?.message}</p>}

          <label htmlFor="document">Documento</label>
          <input
            id="document"
            placeholder="Documento"
            type="text"
            {...register("document")}
          />
          {<p>{errors.document?.message}</p>}

          <button className="btnRegister">Cadastrar</button>
        </form>
      </div>
    </RegisterContainer>
  );
};
