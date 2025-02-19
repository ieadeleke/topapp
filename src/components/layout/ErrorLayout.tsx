'use client'

import { Layout } from "."
import Error from "../network/Error"

type ErrorLayoutProps = {
    message?: string
}

export const ErrorLayout = (props: ErrorLayoutProps) => {
    return <Layout>
        <div className="">
            <Error message={props.message} />
        </div>
    </Layout>
}