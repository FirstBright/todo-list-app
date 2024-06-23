//_app.tsx가 없어서 tailwind가 적용안되던 현상 수정, @경로가 전체폴더라 src추가
import "@/src/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
