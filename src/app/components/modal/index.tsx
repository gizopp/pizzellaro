import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { Order } from "@/app/types/order.type";
import Button from "../button";
import { use } from "react";
import { OrderContext } from "@/providers/order";

interface ModalProps {
  order: Order;
}

export const OrderModal = ({ order }: ModalProps) => {
  const { onRequestClose } = use(OrderContext);

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button
          className={styles.dialogButton}
          onClick={() => {
            onRequestClose();
          }}
        >
          <X size={24} color="#fff" />
        </button>
        <article className={styles.detailsContainer}>
          <h2>Order Details</h2>
          <span className={styles.table}>
            Table: <b>{order.table}</b>
          </span>
          <section className={styles.itemsContainer}>
            <span>
              1UN - Pizza
              {/* {orderItem.quantity}UN - {orderItem.description} */}
            </span>
          </section>
          <Button name="Finish" />
        </article>
      </section>
    </dialog>
  );
};
