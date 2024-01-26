import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
`;

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: white;
  border-radius: 5px;
  padding: 20px;

  table {
    border-collapse: collapse;
    text-align: left;
  }

  thead {
    font-weight: bold;
    font-size: 20px;
    border-bottom: 1px solid #cccccc4a;

    th {
      padding: 10px;
    }
  }

  tr {
    border-radius: 10px;

    &:hover {
      background-color: #ecf9f9;
      border-radius: 10px;
    }
  }

  td {
    font-weight: bold;
    padding: 10px;
    color: #707070;
  }

  .reactIcon {
    color: #002433;
    opacity: 60%;
    transition: all 0.5s;

    &:hover {
      opacity: 100%;
      cursor: pointer;
    }
  }

  #btnAdotar {
    height: 30px;
    width: 50px;
    color: white;
    font-weight: bold;
    background-color: #168e22;
    border-radius: 5px;
    border: none;
    opacity: 70%;
    transition: all 0.5s;

    &:hover {
      opacity: 100%;
      cursor: pointer;
    }
  }
`;
