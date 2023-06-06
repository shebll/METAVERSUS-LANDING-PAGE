import '../styles/globals.css'

export const metadata = {
  title: 'Metaversus',
  description: 'Metaversus modern landing page ',
  icon:'@public/favicon'

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
