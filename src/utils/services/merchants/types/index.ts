export type AddNewMerchantParams = {
    businessName: string;
    email: string;
    directorNIN: string;
    directorDOB: string;
    directorBVN: string;
    phoneNumber: string;
    CACReg: string;
    address: string
}

export type AddNewMerchantResponse = {
    message: string,
    status: string,
    MerchantProfile: {},
    profile: {}
}