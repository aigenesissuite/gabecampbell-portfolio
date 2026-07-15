// One-shot codemod: <section className="..."><div className="wrap">…</div></section>
// → <Section …>…</Section> (the layout-law primitive in components/site.tsx).
import { readFileSync, writeFileSync } from "node:fs";

const files = [
  "app/page.tsx",
  "app/work/aios/page.tsx",
  "app/work/bmw/page.tsx",
  "app/work/google/page.tsx",
  "app/work/lumin/page.tsx",
];

const open =
  /^([ \t]*)<section className="([^"]*)"(?: id="([^"]*)")?>\n[ \t]*<div className="wrap">\n/gm;

for (const file of files) {
  let src = readFileSync(file, "utf8");
  const out = [];
  let cursor = 0;
  let count = 0;
  open.lastIndex = 0;
  let m;
  while ((m = open.exec(src)) !== null) {
    const [full, indent, cls, id] = m;
    const start = m.index;
    const closeRe = new RegExp(`\\n${indent}  </div>\\n${indent}</section>`, "g");
    closeRe.lastIndex = open.lastIndex;
    const cm = closeRe.exec(src);
    if (!cm) throw new Error(`${file}: no close for section at ${start}`);
    let body = src.slice(open.lastIndex, cm.index);
    // Dedent one level (the removed .wrap div)
    body = body
      .split("\n")
      .map((l) => (l.startsWith("  ") ? l.slice(2) : l))
      .join("\n");
    const classes = cls.split(/\s+/).filter((c) => c !== "section");
    const attrs = [
      classes.length ? ` className="${classes.join(" ")}"` : "",
      id ? ` id="${id}"` : "",
    ].join("");
    out.push(src.slice(cursor, start));
    out.push(`${indent}<Section${attrs}>\n${body}\n${indent}</Section>`);
    cursor = cm.index + cm[0].length;
    open.lastIndex = cursor;
    count++;
  }
  out.push(src.slice(cursor));
  src = out.join("");
  // Ensure Section is imported from @/components/site
  src = src.replace(
    /import \{([^}]*)\} from "@\/components\/site";/,
    (full, names) => {
      if (/\bSection\b/.test(names)) return full;
      const list = names
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      list.push("Section");
      list.sort();
      return `import { ${list.join(", ")} } from "@/components/site";`;
    }
  );
  writeFileSync(file, src);
  console.log(`${file}: ${count} sections migrated`);
}
