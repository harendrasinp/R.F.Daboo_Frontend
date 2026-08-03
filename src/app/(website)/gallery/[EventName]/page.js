import CredentialsApi from '@/utils/credentialsApi'
const GalleryEvent = async ({ params }) => {

    const { EventName } = await params;
    const response = await CredentialsApi.get(`/admin/gallery/${EventName}`);
    const data = response.data;
    console.log("data", data)
    return (
        <div className="relative bg-[url('/gallery/gallerybg2.png')] md:bg-[url('/gallery/gallerybg1.png')] bg-cover bg-center w-full min-h-screen md:bg-white flex felx-col justify-center flex-wrap">
            <div className="mt-5 flex justify-center items-center gap-5">
                 {
                    data?.YearData?.map((item, index) => (
                        <div key={index} className='w-full h-45 md:w-55 md:h-55 bg-black/80 flex flex-col justify-center items-center text-center rounded cursor-pointer'>
                            <h1 className='text-white text-lg font-semibold'>{item.Year}</h1>
                            <h1 className='text-white text-lg font-semibold'>{item.EventName}</h1>
                            <img src={item.Image} alt={"image"} className='w-full h-40 object-cover rounded' />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GalleryEvent;