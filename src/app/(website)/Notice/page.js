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
        setError(
          error.response?.data?.message || "Failed to load notices"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 px-4">
        <p className="text-gray-600 text-sm sm:text-base">
          Loading notices...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 px-4 text-red-500 text-sm sm:text-base">
        {error}
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="text-center py-10 px-4">
        <p className="text-gray-600 text-sm sm:text-base">
          No notices available.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-5 sm:mb-7">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Notices
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Latest school notices and important documents
          </p>
        </div>

        {/* Notices */}
        <div className="space-y-3 sm:space-y-4">

          {notices.map((notice) => (
            <div
              key={notice._id}
              className="
                w-full
                flex flex-col sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                p-4 sm:p-5
                bg-white
                border border-gray-200
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition-shadow
              "
            >

              {/* Description */}
              <div className="min-w-0 flex-1">
                <h3
                  className="
                    font-semibold
                    text-base sm:text-lg
                    text-gray-800
                    break-words
                  "
                >
                  {notice.description}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  PDF Document
                </p>
              </div>

              {/* Open PDF Button */}
              <a
                href={notice.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto
                  inline-flex
                  justify-center
                  items-center
                  px-4 py-2.5
                  sm:px-5 sm:py-2.5
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-colors
                  whitespace-nowrap
                "
              >
                Open PDF
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default NoticeList;