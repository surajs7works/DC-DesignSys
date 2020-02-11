import React from "react";
import { action } from "@storybook/addon-actions";
import { Button, LinkButton } from "../components/Button";
import plus from "../assets/plus.svg";
import share from "../assets/share.svg";
import "../Styles/GlobalStyle.css";

export default {
  title: "Button"
};

const Neutralbtn = {
  color: "black",
  background: "#fff"
};

const SmallBtn = {
  fontsize: "0.5em",
  padding: ".5em 1.5em"
};

const Inactive = {
  background: "#BDBDBD"
};

export const DefaultButton = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const NeutralButton = () => (
  <Button style={Neutralbtn} onClick={action("clicked")}>
    Hello Button
  </Button>
);

export const SmallButton = () => (
  <Button style={SmallBtn} onClick={action("clicked")}>
    Button
  </Button>
);

export const InactiveButton = () => (
  <Button style={Inactive} onClick={action("clicked")}>
    Disabled
  </Button>
);

export const ButtonWithIcon = () => (
  <Button className="icon-btn" onClick={action("clicked")}>
    {" "}
    <span>
      <img src={plus} />
    </span>
    Disabled
  </Button>
);

export const LinkButtonWithIcon = () => (
  <LinkButton className="link-btn" onClick={action("clicked")}>
    {" "}
    <span>
      <img src={share} />
    </span>
    Share
  </LinkButton>
);

