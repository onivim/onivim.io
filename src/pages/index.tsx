import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const logo = require("./oni-header.png");

// import logo from "./oni-header.png"

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical textAlign="center" className="masthead">
      <Container text>
        <img src={logo} alt="Oni Logo" />
        <Header as="h2">Modern IDE for (neo)vim</Header>
        <Button primary size="huge">Download</Button>
      </Container>
    </Segment>
  </div>;
