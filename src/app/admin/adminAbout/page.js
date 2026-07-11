"use client"
import React, { useEffect, useState } from 'react'
import { DeleteAboutUsItemThunk, getAboutUsThunk, postAboutUsThunk, UpdateAboutUsDataThunk } from '@/redux/thunkAPI/AboutUsThunk'
import { useDispatch, useSelector } from 'react-redux'

const AdminAbout = () => {
  const [formData, setFormData] = useState({ "title": "", "discription": "" })
  const [Button, setButton] = useState(false)
  const [updateDataId, setUpdateDataId] = useState(null)


  const { PostError } = useSelector((state) => state.aboutData)
  const { data, loading, error } = useSelector((state) => state.getAboutData)

  const dispatch = useDispatch()

  // -------------------------API Calling-----------------------------------------
  useEffect(() => {
    dispatch(getAboutUsThunk());
  }, [dispatch]);
  // -----------------------------------------------------
  const handleDelete = async (id) => {
    await dispatch(DeleteAboutUsItemThunk(id))
    dispatch(getAboutUsThunk());
  }
  // ----------------------------------------------------
  const UpdateApiCall = async () => {
    await dispatch(UpdateAboutUsDataThunk(
      {
        id: updateDataId,
        data: formData
      }
    ))
    dispatch(getAboutUsThunk());
    setButton(false)
    setFormData({ "title": "", "discription": "" })
  }
  // --------------------------------------------------------
  const AddAboutNewDatApiCall = async () => {
    await dispatch(postAboutUsThunk(formData))
    dispatch(getAboutUsThunk());
    setFormData({ "title": "", "discription": "" })
  }
  // -------------------------Functions--------------------------------------------
  const handleForm = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  // ------------------------------------------------------
  const handleEdit = (data) => {
    setButton(true)
    setUpdateDataId(data._id)
    setFormData({
      title: data.title,
      discription: data.discription
    })
  }
  // ------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Button) {
      UpdateApiCall();
    } else {
      AddAboutNewDatApiCall();
    }
  }
  const resetHandle = () => {
    setButton(false)
    setFormData({ "title": "", "discription": "" })
  }
  // ---------------------------Returns-------------------------------------------
  return (
    <div className='w-full min-h-screen bg-blue-950 flex flex-col justify-center items-center'>
      <div className='h-64 w-152 flex flex-col justify-center  gap-2 bg-gray-700 p-5 rounded shadow-sm shadow-blue-400 mt-10'>
        <div className='text-white text-2xl font-bold flex justify-center'><h1>About Page Editer</h1></div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-2 text-white'>
          <input type='text'
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleForm}
            className="border border-amber-50 w-144.5 focus:outline-none px-2" />

          <textarea rows="5" cols="68"
            placeholder="Description"
            name="discription"
            value={formData.discription}
            onChange={handleForm}
            className='border border-amber-50 focus:outline-none px-2' />

          <div className='w-full flex justify-center items-center gap-2'>
            <button type='submit' className='text-blue-950 bg-green-600 px-2 rounded cursor-pointer'>
              {Button ? "Update" : "Submit New Data"}
            </button>
            <button type='button' onClick={resetHandle} className='text-blue-950 bg-orange-300 px-2 rounded cursor-pointer'>
              Reset
            </button>
          </div>
        </form>
        <div className='w-full text-white flex justify-center items-center'>{PostError ? PostError : null}</div>
      </div>
      <div className='mt-5 w-200'>
        {data?.ResponseData?.map((items) => (
          <div key={items._id} className='grid grid-cols-12 gap-2 border border-white p-2 mb-1'>
            <p className='bg-BlueNavyColor text-white mb-2 p-1 rounded col-span-2'>{items.title}</p>
            <p className='bg-amber-400 text-BlueNavyColor mb-2 p-1 rounded col-span-8 w-full h-12 overflow-y-scroll'>{items.discription}</p>
            <div className='text-amber-50 flex justify-center items-center col-span-2 gap-1'>
              <button onClick={() => handleEdit(items)} className='bg-green-600 rounded cursor-pointer mb-2 w-15 h-8'>Edit</button>
              <button onClick={() => handleDelete(items._id)} className='bg-red-600 rounded cursor-pointer mb-2 w-15 h-8'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminAbout