import styled from "styled-components";

export const ContainerForm = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 50px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  width: 400px;
  box-shadow: 1px 1px 10px 0.2px rgba(0, 0, 0, 0.2);

  h1 {
    margin-top: 20px;
    text-align: center;
  }

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
  }

  input {
    border: 0.5px solid #ccc;
    border-radius: 5px;
    height: 25px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 20px;

    &:focus {
      outline-color: #158BBD;
    }
  }

  button {
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    background-color: #3d7d99;
    padding: 10px;
    opacity: 70%;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      opacity: 100%;
    }
  }
`;
