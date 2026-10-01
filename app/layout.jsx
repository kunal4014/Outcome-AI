import "./globals.css";

export const metadata = {
  title: "OUTCOME AI",
  description: "Super Intelligence AI Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
