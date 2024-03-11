import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";

function App() {
  return (
    <>
      <Global />
      <Header />
      <main>
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
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)), url("./images/plane.jpg") center/cover;
	}

	.container {
		max-width: 727px;
		margin: 0 auto;
		padding: 0 30px;
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