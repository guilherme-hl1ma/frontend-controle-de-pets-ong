/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import axios from "axios";
import { ContainerForm } from "./styled";
import { toast } from "react-toastify";

export default function EditPetForm({ onEdit, setOnEdit, getPets }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const pet = ref.current;

      if (onEdit.dataAdocao) {
        const [day, month, year] = onEdit.dataAdocao.split("/").map(Number);

        const date = new Date(year, month - 1, day);
        const formattedDay = date.getDate().toString().padStart(2, "0");
        const formattedMonth = (date.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const formattedYear = date.getFullYear();

        const dateDB = `${formattedYear}-${formattedMonth}-${formattedDay}`;
        pet.dataAdocao.value = dateDB;
      }

      pet.nome.value = onEdit.nome;
      pet.idade.value = onEdit.idade;
      pet.especie.value = onEdit.especie;
      pet.raca.value = onEdit.raca;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    const pet = ref.current;

    if (!pet.nome.value) {
      formErrors = true;
      toast.error("Preencha o nome");
    }

    if (!pet.idade.value) {
      formErrors = true;
      toast.error("Preencha a idade");
    }

    if (!pet.especie.value) {
      formErrors = true;
      toast.error("Preencha a espécie");
    }

    if (!pet.raca.value) {
      formErrors = true;
      toast.error("Preencha a raça");
    }

    if (formErrors) return;

    if (onEdit) {
      await axios
        .put(`http://localhost:8800/pets/adopt/${onEdit.id}`, {
          nome: pet.nome.value,
          idade: pet.idade.value,
          especie: pet.especie.value,
          raca: pet.especie.value,
          dataAdocao: pet.dataAdocao.value || null,
        })

        .then(() => {
            toast.success("Pet atualizado");
            pet.reset();
        })
        .catch(() => toast.error("Erro ao adotar o Pet"));
    }

    getPets();
    setOnEdit();
  };

  return (
    <ContainerForm>
      <h1>Atualizar Pet</h1>
      <form ref={ref} onSubmit={handleSubmit}>
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
        <button type="submit">Atualizar</button>
      </form>
    </ContainerForm>
  );
}
