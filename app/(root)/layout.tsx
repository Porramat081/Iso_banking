export default function SubLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {/* Sidebar */}
      {children}
    </main>
  );
}
