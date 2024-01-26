import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Container, ListingContainer } from "./styled";
import { toast } from "react-toastify";
import EditPetForm from "../EditPetForm";

export default function PetList() {
  const [pets, setPets] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getPets = async () => {
    try {
      const response = await axios.get("http://localhost:8800/pets");

      const data = response.data;
      data.map((pet) => {
        if (pet.dataAdocao === null) return;

        const date = new Date(pet.dataAdocao);

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;

        pet.dataAdocao = formattedDate;
      });
      setPets(data);
    } catch (error) {
      toast.error("Erro ao listar os Pets");
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8800/pets/${id}`)
      .then(() => {
        const newArray = pets.filter((pet) => pet.id !== id);

        setPets(newArray);
        toast.success("Pet excluído");
      })
      .catch(() => {
        toast.error("Erro ao excluir");
      });
  };

  const handleAdopt = async (id, nome, idade, especie, raca) => {
    const dateMsNow = Date.now();
    const dateNow = new Date(dateMsNow);

    const day = dateNow.getDate().toString().padStart(2, "0");
    const month = (dateNow.getMonth() + 1).toString().padStart(2, "0");
    const year = dateNow.getFullYear();

    const dateDB = `${year}-${month}-${day}`; // data compatível com o banco de dados
    const formattedDate = `${day}/${month}/${year}`; // data mostrada ao usuário

    await axios
      .put(`http://localhost:8800/pets/adopt/${id}`, {
        nome,
        idade,
        especie,
        raca,
        dataAdocao: dateDB,
      })
      .then(() => {
        setPets((prevPets) => {
          const updatedPets = prevPets.map((pet) => {
            if (pet.id === id) {
              return { ...pet, dataAdocao: formattedDate };
            }
            return pet;
          });

          return updatedPets;
        });
        toast.success("Pet adotado");
      })
      .catch(() => toast.error("Erro ao adotar o Pet"));
  };

  const handleEdit = (pet) => {
    setOnEdit(pet);
  }

  return (
    <Container>
      <ListingContainer>
        <h1>Listagem dos Pets</h1>
        {pets.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Espécie</th>
                <th>Raça</th>
                <th>Data de Adoção</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.nome}</td>
                  <td>{pet.idade}</td>
                  <td>{pet.especie}</td>
                  <td>{pet.raca}</td>
                  <td>{pet.dataAdocao !== null ? pet.dataAdocao : ""}</td>
                  <td>
                    <FaEdit 
                    className="reactIcon"
                    onClick={() => handleEdit(pet)} />
                  </td>
                  <td>
                    <FaTrash
                      className="reactIcon"
                      onClick={() => handleDelete(pet.id)}
                    />
                  </td>
                  {pet.dataAdocao === null ? (
                    <td>
                      <button
                        id="btnAdotar"
                        onClick={() =>
                          handleAdopt(
                            pet.id,
                            pet.nome,
                            pet.idade,
                            pet.especie,
                            pet.raca
                          )
                        }
                      >
                        Adotar
                      </button>
                    </td>
                  ) : (
                    <td>Adotado</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ListingContainer>
      <EditPetForm onEdit={onEdit} setOnEdit={setOnEdit} getPets={getPets}/>
    </Container>
  );
}
