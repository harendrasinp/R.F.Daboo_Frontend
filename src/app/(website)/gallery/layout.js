export default function GalleryLayout({ children }) {
    return (
        <div className="min-h-screen bg-[url('/gallery/gallerybg2.png')] md:bg-[url('/gallery/gallerybg1.png')] bg-cover bg-center">
            {children}
        </div>
    );
}