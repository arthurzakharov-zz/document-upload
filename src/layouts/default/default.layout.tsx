import { ElementType } from "react";
import "./default.css";

interface DefaultLayoutProps {
  header: ElementType;
  main: ElementType;
  footer: ElementType;
}

function DefaultLayout(props: DefaultLayoutProps) {
  const { header: Header, main: Main, footer: Footer } = props;
  return (
    <div className="default-layout">
      <div className="default-layout__content">
        <header data-testid="default-layout-header">
          <Header />
        </header>
        <main data-testid="default-layout-main">
          <Main />
        </main>
        <footer data-testid="default-layout-footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default DefaultLayout;
