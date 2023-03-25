import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "./ProductCard";
import { ProductContext } from "../ProductContext/ProductContext";
import { BrowserRouter } from "react-router-dom";

const mockProducts = [
  {
    ID: 1,
    Name: "Product 1",
    PPU: 10.0,
    Image: "",
  },
  {
    ID: 2,
    Name: "Product 2",
    PPU: 20.0,
    Image: "",
  },
];

const mockContextValue = {
  products: mockProducts,
  setSelectedProduct: jest.fn(),
};

const renderProductCard = () => {
  render(
    <BrowserRouter>
      <ProductContext.Provider value={mockContextValue}>
        <ProductCard />
      </ProductContext.Provider>
    </BrowserRouter>
  );
};

describe("ProductCard", () => {
  test("renders all products", () => {
    renderProductCard();
    const productLinks = screen.getAllByRole("link", { name: /product/i });

    expect(productLinks).toHaveLength(mockProducts.length);
  });
});
