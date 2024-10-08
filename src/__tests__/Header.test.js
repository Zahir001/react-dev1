import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Header from '../components/Header';
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
describe("Header component test cases", () => {

  it('should load with the a sign up button', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // let button = screen.getByText('SignUp');
    let button = screen.getByRole('button', {name:'SignUp'}); //this is other way more descriptive
    expect(button).toBeInTheDocument();

  })

  it('should render header components with cart item 0',()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header cartItem={0} />
        </Provider>
      </BrowserRouter>
    );

    let cartItem = screen.getByText('Cart - 0');
    expect(cartItem).toBeInTheDocument();
  })

  it('should render header components with cart item',()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header cartItem={0} />
        </Provider>
      </BrowserRouter>
    );

    let cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  })

  it('should change login button to logout button on click',()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header cartItem={0} />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button',{name:'Login'});
    fireEvent.click(loginButton); //fireEvent is used to  fire event handle
    const logoutButton = screen.getByRole('button',{name:'Logout'});

    expect(logoutButton).toBeInTheDocument();
  })

})