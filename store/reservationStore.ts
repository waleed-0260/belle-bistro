import { create } from "zustand";

type ReservationState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useReservationStore = create<ReservationState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useReservationStore;
