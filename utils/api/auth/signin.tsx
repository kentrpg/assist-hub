type SignInResponse = {
  email: string;
  password: string;
};

export async function signIn(data: SignInResponse) {
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return {
    status: response.status,
    data: await response.json(),
  };
}
