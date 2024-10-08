import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantsMenu from "../components/RestaurantsMenu"
import { act } from "react"
import MOCK_DATA from '../mocs/mockresMenu.json'
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import '@testing-library/jest-dom'
import Header from "../components/Header";
import Cart from "../components/Cart"
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
});
it("should load restaurant Menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantsMenu />
      </Provider>
    )
  })

  const accordionHeader = screen.getByText("Chef Special Rolls (8)");
  expect(accordionHeader).toBeInTheDocument();

})
it("should accordion open with no of items", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantsMenu />
      </Provider>
    )
  })
  const accordionHeader = screen.getByText("Chef Special Rolls (8)");
  fireEvent.click(accordionHeader);
  const foodItem = screen.getAllByTestId('foodItem');
  expect(foodItem.length).toBe(8);
})
it("should add button add the item in cart ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
        </Provider>
      </BrowserRouter>
    )
  })
  const accordionHeader = screen.getByText("Chef Special Rolls (8)");
  fireEvent.click(accordionHeader);
  const addBtns = screen.getAllByText("Add");
  fireEvent.click(addBtns[0]);
})
it("should header reflect the add items with 1-cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const item = screen.getByText("Cart - 1"); //it find the 1 item
  expect(item).toBeInTheDocument();

})
it("should header reflect the add items with 2-cart item", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
        </Provider>
      </BrowserRouter>
    )
  })
  const accordionHeader = screen.getByText("Chef Special Rolls (8)");
  fireEvent.click(accordionHeader);
  const addBtns = screen.getAllByText("Add");
  fireEvent.click(addBtns[0]);
  const item = screen.getByText("Cart - 2"); //it find the 2 item
  expect(item).toBeInTheDocument();
})
it("should cart component have two items or not", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  )
  const items = screen.getAllByTestId("foodItem");
  expect(items.length).toBe(2); //it should have two items
})
it("should cart component cleared or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Cart />
      </Provider>
    </BrowserRouter>
  )
  const button = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(button);
  expect(screen.getByText("Cart is Empty ! Please add item")).toBeInTheDocument();
})