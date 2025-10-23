import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Định nghĩa kiểu dữ liệu sản phẩm
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const Listsanpham: React.FC = () => {
  const [listsanpham, setListProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const LayDulieutuBackend = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://68f97a99ef8b2e621e7c302b.mockapi.io/products"
        );

        if (Array.isArray(res.data) && res.data.length > 0) {
          setListProduct(res.data);
        } else {
          setError("Không có dữ liệu sản phẩm!");
        }
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu:", err);
        setError("Không thể tải dữ liệu từ máy chủ!");
      } finally {
        setLoading(false);
      }
    };

    LayDulieutuBackend();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {listsanpham.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ height: "180px", objectFit: "contain", width: "100%" }}
            />
            <h4>{p.title}</h4>
            <p>{p.price.toLocaleString()}₫</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsanpham;
