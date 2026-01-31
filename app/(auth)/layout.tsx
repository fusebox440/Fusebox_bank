import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter">
      {children}
    </main>
  );
}
