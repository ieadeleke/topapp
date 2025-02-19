"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Payment } from "@/models/payment";
import {
  InputProps,
  RegularTextInput,
} from "@/components/input/RegularTextInput";
import { cn } from "@/lib/utils";
import Button from "@/components/buttons";
import GlobalContext from "@/context/GlobalContext";
import { GenerateReceipt } from "@/components/charge/GenerateReceipt";
import { PaymentLayout } from "@/components/layout/payment-layout";
import { useHarmonizeNotification } from "@/utils/apiHooks/useHarmonizeNotification";
import { Divider } from "@/components/Divider";

const TextInput = ({ className, ...props }: InputProps) => (
  <RegularTextInput className={cn("w-full md:w-96", className)} {...props} />
);

export default function GenerateReceiptPage() {
  const router = useRouter();
  const [payment, setPayment] = useState<
    (Payment & { Receipts: string[] }) | null
  >(null);
  const { showSnackBar } = useContext(GlobalContext);
  const [reference, setReference] = useState("");
  const [transactionId, setTransactionID] = useState("");
  const {
    isLoading: isHarmonizeNotificationLoading,
    data: harmonizeNotificationData,
    error: harmonizeNotificationError,
    harmonizeNotification,
  } = useHarmonizeNotification();
  const referenceParams = useSearchParams().get("reference");
  const tx_idParams = useSearchParams().get("tx_id");

  const tx_payment_method = useSearchParams().get("payment_method");
  const billingReference = useSearchParams().get("billingReference");
  const paymentReference = useSearchParams().get("reference");
  const senderName = useSearchParams().get("senderName");
  const amountPaid = useSearchParams().get("amountPaid");
  const ReceiptNumber = useSearchParams().get("ReceiptNumber");

  useEffect(() => {
    setReference((reference as string | null) ?? "");
  }, [referenceParams]);

  useEffect(() => {
    setTransactionID((tx_idParams as string | null) ?? "");
  }, [tx_idParams]);

  useEffect(() => {
    if (referenceParams && tx_idParams) {
      harmonizeNotification({
        reference: referenceParams as string,
        transaction_id: tx_idParams as string,
      });
    }
  }, [referenceParams, tx_idParams]);

  useEffect(() => {
    if (harmonizeNotificationData) {
      showSnackBar({
        message: "Payment successful",
        severity: "success",
      });
      setPayment(harmonizeNotificationData);
    }
  }, [harmonizeNotificationData]);

  useEffect(() => {
    if (harmonizeNotificationError) {
      showSnackBar({
        message: harmonizeNotificationError,
        severity: "error",
      });
    }
  }, [harmonizeNotificationError]);

  function submitReference() {
    if (reference.trim().length > 0 && transactionId.trim().length > 0) {
      harmonizeNotification({
        reference,
        transaction_id: transactionId,
      });
    }
  }

  function onFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    submitReference();
  }

  return (
    <PaymentLayout>
      <div className="mt-12 min-h-screen flex flex-col items-center">
        <div className="flex flex-col">
          {
            tx_payment_method === "wallet" ?
              <GenerateReceipt
                data={{
                  amount: amountPaid ? amountPaid : "",
                  url: ReceiptNumber ? ReceiptNumber : "",
                  billingReference: billingReference ? billingReference : "",
                  paymentTime: new Date().toString(),
                  senderName: senderName ? senderName : "",
                }}
              />
              :
              harmonizeNotificationData ? (
                <div className="flex flex-col space-y-10">
                  {/* {harmonizeNotificationData.Receipts.map((receipt, index) => ( */}
                  <div className="space-y-10">
                    <GenerateReceipt
                      handleRoute="harmonize"
                      multipleDisplayDownloadLink={true}
                      multipleDownloadLinks={harmonizeNotificationData.Receipts}
                      data={{
                        amount: harmonizeNotificationData.amountPaid,
                        url: harmonizeNotificationData.Receipts[0],
                        billingReference: harmonizeNotificationData.paymentRef,
                        paymentTime: new Date().toString(),
                        senderName: harmonizeNotificationData.PayerName,
                      }}
                    />
                    <Divider className="w-full h-[1px] bg-gray-200" />
                  </div>
                </div>
              ) : (
                <form onSubmit={onFormSubmit} className={cn("flex flex-col")}>
                  <h1 className="font-bold">Enter your Payment Reference</h1>
                  <TextInput
                    defaultValue={reference}
                    onChange={(evt) => setReference(evt.target.value)}
                    className="mt-2"
                    placeholder="XXXX-XXX-XXXXXX"
                  />
                  <Button
                    onClick={submitReference}
                    variant="contained"
                    disabled={isHarmonizeNotificationLoading}
                    className={cn("h-10 mt-4 w-full")}
                  >
                    {isHarmonizeNotificationLoading
                      ? "Please wait... Loading"
                      : harmonizeNotificationError
                        ? "Try again"
                        : "Generate Receipt"}
                  </Button>
                  <div className="flex items-center"></div>
                </form>
              )}
        </div>
      </div>
    </PaymentLayout>
  );
}
