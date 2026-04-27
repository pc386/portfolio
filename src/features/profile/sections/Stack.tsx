import "./Stack.css";

const stackGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python", "PHP"],
  },
  {
    category: "Frontend",
    items: ["React", "Vue", "HTML/CSS", "Vite", "Vitest", "Jest", "TanStack"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Prisma", "GORM", "tRPC", "gRPC"],
  },
  {
    category: "Cloud / Infrastructure",
    items: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "CircleCI",
      "ArgoCD",
      "GitLab CI/CD",
    ],
  },
  {
    category: "Data / Observability",
    items: ["PostgreSQL", "MongoDB", "Grafana", "Prometheus"],
  },
  {
    category: "Other",
    items: ["Linux", "Git", "AI assisted development"],
  },
] as const;

function Stack() {
  return (
    <div className="Stack" id="stack">
      <br />

      <ul className="Stack-groups">
        {stackGroups.map(({ category, items }) => (
          <li key={category}>
            {category}
            <ul className="Stack-items">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stack;
