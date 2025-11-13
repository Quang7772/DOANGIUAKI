// ✅ ListProducts_SP_Admin.tsx — UI Nâng Cấp + Nút Thoát
import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating_rate: number;
  rating_count: number;
}

const ListProducts_SP_Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    title: "",
    price: 0,
    image: "",
    rating_rate: 0,
    rating_count: 0,
  });

  const navigate = useNavigate();

  // 🔹 Lấy danh sách sản phẩm
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("product1")
      .select("*")
      .order("id", { ascending: true });
    if (!error) setProducts(data as Product[]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    editingProduct
      ? setEditingProduct({ ...editingProduct, [name]: value })
      : setNewProduct({ ...newProduct, [name]: value });
  };

  // 🔹 Thêm hoặc chỉnh sửa
  const handleAddOrEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      const { id, ...updateData } = editingProduct;
      const { error } = await supabase
        .from("product1")
        .update(updateData)
        .eq("id", id);
      if (!error) alert("✅ Cập nhật thành công!");
      setEditingProduct(null);
    } else {
      const { error } = await supabase.from("product1").insert([newProduct]);
      if (!error) alert("✅ Thêm sản phẩm thành công!");
      setNewProduct({
        title: "",
        price: 0,
        image: "",
        rating_rate: 0,
        rating_count: 0,
      });
    }
    fetchProducts();
  };

  // 🔹 Xóa sản phẩm
  const handleDelete = async (id: number) => {
    if (window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) {
      await supabase.from("product1").delete().eq("id", id);
      fetchProducts();
    }
  };

  // 🔹 Thoát về trang đăng nhập
  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa thông tin người dùng
    navigate("/login"); // Điều hướng về trang đăng nhập
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      {/* Thanh tiêu đề + nút thoát */}
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-blue-700">
          🛠️ Quản lý sản phẩm (Admin)
        </h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          🚪 Thoát
        </button>
      </div>

      {/* Form thêm/sửa */}
      <form
        onSubmit={handleAddOrEdit}
        className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 w-full max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          {editingProduct ? "✏️ Chỉnh sửa sản phẩm" : "➕ Thêm sản phẩm mới"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="title"
            value={editingProduct?.title ?? newProduct.title}
            onChange={handleChange}
            placeholder="Tên sản phẩm"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            name="price"
            type="number"
            value={editingProduct?.price ?? newProduct.price}
            onChange={handleChange}
            placeholder="Giá sản phẩm"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            name="image"
            value={editingProduct?.image ?? newProduct.image}
            onChange={handleChange}
            placeholder="Link ảnh sản phẩm"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none col-span-1 md:col-span-2"
          />
          <input
            name="rating_rate"
            type="number"
            step="0.1"
            value={editingProduct?.rating_rate ?? newProduct.rating_rate}
            onChange={handleChange}
            placeholder="Đánh giá (0 - 5)"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            name="rating_count"
            type="number"
            value={editingProduct?.rating_count ?? newProduct.rating_count}
            onChange={handleChange}
            placeholder="Số lượt đánh giá"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          {editingProduct && (
            <button
              type="button"
              onClick={() => setEditingProduct(null)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Hủy
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {editingProduct ? "💾 Lưu lại" : "➕ Thêm mới"}
          </button>
        </div>
      </form>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-24 h-24 mx-auto rounded-lg object-cover mb-3"
            />
            <h4 className="font-semibold truncate">{p.title}</h4>
            <p className="text-red-500 font-bold">${p.price}</p>
            <p className="text-sm text-gray-500">
              ⭐ {p.rating_rate} ({p.rating_count})
            </p>
            <div className="flex justify-between mt-3">
              <button
                onClick={() => setEditingProduct(p)}
                className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts_SP_Admin;
