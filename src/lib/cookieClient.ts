import { getCookie } from "cookies-next";

export function getCoookieClient() {
  const token = getCookie("session");

  return token;
}
