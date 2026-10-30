import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const root='dist', base=(process.env.PORTFOLIO_BASE||'/Protofolio').replace(/\/$/,'');
function walk(p){return readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(p,e.name)):[join(p,e.name)]);}
const all=walk(root).filter(p=>p.endsWith('.html')&&!p.endsWith('/review.html'));
// Redirect stubs (meta refresh) only need a valid target.
const redirects=all.filter(p=>readFileSync(p,'utf8').includes('http-equiv="refresh"'));
const pages=all.filter(p=>!redirects.includes(p));let links=0;
for(const p of all){const html=readFileSync(p,'utf8');if(!redirects.includes(p))for(const key of ['<title>','name="description"','rel="canonical"','id="main"'])if(!html.includes(key))throw Error(`${p}: missing ${key}`);for(const m of html.matchAll(/(?:href|src|content)="(?:0; url=)?([^"]+)"/g)){const url=m[1].split('#')[0].split('?')[0];if(!url.startsWith(base+'/'))continue;let file=decodeURIComponent(url.slice(base.length+1));if(!file||file.endsWith('/'))file+='index.html';if(!existsSync(join(root,file)))throw Error(`${p}: broken ${url}`);links++;}}
if(pages.length!==14)throw Error(`Expected 14 content pages, found ${pages.length}`);
if(redirects.length!==1)throw Error(`Expected 1 redirect page, found ${redirects.length}`);
const professional=readFileSync('dist/professional/index.html','utf8');const academic=readFileSync('dist/academic/index.html','utf8');
for(const name of ['Toyota Financial Services','Teradata','GIZ','Uniklinik Köln','Volvo Cars','Federated Co-operatives','Data work across five regions','Recognized at Teradata','English C1'])if(!professional.includes(name))throw Error('Missing '+name);
for(const name of ['University of Bonn','FAST','XAIHate','Natural language inference','Polarization','Graph learning','chain-of-thought'])if(!academic.includes(name))throw Error('Missing '+name);
// Projects precede education on the academic page.
if(academic.indexOf('id="work"')>academic.indexOf('id="background"'))throw Error('Academic projects must precede education');
// Every academic project names its team or author.
for(const slug of ['nli','graph-aml','polarization','xaihate','ai-safety']){
 const page=readFileSync(`dist/work/${slug}/index.html`,'utf8');
 if(!/Team|team|sole author/.test(page))throw Error(`Missing team or author line: ${slug}`);
}
if(!academic.includes('91.04%')||!academic.includes('77.6%')||!academic.includes('0.763'))throw Error('Missing flagship findings');
// Removed disclaimers must not return.
for(const p of pages){const html=readFileSync(p,'utf8');for(const phrase of ['self-reported','not substantiated','Earlier CV context','Uniklinikum'])if(html.includes(phrase))throw Error(`${p}: contains "${phrase}"`);}
console.log(`PASS: ${pages.length} pages + ${redirects.length} redirect; ${links} local links; profile content and metadata.`);
