// Genera src/data/timelineMedia.js a partir de src/assets/TIMELINE_ST.
//
// El nombre de cada carpeta de hito empieza con su fecha (ej. 01_2015_Equipo_Cova
// o 18_2026-03-15_Remodelacion_Laboratorio) y ese es el orden que sigue la linea
// de tiempo en src/views/SobreNosotros.jsx: mas reciente primero.
//
// Uso: node scripts/timeline-index.mjs

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const assetsDir = join(root, "src", "assets", "TIMELINE_ST");
const outFile = join(root, "src", "data", "timelineMedia.js");

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const VID_EXT = new Set([".mp4", ".webm", ".mov", ".m4v", ".ogv"]);

const ext = (name) => name.slice(name.lastIndexOf(".")).toLowerCase();

// Convierte un nombre de archivo en un identificador valido de JS.
const sanitize = (name) => name.replace(/\.[^.]+$/, "").replace(/[^A-Za-z0-9]/g, "_");

// Extrae el numero de orden y la fecha del nombre de la carpeta.
// "02_2018-03-20_Recepcion_ShowRoom" -> { num: 2, time: Date(2018-03-20) }
// "01_2015_Equipo_Cova"              -> { num: 1, time: Date(2015-01-01) }
const parseFolder = (folder) => {
  const num = Number.parseInt(folder, 10);
  const dateMatch = folder.match(/^\d+_(\d{4}(?:-\d{2}-\d{2})?)/);
  const time = dateMatch ? Date.parse(dateMatch[1]) || 0 : 0;
  return { num, time };
};

const dirs = readdirSync(assetsDir)
  .filter((entry) => statSync(join(assetsDir, entry)).isDirectory())
  .map((folder) => ({ folder, ...parseFolder(folder) }));

// Orden ascendente por numero para los imports y nombres de variable.
const byNumber = [...dirs].sort((a, b) => a.num - b.num);
// Orden descendente por fecha (mas reciente primero) para el arreglo exportado.
const byDateDesc = [...dirs].sort((a, b) => b.time - a.time || b.num - a.num);

const varBase = (folder) => `hito${Number.parseInt(folder, 10)}`;

const imports = [];
const entries = [];

for (const { folder } of byNumber) {
  const base = varBase(folder);
  const folderPath = join(assetsDir, folder);
  const rel = (p) => relative(join(root, "src"), p).split("\\").join("/");

  imports.push(`// ${folder}`);
  const portada = join(folderPath, "portada.jpg");
  imports.push(`import ${base}Portada from "../${rel(portada)}";`);

  const imgDir = join(folderPath, "img");
  const vidDir = join(folderPath, "video");

  const imgFiles = readdirSync(imgDir, { withFileTypes: true })
    .filter((e) => e.isFile() && IMG_EXT.has(ext(e.name)))
    .map((e) => e.name)
    .sort();
  const vidFiles = readdirSync(vidDir, { withFileTypes: true })
    .filter((e) => e.isFile() && VID_EXT.has(ext(e.name)))
    .map((e) => e.name)
    .sort();

  const imgVars = imgFiles.map((file, i) => {
    const v = `${base}_img_${sanitize(file)}`;
    imports.push(`import ${v} from "../${rel(join(imgDir, file))}";`);
    return { v, i };
  });
  const vidVars = vidFiles.map((file) => {
    const v = `${base}_vid_${sanitize(file)}`;
    imports.push(`import ${v} from "../${rel(join(vidDir, file))}";`);
    return v;
  });

  imports.push("");
  entries.push({ folder, base, imgVars, vidVars });
}

const entryByName = new Map(entries.map((e) => [e.folder, e]));

const blocks = byDateDesc.map(({ folder }) => {
  const e = entryByName.get(folder);
  const imgs = e.imgVars.map((x) => x.v).join(", ");
  const vids = e.vidVars.join(", ");
  return [
    "  {",
    `    portada: ${e.base}Portada,`,
    `    imagenes: [${imgs}],`,
    `    videos: [${vids}],`,
    "  },",
  ].join("\n");
});

const out = `// ARCHIVO GENERADO AUTOMATICAMENTE - no editar a mano.
// Organiza los medios de la linea de tiempo por hito (src/assets/TIMELINE_ST).
// Orden: mas reciente primero, igual que el arreglo \`hitos\` de SobreNosotros.jsx.
// Regenerar con: node scripts/timeline-index.mjs

${imports.join("\n")}
export const timelineMedia = [
${blocks.join("\n")}
];

export default timelineMedia;
`;

writeFileSync(outFile, out);
console.log(`Generados ${blocks.length} hitos en ${relative(root, outFile)}`);
