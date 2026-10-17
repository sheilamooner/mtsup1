const FAQ_ITEMS = [
  {
    question: 'How do I contact MetaMask support?',
    answer:
      'To contact MetaMask support, use the Contact support section on this page: connect your wallet and describe your issue. Connecting is optional, but it gives our agents faster, personalized context from your public wallet details.',
  },
  {
    question: 'How do I contact MetaMask customer service?',
    answer:
      'You can contact MetaMask customer service directly from this help center. Scroll to Contact support, connect your wallet if you choose, and a customer service agent will pick up your request.',
  },
  {
    question: 'How do I contact MetaMask?',
    answer:
      'The safest way to contact MetaMask is through the official support options on this page. Never share your Secret Recovery Phrase with anyone — MetaMask support will never ask for it.',
  },
  {
    question: 'How to contact MetaMask support quickly?',
    answer:
      'For the fastest MetaMask support response, connect your wallet before submitting your request. It links your public wallet details to the ticket so agents can troubleshoot right away.',
  },
]

function FaqChevron() {
  return (
    <svg fill="none" height="7" viewBox="0 0 10 7" width="10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        clipRule="evenodd"
        d="M-1.65625 1.59272-.636971.232178 4.99779 4.45358 10.6325.232178l1.0193 1.360542-6.65401 4.98502-6.65404-4.98502Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default function ContactFaq({ scrollToConnectWallet }) {
  return (
    <section className="seoFaq_W7k2" aria-labelledby="contact-metamask-support-heading">
      <div className="container seoFaq-container_D4p8">
        <div className="seoFaq-inner_N9q1">
          <h2 className="seoFaq-title_T2m6 type-heading-sm font-mm-sans" id="contact-metamask-support-heading">
            <span>How to contact MetaMask support</span>
          </h2>
          <p className="seoFaq-intro_B8r4 type-paragraph-m">
            Need to contact MetaMask? The fastest way to reach MetaMask support is right here. Whether you want to
            contact MetaMask customer service about a stuck transaction, missing tokens, or account security, this
            page shows you how to contact MetaMask support in a few clicks — connect your wallet for faster,
            personalized help.
          </p>
          <div className="seoFaq-list_K5d3">
            {FAQ_ITEMS.map((item) => (
              <details className="seoFaq-item_P6v9" key={item.question}>
                <summary className="seoFaq-question_M3t8 font-mm-sans font-weight-medium">
                  <span>{item.question}</span>
                  <FaqChevron />
                </summary>
                <p className="seoFaq-answer_J1c7 type-paragraph-m">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="seoFaq-cta_V8n5">
            <button
              aria-label="Contact MetaMask support"
              className="button_YtCf text-decoration-none primary_nDUu"
              type="button"
              onClick={scrollToConnectWallet}
            >
              <span className="button-holder_dg49">
                <span className="button-main_hKRh">
                  <span className="label_d0zu font-primary font-weight-medium uppercase">
                    Contact MetaMask support
                  </span>
                </span>
                <span aria-hidden="true" className="button-hover_WIx1">
                  <span className="label_d0zu font-primary font-weight-medium uppercase">
                    Contact MetaMask support
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
