type RegistResponse = {
  email: string;
  password: string;
  nickname: string;
};

export async function signUp(data: RegistResponse) {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return {
    status: response.status,
    data: await response.json(),
  };
}
