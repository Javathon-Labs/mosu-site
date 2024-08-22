import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground pt-20">
            <h1 className="text-6xl font-bold text-primary">Lost huh?</h1>
            <h2 className="mt-4 text-2xl font-semibold">Dont worry, i feel your pain 🙏</h2>
            <p className="mt-2 text-muted-foreground">Since your lost, You should go home ⬇️</p>
            <Link
                href="/"
                className="mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
                Go back home
            </Link>
        </div>
    )
}