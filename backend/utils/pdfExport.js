import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const downloadPDF = async () => {

const element = document.getElementById("biodataPreview")

const canvas = await html2canvas(element)

const img = canvas.toDataURL("image/png")

const pdf = new jsPDF()

pdf.addImage(img,"PNG",0,0,210,297)

pdf.save("biodata.pdf")

}