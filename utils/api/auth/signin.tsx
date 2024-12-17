type SignInRequest = {
  email: string;
  password: string;
};

export async function signIn(data: SignInRequest) {
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
