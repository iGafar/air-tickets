import { FC } from "react";
import styled from "styled-components";

const TransfersFilter: FC = () => {
  return (
    <TransfersFilterStyle>
      <h3>Количество пересадок</h3>
      <ul>
        <li>
          <input type="checkbox" name="without" id="without" />
          <label htmlFor="without">Без пересадок</label>
        </li>
        <li>
          <input type="checkbox" name="one" id="one" />
          <label htmlFor="one">1 пересадка</label>
        </li>
        <li>
          <input type="checkbox" name="two" id="two" />
          <label htmlFor="two">2 пересадки</label>
        </li>
        <li>
          <input type="checkbox" name="three" id="three" />
          <label htmlFor="three">3 пересадки</label>
        </li>
      </ul>
    </TransfersFilterStyle>
  );
};

const TransfersFilterStyle = styled.div`
  padding: 18px 18px 48px;
  border-radius: 10px;
  background: rgb(232, 235, 242);
  margin-bottom: 47px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: max(2.6rem, 12px);
  }

  ul {
    color: rgb(133, 138, 227);
    line-height: 19px;
  }

  li:not(:last-of-type) {
    margin-bottom: 19px;
  }

  input {
    margin-right: 20px;
    opacity: 0;
  }

  label {
    position: relative;
  }

  input + label::before {
    content: "";
    position: absolute;
    left: -37px;
    width: 21px;
    height: 21px;
    border: 1px solid rgb(78, 20, 140);
    border-radius: 4px;
  }

  input:checked + label::before {
    content: url("./icons/checked.png");
    padding: 1px;
  }

  @media (max-width: 1360px) {
    padding: 0;
    background-color: transparent;
    color: rgb(247, 249, 247);
    order: 2;

    ul {
      color: rgb(247, 249, 247);
    }

    input + label:before {
      border-color: rgb(247, 249, 247);
    }
  }
`;

export default TransfersFilter;
