const Avatar = ({ uid, size }) => {
  return (
    <img
      src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${uid}`}
      alt="userimg"
      width={size}
      height={size}
    />
  );
};

export default Avatar;
