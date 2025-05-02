
import { auth } from '@/auth';
import AppShellDashboard from './appShell';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()
  console.log('session', session);

  return (
    <AppShellDashboard>
      {children}
    </AppShellDashboard>
  );
}