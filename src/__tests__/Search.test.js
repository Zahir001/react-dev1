import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../components/Body"
import MOCK_DATA from '../mocs/resListData.json'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import { act } from "react";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
});

it("should search resList for any particular input", async () => {
  await act(async () => {

    render(
      <BrowserRouter><Body /></BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  const searchButton = screen.getByRole("button", { name: 'Search' });
  const searchInput = screen.getByTestId("testSearch");
  fireEvent.change(searchInput, { target: { value: "d" } });
  fireEvent.click(searchButton);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(7);

})
it("should filter top rated restaurant cards render", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  })
  const topRatedButton = screen.getByRole("button", { name: "Top rated Restaurants" });
  fireEvent.click(topRatedButton);
  const topRatedCards = screen.getAllByTestId("resCard");
  expect(topRatedCards.length).toBe(6);
})