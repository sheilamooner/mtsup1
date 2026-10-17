import Link from './Link.jsx'

const DROPDOWN_LINKS = ['Configure', 'Manage crypto', 'More web3', 'Stay safe']

export default function Header({ scrollToConnectWallet }) {
  return (
    <header className="header_U5zj navbar">
      <div className="header-main_L3Ht">
        <div className="main-nav_FrgA">
          <div className="background_xqxC"></div>
          <div className="container_gQEC container">
            <div className="holder_TnGS">
              <div className="header-logo-wrapper">
                <img src="/favicon.png" alt="ContactMetaMask" className="header-logo" />
              </div>
              <div className="horizontal-line-divider_KY2X"></div>
              <nav aria-label="main-navigation">
                <ul className="main-items_aaXk">
                  <li className="main-item_hgIX">
                    <Link className="main-item-link_V9Jw">Start</Link>
                  </li>
                  <li className="main-item_hgIX">
                    <div className="useDropdownContainer_nsrd">
                      <ul>
                        {DROPDOWN_LINKS.map((label) => (
                          <li key={label}>
                            <Link className="dropdownLink_TZMK text-decoration-none">{label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="main-item_hgIX"></li>
                </ul>
              </nav>
              <div className="btns-wrapper_Wn5F">
                <div className="btn-lang-wrapper_fQbr">
                  <div className="wrapper_e8Md">
                    <div className="dropdown_BjJu dropdown-two-cols_iE68">
                      <div className="holder_hG2t holder-static_ogrt"></div>
                    </div>
                  </div>
                </div>
                <button
                  aria-label="Contact support"
                  className="button_YtCf cta wallet-button_CvpX text-decoration-none primary_nDUu"
                  type="button"
                  onClick={scrollToConnectWallet}
                >
                  <span className="button-holder_dg49">
                    <span className="button-main_hKRh">
                      <span className="label_d0zu font-primary font-weight-medium uppercase">Contact support</span>
                    </span>
                    <span aria-hidden="true" className="button-hover_WIx1">
                      <span className="label_d0zu font-primary font-weight-medium uppercase">Contact support</span>
                    </span>
                  </span>
                </button>
              </div>
              <div className="hamburger-wrapper_wEZf">
                <button aria-label="menu-toggle" className="hamburger_MjnP" type="button">
                  <span className="hamburger-inner_glo6">
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="dropdown_Aoku font-mm-sans" id="Use" role="region">
            <div className="inner_Tzo0" id="dropdown-inner-id-Use" tabIndex={-1}>
              <div className="grid-wrapper_SE3H">
                <div className="grid-col-main_DNq2">
                  <nav aria-label="dropdown-navigation" className="left-nav-wrapper_xla_">
                    <ul className="cards-grid_CUQW"></ul>
                  </nav>
                </div>
                <div className="grid-col-right_qK0P">
                  <div>
                    <h3 className="heading-nav_oeZG"></h3>
                  </div>
                  <div>
                    <nav className="bottom-follow-wrapper_vt1F">
                      <h3 className="heading-nav-social_HbwU">Follow</h3>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
