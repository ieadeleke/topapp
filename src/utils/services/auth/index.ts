import request from "@/utils/requests";
import { ActivatePasswordParams, ChangePasswordParams, ConfirmResetPasswordParams, LoginParams, LoginResponseParams, ResetPasswordParams, SignUpParams, SignUpResponseParams, VerifySignUpParams } from "./types"
import { ApiResponse } from "@/models"


export function AuthService() {

    async function login(params: LoginParams) {
        const response = await request({
            url: `v1/auth/login`,
            method: "POST",
            data: params
        })
        return response
    }

    async function activateAccount(params: ActivatePasswordParams) {
        const response = await request({
            url: `v1/auth/activateuser`,
            method: "POST",
            data: params
        })
        return response
    }

    async function signup(params: SignUpParams) {
        const response = await request({
            url: `v1/auth/signup`,
            method: "POST",
            data: params
        })
        return response;
    }

    async function resetPassword(params: ResetPasswordParams) {
        const response = await request({
            url: `v1/auth/ResetPassword`,
            method: "PUT",
            data: params
        })
        return response
    }

    async function changePassword(params: ChangePasswordParams) {
        const response = await request({
            url: `v1/auth/ChangePassword`,
            method: "PUT",
            data: params
        })
        return response
    }

    async function confirmResetPassword(params: ConfirmResetPasswordParams) {
        const response = await request({
            url: `v1/auth/ConfirmResetPassword`,
            method: "PUT",
            data: params
        })
        return response
    }

    return {
        login,
        resetPassword,
        confirmResetPassword,
        changePassword,
        signup,
        activateAccount
    }
}