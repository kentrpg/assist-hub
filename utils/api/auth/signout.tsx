export const signOut = async () => {
  const response = await fetch("/api/auth/signout", {
    method: "POST",
  });
  return response;
};
