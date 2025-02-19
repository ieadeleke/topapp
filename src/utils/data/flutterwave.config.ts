export const config = {
    public_key: "FLWPUBK-1e1d43067051e4c48eb73148feb26c4a-X",
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
        email: "user@gmail.com",
        phone_number: "070********",
        name: "john doe",
    },
    customizations: {
        title: "My store",
        description: "Payment for items in cart",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Lagos_Seal.png",
    },
};

// export const FLUTTERWAVE_TEST_KEY = "FLWPUBK_TEST-c790994c4d69983890677a5f380162dc-X"
export const FLUTTERWAVE_TEST_KEY = "FLWPUBK_TEST-086bad0df8991ac589157f1f67aa1352-X";
export const FLUTTERWAVE_LIVE_KEY = "FLWPUBK-1e1d43067051e4c48eb73148feb26c4a-X"