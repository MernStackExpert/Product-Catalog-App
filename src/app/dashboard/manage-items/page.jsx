"use client";

import { useEffect, useState, useCallback } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Image from "next/image";
import {
  FaEdit,
  FaTrash,
  FaListAlt,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
} from "react-icons/fa";
import Link from "next/link";

export default function ManageGroceries() {
  const { data: session } = useSession();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 8; // Backend limit

  const categories = [
    "Vegetables",
    "Fruits",
    "Dairy",
    "Grains",
    "Meat",
    "Snacks",
  ];

  // Server-side Fetching Logic
  const fetchMyItems = useCallback(async () => {
    if (!session?.user?.email) return;

    setLoading(true);
    try {
      const params = new URLSearchParams({
        email: session.user.email,
        page: currentPage,
        limit: itemsPerPage,
      });

      if (searchQuery) params.append("search", searchQuery);
      if (selectedCategory) params.append("category", selectedCategory);

      const response = await axiosInstance.get(`/grocery?${params.toString()}`);

      setItems(response.data.grocery);
      setTotalPages(response.data.totalPages);
      setTotalItems(response.data.totalGrocery);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.email, currentPage, searchQuery, selectedCategory]);

  useEffect(() => {
    fetchMyItems();
  }, [fetchMyItems]);

  // Search/Filter change hole 1st page e ferot neya
  const handleFilterChange = (type, value) => {
    if (type === "search") setSearchQuery(value);
    if (type === "category") setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      customClass: { popup: "rounded-[2rem]" },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/grocery/${id}`);
          Swal.fire({
            title: "Deleted!",
            icon: "success",
            confirmButtonColor: "#10b981",
          });
          fetchMyItems();
        } catch (error) {
          Swal.fire("Error!", "Failed to delete.", "error");
        }
      }
    });
  };

  return (
    <div className="bg-base-100 rounded-[2.5rem] p-4 lg:p-12 shadow-xl border border-base-300 min-h-[70vh] flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 px-2">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-4 rounded-2xl text-primary text-3xl hidden sm:block">
            <FaListAlt />
          </div>
          <div>
            <h1 className="text-2xl font-black text-base-content uppercase tracking-tight">
              Manage Items
            </h1>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">
              Total Listings: {totalItems}
            </p>
          </div>
        </div>
        <Link
          href="/dashboard/add-item"
          className="btn btn-primary w-full lg:w-auto rounded-2xl px-10 shadow-lg shadow-primary/20 border-none h-14 font-black"
        >
          + Add New Grocery
        </Link>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 px-2">
        <div className="relative flex-1 group">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by product name..."
            className="input input-bordered w-full h-14 pl-12 rounded-2xl focus:outline-primary bg-base-200/50 border-none"
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <select
            className="select select-bordered w-full h-14 rounded-2xl focus:outline-primary bg-base-200/50 border-none font-bold"
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading State or Data Table */}
      {loading ? (
        <div className="flex-1 flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="flex-1">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-gray-400 uppercase text-[11px] font-black border-none px-6 tracking-widest">
                  <th className="py-5 px-6 text-left">Product</th>
                  <th className="text-left">Category</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Stock</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-base-200/40 hover:bg-base-200 transition-all border-none"
                  >
                    <td className="rounded-l-2xl py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-base-300 bg-white shadow-sm shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <span className="font-black text-base-content text-sm truncate max-w-[150px]">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="font-bold text-xs text-gray-500 uppercase">
                      {item.category}
                    </td>
                    <td className="font-black text-primary text-lg">
                      ${item.price}
                    </td>
                    <td className="font-bold text-gray-600">
                      {item.stock} Units
                    </td>
                    <td className="rounded-r-2xl text-center">
                      <div className="flex justify-center gap-2">
                        <Link
                          href={`/allgroceries/${item._id}`}
                          className="btn btn-square btn-sm bg-white text-blue-500 shadow-sm hover:bg-blue-500 hover:text-white border-none rounded-xl"
                        >
                          <FaEye />
                        </Link>
                        <Link
                          href={`/dashboard/manage-items/edit/${item._id}`}
                          className="btn btn-square btn-md bg-white shadow-sm border-base-200 text-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-xl"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-square btn-sm bg-white text-red-500 shadow-sm hover:bg-red-500 hover:text-white border-none rounded-xl"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile List View (Simplified) */}
          <div className="md:hidden space-y-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-base-200/40 p-4 rounded-[2rem] border border-base-300 flex items-center gap-4"
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-base-300 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base-content truncate">
                    {item.name}
                  </h3>
                  <p className="font-bold text-primary">${item.price}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-xs btn-error text-white rounded-lg px-3"
                    >
                      Delete
                    </button>
                    <button className="btn btn-xs btn-primary rounded-lg px-3">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-20 bg-base-200/20 rounded-[3rem] border-2 border-dashed border-base-300">
              <p className="text-gray-400 font-black italic">
                No groceries found.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10 mb-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="btn btn-circle bg-white shadow-md border-none text-primary hover:bg-primary hover:text-white disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2 font-black">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl transition-all cursor-pointer shadow-sm ${
                  currentPage === i + 1
                    ? "bg-primary text-white scale-110 shadow-primary/30"
                    : "bg-white text-gray-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="btn btn-circle bg-white shadow-md border-none text-primary hover:bg-primary hover:text-white disabled:opacity-50 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
