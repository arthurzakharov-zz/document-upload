import { useEffect } from "react";
import useReactRedux from "../../hooks/useReactRedux";
import { uiIsLoadingOff, uiIsLoadingOn } from "../../redux/ui/ui.slice";
import DocumentUpload from "../document-upload";
import Footer from "../footer";
import Header from "../header";
import Modal from "../modal";
import Loading from "../loading";
import { mockHttp } from "../../mock";
import "./app.css";

function App() {
  const { dispatch } = useReactRedux();

  const loadInitData = async () => {
    dispatch(uiIsLoadingOn());
    await mockHttp(true);
    dispatch(uiIsLoadingOff());
  };

  useEffect(() => {
    loadInitData();
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <DocumentUpload />
        <Footer />
      </div>
      <Modal />
      <Loading />
    </>
  );
}

export default App;
