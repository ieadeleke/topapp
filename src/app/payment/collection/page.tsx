"use client";

import { useVerifyReference } from "@/utils/apiHooks/charge/useVerifyReference";
import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { RegularTextInput } from "@/components/input/RegularTextInput";
import { InputProps } from "@/components/input/InputText";
import Button from "@/components/buttons";
import GlobalContext from "@/context/GlobalContext";
import { Reference } from "@/models/reference";
import PaymentContent from "@/components/payment/PaymentContent";
import { Layout } from "@/components/layout";
import { PaymentLayout } from "@/components/layout/payment-layout";

const TextInput = ({ className, ...props }: InputProps) => (
  <RegularTextInput className={cn("w-full md:w-96", className)} {...props} />
);

export default function PaymentPage() {
  const {
    data: reference,
    isLoading,
    error,
    verifyReference,
  } = useVerifyReference();
  const router = useRouter();
  const [tx_reference, setTXReference] = useState("");
  const [mda, setMDA] = useState("");
  const [data, setData] = useState<Reference>();
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

  function fetchData() {
    if (tx_reference) {
      verifyReference({
        reference: tx_reference as string,
        apiKey: mda,
        type: mda ? "mda" : "regular",
      });
    }
  }

  useEffect(() => {
    if (tx_referenceParams) {
      setTXReference(tx_referenceParams);
    }
    if (mdaParams) {
      setMDA(mdaParams);
    }
    if (tx_referenceParams) {
      verifyReference({
        reference: tx_referenceParams as string,
        apiKey: mdaParams ?? undefined,
        type: mdaParams ? "mda" : "regular",
      });
    }
  }, [tx_referenceParams, mdaParams]);

  function submitReference() {
    if (tx_reference.trim().length == 0) {
      return alert("Reference ID can't be empty");
    }
    router.push(`/payment/collection?tx_reference=${tx_reference}`);
  }

  return (
    <PaymentLayout>
      <div className="mt-12 min-h-screen flex flex-col items-center">
        {data ? (
          <PaymentContent data={data} mda={mda} tx_reference={tx_reference} />
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
