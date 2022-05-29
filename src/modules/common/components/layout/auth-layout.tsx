import NextNProgress from "nextjs-progressbar";
import { FontType } from "../../utils/constants/typography.constants";
import { Typography } from "../typography/typography";
import { AppLayout, AuthContent } from "./layout.styles";

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <AppLayout>
      <NextNProgress
        color={"darkcyan"}
        options={{ easing: "ease-in-out", showSpinner: false }}
      />
      <AuthContent>
        <div>
          <Typography fontType={FontType.HEADLINE2}>Login Page</Typography>
          {children}
        </div>
      </AuthContent>
    </AppLayout>
  );
};
