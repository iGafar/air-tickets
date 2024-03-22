import styled from "styled-components";
import OptionsBlock from "./OptionsBlock";
import FilterBlock from "./FilterBlock";
import TicketCard from "./TicketCard";
import { useDispatch, useSelector } from "react-redux";
import { ITicket } from "../types";
import { FC, useCallback, useEffect, useState } from "react";
import { fetchTickets } from "../store/slices/ticketsSlice";
import { AppDispatch, RootState } from "../store/store";

const MainBlock: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.items);
  const ticketsLength = useSelector(
    (state: RootState) => state.tickets.meta.total_items
  );
  const [limit, setLimit] = useState<number>(3);
  const [sort, setSort] = useState<string>("price");
  const [companyFilterParams, setCompanyFilterParams] = useState<string>("");
  const [transferFilterParams, setTransferFilterParams] = useState<string>("");

  useEffect(() => {
    dispatch(
      fetchTickets({
        limit,
        sortBy: sort,
        companyFilterParams,
        transferFilterParams,
      })
    );
  }, [companyFilterParams, dispatch, limit, sort, transferFilterParams]);

  const sortCallback = useCallback(
    (sortBy: "price" | "duration" | "connectionAmount") => setSort(sortBy),
    []
  );

  const companyFilterCallback = useCallback(
    (value: string) => setCompanyFilterParams(value),
    []
  );

  const transferFilterCallback = useCallback(
    (value: string) => setTransferFilterParams(value),
    []
  );

  return (
    <MainBlockStyle>
      <div className="container">
        <OptionsBlock sortCallback={sortCallback} />
        <FilterBlock
          companyFilterCallback={companyFilterCallback}
          transferFilterCallback={transferFilterCallback}
        />
        <ul className="tickets">
          {tickets.slice(0, limit).map((ticket: ITicket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </ul>
        <button
          onClick={() => setLimit((prev) => prev + 3)}
          disabled={limit >= ticketsLength}
        >
          Загрузить еще билеты
        </button>
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
    background-color: rgb(78, 20, 140);
    padding: 16px 0;
    margin: max(7.4rem, 52px) 0 10rem;
    transition: all 300ms linear;

    &:hover {
      background-color: rgba(78, 20, 140, 0.9);
    }

    &:active {
      opacity: 0.6;
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      background-color: rgb(80, 0, 80);
      cursor: auto;
      opacity: 1;
    }
  }

  .tickets {
    display: flex;
    flex-direction: column;
    gap: 47px;
  }
`;

export default MainBlock;
