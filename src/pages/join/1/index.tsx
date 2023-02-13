// Copyright rigélblu inc.
// All rigts reserve
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';

import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';

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
  const flagIsJoinEnabled = true;

  return (
    <MainLayout className='mgn-try-magin' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen justify-center p-3'>
        <div className='mgn-step flex flex-1 flex-col justify-between bg-white sm:max-h-[50rem] sm:max-w-[24rem]'>
          <div className='flex flex-1 items-center text-center'>
            <div className='w-full'>
              <h1>{locale.join.step1_wantMore}</h1>
              <div className='text-lg font-bold'>
                {locale.join.step1_joinShape}{' '}
                <span className='text-blue-rb-600'>{locale.general.magin}&apos;s</span>{' '}
                {locale.join.step1_future}
              </div>

              {/* Join */}
              <div className='mt-10 text-2xl font-bold'>
                <div className='mb-1 text-base'>{locale.join.step1_planSponsor_name}</div>
                <div className='mb-1 text-blue-rb-600'>
                  {locale.join.step1_planSponsor_price}{' '}
                  <span className='text-sm'>{locale.join.step1_planSponsor_currencyUSD}</span>
                </div>
              </div>
              <Button
                className='mgn-cta-primary m-1 text-lg'
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

              {/* What you get */}
              <div className='mx-5  mt-3 flex justify-center'>
                <div className='text-left text-sm'>
                  <p>{locale.join.step1_planSponsor_whatYouGet}</p>
                  <ul className='m-0'>
                    <li>{locale.join.step1_planSponsor_whatYouGet1}</li>
                    <li>{locale.join.step1_planSponsor_whatYouGet2}</li>
                    <li>{locale.join.step1_planSponsor_whatYouGet3}</li>
                    <li>{locale.join.step1_planSponsor_whatYouGet4}</li>
                  </ul>
                </div>
              </div>

              {/* Legal */}
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
              label: locale.navigation.returnHome,
              onClick: () => {
                router.push('/');
              },
            }}
            className='justify-center '
          />
        </div>
      </div>
    </MainLayout>
  );
}
