import { request } from "@/utils/request"
import { ActivateWalletParams, ActivateWalletResponse, AvailableBillCustomerResponse, AvailableBillResponse, BillCustomerInfoParams, BillInfoParams, BillPaymentParams, BillPaymentResponse, FetchProfileResponse, RefreshAgentWalletParams, RefreshAgentWalletResponse, SetAgentPinParams, SetAgentPinResponse, UpdateBusinessProfileParams, UpdateBusinessProfileResponse, UpdateProfileParams, UpdateProfileResponse } from "./types"
import { ApiResponse } from "@/models"
import { Profile } from "@/models/profile"

export function ProfileService() {

    async function getUser() {
        const data = await request({
            path: `v1/auth/GetAuthProfile`,
            method: "GET"
        })
        return data as FetchProfileResponse;
    }

    async function activateWallet(params: ActivateWalletParams) {
        const data = await request({
            path: `v1/auth/ActivateUserWallet`,
            method: "POST",
            body: params
        })
        return data as ActivateWalletResponse;
    }

    async function fetchAvailableBills() {
        const data = await request({
            path: `v1/bills/AvailableBills`,
            method: "GET",
            body: ""
        })
        return data as AvailableBillResponse;
    }

    async function fetchBillInformation(params: BillInfoParams) {
        const data = await request({
            path: `v1/bills/GetBillInformation`,
            method: "PUT",
            body: params
        })
        return data as AvailableBillResponse;
    }

    async function fetchBillCustomerInformation(params: BillCustomerInfoParams) {
        const data = await request({
            path: `v1/bills/ValidateCustomerDetails`,
            method: "PUT",
            body: params
        })
        return data as AvailableBillCustomerResponse;
    }

    async function initiateCustomerBillPayment(params: BillPaymentParams) {
        const data = await request({
            path: `v1/bills/InitialBillPayment`,
            method: "POST",
            body: params
        })
        return data as BillPaymentResponse;
    }

    async function completeCustomerBillPayment(params: BillCustomerInfoParams) {
        const data = await request({
            path: `v1/bills/ValidateCustomerDetails`,
            method: "PUT",
            body: params
        })
        return data as AvailableBillCustomerResponse;
    }

    async function refreshAgentWallet(params: RefreshAgentWalletParams) {
        const data = await request({
            path: `v1/wallet/RefreshWallet`,
            method: "POST",
            body: params
        })
        return data as RefreshAgentWalletResponse;
    }

    async function setNewUserPin(params: SetAgentPinParams) {
        const data = await request({
            path: `v1/agent/SetWalletPin`,
            method: "POST",
            body: params
        })
        return data as SetAgentPinResponse;
    }

    async function updateProfile(params: UpdateProfileParams) {
        const formData = new FormData()
        formData.append("firstName", params.firstName);
        formData.append("lastName", params.lastName);
        // if (params.image) {
        //     formData.append('image', params.image)
        // }
        // Object.entries(params).forEach(([key, value]) => {
        //     if (key != 'image') {
        //         formData.append(key, value)
        //     }
        // })
        const response = await request({
            path: `v1/auth/UpdateProfile`,
            method: "PUT",
            body: params
        })
        return response as UpdateProfileResponse
    }

    async function updateBusinessProfile(params: UpdateBusinessProfileParams) {
        const response = await request({
            path: `v1/merchant/UpdateMerchant`,
            method: "PUT",
            body: params
        })
        return response as UpdateBusinessProfileResponse
    }

    return {
        getUser,
        updateProfile,
        activateWallet,
        refreshAgentWallet,
        setNewUserPin,
        fetchAvailableBills,
        updateBusinessProfile,
        fetchBillInformation,
        fetchBillCustomerInformation,
        initiateCustomerBillPayment
    }
}