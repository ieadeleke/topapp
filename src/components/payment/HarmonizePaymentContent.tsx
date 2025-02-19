import {
  InputProps,
  RegularTextInput,
} from "@/components/input/RegularTextInput";
import { cn } from "@/lib/utils";
import Button from "@/components/buttons";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { isEmail } from "@/utils/validation/validation";
import { HarmonizeReference } from "@/models/reference";
import Pay4ItLogo from "@/assets/images/pay_4_it_logo.png";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FLUTTERWAVE_LIVE_KEY, config } from "@/utils/data/flutterwave.config";
import GlobalContext from "@/context/GlobalContext";
import { useInitiateHarmonizePayment } from "@/utils/apiHooks/charge/useInitiateHarmonizePayment";
import { useHarmonizeNotification } from "@/utils/apiHooks/useCompleteWalletPayment";
import { generateUUID } from "@/utils/data/generateUUID";
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { OTPInputBoxes } from "../auth/OTPInput";
import { GenerateReceipt } from "../charge/GenerateReceipt";
import { Divider } from "@/components/Divider";
import { formatAmount } from "@/utils/formatters/formatAmount";
import { Modal, Spin } from "antd";


const TextInput = ({ className, ...props }: InputProps) => (
  <RegularTextInput className={cn("w-full md:w-96", className)} {...props} />
);

type HarmonizePaymentContentProps = {
  tx_reference: string;
  data: HarmonizeReference;
};

