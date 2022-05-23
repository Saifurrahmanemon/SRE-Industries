import { Group } from "@mantine/core";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { GoogleButton } from "../Components/SocialButtons";
import Loading from "../Shared/Loading";
const SocialAuth = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            toast.success(
                `Welcome  ${user?.user?.displayName.split(" ")[0]} 👋👋!!`
            );
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/popup-closed-by-user":
                    toast.error(
                        "You closed the popup window, please try again"
                    );
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [error]);

    if (loading) {
        return <Loading />;
    }
    return (
        <Group grow mb="md" mt="md">
            <GoogleButton
                radius="xl"
                {...props}
                onClick={() => signInWithGoogle()}
            >
                Continue With Google
            </GoogleButton>
        </Group>
    );
};

export default SocialAuth;
