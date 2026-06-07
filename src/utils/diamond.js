const DiamondImage = ({ image }) => {
  return (
    <div className="
    w-23 h-23
    md:w-40 md:h-40
    overflow-hidden
    border-4 border-sky-950/60
    shadow-lg
    rounded-full
    hover:scale-110
    transition-transform
    duration-300
    cursor-pointer
  ">
      <img
        src={image}
        alt=""
        className="w-full h-full object-contain scale-150"
      />
    </div>
  );
};
export default DiamondImage;