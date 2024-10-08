import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

//describe function is just used for grouping all test cases together
describe('Contact us Test Cases', () => {

  // beforeAll(()=>{
  //   console.log('testing');
  // })
  // beforeEach(()=>{
  //   console.log('before each calling testing')
  // })
  // afterAll(()=>{
  //   console.log('after all test this call back function called')
  // })
  // afterEach(()=>{
  //   console.log('after each test called')
  // })
  test('should load contact us comp', () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

  })

  // either we can use test or it both we can use

  it('should load button inside contact us comp using getByrole', () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();

  })
  test('should load button inside contact us comp using getByText', () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

  });
  test('should 2 input box render in contact us component', () => {
    render(<Contact />);
    //Quering
    const inputBoxes = screen.getAllByRole('textbox');
    //Assertion
    expect(inputBoxes.length).toBe(2);

  })

})


