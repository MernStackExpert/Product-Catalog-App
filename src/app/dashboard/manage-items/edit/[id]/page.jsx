"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaEdit, FaCloudUploadAlt, FaStar, FaArrowLeft, FaLink, FaImage, FaCheckCircle, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function EditGroceryPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("url");
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const imgbb_api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const imageFile = watch("imageFile");

  // Fetch Existing Data
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axiosInstance.get(`/grocery/${id}`);
        const item = response.data;
        
        reset({
          name: item.name,
          category: item.category,
          price: item.price,
          stock: item.stock,
          image: item.image,
          rating: item.rating,
          description: item.description,
        });
        setPreviewImage(item.image); // সেট করা ইমেজ প্রিভিউতে দেখানো
      } catch (error) {
        toast.error("Failed to fetch item data");
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id, reset]);

  // Handle Image File Preview
  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      setPreviewImage(URL.createObjectURL(file));
      setActiveTab("upload");
    }
  }, [imageFile]);

  const clearImage = () => {
    setPreviewImage(null);
    setValue("imageFile", null);
    setValue("image", "");
  };

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Updating item...");
    try {
      let finalImageUrl = data.image;

      // New file upload logic
      if (activeTab === "upload" && data.imageFile?.[0]) {
        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", data.imageFile[0]);

        const imgResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`,
          formData
        );
        finalImageUrl = imgResponse.data.data.display_url;
      }

      const updatedData = {
        ...data,
        image: finalImageUrl,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        rating: parseFloat(data.rating),
      };

      delete updatedData.imageFile;

      await axiosInstance.patch(`/grocery/${id}`, updatedData);
      toast.success("Item updated successfully!", { id: loadingToast });
      router.push("/dashboard/manage-items");
    } catch (error) {
      toast.error("Update failed!", { id: loadingToast });
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) return <div className="flex justify-center pt-20"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

  return (
    <div className="bg-base-100 rounded-[3rem] p-8 lg:p-12 shadow-xl border border-base-300">
      <Link href="/dashboard/manage-items" className="flex items-center gap-2 text-gray-400 hover:text-primary mb-8 font-bold transition-colors">
        <FaArrowLeft /> Back to Manage
      </Link>

      <div className="flex items-center gap-4 mb-10">
        <div className="bg-orange-100 p-4 rounded-2xl text-orange-500 text-3xl">
          <FaEdit />
        </div>
        <div>
          <h1 className="text-3xl font-black text-base-content uppercase">Update Item</h1>
          <p className="text-gray-400 font-medium">Modify product information & images</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Product Name</label>
            <input {...register("name", { required: true })} type="text" className="input input-bordered rounded-2xl h-14 bg-base-200/50 focus:outline-primary" />
          </div>

          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Category</label>
            <select {...register("category", { required: true })} className="select select-bordered rounded-2xl h-14 bg-base-200/50 font-bold">
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="Grains">Grains</option>
              <option value="Meat">Meat</option>
              <option value="Snacks">Snacks</option>
            </select>
          </div>
        </div>

        {/* Image Tab System */}
        <div className="form-control w-full">
          <label className="block text-sm font-black text-gray-600 uppercase mb-3">Update Image</label>
          <div className="tabs tabs-boxed bg-base-200 rounded-2xl p-1 mb-4 w-fit">
            <button type="button" onClick={() => setActiveTab("url")} className={`tab rounded-xl font-bold ${activeTab === "url" ? "tab-active bg-primary text-white" : ""}`}>
              <FaLink className="mr-2" /> Image URL
            </button>
            <button type="button" onClick={() => setActiveTab("upload")} className={`tab rounded-xl font-bold ${activeTab === "upload" ? "tab-active bg-primary text-white" : ""}`}>
              <FaImage className="mr-2" /> Upload New
            </button>
          </div>

          {activeTab === "url" ? (
            <div className="relative">
              <input {...register("image")} type="text" placeholder="https://..." className="input input-bordered w-full rounded-2xl h-14 bg-base-200/50 pl-12 focus:outline-primary" />
              <FaLink className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {!previewImage ? (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-2xl cursor-pointer bg-base-200/30 hover:bg-base-200/50 transition-all">
                  <FaCloudUploadAlt className="text-4xl text-primary mb-2" />
                  <p className="text-sm text-gray-500 font-bold uppercase">Click to select image</p>
                  <input {...register("imageFile")} type="file" className="hidden" accept="image/*" />
                </label>
              ) : (
                <div className="relative w-full h-44 rounded-3xl overflow-hidden border-2 border-primary shadow-md group">
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white text-success p-2 rounded-full flex items-center gap-2 font-bold px-4">
                       <FaCheckCircle /> Image Ready
                    </div>
                    <button onClick={clearImage} type="button" className="bg-white text-error p-2 rounded-full hover:bg-error hover:text-white transition-colors">
                       <FaTimes />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Price ($)</label>
            <input {...register("price", { required: true })} type="number" step="0.01" className="input input-bordered rounded-2xl h-14 bg-base-200/50 focus:outline-primary" />
          </div>
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Stock</label>
            <input {...register("stock", { required: true })} type="number" className="input input-bordered rounded-2xl h-14 bg-base-200/50 focus:outline-primary" />
          </div>
          <div className="form-control">
            <label className="block text-sm font-black text-gray-600 uppercase mb-3">Rating</label>
            <div className="relative">
              <input {...register("rating", { required: true })} type="number" step="0.1" className="input input-bordered rounded-2xl h-14 bg-base-200/50 w-full pl-12 focus:outline-primary" />
              <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />
            </div>
          </div>
        </div>

        <div className="form-control">
          <label className="block text-sm font-black text-gray-600 uppercase mb-3">Description</label>
          <textarea {...register("description", { required: true })} className="textarea textarea-bordered rounded-[2rem] h-40 bg-base-200/50 p-6 leading-relaxed focus:outline-primary w-full"></textarea>
        </div>

        <button disabled={isUploading} type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 text-white font-black uppercase tracking-widest border-none h-16 transition-all active:scale-95">
          {isUploading ? "Uploading & Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}