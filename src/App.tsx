import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";

function App() {
  return (
    <>
      <Global />
      <Header />
      <main>
        <div className="back"></div>
        <MainBlock />
      </main>
    </>
  );
}

const Global = createGlobalStyle`
	html {
		font-size: 10px;
	}

	body {
		font-family: "Inter", sans-serif;
		font-weight: 500;
		font-size: max(1.6rem, 12px);
		color: #4E148C;
	}

	.container {
		max-width: 727px;
		margin: 0 auto;
		padding: 0 30px;
	}

	.back {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)), url("./images/plane.jpg") center/cover;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
	}

	@media (max-width: 670px) {
		html {
			font-size: 1px;
		}

		.container {
			padding: 0 15px;
		}
	}
`;

export default App;
