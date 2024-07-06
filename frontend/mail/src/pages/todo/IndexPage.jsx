import React, { useCallback } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({ pathname: "list" });
  });

  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  });

  return (
    <BasicLayout>
      <div className="w-full flex m-2 p-2">
        <div
          onClick={handleClickList}
          className="text-xl m-1 p-2 w-20 font-extrabold text-cenxter underline cursor-pointer"
        >
          LIST
        </div>
        <div
          onClick={handleClickAdd}
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline cursor-pointer"
        >
          ADD
        </div>
      </div>
      <div className="flex flex-wrap w-full ">
        {" "}
        <Outlet />{" "}
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
