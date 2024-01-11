import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/"  //should be the login page
    }

});

export const config = {
    matcher: [
        "/users/:path*",
        "/conversations/:path*"
    ]
}