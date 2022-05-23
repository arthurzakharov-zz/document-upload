import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initFiles } from "../../store/image/image.actions";
import { setIsLoading } from "../../store/ui/ui.actions";
import DocumentUpload from "../document-upload";
import Footer from "../footer";
import Header from "../header";
import Modal from "../modal";
import Loading from "../loading";
import { mockHttp } from "../../mock";
import "./app.css";

function App() {
  const dispatch = useDispatch();

  const loadInitData = async () => {
    dispatch(setIsLoading(true));
    await mockHttp(true);
    dispatch(setIsLoading(false));
  };

  useEffect(() => {
    // TODO: what makes it render 2 times?
    dispatch(initFiles());
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
