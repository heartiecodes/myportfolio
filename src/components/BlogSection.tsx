import { useState } from "react";
import { Calendar, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning in Python",
    excerpt:
      "A beginner-friendly guide to building your first ML model using scikit-learn and pandas.",
    date: "2025-12-15",
    tags: ["Python", "Machine Learning", "Data Visualization", "scikit-learn", "NumPy", "Pandas"],
    content: `Machine Learning (ML) is one of the fastest-growing fields in tech, and Python has become the go-to language for building ML models. If you're new, starting with Python allows you to focus on learning ML concepts without worrying about complex syntax.

Python libraries like scikit-learn, pandas, and NumPy provide all the tools needed to preprocess data, train models, and evaluate results. Beginners can start with linear regression or classification problems to understand how models make predictions and learn patterns from data.

**Insights:**

- Start with small, clean datasets to understand how ML algorithms work.
- Visualizing data with Matplotlib or Seaborn helps identify trends before modeling.
- Evaluate models using metrics like accuracy, precision, recall, and F1-score.`,
  },
  {
    id: 2,
    title: "Power BI Tips – DAX Measures for Beginners",
    excerpt:
      "Learn the most useful DAX functions to level up your Power BI dashboards and reports.",
    date: "2025-11-20",
    tags: ["Power BI", "DAX", "Data Visualization", "BI Analytics", "KPIs"],
    content: `Power BI is a powerful tool for data visualization and reporting, and DAX (Data Analysis Expressions) is the formula language that lets you create custom calculations and measures. Beginners can start with simple measures like SUM, AVERAGE, or COUNTROWS to understand your dataset better.

Learning DAX enables analysts to compute KPIs, create dynamic metrics, and generate insights that are not immediately available from raw data. For example, you can calculate year-to-date sales, profit margins, or customer retention rates using DAX measures.

**Insights:**

- Start with simple DAX measures before moving to complex ones like CALCULATE and FILTER.
- Use measures instead of calculated columns for better performance.
- Visualize your DAX results in charts to make insights more actionable.`,
  },
  {
    id: 3,
    title: "Data Cleaning Best Practices with Pandas",
    excerpt:
      "How to handle missing data, duplicates, and inconsistent formats like a pro.",
    date: "2025-10-05",
    tags: ["Python", "Pandas", "Data Cleaning", "Data Preprocessing", "Machine Learning Preparation"],
    content: `Data cleaning is a crucial step in any data science project. Pandas, a Python library, makes it easy to detect and handle missing values, duplicates, and inconsistent data. Cleaning your dataset ensures your models perform accurately and your insights are reliable.

Key practices include handling NaN values, converting data types, standardizing string formats, and detecting outliers. Using Pandas' functions like .dropna(), .fillna(), .astype(), and .replace() can save hours of manual cleaning.

**Insights:**

- Always inspect your dataset before modeling: check for nulls, duplicates, and inconsistencies.
- Decide carefully how to handle missing values: drop, fill, or predict.
- Consistent, clean data improves model performance and reduces errors downstream.`,
  },
];

const BlogSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="blog" className="py-24 border-t border-border">
      <div className="section-container space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl text-gradient-green">
            Blog &amp; Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tutorials, analyses, and thoughts on data science.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="glass-card p-6 space-y-4 hover-glow group animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              {expandedId === post.id && (
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line animate-fade-in border-t border-border pt-4">
                  {post.content}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary border border-border px-3 py-0.5 text-xs text-terminal-green"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                className="inline-flex items-center gap-1 text-sm text-highlight hover:underline"
              >
                {expandedId === post.id ? (
                  <>Show less <ChevronUp size={14} /></>
                ) : (
                  <>Read more <ArrowRight size={14} /></>
                )}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
