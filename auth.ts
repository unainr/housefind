import { User } from "./models/User";
import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";


export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),

		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),

		Credentials({
			name: "Credentials",

			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},

			authorize: async (credentials) => {
				const email = credentials.email as string | undefined;
				const password = credentials.password as string | undefined;

				if (!email || !password) {
					throw new CredentialsSignin({cause:"Please provide both email & password"});
				}

				await connectDB();

				const user = await User.findOne({ email }).select("+password +role");

				if (!user) {
					throw new CredentialsSignin({cause:"Invalid email or password"});
				}

				if (!user.password) {
					throw new CredentialsSignin({cause:"Invalid email or password"});
				}

				const isMatched = await compare(password, user.password);

				if (!isMatched) {
					throw new CredentialsSignin({cause:"Password did not matched"});
				}

				const userData = {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					role: user.role,
					id: user._id,
				};

				return userData;
			},
		}),
	],

	pages: {
		signIn: "/login",
	},

	callbacks: {
		async session({ session, token }) {
			if (token?.sub && token?.role) {
				session.user.id = token.sub;
				session.user.role = token.role;
			}
			return session;
		},

		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
			}
			return token;
		},

		signIn: async ({ user, account }) => {
			if (account?.provider === "google" || account?.provider === "github") {
				try {
					const { email, name, image, id } = user;
					await connectDB();
					const alreayUser = await User.findOne({ email });
					if (!alreayUser) {
						await User.create({ email, name, image, authProviderId: id });
						
					}
					
					return true;
				} catch (error) {
					console.error("Error during user creation: ", error);
					return false; // Block sign-in on error
				}
			}

			if (account?.provider === "credentials") {
				return true;
			} else {
				return false;
			}
		},
	},
});
