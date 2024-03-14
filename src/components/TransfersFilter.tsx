import { FC, useState } from "react";
import styled from "styled-components";
import { IItem, IOtions } from "../types";

const transfers: IItem[] = [
  { value: "without", label: "Без пересадок" },
  { value: "one", label: "1 пересадка" },
  { value: "two", label: "2 пересадки" },
  { value: "three", label: "3 пересадки" },
];

const TransfersFilter: FC = () => {
  const [options, setOptions] = useState<IOtions>({
    without: false,
    one: false,
    two: false,
    three: false,
  });

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [value]: checked,
    }));
  };

  return (
    <TransfersFilterStyle>
      <h3>Количество пересадок</h3>
      <ul>
        {transfers.map((transfer: IItem) => (
          <li key={transfer.value}>
            <input
              type="checkbox"
              id={transfer.value}
              checked={options[transfer.value]}
              onChange={(e) =>
                handleCheckboxChange(transfer.value, e.currentTarget.checked)
              }
            />
            <label htmlFor={transfer.value}>{transfer.label}</label>
          </li>
        ))}
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
