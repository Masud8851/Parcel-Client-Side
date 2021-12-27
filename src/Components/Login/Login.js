import React from "react";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
	const { signInWithGoogle, setUser, setIsLoading } = useFirebase();

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((res) => {
				setIsLoading(true);
				setUser(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			<h1>Please Login</h1>
			<Button variant="contained" onClick={handleGoogleLogin}>
				Google Sign in
			</Button>
		</div>
	);
};

export default Login;
