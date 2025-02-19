import { request } from "../../request";
import { HarmonizeReference, Reference } from "@/models/reference";
import {
  HarmonizedPaymentNotificationResponse,
  InitiateHarmonizedPaymentParams,
  InitiateHarmonizedPaymentResponse,
  InitiateMDAPaymentParams,
  InitiatePaymentWithUpperLinkParams,
  InitiatePaymentWithUpperLinkResponse,
  MDAPaymentNotificationParams,
  MakePaymentParams,
  MakePaymentResponse,
  PrintReceiptParams,
  UpperLinkPaymentNotificationParams,
  UpperLinkPaymentNotificationResponse,
  UpperLinkWalletPaymentNotificationParams,
  VerifyHarmonizeReferenceParams,
  VerifyMDAReferenceParams,
  VerifyReferenceParams,
} from "./types";

export function ChargeService() {
  async function verifyReference(payload: VerifyReferenceParams) {
    const data = await request({
      path: `v1/abc/ReferenceVerification`,
      body: payload,
      method: "POST",
    });
    return data as Reference;
  }

  async function verifyMDAReference(payload: VerifyMDAReferenceParams) {
    const data = await request({
      path: `v1/mda/ReferenceVerification`,
      body: payload,
      method: "PUT",
    });
    return data as Reference;
  }

  async function verifyHarmonizeReference(
    payload: VerifyHarmonizeReferenceParams
  ) {
    const data = await request({
      path: `v1/abc/HarmonizedReferenceVerification`,
      body: payload,
      method: "POST",
    });
    return data as HarmonizeReference;
  }

  async function makePayment(payload: MakePaymentParams) {
    const data = await request({
      path: `v1/abc/Payment`,
      body: payload,
      method: "POST",
    });
    return data as MakePaymentResponse;
  }

  async function printReceipt(payload: PrintReceiptParams) {
    const data = await request({
      path: `v1/abc/ReceiptReprint`,
      body: payload,
      method: "POST",
    });
    return data as Reference;
  }

  async function initiatePaymentWithUpperlink(
    payload: InitiatePaymentWithUpperLinkParams
  ) {
    const data = await request({
      path: `v1/abc/InitiateUpperLinkPayment`,
      body: payload,
      method: "POST",
    });
    return data as InitiatePaymentWithUpperLinkResponse;
  }

  async function initiateHarmonizedPayment(
    payload: InitiateHarmonizedPaymentParams
  ) {
    const data = await request({
      path: `v1/abc/HarmonizedInitiatePayment`,
      body: payload,
      method: "POST",
    });
    return data as InitiateHarmonizedPaymentResponse;
  }

  async function harmonizeFlutterwaveNotification(
    payload: UpperLinkPaymentNotificationParams
  ) {
    const data = await request({
      path: `v1/abc/HarmonizedFlutterwavePaymentNotification`,
      body: payload,
      method: "POST",
    });
    return data as HarmonizedPaymentNotificationResponse;
  }

  async function harmonizeWalletNotification(
    payload: UpperLinkWalletPaymentNotificationParams
  ) {
    const data = await request({
      path: `v1/abc/HarmonizedWalletPaymentNotification`,
      body: payload,
      method: "POST",
    });
    return data as HarmonizedPaymentNotificationResponse;
  }

  async function upperLinkNotification(
    payload: UpperLinkPaymentNotificationParams
  ) {
    const data = await request({
      path: `v1/abc/UpperLinkPaymentNotification`,
      body: payload,
      method: "POST",
    });
    return data as UpperLinkPaymentNotificationResponse;
  }

  async function initiatePaymentWithFlutterwave(
    payload: InitiatePaymentWithUpperLinkParams
  ) {
    const data = await request({
      path: `v1/abc/InitiateFlutterwave`,
      body: payload,
      method: "POST",
    });
    return data as InitiatePaymentWithUpperLinkResponse;
  }

  async function flutterwaveNotification(
    payload: UpperLinkPaymentNotificationParams
  ) {
    const data = await request({
      path: `v1/abc/FlutterwavePaymentNotification`,
      body: payload,
      method: "POST",
    });
    return data as UpperLinkPaymentNotificationResponse;
  }

  async function initiateMDAPayment(payload: InitiateMDAPaymentParams) {
    const data = await request({
      path: `v1/mda/InitiatePayment`,
      body: payload,
      method: "POST",
    });
    return data as InitiatePaymentWithUpperLinkResponse;
  }

  async function mdaPaymentNotification(payload: MDAPaymentNotificationParams) {
    const data = await request({
      path: `v1/mda/PaymentNotification`,
      body: payload,
      method: "POST",
    });
    return data as UpperLinkPaymentNotificationResponse;
  }

  return {
    verifyReference,
    makePayment,
    printReceipt,
    initiatePaymentWithUpperlink,
    upperLinkNotification,
    initiatePaymentWithFlutterwave,
    flutterwaveNotification,
    mdaPaymentNotification,
    initiateMDAPayment,
    verifyMDAReference,
    verifyHarmonizeReference,
    initiateHarmonizedPayment,
    harmonizeFlutterwaveNotification,
    harmonizeWalletNotification
  };
}
