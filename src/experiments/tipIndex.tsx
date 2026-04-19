import Tiptap from '@/components/ui/Tiptap'
import Head from 'next/head'

export default function TipIndex() {
    return (
        <>
            <Head>
                <title>TipTap Editor | Bahaa Najjar</title>
                <meta name='description' content='Rich text editor powered by TipTap' />
            </Head>
            <div className="min-h-screen bg-background text-foreground p-8">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-8 uppercase tracking-tight font-mono">
                        [ TipTap Editor ]
                    </h1>
                    <div className="border-2 border-foreground bg-card p-6 rounded-none">
                        <Tiptap />
                    </div>
                </div>
            </div>
        </>
    )
}