import { useState } from 'react'
import Link from './Link.jsx'

function CloseIcon({ title }) {
  return (
    <svg height="20px" viewBox="0 0 20 20" width="20px">
      <title>{title}</title>
      <line role="presentation" x1="2" x2="18" y1="2" y2="18" />
      <line role="presentation" x1="2" x2="18" y1="18" y2="2" />
    </svg>
  )
}

export default function CookieWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="osano-cm-window" data-nosnippet="" dir="ltr">
      <div className="osano-visually-hidden" hidden>
        <span id="osano-cm-aria.newWindow">Opens in a new window</span>
        <span id="osano-cm-aria.external">Opens an external website</span>
        <span id="osano-cm-aria.externalNewWindow">Opens an external website in a new window</span>
      </div>

      <div
        aria-describedby="osano-cm-dialog__label"
        aria-label="Cookie Consent Banner"
        className={`osano-cm-window__dialog osano-cm-dialog osano-cm-dialog--position_bottom-left osano-cm-dialog--type_box${
          open ? '' : ' osano-cm-dialog--hidden'
        }`}
        id="osano-cm-dialog"
        role="dialog"
      >
        <button className="osano-cm-dialog__close osano-cm-close" type="button" onClick={() => setOpen(false)}>
          <CloseIcon title="Close this dialog" />
        </button>
        <div className="osano-cm-dialog__content osano-cm-content">
          <span className="osano-cm-content__message osano-cm-message" id="osano-cm-dialog__label">
            This website utilises technologies such as cookies to enable essential site functionality, as well as for
            analytics, personalisation, and marketing. To learn more, view the following link:
          </span>
          <Link
            aria-describedby="osano-cm-aria.newWindow"
            className="osano-cm-storage-policy osano-cm-content__link osano-cm-link"
            tabIndex={0}
          >
            Cookie Policy
          </Link>
          <span className="osano-cm-link-separator"></span>
          <Link
            aria-describedby="osano-cm-aria.newWindow"
            className="osano-cm-additional-link osano-cm-content__link osano-cm-link"
            tabIndex={0}
          >
            Privacy Policy
          </Link>
        </div>
        <div className="osano-cm-dialog__buttons osano-cm-buttons osano-cm-buttons--disabled">
          <button
            className="osano-cm-manage osano-cm-buttons__button osano-cm-button osano-cm-button--type_manage"
            tabIndex={0}
            type="button"
          >
            Manage Preferences
          </button>
        </div>
      </div>

      <button
        aria-label="Cookie Preferences"
        className="osano-cm-window__widget osano-cm-widget osano-cm-widget--position_left"
        id="osano-cm-widget"
        title="Cookie Preferences"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        <svg aria-labelledby="osano-cm-widget" height="40" role="img" viewBox="0 0 71.85 72.23" width="40" xmlns="http://www.w3.org/2000/svg">
          <path
            className="osano-cm-widget__outline osano-cm-outline"
            d="m67.6 36.73a6.26 6.26 0 0 1 -3.2-2.8 5.86 5.86 0 0 0 -5.2-3.1h-.3a11 11 0 0 1 -11.4-9.5 6 6 0 0 1 -.1-1.4 9.2 9.2 0 0 1 .4-2.9 8.65 8.65 0 0 0 .2-1.6 5.38 5.38 0 0 0 -1.9-4.3 7.3 7.3 0 0 1 -2.5-5.5 3.91 3.91 0 0 0 -3.5-3.9 36.46 36.46 0 0 0 -15 1.5 33.14 33.14 0 0 0 -22.1 22.7 35.62 35.62 0 0 0 -1.5 10.2 34.07 34.07 0 0 0 4.8 17.6.75.75 0 0 0 .07.12c.11.17 1.22 1.39 2.68 3-.36.47 5.18 6.16 5.65 6.52a34.62 34.62 0 0 0 55.6-21.9 4.38 4.38 0 0 0 -2.7-4.74z"
            strokeWidth="3"
          />
          <path
            className="osano-cm-widget__outline osano-cm-outline"
            d="m68 41.13a32.37 32.37 0 0 1 -52 20.5l-2-1.56c-2.5-3.28-5.62-7.15-5.81-7.44a32 32 0 0 1 -4.5-16.5 34.3 34.3 0 0 1 1.4-9.6 30.56 30.56 0 0 1 20.61-21.13 33.51 33.51 0 0 1 14.1-1.4 1.83 1.83 0 0 1 1.6 1.8 9.38 9.38 0 0 0 3.3 7.1 3.36 3.36 0 0 1 1.2 2.6 3.37 3.37 0 0 1 -.1 1 12.66 12.66 0 0 0 -.5 3.4 9.65 9.65 0 0 0 .1 1.7 13 13 0 0 0 10.5 11.2 16.05 16.05 0 0 0 3.1.2 3.84 3.84 0 0 1 3.5 2 10 10 0 0 0 4.1 3.83 2 2 0 0 1 1.4 2z"
            strokeWidth="3"
          />
          <g className="osano-cm-widget__dot osano-cm-dot">
            <path d="m26.6 31.43a5.4 5.4 0 1 1 5.4-5.43 5.38 5.38 0 0 1 -5.33 5.43z" />
            <path d="m25.2 53.13a5.4 5.4 0 1 1 5.4-5.4 5.44 5.44 0 0 1 -5.4 5.4z" />
            <path d="m47.9 52.33a5.4 5.4 0 1 1 5.4-5.4 5.32 5.32 0 0 1 -5.24 5.4z" />
          </g>
        </svg>
      </button>

      <div
        aria-labelledby="osano-cm-info-dialog__label"
        aria-modal="true"
        className="osano-cm-window__info-dialog osano-cm-info-dialog osano-cm-info-dialog--hidden"
        id="osano-cm-info-dialog"
        inert=""
        role="dialog"
      >
        <span aria-hidden="true" data-focus="first" tabIndex={0}></span>
        <div className="osano-cm-info-dialog__info osano-cm-info osano-cm-info--position_left" role="presentation">
          <div className="osano-cm-info__info-dialog-header osano-cm-info-dialog-header" role="presentation">
            <p
              aria-hidden="true"
              aria-level="1"
              className="osano-cm-info-dialog-header__header osano-cm-header"
              id="osano-cm-info-dialog__label"
              role="heading"
            >
              Storage Preferences
            </p>
            <button className="osano-cm-info-dialog-header__close osano-cm-close" type="button">
              <CloseIcon title="Close Cookie Preferences" />
            </button>
          </div>
          <div
            className="osano-cm-info__info-views osano-cm-info-views osano-cm-info-views--hidden osano-cm-info-views--position_0"
            role="presentation"
          ></div>
        </div>
        <span aria-hidden="true" data-focus="last" tabIndex={0}></span>
      </div>
    </div>
  )
}
