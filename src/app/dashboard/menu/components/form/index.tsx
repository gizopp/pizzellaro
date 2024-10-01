"use client";

import { UploadCloud } from "lucide-react";
import styles from "./styles.module.scss";
import Input from "@/app/dashboard/components/input";
import { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export function Form() {
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState("");

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type !== "image/png" && image.type !== "image/jpeg") {
        toast.error("Only PNG and JPEG images are allowed");
        return;
      }

      setImage(image);
      setPreviewImage(URL.createObjectURL(image));
    }
  };

  return (
    <main className={styles.container}>
      <Toaster />
      <h1>New Product</h1>
      <form className={styles.form} action="">
        <label className={styles.labelImage}>
          <span>
            <UploadCloud size={30} color="#fff" />
          </span>

          <Input
            type="file"
            accept="image/png, image/jpeg"
            required
            onChange={handleChangeFile}
          />
          {previewImage && (
            <Image
              alt="Product Preview"
              src={previewImage}
              className={styles.previewImage}
            />
          )}
        </label>
      </form>
    </main>
  );
}
