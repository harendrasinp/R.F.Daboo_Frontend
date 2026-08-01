"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import AdminHeader from "@/admin_components/AdminHeader";
import { authCheckThunk } from "@/redux/thunkAPI/authThunk";

const Admin_Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {isAuthenticated,authChecked  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authCheckThunk());
  }, [dispatch]);

  useEffect(() => {
    if (authChecked && !isAuthenticated) {
      router.replace("/");
    }
  }, [authChecked, isAuthenticated, router]);

  if (!authChecked ) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};

export default Admin_Layout;