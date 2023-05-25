import { LoginContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { instance } from "../../Services/api";

export interface iLogin {
  email: string;
  password: string;
}
interface iLoginToken {
  token: string;
  restaurantId: string;
}
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Digite um email que possua um cadastro!"),
  password: yup.string().required("Campo Obrigatório!"),
});
export const Login = () => {
  const loginUser = (data: iLogin) => {
    instance
      .post<iLoginToken>("/session", data)
      .then((res) => {
        localStorage.removeItem("authToken");
        window.localStorage.setItem("authToken", res.data.token);

        navigate(`/dashboard/${res.data.restaurantId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  return (
    <>
      <LoginContainer>
        <div className="containerLogo"></div>

        <div className="containerFormLogin">
          <div className="ContainerTitleFormLogin">
            <h3>Login</h3>
          </div>
          <form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite aqui seu email"
              type="text"
              {...register("email")}
            />
            {<p>{errors.email?.message}</p>}
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("password")}
            />
            {<p>{errors.password?.message}</p>}
            <button className="btnLogin">Entrar</button>
            <p className="ancoraLinkRegister">Ainda não possui uma conta?</p>
          </form>
          <div className="containerBtnRedirectRegister">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="btnForRegister"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};
