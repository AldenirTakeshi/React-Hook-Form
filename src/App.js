import "./App.css";
import formLogo from "./assets/form-logo.png";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(userData) {
    console.log(userData);
  }

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2></h2>
      <img src={formLogo} alt="imagem-logo-form" />

      <label>
        Nome:
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>O nome é obrigatório!</span>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email")} />
      </label>
      <label>
        Senha:
        <input type="password" {...register("password")} />
      </label>
      <label>
        Confirmar senha:
        <input type="password" {...register("Confirmpassword ")} />
      </label>

      <button type="submit">Cadastrar-se </button>
    </form>
  );
}

export default App;
