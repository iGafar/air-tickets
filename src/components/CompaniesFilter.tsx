import { FC } from "react";
import styled from "styled-components";

const CompaniesFilter: FC = () => {
  return (
    <CompaniesFilterStyle>
      <h3>Компании</h3>
      <ul>
        <li>
          <input type="checkbox" id="pobeda" />
          <label htmlFor="pobeda">Победа</label>
        </li>
        <li>
          <input type="checkbox" id="red-wings" />
          <label htmlFor="red-wings">Red Wings</label>
        </li>
        <li>
          <input type="checkbox" name="airlines" id="s7-airlines" />
          <label htmlFor="s7-airlines">S7 Airlines</label>
        </li>
      </ul>
    </CompaniesFilterStyle>
  );
};

const CompaniesFilterStyle = styled.div`
  padding: 18px 18px 48px;
  border-radius: 10px;
  background: rgb(232, 235, 242);

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
    border-radius: 50%;
  }

  input:checked + label::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: rgb(78, 20, 140);
    border-radius: 50%;
    left: -34px;
    top: 3px;
  }

  @media (max-width: 1360px) {
    padding: 0;
    background-color: transparent;
    color: rgb(247, 249, 247);
    margin-bottom: 0;

    ul {
      color: rgb(247, 249, 247);
    }

    input + label:before {
      border-color: rgb(247, 249, 247);
    }

    input:checked + label:after {
      background-color: rgb(247, 249, 247);
    }
  }
`;

export default CompaniesFilter;
