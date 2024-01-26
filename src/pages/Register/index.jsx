import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContainerForm } from "./styled";
import { toast } from "react-toastify";

export default function Register() {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!e.target.nome.value) {
      formErrors = true;
      toast.error("Preencha o nome");
    }

    if (!e.target.idade.value) {
      formErrors = true;
      toast.error("Preencha a idade");
    }

    if (!e.target.especie.value) {
      formErrors = true;
      toast.error("Preencha a espécie");
    }

    if (!e.target.raca.value) {
      formErrors = true;
      toast.error("Preencha a raça");
    }

    if (formErrors) return;

    await axios
      .post("http://localhost:8800/pets", {
        nome: e.target.nome.value,
        idade: e.target.idade.value,
        especie: e.target.especie.value,
        raca: e.target.raca.value,
        dataAdocao: e.target.dataAdocao.value || undefined,
      })
      .then(() => {
        toast.success("Pet cadastrado");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  return (
    <ContainerForm>
      <h1>Cadastrar Pet</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" />
        <label htmlFor="idade">Idade</label>
        <input type="number" name="idade" id="idade" />
        <label htmlFor="especie">Espécie</label>
        <input type="text" name="especie" id="especie" />
        <label htmlFor="raca">Raça</label>
        <input type="text" name="raca" id="raca" />
        <label htmlFor="dataAdocao">Data de Adoção</label>
        <input type="date" name="dataAdocao" id="dataAdocao" />
        <button type="submit">Cadastrar</button>
      </form>
    </ContainerForm>
  );
}
