import styled, { css } from "styled-components";

type CirclePropsType = {
  bg: string;
  size: string;
};

export const Round = styled.div<CirclePropsType>`
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: 0.3s;

  ${({ size, bg }) =>
    size &&
    css`
      background: ${bg};
      font-size: ${size === "md" ? "23px" : "14px"};
      width: ${size === "md" ? "50px" : "30px"};
      height: ${size === "md" ? "50px" : "30px"};
    `}

  @media(max-width: 767px) {
    ${({ size }) =>
      size &&
      css`
        font-size: ${size === "md" ? "18px" : "12px"};
        width: ${size === "md" ? "40px" : "28px"};
        height: ${size === "md" ? "40px" : "28px"};
      `}
  }
`;
