'use server'

import { cookies } from 'next/headers'

export const deleteAccessToken = () => {
    cookies().delete('accessToken')
}
