import { render, screen } from "@testing-library/react";

import Header from "../Header";

//GET BY
describe("Header", () => {
  it("should render same text passed into title prop", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // it("should render same text passed into title prop", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = screen.getByRole("heading", { name: "Cats" });
  //   expect(headingElement).toBeInTheDocument();
  // });

  // it("should render same text passed into title prop", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = screen.getByTitle("Header");
  //   expect(headingElement).toBeInTheDocument();
  // });

  // it("should render same text passed into title prop", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = screen.getByTestId("header-2");
  //   expect(headingElement).toBeInTheDocument();
  // });

  // //FIND BY
  // it("should render same text passed into title prop", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = await screen.findByText(/my header/i);
  //   expect(headingElement).toBeInTheDocument();
  // });

  // //QueryBy

  // it("should render same text passed into title prop", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = screen.queryByText(/dogs/i);
  //   expect(headingElement).not.toBeInTheDocument();
  // });

  // it("should render same text passed into title prop", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElements = screen.queryAllByRole("heading");
  //   expect(headingElements.length).toBe(2);
  // });
});
