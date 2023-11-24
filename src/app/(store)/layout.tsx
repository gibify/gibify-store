import { Header } from "@/components/header"

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[min-content_max-content] gap-5 p-5">
      <Header />
      {children}
    </div>
  )
}