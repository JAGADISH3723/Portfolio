"""
ATS-friendly resume generator for Jagadish Samudrala.

Rules for ATS compatibility:
- Single column, no tables/graphics.
- Standard font (Helvetica), simple bullets.
- Plain-text characters only (no smart quotes/dashes that can break parsing).
- No headers/footers with contact info (only in body).
- Fits cleanly on ONE page.
"""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether,
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

BG = HexColor("#ffffff")
INK = HexColor("#111111")
ACCENT = HexColor("#1a1a1a")
LINE = HexColor("#bbbbbb")

doc = SimpleDocTemplate(
    "public/resume.pdf",
    pagesize=letter,
    rightMargin=0.6 * inch,
    leftMargin=0.6 * inch,
    topMargin=0.35 * inch,
    bottomMargin=0.35 * inch,
    title="Jagadish Samudrala Resume",
    author="Jagadish Samudrala",
    subject="Software Engineer / AI ML / GenAI Resume",
)

styles = {}
styles["name"] = ParagraphStyle(
    "name", fontName="Helvetica-Bold", fontSize=16, leading=19,
    textColor=INK, alignment=TA_LEFT, spaceAfter=1,
)
styles["role"] = ParagraphStyle(
    "role", fontName="Helvetica-Bold", fontSize=10, leading=13,
    textColor=INK, spaceAfter=1, spaceBefore=7,
)
styles["contact"] = ParagraphStyle(
    "contact", fontName="Helvetica", fontSize=8.5, leading=11, textColor=INK,
)
styles["summary"] = ParagraphStyle(
    "summary", fontName="Helvetica", fontSize=9, leading=11.5,
    textColor=INK, spaceAfter=4,
)
styles["h2"] = ParagraphStyle(
    "h2", fontName="Helvetica-Bold", fontSize=10, leading=12.5,
    textColor=ACCENT, spaceBefore=7, spaceAfter=1,
)
styles["body"] = ParagraphStyle(
    "body", fontName="Helvetica", fontSize=9, leading=11.5, textColor=INK,
)
styles["bullet"] = ParagraphStyle(
    "bullet", parent=styles["body"], leftIndent=11, bulletIndent=2,
    spaceAfter=0, spaceBefore=0,
)
styles["sub"] = ParagraphStyle(
    "sub", fontName="Helvetica-Oblique", fontSize=8.5, leading=10.5,
    textColor=INK, spaceAfter=2,
)
styles["tech"] = ParagraphStyle(
    "tech", fontName="Helvetica", fontSize=8.5, leading=10.5,
    textColor=INK, spaceBefore=1, spaceAfter=3,
)

story = []

def hr():
    story.append(HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=2, spaceAfter=4))

def h2(text):
    story.append(Paragraph(text, styles["h2"]))

def bullets(items):
    for it in items:
        story.append(Paragraph(it, styles["bullet"], bulletText="-"))

# Header
story.append(Paragraph("JAGADISH SAMUDRALA", styles["name"]))
story.append(Paragraph("Software Engineer | AI/ML &amp; GenAI Builder", styles["role"]))
story.append(Paragraph(
    "jagadish0828@gmail.com | +91-6305530851 | linkedin.com/in/jagadish-samudrala-48407b219 | github.com/JAGADISH3723",
    styles["contact"],
))
story.append(Paragraph(
    "2026 B.Tech graduate from NIT Warangal. Open to Software Engineering &amp; AI/ML opportunities.",
    styles["contact"],
))
hr()

# Summary
h2("SUMMARY")
story.append(Paragraph(
    "Self-motivated 2026 B.Tech graduate from NIT Warangal with a strong foundation in Data Structures, "
    "Algorithms, OOP, and software engineering. Experienced in full-stack development, REST APIs, databases, "
    "AI/LLM applications, RAG systems, and data analysis. Focused on building scalable software systems and "
    "AI-powered products.",
    styles["summary"],
))

