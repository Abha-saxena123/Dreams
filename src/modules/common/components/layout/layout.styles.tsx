import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

// ${MediaBreakpoints.between('md', 'xl')} {
//   width: max-content;
// }

// ${MediaBreakpoints.up('xxl')} {
//   max-width: ${THEME_DEFAULTS.BREAKPOINTS.xxl}px;
//   margin: 0 auto;
// }
export const AppContent = styled.main`
  flex: 1;
  background-color: floralwhite;
`;
// ${MediaBreakpoints.down('md')} {
//   margin-right: ${spacing(5)};
//   margin-left: ${spacing(5)};
//   margin-top: ${spacing(10)};
// }
