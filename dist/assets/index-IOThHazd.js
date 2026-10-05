(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const pd="modulepreload",md=function(n){return"/"+n},Va={},Tr=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(t.map(c=>{if(c=md(c),c in Va)return;Va[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":pd,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="170",_d=0,Wa=1,gd=2,fl=1,xd=2,Mn=3,Wn=0,It=1,yn=2,Bn=0,Fi=1,Xa=2,$a=3,qa=4,vd=5,si=100,Md=101,yd=102,Sd=103,Ed=104,bd=200,wd=201,Td=202,Ad=203,uo=204,fo=205,Rd=206,Cd=207,Pd=208,Ld=209,Id=210,Dd=211,Ud=212,Nd=213,zd=214,ho=0,po=1,mo=2,Bi=3,_o=4,go=5,xo=6,vo=7,ua=0,Fd=1,kd=2,Hn=0,Od=1,Bd=2,Hd=3,Gd=4,Vd=5,Wd=6,Xd=7,hl=300,Hi=301,Gi=302,Mo=303,yo=304,ys=306,So=1e3,ai=1001,Eo=1002,tn=1003,$d=1004,Ar=1005,an=1006,Ps=1007,ci=1008,Cn=1009,pl=1010,ml=1011,hr=1012,fa=1013,fi=1014,En=1015,_r=1016,ha=1017,pa=1018,Vi=1020,_l=35902,gl=1021,xl=1022,en=1023,vl=1024,Ml=1025,ki=1026,Wi=1027,yl=1028,ma=1029,Sl=1030,_a=1031,ga=1033,Qr=33776,es=33777,ts=33778,ns=33779,bo=35840,wo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Lo=37808,Io=37809,Do=37810,Uo=37811,No=37812,zo=37813,Fo=37814,ko=37815,Oo=37816,Bo=37817,Ho=37818,Go=37819,Vo=37820,Wo=37821,is=36492,Xo=36494,$o=36495,El=36283,qo=36284,Yo=36285,jo=36286,qd=3200,Yd=3201,bl=0,jd=1,kn="",Gt="srgb",Yi="srgb-linear",Ss="linear",Je="srgb",gi=7680,Ya=519,Zd=512,Kd=513,Jd=514,wl=515,Qd=516,eu=517,tu=518,nu=519,ja=35044,Za="300 es",bn=2e3,us=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,Zo=180/Math.PI;function gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function iu(n,e){return(n%e+e)%e}function Is(n,e,t){return(1-t)*n+t*e}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,r,s,o,a,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],f=i[2],m=i[5],g=i[8],v=r[0],p=r[3],h=r[6],w=r[1],_=r[4],x=r[7],C=r[2],T=r[5],b=r[8];return s[0]=o*v+a*w+c*C,s[3]=o*p+a*_+c*T,s[6]=o*h+a*x+c*b,s[1]=l*v+d*w+u*C,s[4]=l*p+d*_+u*T,s[7]=l*h+d*x+u*b,s[2]=f*v+m*w+g*C,s[5]=f*p+m*_+g*T,s[8]=f*h+m*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,f=a*c-d*s,m=l*s-o*c,g=t*u+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*l-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(d*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Le;function Tl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ru(){const n=fs("canvas");return n.style.display="block",n}const Ka={};function sr(n){n in Ka||(Ka[n]=!0,console.warn(n))}function su(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ou(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function au(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Je&&(n.r=Tn(n.r),n.g=Tn(n.g),n.b=Tn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(n.r=Oi(n.r),n.g=Oi(n.g),n.b=Oi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===kn?Ss:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ja=[.64,.33,.3,.6,.15,.06],Qa=[.2126,.7152,.0722],ec=[.3127,.329],tc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Yi]:{primaries:Ja,whitePoint:ec,transfer:Ss,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:Qa,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:Ja,whitePoint:ec,transfer:Je,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:Qa,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});let xi;class cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=fs("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lu=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Us(r[o].image)):s.push(Us(r[o]))}else s=Us(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Us(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class Dt extends ji{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=ai,r=ai,s=an,o=ci,a=en,c=Cn,l=Dt.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=gr(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=hl;Dt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(m+1)/2,C=(h+1)/2,T=(d+f)/4,b=(u+v)/4,R=(g+p)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=b/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=R/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-v)/w,this.z=(f-d)/w,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends uu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rl extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fu extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==m||d!==g){let p=1-a;const h=c*f+l*m+d*g+u*v,w=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,h*w);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const x=a*w;if(c=c*p+f*x,l=l*p+m*x,d=d*p+g*x,u=u*p+v*x,p===1-a){const C=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=C,l*=C,d*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*u+c*m-l*f,e[t+1]=c*g+d*f+l*u-a*m,e[t+2]=l*g+d*m+a*f-c*u,e[t+3]=d*g-a*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),u=a(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*d*u+l*m*g,this._y=l*m*u-f*d*g,this._z=l*d*g+f*m*u,this._w=l*d*u-f*m*g;break;case"YXZ":this._x=f*d*u+l*m*g,this._y=l*m*u-f*d*g,this._z=l*d*g-f*m*u,this._w=l*d*u+f*m*g;break;case"ZXY":this._x=f*d*u-l*m*g,this._y=l*m*u+f*d*g,this._z=l*d*g+f*m*u,this._w=l*d*u-f*m*g;break;case"ZYX":this._x=f*d*u-l*m*g,this._y=l*m*u+f*d*g,this._z=l*d*g-f*m*u,this._w=l*d*u+f*m*g;break;case"YZX":this._x=f*d*u+l*m*g,this._y=l*m*u+f*d*g,this._z=l*d*g-f*m*u,this._w=l*d*u-f*m*g;break;case"XZY":this._x=f*d*u-l*m*g,this._y=l*m*u-f*d*g,this._z=l*d*g+f*m*u,this._w=l*d*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*d,this.y=i+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new N,ic=new xr;class vr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(s,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Cr.subVectors(this.max,tr),vi.subVectors(e.a,tr),Mi.subVectors(e.b,tr),yi.subVectors(e.c,tr),In.subVectors(Mi,vi),Dn.subVectors(yi,Mi),Zn.subVectors(vi,yi);let t=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];return!zs(t,vi,Mi,yi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,vi,Mi,yi,Cr))?!1:(Pr.crossVectors(In,Dn),t=[Pr.x,Pr.y,Pr.z],zs(t,vi,Mi,yi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],Yt=new N,Rr=new vr,vi=new N,Mi=new N,yi=new N,In=new N,Dn=new N,Zn=new N,tr=new N,Cr=new N,Pr=new N,Kn=new N;function zs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kn.fromArray(n,s);const a=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),c=e.dot(Kn),l=t.dot(Kn),d=i.dot(Kn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const hu=new vr,nr=new N,Fs=new N;class xa{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Fs)),this.expandByPoint(nr.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,ks=new N,Lr=new N,Un=new N,Os=new N,Ir=new N,Bs=new N;class pu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ks.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(ks);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=Un.dot(this.direction),c=-Un.dot(Lr),l=Un.lengthSq(),d=Math.abs(1-o*o);let u,f,m,g;if(d>0)if(u=o*c-a,f=o*a-c,g=s*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ks).addScaledVector(Lr,f),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const i=mn.dot(this.direction),r=mn.dot(mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,i,r,s){Os.subVectors(t,e),Ir.subVectors(i,e),Bs.crossVectors(Os,Ir);let o=this.direction.dot(Bs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(Un,Ir));if(c<0)return null;const l=a*this.direction.dot(Os.cross(Un));if(l<0||c+l>o)return null;const d=-a*Un.dot(Bs);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,c,l,d,u,f,m,g,v,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,u,f,m,g,v,p)}set(e,t,i,r,s,o,a,c,l,d,u,f,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*u,g=a*d,v=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,m=c*u,g=l*d,v=l*u;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,m=c*u,g=l*d,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,m=o*u,g=a*d,v=a*u;t[0]=c*d,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+v,t[5]=o*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mu,e,_u)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Nn.crossVectors(i,zt),Nn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Nn.crossVectors(i,zt)),Nn.normalize(),Dr.crossVectors(zt,Nn),r[0]=Nn.x,r[4]=Dr.x,r[8]=zt.x,r[1]=Nn.y,r[5]=Dr.y,r[9]=zt.y,r[2]=Nn.z,r[6]=Dr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],w=i[3],_=i[7],x=i[11],C=i[15],T=r[0],b=r[4],R=r[8],S=r[12],M=r[1],P=r[5],k=r[9],F=r[13],V=r[2],j=r[6],W=r[10],Q=r[14],G=r[3],ie=r[7],le=r[11],ve=r[15];return s[0]=o*T+a*M+c*V+l*G,s[4]=o*b+a*P+c*j+l*ie,s[8]=o*R+a*k+c*W+l*le,s[12]=o*S+a*F+c*Q+l*ve,s[1]=d*T+u*M+f*V+m*G,s[5]=d*b+u*P+f*j+m*ie,s[9]=d*R+u*k+f*W+m*le,s[13]=d*S+u*F+f*Q+m*ve,s[2]=g*T+v*M+p*V+h*G,s[6]=g*b+v*P+p*j+h*ie,s[10]=g*R+v*k+p*W+h*le,s[14]=g*S+v*F+p*Q+h*ve,s[3]=w*T+_*M+x*V+C*G,s[7]=w*b+_*P+x*j+C*ie,s[11]=w*R+_*k+x*W+C*le,s[15]=w*S+_*F+x*Q+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*m-i*c*m)+v*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*d-s*c*d)+p*(+t*l*u-t*a*m-s*o*u+i*o*m+s*a*d-i*l*d)+h*(-r*a*d-t*c*u+t*a*f+r*o*u-i*o*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],w=u*p*l-v*f*l+v*c*m-a*p*m-u*c*h+a*f*h,_=g*f*l-d*p*l-g*c*m+o*p*m+d*c*h-o*f*h,x=d*v*l-g*u*l+g*a*m-o*v*m-d*a*h+o*u*h,C=g*u*c-d*v*c-g*a*f+o*v*f+d*a*p-o*u*p,T=t*w+i*_+r*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=w*b,e[1]=(v*f*s-u*p*s-v*r*m+i*p*m+u*r*h-i*f*h)*b,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*h+i*c*h)*b,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*m-i*c*m)*b,e[4]=_*b,e[5]=(d*p*s-g*f*s+g*r*m-t*p*m-d*r*h+t*f*h)*b,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*h-t*c*h)*b,e[7]=(o*f*s-d*c*s+d*r*l-t*f*l-o*r*m+t*c*m)*b,e[8]=x*b,e[9]=(g*u*s-d*v*s-g*i*m+t*v*m+d*i*h-t*u*h)*b,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*h+t*a*h)*b,e[11]=(d*a*s-o*u*s-d*i*l+t*u*l+o*i*m-t*a*m)*b,e[12]=C*b,e[13]=(d*v*r-g*u*r+g*i*f-t*v*f-d*i*p+t*u*p)*b,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*b,e[15]=(o*u*r-d*a*r+d*i*c-t*u*c-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,f=s*l,m=s*d,g=s*u,v=o*d,p=o*u,h=a*u,w=c*l,_=c*d,x=c*u,C=i.x,T=i.y,b=i.z;return r[0]=(1-(v+h))*C,r[1]=(m+x)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(m-x)*T,r[5]=(1-(f+h))*T,r[6]=(p+w)*T,r[7]=0,r[8]=(g+_)*b,r[9]=(p-w)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const l=1/s,d=1/o,u=1/a;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=d,jt.elements[5]*=d,jt.elements[6]*=d,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bn){const c=this.elements,l=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(a===bn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===us)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bn){const c=this.elements,l=1/(t-e),d=1/(i-r),u=1/(o-s),f=(t+e)*l,m=(i+r)*d;let g,v;if(a===bn)g=(o+s)*u,v=-2*u;else if(a===us)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Si=new N,jt=new pt,mu=new N(0,0,0),_u=new N(1,1,1),Nn=new N,Dr=new N,zt=new N,rc=new pt,sc=new xr;class dn{constructor(e=0,t=0,i=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gu=0;const oc=new N,Ei=new xr,_n=new pt,Ur=new N,ir=new N,xu=new N,vu=new xr,ac=new N(1,0,0),cc=new N(0,1,0),lc=new N(0,0,1),dc={type:"added"},Mu={type:"removed"},bi={type:"childadded",child:null},Hs={type:"childremoved",child:null};class St extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new dn,i=new xr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Le}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ur.copy(e):Ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ir,Ur,this.up):_n.lookAt(Ur,ir,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(_n),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mu),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new N,gn=new N,Gs=new N,xn=new N,wi=new N,Ti=new N,uc=new N,Vs=new N,Ws=new N,Xs=new N,$s=new ht,qs=new ht,Ys=new ht;class Jt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),gn.subVectors(i,t),Gs.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(gn),c=Zt.dot(Gs),l=gn.dot(gn),d=gn.dot(Gs),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(l*c-a*d)*f,g=(o*d-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return $s.setScalar(0),qs.setScalar(0),Ys.setScalar(0),$s.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,i),Ys.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($s,s.x),o.addScaledVector(qs,s.y),o.addScaledVector(Ys,s.z),o}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),gn.subVectors(e,t),Zt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Zt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;wi.subVectors(r,i),Ti.subVectors(s,i),Vs.subVectors(e,i);const c=wi.dot(Vs),l=Ti.dot(Vs);if(c<=0&&l<=0)return t.copy(i);Ws.subVectors(e,r);const d=wi.dot(Ws),u=Ti.dot(Ws);if(d>=0&&u<=d)return t.copy(r);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(wi,o);Xs.subVectors(e,s);const m=wi.dot(Xs),g=Ti.dot(Xs);if(g>=0&&m<=g)return t.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ti,a);const p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return uc.subVectors(s,r),a=(u-d)/(u-d+(m-g)),t.copy(r).addScaledVector(uc,a);const h=1/(p+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(wi,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function js(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=iu(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=js(o,s,e+1/3),this.g=js(o,s,e),this.b=js(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=Pl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return $e.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Pt(Tt.r*255,0,255))*65536+Math.round(Pt(Tt.g*255,0,255))*256+Math.round(Pt(Tt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Gt){$e.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Nr);const i=Is(zn.h,Nr.h,t),r=Is(zn.s,Nr.s,t),s=Is(zn.l,Nr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new He;He.NAMES=Pl;let yu=0;class Mr extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=gr(),this.name="",this.blending=Fi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uo&&(i.blendSrc=this.blendSrc),this.blendDst!==fo&&(i.blendDst=this.blendDst),this.blendEquation!==si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class va extends Mr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new N,zr=new Ge;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}}class Ll extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Il extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Su=0;const Ht=new pt,Zs=new St,Ai=new N,Ft=new vr,rr=new vr,yt=new N;class rn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?Il:Ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Ft.min,rr.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,rr.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(rr.min),Ft.expandByPoint(rr.max))}Ft.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)yt.fromBufferAttribute(a,l),c&&(Ai.fromBufferAttribute(e,l),yt.add(Ai)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new N,c[R]=new N;const l=new N,d=new N,u=new N,f=new Ge,m=new Ge,g=new Ge,v=new N,p=new N;function h(R,S,M){l.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),d.sub(l),u.sub(l),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),a[R].add(v),a[S].add(v),a[M].add(v),c[R].add(p),c[S].add(p),c[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,S=w.length;R<S;++R){const M=w[R],P=M.start,k=M.count;for(let F=P,V=P+k;F<V;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new N,x=new N,C=new N,T=new N;function b(R){C.fromBufferAttribute(r,R),T.copy(C);const S=a[R];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(T,S);const P=x.dot(c[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,S=w.length;R<S;++R){const M=w[R],P=M.start,k=M.count;for(let F=P,V=P+k;F<V;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,d=new N,u=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(d),c.add(d),l.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,u=a.normalized,f=new l.constructor(c.length*d);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*d;for(let h=0;h<d;h++)f[g++]=l[m++]}return new cn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const f=l[d],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new pt,Jn=new pu,Fr=new xa,hc=new N,kr=new N,Or=new N,Br=new N,Ks=new N,Hr=new N,pc=new N,Gr=new N;class Ae extends St{constructor(e=new rn,t=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(Ks.fromBufferAttribute(u,e),o?Hr.addScaledVector(Ks,d):Hr.addScaledVector(Ks.sub(t),d))}t.add(Hr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Fr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Fr,hc)===null||Jn.origin.distanceToSquared(hc)>(e.far-e.near)**2))&&(fc.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(fc),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=o[p.materialIndex],w=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=w,C=_;x<C;x+=3){const T=a.getX(x),b=a.getX(x+1),R=a.getX(x+2);r=Vr(this,h,e,i,l,d,u,T,b,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const w=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);r=Vr(this,o,e,i,l,d,u,w,_,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=o[p.materialIndex],w=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=w,C=_;x<C;x+=3){const T=x,b=x+1,R=x+2;r=Vr(this,h,e,i,l,d,u,T,b,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const w=p,_=p+1,x=p+2;r=Vr(this,o,e,i,l,d,u,w,_,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Eu(n,e,t,i,r,s,o,a){let c;if(e.side===It?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Wn,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:n}}function Vr(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,kr),n.getVertexPosition(c,Or),n.getVertexPosition(l,Br);const d=Eu(n,e,t,i,kr,Or,Br,pc);if(d){const u=new N;Jt.getBarycoord(pc,kr,Or,Br,u),r&&(d.uv=Jt.getInterpolatedAttribute(r,a,c,l,u,new Ge)),s&&(d.uv1=Jt.getInterpolatedAttribute(s,a,c,l,u,new Ge)),o&&(d.normal=Jt.getInterpolatedAttribute(o,a,c,l,u,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};Jt.getNormal(kr,Or,Br,f.normal),d.face=f,d.barycoord=u}return d}class _t extends rn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(u,2));function g(v,p,h,w,_,x,C,T,b,R,S){const M=x/b,P=C/R,k=x/2,F=C/2,V=T/2,j=b+1,W=R+1;let Q=0,G=0;const ie=new N;for(let le=0;le<W;le++){const ve=le*P-F;for(let Ne=0;Ne<j;Ne++){const Qe=Ne*M-k;ie[v]=Qe*w,ie[p]=ve*_,ie[h]=V,l.push(ie.x,ie.y,ie.z),ie[v]=0,ie[p]=0,ie[h]=T>0?1:-1,d.push(ie.x,ie.y,ie.z),u.push(Ne/b),u.push(1-le/R),Q+=1}}for(let le=0;le<R;le++)for(let ve=0;ve<b;ve++){const Ne=f+ve+j*le,Qe=f+ve+j*(le+1),$=f+(ve+1)+j*(le+1),ee=f+(ve+1)+j*le;c.push(Ne,Qe,ee),c.push(Qe,$,ee),G+=6}a.addGroup(m,G,S),m+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const r in i)e[r]=i[r]}return e}function bu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const wu={clone:Xi,merge:At};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Mr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ul extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new N,mc=new Ge,_c=new Ge;class Vt extends Ul{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,_c),t.subVectors(_c,mc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Ci=1;class Ru extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Ri,Ci,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const c=new Vt(Ri,Ci,e,t);c.layers=this.layers,this.add(c);const l=new Vt(Ri,Ci,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nl extends Dt{constructor(e,t,i,r,s,o,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cu extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _t(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Bn});s.uniforms.tEquirect.value=t;const o=new Ae(r,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=an),new Ru(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Js=new N,Pu=new N,Lu=new Le;class ii{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Js.subVectors(i,t).cross(Pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Js),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lu.getNormalMatrix(e),r=this.coplanarPoint(Js).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new xa,Wr=new N;class Ma{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,o=new ii){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],d=r[5],u=r[6],f=r[7],m=r[8],g=r[9],v=r[10],p=r[11],h=r[12],w=r[13],_=r[14],x=r[15];if(i[0].setComponents(c-s,f-l,p-m,x-h).normalize(),i[1].setComponents(c+s,f+l,p+m,x+h).normalize(),i[2].setComponents(c+o,f+d,p+g,x+w).normalize(),i[3].setComponents(c-o,f-d,p-g,x-w).normalize(),i[4].setComponents(c-a,f-u,p-v,x-_).normalize(),t===bn)i[5].setComponents(c+a,f+u,p+v,x+_).normalize();else if(t===us)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Iu(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Sn extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,u=e/a,f=t/c,m=[],g=[],v=[],p=[];for(let h=0;h<d;h++){const w=h*f-o;for(let _=0;_<l;_++){const x=_*u-s;g.push(x,-w,0),v.push(0,0,1),p.push(_/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){const _=w+l*h,x=w+l*(h+1),C=w+1+l*(h+1),T=w+1+l*h;m.push(_,x,T),m.push(x,C,T)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,If=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ah=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ih=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Du,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:zu,alphatest_fragment:Fu,alphatest_pars_fragment:ku,aomap_fragment:Ou,aomap_pars_fragment:Bu,batching_pars_vertex:Hu,batching_vertex:Gu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:$u,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ku,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:df,colorspace_pars_fragment:uf,envmap_fragment:ff,envmap_common_pars_fragment:hf,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:_f,fog_vertex:gf,fog_pars_vertex:xf,fog_fragment:vf,fog_pars_fragment:Mf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:bf,lights_pars_begin:wf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:If,lights_fragment_begin:Df,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:$f,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:jf,morphtarget_vertex:Zf,normal_fragment_begin:Kf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:eh,normal_vertex:th,normalmap_pars_fragment:nh,clearcoat_normal_fragment_begin:ih,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:sh,iridescence_pars_fragment:oh,opaque_fragment:ah,packing:ch,premultiplied_alpha_fragment:lh,project_vertex:dh,dithering_fragment:uh,dithering_pars_fragment:fh,roughnessmap_fragment:hh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:_h,shadowmap_vertex:gh,shadowmask_pars_fragment:xh,skinbase_vertex:vh,skinning_pars_vertex:Mh,skinning_vertex:yh,skinnormal_vertex:Sh,specularmap_fragment:Eh,specularmap_pars_fragment:bh,tonemapping_fragment:wh,tonemapping_pars_fragment:Th,transmission_fragment:Ah,transmission_pars_fragment:Rh,uv_pars_fragment:Ch,uv_pars_vertex:Ph,uv_vertex:Lh,worldpos_vertex:Ih,background_vert:Dh,background_frag:Uh,backgroundCube_vert:Nh,backgroundCube_frag:zh,cube_vert:Fh,cube_frag:kh,depth_vert:Oh,depth_frag:Bh,distanceRGBA_vert:Hh,distanceRGBA_frag:Gh,equirect_vert:Vh,equirect_frag:Wh,linedashed_vert:Xh,linedashed_frag:$h,meshbasic_vert:qh,meshbasic_frag:Yh,meshlambert_vert:jh,meshlambert_frag:Zh,meshmatcap_vert:Kh,meshmatcap_frag:Jh,meshnormal_vert:Qh,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:rp,meshtoon_vert:sp,meshtoon_frag:op,points_vert:ap,points_frag:cp,shadow_vert:lp,shadow_frag:dp,sprite_vert:up,sprite_frag:fp},te={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},on={basic:{uniforms:At([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:At([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:At([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:At([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:At([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:At([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:At([te.points,te.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:At([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:At([te.common,te.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:At([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:At([te.sprite,te.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:At([te.common,te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:At([te.lights,te.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};on.physical={uniforms:At([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Xr={r:0,b:0,g:0},ei=new dn,hp=new pt;function pp(n,e,t,i,r,s,o){const a=new He(0);let c=s===!0?0:1,l,d,u=null,f=0,m=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function v(w){let _=!1;const x=g(w);x===null?h(a,c):x&&x.isColor&&(h(x,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===ys)?(d===void 0&&(d=new Ae(new _t(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Xi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ei.copy(_.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(ei)),d.material.toneMapped=$e.getTransfer(x.colorSpace)!==Je,(u!==x||f!==x.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ae(new Sn(2,2),new Xn({name:"BackgroundMaterial",uniforms:Xi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function h(w,_){w.getRGB(Xr,Dl(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),c=_,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,h(a,c)},render:v,addToRenderList:p}}function mp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,P,k,F,V){let j=!1;const W=u(F,k,P);s!==W&&(s=W,l(s.object)),j=m(M,F,k,V),j&&g(M,F,k,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(M,P,k,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,P,k){const F=k.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let j=V[P.id];j===void 0&&(j={},V[P.id]=j);let W=j[F];return W===void 0&&(W=f(c()),j[F]=W),W}function f(M){const P=[],k=[],F=[];for(let V=0;V<t;V++)P[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,P,k,F){const V=s.attributes,j=P.attributes;let W=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){const le=V[G];let ve=j[G];if(ve===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(M,P,k,F){const V={},j=P.attributes;let W=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){let le=j[G];le===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),V[G]=ve,W++}s.attributes=V,s.attributesNum=W,s.index=F}function v(){const M=s.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function p(M){h(M,0)}function h(M,P){const k=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;k[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),V[M]!==P&&(n.vertexAttribDivisor(M,P),V[M]=P)}function w(){const M=s.newAttributes,P=s.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==M[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function _(M,P,k,F,V,j,W){W===!0?n.vertexAttribIPointer(M,P,k,V,j):n.vertexAttribPointer(M,P,k,F,V,j)}function x(M,P,k,F){v();const V=F.attributes,j=k.getAttributes(),W=P.defaultAttributeValues;for(const Q in j){const G=j[Q];if(G.location>=0){let ie=V[Q];if(ie===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const le=ie.normalized,ve=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;const Qe=Ne.buffer,$=Ne.type,ee=Ne.bytesPerElement,_e=$===n.INT||$===n.UNSIGNED_INT||ie.gpuType===fa;if(ie.isInterleavedBufferAttribute){const re=ie.data,be=re.stride,Re=ie.offset;if(re.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)h(G.location+ze,re.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ze=0;ze<G.locationSize;ze++)_(G.location+ze,ve/G.locationSize,$,le,be*ee,(Re+ve/G.locationSize*ze)*ee,_e)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)h(G.location+re,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<G.locationSize;re++)p(G.location+re);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let re=0;re<G.locationSize;re++)_(G.location+re,ve/G.locationSize,$,le,ve*ee,ve/G.locationSize*re*ee,_e)}}else if(W!==void 0){const le=W[Q];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(G.location,le);break;case 3:n.vertexAttrib3fv(G.location,le);break;case 4:n.vertexAttrib4fv(G.location,le);break;default:n.vertexAttrib1fv(G.location,le)}}}}w()}function C(){R();for(const M in i){const P=i[M];for(const k in P){const F=P[k];for(const V in F)d(F[V].object),delete F[V];delete P[k]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const k in P){const F=P[k];for(const V in F)d(F[V].object),delete F[V];delete P[k]}delete i[M.id]}function b(M){for(const P in i){const k=i[P];if(k[M.id]===void 0)continue;const F=k[M.id];for(const V in F)d(F[V].object),delete F[V];delete k[M.id]}}function R(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function _p(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];t.update(m,i,1)}function c(l,d,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==en&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Cn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==En&&!R)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function xp(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ii,a=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,h=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?d(null):l();else{const w=s?0:i,_=w*4;let x=h.clippingState||null;c.value=x,x=d(g,f,_,m);for(let C=0;C!==_;++C)x[C]=t[C];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const h=m+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let _=0,x=m;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function vp(n){let e=new WeakMap;function t(o,a){return a===Mo?o.mapping=Hi:a===yo&&(o.mapping=Gi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mo||a===yo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fl extends Ul{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,gc=[.125,.215,.35,.446,.526,.582],oi=20,Qs=new Fl,xc=new He;let eo=null,to=0,no=0,io=!1;const ri=(1+Math.sqrt(5))/2,Pi=1/ri,vc=[new N(-ri,Pi,0),new N(ri,Pi,0),new N(-Pi,0,ri),new N(Pi,0,ri),new N(0,ri,-Pi),new N(0,ri,Pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eo,to,no),this._renderer.xr.enabled=io,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:_r,format:en,colorSpace:Yi,depthBuffer:!1},r=yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=yp(s,e,t)}return r}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,i,r){const a=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(xc),d.toneMapping=Hn,d.autoClear=!1;const m=new va({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Ae(new _t,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(xc),v=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):w===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const _=this._cubeSize;$r(r,w*_,h>2?_:0,_,_),d.setRenderTarget(r),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;$r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vc[(r-s-1)%vc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ae(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*oi-1),v=s/g,p=isFinite(s)?1+Math.floor(d*v):oi;p>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const h=[];let w=0;for(let b=0;b<oi;++b){const R=b/v,S=Math.exp(-R*R/2);h.push(S),b===0?w+=S:b<p&&(w+=2*S)}for(let b=0;b<h.length;b++)h[b]=h[b]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-Ui?r-_+Ui:0),T=4*(this._cubeSize-x);$r(t,C,T,3*x,2*x),c.setRenderTarget(t),c.render(u,Qs)}}function Mp(n){const e=[],t=[],i=[];let r=n;const s=n-Ui+1+gc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ui?c=gc[o-n+Ui-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,v=3,p=2,h=1,w=new Float32Array(v*g*m),_=new Float32Array(p*g*m),x=new Float32Array(h*g*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,R=T>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];w.set(S,v*g*T),_.set(f,p*g*T);const M=[T,T,T,T,T,T];x.set(M,h*g*T)}const C=new rn;C.setAttribute("position",new cn(w,v)),C.setAttribute("uv",new cn(_,p)),C.setAttribute("faceIndex",new cn(x,h)),e.push(C),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yc(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yp(n,e,t){const i=new Float32Array(oi),r=new N(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Sc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ec(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Mo||c===yo,d=c===Hi||c===Gi;if(l||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Mc(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Mc(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ep(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bp(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let _=0,x=w.length;_<x;_+=3){const C=w[_+0],T=w[_+1],b=w[_+2];f.push(C,T,T,b,b,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,x=w.length/3-1;_<x;_+=3){const C=_+0,T=_+1,b=_+2;f.push(C,T,T,b,b,C)}}else return;const p=new(Tl(f)?Il:Ll)(f,1);p.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,p)}function d(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function wp(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),t.update(m,i,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function u(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,v,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*v[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Tp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ap(n,e,t){const i=new WeakMap,r=new ht;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*C*4*u),b=new Rl(T,x,C,u);b.type=En,b.needsUpdate=!0;const R=_*4;for(let M=0;M<u;M++){const P=p[M],k=h[M],F=w[M],V=x*C*4*M;for(let j=0;j<P.count;j++){const W=j*R;m===!0&&(r.fromBufferAttribute(P,j),T[V+W+0]=r.x,T[V+W+1]=r.y,T[V+W+2]=r.z,T[V+W+3]=0),g===!0&&(r.fromBufferAttribute(k,j),T[V+W+4]=r.x,T[V+W+5]=r.y,T[V+W+6]=r.z,T[V+W+7]=0),v===!0&&(r.fromBufferAttribute(F,j),T[V+W+8]=r.x,T[V+W+9]=r.y,T[V+W+10]=r.z,T[V+W+11]=F.itemSize===4?r.w:1)}}f={count:u,texture:b,size:new Ge(x,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Rp(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class kl extends Dt{constructor(e,t,i,r,s,o,a,c,l,d=ki){if(d!==ki&&d!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ki&&(i=fi),i===void 0&&d===Wi&&(i=Vi),super(null,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ol=new Dt,bc=new kl(1,1),Bl=new Rl,Hl=new fu,Gl=new Nl,wc=[],Tc=[],Ac=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function Zi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wc[r];if(s===void 0&&(s=new Float32Array(r),wc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Es(n,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Dp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Cc.set(i),n.uniformMatrix2fv(this.addr,!1,Cc),Mt(t,i)}}function Up(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),Mt(t,i)}}function Np(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Ac.set(i),n.uniformMatrix4fv(this.addr,!1,Ac),Mt(t,i)}}function zp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Wp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(bc.compareFunction=wl,s=bc):s=Ol,t.setTexture2D(e||s,r)}function Xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hl,r)}function $p(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gl,r)}function qp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bl,r)}function Yp(n){switch(n){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return zp;case 35667:case 35671:return Fp;case 35668:case 35672:return kp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return Hp;case 36295:return Gp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return qp}}function jp(n,e){n.uniform1fv(this.addr,e)}function Zp(n,e){const t=Zi(e,this.size,2);n.uniform2fv(this.addr,t)}function Kp(n,e){const t=Zi(e,this.size,3);n.uniform3fv(this.addr,t)}function Jp(n,e){const t=Zi(e,this.size,4);n.uniform4fv(this.addr,t)}function Qp(n,e){const t=Zi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function em(n,e){const t=Zi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tm(n,e){const t=Zi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nm(n,e){n.uniform1iv(this.addr,e)}function im(n,e){n.uniform2iv(this.addr,e)}function rm(n,e){n.uniform3iv(this.addr,e)}function sm(n,e){n.uniform4iv(this.addr,e)}function om(n,e){n.uniform1uiv(this.addr,e)}function am(n,e){n.uniform2uiv(this.addr,e)}function cm(n,e){n.uniform3uiv(this.addr,e)}function lm(n,e){n.uniform4uiv(this.addr,e)}function dm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ol,s[o])}function um(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hl,s[o])}function fm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gl,s[o])}function hm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bl,s[o])}function pm(n){switch(n){case 5126:return jp;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return om;case 36294:return am;case 36295:return cm;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return hm}}class mm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yp(t.type)}}class _m{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Pc(n,e){n.seq.push(e),n.map[e.id]=e}function xm(n,e,t){const i=n.name,r=i.length;for(ro.lastIndex=0;;){const s=ro.exec(i),o=ro.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Pc(t,l===void 0?new mm(a,n,e):new _m(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new gm(a),Pc(t,u)),t=u}}}class rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vm=37297;let Mm=0;function ym(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ic=new Le;function Sm(n){$e._getMatrix(Ic,$e.workingColorSpace,n);const e=`mat3( ${Ic.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Ss:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ym(n.getShaderSource(e),o)}else return r}function Em(n,e){const t=Sm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bm(n,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case Hd:t="Cineon";break;case Gd:t="ACESFilmic";break;case Wd:t="AgX";break;case Xd:t="Neutral";break;case Vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new N;function wm(){$e.getLuminanceCoefficients(qr);const n=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Am(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function or(n){return n!==""}function Uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(n){return n.replace(Cm,Lm)}const Pm=new Map;function Lm(n,e){let t=Ue[e];if(t===void 0){const i=Pm.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(n){return n.replace(Im,Dm)}function Dm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Um(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ua:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case kd:e="ENVMAP_BLENDING_ADD";break}return e}function km(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Om(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Um(t),l=Nm(t),d=zm(t),u=Fm(t),f=km(t),m=Tm(t),g=Am(s),v=r.createProgram();let p,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),h.length>0&&(h+=`
`)):(p=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),h=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Hn?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=Ko(o),o=Uc(o,t),o=Nc(o,t),a=Ko(a),a=Uc(a,t),a=Nc(a,t),o=zc(o),a=zc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=w+p+o,x=w+h+a,C=Lc(r,r.VERTEX_SHADER,_),T=Lc(r,r.FRAGMENT_SHADER,x);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(T).trim();let j=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,T);else{const Q=Dc(r,C,"vertex"),G=Dc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:j,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:h}})}r.deleteShader(C),r.deleteShader(T),R=new rs(r,v),S=Rm(r,v)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,vm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Bm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gm(e),t.set(e,i)),i}}class Gm{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}}function Vm(n,e,t,i,r,s,o){const a=new Cl,c=new Hm,l=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,P,k,F){const V=k.fog,j=F.geometry,W=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),G=Q&&Q.mapping===ys?Q.image.height:null,ie=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=le!==void 0?le.length:0;let Ne=0;j.morphAttributes.position!==void 0&&(Ne=1),j.morphAttributes.normal!==void 0&&(Ne=2),j.morphAttributes.color!==void 0&&(Ne=3);let Qe,$,ee,_e;if(ie){const Ze=on[ie];Qe=Ze.vertexShader,$=Ze.fragmentShader}else Qe=S.vertexShader,$=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),_e=c.getFragmentShaderID(S);const re=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,ze=F.isBatchedMesh===!0,lt=!!S.map,We=!!S.matcap,mt=!!Q,U=!!S.aoMap,Ot=!!S.lightMap,ke=!!S.bumpMap,Oe=!!S.normalMap,Se=!!S.displacementMap,nt=!!S.emissiveMap,Me=!!S.metalnessMap,A=!!S.roughnessMap,y=S.anisotropy>0,z=S.clearcoat>0,q=S.dispersion>0,Z=S.iridescence>0,X=S.sheen>0,ge=S.transmission>0,se=y&&!!S.anisotropyMap,de=z&&!!S.clearcoatMap,Xe=z&&!!S.clearcoatNormalMap,K=z&&!!S.clearcoatRoughnessMap,ue=Z&&!!S.iridescenceMap,Ee=Z&&!!S.iridescenceThicknessMap,we=X&&!!S.sheenColorMap,fe=X&&!!S.sheenRoughnessMap,Be=!!S.specularMap,De=!!S.specularColorMap,et=!!S.specularIntensityMap,L=ge&&!!S.transmissionMap,ne=ge&&!!S.thicknessMap,H=!!S.gradientMap,Y=!!S.alphaMap,ce=S.alphaTest>0,oe=!!S.alphaHash,Ce=!!S.extensions;let ut=Hn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ut=n.toneMapping);const bt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:$,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ze,batchingColor:ze&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Yi,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:We,envMap:mt,envMapMode:mt&&Q.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Ot,bumpMap:ke,normalMap:Oe,displacementMap:f&&Se,emissiveMap:nt,normalMapObjectSpace:Oe&&S.normalMapType===jd,normalMapTangentSpace:Oe&&S.normalMapType===bl,metalnessMap:Me,roughnessMap:A,anisotropy:y,anisotropyMap:se,clearcoat:z,clearcoatMap:de,clearcoatNormalMap:Xe,clearcoatRoughnessMap:K,dispersion:q,iridescence:Z,iridescenceMap:ue,iridescenceThicknessMap:Ee,sheen:X,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:Be,specularColorMap:De,specularIntensityMap:et,transmission:ge,transmissionMap:L,thicknessMap:ne,gradientMap:H,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:oe,combine:S.combine,mapUv:lt&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:Ot&&v(S.lightMap.channel),bumpMapUv:ke&&v(S.bumpMap.channel),normalMapUv:Oe&&v(S.normalMap.channel),displacementMapUv:Se&&v(S.displacementMap.channel),emissiveMapUv:nt&&v(S.emissiveMap.channel),metalnessMapUv:Me&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:se&&v(S.anisotropyMap.channel),clearcoatMapUv:de&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(S.sheenRoughnessMap.channel),specularMapUv:Be&&v(S.specularMap.channel),specularColorMapUv:De&&v(S.specularColorMap.channel),specularIntensityMapUv:et&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:ne&&v(S.thicknessMap.channel),alphaMapUv:Y&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Oe||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(lt||Y),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let P;if(M){const k=on[M];P=wu.clone(k.uniforms)}else P=S.uniforms;return P}function C(S,M){let P;for(let k=0,F=d.length;k<F;k++){const V=d[k];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Om(n,M,S,s),d.push(P)),P}function T(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function b(S){c.remove(S)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:b,programs:d,dispose:R}}function Wm(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,m,g,v,p){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=p),e++,h}function a(u,f,m,g,v,p){const h=o(u,f,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(u,f,m,g,v,p){const h=o(u,f,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(u,f){t.length>1&&t.sort(u||Xm),i.length>1&&i.sort(f||kc),r.length>1&&r.sort(f||kc)}function d(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function $m(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Oc,n.set(i,[o])):r>=s.length?(o=new Oc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Ym(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jm=0;function Zm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Km(n){const e=new qm,t=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new pt,o=new pt;function a(l){let d=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,w=0,_=0,x=0,C=0,T=0,b=0;l.sort(Zm);for(let S=0,M=l.length;S<M;S++){const P=l[S],k=P.color,F=P.intensity,V=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*F,u+=k.g*F,f+=k.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],F);b++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const Q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=Q.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=j,x++}v++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(k).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[h]=W,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==p||R.hemiLength!==h||R.numDirectionalShadows!==w||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=p,R.hemiLength=h,R.numDirectionalShadows=w,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=b,i.version=jm++)}function c(l,d){let u=0,f=0,m=0,g=0,v=0;const p=d.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const _=l[h];if(_.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),u++}else if(_.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function Bc(n){const e=new Km(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Jm(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bc(n),e.set(r,[a])):s>=o.length?(a=new Bc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Qm extends Mr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e0 extends Mr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i0(n,e,t){let i=new Ma;const r=new Ge,s=new Ge,o=new ht,a=new Qm({depthPacking:Yd}),c=new e0,l={},d=t.maxTextureSize,u={[Wn]:It,[It]:Wn,[yn]:yn},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ae(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let h=this.type;this.render=function(T,b,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Bn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=h!==Mn&&this.type===Mn,V=h===Mn&&this.type!==Mn;for(let j=0,W=T.length;j<W;j++){const Q=T[j],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||F===!0||V===!0){const ve=this.type!==Mn?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new hi(r.x,r.y,ve),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const le=G.getViewportCount();for(let ve=0;ve<le;ve++){const Ne=G.getViewport(ve);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),k.viewport(o),G.updateMatrices(Q,ve),i=G.getFrustum(),x(b,R,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&w(G,R),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(S,M,P)};function w(T,b){const R=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,R,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,R,m,v,null)}function _(T,b,R,S){let M=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=M.uuid,F=b.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let j=V[F];j===void 0&&(j=M.clone(),V[F]=j,b.addEventListener("dispose",C)),M=j}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Mn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=R}return M}function x(T,b,R,S,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Mn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const F=e.update(T),V=T.material;if(Array.isArray(V)){const j=F.groups;for(let W=0,Q=j.length;W<Q;W++){const G=j[W],ie=V[G.materialIndex];if(ie&&ie.visible){const le=_(T,ie,S,M);T.onBeforeShadow(n,T,b,R,F,le,G),n.renderBufferDirect(R,null,F,le,T,G),T.onAfterShadow(n,T,b,R,F,le,G)}}}else if(V.visible){const j=_(T,V,S,M);T.onBeforeShadow(n,T,b,R,F,j,null),n.renderBufferDirect(R,null,F,j,T,null),T.onAfterShadow(n,T,b,R,F,j,null)}}const k=T.children;for(let F=0,V=k.length;F<V;F++)x(k[F],b,R,S,M)}function C(T){T.target.removeEventListener("dispose",C);for(const R in l){const S=l[R],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const r0={[ho]:po,[mo]:xo,[_o]:vo,[Bi]:go,[po]:ho,[xo]:mo,[vo]:_o,[go]:Bi};function s0(n,e){function t(){let L=!1;const ne=new ht;let H=null;const Y=new ht(0,0,0,0);return{setMask:function(ce){H!==ce&&!L&&(n.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){L=ce},setClear:function(ce,oe,Ce,ut,bt){bt===!0&&(ce*=ut,oe*=ut,Ce*=ut),ne.set(ce,oe,Ce,ut),Y.equals(ne)===!1&&(n.clearColor(ce,oe,Ce,ut),Y.copy(ne))},reset:function(){L=!1,H=null,Y.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,H=null,Y=null,ce=null;return{setReversed:function(oe){if(ne!==oe){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const ut=ce;ce=null,this.setClear(ut)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?re(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(oe){H!==oe&&!L&&(n.depthMask(oe),H=oe)},setFunc:function(oe){if(ne&&(oe=r0[oe]),Y!==oe){switch(oe){case ho:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Bi:n.depthFunc(n.LEQUAL);break;case _o:n.depthFunc(n.EQUAL);break;case go:n.depthFunc(n.GEQUAL);break;case xo:n.depthFunc(n.GREATER);break;case vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ce!==oe&&(ne&&(oe=1-oe),n.clearDepth(oe),ce=oe)},reset:function(){L=!1,H=null,Y=null,ce=null,ne=!1}}}function r(){let L=!1,ne=null,H=null,Y=null,ce=null,oe=null,Ce=null,ut=null,bt=null;return{setTest:function(Ze){L||(Ze?re(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ze){ne!==Ze&&!L&&(n.stencilMask(Ze),ne=Ze)},setFunc:function(Ze,$t,fn){(H!==Ze||Y!==$t||ce!==fn)&&(n.stencilFunc(Ze,$t,fn),H=Ze,Y=$t,ce=fn)},setOp:function(Ze,$t,fn){(oe!==Ze||Ce!==$t||ut!==fn)&&(n.stencilOp(Ze,$t,fn),oe=Ze,Ce=$t,ut=fn)},setLocked:function(Ze){L=Ze},setClear:function(Ze){bt!==Ze&&(n.clearStencil(Ze),bt=Ze)},reset:function(){L=!1,ne=null,H=null,Y=null,ce=null,oe=null,Ce=null,ut=null,bt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,w=null,_=null,x=null,C=null,T=null,b=new He(0,0,0),R=0,S=!1,M=null,P=null,k=null,F=null,V=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Q>=2);let ie=null,le={};const ve=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Qe=new ht().fromArray(ve),$=new ht().fromArray(Ne);function ee(L,ne,H,Y){const ce=new Uint8Array(4),oe=n.createTexture();n.bindTexture(L,oe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<H;Ce++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ne+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return oe}const _e={};_e[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Bi),ke(!1),Oe(Wa),re(n.CULL_FACE),U(Bn);function re(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function be(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Re(L,ne){return u[L]!==ne?(n.bindFramebuffer(L,ne),u[L]=ne,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function ze(L,ne){let H=m,Y=!1;if(L){H=f.get(ne),H===void 0&&(H=[],f.set(ne,H));const ce=L.textures;if(H.length!==ce.length||H[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ce=ce.length;oe<Ce;oe++)H[oe]=n.COLOR_ATTACHMENT0+oe;H.length=ce.length,Y=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,Y=!0);Y&&n.drawBuffers(H)}function lt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const We={[si]:n.FUNC_ADD,[Md]:n.FUNC_SUBTRACT,[yd]:n.FUNC_REVERSE_SUBTRACT};We[Sd]=n.MIN,We[Ed]=n.MAX;const mt={[bd]:n.ZERO,[wd]:n.ONE,[Td]:n.SRC_COLOR,[uo]:n.SRC_ALPHA,[Id]:n.SRC_ALPHA_SATURATE,[Pd]:n.DST_COLOR,[Rd]:n.DST_ALPHA,[Ad]:n.ONE_MINUS_SRC_COLOR,[fo]:n.ONE_MINUS_SRC_ALPHA,[Ld]:n.ONE_MINUS_DST_COLOR,[Cd]:n.ONE_MINUS_DST_ALPHA,[Dd]:n.CONSTANT_COLOR,[Ud]:n.ONE_MINUS_CONSTANT_COLOR,[Nd]:n.CONSTANT_ALPHA,[zd]:n.ONE_MINUS_CONSTANT_ALPHA};function U(L,ne,H,Y,ce,oe,Ce,ut,bt,Ze){if(L===Bn){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),L!==vd){if(L!==p||Ze!==S){if((h!==si||x!==si)&&(n.blendEquation(n.FUNC_ADD),h=si,x=si),Ze)switch(L){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFunc(n.ONE,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,_=null,C=null,T=null,b.set(0,0,0),R=0,p=L,S=Ze}return}ce=ce||ne,oe=oe||H,Ce=Ce||Y,(ne!==h||ce!==x)&&(n.blendEquationSeparate(We[ne],We[ce]),h=ne,x=ce),(H!==w||Y!==_||oe!==C||Ce!==T)&&(n.blendFuncSeparate(mt[H],mt[Y],mt[oe],mt[Ce]),w=H,_=Y,C=oe,T=Ce),(ut.equals(b)===!1||bt!==R)&&(n.blendColor(ut.r,ut.g,ut.b,bt),b.copy(ut),R=bt),p=L,S=!1}function Ot(L,ne){L.side===yn?be(n.CULL_FACE):re(n.CULL_FACE);let H=L.side===It;ne&&(H=!H),ke(H),L.blending===Fi&&L.transparent===!1?U(Bn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Oe(L){L!==_d?(re(n.CULL_FACE),L!==P&&(L===Wa?n.cullFace(n.BACK):L===gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=L}function Se(L){L!==k&&(W&&n.lineWidth(L),k=L)}function nt(L,ne,H){L?(re(n.POLYGON_OFFSET_FILL),(F!==ne||V!==H)&&(n.polygonOffset(ne,H),F=ne,V=H)):be(n.POLYGON_OFFSET_FILL)}function Me(L){L?re(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+j-1),ie!==L&&(n.activeTexture(L),ie=L)}function y(L,ne,H){H===void 0&&(ie===null?H=n.TEXTURE0+j-1:H=ie);let Y=le[H];Y===void 0&&(Y={type:void 0,texture:void 0},le[H]=Y),(Y.type!==L||Y.texture!==ne)&&(ie!==H&&(n.activeTexture(H),ie=H),n.bindTexture(L,ne||_e[L]),Y.type=L,Y.texture=ne)}function z(){const L=le[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){Qe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function fe(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Be(L,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let Y=H.get(L);Y===void 0&&(Y=n.getUniformBlockIndex(ne,L.name),H.set(L,Y))}function De(L,ne){const Y=l.get(ne).get(L);c.get(ne)!==Y&&(n.uniformBlockBinding(ne,Y,L.__bindingPointIndex),c.set(ne,Y))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,le={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,w=null,_=null,x=null,C=null,T=null,b=new He(0,0,0),R=0,S=!1,M=null,P=null,k=null,F=null,V=null,Qe.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:Re,drawBuffers:ze,useProgram:lt,setBlending:U,setMaterial:Ot,setFlipSided:ke,setCullFace:Oe,setLineWidth:Se,setPolygonOffset:nt,setScissorTest:Me,activeTexture:A,bindTexture:y,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:ue,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:Xe,texStorage3D:K,texSubImage2D:X,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:we,viewport:fe,reset:et}}function Hc(n,e,t,i){const r=o0(i);switch(t){case gl:return n*e;case vl:return n*e;case Ml:return n*e*2;case yl:return n*e/r.components*r.byteLength;case ma:return n*e/r.components*r.byteLength;case Sl:return n*e*2/r.components*r.byteLength;case _a:return n*e*2/r.components*r.byteLength;case xl:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case ga:return n*e*4/r.components*r.byteLength;case Qr:case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ao:return Math.max(n,16)*Math.max(e,8)/4;case bo:case To:return Math.max(n,8)*Math.max(e,8)/2;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case is:case Xo:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*16;case El:case qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yo:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(n){switch(n){case Cn:case pl:return{byteLength:1,components:1};case hr:case ml:case _r:return{byteLength:2,components:1};case ha:case pa:return{byteLength:2,components:4};case fi:case fa:case En:return{byteLength:4,components:1};case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function a0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return m?new OffscreenCanvas(A,y):fs("canvas")}function v(A,y,z){let q=1;const Z=Me(A);if((Z.width>z||Z.height>z)&&(q=z/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*Z.width),ge=Math.floor(q*Z.height);u===void 0&&(u=g(X,ge));const se=y?g(X,ge):u;return se.width=X,se.height=ge,se.getContext("2d").drawImage(A,0,0,X,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+ge+")."),se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(A,y,z,q,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),y===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),y===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),y===n.RGBA){const ge=Z?Ss:$e.getTransfer(q);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=ge===Je?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,y){let z;return A?y===null||y===fi||y===Vi?z=n.DEPTH24_STENCIL8:y===En?z=n.DEPTH32F_STENCIL8:y===hr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fi||y===Vi?z=n.DEPTH_COMPONENT24:y===En?z=n.DEPTH_COMPONENT32F:y===hr&&(z=n.DEPTH_COMPONENT16),z}function C(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&d.delete(y)}function b(A){const y=A.target;y.removeEventListener("dispose",b),M(y)}function R(A){const y=i.get(A);if(y.__webglInit===void 0)return;const z=A.source,q=f.get(z);if(q){const Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(A),Object.keys(q).length===0&&f.delete(z)}i.remove(A)}function S(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const z=A.source,q=f.get(z);delete q[y.__cacheKey],o.memory.textures--}function M(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,Z=z.length;q<Z;q++){const X=i.get(z[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(A)}let P=0;function k(){P=0}function F(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function j(A,y){const z=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,A,y);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function W(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function Q(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function G(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ee(z,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const ie={[So]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},le={[tn]:n.NEAREST,[$d]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Ps]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},ve={[Zd]:n.NEVER,[nu]:n.ALWAYS,[Kd]:n.LESS,[wl]:n.LEQUAL,[Jd]:n.EQUAL,[tu]:n.GEQUAL,[Qd]:n.GREATER,[eu]:n.NOTEQUAL};function Ne(A,y){if(y.type===En&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===Ps||y.magFilter===Ar||y.magFilter===ci||y.minFilter===an||y.minFilter===Ps||y.minFilter===Ar||y.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ie[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==Ar&&y.minFilter!==ci||y.type===En&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const q=y.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const X=V(y);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[X].usedTimes++;const ge=Z[A.__cacheKey];ge!==void 0&&(Z[A.__cacheKey].usedTimes--,ge.usedTimes===0&&S(y)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return z}function $(A,y,z){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Qe(A,y),X=y.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+z);const ge=i.get(X);if(X.version!==ge.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const se=$e.getPrimaries($e.workingColorSpace),de=y.colorSpace===kn?null:$e.getPrimaries(y.colorSpace),Xe=y.colorSpace===kn||se===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let K=v(y.image,!1,r.maxTextureSize);K=nt(y,K);const ue=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type);let we=_(y.internalFormat,ue,Ee,y.colorSpace,y.isVideoTexture);Ne(q,y);let fe;const Be=y.mipmaps,De=y.isVideoTexture!==!0,et=ge.__version===void 0||Z===!0,L=X.dataReady,ne=C(y,K);if(y.isDepthTexture)we=x(y.format===Wi,y.type),et&&(De?t.texStorage2D(n.TEXTURE_2D,1,we,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,we,K.width,K.height,0,ue,Ee,null));else if(y.isDataTexture)if(Be.length>0){De&&et&&t.texStorage2D(n.TEXTURE_2D,ne,we,Be[0].width,Be[0].height);for(let H=0,Y=Be.length;H<Y;H++)fe=Be[H],De?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,fe.width,fe.height,ue,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,H,we,fe.width,fe.height,0,ue,Ee,fe.data);y.generateMipmaps=!1}else De?(et&&t.texStorage2D(n.TEXTURE_2D,ne,we,K.width,K.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,ue,Ee,K.data)):t.texImage2D(n.TEXTURE_2D,0,we,K.width,K.height,0,ue,Ee,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,we,Be[0].width,Be[0].height,K.depth);for(let H=0,Y=Be.length;H<Y;H++)if(fe=Be[H],y.format!==en)if(ue!==null)if(De){if(L)if(y.layerUpdates.size>0){const ce=Hc(fe.width,fe.height,y.format,y.type);for(const oe of y.layerUpdates){const Ce=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,ue,Ce)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,K.depth,ue,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,we,fe.width,fe.height,K.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,K.depth,ue,Ee,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,we,fe.width,fe.height,K.depth,0,ue,Ee,fe.data)}else{De&&et&&t.texStorage2D(n.TEXTURE_2D,ne,we,Be[0].width,Be[0].height);for(let H=0,Y=Be.length;H<Y;H++)fe=Be[H],y.format!==en?ue!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,H,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,fe.width,fe.height,ue,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,H,we,fe.width,fe.height,0,ue,Ee,fe.data)}else if(y.isDataArrayTexture)if(De){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,we,K.width,K.height,K.depth),L)if(y.layerUpdates.size>0){const H=Hc(K.width,K.height,y.format,y.type);for(const Y of y.layerUpdates){const ce=K.data.subarray(Y*H/K.data.BYTES_PER_ELEMENT,(Y+1)*H/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,K.width,K.height,1,ue,Ee,ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,Ee,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,K.width,K.height,K.depth,0,ue,Ee,K.data);else if(y.isData3DTexture)De?(et&&t.texStorage3D(n.TEXTURE_3D,ne,we,K.width,K.height,K.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,Ee,K.data)):t.texImage3D(n.TEXTURE_3D,0,we,K.width,K.height,K.depth,0,ue,Ee,K.data);else if(y.isFramebufferTexture){if(et)if(De)t.texStorage2D(n.TEXTURE_2D,ne,we,K.width,K.height);else{let H=K.width,Y=K.height;for(let ce=0;ce<ne;ce++)t.texImage2D(n.TEXTURE_2D,ce,we,H,Y,0,ue,Ee,null),H>>=1,Y>>=1}}else if(Be.length>0){if(De&&et){const H=Me(Be[0]);t.texStorage2D(n.TEXTURE_2D,ne,we,H.width,H.height)}for(let H=0,Y=Be.length;H<Y;H++)fe=Be[H],De?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ue,Ee,fe):t.texImage2D(n.TEXTURE_2D,H,we,ue,Ee,fe);y.generateMipmaps=!1}else if(De){if(et){const H=Me(K);t.texStorage2D(n.TEXTURE_2D,ne,we,H.width,H.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ee,K)}else t.texImage2D(n.TEXTURE_2D,0,we,ue,Ee,K);p(y)&&h(q),ge.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ee(A,y,z){if(y.image.length!==6)return;const q=Qe(A,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const X=i.get(Z);if(Z.version!==X.__version||q===!0){t.activeTexture(n.TEXTURE0+z);const ge=$e.getPrimaries($e.workingColorSpace),se=y.colorSpace===kn?null:$e.getPrimaries(y.colorSpace),de=y.colorSpace===kn||ge===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Xe=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!Xe&&!K?ue[Y]=v(y.image[Y],!0,r.maxCubemapSize):ue[Y]=K?y.image[Y].image:y.image[Y],ue[Y]=nt(y,ue[Y]);const Ee=ue[0],we=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),Be=_(y.internalFormat,we,fe,y.colorSpace),De=y.isVideoTexture!==!0,et=X.__version===void 0||q===!0,L=Z.dataReady;let ne=C(y,Ee);Ne(n.TEXTURE_CUBE_MAP,y);let H;if(Xe){De&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Be,Ee.width,Ee.height);for(let Y=0;Y<6;Y++){H=ue[Y].mipmaps;for(let ce=0;ce<H.length;ce++){const oe=H[ce];y.format!==en?we!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Be,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,oe.width,oe.height,we,fe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Be,oe.width,oe.height,0,we,fe,oe.data)}}}else{if(H=y.mipmaps,De&&et){H.length>0&&ne++;const Y=Me(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(K){De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,we,fe,ue[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,ue[Y].width,ue[Y].height,0,we,fe,ue[Y].data);for(let ce=0;ce<H.length;ce++){const Ce=H[ce].image[Y].image;De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ce.width,Ce.height,we,fe,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Be,Ce.width,Ce.height,0,we,fe,Ce.data)}}else{De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,fe,ue[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,we,fe,ue[Y]);for(let ce=0;ce<H.length;ce++){const oe=H[ce];De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,we,fe,oe.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Be,we,fe,oe.image[Y])}}}p(y)&&h(n.TEXTURE_CUBE_MAP),X.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function _e(A,y,z,q,Z,X){const ge=s.convert(z.format,z.colorSpace),se=s.convert(z.type),de=_(z.internalFormat,ge,se,z.colorSpace),Xe=i.get(y),K=i.get(z);if(K.__renderTarget=y,!Xe.__hasExternalTextures){const ue=Math.max(1,y.width>>X),Ee=Math.max(1,y.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,de,ue,Ee,y.depth,0,ge,se,null):t.texImage2D(Z,X,de,ue,Ee,0,ge,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Oe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,K.__webglTexture,0,ke(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,K.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(A,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,X=x(y.stencilBuffer,Z),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=ke(y);Oe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,X,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,A)}else{const q=y.textures;for(let Z=0;Z<q.length;Z++){const X=q[Z],ge=s.convert(X.format,X.colorSpace),se=s.convert(X.type),de=_(X.internalFormat,ge,se,X.colorSpace),Xe=ke(y);z&&Oe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,de,y.width,y.height):Oe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,de,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,de,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const Z=q.__webglTexture,X=ke(y);if(y.depthTexture.format===ki)Oe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Wi)Oe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Re(A){const y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");be(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),re(y.__webglDepthbuffer[q],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),re(y.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,y,z){const q=i.get(A);y!==void 0&&_e(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Re(A)}function lt(A){const y=A.texture,z=i.get(A),q=i.get(y);A.addEventListener("dispose",b);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let de=0;de<y.mipmaps.length;de++)z.__webglFramebuffer[se][de]=n.createFramebuffer()}else z.__webglFramebuffer[se]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)z.__webglFramebuffer[se]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ge)for(let se=0,de=Z.length;se<de;se++){const Xe=i.get(Z[se]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Oe(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const de=Z[se];z.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Xe=s.convert(de.format,de.colorSpace),K=s.convert(de.type),ue=_(de.internalFormat,Xe,K,de.colorSpace,A.isXRRenderTarget===!0),Ee=ke(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,z.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),re(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)_e(z.__webglFramebuffer[se][de],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else _e(z.__webglFramebuffer[se],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,de=Z.length;se<de;se++){const Xe=Z[se],K=i.get(Xe);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),Ne(n.TEXTURE_2D,Xe),_e(z.__webglFramebuffer,A,Xe,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),p(Xe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ne(se,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)_e(z.__webglFramebuffer[de],A,y,n.COLOR_ATTACHMENT0,se,de);else _e(z.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,se,0);p(y)&&h(se),t.unbindTexture()}A.depthBuffer&&Re(A)}function We(A){const y=A.textures;for(let z=0,q=y.length;z<q;z++){const Z=y[z];if(p(Z)){const X=w(A),ge=i.get(Z).__webglTexture;t.bindTexture(X,ge),h(X),t.unbindTexture()}}}const mt=[],U=[];function Ot(A){if(A.samples>0){if(Oe(A)===!1){const y=A.textures,z=A.width,q=A.height;let Z=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),se=y.length>1;if(se)for(let de=0;de<y.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<y.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Xe=i.get(y[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,z,q,0,0,z,q,Z,n.NEAREST),c===!0&&(mt.length=0,U.length=0,mt.push(n.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(mt.push(X),U.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<y.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Xe=i.get(y[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ke(A){return Math.min(r.maxSamples,A.samples)}function Oe(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function nt(A,y){const z=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Yi&&z!==kn&&($e.getTransfer(z)===Je?(q!==en||Z!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=ze,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe}function c0(n,e){function t(i,r=kn){let s;const o=$e.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_l)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pl)return n.BYTE;if(i===ml)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===fa)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===_r)return n.HALF_FLOAT;if(i===gl)return n.ALPHA;if(i===xl)return n.RGB;if(i===en)return n.RGBA;if(i===vl)return n.LUMINANCE;if(i===Ml)return n.LUMINANCE_ALPHA;if(i===ki)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===yl)return n.RED;if(i===ma)return n.RED_INTEGER;if(i===Sl)return n.RG;if(i===_a)return n.RG_INTEGER;if(i===ga)return n.RGBA_INTEGER;if(i===Qr||i===es||i===ts||i===ns)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===wo||i===To||i===Ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Co)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Po)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lo||i===Io||i===Do||i===Uo||i===No||i===zo||i===Fo||i===ko||i===Oo||i===Bo||i===Ho||i===Go||i===Vo||i===Wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Io)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Do)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===No)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ko)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ho)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Go)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===is||i===Xo||i===$o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===is)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===qo||i===Yo||i===jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class l0 extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class li extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d0={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(l,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends ji{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,f=null,m=null,g=null;const v=new h0,p=t.getContextAttributes();let h=null,w=null;const _=[],x=[],C=new Ge;let T=null;const b=new Vt;b.viewport=new ht;const R=new Vt;R.viewport=new ht;const S=[b,R],M=new l0;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=_[$];return ee===void 0&&(ee=new so,_[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=_[$];return ee===void 0&&(ee=new so,_[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=_[$];return ee===void 0&&(ee=new so,_[$]=ee),ee.getHandSpace()};function F($){const ee=x.indexOf($.inputSource);if(ee===-1)return;const _e=_[ee];_e!==void 0&&(_e.update($.inputSource,$.frame,l||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let $=0;$<_.length;$++){const ee=x[$];ee!==null&&(x[$]=null,_[$].disconnect(ee))}P=null,k=null,v.reset(),e.setRenderTarget(h),m=null,f=null,u=null,r=null,w=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new hi(m.framebufferWidth,m.framebufferHeight,{format:en,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,_e=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Wi:ki,_e=p.stencil?Vi:fi);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new hi(f.textureWidth,f.textureHeight,{format:en,type:Cn,depthTexture:new kl(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j($){for(let ee=0;ee<$.removed.length;ee++){const _e=$.removed[ee],re=x.indexOf(_e);re>=0&&(x[re]=null,_[re].disconnect(_e))}for(let ee=0;ee<$.added.length;ee++){const _e=$.added[ee];let re=x.indexOf(_e);if(re===-1){for(let Re=0;Re<_.length;Re++)if(Re>=x.length){x.push(_e),re=Re;break}else if(x[Re]===null){x[Re]=_e,re=Re;break}if(re===-1)break}const be=_[re];be&&be.connect(_e)}}const W=new N,Q=new N;function G($,ee,_e){W.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const re=W.distanceTo(Q),be=ee.projectionMatrix.elements,Re=_e.projectionMatrix.elements,ze=be[14]/(be[10]-1),lt=be[14]/(be[10]+1),We=(be[9]+1)/be[5],mt=(be[9]-1)/be[5],U=(be[8]-1)/be[0],Ot=(Re[8]+1)/Re[0],ke=ze*U,Oe=ze*Ot,Se=re/(-U+Ot),nt=Se*-U;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=ze+Se,A=lt+Se,y=ke-nt,z=Oe+(re-nt),q=We*lt/A*Me,Z=mt*lt/A*Me;$.projectionMatrix.makePerspective(y,z,q,Z,Me,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,_e=$.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),M.near=R.near=b.near=ee,M.far=R.far=b.far=_e,(P!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),b.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,M.layers.mask=b.layers.mask|R.layers.mask;const re=$.parent,be=M.cameras;ie(M,re);for(let Re=0;Re<be.length;Re++)ie(be[Re],re);be.length===2?G(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),le($,M,re)};function le($,ee,_e){_e===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ve=null;function Ne($,ee){if(d=ee.getViewerPose(l||o),g=ee,d!==null){const _e=d.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let re=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Re=0;Re<_e.length;Re++){const ze=_e[Re];let lt=null;if(m!==null)lt=m.getViewport(ze);else{const mt=u.getViewSubImage(f,ze);lt=mt.viewport,Re===0&&(e.setRenderTargetTextures(w,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(w))}let We=S[Re];We===void 0&&(We=new Vt,We.layers.enable(Re),We.viewport=new ht,S[Re]=We),We.matrix.fromArray(ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),Re===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(We)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Re=u.getDepthInformation(_e[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,r.renderState)}}for(let _e=0;_e<_.length;_e++){const re=x[_e],be=_[_e];re!==null&&be!==void 0&&be.update(re,ee,l||o)}ve&&ve($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Qe=new zl;Qe.setAnimationLoop(Ne),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const ti=new dn,m0=new pt;function _0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Dl(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,w,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),u(p,h)):h.isMeshPhongMaterial?(s(p,h),d(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,x)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,w,_):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===It&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===It&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const w=e.get(h),_=w.envMap,x=w.envMapRotation;_&&(p.envMap.value=_,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),p.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(ti)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,w,_){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=_*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const w=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function g0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){const x=_.program;i.uniformBlockBinding(w,x)}function l(w,_){let x=r[w.id];x===void 0&&(g(w),x=d(w),r[w.id]=x,w.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(w,C);const T=e.render.frame;s[w.id]!==T&&(f(w),s[w.id]=T)}function d(w){const _=u();w.__bindingPointIndex=_;const x=n.createBuffer(),C=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const _=r[w.id],x=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,b=x.length;T<b;T++){const R=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(m(P,T,S,C)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let j=0;j<F.length;j++){const W=F[j],Q=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,_,x,C){const T=w.value,b=_+"_"+x;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{const R=C[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(w){const _=w.uniforms;let x=0;const C=16;for(let b=0,R=_.length;b<R;b++){const S=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,P=S.length;M<P;M++){const k=S[M],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,j=F.length;V<j;V++){const W=F[V],Q=v(W),G=x%C,ie=G%Q.boundary,le=G+ie;x+=ie,le!==0&&C-le<Q.storage&&(x+=C-le),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Q.storage}}}const T=x%C;return T>0&&(x+=C-T),w.__size=x,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){const _=w.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class x0{constructor(e={}){const{canvas:t=ru(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const w=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=Hn,this.toneMappingExposure=1;const x=this;let C=!1,T=0,b=0,R=null,S=-1,M=null;const P=new ht,k=new ht;let F=null;const V=new He(0);let j=0,W=t.width,Q=t.height,G=1,ie=null,le=null;const ve=new ht(0,0,W,Q),Ne=new ht(0,0,W,Q);let Qe=!1;const $=new Ma;let ee=!1,_e=!1;const re=new pt,be=new pt,Re=new N,ze=new ht,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function mt(){return R===null?G:1}let U=i;function Ot(E,I){return t.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const I="webgl2";if(U=Ot(I,E),U===null)throw Ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,Oe,Se,nt,Me,A,y,z,q,Z,X,ge,se,de,Xe,K,ue,Ee,we,fe,Be,De,et,L;function ne(){ke=new Ep(U),ke.init(),De=new c0(U,ke),Oe=new gp(U,ke,e,De),Se=new s0(U,ke),Oe.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),nt=new Tp(U),Me=new Wm,A=new a0(U,ke,Se,Me,Oe,De,nt),y=new vp(x),z=new Sp(x),q=new Iu(U),et=new mp(U,q),Z=new bp(U,q,nt,et),X=new Rp(U,Z,q,nt),we=new Ap(U,Oe,A),K=new xp(Me),ge=new Vm(x,y,z,ke,Oe,et,K),se=new _0(x,Me),de=new $m,Xe=new Jm(ke),Ee=new pp(x,y,z,Se,X,m,c),ue=new i0(x,X,Oe),L=new g0(U,nt,Oe,Se),fe=new _p(U,ke,nt),Be=new wp(U,ke,nt),nt.programs=ge.programs,x.capabilities=Oe,x.extensions=ke,x.properties=Me,x.renderLists=de,x.shadowMap=ue,x.state=Se,x.info=nt}ne();const H=new p0(x,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,Q,!1))},this.getSize=function(E){return E.set(W,Q)},this.setSize=function(E,I,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Q=I,t.width=Math.floor(E*G),t.height=Math.floor(I*G),O===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(W*G,Q*G).floor()},this.setDrawingBufferSize=function(E,I,O){W=E,Q=I,G=O,t.width=Math.floor(E*O),t.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,I,O,B){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,I,O,B),Se.viewport(P.copy(ve).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,I,O,B){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,I,O,B),Se.scissor(k.copy(Ne).multiplyScalar(G).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(E){Se.setScissorTest(Qe=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,I=!0,O=!0){let B=0;if(E){let D=!1;if(R!==null){const J=R.texture.format;D=J===ga||J===_a||J===ma}if(D){const J=R.texture.type,ae=J===Cn||J===fi||J===hr||J===Vi||J===ha||J===pa,he=Ee.getClearColor(),pe=Ee.getClearAlpha(),Te=he.r,Pe=he.g,me=he.b;ae?(g[0]=Te,g[1]=Pe,g[2]=me,g[3]=pe,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Te,v[1]=Pe,v[2]=me,v[3]=pe,U.clearBufferiv(U.COLOR,0,v))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),O&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),Xe.dispose(),Me.dispose(),y.dispose(),z.dispose(),X.dispose(),et.dispose(),L.dispose(),ge.dispose(),H.dispose(),H.removeEventListener("sessionstart",Na),H.removeEventListener("sessionend",za),jn.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=nt.autoReset,I=ue.enabled,O=ue.autoUpdate,B=ue.needsUpdate,D=ue.type;ne(),nt.autoReset=E,ue.enabled=I,ue.autoUpdate=O,ue.needsUpdate=B,ue.type=D}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const I=E.target;I.removeEventListener("dispose",Ce),ut(I)}function ut(E){bt(E),Me.remove(E)}function bt(E){const I=Me.get(E).programs;I!==void 0&&(I.forEach(function(O){ge.releaseProgram(O)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,B,D,J){I===null&&(I=lt);const ae=D.isMesh&&D.matrixWorld.determinant()<0,he=ud(E,I,O,B,D);Se.setMaterial(B,ae);let pe=O.index,Te=1;if(B.wireframe===!0){if(pe=Z.getWireframeAttribute(O),pe===void 0)return;Te=2}const Pe=O.drawRange,me=O.attributes.position;let qe=Pe.start*Te,tt=(Pe.start+Pe.count)*Te;J!==null&&(qe=Math.max(qe,J.start*Te),tt=Math.min(tt,(J.start+J.count)*Te)),pe!==null?(qe=Math.max(qe,0),tt=Math.min(tt,pe.count)):me!=null&&(qe=Math.max(qe,0),tt=Math.min(tt,me.count));const it=tt-qe;if(it<0||it===1/0)return;et.setup(D,B,he,O,pe);let Rt,Ye=fe;if(pe!==null&&(Rt=q.get(pe),Ye=Be,Ye.setIndex(Rt)),D.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*mt()),Ye.setMode(U.LINES)):Ye.setMode(U.TRIANGLES);else if(D.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),Se.setLineWidth(xe*mt()),D.isLineSegments?Ye.setMode(U.LINES):D.isLineLoop?Ye.setMode(U.LINE_LOOP):Ye.setMode(U.LINE_STRIP)}else D.isPoints?Ye.setMode(U.POINTS):D.isSprite&&Ye.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ye.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xe=D._multiDrawStarts,hn=D._multiDrawCounts,je=D._multiDrawCount,qt=pe?q.get(pe).bytesPerElement:1,_i=Me.get(B).currentProgram.getUniforms();for(let Nt=0;Nt<je;Nt++)_i.setValue(U,"_gl_DrawID",Nt),Ye.render(xe[Nt]/qt,hn[Nt])}else if(D.isInstancedMesh)Ye.renderInstances(qe,it,D.count);else if(O.isInstancedBufferGeometry){const xe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,hn=Math.min(O.instanceCount,xe);Ye.renderInstances(qe,it,hn)}else Ye.render(qe,it)};function Ze(E,I,O){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,wr(E,I,O),E.side=Wn,E.needsUpdate=!0,wr(E,I,O),E.side=yn):wr(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),h=Xe.get(O),h.init(I),_.push(h),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),E!==O&&E.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const B=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){const he=J[ae];Ze(he,O,D),B.add(he)}else Ze(J,O,D),B.add(J)}),_.pop(),h=null,B},this.compileAsync=function(E,I,O=null){const B=this.compile(E,I,O);return new Promise(D=>{function J(){if(B.forEach(function(ae){Me.get(ae).currentProgram.isReady()&&B.delete(ae)}),B.size===0){D(E);return}setTimeout(J,10)}ke.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let $t=null;function fn(E){$t&&$t(E)}function Na(){jn.stop()}function za(){jn.start()}const jn=new zl;jn.setAnimationLoop(fn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(E){$t=E,H.setAnimationLoop(E),E===null?jn.stop():jn.start()},H.addEventListener("sessionstart",Na),H.addEventListener("sessionend",za),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,R),h=Xe.get(E,_.length),h.init(I),_.push(h),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ee=K.init(this.clippingPlanes,_e),p=de.get(E,w.length),p.init(),w.push(p),H.enabled===!0&&H.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&Cs(J,I,-1/0,x.sortObjects)}Cs(E,I,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(ie,le),We=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,We&&Ee.addToRenderList(p,E),this.info.render.frame++,ee===!0&&K.beginShadows();const O=h.state.shadowsArray;ue.render(O,E,I),ee===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,D=p.transmissive;if(h.setupLights(),I.isArrayCamera){const J=I.cameras;if(D.length>0)for(let ae=0,he=J.length;ae<he;ae++){const pe=J[ae];ka(B,D,E,pe)}We&&Ee.render(E);for(let ae=0,he=J.length;ae<he;ae++){const pe=J[ae];Fa(p,E,pe,pe.viewport)}}else D.length>0&&ka(B,D,E,I),We&&Ee.render(E),Fa(p,E,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,I),et.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(h=_[_.length-1],ee===!0&&K.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Cs(E,I,O,B){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){B&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const ae=X.update(E),he=E.material;he.visible&&p.push(E,ae,he,O,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ae=X.update(E),he=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ze.copy(ae.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(he)){const pe=ae.groups;for(let Te=0,Pe=pe.length;Te<Pe;Te++){const me=pe[Te],qe=he[me.materialIndex];qe&&qe.visible&&p.push(E,ae,qe,O,ze.z,me)}}else he.visible&&p.push(E,ae,he,O,ze.z,null)}}const J=E.children;for(let ae=0,he=J.length;ae<he;ae++)Cs(J[ae],I,O,B)}function Fa(E,I,O,B){const D=E.opaque,J=E.transmissive,ae=E.transparent;h.setupLightsView(O),ee===!0&&K.setGlobalState(x.clippingPlanes,O),B&&Se.viewport(P.copy(B)),D.length>0&&br(D,I,O),J.length>0&&br(J,I,O),ae.length>0&&br(ae,I,O),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ka(E,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new hi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?_r:Cn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const J=h.state.transmissionRenderTarget[B.id],ae=B.viewport||P;J.setSize(ae.z,ae.w);const he=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(V),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ee.render(O);const pe=x.toneMapping;x.toneMapping=Hn;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),ee===!0&&K.setGlobalState(x.clippingPlanes,B),br(E,O,B),A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let me=0,qe=I.length;me<qe;me++){const tt=I[me],it=tt.object,Rt=tt.geometry,Ye=tt.material,xe=tt.group;if(Ye.side===yn&&it.layers.test(B.layers)){const hn=Ye.side;Ye.side=It,Ye.needsUpdate=!0,Oa(it,O,B,Rt,Ye,xe),Ye.side=hn,Ye.needsUpdate=!0,Pe=!0}}Pe===!0&&(A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J))}x.setRenderTarget(he),x.setClearColor(V,j),Te!==void 0&&(B.viewport=Te),x.toneMapping=pe}function br(E,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,J=E.length;D<J;D++){const ae=E[D],he=ae.object,pe=ae.geometry,Te=B===null?ae.material:B,Pe=ae.group;he.layers.test(O.layers)&&Oa(he,I,O,pe,Te,Pe)}}function Oa(E,I,O,B,D,J){E.onBeforeRender(x,I,O,B,D,J),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(x,I,O,B,E,J),D.transparent===!0&&D.side===yn&&D.forceSinglePass===!1?(D.side=It,D.needsUpdate=!0,x.renderBufferDirect(O,I,B,D,E,J),D.side=Wn,D.needsUpdate=!0,x.renderBufferDirect(O,I,B,D,E,J),D.side=yn):x.renderBufferDirect(O,I,B,D,E,J),E.onAfterRender(x,I,O,B,D,J)}function wr(E,I,O){I.isScene!==!0&&(I=lt);const B=Me.get(E),D=h.state.lights,J=h.state.shadowsArray,ae=D.state.version,he=ge.getParameters(E,D.state,J,I,O),pe=ge.getProgramCacheKey(he);let Te=B.programs;B.environment=E.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(E.isMeshStandardMaterial?z:y).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",Ce),Te=new Map,B.programs=Te);let Pe=Te.get(pe);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===ae)return Ha(E,he),Pe}else he.uniforms=ge.getUniforms(E),E.onBeforeCompile(he,x),Pe=ge.acquireProgram(he,pe),Te.set(pe,Pe),B.uniforms=he.uniforms;const me=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(me.clippingPlanes=K.uniform),Ha(E,he),B.needsLights=hd(E),B.lightsStateVersion=ae,B.needsLights&&(me.ambientLightColor.value=D.state.ambient,me.lightProbe.value=D.state.probe,me.directionalLights.value=D.state.directional,me.directionalLightShadows.value=D.state.directionalShadow,me.spotLights.value=D.state.spot,me.spotLightShadows.value=D.state.spotShadow,me.rectAreaLights.value=D.state.rectArea,me.ltc_1.value=D.state.rectAreaLTC1,me.ltc_2.value=D.state.rectAreaLTC2,me.pointLights.value=D.state.point,me.pointLightShadows.value=D.state.pointShadow,me.hemisphereLights.value=D.state.hemi,me.directionalShadowMap.value=D.state.directionalShadowMap,me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,me.spotShadowMap.value=D.state.spotShadowMap,me.spotLightMatrix.value=D.state.spotLightMatrix,me.spotLightMap.value=D.state.spotLightMap,me.pointShadowMap.value=D.state.pointShadowMap,me.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function Ba(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=rs.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Ha(E,I){const O=Me.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function ud(E,I,O,B,D){I.isScene!==!0&&(I=lt),A.resetTextureUnits();const J=I.fog,ae=B.isMeshStandardMaterial?I.environment:null,he=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yi,pe=(B.isMeshStandardMaterial?z:y).get(B.envMap||ae),Te=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),me=!!O.morphAttributes.position,qe=!!O.morphAttributes.normal,tt=!!O.morphAttributes.color;let it=Hn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(it=x.toneMapping);const Rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ye=Rt!==void 0?Rt.length:0,xe=Me.get(B),hn=h.state.lights;if(ee===!0&&(_e===!0||E!==M)){const Bt=E===M&&B.id===S;K.setState(B,E,Bt)}let je=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==hn.state.version||xe.outputColorSpace!==he||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==pe||B.fog===!0&&xe.fog!==J||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==K.numPlanes||xe.numIntersection!==K.numIntersection)||xe.vertexAlphas!==Te||xe.vertexTangents!==Pe||xe.morphTargets!==me||xe.morphNormals!==qe||xe.morphColors!==tt||xe.toneMapping!==it||xe.morphTargetsCount!==Ye)&&(je=!0):(je=!0,xe.__version=B.version);let qt=xe.currentProgram;je===!0&&(qt=wr(B,I,D));let _i=!1,Nt=!1,Ji=!1;const rt=qt.getUniforms(),sn=xe.uniforms;if(Se.useProgram(qt.program)&&(_i=!0,Nt=!0,Ji=!0),B.id!==S&&(S=B.id,Nt=!0),_i||M!==E){Se.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),ou(re),au(re),rt.setValue(U,"projectionMatrix",re)):rt.setValue(U,"projectionMatrix",E.projectionMatrix),rt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Pn=rt.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,Re.setFromMatrixPosition(E.matrixWorld)),Oe.logarithmicDepthBuffer&&rt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&rt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Nt=!0,Ji=!0)}if(D.isSkinnedMesh){rt.setOptional(U,D,"bindMatrix"),rt.setOptional(U,D,"bindMatrixInverse");const Bt=D.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),rt.setValue(U,"boneTexture",Bt.boneTexture,A))}D.isBatchedMesh&&(rt.setOptional(U,D,"batchingTexture"),rt.setValue(U,"batchingTexture",D._matricesTexture,A),rt.setOptional(U,D,"batchingIdTexture"),rt.setValue(U,"batchingIdTexture",D._indirectTexture,A),rt.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&rt.setValue(U,"batchingColorTexture",D._colorsTexture,A));const Qi=O.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&we.update(D,O,qt),(Nt||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,rt.setValue(U,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(sn.envMap.value=pe,sn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(sn.envMapIntensity.value=I.environmentIntensity),Nt&&(rt.setValue(U,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&fd(sn,Ji),J&&B.fog===!0&&se.refreshFogUniforms(sn,J),se.refreshMaterialUniforms(sn,B,G,Q,h.state.transmissionRenderTarget[E.id]),rs.upload(U,Ba(xe),sn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rs.upload(U,Ba(xe),sn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&rt.setValue(U,"center",D.center),rt.setValue(U,"modelViewMatrix",D.modelViewMatrix),rt.setValue(U,"normalMatrix",D.normalMatrix),rt.setValue(U,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let Pn=0,Ln=Bt.length;Pn<Ln;Pn++){const Ga=Bt[Pn];L.update(Ga,qt),L.bind(Ga,qt)}}return qt}function fd(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function hd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,I,O){Me.get(E.texture).__webglTexture=I,Me.get(E.depthTexture).__webglTexture=O;const B=Me.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const O=Me.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){R=E,T=I,b=O;let B=!0,D=null,J=!1,ae=!1;if(E){const pe=Me.get(E);if(pe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(pe.__hasExternalTextures)A.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const me=E.depthTexture;if(pe.__boundDepthTexture!==me){if(me!==null&&Me.has(me)&&(E.width!==me.image.width||E.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ae=!0);const Pe=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?D=Pe[I][O]:D=Pe[I],J=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?D=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?D=Pe[O]:D=Pe,P.copy(E.viewport),k.copy(E.scissor),F=E.scissorTest}else P.copy(ve).multiplyScalar(G).floor(),k.copy(Ne).multiplyScalar(G).floor(),F=Qe;if(Se.bindFramebuffer(U.FRAMEBUFFER,D)&&B&&Se.drawBuffers(E,D),Se.viewport(P),Se.scissor(k),Se.setScissorTest(F),J){const pe=Me.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,O)}else if(ae){const pe=Me.get(E.texture),Te=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.__webglTexture,O||0,Te)}S=-1},this.readRenderTargetPixels=function(E,I,O,B,D,J,ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){Se.bindFramebuffer(U.FRAMEBUFFER,he);try{const pe=E.texture,Te=pe.format,Pe=pe.type;if(!Oe.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-B&&O>=0&&O<=E.height-D&&U.readPixels(I,O,B,D,De.convert(Te),De.convert(Pe),J)}finally{const pe=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(E,I,O,B,D,J,ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){const pe=E.texture,Te=pe.format,Pe=pe.type;if(!Oe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-B&&O>=0&&O<=E.height-D){Se.bindFramebuffer(U.FRAMEBUFFER,he);const me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,me),U.bufferData(U.PIXEL_PACK_BUFFER,J.byteLength,U.STREAM_READ),U.readPixels(I,O,B,D,De.convert(Te),De.convert(Pe),0);const qe=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,qe);const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await su(U,tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,J),U.deleteBuffer(me),U.deleteSync(tt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,O=0){E.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(E.image.width*B),J=Math.floor(E.image.height*B),ae=I!==null?I.x:0,he=I!==null?I.y:0;A.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,ae,he,D,J),Se.unbindTexture()},this.copyTextureToTexture=function(E,I,O=null,B=null,D=0){E.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],I=arguments[2],D=arguments[3]||0,O=null);let J,ae,he,pe,Te,Pe,me,qe,tt;const it=E.isCompressedTexture?E.mipmaps[D]:E.image;O!==null?(J=O.max.x-O.min.x,ae=O.max.y-O.min.y,he=O.isBox3?O.max.z-O.min.z:1,pe=O.min.x,Te=O.min.y,Pe=O.isBox3?O.min.z:0):(J=it.width,ae=it.height,he=it.depth||1,pe=0,Te=0,Pe=0),B!==null?(me=B.x,qe=B.y,tt=B.z):(me=0,qe=0,tt=0);const Rt=De.convert(I.format),Ye=De.convert(I.type);let xe;I.isData3DTexture?(A.setTexture3D(I,0),xe=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(A.setTexture2DArray(I,0),xe=U.TEXTURE_2D_ARRAY):(A.setTexture2D(I,0),xe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const hn=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qt=U.getParameter(U.UNPACK_SKIP_PIXELS),_i=U.getParameter(U.UNPACK_SKIP_ROWS),Nt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pe);const Ji=E.isDataArrayTexture||E.isData3DTexture,rt=I.isDataArrayTexture||I.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const sn=Me.get(E),Qi=Me.get(I),Bt=Me.get(sn.__renderTarget),Pn=Me.get(Qi.__renderTarget);Se.bindFramebuffer(U.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Ln=0;Ln<he;Ln++)Ji&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,D,Pe+Ln),E.isDepthTexture?(rt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,D,tt+Ln),U.blitFramebuffer(pe,Te,J,ae,me,qe,J,ae,U.DEPTH_BUFFER_BIT,U.NEAREST)):rt?U.copyTexSubImage3D(xe,D,me,qe,tt+Ln,pe,Te,J,ae):U.copyTexSubImage2D(xe,D,me,qe,tt+Ln,pe,Te,J,ae);Se.bindFramebuffer(U.READ_FRAMEBUFFER,null),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(xe,D,me,qe,tt,J,ae,he,Rt,Ye,it.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,D,me,qe,tt,J,ae,he,Rt,it.data):U.texSubImage3D(xe,D,me,qe,tt,J,ae,he,Rt,Ye,it):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,me,qe,J,ae,Rt,Ye,it.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,me,qe,it.width,it.height,Rt,it.data):U.texSubImage2D(U.TEXTURE_2D,D,me,qe,J,ae,Rt,Ye,it);U.pixelStorei(U.UNPACK_ROW_LENGTH,hn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qt),U.pixelStorei(U.UNPACK_SKIP_ROWS,_i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt),D===0&&I.generateMipmaps&&U.generateMipmap(xe),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O=null,B=null,D=0){return E.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,E=arguments[2],I=arguments[3],D=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,O,B,D)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){T=0,b=0,R=null,Se.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Sa{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new Sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v0 extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wn extends rn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],f=[],m=[];let g=0;const v=[],p=i/2;let h=0;w(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(m,2));function w(){const x=new N,C=new N;let T=0;const b=(t-e)/i;for(let R=0;R<=s;R++){const S=[],M=R/s,P=M*(t-e)+e;for(let k=0;k<=r;k++){const F=k/r,V=F*c+a,j=Math.sin(V),W=Math.cos(V);C.x=P*j,C.y=-M*i+p,C.z=P*W,u.push(C.x,C.y,C.z),x.set(j,b,W).normalize(),f.push(x.x,x.y,x.z),m.push(F,1-M),S.push(g++)}v.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=v[S][R],P=v[S+1][R],k=v[S+1][R+1],F=v[S][R+1];(e>0||S!==0)&&(d.push(M,P,F),T+=3),(t>0||S!==s-1)&&(d.push(P,k,F),T+=3)}l.addGroup(h,T,0),h+=T}function _(x){const C=g,T=new Ge,b=new N;let R=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),g++;const P=g;for(let k=0;k<=r;k++){const V=k/r*c+a,j=Math.cos(V),W=Math.sin(V);b.x=S*W,b.y=p*M,b.z=S*j,u.push(b.x,b.y,b.z),f.push(0,M,0),T.x=j*.5+.5,T.y=W*.5*M+.5,m.push(T.x,T.y),g++}for(let k=0;k<r;k++){const F=C+k,V=P+k;x===!0?d.push(V,V+1,F):d.push(V+1,V,F),R+=3}l.addGroup(h,R,x===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ea extends wn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ea(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ba extends rn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new N,x=new N,C=new N;for(let T=0;T<t.length;T+=3)m(t[T+0],_),m(t[T+1],x),m(t[T+2],C),c(_,x,C,w)}function c(w,_,x,C){const T=C+1,b=[];for(let R=0;R<=T;R++){b[R]=[];const S=w.clone().lerp(x,R/T),M=_.clone().lerp(x,R/T),P=T-R;for(let k=0;k<=P;k++)k===0&&R===T?b[R][k]=S:b[R][k]=S.clone().lerp(M,k/P)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(b[R][M+1]),f(b[R+1][M]),f(b[R][M])):(f(b[R][M+1]),f(b[R+1][M+1]),f(b[R+1][M]))}}function l(w){const _=new N;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(w),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function d(){const w=new N;for(let _=0;_<s.length;_+=3){w.x=s[_+0],w.y=s[_+1],w.z=s[_+2];const x=p(w)/2/Math.PI+.5,C=h(w)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const _=o[w+0],x=o[w+2],C=o[w+4],T=Math.max(_,x,C),b=Math.min(_,x,C);T>.9&&b<.1&&(_<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function f(w){s.push(w.x,w.y,w.z)}function m(w,_){const x=w*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const w=new N,_=new N,x=new N,C=new N,T=new Ge,b=new Ge,R=new Ge;for(let S=0,M=0;S<s.length;S+=9,M+=6){w.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),T.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),C.copy(w).add(_).add(x).divideScalar(3);const P=p(C);v(T,M+0,w,P),v(b,M+2,_,P),v(R,M+4,x,P)}}function v(w,_,x,C){C<0&&w.x===1&&(o[_]=w.x-1),x.x===0&&x.z===0&&(o[_]=C/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function h(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.vertices,e.indices,e.radius,e.details)}}class wa extends ba{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class bs extends rn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new N,f=new N,m=[],g=[],v=[],p=[];for(let h=0;h<=i;h++){const w=[],_=h/i;let x=0;h===0&&o===0?x=.5/t:h===i&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(T+x,1-_),w.push(l++)}d.push(w)}for(let h=0;h<i;h++)for(let w=0;w<t;w++){const _=d[h][w+1],x=d[h][w],C=d[h+1][w],T=d[h+1][w+1];(h!==0||o>0)&&m.push(_,x,T),(h!==i-1||c<Math.PI)&&m.push(x,C,T)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ta extends rn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new N,u=new N,f=new N;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const v=g/r*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,w=(r+1)*m+g;o.push(v,p,w),o.push(p,h,w)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class M0 extends Mr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vl extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class y0 extends Vl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oo=new pt,Gc=new N,Vc=new N;class S0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E0 extends S0{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends Vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new E0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);function Ve(n){let e=n>>>0||1;return{get state(){return e>>>0},set state(t){e=t>>>0||1},next(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},range(t,i){return t+this.next()*(i-t)},pick(t){return t[Math.floor(this.next()*t.length)]}}}const hs=2,Ni=5e3,w0=new Set(["theft","disturbance","assault","kill","accident","found_corpse","noise","sabotage"]);function ps(){const n=[];let e=0;return{events:n,append(t,i){if(!w0.has(t))throw new Error(`event type non valido: ${t}`);const r=i.severity??.5;if(!(r>=0&&r<=1))throw new Error(`severity fuori range: ${r}`);const s={id:`ev${++e}`,t:i.t??0,type:t,severity:r,x:i.x??0,z:i.z??0,actorId:i.actorId??null,victimId:i.victimId??null,place:i.place??"sconosciuto",moved:!!i.moved,witnesses:[]};for(n.push(s);n.length>Ni;)n.shift();return s},addWitness(t,i){t.witnesses.includes(i)||t.witnesses.push(i)},byId(t){return n.find(i=>i.id===t)},serialize(){return{seq:e,events:n}},restore(t){e=t.seq??0,n.length=0;const i=t.events??[],r=Math.max(0,i.length-Ni);for(let s=r;s<i.length;s++)n.push(i[s])}}}const Fe={size:100,road:{minX:-50,maxX:50,minZ:-4,maxZ:4},piazza:{cx:37,cz:20,w:18,d:16},buildings:[{id:"bar",name:"Bar Centrale",x:-20,z:20,w:16,d:12,h:5,interior:!0,door:{side:"S",at:-20,width:2.4}},{id:"b2",name:"Palazzo (appartamenti)",x:12,z:20,w:8,d:12,h:9},{id:"b3",name:"Casa B3",x:24,z:20,w:8,d:12,h:6},{id:"b4",name:"Casa B4",x:-18,z:-20,w:14,d:10,h:6},{id:"b5",name:"Casa B5",x:10,z:-20,w:16,d:10,h:5}],coverWalls:[{x:29.5,z:14,w:5,d:.5},{x:-32.4,z:16,w:.5,d:5}],nodes:{road_w:{x:-40,z:0},road_c:{x:0,z:0},road_e:{x:44,z:0},vic_n:{x:17,z:13},vic_s:{x:18,z:-2},pia_c:{x:37,z:20},pia_w:{x:29,z:20},pia_e:{x:44,z:20},bar_in:{x:-20,z:20},bar_out:{x:-20,z:11},b4_door:{x:-18,z:-14},b5_door:{x:10,z:-14},sq_s:{x:0,z:-10},pia_s:{x:37,z:8},apt:{x:12,z:12.3},svc_in:{x:-34.5,z:20},svc_out:{x:-32,z:8},court:{x:-20,z:30},north_c:{x:-20,z:33},north_w:{x:-30,z:33},north_e:{x:30,z:33}},edges:[["road_w","road_c"],["road_c","road_e"],["road_c","vic_s"],["vic_s","vic_n"],["pia_w","pia_c"],["pia_c","pia_e"],["pia_c","pia_s"],["pia_s","vic_n"],["pia_s","pia_w"],["vic_s","road_c"],["road_c","sq_s"],["sq_s","b4_door"],["sq_s","b5_door"],["bar_out","road_c"],["bar_in","bar_out"],["road_e","pia_e"],["pia_e","pia_s"],["apt","vic_n"],["apt","vic_s"],["svc_in","svc_out"],["svc_out","road_w"],["court","north_c"],["north_c","north_w"],["north_c","north_e"],["north_w","road_w"],["north_e","pia_e"]],props:[{kind:"lamp",x:-30,z:6},{kind:"lamp",x:-5,z:-6},{kind:"lamp",x:18,z:12},{kind:"lamp",x:34,z:26},{kind:"lamp",x:-38,z:24},{kind:"bench",x:33,z:24},{kind:"bench",x:40,z:17},{kind:"crates",x:15.8,z:8},{kind:"yardstack",x:-38,z:20},{kind:"tree",x:-34,z:24},{kind:"tree",x:40,z:-8},{kind:"tree",x:-8,z:-28}]};function Wl(){return{yardstack:{kind:"sabotage",x:-38,z:20,state:"ok"}}}const Wc={road_w:"strada ovest",road_c:"strada centrale",road_e:"strada est",vic_n:"vicolo nord",vic_s:"vicolo sud",pia_c:"piazza",pia_w:"piazza ovest",pia_e:"piazza est",pia_s:"ingresso piazza",bar_in:"bar (interno)",bar_out:"fuori dal bar",b4_door:"casa sud-ovest",b5_door:"casa sud-est",sq_s:"piazzale sud",apt:"palazzo (portone)",svc_in:"deposito",svc_out:"piazzale deposito",court:"corte retrostante",north_c:"vicolo nord",north_w:"vicolo nord-ovest",north_e:"vicolo nord-est"};function ws(){const n=[];for(const e of Fe.buildings){const t=e.w/2,i=e.d/2;if(!e.interior){n.push({minX:e.x-t,maxX:e.x+t,minZ:e.z-i,maxZ:e.z+i,id:e.id,tall:!0,high:!0});continue}const r=.4,s=e.door.width/2,o=e.door.at,a=e.z-i,c=e.z+i,l=e.x-t,d=e.x+t;n.push({minX:l,maxX:o-s,minZ:a-r/2,maxZ:a+r/2,id:"bar_s1",tall:!0,high:!0}),n.push({minX:o+s,maxX:d,minZ:a-r/2,maxZ:a+r/2,id:"bar_s2",tall:!0,high:!0}),n.push({minX:l,maxX:d,minZ:c-r/2,maxZ:c+r/2,id:"bar_n",tall:!0,high:!0}),n.push({minX:l-r/2,maxX:l+r/2,minZ:a,maxZ:c,id:"bar_w",tall:!0,high:!0}),n.push({minX:d-r/2,maxX:d+r/2,minZ:a,maxZ:c,id:"bar_e",tall:!0,high:!0})}for(const e of Fe.coverWalls??[])n.push({minX:e.x-e.w/2,maxX:e.x+e.w/2,minZ:e.z-e.d/2,maxZ:e.z+e.d/2,id:"cover",tall:!0,high:!0});for(const e of Fe.props)(e.kind==="lamp"||e.kind==="tree")&&n.push({minX:e.x-.3,maxX:e.x+.3,minZ:e.z-.3,maxZ:e.z+.3,id:"prop",tall:!1}),e.kind==="crates"&&n.push({minX:e.x-1,maxX:e.x+1,minZ:e.z-1,maxZ:e.z+1,id:"crates",tall:!0}),e.kind==="yardstack"&&n.push({minX:e.x-1.2,maxX:e.x+1.2,minZ:e.z-1.2,maxZ:e.z+1.2,id:"yardstack",tall:!0}),e.kind==="bench"&&n.push({minX:e.x-1.1,maxX:e.x+1.1,minZ:e.z-.4,maxZ:e.z+.4,id:"prop",tall:!1});return n}function ar(n,e,t,i){let r=n,s=e,o=!1;for(let c=0;c<3;c++){o=!1;for(const l of i){const d=Math.max(l.minX,Math.min(r,l.maxX)),u=Math.max(l.minZ,Math.min(s,l.maxZ)),f=r-d,m=s-u,g=f*f+m*m;if(g<t*t)if(o=!0,g<1e-8){const v=r-l.minX,p=l.maxX-r,h=s-l.minZ,w=l.maxZ-s,_=Math.min(v,p,h,w);_===v?r=l.minX-t:_===p?r=l.maxX+t:_===h?s=l.minZ-t:s=l.maxZ+t}else{const v=Math.sqrt(g);r=d+f/v*t,s=u+m/v*t}}if(!o)break}const a=Fe.size/2-1;return r=Math.max(-a,Math.min(a,r)),s=Math.max(-a,Math.min(a,s)),{x:r,z:s,hit:o}}function Gn(n,e,t,i,r){for(const s of r)if(s.tall&&!(Xc(n,e,s)||Xc(t,i,s))&&T0(n,e,t,i,s))return!0;return!1}function Xc(n,e,t){return n>t.minX&&n<t.maxX&&e>t.minZ&&e<t.maxZ}function T0(n,e,t,i,r){let s=0,o=1;const a=t-n,c=i-e,l=[[n,a,r.minX,r.maxX],[e,c,r.minZ,r.maxZ]];for(const[d,u,f,m]of l)if(Math.abs(u)<1e-9){if(d<f||d>m)return!1}else{let g=(f-d)/u,v=(m-d)/u;if(g>v){const p=g;g=v,v=p}if(s=Math.max(s,g),o=Math.min(o,v),s>o)return!1}return o>0&&s<1}function Jo(n,e,t){const i=Fe.buildings.find(r=>r.id===t);return i?Math.abs(n-i.x)<i.w/2&&Math.abs(e-i.z)<i.d/2:!1}function yr(){const n={};for(const e of Object.keys(Fe.nodes))n[e]=[];for(const[e,t]of Fe.edges)n[e].push(t),n[t].push(e);return n}function A0(n,e,t){if(e===t)return[t];const i={[e]:null},r=[e];for(;r.length;){const a=r.shift();for(const c of n[a]??[])if(!(c in i)&&(i[c]=a,r.push(c),c===t)){r.length=0;break}}if(!(t in i))return[t];const s=[];let o=t;for(;o;)s.unshift(o),o=i[o];return s}function pi(n,e){let t=null,i=1e9;for(const[r,s]of Object.entries(Fe.nodes)){const o=(s.x-n)**2+(s.z-e)**2;o<i&&(i=o,t=r)}return t}const $c=.35,R0=.15;function Qo(n,e,t){let i=0;for(const r of t){const s=Math.max(r.minX,Math.min(n,r.maxX)),o=Math.max(r.minZ,Math.min(e,r.maxZ));if(s===n&&o===e){const a=Math.min(n-r.minX,r.maxX-n,e-r.minZ,r.maxZ-e)+$c;a>i&&(i=a)}else{const a=$c-Math.hypot(n-s,e-o);a>i&&(i=a)}}return i}const Yr=new Map;function Vn(n){let e=Yr.get(n);if(e===void 0){if(Yr.size===0){const t=ws();for(const[i,r]of Object.entries(Fe.nodes))Yr.set(i,Math.max(.6,Qo(r.x,r.z,t)+R0))}e=Yr.get(n)??.6}return e}function Xl(n){const e=n??ws(),t=[],i=[];for(const[r,s]of Object.entries(Fe.nodes))Qo(s.x,s.z,e)>0&&t.push(r);for(const[r,s]of Fe.edges){const o=Fe.nodes[r],a=Fe.nodes[s];if(!o||!a)continue;let c=!1;for(let l=0;l<=8&&!c;l++){const d=l/8,u=o.x+(a.x-o.x)*d,f=o.z+(a.z-o.z)*d;Qo(u,f,e)>0&&(c=!0)}c&&i.push(`${r}-${s}`)}return{nodeViolations:t,edgeViolations:i}}const $i=.05,ea=4,C0={seen:600,heard:120,hearsay:180},P0=30;function $l(n){return Number.isFinite(n)?Math.max($i,Math.min(1,n)):$i}function ct(n){return{kind:n.kind,severity:n.severity??.5,px:n.px??0,pz:n.pz??0,place:n.place??"sconosciuto",actor:n.actor??"sconosciuto",subject:n.subject??null,channel:n.channel??"seen",confidence:$l(n.confidence??.5),t:n.t??0,error:n.error??null,moved:n.moved??!1,w:n.w??null,contra:n.contra??0,provenance:[...n.provenance??[]].slice(0,ea)}}function L0(n,e){const t=n.actor,i=e.actor,r=t&&i&&t!=="sconosciuto"&&i!=="sconosciuto"&&t!==i,s=Math.hypot(n.px-e.px,n.pz-e.pz)>P0;return r||s}function nn(n,e){const t=C0[n.channel]??300;return n.confidence*Math.exp(-Math.max(0,e-n.t)/t)}function ft(n,e,t,i){const r=ct(t);if(r.provenance.includes(i))return"ignored";const s=n.get(e);if(!s)return n.set(e,r),"stored";if(s.provenance.includes(i)&&r.provenance.includes(i))return"ignored";if(s.kind==="accident"&&r.kind==="kill"){const a=[...s.provenance];for(const c of r.provenance)!a.includes(c)&&a.length<ea&&a.push(c);return n.set(e,{...r,provenance:a}),"merged"}if(s.kind==="kill"&&r.kind==="accident")return"ignored";if(L0(s,r))return s.channel!=="seen"&&r.channel==="seen"?(n.set(e,{...r,contra:(s.contra??0)+1}),"merged"):s.channel==="seen"&&r.channel!=="seen"?"ignored":(s.contra=(s.contra??0)+1,s.confidence=Math.max($i,+(s.confidence*.85).toFixed(3)),"merged");const o=[...s.provenance];for(const a of r.provenance)!o.includes(a)&&o.length<ea&&o.push(a);return r.confidence>s.confidence?(n.set(e,{...r,provenance:o}),"merged"):o.length>s.provenance.length?(r.provenance.every(c=>!s.provenance.includes(c))&&r.t>s.t&&r.confidence>=.25&&r.confidence<=s.confidence&&(s.t=s.t+(r.t-s.t)*.25),n.set(e,{...s,provenance:o}),"merged"):"ignored"}function Aa(n,e){let t=0;for(const[i,r]of n)nn(r,e)<$i+.01&&(n.delete(i),t++);return t}const I0={theft:"un furto",disturbance:"un trambusto",assault:"un’aggressione",kill:"un omicidio",accident:"un incidente",found_corpse:"un cadavere",corpse:"un cadavere",noise:"un rumore",sabotage:"un sabotaggio"};function D0(n,e){if(!n)return"nulla di sospetto";const t=Math.round(nn(n,e??n.t)*100),i=n.error?` (ricordo impreciso: ${n.error})`:"",r=n.channel==="seen"?"visto di persona":n.channel==="heard"?"sentito":n.channel==="inferred"?"rimasto in dubbio, poi collegato":"sentito dire",s=I0[n.kind]??n.kind,o=n.provenance.length>1?` [via ${n.provenance.join("→")}]`:"",a=n.moved?" (scena alterata)":"";return`${s} ${n.place} — ${r}, fiducia ${t}%${i}${o}${a}`}const qc=new Set(["kill","sabotage"]);function Yc(n,e){return!!(n.subject&&e.subject&&n.subject===e.subject||n.place&&e.place&&n.place===e.place||Number.isFinite(n.px)&&Number.isFinite(e.px)&&Math.hypot(n.px-e.px,n.pz-e.pz)<=12)}function U0(n,e){const t=n.beliefs.get(e);if(!t)return[];const i=[];if(t.kind==="accident")for(const[r,s]of n.beliefs)r!==e&&qc.has(s.kind)&&Yc(s,t)&&(jc(n,r,s),i.push(r));else if(qc.has(t.kind))for(const[r,s]of n.beliefs)r!==e&&s.kind==="accident"&&Yc(t,s)&&(jc(n,r,t),i.push(r));return i}function jc(n,e,t){const i=n.beliefs.get(e);if(!i||i.kind!=="accident")return;const r=$l(Math.min(nn(t,t.t)*.9,.7));n.beliefs.set(e,{...i,kind:"kill",severity:.9,channel:"inferred",confidence:r,t:t.t,error:t.kind==="sabotage"?"causa preparata: non è stato un incidente":"cè un testimone del delitto",subject:i.subject??t.subject??null,provenance:[...i.provenance]})}const Kt=64,ql={family:1,friend:.9,coworker:.85,neighbor:.8,acquaintance:.7,unknown:.6,enemy:0},N0={family:600,friend:300,coworker:150,neighbor:150,acquaintance:60};function An(n,e){return n.relType?.[e]??((n.relations?.[e]??0)>0?"acquaintance":"unknown")}function zi(n,e){return An(n,e)==="enemy"?0:n.relations?.[e]??0}function ss(n,e){return ql[An(n,e)]??.6}function dr(n,e){if(!e)return 0;const t=An(n,e);return t==="enemy"||(n.relations?.[e]??0)<.3?0:N0[t]??0}const Lt={SHORT:0,NORMAL:1,SALIENT:2},z0=60,F0=900,Zc=12;function Kc(n,e){const t=n.beliefs.get(e);return t?t.severity>=.7||t.channel==="seen"&&(t.kind==="kill"||t.kind==="found_corpse"||t.kind==="assault")||t.subject&&dr(n,t.subject)>0?Lt.SALIENT:t.kind==="noise"||t.severity<.3?Lt.SHORT:Lt.NORMAL:Lt.NORMAL}function Ki(n,e){const t={};for(const r of Object.keys(n.relations??{}))t[r]=.5;const i={id:n.id,name:n.name,color:n.color,role:n.role??"civilian",x:n.x,z:n.z,yaw:0,speed:0,state:"dwell",agenda:n.agenda.map(r=>({...r})),agendaIdx:0,dwellLeft:2,path:[],pathIdx:0,fleeNode:null,gotoX:null,gotoZ:null,relations:{...n.relations},relType:{...n.relType??{}},trust:t,home:n.home??null,work:n.work??null,schedule:n.schedule?n.schedule.map(r=>({...r})):null,agendaBlock:null,memory:[],beliefs:new Map,level:"L1",thinkAt:(e?e.next():0)*.5,gossipAt:0,talkT:0,symbolAt:0,gaze:{},awareness:0,alertedBy:null,alertT:-99,death:null,hidden:!1,routineShift:null,police:null,mesh:null};return i.role==="police"&&(i.police={state:"UNAWARE",since:0,searchX:0,searchZ:0,catchT:0}),i}function Xt(n,e){const t=U0(n,e);for(const i of t)n.memory.includes(i)&&n.memTier&&(n.memTier[i]=Kc(n,i));if(!n.memory.includes(e)&&(n.memTier||(n.memTier={}),n.memAt||(n.memAt={}),n.memTier[e]=Kc(n,e),n.memAt[e]=n.beliefs.get(e)?.t??0,n.memory.push(e),n.memory.length>Kt)){const i=Yl(n,n.memory.length-Kt);n.memory=n.memory.filter(r=>!i.has(r));for(const r of i)delete n.memTier[r],delete n.memAt[r]}}function Yl(n,e){const t=[...n.memory].sort((i,r)=>(n.memTier[i]??Lt.NORMAL)-(n.memTier[r]??Lt.NORMAL)||(n.memAt[i]??0)-(n.memAt[r]??0));return new Set(t.slice(0,e))}function os(n,e){n.memTier||(n.memTier={}),n.memAt||(n.memAt={});const t=n.memory.length;let i=[];for(const o of n.memory){const a=n.memTier[o]??Lt.NORMAL,c=e-(n.memAt[o]??n.beliefs.get(o)?.t??0),l=n.beliefs.has(o);a===Lt.SHORT&&(!l||c>z0)||a===Lt.NORMAL&&!l||a===Lt.SALIENT&&c>F0||i.push(o)}const r=i.filter(o=>(n.memTier[o]??Lt.NORMAL)===Lt.SALIENT);if(r.length>Zc){const o=new Set([...r].sort((a,c)=>(n.memAt[a]??0)-(n.memAt[c]??0)).slice(0,r.length-Zc));i=i.filter(a=>!o.has(a))}if(i.length>Kt){const o=Yl({memory:i,memTier:n.memTier,memAt:n.memAt},i.length-Kt);i=i.filter(a=>!o.has(a))}n.memory=i;const s=new Set(i);for(const o of Object.keys(n.memTier))s.has(o)||delete n.memTier[o];for(const o of Object.keys(n.memAt))s.has(o)||delete n.memAt[o];return t-i.length}function Sr(n){return{id:n.id,x:n.x,z:n.z,yaw:n.yaw,speed:n.speed,state:n.state,agendaIdx:n.agendaIdx,dwellLeft:n.dwellLeft,agenda:n.agenda.map(e=>({...e})),agendaBlock:n.agendaBlock??null,path:[...n.path],pathIdx:n.pathIdx,fleeNode:n.fleeNode,relations:{...n.relations},relType:{...n.relType??{}},memory:[...n.memory],memTier:{...n.memTier??{}},memAt:{...n.memAt??{}},trust:{...n.trust},beliefs:[...n.beliefs.entries()].map(([e,t])=>[e,{...t,provenance:[...t.provenance]}]),level:n.level,thinkAt:n.thinkAt,gossipAt:n.gossipAt,talkT:n.talkT??0,symbolAt:n.symbolAt??0,gaze:{...n.gaze??{}},awareness:n.awareness??0,alertedBy:n.alertedBy,alertT:n.alertT??-99,mournT:n.mournT??0,death:n.death?{...n.death}:null,hidden:!!n.hidden,routineShift:n.routineShift?{until:n.routineShift.until,node:n.routineShift.node}:null,police:n.police?{...n.police}:null,gotoX:n.gotoX,gotoZ:n.gotoZ}}function Er(n,e){n.x=e.x,n.z=e.z,n.yaw=e.yaw,n.speed=e.speed??0,n.state=e.state,n.agendaIdx=e.agendaIdx,n.dwellLeft=e.dwellLeft,Array.isArray(e.agenda)&&e.agenda.length&&(n.agenda=e.agenda.map(t=>({...t}))),n.path=[...e.path??[]],n.pathIdx=e.pathIdx??0,n.fleeNode=e.fleeNode??null,n.relations={...e.relations},n.relType={...e.relType??{}},n.agendaBlock=e.agendaBlock??null,n.memory=[...e.memory],n.memTier={...e.memTier??{}},n.memAt={...e.memAt??{}},n.trust={...e.trust??{}},n.beliefs=new Map((e.beliefs??[]).map(([t,i])=>[t,{...i,provenance:[...i.provenance??[]]}])),n.level=e.level??"L1",n.thinkAt=e.thinkAt??0,n.gossipAt=e.gossipAt??0,n.talkT=e.talkT??0,n.symbolAt=e.symbolAt??0,n.gaze={...e.gaze??{}},n.awareness=e.awareness??0,n.alertedBy=e.alertedBy,n.alertT=e.alertT??-99,n.mournT=e.mournT??0,n.death=e.death?{...e.death}:null,n.hidden=!!e.hidden,n.routineShift=e.routineShift?{until:e.routineShift.until,node:e.routineShift.node}:null,n.police=e.police?{...e.police}:n.role==="police"?{state:"UNAWARE",since:0,searchX:0,searchZ:0,catchT:0}:null,n.gotoX=e.gotoX??null,n.gotoZ=e.gotoZ??null}const jl=[{id:"anna",name:"Anna (barista)",color:12999566,x:-20,z:18,home:"bar_in",work:"bar_in",relations:{bruno:.7,sara:.5,marco:.4,luca:.3,elena:.4,paolo:.7,bianca:.6,monica:.5,chiara:.5},relType:{bruno:"friend",sara:"friend",marco:"acquaintance",luca:"acquaintance",elena:"neighbor",paolo:"coworker",bianca:"coworker",monica:"coworker",chiara:"friend"},schedule:[{from:6,to:11,node:"bar_in",kind:"work"},{from:11,to:12,node:"pia_c",kind:"leisure"},{from:12,to:17,node:"bar_in",kind:"work"},{from:17,to:19,node:"bar_out",kind:"social"},{from:19,to:23,node:"bar_in",kind:"work"}],agenda:[{node:"bar_in",dwell:16},{node:"bar_out",dwell:3},{node:"pia_w",dwell:4},{node:"bar_out",dwell:2}]},{id:"bruno",name:"Bruno (operaio)",color:4882377,x:0,z:0,home:"b5_door",work:"svc_in",relations:{anna:.7,franco:.5,carla:.3,marco:.2,otello:.7,ivan:.5},relType:{anna:"friend",franco:"coworker",carla:"acquaintance",marco:"acquaintance",otello:"coworker",ivan:"coworker"},schedule:[{from:7,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"bar_out",kind:"leisure"},{from:13,to:17,node:"svc_in",kind:"work"},{from:17,to:20,node:"bar_in",kind:"social"}],agenda:[{node:"b5_door",dwell:6},{node:"svc_out",dwell:3},{node:"svc_in",dwell:8},{node:"road_c",dwell:2},{node:"bar_out",dwell:5}]},{id:"carla",name:"Carla (custode)",color:5484650,x:18,z:6,home:"vic_n",work:"court",relations:{bruno:.3,marta:.4,anna:.2,elena:.2,gino:.5},relType:{bruno:"acquaintance",marta:"neighbor",anna:"acquaintance",elena:"neighbor",gino:"neighbor"},schedule:[{from:8,to:12,node:"court",kind:"work"},{from:12,to:14,node:"pia_c",kind:"leisure"},{from:14,to:18,node:"court",kind:"work"},{from:18,to:21,node:"vic_n",kind:"social"}],agenda:[{node:"vic_s",dwell:3},{node:"vic_n",dwell:2},{node:"pia_c",dwell:7},{node:"pia_w",dwell:3}]},{id:"dario",name:"Dario (fornaio)",color:13666861,x:44,z:0,home:"north_e",work:"road_e",relations:{luca:.2,franco:.2,furio:.5},relType:{luca:"acquaintance",franco:"acquaintance",furio:"friend"},schedule:[{from:5,to:11,node:"road_e",kind:"work"},{from:11,to:15,node:"north_e",kind:"home"},{from:15,to:19,node:"pia_e",kind:"work"},{from:19,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"road_e",dwell:4},{node:"road_c",dwell:3},{node:"vic_s",dwell:3},{node:"road_c",dwell:2}]},{id:"elena",name:"Elena (passante)",color:9068496,x:-18,z:-14,home:"b4_door",relations:{anna:.5,sara:.4,carla:.2,marta:.3,nadia:.5,ida:.4},relType:{anna:"friend",sara:"friend",carla:"neighbor",marta:"neighbor",nadia:"friend",ida:"neighbor"},schedule:[{from:8,to:12,node:"sq_s",kind:"leisure"},{from:12,to:16,node:"pia_c",kind:"social"},{from:16,to:20,node:"bar_in",kind:"social"}],agenda:[{node:"b4_door",dwell:5},{node:"sq_s",dwell:2},{node:"bar_out",dwell:4},{node:"bar_in",dwell:8}]},{id:"marco",name:"Marco (bersaglio)",color:13908526,role:"target",x:12,z:12,home:"apt",relations:{luca:.8,sara:.7,anna:.4,bruno:.2,tiberio:.5,lina:.3},relType:{luca:"friend",sara:"friend",anna:"acquaintance",bruno:"acquaintance",tiberio:"coworker",lina:"neighbor"},schedule:[{from:7,to:10,node:"apt",kind:"home"},{from:10,to:14,node:"pia_c",kind:"work"},{from:14,to:17,node:"svc_in",kind:"work"},{from:17,to:21,node:"bar_in",kind:"social"},{from:21,to:24,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:10},{node:"pia_c",dwell:6},{node:"bar_in",dwell:10},{node:"svc_in",dwell:8},{node:"bar_in",dwell:6},{node:"court",dwell:7},{node:"pia_e",dwell:4}]},{id:"luca",name:"Luca (socio di Marco)",color:11557418,x:-20,z:11,home:"bar_out",relations:{marco:.8,sara:.3,dario:.2,anna:.3,monica:.4},relType:{marco:"friend",sara:"acquaintance",dario:"acquaintance",anna:"acquaintance",monica:"acquaintance"},schedule:[{from:9,to:13,node:"bar_in",kind:"work"},{from:13,to:17,node:"pia_c",kind:"social"},{from:17,to:22,node:"bar_in",kind:"social"},{from:22,to:24,node:"bar_out",kind:"home"}],agenda:[{node:"bar_out",dwell:4},{node:"bar_in",dwell:10},{node:"pia_c",dwell:6},{node:"road_c",dwell:3},{node:"apt",dwell:6}]},{id:"sara",name:"Sara (amica di Marco)",color:4176038,x:-18,z:-14,home:"b4_door",relations:{marco:.7,anna:.5,elena:.4,luca:.3,paolo:.85,nadia:.5},relType:{marco:"friend",anna:"friend",elena:"friend",luca:"acquaintance",paolo:"family",nadia:"friend"},schedule:[{from:8,to:12,node:"b4_door",kind:"home"},{from:12,to:16,node:"bar_in",kind:"social"},{from:16,to:20,node:"pia_c",kind:"social"},{from:20,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"b4_door",dwell:6},{node:"bar_in",dwell:8},{node:"pia_c",dwell:5},{node:"apt",dwell:7}]},{id:"rossi",name:"Ag. Rossi",color:2771668,role:"police",x:-40,z:0,home:"road_w",relations:{verdi:.6,sandro:.3},relType:{verdi:"coworker",sandro:"acquaintance"},schedule:[{from:8,to:14,node:"road_w",kind:"work"},{from:14,to:20,node:"pia_c",kind:"work"},{from:20,to:24,node:"road_w",kind:"home"}],agenda:[{node:"road_w",dwell:4},{node:"road_c",dwell:3},{node:"vic_s",dwell:4},{node:"pia_s",dwell:4}]},{id:"verdi",name:"Ag. Verdi",color:2783956,role:"police",x:44,z:0,home:"road_e",relations:{rossi:.6,sandro:.3},relType:{rossi:"coworker",sandro:"acquaintance"},schedule:[{from:8,to:14,node:"road_e",kind:"work"},{from:14,to:20,node:"vic_n",kind:"work"},{from:20,to:24,node:"road_e",kind:"home"}],agenda:[{node:"road_e",dwell:4},{node:"pia_e",dwell:4},{node:"pia_c",dwell:4},{node:"vic_n",dwell:3}]},{id:"franco",name:"Franco (operaio)",color:8022586,x:10,z:-14,home:"b5_door",work:"svc_in",relations:{bruno:.6,anna:.2,dario:.2,otello:.6,ivan:.5},relType:{bruno:"coworker",anna:"acquaintance",dario:"acquaintance",otello:"coworker",ivan:"coworker"},schedule:[{from:7,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"pia_s",kind:"leisure"},{from:13,to:17,node:"svc_out",kind:"work"},{from:17,to:20,node:"bar_out",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_out",dwell:2},{node:"svc_in",dwell:9},{node:"bar_out",dwell:4}]},{id:"marta",name:"Marta (anziana)",color:10132122,x:37,z:20,home:"pia_e",relations:{carla:.4,elena:.3,tea:.6,chiara:.5,osvaldo:.5},relType:{carla:"neighbor",elena:"neighbor",tea:"friend",chiara:"neighbor",osvaldo:"friend"},schedule:[{from:8,to:12,node:"pia_c",kind:"social"},{from:12,to:15,node:"pia_e",kind:"home"},{from:15,to:19,node:"pia_w",kind:"social"},{from:19,to:24,node:"pia_e",kind:"home"}],agenda:[{node:"pia_c",dwell:14},{node:"pia_e",dwell:10},{node:"pia_w",dwell:8}]},{id:"paolo",name:"Paolo (barista)",color:3120250,x:-20,z:14,home:"b4_door",work:"bar_in",relations:{sara:.85,anna:.7,elena:.4,monica:.6,nadia:.5},relType:{sara:"family",anna:"coworker",elena:"neighbor",monica:"coworker",nadia:"friend"},schedule:[{from:7,to:12,node:"bar_in",kind:"work"},{from:12,to:14,node:"b4_door",kind:"home"},{from:14,to:20,node:"bar_in",kind:"work"},{from:20,to:22,node:"pia_c",kind:"social"}],agenda:[{node:"bar_in",dwell:12},{node:"pia_w",dwell:4},{node:"b4_door",dwell:6}]},{id:"nadia",name:"Nadia (studentessa)",color:13658778,x:-16,z:-12,home:"b4_door",relations:{ida:.8,sara:.5,elena:.5,paolo:.5,rita:.3},relType:{ida:"family",sara:"friend",elena:"friend",paolo:"friend",rita:"acquaintance"},schedule:[{from:8,to:13,node:"court",kind:"work"},{from:13,to:17,node:"bar_in",kind:"leisure"},{from:17,to:21,node:"pia_c",kind:"social"},{from:21,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"court",dwell:10},{node:"bar_in",dwell:6},{node:"pia_c",dwell:5},{node:"b4_door",dwell:6}]},{id:"otello",name:"Otello (operaio)",color:10243882,x:8,z:-12,home:"b5_door",work:"svc_in",relations:{bruno:.7,franco:.6,ivan:.75},relType:{bruno:"coworker",franco:"coworker",ivan:"enemy"},schedule:[{from:6,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"road_c",kind:"leisure"},{from:13,to:18,node:"svc_out",kind:"work"},{from:18,to:21,node:"bar_out",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_in",dwell:10},{node:"svc_out",dwell:5},{node:"bar_out",dwell:4}]},{id:"ivan",name:"Ivan (magazziniere)",color:4890569,x:12,z:-16,home:"b5_door",work:"svc_out",relations:{otello:.75,bruno:.5,franco:.5,sandro:.35},relType:{otello:"enemy",bruno:"coworker",franco:"coworker",sandro:"acquaintance"},schedule:[{from:7,to:13,node:"svc_out",kind:"work"},{from:13,to:14,node:"pia_s",kind:"leisure"},{from:14,to:19,node:"svc_in",kind:"work"},{from:19,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_out",dwell:9},{node:"svc_in",dwell:6},{node:"bar_in",dwell:5}]},{id:"chiara",name:"Chiara (fioraia)",color:13189006,x:42,z:18,home:"court",work:"pia_e",relations:{marta:.5,anna:.5,osvaldo:.65,nino:.4,tea:.3},relType:{marta:"neighbor",anna:"friend",osvaldo:"family",nino:"acquaintance",tea:"acquaintance"},schedule:[{from:6,to:12,node:"pia_e",kind:"work"},{from:12,to:14,node:"court",kind:"home"},{from:14,to:19,node:"pia_c",kind:"work"},{from:19,to:22,node:"court",kind:"social"}],agenda:[{node:"pia_e",dwell:10},{node:"pia_c",dwell:7},{node:"court",dwell:6}]},{id:"nino",name:"Nino (ambulante)",color:13214247,x:35,z:18,home:"north_w",work:"pia_c",relations:{chiara:.4,marta:.3,gino:.4,peppe:.4},relType:{chiara:"acquaintance",marta:"acquaintance",gino:"friend",peppe:"friend"},schedule:[{from:6,to:7,node:"north_w",kind:"home"},{from:7,to:15,node:"pia_c",kind:"work"},{from:15,to:18,node:"bar_out",kind:"leisure"},{from:18,to:21,node:"north_w",kind:"social"}],agenda:[{node:"north_w",dwell:4},{node:"pia_c",dwell:12},{node:"bar_out",dwell:5}]},{id:"tea",name:"Tea (pensionata)",color:9079402,x:-20,z:31,home:"court",relations:{marta:.6,ida:.55,osvaldo:.5,lina:.7,chiara:.3},relType:{marta:"friend",ida:"friend",osvaldo:"neighbor",lina:"family",chiara:"acquaintance"},schedule:[{from:8,to:11,node:"court",kind:"home"},{from:11,to:13,node:"pia_c",kind:"social"},{from:13,to:17,node:"court",kind:"home"},{from:17,to:20,node:"pia_w",kind:"social"}],agenda:[{node:"court",dwell:12},{node:"pia_c",dwell:8},{node:"pia_w",dwell:6}]},{id:"furio",name:"Furio (corriere)",color:4156105,x:30,z:31,home:"north_e",work:"svc_out",relations:{dario:.5,tiberio:.6,ivan:.3},relType:{dario:"friend",tiberio:"coworker",ivan:"acquaintance"},schedule:[{from:6,to:11,node:"svc_out",kind:"work"},{from:11,to:13,node:"road_c",kind:"work"},{from:13,to:18,node:"svc_in",kind:"work"},{from:18,to:22,node:"north_e",kind:"home"}],agenda:[{node:"north_e",dwell:4},{node:"svc_out",dwell:8},{node:"road_c",dwell:4},{node:"svc_in",dwell:6}]},{id:"bianca",name:"Bianca (cuoca)",color:8011704,x:-18,z:22,home:"bar_in",work:"bar_in",relations:{anna:.6,monica:.75,paolo:.5,luca:.3},relType:{anna:"coworker",monica:"family",paolo:"coworker",luca:"acquaintance"},schedule:[{from:5,to:11,node:"bar_in",kind:"work"},{from:11,to:15,node:"bar_out",kind:"leisure"},{from:15,to:22,node:"bar_in",kind:"work"}],agenda:[{node:"bar_in",dwell:14},{node:"bar_out",dwell:5},{node:"pia_s",dwell:3}]},{id:"gino",name:"Gino (tabaccaio)",color:9095487,x:18,z:8,home:"vic_n",work:"pia_w",relations:{rita:.5,carla:.5,nino:.4,peppe:.4},relType:{rita:"neighbor",carla:"neighbor",nino:"friend",peppe:"acquaintance"},schedule:[{from:7,to:13,node:"pia_w",kind:"work"},{from:13,to:14,node:"vic_n",kind:"home"},{from:14,to:20,node:"pia_w",kind:"work"},{from:20,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"pia_w",dwell:12},{node:"vic_n",dwell:5},{node:"bar_in",dwell:4}]},{id:"rita",name:"Rita (parrucchiera)",color:13199914,x:17,z:0,home:"vic_s",work:"vic_s",relations:{gino:.5,nadia:.3,monica:.4,carla:.3},relType:{gino:"neighbor",nadia:"acquaintance",monica:"friend",carla:"acquaintance"},schedule:[{from:8,to:13,node:"vic_s",kind:"work"},{from:13,to:15,node:"pia_c",kind:"leisure"},{from:15,to:19,node:"vic_s",kind:"work"},{from:19,to:22,node:"bar_out",kind:"social"}],agenda:[{node:"vic_s",dwell:12},{node:"pia_c",dwell:5},{node:"bar_out",dwell:4}]},{id:"osvaldo",name:"Osvaldo (anziano)",color:6974090,x:-22,z:29,home:"court",relations:{chiara:.65,tea:.5,marta:.5,peppe:.5},relType:{chiara:"family",tea:"neighbor",marta:"friend",peppe:"friend"},schedule:[{from:8,to:12,node:"court",kind:"home"},{from:12,to:15,node:"pia_c",kind:"social"},{from:15,to:19,node:"north_c",kind:"social"},{from:19,to:24,node:"court",kind:"home"}],agenda:[{node:"court",dwell:10},{node:"pia_c",dwell:8},{node:"north_c",dwell:5}]},{id:"lina",name:"Lina (infermiera)",color:6279362,x:14,z:16,home:"apt",work:"pia_s",relations:{tea:.7,marco:.3,tiberio:.4,sara:.3},relType:{tea:"family",marco:"neighbor",tiberio:"neighbor",sara:"acquaintance"},schedule:[{from:8,to:16,node:"pia_s",kind:"work"},{from:16,to:18,node:"apt",kind:"home"},{from:18,to:21,node:"court",kind:"social"},{from:21,to:24,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:6},{node:"pia_s",dwell:12},{node:"court",dwell:5}]},{id:"tiberio",name:"Tiberio (commerciante)",color:13934638,x:10,z:16,home:"apt",work:"pia_e",relations:{marco:.5,furio:.6,lina:.4,luca:.3},relType:{marco:"coworker",furio:"coworker",lina:"neighbor",luca:"acquaintance"},schedule:[{from:8,to:13,node:"pia_e",kind:"work"},{from:13,to:15,node:"bar_in",kind:"leisure"},{from:15,to:20,node:"pia_e",kind:"work"},{from:20,to:23,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:6},{node:"pia_e",dwell:12},{node:"bar_in",dwell:5}]},{id:"monica",name:"Monica (cameriera)",color:14711706,x:6,z:-16,home:"b5_door",work:"bar_in",relations:{bianca:.75,paolo:.6,luca:.4,rita:.4,anna:.5},relType:{bianca:"family",paolo:"coworker",luca:"acquaintance",rita:"friend",anna:"coworker"},schedule:[{from:9,to:15,node:"bar_in",kind:"work"},{from:15,to:17,node:"b5_door",kind:"home"},{from:17,to:23,node:"bar_in",kind:"work"}],agenda:[{node:"b5_door",dwell:5},{node:"bar_in",dwell:14},{node:"pia_c",dwell:4}]},{id:"peppe",name:"Peppe (musicista)",color:8376394,x:16,z:-4,home:"vic_s",relations:{osvaldo:.5,nino:.4,gino:.4,elena:.3},relType:{osvaldo:"friend",nino:"friend",gino:"acquaintance",elena:"acquaintance"},schedule:[{from:10,to:14,node:"vic_s",kind:"home"},{from:14,to:18,node:"pia_c",kind:"leisure"},{from:18,to:23,node:"bar_out",kind:"social"}],agenda:[{node:"vic_s",dwell:6},{node:"pia_c",dwell:8},{node:"bar_out",dwell:7}]},{id:"ida",name:"Ida (vecchia del quartiere)",color:10111610,x:-14,z:-16,home:"b4_door",relations:{nadia:.8,tea:.5,elena:.4,sara:.4},relType:{nadia:"family",tea:"friend",elena:"neighbor",sara:"neighbor"},schedule:[{from:7,to:10,node:"pia_c",kind:"social"},{from:10,to:14,node:"b4_door",kind:"home"},{from:14,to:18,node:"pia_w",kind:"social"},{from:18,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"pia_c",dwell:8},{node:"b4_door",dwell:10},{node:"pia_w",dwell:6}]},{id:"sandro",name:"Sandro (guardiano notturno)",color:4868730,x:-20,z:33,home:"north_c",work:"road_c",relations:{ivan:.35,rossi:.3,verdi:.3,furio:.3},relType:{ivan:"acquaintance",rossi:"acquaintance",verdi:"acquaintance",furio:"acquaintance"},schedule:[{from:6,to:18,node:"north_c",kind:"home"},{from:18,to:24,node:"road_c",kind:"work"}],agenda:[{node:"north_c",dwell:8},{node:"road_c",dwell:6},{node:"vic_n",dwell:5},{node:"pia_s",dwell:4}]}],di=15,k0=Math.PI/3,O0=8,B0=.5,H0=.4;function ta(n,e,t,i){return e.actorId==="player"&&t<=O0&&i>=B0?"uomo in verde":"sconosciuto"}const G0=.3,V0=.1;function Ts(n,e,t,i,r){const s=e-n.x,o=t-n.z,a=s*s+o*o;if(a>di*di)return{seen:!1};const c=Math.sqrt(a);if(c>1.2){let g=Math.atan2(s,o)-n.yaw;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;if(Math.abs(g)>k0)return{seen:!1}}if(Gn(n.x,n.z,e,t,i))return{seen:!1};const l=Math.max(.35,1-c/(di*1.4)),d=.3+c/di*1.7,u=(r.next()+r.next()-1)*d,f=(r.next()+r.next()-1)*d;let m=null;return c>10&&r.next()<.35&&(m=r.pick(["ora sbagliata","luogo impreciso","dettaglio confuso"])),{seen:!0,confidence:l,error:m,px:e+u,pz:t+f}}function W0(n,e,t,i,r,s,o=.05){const a=Math.hypot(n.x-e.x,n.z-e.z),c=Ts(n,e.x,e.z,t,i);if(n.memory.includes(e.id)){if(c.seen&&e.actorId){n.gaze||(n.gaze={}),n.gaze[e.id]=(n.gaze[e.id]??0)+o;const f=n.beliefs.get(e.id);if(f&&f.actor==="sconosciuto"&&n.gaze[e.id]>=H0){const m=ta(n,e,a,c.confidence);m!=="sconosciuto"&&(f.actor=m,delete n.gaze[e.id])}}return"unseen"}if(!c.seen)return n.gaze&&(n.gaze[e.id]=(n.gaze[e.id]??0)*.5),"unseen";n.gaze||(n.gaze={});const l=n.state==="alerted"||n.state==="curious"?V0:G0,d=(n.gaze[e.id]??0)+o;return n.gaze[e.id]=d,d<l||ft(n.beliefs,e.id,ct({kind:e.type,severity:e.severity,px:c.px,pz:c.pz,place:e.place,actor:ta(n,e,a,c.confidence),subject:e.victimId??null,channel:"seen",confidence:Math.min(1,c.confidence+.05),t:r,error:c.error,w:+(.5+a*.3).toFixed(2),moved:!!e.moved,provenance:[]}),n.id)==="ignored"||c.confidence<$i?"unseen":(delete n.gaze[e.id],Xt(n,e.id),s.addWitness(e,n.id),"learned")}function Ra(n,e,t,i,r,s){const o=e-n.x,a=t-n.z,c=Math.hypot(o,a);let l=i;if(Gn(n.x,n.z,e,t,r)&&(l*=.5),c>l)return{heard:!1};const d=Math.max(.3,1-c/(l*1.3)),u=1+c*.15;return{heard:!0,confidence:d,px:e+(s.next()+s.next()-1)*u,pz:t+(s.next()+s.next()-1)*u,w:+(1+c*.5).toFixed(2)}}function na(n,e,t){const i=e.crouch?7:15,r=e.x-n.x,s=e.z-n.z,o=Math.hypot(r,s);if(o>i&&!(e.running&&o<10))return{seen:!1};if(o>1.2){let a=Math.atan2(r,s)-n.yaw;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;if(Math.abs(a)>Math.PI/3&&!e.running)return{seen:!1}}return Gn(n.x,n.z,e.x,e.z,t)?{seen:!1}:{seen:!0,confidence:Math.max(.4,1-o/20)}}const ia=new Set(["kill","found_corpse","corpse","sabotage"]);function X0(n,e){const t=[];for(const[i,r]of n.beliefs){if(!ia.has(r.kind))continue;const s=nn(r,e);s>=.2&&t.push({id:i,b:r,eff:s})}return t.sort((i,r)=>r.eff-i.eff),t}function ra(n,e){const{t,rng:i}=e,r=n.police;for(const l of e.nearby(n,6))if(!(l.role==="police"||l.state==="dead"))for(const[d,u]of l.beliefs){if(!ia.has(u.kind))continue;const f=n.beliefs.get(d);if(f&&ia.has(f.kind))continue;const m=nn(u,t);if(m<.25)continue;const v=u.provenance[u.provenance.length-1]===l.id?[...u.provenance]:[...u.provenance,l.id];if(ft(n.beliefs,d,ct({kind:u.kind,severity:u.severity,px:u.px,pz:u.pz,place:u.place,actor:u.actor,subject:u.subject??null,channel:"hearsay",confidence:+(m*.7).toFixed(3),t,error:u.error,moved:!!u.moved,provenance:v}),n.id)!=="ignored"){Xt(n,d),e.stats.gossipOps++,e.onInterview?.(n,l,d);break}}const s=X0(n,t),o=s[0],a=o?o.eff:0;if(!o&&n.state!=="curious"){for(const[l,d]of n.beliefs)if(n.alertedBy!==l&&d.kind==="noise"&&nn(d,t)>=.4){n.alertedBy=l,n.gotoX=d.px,n.gotoZ=d.pz,n.state="curious",r.state!=="ALERTED"&&(r.state="ALERTED",r.since=t);break}}const c=r.state;if(!o)r.state!=="UNAWARE"&&(r.state="UNAWARE",r.since=t,r.confirmed=!1,r.catchT=0);else if(a>=.45||r.confirmed){r.state!=="INVESTIGATING"&&(r.state="INVESTIGATING",r.since=t,r.searchX=o.b.px,r.searchZ=o.b.pz);const l=s.some(u=>u.b.actor==="uomo in verde"),d=na(n,e.playerStealth,e.colliders);l&&d.seen&&!r.confirmed&&r.state!=="IDENTIFIED"&&(r.state="IDENTIFIED",r.since=t,r.lastSeenP=t,r.catchT=0)}else a>=.25?r.state!=="ALERTED"&&(r.state="ALERTED",r.since=t,r.searchX=o.b.px,r.searchZ=o.b.pz):a>=.2&&r.state==="UNAWARE"&&(r.state="UNAWARE",r.since=t);if(c!==r.state&&e.onPoliceState?.(n,c,r.state),r.state==="INVESTIGATING"){const l=Math.hypot(n.x-r.searchX,n.z-r.searchZ);let d=null;l<3?(d=e.corpsesNear(n.x,n.z,9),d?(r.confirmed=!0,r.state="SEARCHING",r.since=t,r.searchX=d.x,r.searchZ=d.z,n.state="dwell",n.dwellLeft=2):t-r.since>25?(r.state="ALERTED",r.since=t,r.confirmed=!1,r.catchT=0,n.gotoX=null):n.gotoX||(n.gotoX=r.searchX,n.gotoZ=r.searchZ,n.state="curious")):Number.isFinite(r.searchX)&&n.gotoX==null&&(n.gotoX=r.searchX,n.gotoZ=r.searchZ,n.state="curious"),l<3&&!d&&t-r.since<=25&&(s.some(f=>f.b.actor==="uomo in verde")&&r.state!=="IDENTIFIED"?(r.state="IDENTIFIED",r.since=t,r.lastSeenP=t,r.catchT=0):r.state!=="SEARCHING"&&(r.state="SEARCHING",r.since=t))}if(r.state==="SEARCHING"){const l=s.some(d=>d.b.actor==="uomo in verde");if(r.pickAt=r.pickAt??0,l)if(na(n,e.playerStealth,e.colliders).seen){const u=Math.hypot(n.x-e.player.x,n.z-e.player.z);n.gotoX=e.player.x,n.gotoZ=e.player.z,n.state="curious",r.lastSeenP=t,u<2.5&&(r.catchT=(r.catchT??0)+e.dtThink,r.catchT>4&&e.onCaught?.(n))}else t-(r.lastSeenP??-99)>20&&t-r.since>150&&(r.state="ALERTED",r.since=t,r.catchT=0,n.gotoX=null);else t-r.since>120&&(r.state="ALERTED",r.since=t,n.gotoX=null)}if(r.state==="SEARCHING"||r.state==="INVESTIGATING"){const l=e.corpsesNear(n.x,n.z,6);if(l){let d=null;for(const u of e.nearby(n,6))if(!(u.state==="dead"||u.state==="arrested"||u.role==="police")&&!(Math.hypot(u.x-l.x,u.z-l.z)>=2.5)&&!Gn(n.x,n.z,u.x,u.z,e.colliders)){d=u;break}d?r.suspectId!==d.id?(r.suspectId=d.id,r.suspectSince=t):t-(r.suspectSince??t)>=4&&(r.suspectId=null,r.suspectSince=0,r.state="UNAWARE",r.since=t,r.confirmed=!1,r.catchT=0,n.gotoX=null,n.state="dwell",n.dwellLeft=3,d.state="arrested",d.speed=0,d.gotoX=null,d.gotoZ=null,d.fleeNode=null,e.onArrest?.(n,d)):r.suspectSince&&t-r.suspectSince>6&&(r.suspectId=null,r.suspectSince=0)}}}const Jc=.4,$0=.3,q0=[["road_","strada"],["vic_","vicolo"],["north_","vicolo"],["pia_","piazza"],["sq_","piazzale"],["b4","casa"],["b5","casa"],["apt","palazzo"],["bar_","bar"],["svc_","deposito"],["court","corte"]];function Y0(n){for(const[e,t]of q0)if(n.startsWith(e))return t;return n}const j0=600;function cr(n){return(8+n*24/j0)%24}function Z0(n,e){for(const t of n.schedule)if(t.from<=t.to){if(e>=t.from&&e<t.to)return t}else if(e>=t.from||e<t.to)return t;return null}function K0(n,e,t){if(n.routineShift)if(e>=n.routineShift.until)n.routineShift=null;else{const c=n.routineShift.node;n.agendaBlock!==c&&(n.agendaBlock=c,n.agenda=[{node:c,dwell:20}],n.agendaIdx=0,n.path=[],n.pathIdx=0,n.state="dwell",n.dwellLeft=.3);return}if(!n.schedule||!n.schedule.length)return;const i=cr(e),r=Z0(n,i),s=r?r.node:n.home??n.schedule[0].node;if(n.agendaBlock===s)return;n.agendaBlock=s;const o=r&&r.kind==="social",a=Math.round((o?25:15)+(t?t.next():0)*10);n.agenda=[{node:s,dwell:a}],n.agendaIdx=0,(n.state==="walk"||n.path.length)&&(n.path=[],n.pathIdx=0),n.state="dwell",n.dwellLeft=.3}function Qt(n,e){const{t,navAdj:i,rng:r}=e;if(n.state!=="arrested"){if(n.role==="police")ra(n,e);else{for(const[s,o]of n.beliefs){if(n.alertedBy===s)continue;const a=nn(o,t);if(o.severity>=Jc&&a>=$0){n.alertedBy=s;const c=dr(n,o.subject);if(c&&(n.mournT=t+c),c>=300&&a>=.4){n.state="curious",n.gotoX=o.px,n.gotoZ=o.pz,n.dwellLeft=4;return}n.state=o.channel==="seen"?"alerted":"dwell",n.dwellLeft=4+r.next()*4;let l=null,d=-1;for(const[u,f]of Object.entries(Fe.nodes)){const m=(f.x-o.px)**2+(f.z-o.pz)**2;m>d&&(d=m,l=u)}n.fleeNode=l;return}}if(n.state!=="alerted"&&n.state!=="curious")for(const[s,o]of n.beliefs){if(n.alertedBy===s)continue;if(nn(o,t)>=.25&&(o.kind==="noise"||o.severity<Jc)&&!(o.channel==="hearsay"&&o.kind==="suspicion")){const c=n.x-o.px,l=n.z-o.pz;if(c*c+l*l<2.25)continue;n.alertedBy=s,n.gotoX=o.px,n.gotoZ=o.pz,n.state="curious";break}}}if(t-n.gossipAt>3&&n.beliefs.size>0&&n.role!=="police"){const s=e.nearby(n,3.5).filter(o=>o.id===n.id||zi(n,o.id)<=0?!1:[...n.beliefs.entries()].some(([a,c])=>{const l=o.beliefs.get(a);return!l||l.kind!==c.kind}));if(s.length){s.sort((a,c)=>zi(n,c.id)-zi(n,a.id));const o=zi(n,s[0].id)>.15?s[0]:r.next()<.4?s[r.next()*s.length|0]:null;if(o){const a=[...n.beliefs.entries()].find(([c,l])=>{const d=o.beliefs.get(c);return!d||d.kind!==l.kind});if(a){const[c,l]=a,d=nn(l,t);if(d>=$i){const u=n.trust[o.id]??.5,m=l.provenance[l.provenance.length-1]===n.id?[...l.provenance]:[...l.provenance,n.id],g=o.beliefs.has(c);let v=l.place,p=l.px,h=l.pz,w=l.actor,_=l.w??null;if(r.next()<.3&&(v=Y0(l.place),p+=(r.next()+r.next()-1)*4,h+=(r.next()+r.next()-1)*4,_!=null&&(_=+(_+4).toFixed(2))),w!=="sconosciuto"&&r.next()<.12&&(w="sconosciuto"),ft(o.beliefs,c,ct({kind:l.kind,severity:l.severity,px:p,pz:h,place:v,actor:w,subject:l.subject??null,channel:"hearsay",confidence:+(d*(.4+.4*u)*ss(n,o.id)).toFixed(3),t,error:l.error??(r.next()<.25?"dettaglio alterato nel passaparola":null),w:_,moved:!!l.moved,provenance:m}),o.id)!=="ignored"){if(Xt(o,c),g){const T=.05*(ql[An(o,n.id)]??.6);o.trust[n.id]=Math.min(1,(o.trust[n.id]??.5)+T)}const C=An(o,n.id);if(C!=="family"&&C!=="enemy"){const T=(r.next()-.5)*.06,b=n.relations[o.id]??.3;n.relations[o.id]=Math.max(0,Math.min(1,+(b+T).toFixed(4)))}n.gossipAt=t,o.gossipAt=t,n.talkT=t,o.talkT=t,e.stats.gossipOps++,e.onGossip?.(n,o,c)}}}}}}if(n.state!=="alerted"&&n.state!=="curious"&&(n.state==="walk"||n.state==="dwell"||n.state==="idle")){K0(n,t,r);const s=n.agenda[n.agendaIdx%n.agenda.length];if(n.state!=="walk"){const o=n.mournT&&t<n.mournT?.6:1;if(n.dwellLeft-=e.dtThink*o,n.dwellLeft>.4){for(const a of e.nearby(n,4))if(An(n,a.id)==="enemy"){n.dwellLeft=.4;break}}if(n.dwellLeft<=0){const a=pi(n.x,n.z);n.path=A0(i,a,s.node),n.pathIdx=0;const c=Fe.nodes[n.path[0]];c&&Math.hypot(c.x-n.x,c.z-n.z)<Vn(n.path[0])&&(n.pathIdx=1),n.state="walk",e.stats.pathComputations++}}}}}function J0(n,e,t){if(n.pathIdx>=n.path.length){const c=n.agenda[n.agendaIdx%n.agenda.length];n.agendaIdx++,n.state="dwell",n.dwellLeft=c.dwell;return}const i=Fe.nodes[n.path[n.pathIdx]],r=i.x-n.x,s=i.z-n.z,o=Math.hypot(r,s);if(o<Vn(n.path[n.pathIdx])){n.pathIdx++;return}const a=Math.min(t,o/e);n.x+=r/o*a*e,n.z+=s/o*a*e,n.yaw=Math.atan2(r,s),n.speed=a}function Q0(n,e,t,i,r){const s=e-n.x,o=t-n.z,a=Math.hypot(s,o);if(a<1)return n.speed=0,!0;const c=Math.min(r,a/i);return n.x+=s/a*c*i,n.z+=o/a*c*i,n.yaw=Math.atan2(s,o),n.speed=c,!1}const e_=.3,t_=.5,n_=8,i_=10,r_=.35;function sa(n,e,t){for(const i of n.npcs){if(i.state==="dead"||i.level==="L3")continue;const r=na(i,e,n.colliders);if(!r.seen){i.awareness&&(i.awareness=Math.max(0,i.awareness-e_*t));continue}const s=Math.hypot(e.x-i.x,e.z-i.z);let o=.5*(1-Math.min(1,s/22));e.crouch&&(o*=.45),e.running&&(o*=1.9),i.awareness=Math.min(1,(i.awareness??0)+Math.max(.06,o)*t),i.awareness>=t_&&o_(n,i,e,s,r)}}const s_=120;function o_(n,e,t,i,r){const s=pi(t.x,t.z);for(const f of e.beliefs.values())if(f.kind==="suspicion"&&f.place===s&&n.t-f.t<s_)return;const o=`spot-${s}-${Math.floor(n.t/i_)}`,a=.4+i/22*1.6,c=(n.rng.next()+n.rng.next()-1)*a,l=(n.rng.next()+n.rng.next()-1)*a,d=i<=n_;ft(e.beliefs,o,ct({kind:"suspicion",severity:r_,px:t.x+c,pz:t.z+l,place:s,actor:d?"uomo in verde":"sconosciuto",channel:"seen",confidence:r.confidence*(d?1:.85),t:n.t,error:d?null:"non l'ho riconosciuto",provenance:[]}),e.id)!=="ignored"&&Xt(e,o)}const a_=6,Qc=.55;function Ca(n,e,t,i,r){const s=pi(e,t);n.journal.append("noise",{t:n.t,severity:r,x:e,z:t,actorId:null,place:s});const o=`noise-${n.t.toFixed(1)}-${Math.round(e)}-${Math.round(t)}`;let a=0;for(const c of n.npcs){if(c.state==="dead")continue;const l=Ra(c,e,t,i,n.colliders,n.rng);if(!l.heard)continue;ft(c.beliefs,o,ct({kind:"noise",severity:r,px:l.px,pz:l.pz,place:s,actor:"sconosciuto",channel:"heard",confidence:l.confidence,t:n.t,w:l.w,provenance:[]}),c.id)!=="ignored"&&(Xt(c,o),a++)}return a}function c_(n,e,t){if(!e.running||e.crouch)return 0;const i=Math.floor(n.t/Qc),r=Math.floor((n.t-t)/Qc);return i===r?0:Ca(n,e.x,e.z,a_,.25)}const l_=1.2;function ms(n,e){return!e||e.state!=="dead"||e.hidden?!1:(e.hidden=!0,e.death&&(e.death.hidden=!0),n.stats.concealed=(n.stats.concealed??0)+1,!0)}function oa(n,e,t,i){let r=null,s=i*i;for(const o of n.npcs){if(o.state!=="dead"||o.hidden)continue;const a=o.x-e,c=o.z-t,l=a*a+c*c;l<s&&(s=l,r=o)}return r}function pr(n,e,t,i){return n.hidden?e*e+t*t<=Math.min(i,l_)**2:!0}const el=30,tl=60,d_=12,u_=5,f_=4,h_=5,p_=2,m_=24,ur=8,nl=2,__=2;function Zl(n,e,t,i,r,s={}){return{t:0,npcs:n,journal:e,colliders:t,navAdj:i,rng:r,hooks:s,counts:{L1:0,L2:0,L3:0},simMs:0,aiMs:0,unseen:[],grid:new Map,stats:{perceptionChecks:0,gossipOps:0,pathComputations:0,thinkRuns:0,pruned:0,thinkByLevel:{L1:0,L2:0,L3:0},budgetSkips:0,budgetPressure:0,corpseDiscoveries:0},pruneAt:0,corpseAt:0,corpseReported:new Set}}function g_(n,e){return`${Math.floor(n/ur)},${Math.floor(e/ur)}`}function il(n){n.grid.clear(),n.npcs.forEach((e,t)=>{const i=g_(e.x,e.z);let r=n.grid.get(i);r||(r=[],n.grid.set(i,r)),r.push(t)})}function rl(n,e,t){const i=[],r=Math.floor(e.x/ur),s=Math.floor(e.z/ur),o=Math.ceil(t/ur),a=t*t;for(let c=r-o;c<=r+o;c++)for(let l=s-o;l<=s+o;l++){const d=n.grid.get(`${c},${l}`);if(d)for(const u of d){const f=n.npcs[u];if(f===e||f.state==="dead")continue;const m=f.x-e.x,g=f.z-e.z;m*m+g*g<=a&&i.push(f)}}return i}function x_(n,e,t,i){let r,s,o,a=null;if(i){r=.95;const l=.3;s=e.x+(n.rng.next()+n.rng.next()-1)*l,o=e.z+(n.rng.next()+n.rng.next()-1)*l}else{const l=Ts(t,e.x,e.z,n.colliders,n.rng);if(!l.seen)return!1;r=l.confidence,s=l.px,o=l.pz,a=l.error}return ft(t.beliefs,e.id,ct({kind:e.type,severity:e.severity,px:s,pz:o,place:e.place,actor:e.actorId==="player"?"uomo in verde":e.actorId??"sconosciuto",subject:e.victimId??null,channel:"seen",confidence:r,t:n.t,error:a,moved:!!e.moved,provenance:[]}),t.id)==="ignored"?!1:(Xt(t,e.id),n.journal.addWitness(e,t.id),!0)}function kt(n,e,t){const i=performance.now();n.t+=t;let r=0,s=0,o=0;for(const _ of n.unseen)for(const x of n.npcs){if(x.state==="dead")continue;const C=x.x-_.x,T=x.z-_.z;C*C+T*T>15*15||(n.stats.perceptionChecks++,W0(x,_,n.colliders,n.rng,n.t,n.journal,t)==="learned"&&n.hooks.onWitness?.(x,_))}for(let _=n.unseen.length-1;_>=0;_--)if(n.t-n.unseen[_].t>__){const x=n.unseen[_];for(const C of n.npcs)C.gaze&&delete C.gaze[x.id];n.unseen.splice(_,1)}sa(n,e,t),c_(n,e,t);const a=n.npcs.map(_=>({n:_,d:Math.hypot(_.x-e.x,_.z-e.z)})).sort((_,x)=>_.d-x.d),c=[];for(const _ of a){const x=_.n.level==="L1";(x?_.d<=el+u_:_.d<=el)&&c.push({o:_,eff:_.d-(x?f_:0)})}c.sort((_,x)=>_.eff-x.eff);const l=new Set(c.slice(0,d_).map(_=>_.o.n));for(const{n:_,d:x}of a){const C=_.level,T=C==="L1"||C==="L2"?tl+h_:tl;_.level=l.has(_)?"L1":x<=T?"L2":"L3",_.level==="L1"?r++:_.level==="L2"?s++:o++}il(n);for(const{n:_}of a)_.thinkAt-=t;const d=performance.now(),u={x:e.x,z:e.z,crouch:!!e.crouch,running:!!e.running},f=(_,x,C)=>{let T=null,b=C*C;for(const R of n.npcs){if(R.state!=="dead")continue;const S=R.x-_,M=R.z-x,P=S*S+M*M;P>=b||pr(R,S,M,C)&&(Gn(_,x,R.x,R.z,n.colliders)||(b=P,T=R))}return T?{x:T.x,z:T.z,id:T.id}:null},m={t:n.t,npcs:n.npcs,navAdj:n.navAdj,rng:n.rng,dtThink:.25,stats:n.stats,nearby:(_,x)=>rl(n,_,x),player:e,playerStealth:u,colliders:n.colliders,corpsesNear:f,onGossip:n.hooks.onGossip,onInterview:n.hooks.onInterview,onPoliceState:n.hooks.onPoliceState,onCaught:n.hooks.onCaught,onArrest:n.hooks.onArrest},g=Math.round(n.t/t);let v=0,p=!1;for(let _=0;_<a.length;_++){const{n:x}=a[(_+g)%a.length],C=x.level==="L1"?.25:.5;if(x.thinkAt<=0&&x.level!=="L3"&&x.state!=="dead"){if(v>=m_){n.stats.budgetSkips++;continue}v++,x.thinkAt=C,n.stats.thinkRuns++,n.stats.thinkByLevel[x.level]++,Qt(x,m),!p&&!(v&3)&&performance.now()-d>p_&&(p=!0,n.stats.budgetPressure++)}}n.aiMs=performance.now()-d;for(const{n:_}of a){if(_.state==="dead"){_.speed=0;continue}if(_.level==="L3"&&_.state!=="arrested"){if(_.symbolAt=(_.symbolAt??0)+t,_.symbolAt>6){_.symbolAt=0;const C=_.agenda[_.agendaIdx%_.agenda.length],T=Fe.nodes[C.node],b=Math.hypot(_.x-e.x,_.z-e.z)>45;T&&b&&Gn(e.x,e.z,T.x,T.z,n.colliders)&&(_.x=T.x,_.z=T.z,_.agendaIdx++)}continue}if(_.state!=="walk"&&_.state!=="alerted"&&_.state!=="curious"){_.speed=0;continue}if(_.state==="curious"&&_.gotoX!=null){const C=ar(_.gotoX,_.gotoZ,.35,n.colliders);_.gotoX=C.x,_.gotoZ=C.z,Q0(_,_.gotoX,_.gotoZ,t,_.role==="police"?2.4:1.7)&&(_.state="dwell",_.dwellLeft=3+n.rng.next()*4,_.gotoX=null,_.gotoZ=null)}else if(_.state==="alerted"&&_.fleeNode){const C=Fe.nodes[_.fleeNode],T=C.x-_.x,b=C.z-_.z,R=Math.hypot(T,b);R<Math.max(1.5,Vn(_.fleeNode))?(_.state="dwell",_.dwellLeft=5,_.fleeNode=null):(_.x+=T/R*2.6*t,_.z+=b/R*2.6*t,_.yaw=Math.atan2(T,b),_.speed=2.6)}else J0(_,t,1.6);const x=ar(_.x,_.z,.35,n.colliders);_.x=x.x,_.z=x.z}il(n);const h=.7,w=h*h;for(const{n:_}of a)if(!(_.state==="dead"||_.level==="L3"))for(const x of rl(n,_,h)){if(x.level==="L3"||x.id<_.id)continue;let C=x.x-_.x,T=x.z-_.z,b=C*C+T*T;if(b>=w)continue;b<1e-9&&(C=1,T=0,b=1);const R=Math.sqrt(b),S=(h-R)/2;_.x-=C/R*S,_.z-=T/R*S,x.x+=C/R*S,x.z+=T/R*S;const M=ar(_.x,_.z,.35,n.colliders);_.x=M.x,_.z=M.z;const P=ar(x.x,x.z,.35,n.colliders);x.x=P.x,x.z=P.z}if(n.t-n.corpseAt>1){n.corpseAt=n.t;for(const _ of n.npcs){if(_.state!=="dead"||n.corpseReported.has(_.id))continue;let x=null,C=!1;for(const b of n.npcs){if(b.state==="dead")continue;const R=b.x-_.x,S=b.z-_.z,M=R*R+S*S;if(pr(_,R,S,di)&&!(M>di*di)){if(M<=nl*nl){if(!Gn(b.x,b.z,_.x,_.z,n.colliders)){x=b,C=!0;break}continue}if(Ts(b,_.x,_.z,n.colliders,n.rng).seen){x=b;break}}}if(!x)continue;n.corpseReported.add(_.id);const T=n.journal.append("found_corpse",{t:n.t,severity:.55,x:_.x,z:_.z,actorId:null,victimId:_.id,place:pi(_.x,_.z),moved:!!_.hidden});n.unseen.push(T),x_(n,T,x,C)&&(n.stats.corpseDiscoveries++,n.hooks.onWitness?.(x,T))}}if(n.t-n.pruneAt>10){n.pruneAt=n.t;for(const _ of n.npcs)n.stats.pruned+=Aa(_.beliefs,n.t),os(_,n.t)}n.counts={L1:r,L2:s,L3:o},n.simMs=performance.now()-i}function ot(n,e,t){const i=n.journal.append(e,{t:n.t,...t});return n.unseen.push(i),i}function v_(){const n=new Set,e={x:0,z:0,active:!1};let t=!1;const i={dx:0,dy:0},r=new Set,s=[],o=(b,R,S,M)=>{b.addEventListener(R,S,M),s.push([b,R,S,M])};o(window,"keydown",b=>{["ArrowUp","ArrowDown","Space"].includes(b.code)&&b.preventDefault(),b.code==="F3"&&b.preventDefault(),n.add(b.code),r.add(b.code)}),o(window,"keyup",b=>n.delete(b.code));let a=!1,c=0,l=0;const d=document.getElementById("app");o(d,"mousedown",b=>{a=!0,c=b.clientX,l=b.clientY}),o(window,"mousemove",b=>{a&&(i.dx+=b.clientX-c,i.dy+=b.clientY-l,c=b.clientX,l=b.clientY)}),o(window,"mouseup",()=>a=!1),o(d,"touchstart",b=>{for(const R of b.changedTouches)R.clientX>innerWidth*.4&&!a&&(a=!0,c=R.clientX,l=R.clientY)},{passive:!0}),o(d,"touchmove",b=>{for(const R of b.changedTouches)a&&(i.dx+=R.clientX-c,i.dy+=R.clientY-l,c=R.clientX,l=R.clientY)},{passive:!0}),o(d,"touchend",()=>a=!1);const u=document.getElementById("joy"),f=document.getElementById("stick");let m=null;const g=(b,R)=>{f.style.left=34+b+"px",f.style.top=34+R+"px"};o(u,"touchstart",b=>{m=b.changedTouches[0].identifier,b.preventDefault()},{passive:!1}),o(window,"touchmove",b=>{for(const R of b.changedTouches)if(R.identifier===m){const S=u.getBoundingClientRect();let M=R.clientX-(S.left+60),P=R.clientY-(S.top+60);const k=Math.hypot(M,P)||1,F=Math.min(k,44);M=M/k*F,P=P/k*F,g(M,P),e.x=M/44,e.z=P/44,e.active=!0}},{passive:!0}),o(window,"touchend",b=>{for(const R of b.changedTouches)R.identifier===m&&(m=null,e.x=0,e.z=0,e.active=!1,g(0,0))});const v=document.getElementById("btn-act"),p=document.getElementById("btn-run"),h=()=>r.add("KeyE"),w=()=>t=!t;o(v,"click",h),o(p,"click",w);const _=document.getElementById("btn-fight"),x=document.getElementById("btn-whistle"),C=document.getElementById("btn-crouch");return _&&o(_,"click",()=>r.add("KeyF")),x&&o(x,"click",()=>r.add("KeyQ")),C&&o(C,"click",()=>r.add("KeyC")),{api:{axis(){let b=0,R=0;(n.has("KeyW")||n.has("ArrowUp"))&&(R-=1),(n.has("KeyS")||n.has("ArrowDown"))&&(R+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(b-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(b+=1),e.active&&(b+=e.x,R+=e.z);const S=Math.hypot(b,R);return S>1&&(b/=S,R/=S),{x:b,z:R}},run(){return n.has("ShiftLeft")||n.has("ShiftRight")||t},consumeLook(){const b={dx:i.dx,dy:i.dy};return i.dx=0,i.dy=0,b},wasPressed(b){return r.has(b)?(r.delete(b),!0):!1},injectKey(b){r.add(b),n.add(b)},releaseKey(b){n.delete(b)},injectLook(b,R){i.dx+=b,i.dy+=R},setJoy(b,R){e.x=b,e.z=R,e.active=!0},clearJoy(){e.x=0,e.z=0,e.active=!1,g(0,0)}},dispose(){for(const[b,R,S,M]of s)b.removeEventListener(R,S,M);s.length=0}}}function Kl(n,e){return{x:n,z:e,yaw:Math.PI,speed:0,mesh:null,interactTarget:null,crouch:!1,running:!1,attackT:-99}}function Jl(n,e,t,i,r){const s=e.axis(),o=e.run()&&!n.crouch,a=n.crouch?1.5:o?5.2:3,c=Math.sin(t),l=Math.cos(t),d=-s.x*l-s.z*c,u=s.x*c-s.z*l,f=Math.hypot(d,u);if(f>.01){const g=Math.min(a,a*f);n.x+=d/f*g*i,n.z+=u/f*g*i,n.yaw=Math.atan2(d,u),n.speed=g}else n.speed=0;n.running=n.speed>3.5;const m=ar(n.x,n.z,.4,r);n.x=m.x,n.z=m.z}function M_(n){return{x:n.x,z:n.z,yaw:n.yaw,crouch:n.crouch,attackCd:n.attackCd??-99,whistleCd:n.whistleCd??-99,attackT:n.attackT??-99}}function y_(n,e){n.crouch=e.crouch??!1,n.running=!1,n.attackCd=e.attackCd??-99,n.whistleCd=e.whistleCd??-99,n.attackT=e.attackT??-99}const _s=new Map;function Di(n){let e=_s.get(n);return e||(e=new M0({color:n}),_s.set(n,e)),e}const gs=new Map;function ni(n,e){let t=gs.get(n);return t||(t=e(),gs.set(n,t)),t}const xs=new Map;function aa(n){let e=xs.get(n);return e||(e=new va({color:n}),xs.set(n,e)),e}function S_(){for(const n of gs.values())n.dispose();for(const n of _s.values())n.dispose();for(const n of xs.values())n.dispose();gs.clear(),_s.clear(),xs.clear()}function E_(n){const e=Di,t=new Ae(new Sn(100,100),e(4020794));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=Fe.road,r=new Ae(new Sn(i.maxX-i.minX,i.maxZ-i.minZ),e(3356220));r.rotation.x=-Math.PI/2,r.position.set(0,.02,0),n.add(r);const s=Fe.piazza,o=new Ae(new Sn(s.w,s.d),e(9078136));o.rotation.x=-Math.PI/2,o.position.set(s.cx,.03,s.cz),n.add(o);const a=new Ae(new Sn(4,16),e(7301726));a.rotation.x=-Math.PI/2,a.position.set(18,.025,5),n.add(a);const c={bar:11569487,b2:8361648,b3:10256271,b4:9150586,b5:10525311};for(const l of Fe.buildings){const d=new li,u=e(c[l.id]??8947848),f=e(4865845);if(l.interior){const v=l.w/2,p=l.d/2,h=l.door.width/2,w=l.door.at,_=l.z-p,x=l.z+p,C=[[sl(l.x-v,w-h),_,w-h-(l.x-v),.4],[sl(w+h,l.x+v),_,l.x+v-(w+h),.4],[l.x,x,l.w,.4]];for(const[S,M,P,k]of C){const F=new Ae(new _t(P,3.2,k),u);F.position.set(S,3.2/2,M),d.add(F)}for(const S of[l.x-v,l.x+v]){const M=new Ae(new _t(.4,3.2,l.d),u);M.position.set(S,3.2/2,l.z),d.add(M)}const T=new Ae(new _t(l.w+.6,.4,l.d+.6),f);T.position.set(l.x,3.2+.2,l.z),d.add(T);const b=new Ae(new Sn(l.w,l.d),e(7232323));b.rotation.x=-Math.PI/2,b.position.set(l.x,.04,l.z),d.add(b);const R=new Ae(new _t(4,1,1),e(5913892));R.position.set(l.x,.5,l.z+2.5),d.add(R);for(const[S,M]of[[-2.5,-1.5],[0,-2],[2.5,-1]]){const P=new Ae(new wn(.5,.5,.1,8),e(7816226));P.position.set(l.x+S,.75,l.z+M),d.add(P);const k=new Ae(new wn(.08,.08,.75,6),e(3355443));k.position.set(l.x+S,.37,l.z+M),d.add(k)}}else{const m=new Ae(new _t(l.w,l.h,l.d),u);m.position.set(l.x,l.h/2,l.z),d.add(m);const g=new Ae(new _t(l.w+.6,.4,l.d+.6),f);g.position.set(l.x,l.h+.2,l.z),d.add(g);const v=e(1910064);for(const h of[l.z-l.d/2-.03,l.z+l.d/2+.03]){const w=new Ae(new _t(Math.max(1,l.w-2),1.1,.06),v);w.position.set(l.x,Math.min(3.4,l.h-1.4),h),d.add(w)}const p=new Ae(new _t(1.2,2.2,.1),e(3812380));p.position.set(l.x,1.1,l.z-l.d/2-.04),d.add(p)}n.add(d)}for(const l of Fe.props){const d=new li;if(l.kind==="lamp"){const u=new Ae(new wn(.09,.09,4.4,6),e(2238e3));u.position.y=2.2,d.add(u);const f=new Ae(new bs(.28,8,6),aa(16771496));f.position.y=4.5,d.add(f)}else if(l.kind==="tree"){const u=new Ae(new wn(.18,.24,1.6,6),e(5914920));u.position.y=.8,d.add(u);const f=new Ae(new Ea(1.4,2.6,7),e(3042100));f.position.y=2.8,d.add(f)}else if(l.kind==="bench"){const u=new Ae(new _t(2.2,.12,.8),e(7031340));u.position.y=.5,d.add(u)}else if(l.kind==="crates"){const u=new Ae(new _t(1.2,1.2,1.2),e(9071162));u.position.y=.6,d.add(u);const f=new Ae(new _t(.9,.9,.9),e(8018992));f.position.set(.8,1.65,.2),f.rotation.y=.4,d.add(f)}else if(l.kind==="yardstack"){const u=new Ae(new _t(2.2,2.4,2.2),e(9071162));u.position.y=1.2,u.name="yardstack",d.add(u);const f=new Ae(new _t(1.4,1,1.4),e(8018992));f.position.y=2.9,f.name="yardstack_top",d.add(f)}d.position.set(l.x,0,l.z),n.add(d)}for(const l of Fe.coverWalls??[]){const d=new Ae(new _t(l.w,2.2,l.d),e(10130314));d.position.set(l.x,1.1,l.z),n.add(d)}}function sl(n,e){return(n+e)/2}function b_(){try{const n=document.createElement("canvas"),e=n.getContext("webgl2")||n.getContext("webgl"),t=e?.getExtension("WEBGL_debug_renderer_info"),i=t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):"";return/swiftshader|llvmpipe|software/i.test(i)}catch{return!1}}function w_(n){const e=b_(),t=.7,i=new x0({antialias:!e});i.setPixelRatio(e?1:Math.min(devicePixelRatio,2));const r=()=>{e?i.setSize(Math.round(innerWidth*t),Math.round(innerHeight*t),!1):i.setSize(innerWidth,innerHeight)};r(),n.appendChild(i.domElement);const s=new v0;s.background=new He(8889800),s.fog=new Sa(8889800,60,140),s.add(new y0(13624831,3820090,1.1));const o=new b0(16773849,1.6);o.position.set(30,45,20),s.add(o),E_(s);const a=new Vt(60,innerWidth/innerHeight,.1,300),c=()=>{a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),r()};return addEventListener("resize",c),{renderer:i,scene:s,camera:a,soft:e,dispose(){removeEventListener("resize",c),s.traverse(l=>{l.isMesh}),i.dispose(),S_(),i.domElement.remove()}}}function ca(n,e,t){const i=new li,r=ni("body2",()=>new wn(.26,.32,.75,8)),s=new Ae(r,Di(n));s.position.y=1,i.add(s);const o=new Ae(ni("head",()=>new bs(.24,10,8)),Di(15251850));if(o.position.y=1.62,i.add(o),t==="police"){const p=new Ae(ni("cap",()=>new wn(.25,.26,.12,8)),Di(1714794));p.position.y=1.82,i.add(p)}const a=ni("leg",()=>new _t(.16,.62,.16)),c=Di(3028032),l=new Ae(a,c);l.position.set(-.13,.31,0),i.add(l);const d=new Ae(a,c);d.position.set(.13,.31,0),i.add(d);const u=ni("arm",()=>new _t(.12,.58,.12)),f=Di(n),m=new Ae(u,f);m.position.set(-.36,1.05,0),i.add(m);const g=new Ae(u,f);if(g.position.set(.36,1.05,0),i.add(g),e){const p=new Ae(ni("ring",()=>new Ta(.55,.05,6,16)),aa(3129201));p.rotation.x=Math.PI/2,p.position.y=.06,i.add(p)}const v=new Ae(ni("mark",()=>new wa(.16)),aa(16724804));return v.position.y=2.1,v.visible=!1,i.add(v),i.userData.mark=v,i.userData.limbs={legL:l,legR:d,armL:m,armR:g,phase:0},i}function ol(n,e,t,i){const r=n.userData.limbs;if(!r)return;const s=Math.min(1,e/3);r.phase+=(2+e*2.2)*.05;const o=Math.sin(r.phase)*.55*s;r.legL.rotation.x=o,r.legR.rotation.x=-o,i?(r.armR.rotation.x=-2.2,r.armL.rotation.x=.3):(r.armL.rotation.x=-o*.8,r.armR.rotation.x=o*.8);const a=Math.sin(t*1.8)*.02*(1-s);r.legL.position.y=.31+a,r.legR.position.y=.31-a}function Ql(){return{npcs:{},pairs:{},acc:0}}function T_(n,e,t,i,r,s,o){if(n.acc+=o,n.acc<.25)return;const a=n.acc;n.acc=0;const c=Math.sin(t),l=Math.cos(t);for(const u of i){if(u.state==="dead")continue;const f=u.x-e.x,m=u.z-e.z,g=f*f+m*m;if(g>22*22)continue;const v=Math.sqrt(g)||.001;if(f/v*c+m/v*l<.25&&v>2||Gn(e.x,e.z,u.x,u.z,r))continue;let p=n.npcs[u.id];p||(p=n.npcs[u.id]={time:0,named:!1,last:null,spots:{},seen:0}),p.time+=a,p.seen++;const h=pi(u.x,u.z);p.last={t:s,node:h,x:+u.x.toFixed(1),z:+u.z.toFixed(1)},p.spots[h]=(p.spots[h]??0)+1,p.time>4&&(p.named=!0)}const d=i.filter(u=>{const f=n.npcs[u.id];return f&&u.state!=="dead"&&s-(f.last?.t??-99)<.3});for(let u=0;u<d.length;u++)for(let f=u+1;f<d.length;f++){const m=d[u].id,g=d[f].id,v=m<g?`${m}+${g}`:`${g}+${m}`;n.pairs[v]=(n.pairs[v]??0)+1}}function ed(n,e){const t=n.npcs[e]??(n.npcs[e]={time:0,named:!0,last:null,spots:{},seen:0});t.named=!0}function A_(n,e){const t=n.npcs[e];return t?Object.entries(t.spots).filter(([,i])=>i>=8).map(([i])=>i):[]}function R_(n,e){n.npcs=e.npcs??{},n.pairs=e.pairs??{},n.acc=0}function td(n,e){for(const t of n.npcs){t.thinkAt=t.thinkAt??0,t.symbolAt=0,t.speed=0,t.path=[],t.pathIdx=0,t.fleeNode=null,t.state==="alerted"&&(t.state="dwell");const i=[];for(const[r,s]of t.beliefs??[]){if(s&&typeof s=="object"&&"kind"in s){i.push([r,s]);continue}const o=(e??[]).find(a=>a.id===r);i.push([r,{kind:o?.type??"disturbance",severity:o?.severity??.5,px:o?.x??t.x,pz:o?.z??t.z,place:o?.place??"sconosciuto",actor:o?.actorId??"sconosciuto",channel:s?.source==="hearsay"?"hearsay":"seen",confidence:s?.confidence??.5,t:s?.t??0,error:s?.error??null,provenance:[]}])}t.beliefs=i}return n.version=2,n}const C_="quartiere-p0",$n="saves",Pa="slot0";function La(){return new Promise((n,e)=>{const t=indexedDB.open(C_,hs);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains($n)||t.result.createObjectStore($n)},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}function mi(n){return{version:hs,seed:n.seed,rngState:n.rng.state,t:n.sim.t,pruneAt:n.sim.pruneAt??0,corpseAt:n.sim.corpseAt??0,corpseReported:[...n.sim.corpseReported],player:M_(n.player),npcs:n.npcs.map(Sr),journal:n.journal.serialize(),unseen:n.sim.unseen.map(e=>e.id),pk:n.pk,interactables:n.interactables,caught:n.caught??!1,contract:n.contract?{targetId:n.contract.targetId,limit:n.contract.limit,startedAt:n.contract.startedAt??0}:null,world:{packageTaken:!!n.worldFlags.packageTaken}}}function Rn(n,e){if(!e||typeof e!="object")return null;let t=e;if(t.version===1&&(t=td(P_(t),t.journal?.events)),t.version!==hs)throw new Error(`save v${t.version} non migrabile a v${hs}`);n.seed=t.seed??n.seed,t.rngState!=null&&(n.rng.state=t.rngState),n.sim.t=t.t??0,n.sim.pruneAt=t.pruneAt??0,n.sim.corpseAt=t.corpseAt??t.t??0,n.sim.corpseReported=new Set(t.corpseReported??[]);const i=t.player??{};n.player.x=i.x??n.player.x,n.player.z=i.z??n.player.z,n.player.yaw=i.yaw??n.player.yaw,y_(n.player,i);const r=new Set(n.npcs.map(s=>s.id));for(const s of t.npcs??[]){const o=n.npcs.find(a=>a.id===s.id);o&&Er(o,s)}if(n.loadWarnings=[...(t.npcs??[]).filter(s=>!r.has(s.id)).map(s=>`npc-orfano:${s.id}`),...n.npcs.filter(s=>!(t.npcs??[]).some(o=>o.id===s.id)).map(s=>`npc-mancante:${s.id}`)],n.journal.restore(t.journal??{seq:0,events:[]}),t.pk&&n.pk&&R_(n.pk,t.pk),t.interactables&&n.interactables){for(const[s,o]of Object.entries(t.interactables))n.interactables[s]&&(n.interactables[s].state=o.state);n.syncInteractables?.()}n.caught=t.caught??!1,n.contract=t.contract?{targetId:t.contract.targetId,limit:t.contract.limit,startedAt:t.contract.startedAt??0}:n.contract??null,n.caught&&(n.ended="caught"),n.sim.unseen.length=0;for(const s of t.unseen??[]){const o=n.journal.byId(s);o&&n.sim.unseen.push(o)}return n.worldFlags.packageTaken=t.world?.packageTaken??!0,t}function P_(n){return JSON.parse(JSON.stringify(n))}let al=Promise.resolve();function L_(n){const e=al.then(()=>I_(n));return al=e.catch(()=>{}),e}async function I_(n){const e=mi(n);e.savedAt=Date.now();const t=await La();return await new Promise((i,r)=>{const s=t.transaction($n,"readwrite");s.objectStore($n).put(e,Pa),s.oncomplete=i,s.onerror=()=>r(s.error)}),t.close(),e}async function nd(){try{const n=await La(),e=await new Promise((t,i)=>{const s=n.transaction($n,"readonly").objectStore($n).get(Pa);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)});return n.close(),e??null}catch{return null}}async function D_(n,e){const t=e??await nd();return t?Rn(n,t):null}async function U_(){try{const n=await La(),e=await new Promise(t=>{const r=n.transaction($n,"readonly").objectStore($n).get(Pa);r.onsuccess=()=>t(r.result),r.onerror=()=>t(null)});return n.close(),!!e}catch{return!1}}const N_=900;function Ia(n,e=N_){return{targetId:n,limit:e,startedAt:0}}function ui(n,e){if(!e)return{active:!1,expired:!1,remaining:0,elapsed:0};const t=n.t-(e.startedAt??0),i=Math.max(0,e.limit-t);return{active:!0,expired:i<=0,remaining:i,elapsed:t}}function z_(n,e){return e?n.npcs.find(t=>t.id===e.targetId)??null:null}function lr(n,e){if(!e)return"running";const t=ui(n,e),i=z_(n,e);return i&&i.state==="dead"?t.expired?"expired":"done":t.expired?"expired":"running"}function id(n){const e=Math.max(0,Math.ceil(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function F_(n){const e={top:document.getElementById("hud-top"),prompt:document.getElementById("prompt"),panel:document.getElementById("panel"),notebook:document.getElementById("notebook"),debug:document.getElementById("debug"),toast:document.getElementById("toast"),buttons:document.getElementById("hud-buttons")};let t=0,i="\0";const r={show(){e.top.style.display="flex",e.buttons.style.display="block"},toast(a,c=2600){e.toast.textContent=a,e.toast.style.display="block",t=performance.now()+c},tickToast(){t&&performance.now()>t&&(e.toast.style.display="none",t=0)},setPrompt(a){const c=a??"";if(c!==i){if(i=c,!c){e.prompt.style.display="none";return}e.prompt.style.display="block",e.prompt.innerHTML=c}},togglePanel(){e.panel.style.display=e.panel.style.display==="block"?"none":"block",e.panel.style.display==="block"&&r.renderPanel()},toggleNotebook(){e.notebook.style.display=e.notebook.style.display==="block"?"none":"block",e.notebook.style.display==="block"&&r.renderNotebook()},renderNotebook(){const a=n,c=a.pk,l=a.sim.t,d=Object.fromEntries(a.npcs.map(v=>[v.id,v]));let u="<h3>📓 Taccuino — solo ciò che hai osservato</h3>";const f=ui(a.sim,a.contract);u+='<div class="who"><b>Contratto: Marco</b> — maglia rossa, zona bar/piazza. Il resto devi scoprirlo tu.'+(f.active?` ⏱ finestra: <b>${id(f.remaining)}</b>${f.expired?" (scaduta)":""}`:"")+"</div>";const m=Object.keys(c.npcs).sort();m.length||(u+='<div class="who">Non hai ancora osservato nessuno. Guarda le persone (devono starti davanti e in vista).</div>');for(const v of m){const p=c.npcs[v],h=d[v];if(!h)continue;const w=p.named?h.name:`sconosciuto (osservato ${p.time.toFixed(0)}s)`,_=h.state==="dead"?" ☠ MORTO":"",x=p.last?`${Wc[p.last.node]??p.last.node}, ${(l-p.last.t).toFixed(0)}s fa`:"mai",C=A_(c,v).map(T=>Wc[T]??T).join(", ")||"—";u+=`<div class="who"><b>${w}</b>${_}<br>ultimo avvistamento: ${x}<br>luoghi abituali: ${C}</div>`}const g=Object.entries(c.pairs).filter(([,v])=>v>=20).map(([v])=>{const[p,h]=v.split("+"),w=c.npcs[p]?.named?d[p]?.name??p:"sconosciuto",_=c.npcs[h]?.named?d[h]?.name??h:"sconosciuto";return`${w} ↔ ${_}`});g.length&&(u+=`<h3>Spesso visti insieme</h3><div class="who">${g.join("<br>")}</div>`),e.notebook.innerHTML=u},renderPanel(){const a=n,c=a.sim.t;let l=`<h3>GROUND TRUTH — event journal (${a.journal.events.length})</h3>`;a.journal.events.length||(l+='<div class="ev">nessun evento: il mondo è invariato.</div>');for(const d of a.journal.events)l+=`<div class="ev"><b>${d.id}</b> t=${d.t.toFixed(1)} · ${d.type} sev=${d.severity} · (${d.x.toFixed(1)}, ${d.z.toFixed(1)}) ${d.actorId?"· da "+d.actorId:""} · testimoni veri: [${d.witnesses.join(",")||"—"}]</div>`;l+="<h3>CREDENZE NPC (parziali, con fonte/fiducia/età)</h3>";for(const d of a.npcs){l+=`<div class="bel"><b>${d.name}</b> [${d.state}/${d.level}] mem:${d.memory.length}`,d.beliefs.size||(l+="<br>· crede: nulla di sospetto");for(const[u,f]of d.beliefs){const m=Math.round(nn(f,c)*100);l+=`<br>· su ${u} (età ${(c-f.t).toFixed(0)}s): ${D0(f,c)} [eff ${m}%]`}l+="</div>"}e.panel.innerHTML=l},renderDebug(a,c){const l=n.renderer.renderer.info,d=performance.memory?(performance.memory.usedJSHeapSize/1048576).toFixed(0)+"MB":"n/a",u=n.sim.stats;e.debug.textContent=`FPS ${a} · frame ${c.toFixed(1)}ms · sim ${n.sim.simMs.toFixed(2)}ms · ai ${n.sim.aiMs.toFixed(2)}ms
NPC L1/${n.sim.counts.L1} L2/${n.sim.counts.L2} L3/${n.sim.counts.L3}
percep ${u.perceptionChecks} · gossip ${u.gossipOps} · path ${u.pathComputations} · think ${u.thinkRuns}
draw ${l.render.calls} · tri ${l.render.triangles} · heap ${d}
errori: ${n.errors.length}`+(n.errors.length?` · ultimo: ${n.errors[n.errors.length-1]}`:"")},toggleDebug(){e.debug.style.display=e.debug.style.display==="block"?"none":"block"}},s=()=>r.togglePanel(),o=()=>n.save();return document.getElementById("btn-panel").addEventListener("click",s),document.getElementById("btn-save").addEventListener("click",o),r.dispose=()=>{document.getElementById("btn-panel").removeEventListener("click",s),document.getElementById("btn-save").removeEventListener("click",o)},r}function k_(){const n={ctx:null,master:null,stepAt:0,ensure(){if(n.ctx)return n.ctx.state==="suspended"&&n.ctx.resume(),!0;try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;n.ctx=new e,n.master=n.ctx.createGain(),n.master.gain.value=.25,n.master.connect(n.ctx.destination),n.ambience()}catch{return!1}return!!n.ctx},tone(e,t,i="sine",r=1,s=0){if(!n.ensure())return;const o=n.ctx.currentTime,a=n.ctx.createOscillator(),c=n.ctx.createGain();a.type=i,a.frequency.setValueAtTime(e,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,e+s),o+t),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(c),c.connect(n.master),a.start(o),a.stop(o+t+.02)},noiseBurst(e,t=1,i=400){if(!n.ensure())return;const r=n.ctx.currentTime,s=Math.floor(n.ctx.sampleRate*e),o=n.ctx.createBuffer(1,s,n.ctx.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const c=n.ctx.createBufferSource();c.buffer=o;const l=n.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=i;const d=n.ctx.createGain();d.gain.value=t,c.connect(l),l.connect(d),d.connect(n.master),c.start(r)},step(e){n.noiseBurst(.07,e?.5:.25,500)},whistle(){n.tone(2200,.35,"sine",.7,600)},swing(){n.noiseBurst(.12,.3,1200)},thud(){n.noiseBurst(.25,.9,300),n.tone(90,.2,"sine",.8,-40)},clank(){n.tone(620,.15,"square",.3),n.tone(930,.1,"square",.2)},crash(){n.noiseBurst(.7,1,900),n.tone(70,.5,"sine",.7,-30)},sting(){n.stingT&&clearTimeout(n.stingT),n.tone(440,.4,"sawtooth",.4,220),n.stingT=setTimeout(()=>{n.stingT=0,n.tone(554,.4,"sawtooth",.4,220)},180)},scream(){n.tone(900,.3,"sawtooth",.35,500)},ambience(){const e=n.ctx.sampleRate*2,t=n.ctx.createBuffer(1,e,n.ctx.sampleRate),i=t.getChannelData(0);let r=0;for(let c=0;c<e;c++)r=r*.98+(Math.random()*2-1)*.02,i[c]=r;const s=n.ctx.createBufferSource();s.buffer=t,s.loop=!0;const o=n.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=400;const a=n.ctx.createGain();a.gain.value=.5,s.connect(o),o.connect(a),a.connect(n.master),s.start(),n.ambienceSrc=s},dispose(){try{n.stingT&&(clearTimeout(n.stingT),n.stingT=0)}catch{}try{n.ambienceSrc?.stop()}catch{}n.ambienceSrc=null;try{n.ctx?.close()}catch{}n.ctx=null,n.master=null}};return n}const O_=1.9,B_=10,H_=120;function G_(n,e,t){const i=n.journal.append(e,{t:n.t,...t});return n.unseen.push(i),i}function as(n){const e=Math.min(1,n.awareness??0),t=n.state==="alerted"||n.state==="curious"?.2:0,i=.9-.55*e-t;return Math.max(.05,Math.min(.95,i))}function qi(n,e,t,i){if(!t||t.state==="dead")return{hit:!1,reason:"no-target"};if((i===void 0?n.rng.next():i)<as(t))return{hit:!0};const s=G_(n,"assault",{severity:.85,x:e.x,z:e.z,actorId:"player",victimId:t.id,place:pi(e.x,e.z)}),o=V_(n,t,s),a=o&&t.beliefs.has(s.id);return a&&W_(t,n.t),{hit:!1,ev:s,perceived:o,alarm:a}}function V_(n,e,t){const i=Ts(e,t.x,t.z,n.colliders,n.rng);let r,s,o,a,c=null,l=null;const d=Math.hypot(e.x-t.x,e.z-t.z);if(i.seen)r="seen",s=i.confidence,o=i.px,a=i.pz,c=i.error;else{const f=Ra(e,t.x,t.z,B_,n.colliders,n.rng);if(!f.heard)return!1;r="heard",s=f.confidence,o=f.px,a=f.pz,l=f.w}return ft(e.beliefs,t.id,ct({kind:"assault",severity:t.severity,px:o,pz:a,place:t.place,subject:t.victimId??null,actor:r==="seen"?ta(e,t,d,s):"sconosciuto",channel:r,confidence:s,t:n.t,error:c,w:l,provenance:[]}),e.id)==="ignored"?!1:(Xt(e,t.id),!0)}function W_(n,e){const t=n.home??(n.schedule&&n.schedule[0]?n.schedule[0].node:null)??(n.agenda[0]?n.agenda[0].node:null);return t?(n.routineShift={until:+(e+H_).toFixed(3),node:t},!0):!1}const X_=.05;function vs(n,e){const t=Ie(n,at(Ve(n^40503),e));return{seed:n,rng:t.rng,sim:t.sim,npcs:t.sim.npcs,journal:t.sim.journal,player:{x:t.player.x,z:t.player.z,yaw:Math.PI,crouch:!1,running:!1,speed:0,attackCd:-99,whistleCd:-99,attackT:-99},pk:Ql(),interactables:Wl(),caught:!1,worldFlags:{packageTaken:!0},loadWarnings:[]}}const Wt=vs;function ln(n,e,t){for(let i=e;i<t;i++){if(n.player.x=Math.sin(i/50)*20,n.player.z=Math.cos(i/70)*20,i===50&&ot(n.sim,"theft",{severity:.7,x:10,z:10,actorId:"player",place:"strada"}),i===100&&(n.player.attackCd=n.sim.t),i===390){const r=n.sim.npcs[3],s=n.sim.npcs[0];r.x=s.x+2,r.z=s.z,r.state="dead",r.speed=0,r.path=[],r.fleeNode=null,r.gotoX=null,r.gotoZ=null,ot(n.sim,"kill",{severity:1,x:r.x,z:r.z,actorId:"player",victimId:r.id,place:"piazza"})}kt(n.sim,n.player,X_)}}function vn(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function $_(){const n=Wt(4242,12);ln(n,0,400);const e=JSON.parse(JSON.stringify(mi(n)));ln(n,400,600);const t=Et(n.sim),i=n.journal.events.length,r=Wt(9999,12);Rn(r,e),ln(r,400,600);const s=Et(r.sim),o=i>e.journal.events.length;return{pass:t===s&&o,info:`continueA=${t} continueB=${s} corpseDiscoveredDuringContinue=${o} corpseAt=${e.corpseAt}`}}function q_(){const n=Wt(3131,8);ln(n,0,120);const e=mi(n),t=JSON.parse(JSON.stringify(e)),i=JSON.stringify(e)===JSON.stringify(t),r=Wt(1,8);Rn(r,t),ln(n,120,180),ln(r,120,180);const s=Et(n.sim)===Et(r.sim);return{pass:i&&s,info:`wireIdentical=${i} continueMatch=${s}`}}function Y_(){const n=Ve(777),e=Ve(777),t=[n.next(),n.next(),n.next()],i=[e.next(),e.next(),e.next()],r=n.state,s=[n.next(),n.next()];e.state=r;const o=[e.next(),e.next()],c=Ve(778).next()!==t[0];return{pass:JSON.stringify(t)===JSON.stringify(i)&&JSON.stringify(s)===JSON.stringify(o)&&c,info:`sameSeed=${JSON.stringify(t)===JSON.stringify(i)} stateRestore=${JSON.stringify(s)===JSON.stringify(o)} diffSeedDiff=${c}`}}function j_(){const n=Wt(5151,4);ln(n,0,101);const e=mi(n),t=Wt(2,4);return Rn(t,JSON.parse(JSON.stringify(e))),{pass:t.player.attackCd===n.player.attackCd&&t.player.x===n.player.x&&t.player.z===n.player.z&&t.player.crouch===n.player.crouch,info:`attackCd ${e.player.attackCd} -> ${t.player.attackCd} pos=(${t.player.x.toFixed(2)},${t.player.z.toFixed(2)})`}}function Z_(){const n={version:2,seed:5,rngState:123,t:9,npcs:[],journal:{seq:0,events:[]}},e=Wt(7,4);Rn(e,JSON.parse(JSON.stringify(n)));const t=e.sim.t===9&&e.sim.corpseAt===9&&e.worldFlags.packageTaken===!0&&e.caught===!1&&Array.isArray(e.loadWarnings)&&e.loadWarnings.length===e.npcs.length,i={version:1,seed:7,rngState:42,t:12.5,player:{x:1,z:2,yaw:0},npcs:[{id:"anna",x:0,z:0,yaw:0,state:"alerted",agendaIdx:0,dwellLeft:1,relations:{},memory:["ev1"],beliefs:[["ev1",{fact:"fatto",source:"seen",confidence:.8,t:10,error:null}]],alertedBy:"ev1",alertT:11,gossipAt:0}],journal:{seq:1,events:[{id:"ev1",t:10,type:"theft",severity:.6,x:37,z:21.5,actorId:"player",place:"piazza",witnesses:["anna"]}]},world:{packageTaken:!0}},r=Wt(7,4);r.npcs[0].id="anna",Rn(r,JSON.parse(JSON.stringify(i)));const s=r.npcs[0],o=r.sim.t===12.5&&s.state==="dwell"&&s.beliefs.get("ev1")?.kind==="theft"&&s.beliefs.get("ev1")?.channel==="seen";let a=null;try{Rn(Wt(7,4),{version:99})}catch(c){a=String(c.message)}return{pass:t&&o&&!!a,info:`v2default=${t} v1migrated=${o} badVersionRejected=${a}`}}function K_(){const n=Wt(6161,10);ln(n,0,60);const e=n.npcs[0];e.state="alerted",e.fleeNode="road_e",e.alertedBy="ev1",e.alertT=n.sim.t,e.dwellLeft=7.5;let t=null,i=!0;for(let r=0;r<20;r++){const s=JSON.parse(JSON.stringify(mi(n))),o=Wt(1e3+r,10);Rn(o,s),i=i&&o.npcs[0].state==="alerted"&&o.npcs[0].fleeNode==="road_e"&&o.npcs[0].dwellLeft===7.5&&Et(o.sim)===Et(n.sim),n.npcs[0].state="alerted",t===null&&(t=Et(o.sim))}return ln(n,60,120),{pass:i&&t!==null,info:`20 cicli alert-stable=${i}`}}function J_(){const n=ps();for(let o=0;o<Ni+500;o++)n.append("noise",{t:o*.05,severity:.2,x:0,z:0,place:"piazza"});const e=n.events.length===Ni,t=new Set(n.events.map(o=>o.id)).size===n.events.length,i={seq:99999,events:n.events.map(o=>({...o}))};i.events.push(...Array.from({length:10},(o,a)=>({id:"x"+a})));const r=ps();r.restore(i);const s=r.events.length===Ni;return{pass:e&&t&&s&&r.serialize().seq===99999,info:`len=${n.events.length}/${Ni} uniqueIds=${t} restoreBounded=${s}`}}function Q_(){const n={memory:[],beliefs:new Map};for(let r=0;r<Kt*3;r++)Xt(n,"ev"+r);const e=n.memory.length===Kt&&n.memory[0]==="ev"+(Kt*3-Kt)&&n.memory[Kt-1]==="ev"+(Kt*3-1),t=ct({kind:"noise",channel:"heard",confidence:.6,t:0,provenance:[]}),i=new Map([["old",t]]);return Aa(i,1e6),{pass:e&&i.size===0,info:`memory=${n.memory.length}/${Kt} pruned=${i.size===0}`}}function eg(){const n=Wt(8181,8);ln(n,0,400);const e=mi(n),i=["version","seed","rngState","t","pruneAt","corpseAt","corpseReported","player","npcs","journal","unseen","pk","interactables","caught","world"].filter(l=>!(l in e)),r=e.npcs[0],o=["agenda","relType","trust","relations","memory","beliefs","police","death","thinkAt","gossipAt","dwellLeft","path"].filter(l=>!(l in r)),c=["attackCd","whistleCd"].filter(l=>!(l in e.player));return{pass:i.length===0&&o.length===0&&c.length===0,info:`missingTop=[${i}] missingNpc=[${o}] missingPlayer=[${c}] corpseAt=${e.corpseAt}`}}function tg(){const n=[vn("save_hard_reload_continue",$_),vn("json_pure_roundtrip",q_),vn("rng_serialization",Y_),vn("player_timers_persist",j_),vn("defaults_old_saves",Z_),vn("alert_and_repeat_saveload",K_),vn("journal_bounded",J_),vn("memory_bounded",Q_),vn("save_field_coverage",eg)];return{suite:"p0-infra",passed:n.filter(t=>t.pass).length,total:n.length,tests:n}}const ng=Object.freeze(Object.defineProperty({__proto__:null,makeFakeGame:vs,runInfraTests:tg},Symbol.toStringTag,{value:"Module"}));function st(n,e){try{const t=e();return{name:n,pass:!!t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function As(n,e,t={}){const i=Ie(9101,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:n,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},...t.npcs??[]]),r=i.sim.npcs[0],s=i.sim.npcs[1];return r.state="dead",r.x=0,r.z=0,s.state="dwell",s.dwellLeft=1e9,s.yaw=e,i.player.x=45,i.player.z=45,{w:i,dead:r,finder:s}}const rd=Math.atan2(3,0),Da=Math.atan2(-3,0);function Ms(n){return[...n.beliefs.entries()].map(([e,t])=>[e,t.kind])}function un(n){return n.sim.journal.events.filter(e=>e.type==="found_corpse")}function ig(){const{w:n,finder:e}=As(3,rd);ye(n.sim,n.player,60);const i=un(n).length===0&&n.sim.corpseReported.size===0&&e.beliefs.size===0&&n.sim.stats.corpseDiscoveries===0;e.yaw=Da,ye(n.sim,n.player,60);const r=un(n),s=r[0],o=r.length===1&&n.sim.corpseReported.has("dead")&&n.sim.stats.corpseDiscoveries===1,a=!!s&&e.beliefs.has(s.id)&&s.witnesses.includes("finder");return{pass:i&&o&&a,info:`blocked=${i} events=${r.length} reported=${n.sim.corpseReported.size} finderBeliefs=${JSON.stringify(Ms(e))} witnesses=${s?JSON.stringify(s.witnesses):"—"}`}}function rg(){const{w:n,finder:e}=As(1.2,rd);ye(n.sim,n.player,60);const t=un(n)[0];return{pass:!!t&&e.beliefs.has(t.id)&&t.witnesses.includes("finder")&&n.sim.stats.corpseDiscoveries===1,info:`events=${un(n).length} finderBeliefs=${JSON.stringify(Ms(e))} witnesses=${t?JSON.stringify(t.witnesses):"—"}`}}function sg(){const{w:n}=As(40,Da);ye(n.sim,n.player,600);const e=un(n);return{pass:e.length===0&&n.sim.corpseReported.size===0,info:`events=${e.length} reported=${n.sim.corpseReported.size}`}}function og(){const{w:n,finder:e}=As(3,Da,{npcs:[{id:"second",name:"Second",color:3,x:3,z:3,relations:{},agenda:[{node:"road_c",dwell:5}]}]}),t=n.sim.npcs[2];t.state="dwell",t.dwellLeft=1e9,t.yaw=Math.atan2(-3,-3),ye(n.sim,n.player,90);const i=un(n);return{pass:i.length===1&&e.beliefs.has(i[0].id)&&t.beliefs.has(i[0].id),info:`events=${i.length} f=${JSON.stringify(Ms(e))} s=${JSON.stringify(Ms(t))}`}}function qn(n,e,t,i,r=!0,s=!1){const o=Ie(9301,[{id:"w",name:"Watcher",color:2,x:n,z:e,relations:{},agenda:[{node:"road_c",dwell:5}]}]),a=o.sim.npcs[0];a.state="dwell",a.dwellLeft=1e9;const c=Math.atan2(t-n,i-e);return a.yaw=r?c:c+Math.PI,o.player.x=t,o.player.z=i,o.player.crouch=s,{w:o,n:a}}function On(n){return[...n.beliefs.values()].filter(e=>e.kind==="suspicion")}function ag(){const{w:n,n:e}=qn(0,0,0,6,!1);ye(n.sim,n.player,80);const t=e.awareness,i=On(e);return{pass:t===0&&i.length===0,info:`awareness=${t} susp=${i.length}`}}function cg(){const n=qn(0,0,0,6,!0,!1),e=qn(0,0,0,6,!0,!0);ye(n.w.sim,n.w.player,40),ye(e.w.sim,e.w.player,40);const t=n.n.awareness,i=e.n.awareness;return{pass:On(n.n).length===1&&On(e.n).length===0&&i>0&&i<t,info:`upA=${t?.toFixed(2)} crouchA=${i?.toFixed(2)} upSusp=${On(n.n).length} crouchSusp=${On(e.n).length}`}}function lg(){const{w:n,n:e}=qn(29.5,17,29.5,11,!0);ye(n.sim,n.player,80);const t=On(e);return{pass:t.length===0&&(e.awareness??0)===0,info:`awareness=${e.awareness} susp=${t.length}`}}function dg(){const n=o=>{for(let a=0;a<300&&On(o.n).length===0;a++)ye(o.w.sim,o.w.player,1);return On(o.n)[0]},e=qn(0,0,0,6,!0),t=qn(0,0,0,12,!0),i=n(e),r=n(t);return{pass:i?.actor==="uomo in verde"&&r?.actor==="sconosciuto",info:`near=${i?.actor??"—"} far=${r?.actor??"—"}`}}function ug(){const n=qn(0,0,0,6,!0),e=qn(0,0,0,6,!0);ye(n.w.sim,n.w.player,150),ye(e.w.sim,e.w.player,150);const t=JSON.stringify([...n.n.beliefs.entries()].sort()),i=JSON.stringify([...e.n.beliefs.entries()].sort());return{pass:t===i&&n.n.awareness===e.n.awareness,info:`equal=${t===i&&n.n.awareness===e.n.awareness} a=${n.n.awareness?.toFixed(3)}`}}function Ut(n){return n.state="dwell",n.dwellLeft=1e9,n}function Rs(n,e){const t=Ie(n,[{id:"vic",name:"Victim",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}],home:"road_w"},{id:"far",name:"Far",color:2,x:0,z:42,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[i,r]=t.sim.npcs;return Ut(i),i.yaw=e,Ut(r),t.player.x=0,t.player.z=1.5,{w:t,vic:i,far:r}}function fg(){const{w:n,vic:e,far:t}=Rs(9401,Math.PI),i=qi(n.sim,n.player,e,.99),r=n.sim.journal.events.filter(l=>l.type==="assault"),s=[...e.beliefs.values()].find(l=>l.kind==="assault"),o=e.state!=="dead",a=t.beliefs.size===0&&!t.memory.includes(i.ev?.id);ye(n.sim,n.player,40);const c=e.state==="alerted"||e.alertedBy===(i.ev&&i.ev.id);return{pass:!i.hit&&i.perceived&&r.length===1&&!!s&&s.channel==="heard"&&s.actor==="sconosciuto"&&o&&a&&c&&!!e.routineShift,info:`hit=${i.hit} perceived=${i.perceived} ch=${s?.channel} actor=${s?.actor} assaults=${r.length} alive=${o} noLeak=${a} state=${e.state} shift=${!!e.routineShift} farBeliefs=${t.beliefs.size}`}}function hg(){const{w:n,vic:e}=Rs(9402,0),t=qi(n.sim,n.player,e,.99),i=[...e.beliefs.values()].find(r=>r.kind==="assault");return{pass:!t.hit&&!!i&&i.channel==="seen"&&i.actor==="uomo in verde",info:`ch=${i?.channel} actor=${i?.actor}`}}function pg(){const{w:n,vic:e}=Rs(9403,0),t=as({awareness:0,state:"dwell"}),i=as({awareness:1,state:"dwell"}),r=as({awareness:1,state:"alerted"}),s=qi(n.sim,n.player,e,0),o=n.sim.journal.events.filter(l=>l.type==="assault").length,a=qi(n.sim,n.player,e,.999),c=n.sim.journal.events.filter(l=>l.type==="assault").length;return{pass:i<t&&r<=i&&s.hit===!0&&o===0&&a.hit===!1&&c===1&&e.state!=="dead",info:`calm=${t.toFixed(2)} ready=${i.toFixed(2)} alerted=${r.toFixed(2)} hit=${s.hit}/${o} miss=${a.hit}/${c} alive=${e.state}`}}function mg(){const{w:n,vic:e}=Rs(9404,Math.PI);qi(n.sim,n.player,e,.99);const t=e.routineShift;ye(n.sim,n.player,900);const i=e.agendaBlock===t.node&&e.agenda[0]?.node===t.node;return{pass:!!t&&t.node==="road_w"&&e.routineShift!=null&&i,info:`shift=${JSON.stringify(e.routineShift)} agendaBlock=${e.agendaBlock} agenda0=${e.agenda[0]?.node} state=${e.state}`}}function _g(){const n=Ie(9801,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:8,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[e,t]=n.sim.npcs;e.state="dead",e.death={evId:null,t:0,px:0,pz:0,kind:"kill",method:"melee"},Ut(t),t.yaw=Math.atan2(-8,0),n.player.x=45,n.player.z=45;const i=oa(n.sim,8,0,10),r=ms(n.sim,e),s=ms(n.sim,e),o=oa(n.sim,8,0,10);ye(n.sim,n.player,120);const a=un(n).length===0&&!n.sim.corpseReported.has("dead"),c=!pr(e,8,0,15);t.x=1,ye(n.sim,n.player,120);const l=un(n)[0],d=l?t.beliefs.get(l.id):null;return{pass:i===e&&r&&!s&&o===null&&a&&c&&!!l&&l.moved===!0&&!!d&&d.moved===!0,info:`before=${i?.id} conceal=${r}/${!s} after=${o} noDiscovery=${a} blocked=${c} ev=${!!l} moved=${l?.moved} bMoved=${d?.moved}`}}function gg(){const n=Ie(9802,[{id:"dead",name:"Dead",color:1,x:3,z:3,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:3,z:9,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[e,t]=n.sim.npcs;e.state="dead",e.death={evId:null,t:0,px:3,pz:3,kind:"kill",method:"trap"},ms(n.sim,e);const i=Sr(e),r=Ki({id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},Ve(5));Er(r,i);const s=r.hidden===!0&&r.death?.hidden===!0,o=!pr(r,8,0,15)&&pr(r,1,0,15);Ut(t),t.yaw=Math.atan2(0,-6),t.x=3,t.z=9,n.player.x=45,n.player.z=45,ye(n.sim,n.player,120);const a=un(n).length===0;t.z=3.6,ye(n.sim,n.player,120);const c=un(n).length===1;return{pass:s&&o&&a&&c,info:`hidden=${s} blocked=${o} none=${a} found=${c} concealed=${n.sim.stats.concealed}`}}function sd(n){const e=Ie(n,[{id:"wit",name:"Witness",color:1,x:0,z:6,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"cop",name:"Cop",color:2,role:"police",x:12,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[t,i]=e.sim.npcs;return Ut(t),t.yaw=Math.atan2(0,-6),Ut(i),i.yaw=Math.PI/2,e.player.x=45,e.player.z=45,{w:e,wit:t,cop:i}}function xg(){const{w:n,wit:e,cop:t}=sd(9901);ot(n.sim,"accident",{severity:.35,x:0,z:0,actorId:null,victimId:"ghost",place:"road_c"}),ye(n.sim,n.player,120);const i=e.beliefs.get("ev1"),r=[...e.beliefs.values(),...t.beliefs.values()].some(s=>s.kind==="kill");return{pass:!!i&&i.kind==="accident"&&!r&&t.police.state==="UNAWARE",info:`witKind=${i?.kind} sev=${i?.severity} murderBeliefs=${r} police=${t.police.state}`}}function vg(){const{w:n,wit:e,cop:t}=sd(9902);ot(n.sim,"accident",{severity:.35,x:0,z:0,actorId:null,victimId:"ghost",place:"road_c"}),ye(n.sim,n.player,120);const i=e.beliefs.get("ev1");t.yaw=Math.atan2(-12,0),ot(n.sim,"sabotage",{severity:.5,x:0,z:0,actorId:null,place:"road_c"}),ye(n.sim,n.player,180);const r=e.beliefs.get("ev1"),s=[...t.beliefs.values()].find(o=>o.kind==="kill"||o.kind==="sabotage");return{pass:i?.kind==="accident"&&!!r&&r.kind==="kill"&&r.channel==="inferred"&&r.confidence<=.7&&!!s&&t.police.state!=="UNAWARE"&&t.police.state!=="SUSPICIOUS",info:`before=${i?.kind} after=${r?.kind}/${r?.channel} conf=${r?.confidence?.toFixed(2)} copBelief=${s?.kind} police=${t.police.state}`}}function Mg(){const n=Ie(9601,[{id:"o",name:"Observer",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=Ut(n.sim.npcs[0]);e.yaw=0,n.player.x=0,n.player.z=12,ot(n.sim,"theft",{severity:.6,x:0,z:12,actorId:"player",place:"road_c"}),e.alertedBy="ev1",ye(n.sim,n.player,15);const t=e.beliefs.get("ev1"),i=!!t&&t.actor==="sconosciuto";e.x=0,e.z=6,ye(n.sim,n.player,12);const r=e.beliefs.get("ev1");return{pass:i&&r.actor==="uomo in verde",info:`far=${t?.actor} near=${r?.actor} dist=6`}}function yg(){const n=Ie(9602,[{id:"o",name:"Observer",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=Ut(n.sim.npcs[0]);e.yaw=0,n.player.x=0,n.player.z=12,ot(n.sim,"theft",{severity:.6,x:0,z:12,actorId:"player",place:"road_c"}),e.alertedBy="ev1",ye(n.sim,n.player,300);const t=e.beliefs.get("ev1");return{pass:!!t&&t.actor==="sconosciuto",info:`actor=${t?.actor} kind=${t?.kind}`}}function Sg(){const n=d=>{const u=Ie(d,[{id:"near",name:"Near",color:1,x:5,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"distant",name:"Distant",color:2,x:11,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]);return Ut(u.sim.npcs[0]),Ut(u.sim.npcs[1]),u.player.x=0,u.player.z=0,u},e=n(9701);e.player.running=!0,ye(e.sim,e.player,60);const t=[...e.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise"),i=[...e.sim.npcs[1].beliefs.values()].filter(d=>d.kind==="noise"),r=t.every(d=>d.channel==="heard"&&d.actor==="sconosciuto"),s=e.sim.unseen.every(d=>d.type!=="noise"),o=n(9702);o.player.running=!0,o.player.crouch=!0,ye(o.sim,o.player,60);const a=[...o.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise"),c=n(9703);ye(c.sim,c.player,60);const l=[...c.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise");return{pass:t.length>=1&&i.length===0&&r&&s&&a.length===0&&l.length===0,info:`near=${t.length} far=${i.length} heardOnly=${r} noVisual=${s} crouch=${a.length} still=${l.length}`}}function Eg(){const n=Ie(9704,[{id:"a",name:"A",color:1,x:5,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"b",name:"B",color:2,x:30,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]);Ut(n.sim.npcs[0]),Ut(n.sim.npcs[1]);const e=Ca(n.sim,0,0,10,.3),t=[...n.sim.npcs[0].beliefs.values()].filter(o=>o.kind==="noise"),i=[...n.sim.npcs[1].beliefs.values()].filter(o=>o.kind==="noise"),r=n.sim.journal.events.filter(o=>o.type==="noise"),s=n.sim.unseen.every(o=>o.type!=="noise");return{pass:e===1&&t.length===1&&t[0].channel==="heard"&&t[0].actor==="sconosciuto"&&i.length===0&&r.length===1&&s,info:`heard=${e} a=${t.length}/${t[0]?.channel} b=${i.length} journal=${r.length} noVisual=${s}`}}function bg(){const n=Ie(9111,[{id:"marco",name:"Marco",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=n.sim.npcs[0],t=Ia("marco",100),i=ui(n.sim,t),r=lr(n.sim,t);e.state="dead";const s=lr(n.sim,t);n.sim.t=200,e.state="dwell";const o=ui(n.sim,t),a=lr(n.sim,t);e.state="dead";const c=lr(n.sim,t);return{pass:i.active&&!i.expired&&i.remaining===100&&r==="running"&&s==="done"&&o.expired&&o.remaining===0&&a==="expired"&&c==="expired"&&ui(n.sim,null).active===!1,info:`start=${i.remaining} run=${r} done=${s} expired=${a} late=${c}`}}function od(n,e){const t=Ie(n,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"patsy",name:"Patsy",color:2,x:e?2.2:0,z:e?0:-4,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"cop",name:"Cop",color:3,role:"police",x:6,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[i,r,s]=t.sim.npcs;return i.state="dead",i.death={evId:null,t:0,px:0,pz:0,kind:"kill",method:"melee"},Ut(r),r.yaw=e?Math.atan2(1.5,0):Math.atan2(0,-1),Ut(s),s.yaw=Math.atan2(-6,0),t.player.x=44,t.player.z=30,t.sim.hooks.onArrest=(o,a)=>{t.arrests=(t.arrests??[]).concat(`${o.id}>${a.id}`)},t.sim.hooks.onCaught=()=>{t.caughtHook=!0},ot(t.sim,"found_corpse",{severity:.55,x:0,z:0,actorId:null,victimId:"dead",place:"road_c"}),{w:t,dead:i,patsy:r,cop:s}}function wg(){const{w:n,patsy:e}=od(9211,!0);return ye(n.sim,n.player,900),{pass:(n.arrests??[]).length===1&&n.arrests[0]==="cop>patsy"&&e.state==="arrested"&&!n.caughtHook,info:`arrests=${JSON.stringify(n.arrests??[])} patsy=${e.state} caught=${!!n.caughtHook}`}}function Tg(){const{w:n,patsy:e}=od(9212,!1);return ye(n.sim,n.player,900),{pass:(n.arrests??[]).length===0&&e.state==="dwell",info:`arrests=${JSON.stringify(n.arrests??[])} patsy=${e.state}`}}function Ag(){const n=vs(7777,6);n.contract=Ia("marco",480),n.sim.t=120;const e=n.npcs[0];e.hidden=!0,e.death={evId:"ev9",t:30,px:e.x,pz:e.z,kind:"kill",method:"trap"},e.routineShift={until:240,node:"road_w"};const t=n.npcs.find(l=>l.role==="police"),i=mi(n),r=JSON.parse(JSON.stringify(i)),s=vs(1,6);Rn(s,r);const o=s.npcs.find(l=>l.id===e.id),a=s.contract,c=ui(s.sim,s.contract);return{pass:o.hidden===!0&&o.death?.kind==="kill"&&o.routineShift?.node==="road_w"&&o.routineShift?.until===240&&a?.limit===480&&a?.targetId==="marco"&&c.remaining===360&&!c.expired&&(!t||s.npcs.find(l=>l.id===t.id).police!=null),info:`hidden=${o.hidden} shift=${JSON.stringify(o.routineShift)} contract=${JSON.stringify(a)} rem=${c.remaining}`}}function Rg(){return[st("assassin_corpse_needs_perception",ig),st("assassin_corpse_stumble_discoverer_knows",rg),st("assassin_corpse_silent_without_knower",sg),st("assassin_corpse_single_truth",og),st("assassin_awareness_requires_sight",ag),st("assassin_awareness_crouch_slower",cg),st("assassin_awareness_cover_blocks",lg),st("assassin_awareness_recognition_range",dg),st("assassin_awareness_deterministic",ug),st("assassin_melee_miss_sensors",fg),st("assassin_melee_miss_seen",hg),st("assassin_melee_hit_chance",pg),st("assassin_melee_routine_shift",mg),st("assassin_conceal_discovery",_g),st("assassin_conceal_persist",gg),st("accident_initial_reading",xg),st("accident_rivalutazione",vg),st("identity_partial_observation",Mg),st("identity_stays_unknown",yg),st("footsteps_heard_range",Sg),st("noise_no_identity",Eg),st("contract_time_window",bg),st("arrest_patsy_on_scene",wg),st("arrest_nobody_no_suspicion",Tg),st("save_restores_new_state",Ag)]}const Ua=.05;function Li(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function Cg(){const n=Xl();return{pass:n.nodeViolations.length===0&&n.edgeViolations.length===0,info:`nodes=[${n.nodeViolations}] edges=[${n.edgeViolations}]`}}function Pg(){const{sim:n,player:e}=Ie(4401,[{id:"walker",name:"W",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}]),t=n.npcs[0],i=1200,r=[];for(const[a,c]of Fe.edges)r.push([a,c]),r.push([c,a]);let s=0,o="";for(const[a,c]of r){const l=Fe.nodes[a];t.x=l.x,t.z=l.z,t.state="dwell",t.dwellLeft=0,t.agendaIdx=0,t.agenda=[{node:c,dwell:999}],t.path=[],t.pathIdx=0,t.fleeNode=null,t.gotoX=null,t.gotoZ=null;let d=0;for(;d<i&&(kt(n,e,Ua),!(t.state==="dwell"&&t.agendaIdx>=1));d++);if(d>=i){const f=Math.hypot(Fe.nodes[c].x-t.x,Fe.nodes[c].z-t.z);return{pass:!1,info:`stallo ${a}->${c} dopo ${i} tick: distNodo=${f.toFixed(2)} (r=${Vn(c)}) state=${t.state} pathIdx=${t.pathIdx}/${t.path.length}`}}const u=Math.hypot(Fe.nodes[c].x-t.x,Fe.nodes[c].z-t.z);if(u>Vn(c)+.25)return{pass:!1,info:`arrivo lontano ${a}->${c}: dist=${u.toFixed(2)} > r=${Vn(c)}`};d>s&&(s=d,o=`${a}->${c}`)}return{pass:!0,info:`${r.length} cammini ok, max ${s} tick su ${o}`}}function Lg(){const{sim:n,player:e}=Ie(4402,[{id:"p1",name:"P1",color:1,x:18,z:-2,relations:{},agenda:[{node:"vic_n",dwell:999}]},{id:"p2",name:"P2",color:2,x:-32,z:8,relations:{},agenda:[{node:"svc_in",dwell:999}]}]),[t,i]=n.npcs;t.dwellLeft=0,i.dwellLeft=0;let r=!1,s=!1,o=0;for(;o<1200&&(kt(n,e,Ua),!r&&t.state==="dwell"&&t.agendaIdx>=1&&(r=!0),!s&&i.state==="dwell"&&i.agendaIdx>=1&&(s=!0),!(r&&s));o++);const a=Math.hypot(Fe.nodes.vic_n.x-t.x,Fe.nodes.vic_n.z-t.z),c=Math.hypot(Fe.nodes.svc_in.x-i.x,Fe.nodes.svc_in.z-i.z),l=t.state==="walk"&&t.pathIdx<t.path.length,d=i.state==="walk"&&i.pathIdx<i.path.length;return{pass:r&&s&&!l&&!d&&a<=Vn("vic_n")+.25&&c<=Vn("svc_in")+.25,info:`vic_n arrived=${r} d=${a.toFixed(2)} state=${t.state} | svc_in arrived=${s} d=${c.toFixed(2)} state=${i.state} | ticks=${o}`}}function Ig(){const n=(o,a,c)=>{const l=Kl(0,0);return Jl(l,{axis:()=>({x:a,z:c}),run:()=>!1},o,.2,[]),l},e=n(0,1,0),t=n(Math.PI/2,1,0),i=n(0,0,-1),r=n(Math.PI/2,0,-1);return{pass:e.x<-.1&&Math.abs(e.z)<1e-9&&t.z>.1&&Math.abs(t.x)<1e-9&&i.z>.1&&Math.abs(i.x)<1e-9&&r.x>.1&&Math.abs(r.z)<1e-9,info:`D@0=(${e.x.toFixed(2)},${e.z.toFixed(2)}) D@90=(${t.x.toFixed(2)},${t.z.toFixed(2)}) W@0=(${i.x.toFixed(2)},${i.z.toFixed(2)}) W@90=(${r.x.toFixed(2)},${r.z.toFixed(2)})`}}function Dg(){const{sim:n,player:e}=Ie(4405,[{id:"cur",name:"Cur",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}]),t=n.npcs[0];t.state="curious",t.gotoX=12,t.gotoZ=20;const i=Jo(t.gotoX,t.gotoZ,"b2");let r=!1,s=!1,o=0;for(;o<600;o++)if(kt(n,e,Ua),t.gotoX!=null&&!Jo(t.gotoX,t.gotoZ,"b2")&&(r=!0),t.state==="dwell"){s=!0;break}return{pass:i&&r&&s,info:`startIn=${i} sanitized=${r} arrived=${s} ticks=${o} state=${t.state}`}}function Ug(){const n=[{id:"s1",name:"S1",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]},{id:"s2",name:"S2",color:2,x:.5,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}],e=()=>Ie(4406,n),t=e(),i=e();for(const l of[t,i])for(const d of l.sim.npcs)d.state="dwell",d.dwellLeft=1e9;ye(t.sim,t.player,100),ye(i.sim,i.player,100);const[r,s]=t.sim.npcs,o=Math.hypot(r.x-s.x,r.z-s.z),a=Et(t.sim),c=Et(i.sim);return{pass:o>=.69&&a===c,info:`dist 0.500 -> ${o.toFixed(3)}, hash ${a===c?"uguale":`diverso ${a}!=${c}`}`}}function Ng(){return[Li("nav_no_collider_conflicts",Cg),Li("nav_arrival_reachable",Pg),Li("nav_pole_reproduction",Lg),Li("movement_camera_sign",Ig),Li("goto_sanitized",Dg),Li("separation_deterministic",Ug)]}const Yn=.05,cl=Object.keys(Fe.nodes);function zg(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16)}function Fg(n){return{id:n.id,x:+n.x.toFixed(3),z:+n.z.toFixed(3),yaw:+n.yaw.toFixed(3),state:n.state,agendaIdx:n.agendaIdx,dwellLeft:+n.dwellLeft.toFixed(3),agenda:n.agenda,agendaBlock:n.agendaBlock??null,path:n.path,pathIdx:n.pathIdx,fleeNode:n.fleeNode,relations:n.relations,relType:n.relType??{},trust:n.trust,mournT:n.mournT??0,gotoX:n.gotoX,gotoZ:n.gotoZ,memory:n.memory,memTier:n.memTier??{},memAt:n.memAt??{},beliefs:[...n.beliefs.entries()].sort((e,t)=>e[0]<t[0]?-1:1),level:n.level,thinkAt:+n.thinkAt.toFixed(3),alertedBy:n.alertedBy,talkT:n.talkT??0,gaze:n.gaze??{}}}function Et(n){const e={t:+n.t.toFixed(3),rng:n.rng.state,npcs:n.npcs.map(Fg),journal:n.journal.events,unseen:n.unseen.map(t=>t.id)};return zg(JSON.stringify(e))}function at(n,e){const t=[];for(let i=0;i<e;i++){const r=[],s=3+Math.floor(n.next()*3);for(let c=0;c<s;c++)r.push({node:cl[Math.floor(n.next()*cl.length)],dwell:2+Math.floor(n.next()*6)});const o=Fe.nodes[r[0].node],a={};t.push({id:`syn${i}`,name:`Syn ${i}`,color:8947848,x:o.x+n.next()*2-1,z:o.z+n.next()*2-1,agenda:r,relations:a})}for(let i=0;i<e;i++)for(let r=i+1;r<e;r++)if(n.next()<.2){const s=+(.2+n.next()*.6).toFixed(2);t[i].relations[t[r].id]=s,t[r].relations[t[i].id]=s}return t}function Ie(n,e){const t=Ve(n),i=ps(),r=ws(),s=yr(),o=e.map(c=>Ki(c,t));return{sim:Zl(o,i,r,s,t,{}),rng:t,player:{x:0,z:0}}}function ye(n,e,t){for(let i=0;i<t;i++)kt(n,e,Yn)}function dt(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function kg(){const{sim:n,player:e}=Ie(1001,at(Ve(7),2)),[t,i]=n.npcs;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=999,i.x=-40,i.z=0,i.yaw=-Math.PI/2,i.state="dwell",i.dwellLeft=999,e.x=37,e.z=21.5,ot(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),ye(n,e,60);const r=!Qt.toString().includes("journal"),s=t.beliefs.has("ev1")&&t.beliefs.get("ev1").channel==="seen",o=!i.beliefs.has("ev1")&&i.memory.length===0,a=n.journal.byId("ev1").witnesses;return{pass:r&&s&&o&&a.includes(t.id)&&!a.includes(i.id),info:`staticClean=${r} witnessSeen=${s} farIgnorant=${o} witnesses=[${a}]`}}function Og(){const{sim:n,player:e}=Ie(2002,at(Ve(8),3)),[t,i,r]=n.npcs;t.x=35,t.z=21,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=999,i.x=-40,i.z=0,i.state="dwell",i.dwellLeft=999,r.x=-45,r.z=-5,r.state="dwell",r.dwellLeft=999,e.x=37,e.z=21,ot(n,"theft",{severity:.6,x:37,z:21,actorId:"player",place:"piazza"}),ye(n,e,60);const s=t.beliefs.has("ev1"),o=i.beliefs.has("ev1"),a=r.beliefs.has("ev1");return{pass:s&&!o&&!a,info:`A=${s} B=${o} C=${a}`}}function Bg(){const{sim:n,player:e}=Ie(3003,at(Ve(9),3)),[t,i,r]=n.npcs;t.relations[i.id]=.9,i.relations[t.id]=.9,i.relations[r.id]=.9,r.relations[i.id]=.9,e.x=36,e.z=21;for(const[d,u]of[[t,35],[i,33.2],[r,39]])d.x=u,d.z=21,d.yaw=0,d.state="dwell",d.dwellLeft=9999;ft(t.beliefs,"evX",ct({kind:"theft",severity:.2,px:37,pz:21,place:"piazza",actor:"sconosciuto",channel:"seen",confidence:.9,t:0,provenance:[]}),t.id),Xt(t,"evX"),ye(n,e,600);const s=i.beliefs.get("evX"),o=r.beliefs.get("evX"),a=s&&s.channel==="hearsay"&&s.provenance[0]===t.id&&s.provenance[s.provenance.length-1]===t.id,c=o&&o.channel==="hearsay"&&o.provenance[0]===t.id&&o.provenance[o.provenance.length-1]===i.id,l=s&&o&&o.confidence<s.confidence&&s.confidence<.9;return{pass:!!a&&!!c&&!!l,info:`Bprov=${JSON.stringify(s?.provenance)} Cprov=${JSON.stringify(o?.provenance)} confs=0.90/${s?.confidence?.toFixed(2)}/${o?.confidence?.toFixed(2)}`}}function Hg(){const n=()=>Ie(4242,at(Ve(11),12)),e=r=>{const{sim:s,player:o}=r;for(let a=0;a<600;a++)o.x=Math.sin(a/50)*20,o.z=Math.cos(a/70)*20,a===100&&ot(s,"theft",{severity:.7,x:10,z:10,actorId:"player",place:"strada"}),a===300&&ot(s,"disturbance",{severity:.45,x:-20,z:11,actorId:"player",place:"bar"}),kt(s,o,Yn);return Et(s)},t=e(n()),i=e(n());return{pass:t===i,info:`h1=${t} h2=${i}`}}function Gg(){const n=Ie(5555,at(Ve(12),8)),{sim:e,player:t}=n;for(let a=0;a<300;a++)a===50&&ot(e,"theft",{severity:.8,x:5,z:5,actorId:"player",place:"strada"}),kt(e,t,Yn);const i=Et(e),r={t:e.t,rngState:e.rng.state,unseen:e.unseen.map(a=>a.id),pruneAt:e.pruneAt,journal:e.journal.serialize(),npcs:e.npcs.map(Sr)},s=Ie(9999,at(Ve(12),8));s.sim.rng.state=r.rngState,s.sim.t=r.t,s.sim.pruneAt=r.pruneAt,s.sim.journal.restore(r.journal),s.sim.unseen.length=0;for(const a of r.unseen){const c=s.sim.journal.byId(a);c&&s.sim.unseen.push(c)}r.npcs.forEach((a,c)=>Er(s.sim.npcs[c],a));const o=Et(s.sim);return{pass:i===o,info:`pre=${i} post=${o}`}}function Vg(){const n={version:1,seed:7,rngState:42,t:12.5,player:{x:1,z:2,yaw:0},npcs:[{id:"anna",x:0,z:0,yaw:0,state:"alerted",agendaIdx:0,dwellLeft:1,relations:{},memory:["ev1"],beliefs:[["ev1",{fact:"una persona ha preso il pacco in piazza",source:"seen",confidence:.8,t:10,error:null}]],alertedBy:"ev1",alertT:11,gossipAt:0}],journal:{seq:1,events:[{id:"ev1",t:10,type:"theft",severity:.6,x:37,z:21.5,actorId:"player",place:"piazza",witnesses:["anna"]}]},world:{packageTaken:!0}},e=td(JSON.parse(JSON.stringify(n)),n.journal.events),t=e.npcs[0].beliefs[0][1];return{pass:e.version===2&&t.kind==="theft"&&t.channel==="seen"&&t.px===37&&Array.isArray(t.provenance)&&e.npcs[0].state==="dwell"&&e.npcs[0].fleeNode===null,info:`v=${e.version} kind=${t.kind} ch=${t.channel} px=${t.px} state=${e.npcs[0].state}`}}function Wg(){const n=new Map,e=ft(n,"e1",ct({kind:"theft",channel:"seen",confidence:.9,t:0,provenance:["a"]}),"b"),t=n.get("e1").confidence,i=ft(n,"e1",ct({kind:"theft",channel:"hearsay",confidence:.3,t:1,provenance:["c"]}),"b"),r=n.get("e1").confidence<=.9,s=ft(n,"e1",ct({kind:"theft",channel:"hearsay",confidence:.9,t:2,provenance:["b"]}),"b"),o=[],a=(c,l)=>{l!=="ignored"&&o.push(c)};return a("e1",e),a("e1",i),{pass:e==="stored"&&i==="merged"&&r&&s==="ignored"&&o.length===2,info:`r1=${e} r2=${i} r3=${s} conf=${t}->${n.get("e1").confidence} mem=${o.length}`}}function Xg(){const n=ct({kind:"theft",channel:"hearsay",confidence:.6,t:0,provenance:["a"]}),e=nn(n,1e3),t=new Map([["e1",n]]),i=Aa(t,1e5);return{pass:e<.6&&e>0&&i===1&&t.size===0,info:`eff(1000s)=${e.toFixed(3)} pruned=${i}`}}function $g(){const{sim:n,player:e}=Ie(6666,at(Ve(13),5));for(const i of n.npcs)i.x=-45,i.z=-45,i.state="dwell",i.dwellLeft=9999;e.x=45,e.z=45,ot(n,"theft",{severity:.9,x:45,z:45,actorId:"player",place:"piazza"}),ye(n,e,60);const t=n.npcs.filter(i=>i.beliefs.size>0).length;return{pass:t===0&&n.journal.byId("ev1").witnesses.length===0,info:`learned=${t}`}}function qg(){const{sim:n,player:e}=Ie(7777,at(Ve(14),1)),[t]=n.npcs;e.x=-49,e.z=-49,t.x=49,t.z=49,t.state="dwell",t.dwellLeft=1,t.agenda=[{node:"pia_c",dwell:1},{node:"road_w",dwell:1}],t.agendaIdx=0,ye(n,e,200);const i=t.level;return{pass:i==="L3",info:`level=${i} agendaIdx=${t.agendaIdx} pos=(${(+t.x).toFixed(1)},${(+t.z).toFixed(1)})`}}function Yg(){const{sim:n,player:e}=Ie(8888,at(Ve(15),80));e.x=0,e.z=0,ot(n,"theft",{severity:.9,x:0,z:0,actorId:"player",place:"strada"});const t=performance.now();ye(n,e,200);const i=performance.now()-t;return{pass:n.counts.L1<=12,info:`200ticks80npc=${i.toFixed(0)}ms L1=${n.counts.L1} L2=${n.counts.L2} L3=${n.counts.L3}`}}function jg(){const n=a=>a.replace(/\/\/[^\n]*/g,"").replace(/\/\*[\s\S]*?\*\//g,""),e=[];for(const[a,c]of[["think",Qt],["policeThink",ra],["awarenessTick",sa]]){const l=n(c.toString());for(const d of["journal","witnesses","byId","unseen","worldTruth"])l.includes(d)&&e.push(`${a}:${d}`)}const t=Ie(9101,at(Ve(31),2)),i=t.sim.npcs[0];i.x=0,i.z=0,i.yaw=0,i.awareness=1;const r={t:1,navAdj:yr(),rng:Ve(32),dtThink:.25,stats:{perceptionChecks:0,gossipOps:0,pathComputations:0,thinkRuns:0,pruned:0,thinkByLevel:{L1:0,L2:0,L3:0}},nearby:()=>[],player:{x:0,z:5},playerStealth:{x:0,z:5,crouch:!1,running:!1},colliders:t.sim.colliders,corpsesNear:()=>null,get journal(){throw new Error("leak:journal")},get witnesses(){throw new Error("leak:witnesses")},get worldTruth(){throw new Error("leak:worldTruth")},get policeState(){throw new Error("leak:policeState")}},s=new Proxy(t.sim,{get(a,c){if(c==="journal"||c==="witnesses"||c==="worldTruth"||c==="unseen")throw new Error("leak:"+String(c));return a[c]}});let o="ok";try{Qt(i,r);const a=Ki({id:"copX",name:"Cop",color:1,role:"police",x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:1}]},Ve(33));ra(a,r),sa(s,{x:0,z:5,crouch:!1,running:!1},.05)}catch(a){o=String(a.message??a)}return{pass:e.length===0&&o==="ok",info:`srcLeaks=[${e}] runtime=${o}`}}function Zg(){const n=()=>Ie(3030,at(Ve(41),30)),e=r=>{const{sim:s,player:o}=r;for(let a=0;a<800;a++)o.x=Math.sin(a/40)*25,o.z=Math.cos(a/55)*20,o.running=a%97<30,a===120&&ot(s,"theft",{severity:.7,x:12,z:12,actorId:"player",place:"strada"}),a===360&&ot(s,"disturbance",{severity:.45,x:-18,z:11,actorId:"player",place:"bar"}),a===620&&ot(s,"kill",{severity:1,x:37,z:20,actorId:"player",victimId:"syn5",place:"piazza"}),kt(s,o,Yn);return Et(s)},t=e(n()),i=e(n());return{pass:t===i,info:`h1=${t} h2=${i}`}}function Kg(){const n={relations:{b:.8},relType:{b:"family"}},e={relations:{d:.8},relType:{}},t={relations:{f:.9},relType:{f:"enemy"}},i={relations:{q:.2},relType:{q:"family"}},r=An(n,"b")==="family"&&An(e,"d")==="acquaintance"&&An({relations:{},relType:{}},"y")==="unknown"&&zi(n,"b")===.8&&zi(t,"f")===0&&dr(n,"b")===600&&dr(e,"d")===60&&dr(i,"q")===0&&ss(n,"b")===1&&ss(e,"d")===.7&&ss(t,"f")===0,s=m=>({t:0,navAdj:yr(),rng:Ve(77),dtThink:.25,stats:{gossipOps:0,pathComputations:0,thinkRuns:0,perceptionChecks:0,pruned:0},nearby:()=>[],player:{x:0,z:0},colliders:m.sim.colliders,corpsesNear:()=>null}),o=()=>ct({kind:"kill",severity:1,px:5,pz:5,place:"piazza",subject:"kin",channel:"seen",confidence:.8,t:0,provenance:[]}),a=Ie(6001,at(Ve(51),1)),c=a.sim.npcs[0];c.relations={kin:.8},c.relType={kin:"family"},ft(c.beliefs,"evK",o(),c.id),Qt(c,s(a));const l=c.state==="curious"&&c.gotoX===5&&(c.mournT??0)>=600,d=Ie(6002,at(Ve(52),1)),u=d.sim.npcs[0];ft(u.beliefs,"evK",o(),u.id),Qt(u,s(d));const f=u.state==="alerted"&&u.fleeNode!==null&&(u.mournT??0)===0;return{pass:r&&l&&f,info:`unit=${r} helped=${l}(${c.state},mourn=${c.mournT}) flees=${f}(${u.state})`}}function Jg(){const n=jl.find(m=>m.id==="bruno"),e=Ie(7101,[n]),t=e.sim.npcs[0],i={t:0,navAdj:yr(),rng:Ve(71),dtThink:.25,stats:{gossipOps:0,pathComputations:0,thinkRuns:0,perceptionChecks:0,pruned:0},nearby:()=>[],player:{x:0,z:0},colliders:e.sim.colliders,corpsesNear:()=>null};i.t=25,Qt(t,i);const r=t.agendaBlock==="svc_in"&&t.agenda[0].node==="svc_in";i.t=275,Qt(t,i);const s=t.agendaBlock==="bar_in"&&t.agenda[0].node==="bar_in";i.t=450,Qt(t,i);const o=t.agendaBlock==="b5_door"&&t.agenda[0].node==="b5_door";t.state="alerted",t.fleeNode="road_e",i.t=25,Qt(t,i);const a=t.agendaBlock==="b5_door";t.state="dwell",t.alertedBy=null,t.fleeNode=null,Qt(t,i);const c=t.agendaBlock==="svc_in",l=Sr(t),d=Ki(n,Ve(72));Er(d,l);const u=d.agendaBlock===t.agendaBlock&&JSON.stringify(d.agenda)===JSON.stringify(t.agenda),f=cr(0)===8&&cr(600)===8&&cr(275)===19&&cr(450)===2;return{pass:r&&s&&o&&a&&c&&u&&f,info:`work=${r} social=${s} home=${o} interrupt=${a} resume=${c} serial=${u} clock=${f}`}}function Qg(){const e=Ie(8101,at(Ve(61),1)).sim.npcs[0],t=(m,g,v,p=null)=>{ft(e.beliefs,m,ct({kind:g,severity:v,subject:p,px:0,pz:0,place:"piazza",channel:"seen",confidence:.8,t:0,provenance:[]}),e.id),Xt(e,m)};t("evKill","kill",1,"kin"),t("evNoise","noise",.2),t("evTiny","disturbance",.2),t("evOrd","theft",.5);const i=e.memTier.evKill===2&&e.memTier.evNoise===0&&e.memTier.evTiny===0&&e.memTier.evOrd===1;e.beliefs.delete("evKill"),e.beliefs.delete("evNoise"),e.beliefs.delete("evTiny"),e.beliefs.delete("evOrd");const r=os(e,70),s=e.memory.includes("evKill")&&!e.memory.includes("evNoise")&&!e.memory.includes("evTiny")&&!e.memory.includes("evOrd"),o=e.memTier.evNoise===void 0&&e.memAt.evNoise===void 0,a=os(e,950),c=e.memory.length===0&&Object.keys(e.memTier).length===0&&Object.keys(e.memAt).length===0,d=Ie(8102,at(Ve(62),1)).sim.npcs[0];for(let m=0;m<200;m++){const g="e"+m;ft(d.beliefs,g,ct({kind:"noise",severity:.2,px:0,pz:0,place:"p",channel:"heard",confidence:.3,t:m,provenance:[]}),d.id),Xt(d,g),m%40===0&&os(d,m)}const u=d.memory.length<=64,f=Object.keys(d.memTier).length<=d.memory.length&&Object.keys(d.memAt).length<=d.memory.length;return{pass:i&&s&&o&&c&&u&&f,info:`tiers=${i} r1=${r} after70=${s} r2=${a} after950=${c} cap=${d.memory.length} maps=${Object.keys(d.memTier).length}`}}function ex(){const n=new Map;ft(n,"e1",ct({kind:"theft",channel:"hearsay",confidence:.8,t:0,px:0,pz:0,provenance:["a"]}),"self"),ft(n,"e1",ct({kind:"theft",channel:"hearsay",confidence:.7,t:1,px:50,pz:50,provenance:["b"]}),"self");const e=n.get("e1"),t=(e.contra??0)===1&&e.confidence<.8&&e.px===0;ft(n,"e1",ct({kind:"theft",channel:"seen",confidence:.6,t:2,px:48,pz:52,actor:"uomo in verde",provenance:[]}),"self");const i=n.get("e1"),r=i.channel==="seen"&&i.px===48&&(i.contra??0)===2;ft(n,"e1",ct({kind:"theft",channel:"hearsay",confidence:.9,t:3,px:0,pz:0,actor:"persona rossa",provenance:["x"]}),"self");const s=n.get("e1"),o=s.channel==="seen"&&s.px===48&&s.confidence===.6,a=new Map;ft(a,"e2",ct({kind:"theft",channel:"seen",confidence:.9,t:0,provenance:["a"]}),"self"),ft(a,"e2",ct({kind:"theft",channel:"hearsay",confidence:.4,t:100,px:0,pz:0,provenance:["c"]}),"self");const c=a.get("e2"),l=c.confidence===.9&&c.t>0&&c.t<=100;return{pass:t&&r&&o&&l,info:`crumble=${t}(contra=${e.contra},conf=${e.confidence?.toFixed(2)}) seenWins=${r} seenHolds=${o} corrob=${l}(t=${c.t},conf=${c.confidence})`}}function tx(){const{sim:n,player:e}=Ie(3011,at(Ve(13),4)),[t,i,r,s]=n.npcs;t.relations[i.id]=.9,i.relations[t.id]=.9,i.relations[r.id]=.9,r.relations[i.id]=.9,r.relations[s.id]=.9,s.relations[r.id]=.9;for(const[p,h]of[[t,-10],[i,-7],[r,-4],[s,-1]])p.x=h,p.z=0,p.yaw=0,p.state="dwell",p.dwellLeft=9999;ft(t.beliefs,"evX",ct({kind:"theft",severity:.2,px:-8,pz:0,place:"strada",actor:"sconosciuto",channel:"seen",confidence:.9,t:0,provenance:[]}),t.id),Xt(t,"evX");const o=()=>[t,i,r,s].filter(p=>p.beliefs.has("evX")).length;ye(n,e,80);const a=o();ye(n,e,520);const c=o();ye(n,e,1800);const l=o(),d=s.beliefs.get("evX"),u=!!d&&d.channel==="hearsay"&&d.provenance[0]===t.id&&d.provenance[d.provenance.length-1]===r.id,f=[t,i,r,s].some(p=>(p.talkT??0)>0),m=i.beliefs.get("evX"),g=r.beliefs.get("evX"),v=!!m&&!!g&&!!d&&d.confidence<g.confidence&&g.confidence<m.confidence&&m.confidence<.9;return{pass:a<=2&&c>=3&&l===4&&u&&v&&f,info:`early=${a} mid=${c} late=${l} Dprov=${JSON.stringify(d?.provenance)} talk=${f} confs=${m?.confidence?.toFixed(2)}/${g?.confidence?.toFixed(2)}/${d?.confidence?.toFixed(2)}`}}function nx(){const{sim:n,player:e}=Ie(4401,at(Ve(31),3)),[t,i,r]=n.npcs;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=9999,i.x=34.5,i.z=19.5,i.yaw=-Math.PI/2,i.state="dwell",i.dwellLeft=9999,r.x=-40,r.z=0,r.state="dwell",r.dwellLeft=9999,e.x=37,e.z=21.5,ot(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),kt(n,e,Yn);const s=t.beliefs.has("ev1");ye(n,e,10);const o=t.beliefs.get("ev1"),a=!!o&&o.channel==="seen"&&o.w!=null&&o.w<=1.5&&o.confidence>.5,c=!i.beliefs.has("ev1")&&!r.beliefs.has("ev1"),l=Ra(t,37,21.5,14,n.colliders,n.rng),d=l.heard&&o&&l.w>o.w&&l.confidence<o.confidence;ye(n,e,90);const u=Object.keys(t.gaze??{}).length===0&&Object.keys(i.gaze??{}).length===0;return{pass:!s&&a&&c&&d&&u,info:`instant=${s} w=${o?.w} conf=${o?.confidence?.toFixed(2)} heardW=${l.w} heardC=${l.confidence?.toFixed(2)} gazeClean=${u}`}}function ix(){const{sim:n,player:e}=Ie(6601,at(Ve(61),4)),[t,i,r,s]=n.npcs;for(const c of n.npcs)c.relations={},c.relType={},c.state="dwell",c.dwellLeft=9999;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,i.x=47,i.z=21.5,i.yaw=Math.PI,r.x=-40,r.z=0,s.x=0,s.z=-40,e.x=37,e.z=21.5,e.crouch=!0,ot(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),ye(n,e,600);const o=t.beliefs.has("ev1")&&t.beliefs.get("ev1").channel==="seen",a=!i.beliefs.has("ev1")&&!r.beliefs.has("ev1")&&!s.beliefs.has("ev1")&&i.memory.length===0&&r.memory.length===0&&s.memory.length===0;return{pass:o&&a,info:`aKnows=${o} noLeak=${a}`}}function rx(){const{sim:n,player:e}=Ie(5501,at(Ve(41),3)),[t,i,r]=n.npcs;for(const f of n.npcs)f.state="dwell",f.dwellLeft=9999;t.x=0,t.z=0,i.x=0,i.z=-50,r.x=50,r.z=50,e.x=0,e.z=20,ye(n,e,20);const s=t.level==="L1";let o=0,a=t.level;for(let f=0;f<10;f++)e.z=f%2===0?28:32,ye(n,e,10),t.level!==a&&(o++,a=t.level);e.x=0,e.z=8,ye(n,e,15);const c=i.level==="L2";let l=0,d=i.level;for(let f=0;f<10;f++)e.z=f%2===0?12:8,ye(n,e,10),i.level!==d&&(l++,d=i.level);const u=n.npcs.filter(f=>f.level==="L1").length<=12;return{pass:s&&c&&o===0&&l===0&&u,info:`startL1=${s} flips1=${o} startL2=${c} flips2=${l} L1count=${n.npcs.filter(f=>f.level==="L1").length}`}}function sx(){const{sim:n,player:e}=Ie(7710,at(Ve(51),2)),[t,i]=n.npcs;for(const d of n.npcs)d.state="dwell",d.dwellLeft=9999;t.x=40,t.z=30,t.agenda=[{node:"pia_c",dwell:1},{node:"road_w",dwell:1}],t.agendaIdx=0,i.x=-49,i.z=-49,e.x=-49,e.z=-49,ye(n,e,40);const r=t.level==="L3";e.x=38,e.z=28;const s=n.stats.thinkByLevel.L1;let o=0;for(let d=0;d<40;d++){const u=t.x,f=t.z;kt(n,e,Yn),o=Math.max(o,Math.hypot(t.x-u,t.z-f))}const a=t.level==="L1"||t.level==="L2",c=o<=.2,l=n.stats.thinkByLevel.L1>s;return{pass:r&&a&&c&&l,info:`wasL3=${r} now=${t.level} maxStep=${o.toFixed(3)} L1think=${n.stats.thinkByLevel.L1-s}`}}function ox(){const n=()=>Ie(7710,at(Ve(71),10)),e=(c,l,d)=>{for(let u=l;u<d;u++)c.player.x=Math.sin(u/40)*25,c.player.z=Math.cos(u/55)*25,u===120&&ot(c.sim,"theft",{severity:.7,x:5,z:5,actorId:"player",place:"strada"}),u===250&&ot(c.sim,"disturbance",{severity:.4,x:-15,z:10,actorId:"player",place:"bar"}),kt(c.sim,c.player,Yn)},t=n();e(t,0,300);const i={t:t.sim.t,rngState:t.sim.rng.state,unseen:t.sim.unseen.map(c=>c.id),pruneAt:t.sim.pruneAt,journal:t.sim.journal.serialize(),npcs:t.sim.npcs.map(Sr)};e(t,300,500);const r=Et(t.sim),s=()=>{const c=n();c.sim.rng.state=i.rngState,c.sim.t=i.t,c.sim.pruneAt=i.pruneAt,c.sim.journal.restore(i.journal),c.sim.unseen.length=0;for(const l of i.unseen){const d=c.sim.journal.byId(l);d&&c.sim.unseen.push(d)}return i.npcs.forEach((l,d)=>Er(c.sim.npcs[d],l)),e(c,300,500),Et(c.sim)},o=s(),a=s();return{pass:r===o&&o===a,info:`cont=${r} load1=${o} load2=${a}`}}async function ax(){const n=[dt("truth_isolation",kg),dt("divergent_knowledge",Og),dt("gossip_chain",Bg),dt("determinism_replay",Hg),dt("save_load_roundtrip",Gg),dt("merge_integrity",Wg),dt("migration_v1_v2",Vg),dt("belief_decay_prune",Xg),dt("no_witness_event",$g),dt("l3_coherence",qg),dt("scale_80_smoke",Yg),dt("truth_leak_static",jg),dt("determinism_30",Zg),dt("relations_typed",Kg),dt("schedule_routines",Jg),dt("memory_tiers",Qg),dt("contradiction_corrob",ex),dt("multi_hop_gossip",tx),dt("perception_quality",nx),dt("no_omniscienza",ix),dt("level_hysteresis",rx),dt("l3_to_l1_promotion",sx),dt("replay_post_load",ox),...Rg(),...Ng()];return{suite:"p0-foundation",passed:n.filter(t=>t.pass).length,total:n.length,tests:n,seedNote:"seed fissi per test"}}function cx(n,e=12345){const{sim:t,player:i}=Ie(e,at(Ve(e),n));i.x=0,i.z=0,ye(t,i,40),t.stats.perceptionChecks=0,t.stats.gossipOps=0,t.stats.pathComputations=0,t.stats.thinkRuns=0,t.stats.thinkByLevel={L1:0,L2:0,L3:0};let r=0;const s=400,o=performance.now();for(let d=0;d<s;d++)d===100&&ot(t,"theft",{severity:.8,x:5,z:5,actorId:"player",place:"strada"}),kt(t,i,Yn),r+=t.aiMs;const a=performance.now()-o;let c=0,l=0;for(const d of t.npcs)c+=d.memory.length,l+=d.beliefs.size;return{npcs:n,ticks:s,seed:e,simMsTotal:+a.toFixed(1),simMsPerTick:+(a/s).toFixed(3),aiMsPerTick:+(r/s).toFixed(3),perceptionChecks:t.stats.perceptionChecks,gossipOps:t.stats.gossipOps,pathComputations:t.stats.pathComputations,thinkRuns:t.stats.thinkRuns,thinkByLevel:{...t.stats.thinkByLevel},eventCount:t.journal.events.length,memoryCount:c,beliefCount:l,levels:{...t.counts},hash:Et(t)}}const ll=Object.freeze(Object.defineProperty({__proto__:null,buildWorld:Ie,runAllTests:ax,runBench:cx,runTicks:ye,snapshotHash:Et,synthRoster:at},Symbol.toStringTag,{value:"Module"}));function lx(n){const e={seed:n,rng:Ve(n),journal:ps(),colliders:ws(),navAdj:yr(),npcs:[],player:Kl(37,2),pk:Ql(),interactables:Wl(),caught:!1,contract:Ia("marco",900),ended:null,worldFlags:{packageTaken:!0},errors:[],camYaw:0,camPitch:.5,fps:0,frameMs:0},t=Xl(e.colliders);(t.nodeViolations.length||t.edgeViolations.length)&&console.warn("[nav] waypoint in conflitto con collider",t),e.sim=Zl(e.npcs,e.journal,e.colliders,e.navAdj,e.rng,{onWitness:(r,s)=>{r.alertT=e.sim.t,(s.type==="kill"||s.type==="sabotage"||s.type==="found_corpse")&&(e.hud?.toast(`👁 ${r.name} ha visto qualcosa!`),s.type==="kill"&&e.audio?.scream())},onGossip:(r,s)=>e.hud?.toast(`💬 ${r.name} ha raccontato qualcosa a ${s.name}`),onInterview:(r,s)=>e.hud?.toast(`👮 ${r.name} interroga ${s.name}`),onPoliceState:(r,s,o)=>{(o==="ALERT"||o==="SEARCHING")&&e.audio?.sting()},onCaught:()=>{e.caught=!0,e.ended="caught",document.getElementById("caught").style.display="flex",e.audio?.sting()},onArrest:(r,s)=>{e.hud?.toast(`👮 ${r.name} ha arrestato ${s.name}: è lui il sospetto`),e.audio?.sting()}});for(const r of jl)e.npcs.push(Ki(r,e.rng));ed(e.pk,"marco"),e.renderer=w_(document.getElementById("app")),e.player.mesh=ca(3129201,!0,"player"),e.renderer.scene.add(e.player.mesh);for(const r of e.npcs)r.mesh=ca(r.color,!1,r.role),r.mesh.position.set(r.x,0,r.z),e.renderer.scene.add(r.mesh);e.pkg=null,e.syncInteractables=()=>ul(e),e.inputHandle=v_(),e.input=e.inputHandle.api,e.hud=F_(e),e.audio=k_(),ul(e);const i=r=>{e.errors.push(String(r.message??r.error??"errore").slice(0,120))};return addEventListener("error",i),e.dispose=()=>{removeEventListener("error",i),e.inputHandle.dispose(),e.hud.dispose(),e.audio?.dispose(),e.renderer.dispose();for(const r of e.npcs)r.mesh=null;e.player.mesh=null},e}function dx(n,e){const t=at(n.rng,e).filter(i=>!n.npcs.some(r=>r.id===i.id));for(const i of t){const r=Ki(i,n.rng);r.mesh=ca(10066329,!1,"civilian"),r.mesh.position.set(r.x,0,r.z),n.renderer.scene.add(r.mesh),n.npcs.push(r)}return t.length}const ux={theft:"un furto",disturbance:"un trambusto",assault:"un’aggressione",kill:"un omicidio",found_corpse:"un cadavere",noise:"un rumore",sabotage:"un sabotaggio"},fx=new Set(["trap","fall","accident"]);function ad(n,e,t){if(!e||e.state==="dead")return null;e.state="dead",e.speed=0,e.fleeNode=null,e.gotoX=null,e.gotoZ=null,e.path=[];const i=pi(e.x,e.z),r=fx.has(t),s=ot(n.sim,r?"accident":"kill",{severity:r?.35:1,x:e.x,z:e.z,actorId:r?null:t==="melee"?"player":null,victimId:e.id,place:i});return e.death={evId:s.id,t:n.sim.t,px:e.x,pz:e.z,kind:r?"accident":"kill",method:t},cd(n,e.x,e.z,t==="melee"?18:22,.35),n.audio?.thud(),s}function cd(n,e,t,i,r){return Ca(n.sim,e,t,i,r)}function hx(n){const e=n.player;if(n.sim.t-(e.attackCd??-99)<1.2)return null;e.attackCd=n.sim.t,e.attackT=n.sim.t;let t=null,i=O_;for(const s of n.npcs){if(s.state==="dead")continue;const o=Math.hypot(s.x-e.x,s.z-e.z);o<i&&(i=o,t=s)}if(!t)return n.audio?.swing(),null;const r=qi(n.sim,n.player,t,n.sim.rng.next());return r.hit?ad(n,t,"melee"):(n.audio?.swing(),r)}function px(n){const e=n.player;n.sim.t-(e.whistleCd??-99)<3||(e.whistleCd=n.sim.t,n.audio?.whistle(),cd(n,e.x,e.z,14,.2))}function mx(n){const e=n.interactables.yardstack,t=n.player;return e.state!=="ok"||Math.hypot(t.x-e.x,t.z-e.z)>2.8?null:(e.state="armed",n.syncInteractables(),n.audio?.clank(),ot(n.sim,"sabotage",{severity:.5,x:e.x,z:e.z,actorId:"player",place:"svc_in"}),n.hud.toast("⚙ Catasta sabotata. Crollerà su chi ci passa sotto…"),!0)}function _x(n){const e=n.interactables.yardstack;if(e.state==="armed"){for(const t of n.npcs)if(t.state!=="dead"&&Math.hypot(t.x-e.x,t.z-e.z)<2.2){e.state="fallen",n.syncInteractables(),n.audio?.crash(),ad(n,t,"trap"),n.hud.toast("💥 La catasta è crollata!");return}}}function gx(n,e){ed(n.pk,e.id);const t=[...e.beliefs.values()].pop();let i="Tutto tranquillo, come al solito.";if(t){const r=`${ux[t.kind]??"qualcosa di strano"} ${t.place}`;i=t.channel==="seen"?`Ho visto ${r}!`+(t.error?" (non ricordo bene i dettagli)":""):`Gira voce che ${r}…`}n.hud.toast(`🗣 ${e.name}: "${i}"`,4200)}function xx(n){const e=n.player;let t=null,i=2.5;for(const r of n.npcs){if(r.state==="dead")continue;const s=Math.hypot(r.x-e.x,r.z-e.z);s<i&&(i=s,t=r)}return t?{kind:"npc",npc:t}:null}function vx(n,e){if(n.ended)return n.ended;n.ended=e;const t=document.getElementById("caught");if(t){const i=t.querySelector("h1"),r=t.querySelector("p");e==="window"?(i.textContent="Finestra chiusa",r.textContent="Il tempo del contratto è finito e il bersaglio è ancora vivo. Studiare troppo a lungo costa la missione."):e==="done"&&(i.textContent="Contratto concluso",r.textContent="Il bersaglio è stato eliminato entro la finestra. Ora resta solo capire se qualcuno ti ha visto."),t.style.display="flex"}return n.audio?.sting(),e}const ao=1/20;function Mx(n,e){const t=Math.min(e,.1),i=n.input.consumeLook();n.camYaw-=i.dx*.005,n.camPitch=Math.max(.08,Math.min(1.1,n.camPitch+i.dy*.003)),Jl(n.player,n.input,n.camYaw,t,n.colliders),n.stepAcc=(n.stepAcc??0)+n.player.speed*t;const r=n.player.crouch?1.6:n.player.running?2.6:2;n.stepAcc>r&&n.player.speed>.5&&(n.stepAcc=0,n.audio?.step(n.player.running)),n.acc=(n.acc??0)+t;let s=0;for(;n.acc>=ao&&s<5;)kt(n.sim,n.player,ao),n.acc-=ao,s++;if(T_(n.pk,n.player,n.camYaw,n.npcs,n.colliders,n.sim.t,t),_x(n),n.player.running)for(const C of n.npcs){if(C.state==="dead"||C.role==="police")continue;const T=n.player.x-C.x,b=n.player.z-C.z;if(T*T+b*b>36)continue;let R=Math.atan2(T,b)-C.yaw;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<Math.PI/3&&(C.suspT=n.sim.t)}const o=xx(n);n.player.interactTarget=o;const a=n.interactables.yardstack,c=Math.hypot(n.player.x-a.x,n.player.z-a.z)<2.8,l=oa(n.sim,n.player.x,n.player.z,2.2);if(l?n.hud.setPrompt("Premi <b>E</b> per nascondere il corpo"):c&&a.state==="ok"?n.hud.setPrompt("Premi <b>E</b> per sabotare la catasta"):o?n.hud.setPrompt(`Premi <b>E</b> per parlare con <b>${o.npc.name}</b> · <b>F</b> colpisci`):n.hud.setPrompt(null),n.input.wasPressed("KeyE")&&(l&&ms(n.sim,l)?n.hud.toast("🩸 Corpo nascosto: nessuno lo troverà guardandolo da lontano"):c&&a.state==="ok"?mx(n):o&&gx(n,o.npc)),n.input.wasPressed("KeyF")&&hx(n),n.input.wasPressed("KeyQ")&&px(n),n.input.wasPressed("KeyC")&&(n.player.crouch=!n.player.crouch,n.hud.toast(n.player.crouch?"🤫 Accovacciato: meno visibile, più lento":"🚶 In piedi")),n.input.wasPressed("KeyJ")&&n.hud.togglePanel(),n.input.wasPressed("KeyN")&&n.hud.toggleNotebook(),n.input.wasPressed("F3")&&n.hud.toggleDebug(),document.getElementById("notebook").style.display==="block"&&(n._nTick=(n._nTick??0)+1)%20===0&&n.hud.renderNotebook(),!n.ended){const C=lr(n.sim,n.contract);C!=="running"&&vx(n,C)}const d=ui(n.sim,n.contract),u=Math.ceil(d.remaining);if(n._clockSec!==u){n._clockSec=u;const C=document.getElementById("objective");C&&(n._objBase==null&&(n._objBase=C.innerHTML),C.innerHTML=`${n._objBase} <b>⏱ ${id(d.remaining)}</b>`);const T=document.getElementById("notebook");T&&T.style.display==="block"&&n.hud?.renderNotebook()}const f=n.player.mesh;f.position.set(n.player.x,dl(n.player),n.player.z),f.rotation.y=n.player.yaw,f.scale.y=n.player.crouch?.8:1,ol(f,n.player.speed,n.sim.t,n.sim.t-(n.player.attackT??-99)<.45);for(const C of n.npcs){C.mesh.position.set(C.x,C.state==="dead"?.35:dl(C),C.z),C.mesh.rotation.y=C.yaw,C.mesh.rotation.z=C.state==="dead"?Math.PI/2:0,C.state!=="dead"&&ol(C.mesh,C.speed,n.sim.t,!1);const T=n.sim.t-(C.alertT??-99)<20,b=n.sim.t-(C.suspT??-99)<3;C.mesh.userData.mark.visible=C.state!=="dead"&&(C.state==="alerted"||b||T&&C.beliefs.size>0),C.mesh.visible=C.state!=="arrested"&&!(C.state==="dead"&&C.hidden)}const m=Jo(n.player.x,n.player.z,"bar"),g=m?3.2:7,v=Math.sin(n.camYaw),p=Math.cos(n.camYaw);let h=1;if(!m){const C=-v*Math.cos(n.camPitch)*g,T=-p*Math.cos(n.camPitch)*g;for(const b of[1,.85,.7,.55,.4,.28]){if(!yx(n.player.x+C*b,n.player.z+T*b,n.colliders)){h=b;break}h=b}}const w=n.player.x-v*Math.cos(n.camPitch)*g*h,_=n.player.z-p*Math.cos(n.camPitch)*g*h,x=m?2.5:Math.sin(n.camPitch)*g*h+1.6;n.renderer.camera.position.set(w,x,_),n.renderer.camera.lookAt(n.player.x+v*2.2,1.2,n.player.z+p*2.2),n.renderer.renderer.render(n.renderer.scene,n.renderer.camera),n.hud.tickToast()}function yx(n,e,t){return t.some(i=>i.high&&n>i.minX-.3&&n<i.maxX+.3&&e>i.minZ-.3&&e<i.maxZ+.3)}function dl(n){return n.speed>.2?Math.abs(Math.sin(performance.now()/130))*.06:0}function ul(n){const e=n.interactables.yardstack,t=n.renderer.scene.getObjectByName("yardstack_top"),i=n.renderer.scene.getObjectByName("yardstack");!t||!i||(e.state==="fallen"?(i.rotation.x=Math.PI/2-.15,i.position.y=.6,t.rotation.x=Math.PI/2,t.position.y=.4):e.state==="armed"?t.rotation.z=.28:(i.rotation.x=0,i.position.y=1.2,t.rotation.x=0,t.rotation.z=0,t.position.y=2.9))}async function co(n){try{await L_(n),n.hud.toast("💾 Salvato in IndexedDB")}catch(e){n.hud.toast("❌ Salvataggio fallito: "+String(e.message??e).slice(0,100))}}let Ke=null,mr=!1,fr=0,cs=0,la=0,lo=0,jr=0,ls=0,Zr=0,ld=0;function Sx(){return mr}function Ex(){return ld}function ds(){mr=!1,fr&&cancelAnimationFrame(fr),fr=0,cs&&clearInterval(cs),cs=0;const n=document.getElementById("caught");if(n&&(n.style.display="none"),Ke){try{Ke.dispose()}catch{}Ke=null}window.__p0=null}async function Kr(n){ds(),ld++,document.getElementById("start-screen").style.display="none";let e=null;n||(e=await nd());const t=n?Math.random()*1e9|0:e?.seed??Math.random()*1e9|0;localStorage.setItem("quartiere-p0-lastseed",String(t||"continue")),Ke=lx(t||Math.random()*1e9|0);const i=new URLSearchParams(location.search);if(i.has("npc")&&dx(Ke,Math.max(0,parseInt(i.get("npc")||"0",10))),!n)try{const r=await D_(Ke,e);Ke.loadWarnings?.length&&Ke.hud.toast("⚠ "+Ke.loadWarnings.join(", "),4e3)}catch(r){ds(),document.getElementById("start-screen").style.display="flex",document.getElementById("start-msg").textContent="Save incompatibile: "+String(r.message??r).slice(0,140);return}return Ke.save=()=>co(Ke),Ke.audio.ensure(),Ke.hud.show(),mr=!0,la=performance.now(),cs=setInterval(()=>{mr&&!document.hidden&&co(Ke)},3e4),fr=requestAnimationFrame(dd),window.__p0={game:Ke,save:()=>co(Ke),journal:()=>Ke.journal.events,beliefs:r=>[...Ke.npcs.find(s=>s.id===r)?.beliefs.entries()??[]],tp:(r,s)=>{Ke.player.x=r,Ke.player.z=s},npcPos:r=>{const s=Ke.npcs.find(o=>o.id===r);return{x:s.x,z:s.z,state:s.state,level:s.level}},fps:()=>ls,destroy:ds},Ke}function dd(n){if(!mr)return;fr=requestAnimationFrame(dd);const e=performance.now(),t=(n-la)/1e3;la=n,lo+=1/Math.max(t,1e-4),jr++,jr>=30&&(ls=Math.round(lo/jr),lo=0,jr=0),Mx(Ke,t),Zr=Zr*.9+(performance.now()-e)*.1,Ke.fps=ls,Ke.frameMs=Zr,document.getElementById("debug").style.display==="block"&&Ke.hud.renderDebug(ls,Zr),document.getElementById("panel").style.display==="block"&&(Ke._pTick=(Ke._pTick??0)+1)%20===0&&Ke.hud.renderPanel()}const Ii=new URLSearchParams(location.search);if(Ii.has("test"))(async()=>{const{runAllTests:n}=await Tr(async()=>{const{runAllTests:o}=await Promise.resolve().then(()=>ll);return{runAllTests:o}},void 0),{runInfraTests:e}=await Tr(async()=>{const{runInfraTests:o}=await Promise.resolve().then(()=>ng);return{runInfraTests:o}},void 0),t=await n(),i=e(),r=[...t.tests,...i.tests],s={passed:r.filter(o=>o.pass).length,total:r.length,suites:[t.suite,i.suite],tests:r};document.body.innerHTML=`<pre id="test-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${Jr(JSON.stringify(s,null,1))}</pre>`,console.log("[P0-TEST]",JSON.stringify(s))})();else if(Ii.has("bench")){const n=Math.max(1,parseInt(Ii.get("bench")||"5",10));(async()=>{const{runBench:e}=await Tr(async()=>{const{runBench:i}=await Promise.resolve().then(()=>ll);return{runBench:i}},void 0),t=e(n,12345);document.body.innerHTML=`<pre id="bench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${Jr(JSON.stringify(t,null,1))}</pre>`,console.log("[P0-BENCH]",JSON.stringify(t))})()}else if(Ii.has("gfxbench")){let n=function(e){const t=e.renderer.renderer.info,i=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576):null;return{npcs:e.npcs.length,drawCalls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,programs:t.programs?.length??null,heapMB:i,simMs:+e.sim.simMs.toFixed(3),aiMs:+e.sim.aiMs.toFixed(3),frameMs:+e.frameMs.toFixed(2),fps:e.fps,levels:{...e.sim.counts},thinkRuns:e.sim.stats.thinkRuns,gossipOps:e.sim.stats.gossipOps,pathComputations:e.sim.stats.pathComputations,perceptionChecks:e.sim.stats.perceptionChecks,eventCount:e.journal.events.length}};(async()=>{const e=Math.max(60,parseInt(Ii.get("frames")||"240",10));await Kr(!0);const t=window.__p0.game,i=[];let r=0;await new Promise(a=>{const c=()=>{r++,r%30===0&&i.push(n(t)),r>=e?a():requestAnimationFrame(c)};requestAnimationFrame(c)});const o={...i[i.length-1]??n(t),frames:e,samples:i.length};ds(),document.body.innerHTML=`<pre id="gfxbench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${Jr(JSON.stringify(o,null,1))}</pre>`,console.log("[P0-GFXBENCH]",JSON.stringify(o))})()}else Ii.has("lifecycle")?(async()=>{const{runLifecycleTests:n,runLifecyclePhase2:e}=await Tr(async()=>{const{runLifecycleTests:i,runLifecyclePhase2:r}=await import("./lifecycle-BkXwNGJW.js");return{runLifecycleTests:i,runLifecyclePhase2:r}},[]),t=sessionStorage.getItem("p0-lc")?await e():await n();document.body.innerHTML=`<pre id="lifecycle-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${Jr(JSON.stringify(t,null,1))}</pre>`,console.log("[P0-LIFECYCLE]",JSON.stringify(t))})():(document.getElementById("btn-new").addEventListener("click",()=>Kr(!0)),document.getElementById("btn-continue").addEventListener("click",()=>Kr(!1)),document.getElementById("btn-retry").addEventListener("click",()=>{document.getElementById("caught").style.display="none",Kr(!0)}),U_().then(n=>{n||(document.getElementById("btn-continue").style.opacity="0.4")}));function Jr(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}export{Ex as a,Kr as b,ds as d,Sx as i};
