import React from 'react'

const SideberRFeed = () => {
    return (
        <div
          className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px"
          data-kt-drawer="true"
          data-kt-drawer-name="end-sidebar"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'200px', '250px': '300px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_social_end_sidebar_toggle"
        >
          {/* Social widget 1 */}
          <div className="card mb-5 mb-xl-8">
            {/* Header */}
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">Recomendados</span>
                <span className="text-muted mt-1 fw-semibold fs-7">personas cercanas a ti  80 </span>
              </h3>
              {/* Toolbar */}
              <div className="card-toolbar">
                {/* Menu */}
                <button
                  className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-overflow="true"
                >
                  <i className="ki-duotone ki-dots-square fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </button>
             
              </div>
              {/* End Toolbar */}
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body pt-5">
              <div className="d-flex flex-stack">
                <div className="symbol symbol-40px me-5">
                  <img src="assets/media/avatars/300-11.jpg" className="h-50 align-self-center" alt="" />
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Jacob Jones</a>
                    <span className="text-muted fw-semibold d-block fs-7">Barone LLC.</span>
                  </div>
                  <a href="pages/user-profile/overview.html" className="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                </div>
              </div>
              <div className="separator separator-dashed my-4"></div>
              <div className="d-flex flex-stack">
                <div className="symbol symbol-40px me-5">
                  <img src="assets/media/avatars/300-2.jpg" className="h-50 align-self-center" alt="" />
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Annette Black</a>
                    <span className="text-muted fw-semibold d-block fs-7">Binford Ltd.</span>
                  </div>
                  <a href="pages/user-profile/overview.html" className="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                </div>
              </div>
              <div className="separator separator-dashed my-4"></div>
              <div className="d-flex flex-stack">
                <div className="symbol symbol-40px me-5">
                  <img src="assets/media/avatars/300-7.jpg" className="h-50 align-self-center" alt="" />
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Devon Lane</a>
                    <span className="text-muted fw-semibold d-block fs-7">Acme Co.</span>
                  </div>
                  <a href="pages/user-profile/overview.html" className="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                </div>
              </div>
              <div className="separator separator-dashed my-4"></div>
              <div className="d-flex flex-stack">
                <div className="symbol symbol-40px me-5">
                  <img src="assets/media/avatars/300-9.jpg" className="h-50 align-self-center" alt="" />
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Kristin Watson</a>
                    <span className="text-muted fw-semibold d-block fs-7">Biffco Enterprises Ltd.</span>
                  </div>
                  <a href="pages/user-profile/overview.html" className="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                </div>
              </div>
              <div className="separator separator-dashed my-4"></div>
              <div className="d-flex flex-stack">
                <div className="symbol symbol-40px me-5">
                  <img src="assets/media/avatars/300-12.jpg" className="h-50 align-self-center" alt="" />
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Eleanor Pena</a>
                    <span className="text-muted fw-semibold d-block fs-7">Abstergo Ltd.</span>
                  </div>
                  <a href="pages/user-profile/overview.html" className="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                </div>
              </div>
            </div>
            {/* End Body */}
          </div>
          {/* End Social widget 1 */}
          {/* Social widget 2 */}
          <div className="card card-flush mb-5 mb-xl-8">
            {/* Header */}
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">Trending Feeds</span>
                <span className="text-muted mt-1 fw-semibold fs-7">8k social visitors</span>
              </h3>
              {/* Toolbar */}
              <div className="card-toolbar">
                <a href="pages/social/activity.html" className="btn btn-sm btn-light">View All</a>
              </div>
              {/* End Toolbar */}
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body">
              <div className="row g-3 g-lg-6">
                <div className="col-md-6">
                  <a href="">
                    <img src="assets/media/stock/600x600/img-33.jpg" className="rounded w-100" alt="" />
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="">
                    <img src="assets/media/stock/600x600/img-26.jpg" className="rounded w-100" alt="" />
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="">
                    <img src="assets/media/stock/600x600/img-25.jpg" className="rounded w-100" alt="" />
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="">
                    <img src="assets/media/stock/600x600/img-35.jpg" className="rounded w-100" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Body */}
          </div>
          {/* End Social widget 2 */}
        </div>
      );
}

export default SideberRFeed