import { Profile } from "@/models/profile"

export type UpdateProfileParams = {
    firstName: string,
    lastName: string,
    email?: string
}

export type UpdateBusinessProfileParams = {
    businessName: string;
    email: string;
    directorNIN: string;
    directorDOB: string;
    directorBVN: string;
    phoneNumber: string;
    CACReg: string;
    address: string
}

export type UpdateBusinessProfileResponse = {
    MerchantProfile: Profile
}
export type UpdateProfileResponse = {
    profile: Profile
}

export type FetchProfileResponse = {
    message: string,
    status: string,
    user: Profile
}

export type ActivateWalletParams = {
    bvn: string,
    phoneNumber: string,
    email: string,
    address: string,
    dateOfBirth: string
}

export type BillInfoParams = {
    biller_code: string;
}

export type BillCustomerInfoParams = {
    biller_code: string;
    customer: string;
    item_code: string;
}

export type BillPaymentParams = {

    description: string,
    biller_code: string,
    billName: string,
    item_code: string,
    transactionData: {
        key: string
    },
    amount: number,
    customer: string
}

export type BillPaymentResponse = {
    status: string
    settings: any,
    Transaction: any
}

export type AvailableBillResponse = {
    Bills: {
        data: [],
        message: string,
        status: string
    }
}

export type AvailableBillCustomerResponse = {
    message?: string,
    Detail?: {
        status?: string,
        data?: any
    }
}

export type ActivateWalletResponse = {
    message?: string,
    status?: string,
    Wallet?: any
}

export type RefreshAgentWalletParams = {
    providerCustomerId: string
}

export type RefreshAgentWalletResponse = {
    message?: string,
    status?: string,
    updateResult?: any
}

export type SetAgentPinParams = {
    pin: string
}

export type SetAgentPinResponse = {
    message?: string,
    status?: string,
    profile?: any,
    BillCustomerInfoParams
}

RefreshAgentWalletResponse