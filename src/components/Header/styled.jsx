import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #158BBD;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  img {
    margin-left: 20px;
    width: 45px;
    height: 40px;
  }

  img:hover {
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin-right: 20px;
  }

  li {
    color: white;
    font-weight: bold;
    opacity: 70%;
    transition: all 700ms;
  }

  li:hover {
    opacity: 100%;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
