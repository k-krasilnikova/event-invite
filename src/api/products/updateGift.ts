import { useMutation } from "react-query";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "../firebase";
import { API_ROUTES } from "../routes";
import { queryClient } from "../base";

export const useUpdateGift = () => {
  const handleSuccess = () => {
    queryClient.invalidateQueries("gifts");
  };

  return useMutation(
    async ({
      id,
      key,
      isReserved,
    }: {
      id: string;
      key: string;
      isReserved: boolean;
    }) => {
      const docRef = doc(db, API_ROUTES.gifts, id);
      await updateDoc(docRef, {
        key,
        isReserved,
      });
      return id;
    },
    {
      onSuccess: handleSuccess,
      // onError: handleError,
    }
  );
};
