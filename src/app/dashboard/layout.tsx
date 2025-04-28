'use client'

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarSearch } from './navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <h1>Test Matrix</h1>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
       <NavbarSearch />
      </AppShell.Navbar>
      <AppShell.Main>

      {children}
      </AppShell.Main>
    </AppShell>
  );
}