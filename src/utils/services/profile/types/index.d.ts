import { Profile } from "@/models/profile"

export type UpdateProfileParams = {
    firstName: string,
    lastName: string,
    email?: string
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
    profile?: any
}

RefreshAgentWalletResponse