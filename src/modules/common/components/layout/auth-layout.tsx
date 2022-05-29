import { Link } from "@material-ui/core";
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
          {/* <Typography fontType={FontType.HERO}>Login Page</Typography> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <Link href={"/auth/login"}>Login</Link>
            <Link href={"/add-user"}>Sign up</Link>
          </div>
          <div>{children}</div>
        </div>
      </AuthContent>
    </AppLayout>
  );
};
