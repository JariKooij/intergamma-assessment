import { useContext } from "react";
import { render, act } from "@testing-library/react";

import WishlistContext, {
  WishlistContextProvider,
} from "@/features/wishlist/contexts/WishlistContext";

// Helper component to consume the context
const TestComponent = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    return <div>Context not available</div>;
  }

  const { wishlist, updateWishlist } = context;

  return (
    <div>
      <button onClick={() => updateWishlist(1, 2)}>Add Item</button>
      <button onClick={() => updateWishlist(1, 3)}>Update Item</button>
      <button onClick={() => updateWishlist(1, 0)}>Remove Item</button>
      <div data-testid="wishlist-length">{wishlist.length}</div>
      <div data-testid="wishlist-content">{JSON.stringify(wishlist)}</div>
    </div>
  );
};

describe("WishlistContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes with empty wishlist", () => {
    const { getByTestId } = render(
      <WishlistContextProvider>
        <TestComponent />
      </WishlistContextProvider>,
    );

    expect(getByTestId("wishlist-length").textContent).toBe("0");
  });

  it("adds a new item to the wishlist", () => {
    const { getByText, getByTestId } = render(
      <WishlistContextProvider>
        <TestComponent />
      </WishlistContextProvider>,
    );

    act(() => {
      getByText("Add Item").click();
    });

    expect(getByTestId("wishlist-length").textContent).toBe("1");
    expect(getByTestId("wishlist-content").textContent).toContain(
      '"quantity":2',
    );
  });

  it("updates an existing item in the wishlist", () => {
    const { getByText, getByTestId } = render(
      <WishlistContextProvider>
        <TestComponent />
      </WishlistContextProvider>,
    );

    act(() => {
      getByText("Add Item").click();
      getByText("Update Item").click();
    });

    expect(getByTestId("wishlist-content").textContent).toContain(
      '"quantity":3',
    );
  });

  it("removes an item when quantity is 0", () => {
    const { getByText, getByTestId } = render(
      <WishlistContextProvider>
        <TestComponent />
      </WishlistContextProvider>,
    );

    act(() => {
      getByText("Add Item").click();
      getByText("Remove Item").click();
    });

    expect(getByTestId("wishlist-length").textContent).toBe("0");
  });

  it("persists wishlist to localStorage", () => {
    const { getByText } = render(
      <WishlistContextProvider>
        <TestComponent />
      </WishlistContextProvider>,
    );

    act(() => {
      getByText("Add Item").click();
    });

    const stored = localStorage.getItem("wishlist");
    expect(stored).toContain('"productId":1');
    expect(stored).toContain('"quantity":2');
  });
});
