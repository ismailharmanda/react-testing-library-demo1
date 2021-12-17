import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetToDo = jest.fn();

describe("Add input", () => {
  it("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Grocery" } });
    expect(inputElement.value).toBe("Go Grocery");
  });

  it("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonelement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Go Grocery" } });
    fireEvent.click(buttonelement);
    expect(inputElement.value).toBe("");
  });
});
