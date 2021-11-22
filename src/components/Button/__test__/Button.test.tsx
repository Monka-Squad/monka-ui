import React from "react";
import { render } from "@testing-library/react";

import {Button, ButtonProps} from "../Button";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      title: "Title"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have title", () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId("button");
    expect(button).toHaveTextContent(props.title);
  });
});