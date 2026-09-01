"use client";
import { UploadNoticeAPI } from "@/utils/noticePdfAPI"
import { useState } from "react";
import axios from "axios";

const NoticePage = () => {
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setMessage("Please enter PDF description");
      return;
    }

    if (!pdf) {
      setMessage("Please select a PDF file");
      return;
    }

    const pdfData = new FormData();

    pdfData.append("description", description);
    pdfData.append("pdf", pdf);

    try {
      setLoading(true);
      setMessage("");

      const response = await UploadNoticeAPI(pdfData);

      if (response.success) {
        setMessage("PDF uploaded successfully");

        setDescription("");
        setPdf(null);

        document.getElementById("pdf").value = "";
      }
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
        "Something went wrong while uploading PDF"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Upload PDF
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 font-medium"
          >
            Description
          </label>

          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter PDF description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* PDF */}
        <div>
          <label
            htmlFor="pdf"
            className="block mb-2 font-medium"
          >
            Select PDF
          </label>

          <input
            id="pdf"
            type="file"
            accept="application/pdf,.pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Selected file */}
        {pdf && (
          <p className="text-sm text-gray-600">
            Selected: <span className="font-medium">{pdf.name}</span>
          </p>
        )}

        {/* Message */}
        {message && (
          <p className="text-sm font-medium">
            {message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload PDF"}
        </button>

      </form>
    </div>
  );
};

export default NoticePage;