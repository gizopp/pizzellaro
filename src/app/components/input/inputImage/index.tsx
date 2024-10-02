import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Upload } from "lucide-react";
import toast from "react-hot-toast";
import styles from "./styles.module.scss";

interface InputImageProps {
  onImageChange: (image: File | null) => void;
  label?: string;
}

export function InputImage({ onImageChange, label }: InputImageProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (image) {
      if (image.type !== "image/png" && image.type !== "image/jpeg") {
        toast.error("Only PNG and JPEG images are allowed");
        return;
      }

      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }

      setPreviewImage(URL.createObjectURL(image));
      onImageChange(image);
    }
  };

  const handleReplaceClick = () => {
    document.getElementById("imageInput")?.click();
  };

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          id="imageInput"
          type="file"
          accept="image/png, image/jpeg"
          required
          onChange={handleChangeFile}
          className={styles.input}
        />
        {!previewImage && (
          <div className={styles.placeholder}>
            <Plus size={80} color="#fff" />
          </div>
        )}
        {previewImage && (
          <>
            <Image
              alt="Product Preview"
              src={previewImage}
              layout="fill"
              objectFit="cover"
              className={styles.previewImage}
            />
            <div className={styles.imageActions}>
              <button
                onClick={handleReplaceClick}
                className={styles.iconButton}
              >
                <Upload size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
