import styles from "../../styles/form.module.css";

const PhotoUploader = ({ data, setData }) => {
  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setData({
        ...data,
        photo: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.photoBox}>
      <img
        className={styles.photo}
        src={
          data.photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="profile"
      />

      <input type="file" accept="image/*" onChange={handlePhoto} />
    </div>
  );
};

export default PhotoUploader;
