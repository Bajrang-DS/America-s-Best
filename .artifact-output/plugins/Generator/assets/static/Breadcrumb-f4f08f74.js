import{r as t}from"./index-a35321e4.js";import{r as f,c,b as y}from"./global-1814383f.js";import{j as a,a as n,F as u}from"./index-6ffcb120.js";import{L as s}from"./link-4b1726a6.js";const _=l=>{const[o,d]=t.exports.useState(null);var m,i=[];t.exports.useEffect(()=>{h(l.parents,l.baseUrl),console.log(l.parents)},[d]);const h=(r,g)=>{if(r){for(let e=0;e<r.length;e++)r[e].meta.entityType.id=="ce_country"?(r[e].slug=r[e].slug,i.push({name:f.of(r[e].name),slug:r[e].slug,count:r[e].dm_directoryChildrenCount})):r[e].meta.entityType.id=="ce_region"?(i.push({name:r[e].name,slug:`${r[e-1].slug}/${r[e].slug}`,count:r[e].dm_directoryChildrenCount}),r[e].name=r[e].name,r[e].slug=`${r[e-1].slug}/${r[e].slug}`):r[e].meta.entityType.id=="ce_city"&&(r[e].name=r[e].name,r[e].slug=`${r[e-1].slug}/${r[e].slug}`,i.push({name:r[e].name,slug:r[e].slug,count:r[e].dm_directoryChildrenCount}));m=i.map(e=>a("li",{children:e.count==1?n(s,{href:"javascript:void(0)",className:"cursor-not-allowed","data-ya-track":"Breadcrumbs",eventName:"Breadcrumbs",rel:"noopener noreferrer",conversionDetails:c,children:[" ",e.name]}):n(s,{href:g+e.slug+".html","data-ya-track":"Breadcrumbs",eventName:"Breadcrumbs",rel:"noopener noreferrer",conversionDetails:c,children:[" ",e.name]})},e.slug)),d(m)}else d(null)};return a("div",{className:"breadcrumb",children:a("div",{className:"container mx-auto",children:n("ul",{className:"flex",children:[a("li",{children:a(s,{className:"home",href:"/","data-ya-track":"Breadcrumbs",eventName:"Breadcrumbs",rel:"noopener noreferrer",conversionDetails:c,children:a("div",{dangerouslySetInnerHTML:{__html:y}})})}),o||a(u,{children:l.address&&l.address.city?n("li",{className:"inline-block",children:[" ",a(s,{href:l.baseUrl+l.address.city,"data-ya-track":"Breadcrumbs",eventName:"Breadcrumbs",rel:"noopener noreferrer",conversionDetails:c,children:l.address.city?l.address.city:""})]}):a(u,{})}),a("li",{children:l&&l.name})]})})})};export{_ as B};
