import React from "react";
import styled from "styled-components";
import { Link as RebassLink } from "rebass";
import { Link as GatsbyLink } from "gatsby";

const Link = styled(({ color, colorOnHover, borderRadius, ...props }) => (
  <RebassLink as={props.to ? GatsbyLink : "a"} {...props} />
))`
  display: flex;
  cursor: pointer;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  color: ${props => props.color};
  text-decoration: none;
  text-align: center;

  &:hover {
    color: ${props => props.colorOnHover};
  }
`;

Link.defaultProps = {
  color: "black",
  colorOnHover: "black"
};

export default Link;
