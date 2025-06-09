import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const StyledTitle = styled(Title)`
  &.ant-typography {
    color: rgb(15, 77, 148);
    text-align: left;
    margin: 2rem 0 1.5rem 0;
    padding-left: 7%;
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin: 1.5rem 0 1rem 0;
      padding-left: 4%;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
      padding-left: 3%;
      margin: 1rem 0 0.8rem 0;
    }

    @media (max-width: 320px) {
      font-size: 1.2rem;
      padding-left: 2%;
    }
  }
`;