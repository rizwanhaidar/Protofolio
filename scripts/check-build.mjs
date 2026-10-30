import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const root='dist', base=(process.env.PORTFOLIO_BASE||'/Protofolio').replace(/\/$/,'');
function walk(p){return readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(p,e.name)):[join(p,e.name)]);}
const pages=walk(root).filter(p=>p.endsWith('.html'));let links=0;
for(const p of pages){const html=readFileSync(p,'utf8');for(const key of ['<title>','name="description"','rel="canonical"','id="main"'])if(!html.includes(key))throw Error(`${p}: missing ${key}`);for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=m[1].split('#')[0].split('?')[0];if(!url.startsWith(base+'/'))continue;let file=decodeURIComponent(url.slice(base.length+1));if(!file||file.endsWith('/'))file+='index.html';if(!existsSync(join(root,file)))throw Error(`${p}: broken ${url}`);links++;}}
if(pages.length!==14)throw Error('Expected 14 static pages');
const professional=readFileSync('dist/professional/index.html','utf8');const academic=readFileSync('dist/academic/index.html','utf8');
for(const name of ['Toyota Financial Services','Teradata','GIZ','Uniklinikum Köln','Volvo Cars','Federated Co-operatives'])if(!professional.includes(name))throw Error('Missing '+name);
for(const name of ['University of Bonn','FAST','XAIHate','Natural language inference','Polarization','Graph learning','chain-of-thought'])if(!academic.includes(name))throw Error('Missing '+name);
console.log(`PASS: ${pages.length} pages; ${links} local asset/navigation links; profile content and metadata.`);
