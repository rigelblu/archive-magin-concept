// Copyright rigélblu inc. All rights reserved.

// OPTIMIZE: read based on language
const locale = {
  book: {
    title: 'Project Hail Mary',
  },
  controls: {
    current: 'Current Scene',
    scene: 'Scene',
    prev: 'Previous Scene',
    next: 'Next Scene',
  },
  film: {
    scene: 'SCENE',
    currentScene: 'Current Scene',
  },
  general: {
    magin: 'magin',
    tagline: 'bringing stories to life',
    taglineBrowser: 'magin | bringing stories to life',
    tryMagin: 'Try magin',
    comingSoon: 'coming soon',
  },
  guide: {
    tryMagin1_maginPresents: 'magin presents',
    tryMagin1_watchNovel: 'Watch Novel',
    tryMagin2a_guidedMessages: [
      'read the scene',
      'and now imagine',
      "you're in a movie theater",
      'you hear the character say ⤴',
      'what would it look like',
      'on the movie screen?',
    ],
    tryMagin_skipAnimation: 'skip animation',
    tryMagin2a_showMe: 'Show Me',
    tryMagin2b_guidedMessage: 'a director might imagine it as',
    tryMagin2b_nextScene: 'Next Scene',
    tryMagin3a_guidedMessages: [
      'the blue line indicates the current scene',
      "when you're ready",
      'to watch the next scene',
      'tap the arrow on the right',
    ],
    tryMagin3a_nextScene: 'Next Scene',
  },
  join: {
    step1_shapeFuture: "shape <span class='text-blue-rb-600'>magin's</span> future",
    step1_become: 'become an',
    step1_planSponsor_name: 'early access sponsor',
    step1_planSponsor_price: '$5',
    step1_planSponsor_currencyUSD: 'USD',
    step1_planSponsor_whatYouGet: 'You get:',
    step1_planSponsor_whatYouGet1: 'One time purchase ー no subscriptions',
    step1_planSponsor_whatYouGet2: 'Free updates for 2 years',
    step1_planSponsor_whatYouGet3: 'Voice in what we add next',
    step1_planSponsor_whatYouGet4: 'Shape the design and experience',
    step1_join: 'Join',
    step2_header: 'Welcome to <span class="text-blue-rb-600">magin</span>!',
    step2_body:
      // eslint-disable-next-line no-multi-str
      " \
      <p>Thank you for being an early access sponsor!</p> \
      <p>We'll send you a welcome email with instructions on how to access your early access within two hours.</p> \
      \
      <p class='mb-0'>As a reminder, you get</p> \
      <ul> \
        <li class='pt-0'>One time purchase ー no subscriptions</li> \
        <li class='pt-0'>Free updates for <strong>two</strong> years</li> \
        <li class='pt-0'>Voice in what we add next</li> \
        <li class='pt-0'>Shape the design and experience</li> \
      </ul> \
      <br /> \
      \
      <p class='mb-0'>Each week we'll launch</p> \
      <ul> \
        <li>One feature from our users - based on your feedback and insights</li> \
        <li>One feature from our vision for magin</li> \
      </ul> \
      <br /> \
      <p>Access the early access version of magin at <a style='color: #0080ff' href='https://ea.magin.blue'>https://ea.magin.blue</a> with your email address.</p> \
      <p>Sincerely,<br /> \
      Tom Hosiawa <br /> \
      magin Founder & CEO</p>",
  },
  navigation: {
    back: 'Back',
    next: 'Next',
    returnHome: 'Return Home',
  },
  about: {
    privacy: 'Privacy',
    termsConditions: 'Terms & Conditions',
  },
} as const;

type LocaleType = typeof locale;

export default locale;
export type { LocaleType };
