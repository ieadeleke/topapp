import { useState } from "react";
import { ChargeService } from "@/utils/services/charge";
import { Payment } from "@/models/payment";
import { UpperLinkPaymentNotificationParams, UpperLinkWalletPaymentNotificationParams } from "@/utils/services/charge/types";
import { errorHandler } from "@/utils/errorHandler";
import { useRouter } from "next/navigation";
import { useApi } from ".";

export const useHarmonizeNotification = () => {
  const [data, setData] = useState<(Payment & { Receipts: string[], ReceiptNumber?: string }) | null>(
    null
  );
  const { isLoading, execute } = useApi();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function harmonizeWalletNotification({
    type,
    apiKey,
    ...params
  }: UpperLinkWalletPaymentNotificationParams & {
    type?: "regular" | "mda";
    apiKey?: string;
  }) {
    setData(null);
    setError(null);
    const response = await execute(
      () => ChargeService().harmonizeWalletNotification(params),
      {
        onError(error: any) {
          const parsedError = errorHandler(error);
          if (parsedError.status == 402) {
            setError("Payment failed");
            setTimeout(() => {
              router.replace(`/payment/collection`);
            }, 1000);
          } else {
            setError(parsedError.message);
          }
        },
      }
    );
    if (response) {
      setData({
        ...response.payload,
        Receipts: response.Receipt,
        ReceiptNumber: response.ReceiptNumber ? response.ReceiptNumber : ""
      });
    }
  }

  return { isLoading, error, data, harmonizeWalletNotification };
};