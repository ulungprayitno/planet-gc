import styled from "styled-components";

type IGrid = {
  display?: string,
  direction?: string,
  align?: string,
  justify?: string,
  margin?: string,
  padding?: string,
  width?: string,
  sm?: string,
  xs?: string,
  md?: string,
  lg?: string
}

function getWidthString(span: number) {
  if (!span) return;
  const width = (span / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

const Row = styled.div<IGrid>`
  display: ${props => props.display ? props.display : null};
  flex-direction: ${props => props.direction ? props.direction : null};
  align-items: ${props => props.align ? props.align : null};
  justify-content: ${props => props.justify ? props.justify : null};
  margin: ${props => props.margin ? props.margin : null};
  padding: ${props => props.padding ? props.padding : null};
  width: 100%;

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div<IGrid>`
  float: left;
  margin: ${props => props.margin ? props.margin : null};
  padding: ${props => props.padding ? props.padding : null};
  width: 100%;

  @media only screen and (min-width: 300px) {
    ${props => props.sm && getWidthString(+props.sm)};
  }

  @media only screen and (min-width: 768px) {
    ${props => props.md && getWidthString(+props.md)};
  }

  @media only screen and (min-width: 992px) {
    ${props => props.lg && getWidthString(+props.lg)};
  }
`;

export { Column, Row };
