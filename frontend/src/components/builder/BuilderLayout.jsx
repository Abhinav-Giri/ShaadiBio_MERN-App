import { useState } from "react";

import TemplateGallery from "./TemplateGallery";
import PreviewPanel from "./PreviewPanel";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PersonalSection from "../forms/PersonalSection";
import FamilySection from "../forms/FamilySection";
import HoroscopeSection from "../forms/HoroscopeSection";
import EducationProfessionSection from "../forms/EducationProfessionSection";
import PhotoUploader from "../upload/PhotoUploader";

import { saveBiodata } from "../../api/biodataApi";

import styles from "../../styles/builder.module.css";

const BuilderLayout = () => {
  const [template, setTemplate] = useState("1");

  const [data, setData] = useState({
    name: "",
    dob: "",
    age: "",
    height: "",
    religion: "",

    education: "",
    college: "",
    profession: "",
    company: "",
    income: "",

    father: "",
    mother: "",
    siblings: "",
    nativePlace: "",

    rashi: "",
    nakshatra: "",
    gotra: "",
    manglik: "",

    photo: "",
  });

  const [elements] = useState([
    { id: "age" },
    { id: "height" },
    { id: "profession" },
  ]);

  const handleSave = async () => {
    await saveBiodata(data);

    alert("Saved Successfully");
  };

  const downloadPDF = async () => {
    const element = document.getElementById("biodataPreview");

    if (!element) {
      alert("Preview not found");
      return;
    }

    const canvas = await html2canvas(element);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    pdf.save("ShaadiBio.pdf");
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className={styles.sectionTitle}>Personal Details</h3>

        <PhotoUploader data={data} setData={setData} />

        <PersonalSection data={data} setData={setData} />
        <EducationProfessionSection data={data} setData={setData} />
        <FamilySection data={data} setData={setData} />
        <HoroscopeSection data={data} setData={setData} />

        <button className={styles.saveBtn} onClick={handleSave}>
          Save Biodata
        </button>

        <button className={styles.downloadBtn} onClick={downloadPDF}>
          Download PDF
        </button>
       <button className={styles.logoutBtn} onClick={logout}>Logout</button>

      </div>
    
      <div className={styles.main}>
        <TemplateGallery template={template} setTemplate={setTemplate} />

        <PreviewPanel data={data} template={template} elements={elements} />
      </div>
       
    </div>
  );
};

export default BuilderLayout;
