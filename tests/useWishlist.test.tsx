import { renderHook } from "@testing-library/react";
import useWishlist from "@/features/wishlist/hooks/useWishlist";
import { WishlistContextProvider } from "@/features/wishlist/contexts/WishlistContext";

describe("useWishlist", () => {
  it("throws error when used outside WishlistContextProvider", () => {
    let caughtError: unknown;

    try {
      renderHook(() => useWishlist());
    } catch (error) {
      caughtError = error;
    }

    expect(caughtError).toBeInstanceOf(Error);
    expect((caughtError as Error).message).toBe(
      "useWishlist must be used within a WishlistContextProvider",
    );
  });

  it("returns context when used inside WishlistContextProvider", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <WishlistContextProvider>{children}</WishlistContextProvider>
    );

    const { result } = renderHook(() => useWishlist(), { wrapper });

    expect(result.current).toHaveProperty("wishlist");
    expect(result.current).toHaveProperty("wishlistLoaded");
    expect(result.current).toHaveProperty("updateWishlist");
  });
});
