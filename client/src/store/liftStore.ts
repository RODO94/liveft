import { create } from "zustand";
import { LiftRecord } from "../types/lifts";
import { getUserLiftRecords } from "../requests/liftRecords";

interface LiftState {
  usersLifts: LiftRecord[];
  fetchUsersLifts: () => Promise<void>;
}

export const useLiftStore = create<LiftState>((set) => ({
  usersLifts: [],

  fetchUsersLifts: async () => {
    try {
      const userId = window.sessionStorage.getItem("userId");
      if (userId) {
        const response = await getUserLiftRecords(userId);
        if (response.success) {
          set({ usersLifts: response.data });
        }
      }
    } catch (error) {
      console.error("Error fetching lifts:", error);
    }
  },
}));
