import { Profile } from "@/models/profile"
import { ApiResponse } from "../../types"

export type SignUpParams = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string
}

export type VerifySignUpParams = {
    email: string,
    activationCode: string
}

export type LoginParams = {
    identifier: string,
    password: string
}

export type LoginResponseParams = {
    message: string,
    profile: any,
    token: string
}

export type ActivatePasswordParams = {
    receivedChannel: string | null,
    activationCode: string
}

export type ActivatePasswordResponseParams = {
    message: string,
    status: string,
    token: string
}

export type ResetPasswordParams = {
    receivedChannel: string
}

export type ChangePasswordParams = {
    oldPassword: string,
    newPassword: string
}

export type ConfirmResetPasswordParams = {
    receivedChannel: string,
    activationCode: string,
    newPassword: string
}

export type SignUpResponseParams = ApiResponse & {
    status: string?;
    message: string?;
}

export type LoginResponseParams = ApiResponse & {
    profile: Profile,
    token: string
}