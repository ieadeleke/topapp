import { useRouter, useSearchParams } from "next/navigation";
import Button from "../buttons";
import { usePrintReceipt } from "@/utils/apiHooks/charge/usePrintReceipt";
import { useContext, useEffect } from "react";
import GlobalContext from "@/context/GlobalContext";
import moment from "moment";
// import { BASE_URL } from "@/pages/payment/collection";

type GenerateReceiptProps = {
  data: {
    billingReference: string;
    paymentTime: string;
    amount: string;
    url?: string;
    senderName: string;
  };
  isMultiple?: boolean;
  handleRoute?: string;
  multipleDisplayDownloadLink?: boolean;
  multipleDownloadLinks?: string[]
};

export const GenerateReceipt = (props: GenerateReceiptProps) => {
  const router = useRouter();
  const {
    isLoading,
    data: receiptData,
    error,
    printReceipt,
  } = usePrintReceipt();
  const { showSnackBar } = useContext(GlobalContext);
  const { data } = props;
  const callbackUrl = useSearchParams().get("callbackUrl");

  function handlePayAgain() {
    router.replace("/");
  }

  function handleDownloadReceipt() {
    if (data.url) {
      window.open(data.url, "_blank");
    } else {
      let secDownloadLink = props?.multipleDownloadLinks ? props?.multipleDownloadLinks[0] : "";
      window.open(secDownloadLink, "_blank");
    }
  }

  function handleMultipleDownloadReceipt(url: string) {
    window.open(url, "_blank");
  }

  useEffect(() => {
    if (error) {
      showSnackBar({ severity: "error", message: error });
    }
  }, []);

  function getBaseUrl() {
    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : "";

    return process.env.NODE_ENV == "development"
      ? `http://localhost:3000`
      : origin;
  }

  function handleClose() {
    if (callbackUrl) {
      return (location.href = callbackUrl as string);
    }
    if (props?.handleRoute && props?.handleRoute?.length) {
      location.href = `${getBaseUrl()}/payment/${props.handleRoute}`;
    } else {
      // location.href = `${getBaseUrl()}/payment/collection`;
      location.href = `${getBaseUrl()}/payment/harmonize`;
    }
    // router.replace(`${BASE_URL}/payment/collection`)
  }

  return (
    <div className="w-full md:w-[500px]">
      <div className="flex flex-col gap-2 px-4 py-4 bg-no-repeat bg-primary rounded-2xl">
        <div className="text-center text-white">
          <h1 className="font-bold">Payment Completed</h1>
          <p>Your payment has been successfully done.</p>
        </div>

        <div className="grid grid-cols-2 text-white mt-4 gap-4">
          <div className="border rounded-md border-white p-2">
            <p className="font-light">Billing Reference</p>
            <p className="font-medium">{data.billingReference}</p>
          </div>

          <div className="border rounded-md border-white p-2">
            <p className="font-light">Payment Time</p>
            <p className="font-medium">
              {moment(data.paymentTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>

          <div className="border rounded-md border-white p-2">
            <p className="font-light">Amount</p>
            <p className="font-medium">{data.amount}</p>
          </div>

          <div className="border rounded-md border-white p-2">
            <p className="font-light">Sender Name</p>
            <p className="font-medium">{data.senderName}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-12 mt-8">
        {/* <Button
          onClick={handlePayAgain}
          className="flex-1 h-full"
          variant="outlined"
        >
          Pay Again
        </Button> */}
        {
          props.multipleDisplayDownloadLink ?
            props.multipleDownloadLinks?.map((link, index) => (
              <Button
                key={index}
                disabled={isLoading}
                onClick={() => handleMultipleDownloadReceipt(link)}
                className="flex-1 h-full rounded-md py-2"
                variant="contained"
              >
                Download Receipt
              </Button>
            )) :
            <Button
              disabled={isLoading}
              onClick={handleDownloadReceipt}
              className="flex-1 h-full rounded-md py-2"
              variant="contained"
            >
              Download Receipt
            </Button>
        }
        {/* {props.isMultiple ? null : ( */}
        <Button
          disabled={isLoading}
          onClick={handleClose}
          className="flex-1 h-full rounded-md py-2"
          variant="outlined"
        >
          Close
        </Button>
        {/* )} */}
      </div>
    </div>
  );
};
