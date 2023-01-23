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

  // OPTIMIZE: external feature flags settings
  const flagIsJoinEnabled = false;

  return (
    <div className='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='mgn-step flex flex-column w-full h-full justify-content-between sm:max-w-24rem sm:max-h-50rem'>
          <div className='h-full flex align-items-center text-center'>
            <div className='w-full'>
              <h1>{locale.join.step1_wantMore}</h1>
              <h2>{locale.join.step1_shapeItsFuture}</h2>
              <div className='flex justify-content-center mt-20'>
                <div className='text-left max-w-min whitespace-nowrap'>
                  <p>{locale.join.step1_whatYouGet}</p>
                  <ul>
                    <li>{locale.join.step1_whatYouGet1}</li>
                    <li>{locale.join.step1_whatYouGet2}</li>
                    <li>{locale.join.step1_whatYouGet3}</li>
                  </ul>
                </div>
              </div>
              <Button
                className='text-xl text-size-medium mgn-cta-primary m-1'
                onClick={() => {
                  if (flagIsJoinEnabled) {
                  window.location.href = stripePaymentUrl;
                  }
                }}
                tooltip={locale.general.comingSoon}
                tooltipOptions={{ position: 'bottom' }}
              >
                {locale.join.step1_join}
              </Button>
              {flagIsJoinEnabled && (
                <div className='mt-3'>
              <Link className='text-sm' href='/terms-conditions'>
                {locale.about.termsConditions}
              </Link>
              &nbsp;|&nbsp;
              <Link className='text-sm' href='/privacy'>
                {locale.about.privacy}
              </Link>
                </div>
              )}
            </div>
          </div>

          {/* REFACTOR: use next layout */}
          <Navigation
            middle={{
              className: 'mgn-cta-secondary',
              label: locale.navigation.back,
              onClick: () => {
                router.push('/try-magin/3');
              },
            }}
            className='justify-content-center'
          />
        </div>
      </div>
    </div>
  );
}
