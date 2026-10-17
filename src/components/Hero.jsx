import Link from './Link.jsx'

const PILL_ICON_PATH =
  'M3.496.677h2.866l.618 1.999h1.95l.91 2.692L8.2 6.62l.634 2.056-2.343 1.635L4.929 9.12l-1.561 1.193-2.344-1.635.635-2.056L.02 5.368l.91-2.692h1.95zm1.433.443.944 3.056H8.93L6.457 6.064l.944 3.056L4.93 7.232 2.457 9.12l.944-3.056L.93 4.176h3.056z'

const QUICK_ARTICLES = [
  'Not enough gas',
  'Failed transaction',
  "Can't withdraw",
  'Tokens missing',
  'Forgot seed phrase',
  "Can't swap tokens",
]

const HERO_CARDS = [
  {
    title: 'Money Account',
    subtitle: 'Earn automatic APY with Money Account. Transfer mUSD now with no fees on eligible transactions.',
    style: {
      '--card-bg': 'var(--consumer-blue-dark)',
      '--card-bg-hover': 'var(--consumer-purple-light)',
      '--card-text': 'var(--general-white)',
      '--card-text-hover': 'var(--consumer-purple-dark)',
      '--card-shape': 'var(--consumer-blue)',
      '--card-shape-hover': 'var(--consumer-purple)',
      '--shape-x': '38px',
      '--shape-y': '30px',
      '--shape-scale': '1.4',
      '--shapeX': '38px',
      '--shapeY': '30px',
      '--shapeScale': '1.4',
    },
    shape: (
      <svg aria-hidden="true" className="bgShape_MS4u" focusable="false" viewBox="0 0 191.068 191.016">
        <path
          d="M19.573,152.999C5.748,134.368-.816,113.903.371,90.474,3.707,24.601,71.994-18.139,133.035,7.794c49.462,21.014,71.79,79.855,48.5,128.686-2.763,5.793-6.24,11.503-10.226,16.519l-8.017-31.493-.371.185-52.194,30.935h-30.571l-52.008-30.935-.558-.187-8.017,31.495ZM107.744,28.513h-24.606v13.045h-12.583l-13.525,13.501-.188.744.05,23.268,13.663,11.872h37.188v9.877h-50.889v19.94h26.004c.02,0,.28.26.28.28v12.952l24.606-.186v-13.045h12.769l13.476-13.549-.058-22.974-13.418-12.676h-37.375v-10.063h50.703v-19.94h-26.097v-13.045Z"
          fill="currentColor"
          opacity="1"
        />
        <path
          d="M162.921,121.691l.371-.185,8.017,31.493.1.737c-11.058,14.28-25.656,25.021-42.601,31.316l-15.841-11.088,49.954-52.273Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M28.148,121.691l49.957,52.18v.186l-16.031,10.809c-17.204-6.444-31.599-17.175-42.501-31.867l8.017-31.495.558.187Z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: 'Tokenized stocks and ETFs',
    subtitle: 'Learn about tokenized stocks and how to swap to 200+ tokenized assets directly in MetaMask.',
    style: {
      '--card-bg': 'var(--consumer-green-dark)',
      '--card-bg-hover': 'var(--consumer-orange-light)',
      '--card-text': 'var(--general-white)',
      '--card-text-hover': 'var(--consumer-orange-dark)',
      '--card-shape': 'var(--consumer-green)',
      '--card-shape-hover': 'var(--consumer-orange)',
      '--shape-x': '0px',
      '--shape-y': '0px',
      '--shape-scale': '1',
      '--shapeX': '0px',
      '--shapeY': '0px',
      '--shapeScale': '1',
    },
    shape: (
      <svg aria-hidden="true" className="bgShape_MS4u" focusable="false" viewBox="0 0 192.07 237.38">
        <path
          d="M0 237.38 L70.07 237.38 L70.07 166.88 L0 209.33 L0 237.38 Z M192.07 59.9 L142.65 0 L140.32 0 L140.18 0 L70.26 0 L70.26 166.6 L70.25 166.6 L70.26 166.61 L70.26 166.73 L70.36 166.73 L128.64 237.38 L140.29 237.38 L140.29 166.73 L140.32 166.73 L140.32 81.92 L192.07 81.92 L192.07 59.9 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'MetaMask Card',
    subtitle: 'Learn how to use your MetaMask Card for everyday purchases and cash withdrawals.',
    style: {
      '--card-bg': 'var(--consumer-purple-dark)',
      '--card-bg-hover': 'var(--consumer-blue-light)',
      '--card-text': 'var(--general-white)',
      '--card-text-hover': 'var(--consumer-blue-dark)',
      '--card-shape': 'var(--consumer-purple)',
      '--card-shape-hover': 'var(--consumer-blue)',
      '--shape-x': '0px',
      '--shape-y': '0px',
      '--shape-scale': '1',
      '--shapeX': '0px',
      '--shapeY': '0px',
      '--shapeScale': '1',
    },
    shape: (
      <svg aria-hidden="true" className="bgShape_MS4u" focusable="false" viewBox="0 0 209.34 237.38">
        <path
          d="M0 94.86 L69.82 52.56 L69.82 0 L0 0 Z M209.34 68.23 L209.33 68.22 L209.33 68.1 L209.23 68.1 L153.05 0 L139.55 0 L139.55 68.1 L139.52 68.1 L139.52 152.601 L69.852 152.601 L139.52 237.042 L139.52 237.38 L159.64 237.38 L209.33 237.38 L209.33 188.32 L209.33 68.23 L209.34 68.23 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function ArticlePill({ label, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button className="article-pill_aWiU" type="button" onClick={handleClick}>
      <div className="pill-icon_GDq6">
        <svg fill="none" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d={PILL_ICON_PATH} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span className="pill-text_pdL6">{label}</span>
    </button>
  )
}

function HeroCard({ title, subtitle, style, shape, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <article className="card_XSoD" style={style} tabIndex={0} onClick={handleClick}>
      {shape}
      <div className="cardInner_yfeU">
        <div className="content_l5TB">
          <h2 className="title_cUWK">{title}</h2>
          <p className="subtitle_R3p7">{subtitle}</p>
        </div>
        <Link className="ctaButton_Kf1z">
          <span aria-hidden="true" className="ctaIcon_uYFc">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 10 7">
              <path
                clipRule="evenodd"
                d="M-1.656 1.593L-.637.233l5.635 4.22 5.635-4.22 1.019 1.36-6.654 4.985z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className="ctaLabel_N8PI">Learn more</span>
        </Link>
      </div>
    </article>
  )
}

export default function Hero({ scrollToConnectWallet }) {
  return (
    <section className="cards_oG2r">
      <div className="cards-shape-holder_IRYV">
        <svg
          className="cards-shape_Jjl1 cards-shape-dark_Qbr_"
          fill="none"
          height="852"
          viewBox="0 0 1990 852"
          width="1990"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M1989.52 851.46V325.227h-529.16zM370.273 214.336V-.004H208.625v214.34zm884.717 314.229V319.908h157.4l157.4-156.529h-314.8v-.059h-157.4l.01.006H891.922v208.705h205.668v156.534zm0-208.647 157.4 156.529V319.918zm-153.2-.058h153.15l-153.15-152.311zm-419.735 52.171L524.664 215.51v-.008H367.266L209.867 372.031h472.188m-472.188.003h314.797L367.266 528.563H209.867zM839.454 215.5 944.386 6.795H629.589L524.656 215.5zM0 111.152l209.865 104.353v313.058L0 424.21zm682.062 417.411V372.034h367.258L891.927 528.557v.006H682.062m887.728-365.237V6.797h209.86v156.529z"
            fill="currentColor"
            fillRule="evenodd"
            opacity="0.4"
          />
        </svg>
      </div>
      <div className="container">
        <header className="header_fw3d home-hero-header">
          <div className="inner_t08v">
            <h1 className="title_spfF type-heading-l">ContactMetaMask</h1>
            <div className="search_UeR7">
              <div className="homepageSearchWrapper_Idj1 homepage-search">
                <div className="quick-articles-container_KQMX">
                  <div className="articles-grid_uFN2">
                    {QUICK_ARTICLES.map((label) => (
                      <ArticlePill key={label} label={label} onClick={scrollToConnectWallet} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section aria-label="Hero cards" className="section_9xv6">
          <div className="row_tL5n">
            {HERO_CARDS.map((card) => (
              <HeroCard key={card.title} {...card} onClick={scrollToConnectWallet} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
