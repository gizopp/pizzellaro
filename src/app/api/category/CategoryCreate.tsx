import toast from "react-hot-toast";
import { api } from "../../../services/app";
import { getCoookieClient } from "@/lib/cookieClient";

export const CategoryCreate = async (name: string) => {
  if (!name) {
    toast.error("Name is required.");
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
    console.error("Error registering category: " + err);
    return;
  }

  return false;
};
