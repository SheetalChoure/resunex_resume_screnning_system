skills_list = [
    "python",
    "java",
    "react",
    "node",
    "machine learning",
    "data science",
    "sql",
    "mongodb"
]

def extract_skills(text):

    text = text.lower()

    found = []

    for skill in skills_list:
        if skill in text:
            found.append(skill)

    return list(set(found))