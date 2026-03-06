import pdf from "html-pdf-node";

export const generatePDF = async (html) => {
  const file = { content: html };

  const options = { format: "A4" };

  const pdfBuffer = await pdf.generatePdf(file, options);

  return pdfBuffer;
};