import { Header } from '@/ui/header/components/header';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-green-dark max-h-dvh'>
      <Header />
      <main className='rounded-t-[40px] bg-gray-lighter h-full'>
        {children}
      </main>
    </div>
  );
}
