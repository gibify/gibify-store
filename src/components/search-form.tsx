'use client'
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q');


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q

    if (!query)
    {
      return;
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-sm w-full items-center gap-3 rounded-full px-5 py-3 dark:bg-zinc-900 bg-zinc-100 ring-zinc-50 dark:ring-zinc-700 text-zinc-500"
    >
      <Search className="w-5 h-5 " />
      <input
        name="q"
        defaultValue={query ?? ''}
        type="text"
        placeholder="Buscar Produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}