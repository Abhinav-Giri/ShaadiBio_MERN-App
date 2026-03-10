import styles from "../../styles/form.module.css";

const PhotoUploader = ({ data, setData }) => {

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Preventing extremely large images
    if (file.size > 5 * 1024 * 1024) {
      alert("Please upload image smaller than 5MB");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {

      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const MAX_WIDTH = 400; // resize width
        const scaleSize = MAX_WIDTH / img.width;

        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // compress image (0.7 quality)
        const compressedImage = canvas.toDataURL("image/jpeg", 0.7);

        setData({
          ...data,
          photo: compressedImage
        });

      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.photoBox}>
      <img
        className={styles.photo}
        src={
          data.photo ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="profile"
      />

      <input type="file" accept="image/*" onChange={handlePhoto} />
    </div>
  );
};

export default PhotoUploader;