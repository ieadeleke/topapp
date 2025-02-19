'use server'

import { cookies } from 'next/headers'

export const deleteAccessToken = async () => {
    (await cookies()).delete('accessToken')
}
