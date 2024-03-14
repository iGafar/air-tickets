import { FC } from "react";
import styled from "styled-components";
import { ITicket } from "../types";

interface IProps {
  ticket: ITicket;
}

const TicketCard: FC<IProps> = ({ ticket }) => {
  return (
    <TicketCardStyle>
      <div className="head">
        <p>{ticket.price}</p>
        <figure>
          <img src={ticket.company} alt="company logo" />
        </figure>
      </div>
      <div className="body">
        <div>
          <p>
            {ticket.from} - {ticket.to}
          </p>
          <time>
            {ticket.time.startTime} - {ticket.time.endTime}
          </time>
        </div>

        <div>
          <p>В пути</p>
          <time>{ticket.duration}</time>
        </div>

        <div>
          <p>Пересадки</p>
          <p>{ticket.duration}</p>
        </div>
      </div>
    </TicketCardStyle>
  );
};

const TicketCardStyle = styled.li`
  max-width: 727px;
  padding: 38px 40px 25px;
  border-radius: 10px;
  background: rgb(232, 235, 242);

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    height: 50px;

    p {
      font-size: 32px;
      font-weight: 700;
    }

    figure {
      max-width: 180px;

      img {
        object-fit: cover;
      }
    }
  }

  .body {
    display: flex;
    justify-content: space-between;
    font-size: 16px;

    p {
      color: rgb(133, 138, 227);
      line-height: 19px;
      margin-bottom: 9px;
    }
  }

  @media (max-width: 810px) {
    padding: 30px 23px 25px;
  }
`;

export default TicketCard;
