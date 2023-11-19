import React from "react";
import {
  Link as ReactRouterDomLink,
  LinkProps as ReactRouterDomLinkProps,
} from "react-router-dom";
import styled from "styled-components";

type NativeLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type LinkProps = ReactRouterDomLinkProps | NativeLinkProps;

const StyledReactRouterDomLink = styled(ReactRouterDomLink)`
  color: #eee;
`;

export const Link = ({ children, ...props }: LinkProps) => {
  if ((props as ReactRouterDomLinkProps).to) {
    return (
      <StyledReactRouterDomLink {...(props as ReactRouterDomLinkProps)}>
        {children}
      </StyledReactRouterDomLink>
    );
  }

  return (
    <a {...(props as NativeLinkProps)} style={{ color: "#eee" }}>
      {children}
    </a>
  );
};
