import React, { useEffect, useRef } from 'react';
import PDFJS from 'pdfjs-dist';

export default function Resume() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPDF = async () => {
      // Fetch the PDF file
      const response = await fetch('resume.pdf');
      const pdfData = await response.arrayBuffer();

      // Load the PDF file
      const pdf = await PDFJS.getDocument({ data: pdfData });

      // Render the first page of the PDF file
      const page = await pdf.getPage(1);
      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      await page.render(renderContext);
    };

    renderPDF();
  }, []);


  return <div>
  <h1>Resume lol</h1>
  <div style={{
      border: '1px solid black',
      width: '0.8vw',
      height: '0.6vh',
      overflow: 'scroll'
    }}>
      <canvas ref={canvasRef} />
    </div></div>  }