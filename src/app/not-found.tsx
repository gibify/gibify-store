import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto mt-10 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12">
      <h2 className="text-xl font-bold text-black">Oh no!</h2>
      <p className="my-2 text-black">Houve um problema ao carregar essa Página!</p>
      <Link
        href="/"
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full border border-black p-4 tracking-wide text-black hover:opacity-90"
      >
        Acessar a Home
      </Link>
    </div>
  )
}
