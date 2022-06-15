import { useEffect, useState } from "react";
import { useReactRedux } from "../../hooks";
import { setCaseReferenceAndToken } from "../../redux/general/general.slice";
import { modalOpen } from "../../redux/modal/modal.slice";
import { DocumentUpload, Footer, Header, Loading, Modal } from "..";
import { getUrlParam } from "../../utils";
import "./app.css";

function App() {
  const [caseReference] = useState<string>(getUrlParam("caseReference"));
  const [token] = useState<string>(getUrlParam("token"));

  const { dispatch } = useReactRedux();

  useEffect(() => {
    if (caseReference && token) {
      dispatch(setCaseReferenceAndToken({ caseReference, token }));
    } else {
      dispatch(modalOpen({ type: "error", size: "xs", withCloseButton: false }));
    }
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
