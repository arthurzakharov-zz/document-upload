import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initFiles } from "../../store/image/image.actions";
import DefaultLayout from "../../layouts/default/default.layout";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
import Modal from "../modal";
import Loading from "../loading";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: what makes it render 2 times?
    dispatch(initFiles());
  }, []);

  return (
    <>
      <DefaultLayout header={Header} main={Main} footer={Footer} />
      <Modal />
      <Loading />
    </>
  );
}

export default App;
