// ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  roleRequired?: string; // có thể bỏ qua nếu không cần quyền
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  roleRequired,
}) => {
  // ✅ Lấy user trong localStorage
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // ❌ Chưa đăng nhập → Chuyển đến login
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "⚠️ Vui lòng đăng nhập để tiếp tục!" }}
      />
    );
  }

  // ❌ Không đủ quyền (ví dụ không phải admin)
  if (roleRequired === "admin" && user.username !== "admin") {
    alert("❌ Bạn không có quyền truy cập trang quản trị!");
    return <Navigate to="/" replace />;
  }

  // ✅ Nếu hợp lệ → cho phép truy cập
  return <>{children}</>;
};

export default ProtectedRoute;
