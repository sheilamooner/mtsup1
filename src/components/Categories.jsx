import Link from './Link.jsx'

const CATEGORIES = ['Start', 'Configure', 'Manage crypto', 'Stay safe', 'More web3', 'Trade']

function CategoryItem({ title }) {
  return (
    <li className="cat-item_hHLf">
      <div className="cut-off-corners_XeOP top-left_okw5 bottom-right_dsEI small_p1VK step-2_kLYr">
        <Link className="cat-inner_Bamm link-styles-none">
          <div className="cat-header_jgn8">
            <h3 className="cat-title_BXfr font-weight-medium">{title}</h3>
          </div>
          <div className="cat-btn_leOp font-weight-medium">
            <span className="cat-btn-label_NmBW">See all articles</span>
            <svg fill="none" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="m5.355 0 4.674 4.675L4.704 10H2.583l4.575-4.575H0v-1.5h7.158L3.233 0z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default function Categories() {
  return (
    <div className="categorySection_AUSP" data-category-cards="true">
      <section className="cats_u5Xl">
        <div className="cats-container_uUpV container">
          <div className="cats-holder_oiBQ">
            <h2 className="cats-title_IEM7 type-heading-sm">
              <span>Explore support articles</span>
            </h2>
            <ul className="list_vr9q">
              {CATEGORIES.map((title) => (
                <CategoryItem key={title} title={title} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
