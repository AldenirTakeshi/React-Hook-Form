import "./App.css";
import formLogo from "./assets/air-canada-logo-3.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
  const schema = yup
    .object({
      name: yup.string().required("O Nome é obrigatório"),
      email: yup
        .string()
        .email("Digite um email válido!")
        .required("O Email é obrigatório"),
      password: yup
        .string()
        .min(6, "As senhas deve ter pelo menos 6 dígitos")
        .required("A Senha é obrigatório"),
      confirmPassword: yup
        .string()
        .required("Confirmação da senha é obrigatória")
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(watch("name"));
  function onSubmit(userData) {
    console.log(userData);
  }
  return (
    <div id="form-background">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2></h2>
        <img style={{ marginTop: "-200px" }} src={formLogo} alt="imagem-logo-form" />

        <label>
          Nome:
          <input type="text" {...register("name", { required: true })} />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          Email:
          <input type="email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </label>
        <label>
          Senha:
          <input type="password" {...register("password")} />
          <span>{errors.password?.message}</span>
        </label>
        <label>
          Confirmar senha:
          <input type="password" {...register("confirmPassword")} />
          <span>{errors.confirmPassword?.message}</span>
        </label>
        <button type="submit">Cadastrar-se </button>
      </form>
    </div>
  );
}

export default App;
