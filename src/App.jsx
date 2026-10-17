import { useState } from 'react'
import CookieWidget from './components/CookieWidget.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import SupportBanner from './components/SupportBanner.jsx'
import ContactFaq from './components/ContactFaq.jsx'
import Footer from './components/Footer.jsx'
import WalletConnectionModal from './components/WalletConnectionModal.jsx'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const scrollToConnectWallet = () => {
    const element = document.getElementById('contact-support');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      {isModalOpen && <WalletConnectionModal onClose={closeModal} />}
      <CookieWidget />

      <svg style={{ display: 'none' }}>
        <defs>
          <symbol id="theme-svg-external-link" viewBox="0 0 24 24">
            <path
              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              fill="currentColor"
            />
          </symbol>
        </defs>
      </svg>

      <div id="__docusaurus">
        <div aria-label="Skip to main content" role="region">
          <a className="skipToContent_fXgn" href="#__docusaurus_skipToContent_fallback">
            Skip to main content
          </a>
        </div>
        <Header scrollToConnectWallet={scrollToConnectWallet} />
        <div className="theme-layout-main main-wrapper mainWrapper_z2l0" id="__docusaurus_skipToContent_fallback">
          <main className="homepage-main">
            <Hero scrollToConnectWallet={scrollToConnectWallet} />
            <Categories />
            <SupportBanner openModal={openModal} />
            <ContactFaq scrollToConnectWallet={scrollToConnectWallet} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