export default function HarmonizePaymentContent(
  props: HarmonizePaymentContentProps
) {
  const router = useRouter();
  const [formFields, setFormFields] = useState({
    tx_reference: "",
    phone: "",
    email: "",
    wallet: false,
    userName: ""
  });
  const { showSnackBar } = useContext(GlobalContext);
  const {
    isLoading: isPaymentLoading,
    data,
    error: paymentError,
    initiatePaymentWithUpperlink,
  } = useInitiateHarmonizePayment();

  const {
    isLoading: isWalletPaymentLoading,
    data: completeWalletPaymentData,
    error: walletPaymentError,
    harmonizeWalletNotification,
  } = useHarmonizeNotification();
  // const tx_referenceParams = useSearchParams().get("tx_reference") ? useSearchParams().get("tx_reference") : useSearchParams().get("ref");
  const paramMeter = useSearchParams();
  const tx_referenceParams = paramMeter.get("tx_reference") || paramMeter.get("ref");

  const [txRef, setTxRef] = useState("");
  const [payWithWallet, setPayWithWallet] = useState(false);
  const [payWithWalletModal, setPayWithWalletModal] = useState(false);
  const [userOTPValue, setUserOTPValue] = useState("");
  const [collectUserOTP, setCollectUserOTP] = useState<boolean>(false);
  const [testPay, setTestPay] = useState<any>([]);
  const [walletReceiptBox, setWalletReceiptBox] = useState<any>([]);
  const [serviceCharge, setServiceCharge] = useState<number>(0);
  const [payWithAgentDetail, setPayWithAgentDetail] = useState<any>({});
  const [totalAmountToPay, setTotalAmountToPay] = useState<any>(0);
  const [amountToPay, setAmountToPay] = useState<any>(0);

  const [loadingData, setLoadingData] = useState(false);
  const [displayPaymentContent, setDisplayPaymentContent] = useState<boolean>(true);
  const [paymentRef, setPaymentRef] = useState<string>("");

  useEffect(() => {
    if (data) {
      if (formFields.wallet) {
        // setPayWithAgentDetail(data[0].agent);
        setPayWithAgentDetail(data.agent);
        setPaymentRef(data?.paymentRef);
        setCollectUserOTP(true);
      } else {
        // console.log(data.paymentRef ? data.paymentRef :)
        setPaymentRef(data?.paymentRef);
        completePayment();
      }
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let randomKey = generateUUID();
    setTxRef(randomKey);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const amount = props.data.TotalAmount;
  const stampDuty = 50;

  useEffect(() => {
    const totalAmount = props.data.TotalAmount;
    let serviceChargePercentage = props.data.settings.percentage * totalAmount / 100;
    let serviceCharge = Math.max(props.data.settings.min, serviceChargePercentage);
    serviceCharge = Math.min(props.data.settings.max, serviceChargePercentage);
    setServiceCharge(serviceCharge);
    setAmountToPay(amount);
    let sum = +amountToPay + +serviceCharge + +stampDuty;
    setTotalAmountToPay(sum);
  }, [amount]);

  useEffect(() => {
    if (amountToPay) {
      const totalAmount = amountToPay;
      let serviceChargePercentage = props.data.settings.percentage * totalAmount / 100;
      let serviceCharge = Math.max(props.data.settings.min, serviceChargePercentage);
      serviceCharge = Math.min(props.data.settings.max, serviceCharge);
      setServiceCharge(serviceCharge);
      let sum = +amountToPay + +serviceCharge + +stampDuty;
      setTotalAmountToPay(sum);
    }
  }, [amountToPay])

  const calculatedServiceCharge = useMemo(() => {
    // const total = amount * (props.data.settings.percentage / 100);
    // let val: number = 0;
    // props.data.bulkBill.Webguid.reduce((acc, item) => {
    //   let serviceCharge = Number(item.serviceCharge) < Number(item.min) ? item.min : item.serviceCharge;
    //   val = Number(val) + Number(serviceCharge);
    //   if (item.MaxAmount) {
    //     const sum =
    //       acc +
    //       Math.min(
    //         props.data.settings.max,
    //         Math.max(props.data.settings.min, total)
    //       );
    //     return acc + sum;
    //   } else return Math.max(props.data.settings.min, total);
    // }, 0);
    const totalAmount = props.data.TotalAmount;
    let serviceChargePercentage = props.data.settings.percentage * totalAmount / 100;
    let serviceCharge = Math.max(props.data.settings.min, serviceChargePercentage);
    serviceCharge = Math.min(props.data.settings.min, serviceChargePercentage);
    setServiceCharge(serviceCharge);
    return serviceCharge;
    // setServiceCharge(val);
    // return val;
    // return props.data.bulkBill.Webguid.reduce((acc, item) => {
    //   console.log(acc);
    //   console.log(item);
    //   let serviceCharge = Number(item.serviceCharge) < Number(item.min) ? item.min : item.serviceCharge;
    //   val = Number(val) + Number(serviceCharge);
    //   if (item.MaxAmount) {
    //     const sum =
    //       acc +
    //       Math.min(
    //         props.data.settings.max,
    //         Math.max(props.data.settings.min, total)
    //       );
    //     return acc + sum;
    //   } else return Math.max(props.data.settings.min, total);
    // }, 0);
  }, [props.data?.settings?.min, amount]); // eslint-disable-line react-hooks/exhaustive-deps

  const actualAmount = useMemo(
    () => {
      // return amount + stampDuty + calculatedServiceCharge;
      let sum = amount + stampDuty;
      return sum;
    },
    [amount, calculatedServiceCharge]
  );// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (completeWalletPaymentData) {
      // let senderName = props.data.bulkBill.PayerName;
      setPayWithWalletModal(false);
      setWalletReceiptBox(completeWalletPaymentData.Receipts);
      setDisplayPaymentContent(false);
      setLoadingData(false)
      showSnackBar({ severity: "success", message: "Payment successful" });
      // let hrefRoute = `/payment/harmonize/generate-receipt?reference=${txRef}&billingReference=${billingReference}&senderName=${senderName}&amountPaid=${amountPaid}&ReceiptNumber=${ReceiptNumber}&payment_method=wallet`;
      // window.location.href = hrefRoute;
    }
  }, [completeWalletPaymentData]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleWalletModal = () => {
    if (+amountToPay > +props.data.TotalAmount) {
      return showSnackBar({ severity: "error", message: "You can't pay more than total bill amount" });
    }
    if (!formFields.email.length || !formFields.phone.length) {
      return showSnackBar({ severity: "error", message: "Please fill in all required fields" });
    }
    let randomKey = generateUUID();
    setTxRef(randomKey);
    setPayWithWalletModal(!payWithWalletModal);
    setCollectUserOTP(false);
    setUserOTPValue("");
    setFormFields((value) => ({
      ...value,
      userName: "",
      wallet: !formFields.wallet
    }))
  }

  const closeWalletModal = () => {
    let randomKey = generateUUID();
    setTxRef(randomKey);
    setFormFields({
      ...formFields,
      wallet: !formFields.wallet
    })
    setPayWithWalletModal(!payWithWalletModal);
    setCollectUserOTP(false);
    setUserOTPValue("");
    setFormFields((value) => ({
      ...value,
      userName: "",
    }))
  }

  function completePayment() {
    setLoadingData(true);
    if (data?.paymentRef) {
      let paymentRef = data.paymentRef;
      if (formFields.wallet) {
        harmonizeWalletNotification({
          reference: data?.paymentRef,
          otp: userOTPValue
        })
      } else {
        payNow({
          callback(data) {
            closePaymentModal();
            setTimeout(() => {
              console.log(data)
              if (data.status == "successful" || data.status == "completed") {
                let newLink = `/payment/harmonize/generate-receipt?tx_id=${data.transaction_id}&reference=${paymentRef}&payment_method=bank`;
                router.push(newLink);
              } else {
                showSnackBar({
                  severity: "error",
                  message: `Could not complete transaction`,
                });
              }
              setLoadingData(false);
            }, 1000);
          },
          onClose() { setLoadingData(false); },
        });
      }
    }
  }

  const publicKey = FLUTTERWAVE_LIVE_KEY;
  // const publicKey = FLUTTERWAVE_TEST_KEY;
  const payNow = useFlutterwave({
    ...config,
    public_key: publicKey,
    amount: totalAmountToPay,
    // tx_ref: new Date().getTime().toString(),
    tx_ref: txRef,
    customer: {
      ...config.customer,
      id: formFields.tx_reference,
      name: props.data ? props.data.bulkBill.PayerName : "",
      email: formFields.email,
      phone_number: formFields.phone,
    },
    customizations: props.data
      ? {
        title: props.data.bulkBill.State,
        description: `Payment for ${props.data.bulkBill.State}`,
        logo: Pay4ItLogo.src,
      }
      : config.customizations,
  } as any);

  const isLoading = useMemo(() => isPaymentLoading, [isPaymentLoading]);

  const error = useMemo(() => paymentError, [paymentError]);
  const walletError = useMemo(() => {
    setLoadingData(false);
    return walletPaymentError
  }, [walletPaymentError]);

  useEffect(() => {
    if (error) {
      showSnackBar({ severity: "error", message: error });
    }
  }, [error]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (walletError) {
      setPayWithWalletModal(false);
      setFormFields({
        ...formFields,
        wallet: false
      })
      showSnackBar({ severity: "error", message: walletError });
    }
  }, [walletError]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tx_referenceParams) {
      let param = tx_referenceParams.slice(0, 4) === "REF=" ? tx_referenceParams.slice(4) : tx_referenceParams;
      setFormFields((value) => ({
        ...value,
        tx_reference: param as string,
      }));
    }
  }, [tx_referenceParams]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.data) {
      setFormFields((value) => ({
        ...value,
        amount: props.data.TotalAmount,
      }));
    }
  }, [props.data]); // eslint-disable-line react-hooks/exhaustive-deps

  function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    handlePayNow();
  }

  function submitForm() {
    if (+amountToPay > +props.data.TotalAmount) {
      return showSnackBar({ severity: "error", message: "You can't pay more than total bill amount" });
    }
    if (!isEmail(formFields.email)) {
      return showSnackBar({ severity: "error", message: "Invalid Email" });

    } else if (formFields.phone.length < 11) {
      return showSnackBar({ severity: "error", message: "Invalid Phone Number" });
    }
    if (formFields.wallet) {
      if (!formFields.userName.length) {
        return showSnackBar({ severity: "error", message: "Please enter agent username" });
      }
    }
    handlePayNow();
  }

  // useEffect(() => {
  //   let bp = [...props.data.bulkBill.Webguid];
  //   console.log(bp);
  //   if (bp.length) {
  //     bp[0].AmountDue = "50";
  //   }
  //   setTestPay(bp)
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function handlePayNow() {
    initiatePaymentWithUpperlink({
      Webguid: props.data.bulkBill.Webguid,
      // Webguid: testPay,
      email: formFields.email,
      mobile: formFields.phone,
      wallet: formFields.wallet,
      userName: formFields.userName,
      PayerName: props.data.bulkBill.PayerName,
      // paymentRef: txRef,
      ParentGUid: props.data.bulkBill.ParentGUid,
      TotalDue: props.data.TotalAmount,
      amountPaid: amountToPay,
      serviceCharge
    });
  }

  const isAmountEditable = false;

  const updateOTPValue = (e: string) => {
    setUserOTPValue(e);
  }

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
    // location.href = `${getBaseUrl()}/payment/collection`;
    location.href = `${getBaseUrl()}/payment/harmonize`;
    // router.replace(`${BASE_URL}/payment/collection`)
  }

  return (
    <div className="flex flex-col py-10">
      <Spin spinning={loadingData}>
        {
          displayPaymentContent ?
            <div>
              <h1 className="font-bold text-2xl text-center">Revenue Collection</h1>
              <form onSubmit={onSubmit} className="flex flex-col gap-10">
                {props.data.bulkBill.Webguid.map((item, index) => {
                  return (
                    <div
                      key={item.webguid}
                      className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3"
                    >
                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Billing Reference *</p>
                        <TextInput
                          disabled
                          value={formFields.tx_reference}
                          placeholder=""
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Agency Code *</p>
                        <TextInput disabled value={item.AgencyCode} placeholder="" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Amount Due *</p>
                        <TextInput disabled value={item.AmountDue} placeholder="" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="font-medium">{`Payer's Name *`}</p>
                        <TextInput
                          disabled
                          value={props.data.bulkBill.PayerName}
                          placeholder=""
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Rev Code *</p>
                        <TextInput disabled value={item.RevenueCode} placeholder="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Agency Name</p>
                        <TextInput disabled value={item.AgencyName} placeholder="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Revenue Name</p>
                        <TextInput disabled value={item.RevName} placeholder="" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Amount *</p>
                        <TextInput
                          inputMode="numeric"
                          disabled
                          value={item.AmountDue}
                          placeholder="Enter your amount"
                        />
                      </div>
                      {
                        index + 1 === props.data.bulkBill.Webguid.length ?
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                              <p className="font-medium">Total Amount</p>
                              <p className="text-sm text-green-500">
                              </p>
                            </div>
                            <TextInput disabled defaultValue={props.data.TotalAmount} />
                          </div>
                          : ""}
                    </div>
                  );
                })}
              </form>

              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Phone Number *</p>
                  <TextInput
                    onChange={(event) =>
                      setFormFields((value) => ({
                        ...value,
                        phone: event.target.value,
                      }))
                    }
                    inputMode="tel"
                    autoComplete="tel"
                    defaultValue={formFields.phone}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-medium">Email *</p>
                  <TextInput
                    onChange={(event) =>
                      setFormFields((value) => ({
                        ...value,
                        email: event.target.value,
                      }))
                    }
                    inputMode="email"
                    autoComplete="email"
                    defaultValue={formFields.email}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Amount to Pay</p>
                  </div>
                  <TextInput type="number" onChange={(event) => setAmountToPay(event.target.value)} defaultValue={amount} />
                  {/* <ul className="flex flex-col gap-2">
                    <li className="text-sm text-green-500">
                      Service charge: #{serviceCharge.toFixed(2)}
                    </li>
                    <li className="text-sm text-green-500">
                      Stamp duty: #{stampDuty} (applies only to online transactions)
                    </li>
                  </ul> */}
                </div>
              </div>

              <div className="flex gap-4 flex-col-reverse md:gap-8 md:flex-row justify-center mt-10">
                <Button
                  type="button"
                  disabled={isLoading}
                  onClick={toggleWalletModal}
                  className="w-60 h-12 mt-8 self-center"
                  variant="outlined"
                >
                  {isLoading ? `Please wait...` : `Pay With Wallet Balance`}
                </Button>
                <Button
                  disabled={isLoading}
                  onClick={submitForm}
                  className="w-60 h-12 mt-8 self-center"
                  variant="contained"
                >
                  {isLoading ? `Please wait...` : `Online Payment`}
                </Button>
              </div>
              <div className="w-max mx-auto mt-10">
                <Button
                  disabled={isLoading}
                  onClick={handleClose}
                  className="flex-1 h-full rounded-md w-60 md:w-auto py-2 px-10 border-2 text-[#ff0000] border-[#ff0000] border-solid"
                  variant="outlined"
                >
                  Close Payment
                </Button>
              </div>
            </div>
            :
            <div>
              {/* {harmonizeNotificationData.Receipts.map((receipt, index) => ( */}
              {/* {walletReceiptBox.map((receipt: string, index: number) => ( */}
              <div className="space-y-10">
                <GenerateReceipt
                  // isMultiple={
                  //   index !== walletReceiptBox - 1
                  // }
                  multipleDisplayDownloadLink={walletReceiptBox.length ? true : false}
                  multipleDownloadLinks={walletReceiptBox}
                  data={{
                    amount: String(formFields.wallet ? +amountToPay + +serviceCharge : totalAmountToPay),
                    // url: receipt,
                    billingReference: data?.paymentRef ? data?.paymentRef : "",
                    paymentTime: new Date().toString(),
                    senderName: props.data.bulkBill.PayerName
                  }}
                />
                <Divider className="w-full h-[1px] bg-gray-200" />
              </div>
              {/* ))} */}
            </div>
        }
        <Modal footer={null} open={payWithWalletModal} onClose={closeWalletModal}>
          <div>
            <div className="modal-header">
              <div className="flex justify-between items-center border-b-[#DDDDDD] border-b py-5 px-5 pb-2">
                <div>
                  <h4 className="text-xl font-bold">Pay with Wallet Balance</h4>
                </div>
                <div>
                  <div onClick={closeWalletModal} className="cursor-pointer flex items-center justify-center w-[30px] h-[30px] border-danger rounded-full border border-2">
                    <div className="">
                      <div>
                        <FaXmark className="text-xl text-danger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 pb-10 pt-10">
              {
                !collectUserOTP ?
                  <div>
                    <div className="flex flex-col">
                      <div>
                        <p className="font-medium">Agent Username *</p>
                        <div className="flex gap-2">
                          <div className="">
                            <TextInput
                              onChange={(event) =>
                                setFormFields((value) => ({
                                  ...value,
                                  userName: event.target.value,
                                }))
                              }
                              className="py-7 outline-none"
                              inputMode="text"
                              value={formFields.userName}
                              // autoComplete="email"
                              defaultValue={formFields.userName}
                              placeholder="Enter your username"
                            />
                          </div>
                          <div
                            onClick={() => {
                              setFormFields((value) => ({
                                ...value,
                                userName: ""
                              }))
                            }}
                            className="flex items-center cursor-pointer justify-center border-[#E2E8F0] w-[100%] rounded-[8px] border border-solid">
                            <div className="">
                              <div>
                                <FaTrashCan className="text-xl" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        disabled={isLoading}
                        onClick={submitForm}
                        className="w-60 h-12 mt-10 self-center"
                        variant="contained"
                      >
                        {isLoading ? `Please wait...` : `Send OTP`}
                      </Button>
                    </div>
                  </div>
                  :
                  <div>
                    <div>
                      <h3 className="text-center text-xl font-bold">Hello {(payWithAgentDetail.firstName.slice(0, 1)).toUpperCase()}{(payWithAgentDetail.firstName.slice(1)).toLowerCase()}, your wallet balance is <span className="text-[14px]">NGN</span> {formatAmount(Number(payWithAgentDetail.wallet.availableBalance).toFixed(2))} and
                        your current bill payment is {formatAmount(Number(+amountToPay + +serviceCharge).toFixed(2))}</h3>
                    </div>
                    <div className="mt-10">
                      <p className="font-medium">Enter OTP</p>
                      <OTPInputBoxes updateOTP={updateOTPValue} />
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <Button
                          disabled={isWalletPaymentLoading}
                          onClick={completePayment}
                          className="w-60 h-12 mt-10 self-center"
                          variant="contained"
                        >
                          {isWalletPaymentLoading ? `Please wait...` : `Complete Payment`}
                        </Button>
                      </div>
                    </div>
                  </div>
              }
            </div>
          </div>
        </Modal >
      </Spin>
    </div >
  );
}
