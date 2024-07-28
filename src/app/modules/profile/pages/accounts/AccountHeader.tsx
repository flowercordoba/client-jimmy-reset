import { FC } from "react";
import { Content } from "../../../../../features/layout/components/content";
import { ItemsNavegation } from "./ItemsNavegation";
import ProfileImage from "./ProfileImage";
import AboutMe from "./AboutMe";
import CoverImage from "./CoverImage";

const AccountHeader: FC = () => {
  return (
    <>
      <Content>
        <div className="card mb-5 mb-xl-10">
          <div className="card-body pt-9 pb-0">
            <CoverImage />          
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
              <div className="me-7 mb-4" style={{ marginTop: '-80px' }}>
                <ProfileImage />
              </div>
              <AboutMe />
            </div>
            <ItemsNavegation />
          </div>
        </div>
      </Content>
    </>
  );
};

export { AccountHeader };
