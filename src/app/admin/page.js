"use client";
import {getPrincipalThought, principalAPI} from "@/utils/HomeAPI.js"
import { useEffect, useState } from "react";


export default function PrincipalThoughtForm() {
  const [name, setName] = useState("");
  const [thought, setThought] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  
   useEffect(() => {
      const fetchPrincipalThought = async () => {
        const response = await getPrincipalThought();
        if (response.success) {
          setName(response.data.name);
          setThought(response.data.thought);
          setImage(response.data.Image);
        }
      };
  
      fetchPrincipalThought();
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !thought || !image) {
      alert("Please fill all fields and select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("thought", thought);
      formData.append("image", image);

      // const response = await axios.post(
      //   "http://localhost:4545/api/home/principal-thought",
      //   formData
      // );

      // console.log(response.data);
      const response = await principalAPI(formData);

      if (response.success) {
        alert("Principal thought uploaded successfully!");

        setName("");
        setThought("");
        setImage(null);
        e.target.reset();
      } else {
        alert(response.message);
      }

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">
        Principal's Thought
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">
            Principal Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter principal name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Thought */}
        <div>
          <label className="block mb-1 font-medium">
            Thought
          </label>

          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            placeholder="Enter principal's thought"
            rows={6}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">
            Principal Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded-lg p-3"
        >
          {loading ? "Uploading..." : "Upload Thought"}
        </button>

      </form>

    </div>
  );
}