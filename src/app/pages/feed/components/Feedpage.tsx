import React from "react";
import SidebarFeed from "./SidebarFeed";
import FeedPost from "./FeedPost";
import SideberRFeed from "./SideberRFeed";

const Feedpage = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        {/* content d-flex flex-column flex-column-fluid */}
        <div className="" id="kt_wrapper">
          <div className="container-xxl" id="kt_content_container">
            <div className="d-flex flex-row">
              <SidebarFeed />
              <div className="w-100 flex-lg-row-fluid mx-lg-13">
              <FeedPost />

              </div>
              <div className="col-lg-3">
                <SideberRFeed />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedpage;
