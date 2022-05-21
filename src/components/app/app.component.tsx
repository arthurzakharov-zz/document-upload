import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initFiles } from "../../store/image/image.actions";
import { setIsLoading } from "../../store/ui/ui.actions";
import DefaultLayout from "../../layouts/default/default.layout";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
import Modal from "../modal";
import Loading from "../loading";
import { mockHttp } from "../../mock";

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
      <DefaultLayout header={Header} main={Main} footer={Footer} />
      <Modal />
      <Loading />
    </>
  );
}

export default App;
