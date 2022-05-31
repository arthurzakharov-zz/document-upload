import { useEffect } from "react";
import useReactRedux from "../../hooks/useReactRedux";
import { imageInit } from "../../redux/image/image.slice";
import { selectImage } from "../../redux/image/image.selectors";
import { uiIsLoadingOff, uiIsLoadingOn } from "../../redux/ui/ui.slice";
import { isObjectEmpty } from "../../utils";
import DocumentUpload from "../document-upload";
import Footer from "../footer";
import Header from "../header";
import Modal from "../modal";
import Loading from "../loading";
import { mockHttp } from "../../mock";
import "./app.css";

function App() {
  const { dispatch, useSelector } = useReactRedux();

  const image = useSelector(selectImage);

  const loadInitData = async () => {
    dispatch(uiIsLoadingOn());
    await mockHttp(true);
    dispatch(uiIsLoadingOff());
  };

  useEffect(() => {
    if (isObjectEmpty(image)) {
      dispatch(imageInit());
    }
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
