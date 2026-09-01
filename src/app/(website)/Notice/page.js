"use client";

import { useEffect, useState } from "react";
import { getAllNoticeAPI } from "@/utils/noticePdfAPI";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getAllNoticeAPI();
        if (response.success) {
          setNotices(response.data);
        }
      } catch (error) {
        setError(error.response?.data?.message || "Failed to load notices");
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <p>Loading notices...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No notices available.</p>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">
        Notices
      </h2>

      <div className="space-y-4">

        {notices.map((notice) => (
          <div
            key={notice._id}
            className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
          >

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg">
                {notice.description}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                PDF Document
              </p>
            </div>

            {/* Download */}
            <a
              href={notice.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>

          </div>
        ))}

      </div>
    </div>
  );
};

export default NoticeList;