import React from "react";
import { render } from "@testing-library/react";

import Button from "./button.component";

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Button type="primary" size="default">
        Hello world
      </Button>
    );
  });
});
