import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/Button";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.add("variants", () => (
  <div>
    <Button variantColor="teal" variant="solid">
      Button
    </Button>
    <Button variantColor="teal" variant="outline">
      Button
    </Button>
    <Button variantColor="teal" variant="ghost">
      Button
    </Button>
    <Button variantColor="teal" variant="link">
      Button
    </Button>
  </div>
));

stories.add("sizes", () => (
  <div>
    <Button variantColor="blue" size="xs">
      Button
    </Button>
    <Button variantColor="blue" size="sm">
      Button
    </Button>
    <Button variantColor="blue" size="md">
      Button
    </Button>
    <Button variantColor="blue" size="lg">
      Button
    </Button>
  </div>
));