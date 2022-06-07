import { useEffect } from "react";
import { useReactRedux } from "../../hooks";
import { isLoadingOff, isLoadingOn } from "../../redux/ui/ui.slice";
import { DocumentUpload, Footer, Header, Loading, Modal } from "..";
import { mockHttp } from "../../mock";
import "./app.css";

function App() {
  const { dispatch } = useReactRedux();

  const loadInitData = async () => {
    dispatch(isLoadingOn());
    await mockHttp(true);
    dispatch(isLoadingOff());
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
