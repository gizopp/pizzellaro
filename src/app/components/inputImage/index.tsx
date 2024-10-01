import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import toast from "react-hot-toast";
import styles from "./styles.module.scss";

interface InputImageProps {
  onImageChange: (image: File) => void;
  label?: string;
}

export function InputImage({ onImageChange, label }: InputImageProps) {
  const [previewImage, setPreviewImage] = useState("");

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      if (image.type !== "image/png" && image.type !== "image/jpeg") {
        toast.error("Only PNG and JPEG images are allowed");
        return;
      }
      onImageChange(image);
      setPreviewImage(URL.createObjectURL(image));
    }
  };

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          required
          onChange={handleChangeFile}
          className={styles.input}
        />
        {!previewImage && (
          <div className={styles.placeholder}>
            <UploadCloud size={40} color="#fff" />
            <span>Choose an image</span>
          </div>
        )}
        {previewImage && (
          <Image
            alt="Product Preview"
            src={previewImage}
            layout="fill"
            objectFit="contain"
            className={styles.previewImage}
            fill={true}
          />
        )}
      </div>
    </div>
  );
}
