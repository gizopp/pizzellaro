import { api } from "../app";
import { getCoookieClient } from "@/lib/cookieClient";

export const CategoryCreate = async (name: string) => {
  if (!name) {
    console.log("Name is required.");
    return;
  }

  const token = getCoookieClient();
  try {
    const response = await api.post(
      "/category",
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (response) {
      return true;
    }
  } catch (err) {
    console.log("Error registering category: " + err);
    return;
  }

  return false;
};
