const SupportBanner = ({ openModal }) => {

  return (
    <section className="supportBanner_zIVc" id="contact-support">
      <div aria-hidden="true" className="bgLayer_hD6r">
        <svg
          className="bgShape_hLry"
          fill="none"
          height="900"
          viewBox="0 0 1501 900"
          width="1501"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M444.435 342.111H257.357v310.074h187.078z" fill="currentColor" />
          <path
            d="M444.132 0H0v467.286h444.132zM630.998 155.036l-186.556 186.56v186.561h186.556l186.566-186.561v-186.56zM818.454 526.878 631.898 713.439V900h186.556l186.566-186.561V526.878zM568.472 528.157l-124.03 122.996V528.157z"
            fill="currentColor"
          />
          <path
            d="M812.63 342.115H403.456L128.401 0h410.31zM1500.53 280.052h-496.02v372.612h496.02z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="inner_yrPn">
        <div className="left_dLhw">
          <h2 className="title_WRNf">Still stuck?</h2>
          <p className="subtitle_kGwm">
            Visit our community forums to connect with other MetaMask users for tips and troubleshooting.
          </p>
        </div>
        <div className="right_tyv3">
          <ul className="supportList_Dm_h">
            <li className="card-item_uRrQ">
              <div className="cut-off-corners_XeOP top-left_okw5 bottom-right_dsEI medium_JsSc step-2_kLYr">
                <div className="card-inner_ncnP">
                  <svg
                    className="shape_ALuu"
                    fill="none"
                    height="336"
                    preserveAspectRatio="none"
                    viewBox="0 0 336 336"
                    width="336"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M321.398 66.53 164-90h157.398z" fill="currentColor" />
                    <path d="M476.399 155.529H319V-1h157.399z" fill="currentColor" />
                  </svg>
                  <div>
                    <svg className="card-icon_w5qd" fill="none" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg">
                      <path
                        clipRule="evenodd"
                        d="M3.496.677h2.866l.618 1.999h1.95l.91 2.692L8.2 6.62l.634 2.056-2.343 1.635L4.929 9.12l-1.561 1.193-2.344-1.635.635-2.056L.02 5.368l.91-2.692h1.95zm1.433.443.944 3.056H8.93L6.457 6.064l.944 3.056L4.93 7.232 2.457 9.12l.944-3.056L.93 4.176h3.056z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </svg>
                    <h3 className="card-title_Nh3u">Contact support</h3>
                    <p className="card-desc_e8vz type-paragraph-m">
                      Get in touch for more help. Connect your wallet for faster, personalized support based on your
                      public wallet details and your MetaMask usage.
                    </p>
                  </div>
                  <div className="stackButtons_CEe6">
                    <div className="buttonWrapper_jKAe">
                      <button
                        aria-label="Connect wallet"
                        className="button_YtCf fullWidth_hdWb text-decoration-none secondary_XCaW"
                        type="button"
                        onClick={openModal}
                      >
                        <span className="button-holder_dg49">
                          <span className="button-main_hKRh">
                            <span className="label_d0zu font-primary font-weight-medium uppercase">Connect wallet</span>
                          </span>
                          <span aria-hidden="true" className="button-hover_WIx1">
                            <span className="label_d0zu font-primary font-weight-medium uppercase">Connect wallet</span>
                          </span>
                        </span>
                      </button>
                      <span className="recommendedTag_nc14">Recommended</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
