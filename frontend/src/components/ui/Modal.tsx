import type { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-[#A100FF]"
        >
          Close
        </button>
      </div>
    </div>
  );
}