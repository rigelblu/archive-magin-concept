// Copyright rigélblu inc.
// All rights reserved.
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function TryMagin() {
  const router = useRouter();

  useEffect(() => {
    router.push('/try-magin/1');
  }, [router]);
}
