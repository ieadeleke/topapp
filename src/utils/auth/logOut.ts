'use server'

import { redirect } from "next/navigation";
import { clearAccessToken } from "./cookies"

export default async function logOut() {
    clearAccessToken();
    return redirect("/login")
}