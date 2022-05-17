import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initFiles } from "../../store/file/file.actions";
import { selectModalIsOpened } from "../../store/modal/modal.selectors";
import DefaultLayout from "../../layouts/default/default.layout";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
import Modal from "../modal";

function App() {
  const isOpened = useSelector(selectModalIsOpened);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFiles());
  }, []);

  return (
    <>
      <DefaultLayout header={Header} main={Main} footer={Footer} />
      <Modal isOpened={isOpened} />
    </>
  );
}

export default App;
