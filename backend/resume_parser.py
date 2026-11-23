#import PyPDF2
from pypdf import PdfReader

def extract_text(filepath):

    text = ""

    with open(filepath, "rb") as file:

        reader = PdfReader(file)

        for page in reader.pages:
            text += page.extract_text()

    return text