"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Reference } from "@/models/reference";
import { Payment } from "@/models/payment";
import { useUpperlinkNotification } from "@/utils/apiHooks/charge/useUpperlinkNotification";
import {
  InputProps,
  RegularTextInput,
} from "@/components/input/RegularTextInput";
import { cn } from "@/lib/utils";
import Button from "@/components/buttons";
import GlobalContext from "@/context/GlobalContext";
import { GenerateReceipt } from "@/components/charge/GenerateReceipt";
import { Suspense } from "react";
import { PaymentLayout } from "@/components/layout/payment-layout";

type Error = {
  status: number;
  message: string;
};

type ChargeProps = {
  tx_reference?: string;
  data: Reference;
  error?: Error;
};

const TextInput = ({ className, ...props }: InputProps) => (
  <RegularTextInput className={cn("w-full md:w-96", className)} {...props} />
);

function GenerateReceiptPage() {
  const router = useRouter();
  const [payment, setPayment] = useState<
    (Payment & { ReceiptNumber: string }) | null
  >(null);
  const { showSnackBar } = useContext(GlobalContext);
  const [reference, setReference] = useState("");
  const [mda, setMDA] = useState<string>();
  const [transactionId, setTransactionID] = useState("");
  const {
    isLoading: isUpperLinkNotificationLoading,
    data: upperLinkNotificationData,
    error: upperLinkNotificationError,
    upperlinkNotification,
  } = useUpperlinkNotification();
  const referenceParams = useSearchParams().get("reference");
  const mdaParams = useSearchParams().get("mda");
  const tx_idParams = useSearchParams().get("tx_id");

  useEffect(() => {
    setReference((reference as string | null) ?? "");
  }, [referenceParams]);

  useEffect(() => {
    setMDA((mdaParams as string | null) ?? "");
  }, [mdaParams]);

  useEffect(() => {
    setTransactionID((tx_idParams as string | null) ?? "");
  }, [tx_idParams]);

  useEffect(() => {
    if (referenceParams && tx_idParams) {
      upperlinkNotification({
        type: mdaParams ? "mda" : "regular",
        apiKey: mdaParams as string | undefined,
        reference: referenceParams as string,
        transaction_id: tx_idParams as string,
      });
    }
  }, [referenceParams, tx_idParams, mdaParams]);

  useEffect(() => {
    if (upperLinkNotificationData) {
      showSnackBar({
        message: "Payment successful",
        severity: "success",
      });
      setPayment(upperLinkNotificationData);
    }
  }, [upperLinkNotificationData]);

  useEffect(() => {
    if (upperLinkNotificationError) {
      showSnackBar({
        message: upperLinkNotificationError,
        severity: "error",
      });
    }
  }, [upperLinkNotificationError]);

  function submitReference() {
    if (reference.trim().length > 0 && transactionId.trim().length > 0) {
      upperlinkNotification({
        type: mda ? "mda" : "regular",
        apiKey: mda,
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
            upperLinkNotificationData ? (
              <GenerateReceipt
                data={{
                  amount: upperLinkNotificationData.amountPaid,
                  url: upperLinkNotificationData.ReceiptNumber,
                  billingReference: upperLinkNotificationData.paymentRef,
                  paymentTime: new Date().toString(),
                  senderName: upperLinkNotificationData.PayerName,
                }}
              />
            )
              : (
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
                    disabled={isUpperLinkNotificationLoading}
                    className={cn("h-10 mt-4 w-full")}
                  >
                    {isUpperLinkNotificationLoading
                      ? "Please wait... Loading"
                      : upperLinkNotificationError
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

const GenerateReceiptDefaultPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateReceiptPage />
    </Suspense>
  );
};

export default GenerateReceiptDefaultPage;