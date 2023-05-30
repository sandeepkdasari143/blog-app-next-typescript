import './globals.css'

export const metadata = {
  title: 'Blogging Application',
  description: 'Feel Free to write something ehich interests you :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
