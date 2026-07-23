import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(root, '..', 'dist');

let html = readFileSync(path.join(distDir, 'index.html'), 'utf8');

const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
const jsMatch = html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);

const cssPath = path.join(distDir, cssMatch[1].replace(/^\//, ''));
const jsPath = path.join(distDir, jsMatch[1].replace(/^\//, ''));

const css = readFileSync(cssPath, 'utf8');
let js = readFileSync(jsPath, 'utf8');

const heroPhoto = readFileSync(path.join(distDir, 'assets', 'hero-photo.webp'));
const resumePdf = readFileSync(path.join(distDir, 'assets', 'Muhammad_Numan_CV.pdf'));

js = js.split('/assets/hero-photo.webp').join(`data:image/webp;base64,${heroPhoto.toString('base64')}`);
js = js.split('/assets/Muhammad_Numan_CV.pdf').join(`data:application/pdf;base64,${resumePdf.toString('base64')}`);

// Use function replacers: a string replacer would interpret "$&" etc. inside
// the (arbitrary, minified) bundle text as special patterns instead of literal text.
html = html.replace(cssMatch[0], () => `<style>${css}</style>`);
html = html.replace(jsMatch[0], () => `<script type="module">${js}</script>`);
// Strip the outer doctype/html/head/body wrapper - Artifact tool supplies its own skeleton.
const bodyInner = html.match(/<body>([\s\S]*)<\/body>/)[1];
const headInner = html.match(/<head>([\s\S]*)<\/head>/)[1];

const out = `${headInner}\n${bodyInner}`;
writeFileSync(path.join(root, '..', 'portfolio-preview.html'), out);
console.log('wrote portfolio-preview.html', out.length, 'bytes');
