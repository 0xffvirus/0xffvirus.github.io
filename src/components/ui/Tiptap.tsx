'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Editor } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Code from '@tiptap/extension-code'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Code],
        content: '<p><code>> Welcome to the TipTap Editor!</code></p><p><em>Start typing to see the magic happen...</em></p>',
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,

        // editorProps: {
        //     attributes: {
        //         class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none bg-card text-foreground p-4 border border-foreground/20 font-mono text-sm'
        //     }
        // }
    })

    return <EditorContent editor={editor} />
}

export default Tiptap