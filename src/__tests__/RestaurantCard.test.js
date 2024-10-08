import { render, screen } from "@testing-library/react"
import RestaurantCard from '../components/RestaurantCard'
import MOCK_DATA from '../mocs/resCardMock.json'
import '@testing-library/jest-dom'
test('should render restaurant card component with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
})
