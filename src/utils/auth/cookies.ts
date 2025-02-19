'use server'
import { cookies } from 'next/headers'

export const getCookes = async () => {
    console.log((await cookies()).getAll('name'))
}

export const saveAccessToken = async (accessToken: string) => {
    const time = Date.now() + (30 * 24 * 60 * 60 * 1000)
    ;(await cookies()).set('auth_token', accessToken, {
        expires: time
    })
}

export const getAccessToken = async () => {
    let asss = await cookies();
    console.log(asss);
    return (await cookies()).get('auth_token')?.value
}

export const clearAccessToken = async () => {
    return (await cookies()).delete('auth_token')
}