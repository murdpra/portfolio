from pypdf import PdfReader

reader = PdfReader("/Users/pranjalimurdeshwar/Documents/portfolio/SWE-Pranjali.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
print(text)
