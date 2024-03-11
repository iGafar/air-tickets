import styled from "styled-components";
import OptionsBlock from "./OptionsBlock";
import FilterBlock from "./FilterBlock";
import TicketCard from "./TicketCard";

const MainBlock = () => {
  return (
    <MainBlockStyle>
      <div className="container">
        <OptionsBlock />
        <FilterBlock />
        <TicketCard />
        <button>Загрузить еще билеты</button>
      </div>
    </MainBlockStyle>
  );
};

const MainBlockStyle = styled.section`
  .container {
    position: relative;
  }

  & > .container > button {
    color: rgb(247, 249, 247);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    width: 100%;
    border-radius: 10px;
    background: rgb(78, 20, 140);
    padding: 16px 0;
    margin: max(7.4rem, 52px) 0 10rem;
    transition: all 300ms linear;

    &:hover {
      background-color: rgba(78, 20, 140, 0.9);
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

export default MainBlock;
