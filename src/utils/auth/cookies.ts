'use server'
import { cookies } from 'next/headers'

export const getCookes = async () => {
    console.log((await cookies()).getAll('name'))
}

export const saveAccessToken = async (accessToken: string) => {
    const time = Date.now() + (30 * 24 * 60 * 60 * 1000)
    ;(await cookies()).set('accessToken', accessToken, {
        expires: time
    })
}

export const getAccessToken = async () => {
    return (await cookies()).get('accessToken')?.value
}

export const clearAccessToken = async () => {
    return (await cookies()).delete('accessToken')
}