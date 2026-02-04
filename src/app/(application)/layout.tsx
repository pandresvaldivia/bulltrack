import { Header } from '@/ui/header/components/header';
import { Sidebar } from '@/ui/sidebar/components/sidebar';
import layoutStyles from '@/ui/application/styles/layout.module.css';
import { cn } from '@/modules/lib/shadcn/helpers/utils';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn('bg-green-dark h-dvh', layoutStyles.main)}>
      <Header className={layoutStyles.header} />
      <Sidebar className={layoutStyles.sidebar} />
      <main
        className={cn(
          'rounded-t-5xl bg-gray-lighter h-full text-gray-medium p-8',
          layoutStyles.content,
        )}
      >
        {children}
      </main>
    </div>
  );
}
