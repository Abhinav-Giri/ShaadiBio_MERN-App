import styles from "../../styles/gallery.module.css";

const templates = [
  { id: "1", name: "Classic", img: "/templates/t1.png" },
  { id: "2", name: "Modern", img: "/templates/t2.png" },
  { id: "3", name: "Elegant", img: "/templates/t3.png" },
  { id: "4", name: "Photo", img: "/templates/t4.png" },
  { id: "5", name: "Minimal", img: "/templates/t5.png" },
  { id: "6", name: "Royal", img: "/templates/t6.png" },
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
