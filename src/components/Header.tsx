import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <img src="./icons/logo.png" alt="logo" />
        <p>Поиск авиабилетов</p>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding-top: 20px;
  margin-bottom: 20px;

  .container {
    display: flex;
    align-items: center;
    gap: 34px;
    max-width: 1360px;
  }

  @media (max-width: 1360px) {
    .container {
      max-width: 727px;
    }
  }

  @media (max-width: 670px) {
    .container {
      justify-content: center;
    }

    p {
      display: none;
    }
  }
`;

export default Header;
