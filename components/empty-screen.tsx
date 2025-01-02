import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold text-white">
          Welcome to Escape Stock Analysis Bot!
        </h1>
        <p className="leading-normal text-sm text-white">
          Your go-to tool for exploring stock market insights with ease. Powered by advanced AI capabilities for seamless analysis and updates.
        </p>
      </div>
    </div>
  )
}
