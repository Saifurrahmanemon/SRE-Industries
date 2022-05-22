import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "tabler-icons-react";
import SocialAuth from "./SocialAuth";
export default function Login() {
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: ({ email, password }) => ({
            email: /^\S+@\S+$/.test(email)
                ? null
                : "Please Provide a valid email",
            password:
                password.length < 6
                    ? "Password should include at least 6 characters"
                    : null,
        }),
    });

    const handleLoginOnSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Container size={420}>
                <Title
                    align="center"
                    sx={(theme) => ({
                        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                        fontWeight: 900,
                    })}
                    mt={40}
                >
                    Welcome back!
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Do not have an account yet?{" "}
                    <Anchor
                        href="#"
                        size="sm"
                        onClick={() => navigate("/signUp")}
                    >
                        Create account
                    </Anchor>
                </Text>

                <Paper withBorder shadow="xl" p={30} mt={30} radius="md">
                    <SocialAuth />
                    <Divider
                        label="Or continue with email"
                        labelPosition="center"
                        my="lg"
                    />
                    <form onSubmit={form.onSubmit(handleLoginOnSubmit)}>
                        <TextInput
                            label="Email"
                            placeholder="you@mantine.dev"
                            required
                            icon={<Mail size={20} />}
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "email",
                                    event.currentTarget.value
                                )
                            }
                            error={form.errors.email && "Invalid email"}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Your password"
                            required
                            mt="md"
                            icon={<Lock size={20} />}
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "password",
                                    event.currentTarget.value
                                )
                            }
                            error={
                                form.errors.password &&
                                "Password should include at least 6 characters"
                            }
                        />
                        <Group position="apart" mt="md">
                            <Checkbox label="Remember me" />
                            <Anchor color="grey" href="#" size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>
                        <Button
                            type="submit"
                            variant="outline"
                            fullWidth
                            mt="xl"

                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}
