import CredentialsApi from '@/utils/credentialsApi'
import Link from 'next/link'
const GalleryEvent = async ({ params }) => {
    const { EventName } = await params;
    console.log("EventName", EventName)
    const response = await CredentialsApi.get(`/admin/gallery/${EventName}`);
    const data = response.data;
    console.log("data", data)
    return (
        <div >
            <div className="flex flex-col justify-center items-center gap-5 md:flex-row p-5">
                {
                    data?.YearData?.map((item, index) => (
                        <div
                            key={index}
                            className="mt-5 w-full h-fit md:w-55 md:h-55 bg-black/80 flex flex-col justify-center items-center text-center rounded cursor-pointer"
                        >
                            <div className="flex justify-center items-center gap-2 md:gap-0 md:flex-col m-2">
                                <h1 className="text-white text-lg font-semibold">
                                    {item.Year}
                                </h1>

                                <h1 className="text-white text-lg font-semibold">
                                    {item.EventName}
                                </h1>
                            </div>

                            <Link
                                href={`/gallery/${item.EventName}/${item.Year}`}
                                className="w-full h-full flex flex-col justify-center items-center text-center"
                            >
                                <img
                                    src={item.Image}
                                    alt={item.EventName}
                                    className="w-full h-40 object-cover rounded"
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GalleryEvent;