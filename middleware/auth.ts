export default function auth() {
  const { status } = useAuth();
  if (status.value === "unauthenticated") {
    navigateTo("/api/auth/signin", { external: true });
  }
}
