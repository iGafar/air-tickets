import styled from "styled-components";

const TicketCard = () => {
  return (
    <TicketCardStyle>
      <div className="head">
        <p>12680р</p>
        <figure>
          <img src="./icons/pobeda.png" alt="company logo" />
        </figure>
      </div>
      <div className="body">
        <div>
          <p>SVD-LED</p>
          <time>12:00</time>
        </div>

        <div>
          <p>В пути</p>
          <time>2 ч 0 мин</time>
        </div>

        <div>
          <p>Пересадки</p>
          <time>Без пересадок</time>
        </div>
      </div>
    </TicketCardStyle>
  );
};

const TicketCardStyle = styled.div`
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
