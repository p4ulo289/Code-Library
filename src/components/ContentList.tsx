import Card from "./Card"
import type { Content } from "./Card"

export const contents: Content[] = [
    { id: 1, title: "Introdução ao React", category: "React", duration: "45 min" },
    { id: 2, title: "Hooks na prática", category: "React", duration: "1h 10min", premium: true },
    { id: 3, title: "TypeScript do zero", category: "TypeScript", duration: "1h 30min" },
    { id: 4, title: "Tailwind CSS essencial", category: "CSS", duration: "50 min" },
    { id: 5, title: "Layouts com Flexbox", category: "CSS", duration: "35 min" },
    { id: 6, title: "JavaScript moderno", category: "JavaScript", duration: "1h 05min", premium: true },
    { id: 7, title: "Consumindo APIs", category: "JavaScript", duration: "55 min" },
    { id: 8, title: "Vite e organização de projetos", category: "Ferramentas", duration: "30 min" },
]

type ContentListProps = {
    search: string
}

function ContentList ({ search }: ContentListProps) {
    const term = search.trim().toLowerCase()

    const filtered = contents.filter((content) =>
        content.title.toLowerCase().includes(term) ||
        content.category.toLowerCase().includes(term)
    )

    if (filtered.length === 0) {
        return <p className="text-center text-[#00A2F7] mt-8">Nenhum conteúdo encontrado.</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {filtered.map((content) => (
                <Card key={content.id} content={content} />
            ))}
        </div>
    )
}

export default ContentList
