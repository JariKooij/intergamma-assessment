import { loadProducts } from "@/features/products/utils/loadProducts";

jest.mock("@/features/products/data/products.json", () => [
  {
    id: 1,
    title: "Cordless Drill 18V",
    img: "/images/products/cordless-drill.avif",
    price: 8999,
    description: "This powerful 18V cordless drill...",
    attributes: ["2-speed", "color: blue"],
  },
  {
    id: 2,
    title: "Laminate Flooring Oak",
    img: "/images/products/laminate-oak.avif",
    price: 2499,
    description: "Enjoy the look of natural oak...",
    attributes: ["1380 x 193 mm", "color: light oak"],
  },
  {
    id: 3,
    title: "Wall Paint Matte White 2.5L",
    img: "/images/products/paint-white.avif",
    price: 2999,
    description: "Transform your walls...",
    attributes: ["2.5 liters", "color: white"],
  },
]);

describe("loadProducts", () => {
  it("should return all products when no ids are provided", async () => {
    const products = await loadProducts();
    expect(products).toHaveLength(3);
  });

  it("should return only products matching the given ids", async () => {
    const products = await loadProducts([1, 3]);
    expect(products).toHaveLength(2);
    expect(products.map((p) => p.id)).toEqual([1, 3]);
  });

  it("should return an empty array when no matching ids are found", async () => {
    const products = await loadProducts([999]);
    expect(products).toHaveLength(0);
  });

  it("should return all products when ids is an empty array", async () => {
    const products = await loadProducts([]);
    expect(products).toHaveLength(3);
  });
});
