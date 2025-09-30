import Header from "./header/Header";
import AppContextProvider from "./AppContextProvider";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <AppContextProvider>
      <Header />
      <main>{children}</main>
    </AppContextProvider>
  );
};

export default Layout;
