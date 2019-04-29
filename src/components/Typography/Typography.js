import React from "react";
import { Heading, Text } from "rebass";

export const H1 = props => <Heading {...props} />;

H1.defaultProps = {
  as: "h1"
};

export const H2 = props => (
  <Heading {...props} css="text-transform: uppercase;" />
);

H2.defaultProps = {
  as: "h2"
};

export const H3 = props => (
  <Heading {...props} css="text-transform: uppercase;" />
);

H3.defaultProps = {
  as: "h3"
};

export const H4 = props => <Heading {...props} />;

H4.defaultProps = {
  as: "h4"
};

export const P = props => <Text {...props} />;

P.defaultProps = {
  as: "p"
};

export const Span = props => <Text {...props} />;

Span.defaultProps = {
  as: "span"
};
