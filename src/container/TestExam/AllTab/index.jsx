import React from "react";

import "./styles.scss";
import DropdownAction from "../../../component/DropdownAction";
import CustomPagination from "../../../component/Pagination";
import ResetModal from "./ResetModal";
import PTETest from "./PTETest";

const AllTab = () => {
  return (
    <div className="all-tab">
      <DropdownAction />
      <div className="all-tab__title">
        <p>Done 0 , Found 741 Questions</p>
        <ResetModal />
      </div>
      <div className="all-tab__pte-test">
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
        <PTETest />
      </div>
      <div className="all-tab__pagination">
        <CustomPagination />
      </div>
    </div>
  );
};

export default AllTab;
