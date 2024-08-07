import { fetchUserByEmail } from "@/lib/data";
import Typography from "./typography";

export default async function UserHeading() {
  const user = await fetchUserByEmail();

  if (!user) {
    return <Typography type="h1">Welcome back!</Typography>;
  }

  return (
      <Typography type="h1">Welcome back, {user.name}!</Typography>
  );
}