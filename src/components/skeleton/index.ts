import styled from "styled-components";

export default styled.div`
  border-radius: 20px;

  background-image: linear-gradient(
    -90deg,
    #E6E6E6 0%,
    #F8F8F8 50%,
    #E6E6E6 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  &.white {
    background-image: linear-gradient(
      -90deg,
      #FFFFFF 0%,
      #E6E6E6 50%,
      #FFFFFF 100%
    );
  }
`;
