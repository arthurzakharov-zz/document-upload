import DefaultLayout from "../../layouts/default/default.layout";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

function App() {
  return <DefaultLayout header={Header} main={Main} footer={Footer} />;
}

export default App;
