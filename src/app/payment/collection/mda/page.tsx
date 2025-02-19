"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { RegularTextInput } from "@/components/input/RegularTextInput";
import { InputProps } from "@/components/input/InputText";
import Button from "@/components/buttons";
import GlobalContext from "@/context/GlobalContext";
import { HarmonizeReference } from "@/models/reference";
import { PaymentLayout } from "@/components/layout/payment-layout";
import { useVerifyHarmonizeReference } from "@/utils/apiHooks/charge/useVerifyHarmonizeReference";
import HarmonizePaymentContent from "@/components/payment/HarmonizePaymentContent";

const TextInput = ({ className, ...props }: InputProps) => (
  <RegularTextInput className={cn("w-full md:w-96", className)} {...props} />
);

export default function PaymentPage() {
  const {
    data: reference,
    isLoading,
    error,
    verifyReference,
  } = useVerifyHarmonizeReference();
  const router = useRouter();
  const [tx_reference, setTXReference] = useState("");
  const [data, setData] = useState<HarmonizeReference>();
  const { showSnackBar } = useContext(GlobalContext);
  const tx_referenceParams = useSearchParams().get("tx_reference");
  const mdaParams = useSearchParams().get("mda");

  useEffect(() => {
    if (error) {
      showSnackBar({ severity: "error", message: error });
    }
  }, [error]);

  useEffect(() => {
    if (reference) {
      setData(reference);
    }
  }, [reference]);

  useEffect(() => {
    if (tx_referenceParams) {
      setTXReference(tx_referenceParams);
    }
    if (tx_referenceParams) {
      verifyReference({
        reference: tx_referenceParams as string,
      });
    }
  }, [tx_referenceParams, mdaParams]);

  function submitReference() {
    if (tx_reference.trim().length == 0) {
      return alert("Reference ID can't be empty");
    }
    router.push(`/payment/harmonize?tx_reference=${tx_reference}`);
  }

  return (
    <PaymentLayout>
      <div className="mt-12 min-h-screen flex flex-col items-center">
        {data ? (
          <HarmonizePaymentContent data={data} tx_reference={tx_reference} />
        ) : (
          <div className={cn("flex flex-col")}>
            <h1 className="font-bold">Enter your reference ID</h1>
            <TextInput
              defaultValue={tx_reference}
              onChange={(evt) => setTXReference(evt.target.value.trim())}
              placeholder="XXXX-XXX-XXXXXX"
            />
            <Button
              onClick={submitReference}
              variant="contained"
              disabled={isLoading}
              className={cn("h-10 mt-4 w-full")}
            >
              {isLoading ? "Please wait..." : "Submit"}
            </Button>
          </div>
        )}
      </div>
    </PaymentLayout>
  );
}