# Skills
h2("TECHNICAL SKILLS")
for line in [
    "<b>Programming:</b> Python, C++, C#, JavaScript, Java",
    "<b>AI / ML &amp; Data:</b> LangChain, FAISS, OpenAI API, RAG, NumPy, Pandas",
    "<b>Web Development:</b> React.js, Node.js, Express.js, HTML5, CSS3, .NET",
    "<b>Databases:</b> MongoDB, MySQL, PostgreSQL, SQL",
    "<b>Core CS:</b> Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems",
    "<b>Developer Tools:</b> Git, Linux, Postman, Render, VS Code, Agile/Scrum",
]:
    story.append(Paragraph(line, styles["body"]))

# Projects
h2("FEATURED PROJECTS")

projects = [
    {
        "title": "Real-Time Idea Sharing Platform",
        "type": "Full-Stack Web Application",
        "desc": "End-to-end platform for sharing ideas and interacting through nested discussion threads.",
        "bullets": [
            "Architected a responsive interface using 15+ modular reusable UI components.",
            "Managed complex application state with Context API across multi-layered views and nested comment threads.",
            "Implemented authentication, authorization, route protection, form validation, and REST API integration.",
            "Followed Git-based Agile development practices.",
        ],
        "tech": "React.js, TypeScript, Context API, Node.js, Express.js, MongoDB, Git, Agile",
    },
    {
        "title": "Custom LLM-Powered QA Bot",
        "type": "AI/GenAI/RAG",
        "desc": "AI-powered document question-answering system that retrieves relevant context before generating responses.",
        "bullets": [
            "Engineered a document-based QA pipeline using Python and LangChain.",
            "Implemented semantic search using FAISS and OpenAI embeddings.",
            "Designed retrieval workflows to improve context extraction from dense documents.",
            "Debugged retrieval timeouts and evaluated responses across different user intents.",
        ],
        "tech": "Python, LangChain, GPT-4, FAISS, OpenAI API, RAG",
    },
    {
        "title": "Zepto E-commerce Inventory Data Analysis",
        "type": "Data Analytics",
        "desc": "Analytical project focused on extracting insights from e-commerce inventory data.",
        "bullets": [
            "Analyzed 10K+ inventory rows using SQL queries.",
            "Used Python and Pandas to clean and structure data.",
            "Developed weight-based segmentation and pricing metrics.",
            "Extracted buying and inventory trends for analytical decision-making.",
        ],
        "tech": "SQL, PostgreSQL, Python, Pandas",
    },
]

for p in projects:
    block = []
    block.append(Paragraph(
        f"<b>{p['title']}</b> - {p['type']}", styles["role"],
    ))
    block.append(Paragraph(p["desc"], styles["sub"]))
    for it in p["bullets"]:
        block.append(Paragraph(it, styles["bullet"], bulletText="-"))
    block.append(Paragraph("<b>Tech:</b> " + p["tech"], styles["tech"]))
    story.append(KeepTogether(block))

# Problem Solving
h2("PROBLEM SOLVING")
story.append(Paragraph(
    "Solved 400+ algorithmic problems across LeetCode, CodeChef, Codeforces, and other coding platforms. "
    "Skilled at breaking complex problems into smaller components, reasoning about constraints, optimizing "
    "solutions, and debugging under time pressure.",
    styles["body"],
))

# Achievements
h2("ACHIEVEMENTS")
bullets([
    "400+ algorithmic problems solved across competitive programming platforms.",
    "JEE Main: 96 percentile nationwide.",
])

# Education
h2("EDUCATION")
for line in [
    "<b>National Institute of Technology, Warangal</b> - B.Tech, Batch of 2026 (Apr 2024 - 2026)",
    "<b>Sai Shivani Junior College</b> - State Board of Intermediate Education (2019 - 2021)",
]:
    story.append(Paragraph(line, styles["body"]))

# Leadership
h2("LEADERSHIP")
bullets([
    "Captain, Inter-NIT Kabaddi Team, NIT Warangal",
    "Executive Member, Film Club, NIT Warangal",
])

doc.build(story)
print("ATS-friendly resume generated.")
