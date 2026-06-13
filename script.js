const data = {
    identity: {
        title: "Core Identity",
        previewTitle: "Built On Three Pillars",
        html: `
            <ul>
                <li><strong>N</strong> — Neha Parepalli</li>
                <li><strong>Database</strong> — Data Engineering</li>
                <li><strong>Spark</strong> — Artificial Intelligence</li>
            </ul>
        `
    },

    experience: {
        title: "Experience",
        previewTitle: "3 Years Professional Experience",
        html: `
            <p>
                <strong>Working Student – Generative AI</strong><br>
                ITERGO Informationstechnologie GmbH<br>
                Düsseldorf, Germany · Sep 2025 – Mar 2026
            </p>

            <div style="height:12px;"></div>

            <p>
                <strong>AI Intern – Generative AI</strong><br>
                ITERGO Informationstechnologie GmbH<br>
                Düsseldorf, Germany · Mar 2025 – Aug 2025
            </p>

            <div style="height:12px;"></div>

            <p>
                <strong>Data Engineering Analyst</strong><br>
                Accenture Private Solutions Limited<br>
                Mumbai, India · Sep 2021 – Aug 2023
            </p>
        `
    },

    education: {
        title: "Education",
        previewTitle: "Engineering Education",
        html: `
            <p>
                <strong>M.Sc. Electrical Engineering & Information Technology</strong><br>
                Darmstadt University of Applied Sciences<br>
                Darmstadt, Germany · Sep 2023 – Mar 2026
            </p>

            <div style="height:12px;"></div>

            <p>
                <strong>B.E. Electronics & Telecommunication Engineering</strong><br>
                St. Francis Institute of Technology<br>
                Mumbai, India · Aug 2017 – Jun 2021
            </p>
        `
    },

    projects: {
        title: "Projects",
        previewTitle: "AI, Data & Platform Engineering Projects",
        html: `
            <ul>
                <li><strong>AI Incident Copilot</strong> · Production RCA with RAG</li>
                <li><strong>Document Intelligence</strong> · Semantic search & analytics</li>
                <li><strong>Clickstream Lakehouse</strong> · PySpark lakehouse</li>
                <li><strong>Market Data Platform</strong> · Airflow & CI/CD</li>
            </ul>

            <div class="chips">
                <span>FastAPI</span>
                <span>React</span>
                <span>RAG</span>
                <span>LangChain</span>
                <span>ChromaDB</span>
                <span>Ollama</span>
                <span>Docker</span>
                <span>PySpark</span>
            </div>
        `
    },

    journey: {
        title: "Journey",
        previewTitle: "Career Star Route",
        html: `
            <div class="journey-mini-map">

                <svg class="mini-route-lines" viewBox="0 0 360 250">
                    <line x1="43" y1="145" x2="137" y2="70" />
                    <line x1="137" y1="70" x2="209" y2="145" />

                    <line x1="209" y1="145" x2="288" y2="80" />
                    <line x1="209" y1="145" x2="288" y2="190" />

                    <line x1="288" y1="80" x2="335" y2="138" />
                    <line x1="288" y1="190" x2="335" y2="138" />
                </svg>

                <div class="map-node node-bachelors">
                    <span></span>
                    <p>Bachelor's</p>
                    <small>Aug 2017–Jun 2021</small>
                </div>

                <div class="map-node node-dataeng">
                    <span></span>
                    <p>Data Engineer</p>
                    <small>Sep 2021–Aug 2023</small>
                </div>

                <div class="map-node node-masters">
                    <span></span>
                    <p>Master's</p>
                    <small>Sep 2023–Mar 2026</small>
                </div>

                <div class="map-node node-intern">
                    <span></span>
                    <p>Intern</p>
                    <small>Mar 2025–Aug 2025</small>
                </div>

                <div class="map-node node-working">
                    <span></span>
                    <p>Working Student</p>
                    <small>Sep 2025–Mar 2026</small>
                </div>

                <div class="map-node node-goal">
                    <span></span>
                    <p>Goal</p>
                    <small>Data & AI Engineer</small>
                    <small>Germany</small>
                </div>

            </div>
        `
    },

    skillData: {
        title: "Data",
        previewTitle: "Data Engineering Core",
        html: `
            <div class="chips">
                <span>Python</span>
                <span>SQL</span>
                <span>PySpark</span>
                <span>ETL / ELT</span>
                <span>Data Modeling</span>
                <span>Data Quality</span>
            </div>
        `
    },

    skillGenAI: {
        title: "GenAI",
        previewTitle: "Generative AI Engineering",
        html: `
            <div class="chips">
                <span>LLMs</span>
                <span>RAG</span>
                <span>LangChain</span>
                <span>Prompt Engineering</span>
                <span>Generative AI</span>
                <span>OpenAI APIs</span>
            </div>
        `
    },

    skillPlatform: {
        title: "Platform",
        previewTitle: "Data Platform Engineering",
        html: `
            <div class="chips">
                <span>Airflow</span>
                <span>dbt</span>
                <span>DuckDB</span>
                <span>Data Validation</span>
                <span>Data Quality</span>
                <span>FAISS</span>
            </div>
        `
    },

    skillBackend: {
        title: "Backend",
        previewTitle: "Backend & DevOps",
        html: `
            <div class="chips">
                <span>FastAPI</span>
                <span>Docker</span>
                <span>REST APIs</span>
                <span>GitHub Actions</span>
                <span>CI/CD</span>
                <span>Azure</span>
            </div>
        `
    },

    skillBigData: {
        title: "Big Data",
        previewTitle: "Streaming & Lakehouse Engineering",
        html: `
            <div class="chips">
                <span>PySpark</span>
                <span>Structured Streaming</span>
                <span>Medallion Architecture</span>
                <span>Delta Lake</span>
                <span>Parquet</span>
            </div>
        `
    }
};

const previewCard = document.getElementById("previewCard");
let hideTimer;

function setPreview(key) {
    const item = data[key];
    if (!item) return;

    clearTimeout(hideTimer);
    previewCard.classList.remove("hidden");

    previewCard.innerHTML = `
        <p class="preview-label">${item.title.toUpperCase()}</p>
        <h3>${item.previewTitle}</h3>
        ${item.html}
    `;
}

function hidePreview() {
    hideTimer = setTimeout(() => {
        previewCard.classList.add("hidden");
    }, 120);
}

document.querySelectorAll("[data-section]").forEach(el => {
    const key = el.dataset.section;

    el.addEventListener("mouseenter", () => setPreview(key));
    el.addEventListener("focus", () => setPreview(key));

    el.addEventListener("mouseleave", hidePreview);
    el.addEventListener("blur", hidePreview);
});

previewCard.addEventListener("mouseenter", () => {
    clearTimeout(hideTimer);
});

previewCard.addEventListener("mouseleave", hidePreview);

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = Array.from({ length: 140 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.3,
        s: Math.random() * 0.25 + 0.05
    }));
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.y += star.s;

        if (star.y > canvas.height) {
            star.y = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.78)";
        ctx.fill();
    }

    requestAnimationFrame(drawStars);
}

resizeCanvas();
drawStars();

window.addEventListener("resize", resizeCanvas);