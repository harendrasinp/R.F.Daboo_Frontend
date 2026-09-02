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
            className="flex items-center p-2 bg-white border border-gray-200 rounded-xl shadow-sm
            justify-between"
          >

            {/* Description */}
            <div>
              <h3 className="text-sm w-55 lg:w-160">
                {notice.description}
              </h3>
            </div>

            {/* Download */}
            <a
              href={notice.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-25 p-2 text-center text-sm text-white bg-blue-600 rounded-lg 
              hover:bg-blue-700">
              Open PDF
            </a>

          </div>
        ))}

      </div>
    </div>
  );
};

export default NoticeList;