// Copyright rigélblu inc.
// All rights reserved.
import MainLayout from '@/src/layouts/MainLayout';
import Home from './home';

export default function PageRoot() {
  return (
    <MainLayout showHeader={false} showFooter={false}>
      <main>
        <Home />
      </main>
    </MainLayout>
  );
}
