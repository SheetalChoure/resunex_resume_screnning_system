from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from resume_parser import extract_text
from skill_extractor import extract_skills
from matcher import similarity

app = Flask(__name__)
CORS(app)

job_description = ""

# store candidates in memory
candidates = []

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/")
def home():
    return {"message": "Resume Screening Backend Running"}

# Save Job Description
@app.route("/job", methods=["POST"])
def set_job():

    global job_description

    data = request.get_json()

    job_description = data["description"]

    return {"message": "Job description saved"}

# Upload resumes
@app.route("/upload", methods=["POST"])
def upload():

    files = request.files.getlist("resumes")

    if not files:
        return jsonify({"error":"No files uploaded"})

    results = []

    for file in files:

        filepath = os.path.join(UPLOAD_FOLDER, file.filename)

        file.save(filepath)

        text = extract_text(filepath)

        skills = extract_skills(text)

        score = similarity(text, job_description)

        candidate = {
            "name": file.filename,
            "skills": skills,
            "score": float(score)
        }

        candidates.append(candidate)

        results.append(candidate)

    return jsonify(results)

# Get results
@app.route("/results", methods=["GET"])
def results():

    ranked = sorted(candidates, key=lambda x: x["score"], reverse=True)

    return jsonify(ranked)


if __name__ == "__main__":
    app.run(debug=True)