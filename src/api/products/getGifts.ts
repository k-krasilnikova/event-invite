import { useQuery } from "react-query";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import { db } from "../firebase";
import { API_ROUTES } from "../routes";
import { IGift } from "../../constants/gifts";

export const useLoadGifts = () => {
  const docRef = collection(db, API_ROUTES.gifts);
  const q = query(docRef, orderBy("createdAt", "asc"));
  return useQuery(
    ["gifts"],
    async () => {
      const data = await getDocs(q);
      let list: IGift[] = [];
      if (data) {
        list = data.docs?.map((doc) => ({
          ...doc?.data(),
          _id: doc?.id,
        }));
      }
      return list;
    },
    {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
