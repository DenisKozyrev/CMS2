/* eslint-disable react/jsx-indent */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box, Button } from "rebass";
import { fontSize, textAlign } from "styled-system";
import { MailOutline } from "styled-icons/material/MailOutline";
import { Facebook } from "styled-icons/boxicons-logos/Facebook";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { Reddit } from "styled-icons/icomoon/Reddit";
import colors from "../../utils/theme/colors";
import { H3, P } from "../Typography/Typography";
import Link from "../Link";

const icons = { Facebook, Twitter, Linkedin, Reddit };

const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  outline: none;
  padding: 10px;
  border: 1px solid ${colors.primary2};
  resize: none;
  height: 200px;
  margin-top: 30px;
  line-height: 1.4;
  transition: border 0.5s ease-out, height 0.5s ease-out;
  :focus {
    height: 265px;
    border: 1px solid ${colors.primary2};
  }
`;

const Footer = ({
  data: {
    site: {
      siteMetadata: {
        contacts: { email, addresses, phones, socialLinks }
      }
    },
    footerbg
  }
}) => (
  <Flex
    as="footer"
    justifyContent="center"
    pt={11}
    color={colors.primary2}
    id="contacts"
    css={`
      background-image: url(${footerbg.childImageSharp.fluid.src});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  >
    <Flex
      justifyContent="space-between"
      flexDirection={["column", "row"]}
      width="100%"
      css="
        max-width: 1030px;"
    >
      <Flex
        as="form"
        name="DashbouquetForm"
        method="post"
        netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
        flexDirection="column"
        alignItems={["center", "flex-start"]}
        width="100%"
        css="max-width: 610px"
      >
        <H3 fontWeight={1} mb={3}>
          let`s talk
        </H3>
        <P
          as="label"
          htmlFor="message"
          fontSize={1}
          textAlign={["center", "left"]}
          css={`
            ${fontSize}
            ${textAlign}
          `}
        >
          Please provide your contact details
        </P>
        <TextArea name="message" placeholder="Your message" required />
        <Box as="input" type="hidden" name="bot-field" />
        <Box as="input" type="hidden" name="form-name" value="DashForm" />
        <Button
          mt={3}
          type="submit"
          name="submit contact form"
          variant="secondary"
        >
          send
        </Button>
      </Flex>
      <Flex flexDirection="column" css="width: 100%; max-width: 295px;">
        <H3 fontWeight={1} mb={3}>
          Get in touch
        </H3>
        <P mb={4}>{"Contact us if you need help with \nanything"}</P>
        <Flex as="ul" flexDirection="column">
          <Flex as="li" mb={4}>
            <MailOutline size={24} style={{ marginRight: 10 }} />
            <Link href={email.url} fontSize={1} color={colors.primary2}>
              {email.label}
            </Link>
          </Flex>
          {addresses.map(address => (
            <Flex as="li" mb={3}>
              <P>{address}</P>
            </Flex>
          ))}
          {phones.map(phone => (
            <Flex as="li">
              <Link href={phone.url} fontSize={1} color={colors.primary2}>
                {phone.label}
              </Link>
            </Flex>
          ))}
        </Flex>
        <Flex
          as="ul"
          justifyContent="space-between"
          width="100%"
          mt={4}
          mb={7}
          css="max-width: 215px"
        >
          {socialLinks.map(link => {
            const Icon = link.icon ? icons[link.icon] : null;
            return (
              <Flex
                as="li"
                p="5px"
                css={`
                  cursor: pointer;
                  border: 2px solid ${colors.primary2};
                  border-radius: 10px;
                  :hover {
                    border: 2px solid #ff053b;
                    background: #ff053b;
                  }
                `}
              >
                <Link href={link.url} fontSize={1} target="_blank">
                  {Icon && <Icon size={30} fill={colors.primary2} />}
                </Link>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

Footer.propTypes = {
  data: PropTypes.shape().isRequired
};

export default Footer;
