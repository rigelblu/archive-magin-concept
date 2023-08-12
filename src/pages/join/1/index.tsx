// Copyright rigélblu inc. All rights reserve
import { useRouter } from 'next/router';
import AppView from '@/components/Views/AppView';
import { CTAButton, CTARole, Link } from '@/components/BaseComponents';
import NavBar from '@/components/NavBar';
import featureFlag, { FeatureFlagEnv } from '@/config/featureFlags';
import getEnv from '@/lib/env';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

// REFACTOR: move into a helper function
const stripePaymentUrl = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_URL || '/error';

export default function JoinMagin() {
  const router = useRouter();
  const env = getEnv() as keyof FeatureFlagEnv;
  const enablePay =
    typeof featureFlag.join.enablePay === 'object' ? featureFlag.join.enablePay[env] : false;

  const appContent = (
    <div className='flex flex-1 items-center text-center'>
      <div className='w-full'>
        {/* eslint-disable-next-line react/no-danger */}
        <h2 dangerouslySetInnerHTML={{ __html: t.join.step1_shapeFuture }} />
        <div className='text-lg font-bold'>{t.join.step1_become}</div>

        {/* Join */}
        <div className='mt-10 text-2xl font-bold'>
          <div className='mb-1 text-base'>{t.join.step1_planSponsor_name}</div>
          <div className='mb-1 text-blue-rb-600'>
            {t.join.step1_planSponsor_price}{' '}
            <span className='text-sm'>{t.join.step1_planSponsor_currencyUSD}</span>
          </div>
        </div>
        <CTAButton
          role={CTARole.Primary}
          onClick={() => {
            if (enablePay) window.location.href = stripePaymentUrl;
          }}
          className='m-1 text-lg'
          disabled={!enablePay}
          tooltip={!enablePay ? t.general.comingSoon : ''}
          tooltipOptions={{ position: 'bottom', showOnDisabled: true }}
        >
          {t.join.step1_join}
        </CTAButton>

        {/* What you get */}
        <div className='mx-5 mt-3 flex justify-center'>
          <div className='text-left text-sm'>
            <p>{t.join.step1_planSponsor_whatYouGet}</p>
            <ul className='m-0'>
              <li className='pt-0'>{t.join.step1_planSponsor_whatYouGet1}</li>
              <li className='pt-0'>{t.join.step1_planSponsor_whatYouGet2}</li>
              <li className='pt-0'>{t.join.step1_planSponsor_whatYouGet3}</li>
              <li className='pt-0'>{t.join.step1_planSponsor_whatYouGet4}</li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        {featureFlag.join.termsPrivacy && (
          <div className='mt-3'>
            <Link href='/terms' className='text-sm' openInNewWindow>
              {t.about.termsConditions}
            </Link>
            &nbsp;|&nbsp;
            <Link href='/privacy' className='text-sm' openInNewWindow>
              {t.about.privacy}
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  const appNavBar = (
    <NavBar
      items={[
        {
          id: t.navigation.returnHome,
          label: t.navigation.returnHome,
          ctaRole: CTARole.Secondary,
          onClick: () => {
            router.push('/');
          },
        },
      ]}
    />
  );

  return <AppView appContent={appContent} appNavBar={appNavBar} />;
}
