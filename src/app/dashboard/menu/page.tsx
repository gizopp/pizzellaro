import { getCoookieServer } from "@/lib/cookieServer";
import { Form } from "./components/form";
import { headers } from "next/headers";
import { api } from "@/services/app";

export default async function Menu() {
  const token = getCoookieServer();

  const categories = await api.get("/category", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return <Form categories={categories.data} />;
}
