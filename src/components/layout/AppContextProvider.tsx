import { WishlistContextProvider } from "@/features/wishlist/contexts/WishlistContext";

interface IAppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  return <WishlistContextProvider>{children}</WishlistContextProvider>;
};

export default AppContextProvider;
