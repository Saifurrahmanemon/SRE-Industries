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
import { useForm } from "@mantine/form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "tabler-icons-react";
import SocialAuth from "./SocialAuth";

export default function SignUp() {
    const navigate = useNavigate();

    // for form validation
    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            terms: true,
        },

        validate: ({ name, email, password, confirmPassword }) => ({
            name: name.length < 3 ? "Too short name" : null,
            email: /^\S+@\S+$/.test(email)
                ? null
                : "Please Provide a valid email",
            password:
                password.length < 6
                    ? "Password should include at least 6 characters"
                    : null,
            confirmPassword:
                password !== confirmPassword ? "Passwords did not match" : null,
        }),
    });

    const handleRegisterOnSubmit = async ({ name, password, email }) => {};

    return (
        <Container size={420} my={50}>
            <Title
                align="center"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
                mt={40}
            >
                Welcome to Website!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Already have an account yet?{" "}
                <Anchor href="#" size="sm" onClick={() => navigate("/login")}>
                    Please Login
                </Anchor>
            </Text>
            <Paper withBorder shadow="xl" p={30} mt={30} radius="md">
                <SocialAuth />

                <Divider
                    label="Or continue with email"
                    labelPosition="center"
                    my="lg"
                />

                <form onSubmit={form.onSubmit(handleRegisterOnSubmit)}>
                    <Group direction="column" grow>
                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            icon={<Mail size={20} />}
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "email",
                                    event.currentTarget.value
                                )
                            }
                            {...form.getInputProps("email")}
                        />
                        <TextInput
                            required
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "name",
                                    event.currentTarget.value
                                )
                            }
                            {...form.getInputProps("name")}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            icon={<Lock size={20} />}
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "password",
                                    event.currentTarget.value
                                )
                            }
                            {...form.getInputProps("password")}
                        />
                        <PasswordInput
                            required
                            icon={<Lock size={20} />}
                            label="confirm Password"
                            placeholder="confirm password"
                            value={form.values.confirmPassword}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "confirmPassword",
                                    event.currentTarget.value
                                )
                            }
                            {...form.getInputProps("confirmPassword")}
                        />
                        <Group position="apart" mt="sm">
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "terms",
                                        event.currentTarget.checked
                                    )
                                }
                            />
                        </Group>
                    </Group>
                    <Button type="submit" variant="outline" fullWidth mt="xl">
                        Sign in
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
