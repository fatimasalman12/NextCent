import styles from "./card.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../main/Modal";

export default function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  function openModal() {
    setSelectedCardId(props.id); // Set the selected card ID
    setIsModalOpen(true);  // Open the modal
  }

  function closeModal() {
    setSelectedCardId(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className={styles.notification}>
        <div className={styles.notiglow}></div>
        <div className={styles.notiborderglow}></div>
        <div className={styles.notititle}>{props.title}</div>
        <div className={styles.notibody}>
          {props.desc}
          <div className="flex flex-wrap">
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded font-semibold text-[#7281a3]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute right-2 z-10">
          <button
            onClick={openModal}
            className="top-2 right-2 flex items-center justify-center w-[25px] h-[25px] bg-[#d9dfe3] text-[#7281a3] rounded-lg font-semibold text-[12px] hover:bg-[#b0b9c4] transition-colors duration-300"
          >
            <Image
              className="hover:scale-110"
              src="/images/exp.png"
              alt="Expand"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} cardId={selectedCardId} />
    </>
  );
}
