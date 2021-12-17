import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockToDoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  describe("testing functionality 1", () => {
    it("should render the correct amount of incomplete tasks", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
  describe("testing functionality 2", () => {
    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeTruthy();
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeVisible();
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toContainHTML("p");
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("paragraph");
      expect(paragraphElement).toHaveTextContent("1");
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("paragraph");
      expect(paragraphElement).not.toHaveTextContent("2");
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("paragraph");
      expect(paragraphElement).not.toBeFalsy();
    });

    it("it should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockToDoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("paragraph");
      expect(paragraphElement.textContent).toBe("1 task left"); //input olsaydı .value alacaktık
    });
  });
});
