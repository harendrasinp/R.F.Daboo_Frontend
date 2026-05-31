const DiamondImage = ({ image }) => {
  return (
    <div className="w-40 h-40 overflow-hidden border-4 border-sky-950/60 shadow-lg rounded-[100%]
    hover:scale-120 transition-transform duration-300 cursor-pointer">
      <img
        src={image}
        alt=""
        className="w-full h-full object-contain scale-150"
      />
    </div>
  );
};
export default DiamondImage;