import { cookies } from "next/headers";

export function getCoookieServer() {
  const token = cookies().get("session")?.value;

  return token || null;
}
