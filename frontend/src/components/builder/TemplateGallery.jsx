import styles from "../../styles/gallery.module.css";

const templates = [
  { id: "1", name: "Classic", img: "/templates/t1.jpg" },
  { id: "2", name: "Modern", img: "/templates/t2.jpg" },
  { id: "3", name: "Elegant", img: "/templates/t3.jpg" },
  { id: "4", name: "Photo", img: "/templates/t4.jpg" },
  { id: "5", name: "Minimal", img: "/templates/t5.jpg" },
  { id: "6", name: "Royal", img: "/templates/t6.jpg" },
];

const TemplateGallery = ({ template, setTemplate }) => {
  return (
    <div className={styles.templates}>
      {templates.map((t) => (
        <div
          key={t.id}
          className={`${styles.templateCard} ${template === t.id ? styles.activeTemplate : ""}`}
          onClick={() => setTemplate(t.id)}
        >
          <img src={t.img} alt={t.name} />

          <span>{t.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TemplateGallery;
