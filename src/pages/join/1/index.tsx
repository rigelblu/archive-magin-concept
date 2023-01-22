// Copyright rigélblu inc.
// All rigts reserve
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';

import Navigation from '@/components/Navigation/Navigation';

// REFACTOR: read based on language
import Locale from '@/locales/en.json';

// REFACTOR: move into LocaleType.ts file
interface LocalePropType {
  [key: string]: string;
}
interface LocaleType {
  [key: string]: LocalePropType;
}

// REFACTOR: move into a helper function
const stripePaymentUrl = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_URL || '/error';

export default function JoinMagin() {
  const router = useRouter();
  const locale = Locale as LocaleType;

  return (
    <div className='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='mgn-step flex flex-column w-full h-full justify-content-between sm:max-w-24rem sm:max-h-50rem'>
          <div className='h-full flex align-items-center text-center'>
            <div>
              <h1>{locale.join.step1_wantMore}</h1>
              <h2>{locale.join.step1_shapeItsFuture}</h2>
              <p className='mt-20 text-left'>
                {locale.join.step1_whatYouGet}{' '}
                <ul>
                  <li>{locale.join.step1_whatYouGet1}</li>
                  <li>{locale.join.step1_whatYouGet2}</li>
                  <li>{locale.join.step1_whatYouGet3}</li>
                </ul>
              </p>
              <Button
                className='text-xl text-size-medium mgn-cta-primary m-1'
                onClick={() => {
                  window.location.href = stripePaymentUrl;
                }}
              >
                {locale.join.step1_join}
              </Button>
              <br />
              <Link className='text-sm' href='/terms-conditions'>
                {locale.about.termsConditions}
              </Link>
              &nbsp;|&nbsp;
              <Link className='text-sm' href='/privacy'>
                {locale.about.privacy}
              </Link>
            </div>
          </div>

          {/* REFACTOR: use next layout */}
          <Navigation
            left={{
              label: locale.navigation.back,
              onClick: () => {
                router.push('/try-magin/3');
              },
            }}
            right={{
              label: locale.join.step1_join,
              onClick: () => {
                window.location.href = stripePaymentUrl;
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
