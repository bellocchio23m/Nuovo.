(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Kd="modulepreload",Jd=function(n){return"/"+n},pc={},Gr=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(t.map(c=>{if(c=Jd(c),c in pc)return;pc[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Kd,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="170",Qd=0,mc=1,eu=2,Xl=1,tu=2,bn=3,Zn=0,Nt=1,wn=2,qn=0,qi=1,_c=2,gc=3,xc=4,nu=5,fi=100,iu=101,ru=102,su=103,ou=104,au=200,cu=201,lu=202,du=203,No=204,Uo=205,uu=206,fu=207,hu=208,pu=209,mu=210,_u=211,gu=212,xu=213,vu=214,zo=0,Fo=1,ko=2,Zi=3,Oo=4,Bo=5,Ho=6,Go=7,Da=0,Mu=1,yu=2,jn=0,Su=1,Eu=2,bu=3,wu=4,Tu=5,Au=6,Ru=7,$l=300,Ki=301,Ji=302,Vo=303,Wo=304,Vs=306,Xo=1e3,pi=1001,$o=1002,on=1003,Cu=1004,Vr=1005,un=1006,Js=1007,mi=1008,Nn=1009,ql=1010,jl=1011,Ar=1012,Na=1013,Mi=1014,An=1015,Ir=1016,Ua=1017,za=1018,Qi=1020,Yl=35902,Zl=1021,Kl=1022,rn=1023,Jl=1024,Ql=1025,ji=1026,er=1027,ed=1028,Fa=1029,td=1030,ka=1031,Oa=1033,gs=33776,xs=33777,vs=33778,Ms=33779,qo=35840,jo=35841,Yo=35842,Zo=35843,Ko=36196,Jo=37492,Qo=37496,ea=37808,ta=37809,na=37810,ia=37811,ra=37812,sa=37813,oa=37814,aa=37815,ca=37816,la=37817,da=37818,ua=37819,fa=37820,ha=37821,ys=36492,pa=36494,ma=36495,nd=36283,_a=36284,ga=36285,xa=36286,Pu=3200,Lu=3201,id=0,Iu=1,Wn="",Xt="srgb",sr="srgb-linear",Ws="linear",Qe="srgb",bi=7680,vc=519,Du=512,Nu=513,Uu=514,rd=515,zu=516,Fu=517,ku=518,Ou=519,Mc=35044,yc="300 es",Rn=2e3,Is=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,va=180/Math.PI;function Dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Bu(n,e){return(n%e+e)%e}function eo(n,e,t){return(1-t)*n+t*e}function hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,r,s,o,a,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],w=r[1],_=r[4],x=r[7],C=r[2],T=r[5],b=r[8];return s[0]=o*v+a*w+c*C,s[3]=o*m+a*_+c*T,s[6]=o*h+a*x+c*b,s[1]=l*v+d*w+u*C,s[4]=l*m+d*_+u*T,s[7]=l*h+d*x+u*b,s[2]=f*v+p*w+g*C,s[5]=f*m+p*_+g*T,s[8]=f*h+p*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,f=a*c-d*s,p=l*s-o*c,g=t*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*l-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(d*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Le;function sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hu(){const n=Ds("canvas");return n.style.display="block",n}const Sc={};function vr(n){n in Sc||(Sc[n]=!0,console.warn(n))}function Gu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Vu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wn?Ws:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ec=[.64,.33,.3,.6,.15,.06],bc=[.2126,.7152,.0722],wc=[.3127,.329],Tc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[sr]:{primaries:Ec,whitePoint:wc,transfer:Ws,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:bc,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Ec,whitePoint:wc,transfer:Qe,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:bc,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let wi;class Xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Ds("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $u=0;class od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(no(r[o].image)):s.push(no(r[o]))}else s=no(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function no(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class Ut extends or{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=pi,r=pi,s=un,o=mi,a=rn,c=Nn,l=Ut.DEFAULT_ANISOTROPY,d=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Dr(),this.name="",this.source=new od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=$l;Ut.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(p+1)/2,C=(h+1)/2,T=(d+f)/4,b=(u+v)/4,R=(g+m)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=b/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=R/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(f-d)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ju extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends ju{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ad extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==p||d!==g){let m=1-a;const h=c*f+l*p+d*g+u*v,w=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,h*w);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const x=a*w;if(c=c*m+f*x,l=l*m+p*x,d=d*m+g*x,u=u*m+v*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=C,l*=C,d*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*u+c*p-l*f,e[t+1]=c*g+d*f+l*u-a*p,e[t+2]=l*g+d*p+a*f-c*u,e[t+3]=d*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),u=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"YZX":this._x=f*d*u+l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u-f*p*g;break;case"XZY":this._x=f*d*u-l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(d-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*d,this.y=i+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new U,Rc=new Nr;class Ur{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Xr.subVectors(this.max,pr),Ti.subVectors(e.a,pr),Ai.subVectors(e.b,pr),Ri.subVectors(e.c,pr),Fn.subVectors(Ai,Ti),kn.subVectors(Ri,Ai),ni.subVectors(Ti,Ri);let t=[0,-Fn.z,Fn.y,0,-kn.z,kn.y,0,-ni.z,ni.y,Fn.z,0,-Fn.x,kn.z,0,-kn.x,ni.z,0,-ni.x,-Fn.y,Fn.x,0,-kn.y,kn.x,0,-ni.y,ni.x,0];return!ro(t,Ti,Ai,Ri,Xr)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,Ti,Ai,Ri,Xr))?!1:($r.crossVectors(Fn,kn),t=[$r.x,$r.y,$r.z],ro(t,Ti,Ai,Ri,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],Kt=new U,Wr=new Ur,Ti=new U,Ai=new U,Ri=new U,Fn=new U,kn=new U,ni=new U,pr=new U,Xr=new U,$r=new U,ii=new U;function ro(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ii.fromArray(n,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),d=i.dot(ii);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Zu=new Ur,mr=new U,so=new U;class Ba{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(so)),this.expandByPoint(mr.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new U,oo=new U,qr=new U,On=new U,ao=new U,jr=new U,co=new U;class Ku{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(oo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=On.dot(this.direction),c=-On.dot(qr),l=On.lengthSq(),d=Math.abs(1-o*o);let u,f,p,g;if(d>0)if(u=o*c-a,f=o*a-c,g=s*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oo).addScaledVector(qr,f),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){ao.subVectors(t,e),jr.subVectors(i,e),co.crossVectors(ao,jr);let o=this.direction.dot(co),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const c=a*this.direction.dot(jr.crossVectors(On,jr));if(c<0)return null;const l=a*this.direction.dot(ao.cross(On));if(l<0||c+l>o)return null;const d=-a*On.dot(co);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,o,a,c,l,d,u,f,p,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,u,f,p,g,v,m)}set(e,t,i,r,s,o,a,c,l,d,u,f,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*u,g=a*d,v=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,p=c*u,g=l*d,v=l*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,p=c*u,g=l*d,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,p=o*u,g=a*d,v=a*u;t[0]=c*d,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+v,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ju,e,Qu)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Bn.crossVectors(i,kt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Bn.crossVectors(i,kt)),Bn.normalize(),Yr.crossVectors(kt,Bn),r[0]=Bn.x,r[4]=Yr.x,r[8]=kt.x,r[1]=Bn.y,r[5]=Yr.y,r[9]=kt.y,r[2]=Bn.z,r[6]=Yr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],w=i[3],_=i[7],x=i[11],C=i[15],T=r[0],b=r[4],R=r[8],S=r[12],M=r[1],P=r[5],k=r[9],F=r[13],V=r[2],Y=r[6],W=r[10],Q=r[14],G=r[3],ie=r[7],le=r[11],ve=r[15];return s[0]=o*T+a*M+c*V+l*G,s[4]=o*b+a*P+c*Y+l*ie,s[8]=o*R+a*k+c*W+l*le,s[12]=o*S+a*F+c*Q+l*ve,s[1]=d*T+u*M+f*V+p*G,s[5]=d*b+u*P+f*Y+p*ie,s[9]=d*R+u*k+f*W+p*le,s[13]=d*S+u*F+f*Q+p*ve,s[2]=g*T+v*M+m*V+h*G,s[6]=g*b+v*P+m*Y+h*ie,s[10]=g*R+v*k+m*W+h*le,s[14]=g*S+v*F+m*Q+h*ve,s[3]=w*T+_*M+x*V+C*G,s[7]=w*b+_*P+x*Y+C*ie,s[11]=w*R+_*k+x*W+C*le,s[15]=w*S+_*F+x*Q+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*p-i*c*p)+v*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*d-s*c*d)+m*(+t*l*u-t*a*p-s*o*u+i*o*p+s*a*d-i*l*d)+h*(-r*a*d-t*c*u+t*a*f+r*o*u-i*o*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],w=u*m*l-v*f*l+v*c*p-a*m*p-u*c*h+a*f*h,_=g*f*l-d*m*l-g*c*p+o*m*p+d*c*h-o*f*h,x=d*v*l-g*u*l+g*a*p-o*v*p-d*a*h+o*u*h,C=g*u*c-d*v*c-g*a*f+o*v*f+d*a*m-o*u*m,T=t*w+i*_+r*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=w*b,e[1]=(v*f*s-u*m*s-v*r*p+i*m*p+u*r*h-i*f*h)*b,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*h+i*c*h)*b,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*p-i*c*p)*b,e[4]=_*b,e[5]=(d*m*s-g*f*s+g*r*p-t*m*p-d*r*h+t*f*h)*b,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*b,e[7]=(o*f*s-d*c*s+d*r*l-t*f*l-o*r*p+t*c*p)*b,e[8]=x*b,e[9]=(g*u*s-d*v*s-g*i*p+t*v*p+d*i*h-t*u*h)*b,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*h+t*a*h)*b,e[11]=(d*a*s-o*u*s-d*i*l+t*u*l+o*i*p-t*a*p)*b,e[12]=C*b,e[13]=(d*v*r-g*u*r+g*i*f-t*v*f-d*i*m+t*u*m)*b,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*b,e[15]=(o*u*r-d*a*r+d*i*c-t*u*c-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,f=s*l,p=s*d,g=s*u,v=o*d,m=o*u,h=a*u,w=c*l,_=c*d,x=c*u,C=i.x,T=i.y,b=i.z;return r[0]=(1-(v+h))*C,r[1]=(p+x)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(f+h))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+_)*b,r[9]=(m-w)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const o=Ci.set(r[4],r[5],r[6]).length(),a=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const l=1/s,d=1/o,u=1/a;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=d,Jt.elements[5]*=d,Jt.elements[6]*=d,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Rn){const c=this.elements,l=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Rn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Is)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Rn){const c=this.elements,l=1/(t-e),d=1/(i-r),u=1/(o-s),f=(t+e)*l,p=(i+r)*d;let g,v;if(a===Rn)g=(o+s)*u,v=-2*u;else if(a===Is)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new U,Jt=new mt,Ju=new U(0,0,0),Qu=new U(1,1,1),Bn=new U,Yr=new U,kt=new U,Cc=new mt,Pc=new Nr;class pn{constructor(e=0,t=0,i=0,r=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ef=0;const Lc=new U,Pi=new Nr,Mn=new mt,Zr=new U,_r=new U,tf=new U,nf=new Nr,Ic=new U(1,0,0),Dc=new U(0,1,0),Nc=new U(0,0,1),Uc={type:"added"},rf={type:"removed"},Li={type:"childadded",child:null},lo={type:"childremoved",child:null};class bt extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,t=new pn,i=new Nr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Le}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(_r,Zr,this.up):Mn.lookAt(Zr,_r,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new U,yn=new U,uo=new U,Sn=new U,Ii=new U,Di=new U,zc=new U,fo=new U,ho=new U,po=new U,mo=new pt,_o=new pt,go=new pt;class tn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),yn.subVectors(i,t),uo.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(yn),c=Qt.dot(uo),l=yn.dot(yn),d=yn.dot(uo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(l*c-a*d)*f,g=(o*d-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return mo.setScalar(0),_o.setScalar(0),go.setScalar(0),mo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,i),go.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(mo,s.x),o.addScaledVector(_o,s.y),o.addScaledVector(go,s.z),o}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),yn.subVectors(e,t),Qt.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,i),Di.subVectors(s,i),fo.subVectors(e,i);const c=Ii.dot(fo),l=Di.dot(fo);if(c<=0&&l<=0)return t.copy(i);ho.subVectors(e,r);const d=Ii.dot(ho),u=Di.dot(ho);if(d>=0&&u<=d)return t.copy(r);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Ii,o);po.subVectors(e,s);const p=Ii.dot(po),g=Di.dot(po);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Di,a);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return zc.subVectors(s,r),a=(u-d)/(u-d+(p-g)),t.copy(r).addScaledVector(zc,a);const h=1/(m+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(Ii,o).addScaledVector(Di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Bu(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xo(o,s,e+1/3),this.g=xo(o,s,e),this.b=xo(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return qe.fromWorkingColorSpace(Rt.copy(this),e),Math.round(It(Rt.r*255,0,255))*65536+Math.round(It(Rt.g*255,0,255))*256+Math.round(It(Rt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Xt){qe.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Kr);const i=eo(Hn.h,Kr.h,t),r=eo(Hn.s,Kr.s,t),s=eo(Hn.l,Kr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ge;Ge.NAMES=ld;let sf=0;class zr extends or{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Dr(),this.name="",this.blending=qi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Uo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==No&&(i.blendSrc=this.blendSrc),this.blendDst!==Uo&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ha extends zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new U,Jr=new Ve;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class dd extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ud extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let of=0;const Wt=new mt,vo=new bt,Ni=new U,Ot=new Ur,gr=new Ur,Et=new U;class cn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?ud:dd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Ot.min,gr.min),Ot.expandByPoint(Et),Et.addVectors(Ot.max,gr.max),Ot.expandByPoint(Et)):(Ot.expandByPoint(gr.min),Ot.expandByPoint(gr.max))}Ot.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Et.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(e,l),Et.add(Ni)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new U,c[R]=new U;const l=new U,d=new U,u=new U,f=new Ve,p=new Ve,g=new Ve,v=new U,m=new U;function h(R,S,M){l.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),d.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),a[R].add(v),a[S].add(v),a[M].add(v),c[R].add(m),c[S].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,S=w.length;R<S;++R){const M=w[R],P=M.start,k=M.count;for(let F=P,V=P+k;F<V;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new U,x=new U,C=new U,T=new U;function b(R){C.fromBufferAttribute(r,R),T.copy(C);const S=a[R];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(T,S);const P=x.dot(c[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,S=w.length;R<S;++R){const M=w[R],P=M.start,k=M.count;for(let F=P,V=P+k;F<V;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,d=new U,u=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(d),c.add(d),l.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,u=a.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*d;for(let h=0;h<d;h++)f[g++]=l[p++]}return new fn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const f=l[d],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new mt,ri=new Ku,Qr=new Ba,kc=new U,es=new U,ts=new U,ns=new U,Mo=new U,is=new U,Oc=new U,rs=new U;class Ae extends bt{constructor(e=new cn,t=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(Mo.fromBufferAttribute(u,e),o?is.addScaledVector(Mo,d):is.addScaledVector(Mo.sub(t),d))}t.add(is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(Qr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Qr,kc)===null||ri.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Fc.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=w,C=_;x<C;x+=3){const T=a.getX(x),b=a.getX(x+1),R=a.getX(x+2);r=ss(this,h,e,i,l,d,u,T,b,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const w=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=ss(this,o,e,i,l,d,u,w,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=w,C=_;x<C;x+=3){const T=x,b=x+1,R=x+2;r=ss(this,h,e,i,l,d,u,T,b,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const w=m,_=m+1,x=m+2;r=ss(this,o,e,i,l,d,u,w,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function af(n,e,t,i,r,s,o,a){let c;if(e.side===Nt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Zn,a),c===null)return null;rs.copy(a),rs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(rs);return l<t.near||l>t.far?null:{distance:l,point:rs.clone(),object:n}}function ss(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,es),n.getVertexPosition(c,ts),n.getVertexPosition(l,ns);const d=af(n,e,t,i,es,ts,ns,Oc);if(d){const u=new U;tn.getBarycoord(Oc,es,ts,ns,u),r&&(d.uv=tn.getInterpolatedAttribute(r,a,c,l,u,new Ve)),s&&(d.uv1=tn.getInterpolatedAttribute(s,a,c,l,u,new Ve)),o&&(d.normal=tn.getInterpolatedAttribute(o,a,c,l,u,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};tn.getNormal(es,ts,ns,f.normal),d.face=f,d.barycoord=u}return d}class gt extends cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(u,2));function g(v,m,h,w,_,x,C,T,b,R,S){const M=x/b,P=C/R,k=x/2,F=C/2,V=T/2,Y=b+1,W=R+1;let Q=0,G=0;const ie=new U;for(let le=0;le<W;le++){const ve=le*P-F;for(let Fe=0;Fe<Y;Fe++){const et=Fe*M-k;ie[v]=et*w,ie[m]=ve*_,ie[h]=V,l.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[h]=T>0?1:-1,d.push(ie.x,ie.y,ie.z),u.push(Fe/b),u.push(1-le/R),Q+=1}}for(let le=0;le<R;le++)for(let ve=0;ve<b;ve++){const Fe=f+ve+Y*le,et=f+ve+Y*(le+1),$=f+(ve+1)+Y*(le+1),ee=f+(ve+1)+Y*le;c.push(Fe,et,ee),c.push(et,$,ee),G+=6}a.addGroup(p,G,S),p+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function cf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const lf={clone:tr,merge:Ct};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hd extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new U,Bc=new Ve,Hc=new Ve;class $t extends hd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,Hc),t.subVectors(Hc,Bc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,zi=1;class ff extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Ui,zi,e,t);r.layers=this.layers,this.add(r);const s=new $t(Ui,zi,e,t);s.layers=this.layers,this.add(s);const o=new $t(Ui,zi,e,t);o.layers=this.layers,this.add(o);const a=new $t(Ui,zi,e,t);a.layers=this.layers,this.add(a);const c=new $t(Ui,zi,e,t);c.layers=this.layers,this.add(c);const l=new $t(Ui,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pd extends Ut{constructor(e,t,i,r,s,o,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gt(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:qn});s.uniforms.tEquirect.value=t;const o=new Ae(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=un),new ff(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const yo=new U,pf=new U,mf=new Le;class di{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yo.subVectors(i,t).cross(pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mf.getNormalMatrix(e),r=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Ba,os=new U;class Ga{constructor(e=new di,t=new di,i=new di,r=new di,s=new di,o=new di){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],w=r[13],_=r[14],x=r[15];if(i[0].setComponents(c-s,f-l,m-p,x-h).normalize(),i[1].setComponents(c+s,f+l,m+p,x+h).normalize(),i[2].setComponents(c+o,f+d,m+g,x+w).normalize(),i[3].setComponents(c-o,f-d,m-g,x-w).normalize(),i[4].setComponents(c-a,f-u,m-v,x-_).normalize(),t===Rn)i[5].setComponents(c+a,f+u,m+v,x+_).normalize();else if(t===Is)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(os.x=r.normal.x>0?e.max.x:e.min.x,os.y=r.normal.y>0?e.max.y:e.min.y,os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function md(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _f(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Tn extends cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,u=e/a,f=t/c,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const w=h*f-o;for(let _=0;_<l;_++){const x=_*u-s;g.push(x,-w,0),v.push(0,0,1),m.push(_/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){const _=w+l*h,x=w+l*(h+1),C=w+1+l*(h+1),T=w+1+l*h;p.push(_,x,T),p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.widthSegments,e.heightSegments)}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rh=`#ifdef USE_GRADIENTMAP
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
}`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ch=`uniform bool receiveShadow;
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
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ph=`PhysicalMaterial material;
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
#endif`,mh=`struct PhysicalMaterial {
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
}`,_h=`
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
#endif`,gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ch=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ih=`#ifdef USE_MORPHTARGETS
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
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oh=`#ifdef USE_NORMALMAP
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
#endif`,Bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,kp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:gf,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:Mf,alphatest_fragment:yf,alphatest_pars_fragment:Sf,aomap_fragment:Ef,aomap_pars_fragment:bf,batching_pars_vertex:wf,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Uf,color_fragment:zf,color_pars_fragment:Ff,color_pars_vertex:kf,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:$f,colorspace_fragment:qf,colorspace_pars_fragment:jf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Kf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:lh,envmap_vertex:Qf,fog_vertex:eh,fog_pars_vertex:th,fog_fragment:nh,fog_pars_fragment:ih,gradientmap_pars_fragment:rh,lightmap_pars_fragment:sh,lights_lambert_fragment:oh,lights_lambert_pars_fragment:ah,lights_pars_begin:ch,lights_toon_fragment:dh,lights_toon_pars_fragment:uh,lights_phong_fragment:fh,lights_phong_pars_fragment:hh,lights_physical_fragment:ph,lights_physical_pars_fragment:mh,lights_fragment_begin:_h,lights_fragment_maps:gh,lights_fragment_end:xh,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:Mh,logdepthbuf_pars_vertex:yh,logdepthbuf_vertex:Sh,map_fragment:Eh,map_pars_fragment:bh,map_particle_fragment:wh,map_particle_pars_fragment:Th,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:Rh,morphinstance_vertex:Ch,morphcolor_vertex:Ph,morphnormal_vertex:Lh,morphtarget_pars_vertex:Ih,morphtarget_vertex:Dh,normal_fragment_begin:Nh,normal_fragment_maps:Uh,normal_pars_fragment:zh,normal_pars_vertex:Fh,normal_vertex:kh,normalmap_pars_fragment:Oh,clearcoat_normal_fragment_begin:Bh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:Gh,iridescence_pars_fragment:Vh,opaque_fragment:Wh,packing:Xh,premultiplied_alpha_fragment:$h,project_vertex:qh,dithering_fragment:jh,dithering_pars_fragment:Yh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Kh,shadowmap_pars_fragment:Jh,shadowmap_pars_vertex:Qh,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:sp,specularmap_fragment:op,specularmap_pars_fragment:ap,tonemapping_fragment:cp,tonemapping_pars_fragment:lp,transmission_fragment:dp,transmission_pars_fragment:up,uv_pars_fragment:fp,uv_pars_vertex:hp,uv_vertex:pp,worldpos_vertex:mp,background_vert:_p,background_frag:gp,backgroundCube_vert:xp,backgroundCube_frag:vp,cube_vert:Mp,cube_frag:yp,depth_vert:Sp,depth_frag:Ep,distanceRGBA_vert:bp,distanceRGBA_frag:wp,equirect_vert:Tp,equirect_frag:Ap,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Dp,meshmatcap_vert:Np,meshmatcap_frag:Up,meshnormal_vert:zp,meshnormal_frag:Fp,meshphong_vert:kp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:Hp,meshtoon_vert:Gp,meshtoon_frag:Vp,points_vert:Wp,points_frag:Xp,shadow_vert:$p,shadow_frag:qp,sprite_vert:jp,sprite_frag:Yp},te={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},dn={basic:{uniforms:Ct([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ct([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ct([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ct([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ct([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ct([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ct([te.points,te.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ct([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ct([te.common,te.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ct([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ct([te.sprite,te.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ct([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ct([te.lights,te.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};dn.physical={uniforms:Ct([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const as={r:0,b:0,g:0},oi=new pn,Zp=new mt;function Kp(n,e,t,i,r,s,o){const a=new Ge(0);let c=s===!0?0:1,l,d,u=null,f=0,p=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function v(w){let _=!1;const x=g(w);x===null?h(a,c):x&&x.isColor&&(h(x,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Vs)?(d===void 0&&(d=new Ae(new gt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:tr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),oi.copy(_.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(oi)),d.material.toneMapped=qe.getTransfer(x.colorSpace)!==Qe,(u!==x||f!==x.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ae(new Tn(2,2),new Kn({name:"BackgroundMaterial",uniforms:tr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=qe.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function h(w,_){w.getRGB(as,fd(n)),i.buffers.color.setClear(as.r,as.g,as.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),c=_,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,h(a,c)},render:v,addToRenderList:m}}function Jp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,P,k,F,V){let Y=!1;const W=u(F,k,P);s!==W&&(s=W,l(s.object)),Y=p(M,F,k,V),Y&&g(M,F,k,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(M,P,k,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,P,k){const F=k.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let Y=V[P.id];Y===void 0&&(Y={},V[P.id]=Y);let W=Y[F];return W===void 0&&(W=f(c()),Y[F]=W),W}function f(M){const P=[],k=[],F=[];for(let V=0;V<t;V++)P[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,P,k,F){const V=s.attributes,Y=P.attributes;let W=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){const le=V[G];let ve=Y[G];if(ve===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(M,P,k,F){const V={},Y=P.attributes;let W=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){let le=Y[G];le===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),V[G]=ve,W++}s.attributes=V,s.attributesNum=W,s.index=F}function v(){const M=s.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){h(M,0)}function h(M,P){const k=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;k[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),V[M]!==P&&(n.vertexAttribDivisor(M,P),V[M]=P)}function w(){const M=s.newAttributes,P=s.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==M[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function _(M,P,k,F,V,Y,W){W===!0?n.vertexAttribIPointer(M,P,k,V,Y):n.vertexAttribPointer(M,P,k,F,V,Y)}function x(M,P,k,F){v();const V=F.attributes,Y=k.getAttributes(),W=P.defaultAttributeValues;for(const Q in Y){const G=Y[Q];if(G.location>=0){let ie=V[Q];if(ie===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const le=ie.normalized,ve=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const et=Fe.buffer,$=Fe.type,ee=Fe.bytesPerElement,_e=$===n.INT||$===n.UNSIGNED_INT||ie.gpuType===Na;if(ie.isInterleavedBufferAttribute){const re=ie.data,be=re.stride,Re=ie.offset;if(re.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)h(G.location+ke,re.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,et);for(let ke=0;ke<G.locationSize;ke++)_(G.location+ke,ve/G.locationSize,$,le,be*ee,(Re+ve/G.locationSize*ke)*ee,_e)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)h(G.location+re,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);n.bindBuffer(n.ARRAY_BUFFER,et);for(let re=0;re<G.locationSize;re++)_(G.location+re,ve/G.locationSize,$,le,ve*ee,ve/G.locationSize*re*ee,_e)}}else if(W!==void 0){const le=W[Q];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(G.location,le);break;case 3:n.vertexAttrib3fv(G.location,le);break;case 4:n.vertexAttrib4fv(G.location,le);break;default:n.vertexAttrib1fv(G.location,le)}}}}w()}function C(){R();for(const M in i){const P=i[M];for(const k in P){const F=P[k];for(const V in F)d(F[V].object),delete F[V];delete P[k]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const k in P){const F=P[k];for(const V in F)d(F[V].object),delete F[V];delete P[k]}delete i[M.id]}function b(M){for(const P in i){const k=i[P];if(k[M.id]===void 0)continue;const F=k[M.id];for(const V in F)d(F[V].object),delete F[V];delete k[M.id]}}function R(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Qp(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,i,1)}function c(l,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function em(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==rn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Nn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!R)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function tm(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new di,a=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const w=s?0:i,_=w*4;let x=h.clippingState||null;c.value=x,x=d(g,f,_,p);for(let C=0;C!==_;++C)x[C]=t[C];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const h=p+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=p;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nm(n){let e=new WeakMap;function t(o,a){return a===Vo?o.mapping=Ki:a===Wo&&(o.mapping=Ji),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vo||a===Wo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new hf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _d extends hd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Gc=[.125,.215,.35,.446,.526,.582],hi=20,So=new _d,Vc=new Ge;let Eo=null,bo=0,wo=0,To=!1;const ui=(1+Math.sqrt(5))/2,Fi=1/ui,Wc=[new U(-ui,Fi,0),new U(ui,Fi,0),new U(-Fi,0,ui),new U(Fi,0,ui),new U(0,ui,-Fi),new U(0,ui,Fi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,bo,wo),this._renderer.xr.enabled=To,e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ir,format:rn,colorSpace:sr,depthBuffer:!1},r=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=rm(s,e,t)}return r}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Vc),d.toneMapping=jn,d.autoClear=!1;const p=new Ha({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Ae(new gt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Vc),v=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):w===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const _=this._cubeSize;cs(r,w*_,h>2?_:0,_,_),d.setRenderTarget(r),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;cs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,So)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wc[(r-s-1)%Wc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ae(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const h=[];let w=0;for(let b=0;b<hi;++b){const R=b/v,S=Math.exp(-R*R/2);h.push(S),b===0?w+=S:b<m&&(w+=2*S)}for(let b=0;b<h.length;b++)h[b]=h[b]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-Vi?r-_+Vi:0),T=4*(this._cubeSize-x);cs(t,C,T,3*x,2*x),c.setRenderTarget(t),c.render(u,So)}}function im(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+Gc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Vi?c=Gc[o-n+Vi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,v=3,m=2,h=1,w=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,R=T>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];w.set(S,v*g*T),_.set(f,m*g*T);const M=[T,T,T,T,T,T];x.set(M,h*g*T)}const C=new cn;C.setAttribute("position",new fn(w,v)),C.setAttribute("uv",new fn(_,m)),C.setAttribute("faceIndex",new fn(x,h)),e.push(C),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $c(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rm(n,e,t){const i=new Float32Array(hi),r=new U(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function qc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function jc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function sm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vo||c===Wo,d=c===Ki||c===Ji;if(l||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Xc(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new Xc(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function om(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function am(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let _=0,x=w.length;_<x;_+=3){const C=w[_+0],T=w[_+1],b=w[_+2];f.push(C,T,T,b,b,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,x=w.length/3-1;_<x;_+=3){const C=_+0,T=_+1,b=_+2;f.push(C,T,T,b,b,C)}}else return;const m=new(sd(f)?ud:dd)(f,1);m.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function d(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function cm(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function u(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*v[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function lm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dm(n,e,t){const i=new WeakMap,r=new pt;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*C*4*u),b=new ad(T,x,C,u);b.type=An,b.needsUpdate=!0;const R=_*4;for(let M=0;M<u;M++){const P=m[M],k=h[M],F=w[M],V=x*C*4*M;for(let Y=0;Y<P.count;Y++){const W=Y*R;p===!0&&(r.fromBufferAttribute(P,Y),T[V+W+0]=r.x,T[V+W+1]=r.y,T[V+W+2]=r.z,T[V+W+3]=0),g===!0&&(r.fromBufferAttribute(k,Y),T[V+W+4]=r.x,T[V+W+5]=r.y,T[V+W+6]=r.z,T[V+W+7]=0),v===!0&&(r.fromBufferAttribute(F,Y),T[V+W+8]=r.x,T[V+W+9]=r.y,T[V+W+10]=r.z,T[V+W+11]=F.itemSize===4?r.w:1)}}f={count:u,texture:b,size:new Ve(x,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function um(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class gd extends Ut{constructor(e,t,i,r,s,o,a,c,l,d=ji){if(d!==ji&&d!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ji&&(i=Mi),i===void 0&&d===er&&(i=Qi),super(null,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xd=new Ut,Yc=new gd(1,1),vd=new ad,Md=new Yu,yd=new pd,Zc=[],Kc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),el=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xs(n,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function _m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;el.set(i),n.uniformMatrix2fv(this.addr,!1,el),St(t,i)}}function gm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Qc.set(i),n.uniformMatrix3fv(this.addr,!1,Qc),St(t,i)}}function xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),St(t,i)}}function vm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Am(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yc.compareFunction=rd,s=Yc):s=xd,t.setTexture2D(e||s,r)}function Rm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Md,r)}function Cm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yd,r)}function Pm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vd,r)}function Lm(n){switch(n){case 5126:return fm;case 35664:return hm;case 35665:return pm;case 35666:return mm;case 35674:return _m;case 35675:return gm;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return Mm;case 35668:case 35672:return ym;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return bm;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(n,e){n.uniform1fv(this.addr,e)}function Dm(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function Nm(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function Um(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function zm(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fm(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function km(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Om(n,e){n.uniform1iv(this.addr,e)}function Bm(n,e){n.uniform2iv(this.addr,e)}function Hm(n,e){n.uniform3iv(this.addr,e)}function Gm(n,e){n.uniform4iv(this.addr,e)}function Vm(n,e){n.uniform1uiv(this.addr,e)}function Wm(n,e){n.uniform2uiv(this.addr,e)}function Xm(n,e){n.uniform3uiv(this.addr,e)}function $m(n,e){n.uniform4uiv(this.addr,e)}function qm(n,e,t){const i=this.cache,r=e.length,s=Xs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xd,s[o])}function jm(n,e,t){const i=this.cache,r=e.length,s=Xs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Md,s[o])}function Ym(n,e,t){const i=this.cache,r=e.length,s=Xs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yd,s[o])}function Zm(n,e,t){const i=this.cache,r=e.length,s=Xs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vd,s[o])}function Km(n){switch(n){case 5126:return Im;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return zm;case 35675:return Fm;case 35676:return km;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Zm}}class Jm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}}class Qm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function tl(n,e){n.seq.push(e),n.map[e.id]=e}function t0(n,e,t){const i=n.name,r=i.length;for(Ao.lastIndex=0;;){const s=Ao.exec(i),o=Ao.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tl(t,l===void 0?new Jm(a,n,e):new Qm(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new e0(a),tl(t,u)),t=u}}}class Ss{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);t0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const n0=37297;let i0=0;function r0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const il=new Le;function s0(n){qe._getMatrix(il,qe.workingColorSpace,n);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Ws:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+r0(n.getShaderSource(e),o)}else return r}function o0(n,e){const t=s0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function a0(n,e){let t;switch(e){case Su:t="Linear";break;case Eu:t="Reinhard";break;case bu:t="Cineon";break;case wu:t="ACESFilmic";break;case Au:t="AgX";break;case Ru:t="Neutral";break;case Tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ls=new U;function c0(){qe.getLuminanceCoefficients(ls);const n=ls.x.toFixed(4),e=ls.y.toFixed(4),t=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function d0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function u0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mr(n){return n!==""}function sl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(n){return n.replace(f0,p0)}const h0=new Map;function p0(n,e){let t=Ne[e];if(t===void 0){const i=h0.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ma(t)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(n){return n.replace(m0,_0)}function _0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function g0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Ji:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function M0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Da:e="ENVMAP_BLENDING_MULTIPLY";break;case Mu:e="ENVMAP_BLENDING_MIX";break;case yu:e="ENVMAP_BLENDING_ADD";break}return e}function y0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function S0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=g0(t),l=x0(t),d=v0(t),u=M0(t),f=y0(t),p=l0(t),g=d0(s),v=r.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),h.length>0&&(h+=`
`)):(m=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),h=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==jn?a0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,o0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Ma(o),o=sl(o,t),o=ol(o,t),a=Ma(a),a=sl(a,t),a=ol(a,t),o=al(o),a=al(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=w+m+o,x=w+h+a,C=nl(r,r.VERTEX_SHADER,_),T=nl(r,r.FRAGMENT_SHADER,x);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(T).trim();let Y=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,T);else{const Q=rl(r,C,"vertex"),G=rl(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(C),r.deleteShader(T),R=new Ss(r,v),S=u0(r,v)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,n0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let E0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new w0(e),t.set(e,i)),i}}class w0{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}}function T0(n,e,t,i,r,s,o){const a=new cd,c=new b0,l=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,k,F){const V=k.fog,Y=F.geometry,W=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),G=Q&&Q.mapping===Vs?Q.image.height:null,ie=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=le!==void 0?le.length:0;let Fe=0;Y.morphAttributes.position!==void 0&&(Fe=1),Y.morphAttributes.normal!==void 0&&(Fe=2),Y.morphAttributes.color!==void 0&&(Fe=3);let et,$,ee,_e;if(ie){const Ke=dn[ie];et=Ke.vertexShader,$=Ke.fragmentShader}else et=S.vertexShader,$=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),_e=c.getFragmentShaderID(S);const re=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,ke=F.isBatchedMesh===!0,dt=!!S.map,Xe=!!S.matcap,_t=!!Q,N=!!S.aoMap,Gt=!!S.lightMap,Oe=!!S.bumpMap,Be=!!S.normalMap,Se=!!S.displacementMap,it=!!S.emissiveMap,Me=!!S.metalnessMap,A=!!S.roughnessMap,y=S.anisotropy>0,z=S.clearcoat>0,q=S.dispersion>0,Z=S.iridescence>0,X=S.sheen>0,ge=S.transmission>0,se=y&&!!S.anisotropyMap,de=z&&!!S.clearcoatMap,$e=z&&!!S.clearcoatNormalMap,K=z&&!!S.clearcoatRoughnessMap,ue=Z&&!!S.iridescenceMap,Ee=Z&&!!S.iridescenceThicknessMap,we=X&&!!S.sheenColorMap,fe=X&&!!S.sheenRoughnessMap,He=!!S.specularMap,De=!!S.specularColorMap,tt=!!S.specularIntensityMap,L=ge&&!!S.transmissionMap,ne=ge&&!!S.thicknessMap,H=!!S.gradientMap,j=!!S.alphaMap,ce=S.alphaTest>0,oe=!!S.alphaHash,Ce=!!S.extensions;let ft=jn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Tt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:$,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ke,batchingColor:ke&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:sr,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Xe,envMap:_t,envMapMode:_t&&Q.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Gt,bumpMap:Oe,normalMap:Be,displacementMap:f&&Se,emissiveMap:it,normalMapObjectSpace:Be&&S.normalMapType===Iu,normalMapTangentSpace:Be&&S.normalMapType===id,metalnessMap:Me,roughnessMap:A,anisotropy:y,anisotropyMap:se,clearcoat:z,clearcoatMap:de,clearcoatNormalMap:$e,clearcoatRoughnessMap:K,dispersion:q,iridescence:Z,iridescenceMap:ue,iridescenceThicknessMap:Ee,sheen:X,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:He,specularColorMap:De,specularIntensityMap:tt,transmission:ge,transmissionMap:L,thicknessMap:ne,gradientMap:H,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:oe,combine:S.combine,mapUv:dt&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:Gt&&v(S.lightMap.channel),bumpMapUv:Oe&&v(S.bumpMap.channel),normalMapUv:Be&&v(S.normalMap.channel),displacementMapUv:Se&&v(S.displacementMap.channel),emissiveMapUv:it&&v(S.emissiveMap.channel),metalnessMapUv:Me&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:se&&v(S.anisotropyMap.channel),clearcoatMapUv:de&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(S.sheenRoughnessMap.channel),specularMapUv:He&&v(S.specularMap.channel),specularColorMapUv:De&&v(S.specularColorMap.channel),specularIntensityMapUv:tt&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:ne&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Be||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(dt||j),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&qe.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let P;if(M){const k=dn[M];P=lf.clone(k.uniforms)}else P=S.uniforms;return P}function C(S,M){let P;for(let k=0,F=d.length;k<F;k++){const V=d[k];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new S0(n,M,S,s),d.push(P)),P}function T(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function b(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:b,programs:d,dispose:R}}function A0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function R0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ll(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,p,g,v,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function a(u,f,p,g,v,m){const h=o(u,f,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(u,f,p,g,v,m){const h=o(u,f,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(u,f){t.length>1&&t.sort(u||R0),i.length>1&&i.sort(f||ll),r.length>1&&r.sort(f||ll)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function C0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new dl,n.set(i,[o])):r>=s.length?(o=new dl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function L0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function D0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N0(n){const e=new P0,t=L0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new mt,o=new mt;function a(l){let d=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,w=0,_=0,x=0,C=0,T=0,b=0;l.sort(D0);for(let S=0,M=l.length;S<M;S++){const P=l[S],k=P.color,F=P.intensity,V=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*F,u+=k.g*F,f+=k.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],F);b++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const Q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=Q.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=Y,x++}v++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(k).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==w||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=w,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=b,i.version=I0++)}function c(l,d){let u=0,f=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const _=l[h];if(_.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function ul(n){const e=new N0(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function U0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ul(n),e.set(r,[a])):s>=o.length?(a=new ul(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class z0 extends zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F0 extends zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function B0(n,e,t){let i=new Ga;const r=new Ve,s=new Ve,o=new pt,a=new z0({depthPacking:Lu}),c=new F0,l={},d=t.maxTextureSize,u={[Zn]:Nt,[Nt]:Zn,[wn]:wn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:k0,fragmentShader:O0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ae(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let h=this.type;this.render=function(T,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(qn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=h!==bn&&this.type===bn,V=h===bn&&this.type!==bn;for(let Y=0,W=T.length;Y<W;Y++){const Q=T[Y],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||F===!0||V===!0){const ve=this.type!==bn?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new yi(r.x,r.y,ve),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const le=G.getViewportCount();for(let ve=0;ve<le;ve++){const Fe=G.getViewport(ve);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),k.viewport(o),G.updateMatrices(Q,ve),i=G.getFrustum(),x(b,R,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===bn&&w(G,R),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,P)};function w(T,b){const R=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,R,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,R,p,v,null)}function _(T,b,R,S){let M=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=M.uuid,F=b.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let Y=V[F];Y===void 0&&(Y=M.clone(),V[F]=Y,b.addEventListener("dispose",C)),M=Y}if(M.visible=b.visible,M.wireframe=b.wireframe,S===bn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=R}return M}function x(T,b,R,S,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===bn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const F=e.update(T),V=T.material;if(Array.isArray(V)){const Y=F.groups;for(let W=0,Q=Y.length;W<Q;W++){const G=Y[W],ie=V[G.materialIndex];if(ie&&ie.visible){const le=_(T,ie,S,M);T.onBeforeShadow(n,T,b,R,F,le,G),n.renderBufferDirect(R,null,F,le,T,G),T.onAfterShadow(n,T,b,R,F,le,G)}}}else if(V.visible){const Y=_(T,V,S,M);T.onBeforeShadow(n,T,b,R,F,Y,null),n.renderBufferDirect(R,null,F,Y,T,null),T.onAfterShadow(n,T,b,R,F,Y,null)}}const k=T.children;for(let F=0,V=k.length;F<V;F++)x(k[F],b,R,S,M)}function C(T){T.target.removeEventListener("dispose",C);for(const R in l){const S=l[R],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const H0={[zo]:Fo,[ko]:Ho,[Oo]:Go,[Zi]:Bo,[Fo]:zo,[Ho]:ko,[Go]:Oo,[Bo]:Zi};function G0(n,e){function t(){let L=!1;const ne=new pt;let H=null;const j=new pt(0,0,0,0);return{setMask:function(ce){H!==ce&&!L&&(n.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){L=ce},setClear:function(ce,oe,Ce,ft,Tt){Tt===!0&&(ce*=ft,oe*=ft,Ce*=ft),ne.set(ce,oe,Ce,ft),j.equals(ne)===!1&&(n.clearColor(ce,oe,Ce,ft),j.copy(ne))},reset:function(){L=!1,H=null,j.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,H=null,j=null,ce=null;return{setReversed:function(oe){if(ne!==oe){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const ft=ce;ce=null,this.setClear(ft)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?re(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(oe){H!==oe&&!L&&(n.depthMask(oe),H=oe)},setFunc:function(oe){if(ne&&(oe=H0[oe]),j!==oe){switch(oe){case zo:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case ko:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case Ho:n.depthFunc(n.GREATER);break;case Go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ce!==oe&&(ne&&(oe=1-oe),n.clearDepth(oe),ce=oe)},reset:function(){L=!1,H=null,j=null,ce=null,ne=!1}}}function r(){let L=!1,ne=null,H=null,j=null,ce=null,oe=null,Ce=null,ft=null,Tt=null;return{setTest:function(Ke){L||(Ke?re(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ke){ne!==Ke&&!L&&(n.stencilMask(Ke),ne=Ke)},setFunc:function(Ke,Yt,_n){(H!==Ke||j!==Yt||ce!==_n)&&(n.stencilFunc(Ke,Yt,_n),H=Ke,j=Yt,ce=_n)},setOp:function(Ke,Yt,_n){(oe!==Ke||Ce!==Yt||ft!==_n)&&(n.stencilOp(Ke,Yt,_n),oe=Ke,Ce=Yt,ft=_n)},setLocked:function(Ke){L=Ke},setClear:function(Ke){Tt!==Ke&&(n.clearStencil(Ke),Tt=Ke)},reset:function(){L=!1,ne=null,H=null,j=null,ce=null,oe=null,Ce=null,ft=null,Tt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,h=null,w=null,_=null,x=null,C=null,T=null,b=new Ge(0,0,0),R=0,S=!1,M=null,P=null,k=null,F=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Q>=2);let ie=null,le={};const ve=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),et=new pt().fromArray(ve),$=new pt().fromArray(Fe);function ee(L,ne,H,j){const ce=new Uint8Array(4),oe=n.createTexture();n.bindTexture(L,oe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<H;Ce++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ne+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return oe}const _e={};_e[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Zi),Oe(!1),Be(mc),re(n.CULL_FACE),N(qn);function re(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function be(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Re(L,ne){return u[L]!==ne?(n.bindFramebuffer(L,ne),u[L]=ne,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function ke(L,ne){let H=p,j=!1;if(L){H=f.get(ne),H===void 0&&(H=[],f.set(ne,H));const ce=L.textures;if(H.length!==ce.length||H[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ce=ce.length;oe<Ce;oe++)H[oe]=n.COLOR_ATTACHMENT0+oe;H.length=ce.length,j=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,j=!0);j&&n.drawBuffers(H)}function dt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Xe={[fi]:n.FUNC_ADD,[iu]:n.FUNC_SUBTRACT,[ru]:n.FUNC_REVERSE_SUBTRACT};Xe[su]=n.MIN,Xe[ou]=n.MAX;const _t={[au]:n.ZERO,[cu]:n.ONE,[lu]:n.SRC_COLOR,[No]:n.SRC_ALPHA,[mu]:n.SRC_ALPHA_SATURATE,[hu]:n.DST_COLOR,[uu]:n.DST_ALPHA,[du]:n.ONE_MINUS_SRC_COLOR,[Uo]:n.ONE_MINUS_SRC_ALPHA,[pu]:n.ONE_MINUS_DST_COLOR,[fu]:n.ONE_MINUS_DST_ALPHA,[_u]:n.CONSTANT_COLOR,[gu]:n.ONE_MINUS_CONSTANT_COLOR,[xu]:n.CONSTANT_ALPHA,[vu]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,ne,H,j,ce,oe,Ce,ft,Tt,Ke){if(L===qn){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),L!==nu){if(L!==m||Ke!==S){if((h!==fi||x!==fi)&&(n.blendEquation(n.FUNC_ADD),h=fi,x=fi),Ke)switch(L){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,_=null,C=null,T=null,b.set(0,0,0),R=0,m=L,S=Ke}return}ce=ce||ne,oe=oe||H,Ce=Ce||j,(ne!==h||ce!==x)&&(n.blendEquationSeparate(Xe[ne],Xe[ce]),h=ne,x=ce),(H!==w||j!==_||oe!==C||Ce!==T)&&(n.blendFuncSeparate(_t[H],_t[j],_t[oe],_t[Ce]),w=H,_=j,C=oe,T=Ce),(ft.equals(b)===!1||Tt!==R)&&(n.blendColor(ft.r,ft.g,ft.b,Tt),b.copy(ft),R=Tt),m=L,S=!1}function Gt(L,ne){L.side===wn?be(n.CULL_FACE):re(n.CULL_FACE);let H=L.side===Nt;ne&&(H=!H),Oe(H),L.blending===qi&&L.transparent===!1?N(qn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),it(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Be(L){L!==Qd?(re(n.CULL_FACE),L!==P&&(L===mc?n.cullFace(n.BACK):L===eu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=L}function Se(L){L!==k&&(W&&n.lineWidth(L),k=L)}function it(L,ne,H){L?(re(n.POLYGON_OFFSET_FILL),(F!==ne||V!==H)&&(n.polygonOffset(ne,H),F=ne,V=H)):be(n.POLYGON_OFFSET_FILL)}function Me(L){L?re(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+Y-1),ie!==L&&(n.activeTexture(L),ie=L)}function y(L,ne,H){H===void 0&&(ie===null?H=n.TEXTURE0+Y-1:H=ie);let j=le[H];j===void 0&&(j={type:void 0,texture:void 0},le[H]=j),(j.type!==L||j.texture!==ne)&&(ie!==H&&(n.activeTexture(H),ie=H),n.bindTexture(L,ne||_e[L]),j.type=L,j.texture=ne)}function z(){const L=le[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){et.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function fe(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function He(L,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let j=H.get(L);j===void 0&&(j=n.getUniformBlockIndex(ne,L.name),H.set(L,j))}function De(L,ne){const j=l.get(ne).get(L);c.get(ne)!==j&&(n.uniformBlockBinding(ne,j,L.__bindingPointIndex),c.set(ne,j))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,le={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,h=null,w=null,_=null,x=null,C=null,T=null,b=new Ge(0,0,0),R=0,S=!1,M=null,P=null,k=null,F=null,V=null,et.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:Re,drawBuffers:ke,useProgram:dt,setBlending:N,setMaterial:Gt,setFlipSided:Oe,setCullFace:Be,setLineWidth:Se,setPolygonOffset:it,setScissorTest:Me,activeTexture:A,bindTexture:y,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:ue,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:$e,texStorage3D:K,texSubImage2D:X,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:we,viewport:fe,reset:tt}}function fl(n,e,t,i){const r=V0(i);switch(t){case Zl:return n*e;case Jl:return n*e;case Ql:return n*e*2;case ed:return n*e/r.components*r.byteLength;case Fa:return n*e/r.components*r.byteLength;case td:return n*e*2/r.components*r.byteLength;case ka:return n*e*2/r.components*r.byteLength;case Kl:return n*e*3/r.components*r.byteLength;case rn:return n*e*4/r.components*r.byteLength;case Oa:return n*e*4/r.components*r.byteLength;case gs:case xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vs:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:case Zo:return Math.max(n,16)*Math.max(e,8)/4;case qo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case Ko:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case na:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case aa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ca:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ys:case pa:case ma:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nd:case _a:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ga:case xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V0(n){switch(n){case Nn:case ql:return{byteLength:1,components:1};case Ar:case jl:case Ir:return{byteLength:2,components:1};case Ua:case za:return{byteLength:2,components:4};case Mi:case Na:case An:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function W0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Ds("canvas")}function v(A,y,z){let q=1;const Z=Me(A);if((Z.width>z||Z.height>z)&&(q=z/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*Z.width),ge=Math.floor(q*Z.height);u===void 0&&(u=g(X,ge));const se=y?g(X,ge):u;return se.width=X,se.height=ge,se.getContext("2d").drawImage(A,0,0,X,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+ge+")."),se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(A,y,z,q,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),y===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),y===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),y===n.RGBA){const ge=Z?Ws:qe.getTransfer(q);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=ge===Qe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,y){let z;return A?y===null||y===Mi||y===Qi?z=n.DEPTH24_STENCIL8:y===An?z=n.DEPTH32F_STENCIL8:y===Ar&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===Qi?z=n.DEPTH_COMPONENT24:y===An?z=n.DEPTH_COMPONENT32F:y===Ar&&(z=n.DEPTH_COMPONENT16),z}function C(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&d.delete(y)}function b(A){const y=A.target;y.removeEventListener("dispose",b),M(y)}function R(A){const y=i.get(A);if(y.__webglInit===void 0)return;const z=A.source,q=f.get(z);if(q){const Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(A),Object.keys(q).length===0&&f.delete(z)}i.remove(A)}function S(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const z=A.source,q=f.get(z);delete q[y.__cacheKey],o.memory.textures--}function M(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,Z=z.length;q<Z;q++){const X=i.get(z[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(A)}let P=0;function k(){P=0}function F(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function Y(A,y){const z=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,A,y);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function W(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function Q(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function G(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ee(z,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const ie={[Xo]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},le={[on]:n.NEAREST,[Cu]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Js]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},ve={[Du]:n.NEVER,[Ou]:n.ALWAYS,[Nu]:n.LESS,[rd]:n.LEQUAL,[Uu]:n.EQUAL,[ku]:n.GEQUAL,[zu]:n.GREATER,[Fu]:n.NOTEQUAL};function Fe(A,y){if(y.type===An&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===Js||y.magFilter===Vr||y.magFilter===mi||y.minFilter===un||y.minFilter===Js||y.minFilter===Vr||y.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ie[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Vr&&y.minFilter!==mi||y.type===An&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function et(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const q=y.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const X=V(y);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[X].usedTimes++;const ge=Z[A.__cacheKey];ge!==void 0&&(Z[A.__cacheKey].usedTimes--,ge.usedTimes===0&&S(y)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return z}function $(A,y,z){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const Z=et(A,y),X=y.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+z);const ge=i.get(X);if(X.version!==ge.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const se=qe.getPrimaries(qe.workingColorSpace),de=y.colorSpace===Wn?null:qe.getPrimaries(y.colorSpace),$e=y.colorSpace===Wn||se===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let K=v(y.image,!1,r.maxTextureSize);K=it(y,K);const ue=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type);let we=_(y.internalFormat,ue,Ee,y.colorSpace,y.isVideoTexture);Fe(q,y);let fe;const He=y.mipmaps,De=y.isVideoTexture!==!0,tt=ge.__version===void 0||Z===!0,L=X.dataReady,ne=C(y,K);if(y.isDepthTexture)we=x(y.format===er,y.type),tt&&(De?t.texStorage2D(n.TEXTURE_2D,1,we,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,we,K.width,K.height,0,ue,Ee,null));else if(y.isDataTexture)if(He.length>0){De&&tt&&t.texStorage2D(n.TEXTURE_2D,ne,we,He[0].width,He[0].height);for(let H=0,j=He.length;H<j;H++)fe=He[H],De?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,fe.width,fe.height,ue,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,H,we,fe.width,fe.height,0,ue,Ee,fe.data);y.generateMipmaps=!1}else De?(tt&&t.texStorage2D(n.TEXTURE_2D,ne,we,K.width,K.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,ue,Ee,K.data)):t.texImage2D(n.TEXTURE_2D,0,we,K.width,K.height,0,ue,Ee,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,we,He[0].width,He[0].height,K.depth);for(let H=0,j=He.length;H<j;H++)if(fe=He[H],y.format!==rn)if(ue!==null)if(De){if(L)if(y.layerUpdates.size>0){const ce=fl(fe.width,fe.height,y.format,y.type);for(const oe of y.layerUpdates){const Ce=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,ue,Ce)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,K.depth,ue,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,we,fe.width,fe.height,K.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,K.depth,ue,Ee,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,we,fe.width,fe.height,K.depth,0,ue,Ee,fe.data)}else{De&&tt&&t.texStorage2D(n.TEXTURE_2D,ne,we,He[0].width,He[0].height);for(let H=0,j=He.length;H<j;H++)fe=He[H],y.format!==rn?ue!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,H,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,fe.width,fe.height,ue,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,H,we,fe.width,fe.height,0,ue,Ee,fe.data)}else if(y.isDataArrayTexture)if(De){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,we,K.width,K.height,K.depth),L)if(y.layerUpdates.size>0){const H=fl(K.width,K.height,y.format,y.type);for(const j of y.layerUpdates){const ce=K.data.subarray(j*H/K.data.BYTES_PER_ELEMENT,(j+1)*H/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,K.width,K.height,1,ue,Ee,ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,Ee,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,K.width,K.height,K.depth,0,ue,Ee,K.data);else if(y.isData3DTexture)De?(tt&&t.texStorage3D(n.TEXTURE_3D,ne,we,K.width,K.height,K.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,Ee,K.data)):t.texImage3D(n.TEXTURE_3D,0,we,K.width,K.height,K.depth,0,ue,Ee,K.data);else if(y.isFramebufferTexture){if(tt)if(De)t.texStorage2D(n.TEXTURE_2D,ne,we,K.width,K.height);else{let H=K.width,j=K.height;for(let ce=0;ce<ne;ce++)t.texImage2D(n.TEXTURE_2D,ce,we,H,j,0,ue,Ee,null),H>>=1,j>>=1}}else if(He.length>0){if(De&&tt){const H=Me(He[0]);t.texStorage2D(n.TEXTURE_2D,ne,we,H.width,H.height)}for(let H=0,j=He.length;H<j;H++)fe=He[H],De?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ue,Ee,fe):t.texImage2D(n.TEXTURE_2D,H,we,ue,Ee,fe);y.generateMipmaps=!1}else if(De){if(tt){const H=Me(K);t.texStorage2D(n.TEXTURE_2D,ne,we,H.width,H.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ee,K)}else t.texImage2D(n.TEXTURE_2D,0,we,ue,Ee,K);m(y)&&h(q),ge.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ee(A,y,z){if(y.image.length!==6)return;const q=et(A,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const X=i.get(Z);if(Z.version!==X.__version||q===!0){t.activeTexture(n.TEXTURE0+z);const ge=qe.getPrimaries(qe.workingColorSpace),se=y.colorSpace===Wn?null:qe.getPrimaries(y.colorSpace),de=y.colorSpace===Wn||ge===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!$e&&!K?ue[j]=v(y.image[j],!0,r.maxCubemapSize):ue[j]=K?y.image[j].image:y.image[j],ue[j]=it(y,ue[j]);const Ee=ue[0],we=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),He=_(y.internalFormat,we,fe,y.colorSpace),De=y.isVideoTexture!==!0,tt=X.__version===void 0||q===!0,L=Z.dataReady;let ne=C(y,Ee);Fe(n.TEXTURE_CUBE_MAP,y);let H;if($e){De&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,He,Ee.width,Ee.height);for(let j=0;j<6;j++){H=ue[j].mipmaps;for(let ce=0;ce<H.length;ce++){const oe=H[ce];y.format!==rn?we!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,He,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,oe.width,oe.height,we,fe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,He,oe.width,oe.height,0,we,fe,oe.data)}}}else{if(H=y.mipmaps,De&&tt){H.length>0&&ne++;const j=Me(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,He,j.width,j.height)}for(let j=0;j<6;j++)if(K){De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,we,fe,ue[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,ue[j].width,ue[j].height,0,we,fe,ue[j].data);for(let ce=0;ce<H.length;ce++){const Ce=H[ce].image[j].image;De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,Ce.width,Ce.height,we,fe,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,He,Ce.width,Ce.height,0,we,fe,Ce.data)}}else{De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,fe,ue[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,we,fe,ue[j]);for(let ce=0;ce<H.length;ce++){const oe=H[ce];De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,we,fe,oe.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,He,we,fe,oe.image[j])}}}m(y)&&h(n.TEXTURE_CUBE_MAP),X.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function _e(A,y,z,q,Z,X){const ge=s.convert(z.format,z.colorSpace),se=s.convert(z.type),de=_(z.internalFormat,ge,se,z.colorSpace),$e=i.get(y),K=i.get(z);if(K.__renderTarget=y,!$e.__hasExternalTextures){const ue=Math.max(1,y.width>>X),Ee=Math.max(1,y.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,de,ue,Ee,y.depth,0,ge,se,null):t.texImage2D(Z,X,de,ue,Ee,0,ge,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,K.__webglTexture,0,Oe(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,K.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(A,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,X=x(y.stencilBuffer,Z),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Oe(y);Be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,X,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,A)}else{const q=y.textures;for(let Z=0;Z<q.length;Z++){const X=q[Z],ge=s.convert(X.format,X.colorSpace),se=s.convert(X.type),de=_(X.internalFormat,ge,se,X.colorSpace),$e=Oe(y);z&&Be(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,de,y.width,y.height):Be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,de,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,de,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const Z=q.__webglTexture,X=Oe(y);if(y.depthTexture.format===ji)Be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===er)Be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Re(A){const y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");be(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),re(y.__webglDepthbuffer[q],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),re(y.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(A,y,z){const q=i.get(A);y!==void 0&&_e(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Re(A)}function dt(A){const y=A.texture,z=i.get(A),q=i.get(y);A.addEventListener("dispose",b);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let de=0;de<y.mipmaps.length;de++)z.__webglFramebuffer[se][de]=n.createFramebuffer()}else z.__webglFramebuffer[se]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)z.__webglFramebuffer[se]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ge)for(let se=0,de=Z.length;se<de;se++){const $e=i.get(Z[se]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Be(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const de=Z[se];z.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const $e=s.convert(de.format,de.colorSpace),K=s.convert(de.type),ue=_(de.internalFormat,$e,K,de.colorSpace,A.isXRRenderTarget===!0),Ee=Oe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,z.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),re(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)_e(z.__webglFramebuffer[se][de],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else _e(z.__webglFramebuffer[se],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,de=Z.length;se<de;se++){const $e=Z[se],K=i.get($e);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),Fe(n.TEXTURE_2D,$e),_e(z.__webglFramebuffer,A,$e,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m($e)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Fe(se,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)_e(z.__webglFramebuffer[de],A,y,n.COLOR_ATTACHMENT0,se,de);else _e(z.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,se,0);m(y)&&h(se),t.unbindTexture()}A.depthBuffer&&Re(A)}function Xe(A){const y=A.textures;for(let z=0,q=y.length;z<q;z++){const Z=y[z];if(m(Z)){const X=w(A),ge=i.get(Z).__webglTexture;t.bindTexture(X,ge),h(X),t.unbindTexture()}}}const _t=[],N=[];function Gt(A){if(A.samples>0){if(Be(A)===!1){const y=A.textures,z=A.width,q=A.height;let Z=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),se=y.length>1;if(se)for(let de=0;de<y.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<y.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const $e=i.get(y[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,z,q,0,0,z,q,Z,n.NEAREST),c===!0&&(_t.length=0,N.length=0,_t.push(n.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(_t.push(X),N.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<y.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const $e=i.get(y[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Oe(A){return Math.min(r.maxSamples,A.samples)}function Be(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function it(A,y){const z=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==sr&&z!==Wn&&(qe.getTransfer(z)===Qe?(q!==rn||Z!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Be}function X0(n,e){function t(i,r=Wn){let s;const o=qe.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return n.BYTE;if(i===jl)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Na)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Ir)return n.HALF_FLOAT;if(i===Zl)return n.ALPHA;if(i===Kl)return n.RGB;if(i===rn)return n.RGBA;if(i===Jl)return n.LUMINANCE;if(i===Ql)return n.LUMINANCE_ALPHA;if(i===ji)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===ed)return n.RED;if(i===Fa)return n.RED_INTEGER;if(i===td)return n.RG;if(i===ka)return n.RG_INTEGER;if(i===Oa)return n.RGBA_INTEGER;if(i===gs||i===xs||i===vs||i===Ms)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qo||i===jo||i===Yo||i===Zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ko||i===Jo||i===Qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ko||i===Jo)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ea||i===ta||i===na||i===ia||i===ra||i===sa||i===oa||i===aa||i===ca||i===la||i===da||i===ua||i===fa||i===ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ea)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ta)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===na)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ia)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ra)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sa)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oa)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===aa)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ca)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===la)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===da)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ua)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fa)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ha)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ys||i===pa||i===ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ys)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===_a||i===ga||i===xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ys)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class $0 extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
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

}`;class Z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:j0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K0 extends or{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,f=null,p=null,g=null;const v=new Z0,m=t.getContextAttributes();let h=null,w=null;const _=[],x=[],C=new Ve;let T=null;const b=new $t;b.viewport=new pt;const R=new $t;R.viewport=new pt;const S=[b,R],M=new $0;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=_[$];return ee===void 0&&(ee=new Ro,_[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=_[$];return ee===void 0&&(ee=new Ro,_[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=_[$];return ee===void 0&&(ee=new Ro,_[$]=ee),ee.getHandSpace()};function F($){const ee=x.indexOf($.inputSource);if(ee===-1)return;const _e=_[ee];_e!==void 0&&(_e.update($.inputSource,$.frame,l||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<_.length;$++){const ee=x[$];ee!==null&&(x[$]=null,_[$].disconnect(ee))}P=null,k=null,v.reset(),e.setRenderTarget(h),p=null,f=null,u=null,r=null,w=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new yi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,_e=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?er:ji,_e=m.stencil?Qi:Mi);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new yi(f.textureWidth,f.textureHeight,{format:rn,type:Nn,depthTexture:new gd(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y($){for(let ee=0;ee<$.removed.length;ee++){const _e=$.removed[ee],re=x.indexOf(_e);re>=0&&(x[re]=null,_[re].disconnect(_e))}for(let ee=0;ee<$.added.length;ee++){const _e=$.added[ee];let re=x.indexOf(_e);if(re===-1){for(let Re=0;Re<_.length;Re++)if(Re>=x.length){x.push(_e),re=Re;break}else if(x[Re]===null){x[Re]=_e,re=Re;break}if(re===-1)break}const be=_[re];be&&be.connect(_e)}}const W=new U,Q=new U;function G($,ee,_e){W.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const re=W.distanceTo(Q),be=ee.projectionMatrix.elements,Re=_e.projectionMatrix.elements,ke=be[14]/(be[10]-1),dt=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],_t=(be[9]-1)/be[5],N=(be[8]-1)/be[0],Gt=(Re[8]+1)/Re[0],Oe=ke*N,Be=ke*Gt,Se=re/(-N+Gt),it=Se*-N;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=ke+Se,A=dt+Se,y=Oe-it,z=Be+(re-it),q=Xe*dt/A*Me,Z=_t*dt/A*Me;$.projectionMatrix.makePerspective(y,z,q,Z,Me,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,_e=$.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),M.near=R.near=b.near=ee,M.far=R.far=b.far=_e,(P!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),b.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,M.layers.mask=b.layers.mask|R.layers.mask;const re=$.parent,be=M.cameras;ie(M,re);for(let Re=0;Re<be.length;Re++)ie(be[Re],re);be.length===2?G(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),le($,M,re)};function le($,ee,_e){_e===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=va*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ve=null;function Fe($,ee){if(d=ee.getViewerPose(l||o),g=ee,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let re=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Re=0;Re<_e.length;Re++){const ke=_e[Re];let dt=null;if(p!==null)dt=p.getViewport(ke);else{const _t=u.getViewSubImage(f,ke);dt=_t.viewport,Re===0&&(e.setRenderTargetTextures(w,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(w))}let Xe=S[Re];Xe===void 0&&(Xe=new $t,Xe.layers.enable(Re),Xe.viewport=new pt,S[Re]=Xe),Xe.matrix.fromArray(ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(dt.x,dt.y,dt.width,dt.height),Re===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Xe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Re=u.getDepthInformation(_e[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,r.renderState)}}for(let _e=0;_e<_.length;_e++){const re=x[_e],be=_[_e];re!==null&&be!==void 0&&be.update(re,ee,l||o)}ve&&ve($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const et=new md;et.setAnimationLoop(Fe),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const ai=new pn,J0=new mt;function Q0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,fd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,w,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Nt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Nt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),_=w.envMap,x=w.envMapRotation;_&&(m.envMap.value=_,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(ai)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e_(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){const x=_.program;i.uniformBlockBinding(w,x)}function l(w,_){let x=r[w.id];x===void 0&&(g(w),x=d(w),r[w.id]=x,w.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(w,C);const T=e.render.frame;s[w.id]!==T&&(f(w),s[w.id]=T)}function d(w){const _=u();w.__bindingPointIndex=_;const x=n.createBuffer(),C=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const _=r[w.id],x=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,b=x.length;T<b;T++){const R=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(p(P,T,S,C)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Y=0;Y<F.length;Y++){const W=F[Y],Q=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,_,x,C){const T=w.value,b=_+"_"+x;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{const R=C[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(w){const _=w.uniforms;let x=0;const C=16;for(let b=0,R=_.length;b<R;b++){const S=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,P=S.length;M<P;M++){const k=S[M],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Y=F.length;V<Y;V++){const W=F[V],Q=v(W),G=x%C,ie=G%Q.boundary,le=G+ie;x+=ie,le!==0&&C-le<Q.storage&&(x+=C-le),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Q.storage}}}const T=x%C;return T>0&&(x+=C-T),w.__size=x,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){const _=w.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class t_{constructor(e={}){const{canvas:t=Hu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const w=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=jn,this.toneMappingExposure=1;const x=this;let C=!1,T=0,b=0,R=null,S=-1,M=null;const P=new pt,k=new pt;let F=null;const V=new Ge(0);let Y=0,W=t.width,Q=t.height,G=1,ie=null,le=null;const ve=new pt(0,0,W,Q),Fe=new pt(0,0,W,Q);let et=!1;const $=new Ga;let ee=!1,_e=!1;const re=new mt,be=new mt,Re=new U,ke=new pt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function _t(){return R===null?G:1}let N=i;function Gt(E,I){return t.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const I="webgl2";if(N=Gt(I,E),N===null)throw Gt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Be,Se,it,Me,A,y,z,q,Z,X,ge,se,de,$e,K,ue,Ee,we,fe,He,De,tt,L;function ne(){Oe=new om(N),Oe.init(),De=new X0(N,Oe),Be=new em(N,Oe,e,De),Se=new G0(N,Oe),Be.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),it=new lm(N),Me=new A0,A=new W0(N,Oe,Se,Me,Be,De,it),y=new nm(x),z=new sm(x),q=new _f(N),tt=new Jp(N,q),Z=new am(N,q,it,tt),X=new um(N,Z,q,it),we=new dm(N,Be,A),K=new tm(Me),ge=new T0(x,y,z,Oe,Be,tt,K),se=new Q0(x,Me),de=new C0,$e=new U0(Oe),Ee=new Kp(x,y,z,Se,X,p,c),ue=new B0(x,X,Be),L=new e_(N,it,Be,Se),fe=new Qp(N,Oe,it),He=new cm(N,Oe,it),it.programs=ge.programs,x.capabilities=Be,x.extensions=Oe,x.properties=Me,x.renderLists=de,x.shadowMap=ue,x.state=Se,x.info=it}ne();const H=new K0(x,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,Q,!1))},this.getSize=function(E){return E.set(W,Q)},this.setSize=function(E,I,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Q=I,t.width=Math.floor(E*G),t.height=Math.floor(I*G),O===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(W*G,Q*G).floor()},this.setDrawingBufferSize=function(E,I,O){W=E,Q=I,G=O,t.width=Math.floor(E*O),t.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,I,O,B){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,I,O,B),Se.viewport(P.copy(ve).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,I,O,B){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,I,O,B),Se.scissor(k.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){Se.setScissorTest(et=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,I=!0,O=!0){let B=0;if(E){let D=!1;if(R!==null){const J=R.texture.format;D=J===Oa||J===ka||J===Fa}if(D){const J=R.texture.type,ae=J===Nn||J===Mi||J===Ar||J===Qi||J===Ua||J===za,he=Ee.getClearColor(),pe=Ee.getClearAlpha(),Te=he.r,Pe=he.g,me=he.b;ae?(g[0]=Te,g[1]=Pe,g[2]=me,g[3]=pe,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Te,v[1]=Pe,v[2]=me,v[3]=pe,N.clearBufferiv(N.COLOR,0,v))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),$e.dispose(),Me.dispose(),y.dispose(),z.dispose(),X.dispose(),tt.dispose(),L.dispose(),ge.dispose(),H.dispose(),H.removeEventListener("sessionstart",oc),H.removeEventListener("sessionend",ac),ti.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=it.autoReset,I=ue.enabled,O=ue.autoUpdate,B=ue.needsUpdate,D=ue.type;ne(),it.autoReset=E,ue.enabled=I,ue.autoUpdate=O,ue.needsUpdate=B,ue.type=D}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const I=E.target;I.removeEventListener("dispose",Ce),ft(I)}function ft(E){Tt(E),Me.remove(E)}function Tt(E){const I=Me.get(E).programs;I!==void 0&&(I.forEach(function(O){ge.releaseProgram(O)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,B,D,J){I===null&&(I=dt);const ae=D.isMesh&&D.matrixWorld.determinant()<0,he=jd(E,I,O,B,D);Se.setMaterial(B,ae);let pe=O.index,Te=1;if(B.wireframe===!0){if(pe=Z.getWireframeAttribute(O),pe===void 0)return;Te=2}const Pe=O.drawRange,me=O.attributes.position;let je=Pe.start*Te,nt=(Pe.start+Pe.count)*Te;J!==null&&(je=Math.max(je,J.start*Te),nt=Math.min(nt,(J.start+J.count)*Te)),pe!==null?(je=Math.max(je,0),nt=Math.min(nt,pe.count)):me!=null&&(je=Math.max(je,0),nt=Math.min(nt,me.count));const rt=nt-je;if(rt<0||rt===1/0)return;tt.setup(D,B,he,O,pe);let Pt,Ye=fe;if(pe!==null&&(Pt=q.get(pe),Ye=He,Ye.setIndex(Pt)),D.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*_t()),Ye.setMode(N.LINES)):Ye.setMode(N.TRIANGLES);else if(D.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),Se.setLineWidth(xe*_t()),D.isLineSegments?Ye.setMode(N.LINES):D.isLineLoop?Ye.setMode(N.LINE_LOOP):Ye.setMode(N.LINE_STRIP)}else D.isPoints?Ye.setMode(N.POINTS):D.isSprite&&Ye.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ye.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xe=D._multiDrawStarts,gn=D._multiDrawCounts,Ze=D._multiDrawCount,Zt=pe?q.get(pe).bytesPerElement:1,Ei=Me.get(B).currentProgram.getUniforms();for(let Ft=0;Ft<Ze;Ft++)Ei.setValue(N,"_gl_DrawID",Ft),Ye.render(xe[Ft]/Zt,gn[Ft])}else if(D.isInstancedMesh)Ye.renderInstances(je,rt,D.count);else if(O.isInstancedBufferGeometry){const xe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gn=Math.min(O.instanceCount,xe);Ye.renderInstances(je,rt,gn)}else Ye.render(je,rt)};function Ke(E,I,O){E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=Nt,E.needsUpdate=!0,Hr(E,I,O),E.side=Zn,E.needsUpdate=!0,Hr(E,I,O),E.side=wn):Hr(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),h=$e.get(O),h.init(I),_.push(h),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),E!==O&&E.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const B=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){const he=J[ae];Ke(he,O,D),B.add(he)}else Ke(J,O,D),B.add(J)}),_.pop(),h=null,B},this.compileAsync=function(E,I,O=null){const B=this.compile(E,I,O);return new Promise(D=>{function J(){if(B.forEach(function(ae){Me.get(ae).currentProgram.isReady()&&B.delete(ae)}),B.size===0){D(E);return}setTimeout(J,10)}Oe.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Yt=null;function _n(E){Yt&&Yt(E)}function oc(){ti.stop()}function ac(){ti.start()}const ti=new md;ti.setAnimationLoop(_n),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){Yt=E,H.setAnimationLoop(E),E===null?ti.stop():ti.start()},H.addEventListener("sessionstart",oc),H.addEventListener("sessionend",ac),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,R),h=$e.get(E,_.length),h.init(I),_.push(h),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ee=K.init(this.clippingPlanes,_e),m=de.get(E,w.length),m.init(),w.push(m),H.enabled===!0&&H.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&Ks(J,I,-1/0,x.sortObjects)}Ks(E,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,le),Xe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Xe&&Ee.addToRenderList(m,E),this.info.render.frame++,ee===!0&&K.beginShadows();const O=h.state.shadowsArray;ue.render(O,E,I),ee===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,D=m.transmissive;if(h.setupLights(),I.isArrayCamera){const J=I.cameras;if(D.length>0)for(let ae=0,he=J.length;ae<he;ae++){const pe=J[ae];lc(B,D,E,pe)}Xe&&Ee.render(E);for(let ae=0,he=J.length;ae<he;ae++){const pe=J[ae];cc(m,E,pe,pe.viewport)}}else D.length>0&&lc(B,D,E,I),Xe&&Ee.render(E),cc(m,E,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,I),tt.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(h=_[_.length-1],ee===!0&&K.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ks(E,I,O,B){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){B&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const ae=X.update(E),he=E.material;he.visible&&m.push(E,ae,he,O,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ae=X.update(E),he=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ke.copy(ae.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(he)){const pe=ae.groups;for(let Te=0,Pe=pe.length;Te<Pe;Te++){const me=pe[Te],je=he[me.materialIndex];je&&je.visible&&m.push(E,ae,je,O,ke.z,me)}}else he.visible&&m.push(E,ae,he,O,ke.z,null)}}const J=E.children;for(let ae=0,he=J.length;ae<he;ae++)Ks(J[ae],I,O,B)}function cc(E,I,O,B){const D=E.opaque,J=E.transmissive,ae=E.transparent;h.setupLightsView(O),ee===!0&&K.setGlobalState(x.clippingPlanes,O),B&&Se.viewport(P.copy(B)),D.length>0&&Br(D,I,O),J.length>0&&Br(J,I,O),ae.length>0&&Br(ae,I,O),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function lc(E,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new yi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ir:Nn,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const J=h.state.transmissionRenderTarget[B.id],ae=B.viewport||P;J.setSize(ae.z,ae.w);const he=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(V),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Ee.render(O);const pe=x.toneMapping;x.toneMapping=jn;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),ee===!0&&K.setGlobalState(x.clippingPlanes,B),Br(E,O,B),A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let me=0,je=I.length;me<je;me++){const nt=I[me],rt=nt.object,Pt=nt.geometry,Ye=nt.material,xe=nt.group;if(Ye.side===wn&&rt.layers.test(B.layers)){const gn=Ye.side;Ye.side=Nt,Ye.needsUpdate=!0,dc(rt,O,B,Pt,Ye,xe),Ye.side=gn,Ye.needsUpdate=!0,Pe=!0}}Pe===!0&&(A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J))}x.setRenderTarget(he),x.setClearColor(V,Y),Te!==void 0&&(B.viewport=Te),x.toneMapping=pe}function Br(E,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,J=E.length;D<J;D++){const ae=E[D],he=ae.object,pe=ae.geometry,Te=B===null?ae.material:B,Pe=ae.group;he.layers.test(O.layers)&&dc(he,I,O,pe,Te,Pe)}}function dc(E,I,O,B,D,J){E.onBeforeRender(x,I,O,B,D,J),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(x,I,O,B,E,J),D.transparent===!0&&D.side===wn&&D.forceSinglePass===!1?(D.side=Nt,D.needsUpdate=!0,x.renderBufferDirect(O,I,B,D,E,J),D.side=Zn,D.needsUpdate=!0,x.renderBufferDirect(O,I,B,D,E,J),D.side=wn):x.renderBufferDirect(O,I,B,D,E,J),E.onAfterRender(x,I,O,B,D,J)}function Hr(E,I,O){I.isScene!==!0&&(I=dt);const B=Me.get(E),D=h.state.lights,J=h.state.shadowsArray,ae=D.state.version,he=ge.getParameters(E,D.state,J,I,O),pe=ge.getProgramCacheKey(he);let Te=B.programs;B.environment=E.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(E.isMeshStandardMaterial?z:y).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",Ce),Te=new Map,B.programs=Te);let Pe=Te.get(pe);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===ae)return fc(E,he),Pe}else he.uniforms=ge.getUniforms(E),E.onBeforeCompile(he,x),Pe=ge.acquireProgram(he,pe),Te.set(pe,Pe),B.uniforms=he.uniforms;const me=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(me.clippingPlanes=K.uniform),fc(E,he),B.needsLights=Zd(E),B.lightsStateVersion=ae,B.needsLights&&(me.ambientLightColor.value=D.state.ambient,me.lightProbe.value=D.state.probe,me.directionalLights.value=D.state.directional,me.directionalLightShadows.value=D.state.directionalShadow,me.spotLights.value=D.state.spot,me.spotLightShadows.value=D.state.spotShadow,me.rectAreaLights.value=D.state.rectArea,me.ltc_1.value=D.state.rectAreaLTC1,me.ltc_2.value=D.state.rectAreaLTC2,me.pointLights.value=D.state.point,me.pointLightShadows.value=D.state.pointShadow,me.hemisphereLights.value=D.state.hemi,me.directionalShadowMap.value=D.state.directionalShadowMap,me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,me.spotShadowMap.value=D.state.spotShadowMap,me.spotLightMatrix.value=D.state.spotLightMatrix,me.spotLightMap.value=D.state.spotLightMap,me.pointShadowMap.value=D.state.pointShadowMap,me.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function uc(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ss.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function fc(E,I){const O=Me.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function jd(E,I,O,B,D){I.isScene!==!0&&(I=dt),A.resetTextureUnits();const J=I.fog,ae=B.isMeshStandardMaterial?I.environment:null,he=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:sr,pe=(B.isMeshStandardMaterial?z:y).get(B.envMap||ae),Te=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),me=!!O.morphAttributes.position,je=!!O.morphAttributes.normal,nt=!!O.morphAttributes.color;let rt=jn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rt=x.toneMapping);const Pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ye=Pt!==void 0?Pt.length:0,xe=Me.get(B),gn=h.state.lights;if(ee===!0&&(_e===!0||E!==M)){const Vt=E===M&&B.id===S;K.setState(B,E,Vt)}let Ze=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==gn.state.version||xe.outputColorSpace!==he||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==pe||B.fog===!0&&xe.fog!==J||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==K.numPlanes||xe.numIntersection!==K.numIntersection)||xe.vertexAlphas!==Te||xe.vertexTangents!==Pe||xe.morphTargets!==me||xe.morphNormals!==je||xe.morphColors!==nt||xe.toneMapping!==rt||xe.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,xe.__version=B.version);let Zt=xe.currentProgram;Ze===!0&&(Zt=Hr(B,I,D));let Ei=!1,Ft=!1,ur=!1;const st=Zt.getUniforms(),ln=xe.uniforms;if(Se.useProgram(Zt.program)&&(Ei=!0,Ft=!0,ur=!0),B.id!==S&&(S=B.id,Ft=!0),Ei||M!==E){Se.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),Vu(re),Wu(re),st.setValue(N,"projectionMatrix",re)):st.setValue(N,"projectionMatrix",E.projectionMatrix),st.setValue(N,"viewMatrix",E.matrixWorldInverse);const Un=st.map.cameraPosition;Un!==void 0&&Un.setValue(N,Re.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ft=!0,ur=!0)}if(D.isSkinnedMesh){st.setOptional(N,D,"bindMatrix"),st.setOptional(N,D,"bindMatrixInverse");const Vt=D.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),st.setValue(N,"boneTexture",Vt.boneTexture,A))}D.isBatchedMesh&&(st.setOptional(N,D,"batchingTexture"),st.setValue(N,"batchingTexture",D._matricesTexture,A),st.setOptional(N,D,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",D._indirectTexture,A),st.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",D._colorsTexture,A));const fr=O.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&we.update(D,O,Zt),(Ft||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,st.setValue(N,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=pe,ln.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(ln.envMapIntensity.value=I.environmentIntensity),Ft&&(st.setValue(N,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&Yd(ln,ur),J&&B.fog===!0&&se.refreshFogUniforms(ln,J),se.refreshMaterialUniforms(ln,B,G,Q,h.state.transmissionRenderTarget[E.id]),Ss.upload(N,uc(xe),ln,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ss.upload(N,uc(xe),ln,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(N,"center",D.center),st.setValue(N,"modelViewMatrix",D.modelViewMatrix),st.setValue(N,"normalMatrix",D.normalMatrix),st.setValue(N,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Vt=B.uniformsGroups;for(let Un=0,zn=Vt.length;Un<zn;Un++){const hc=Vt[Un];L.update(hc,Zt),L.bind(hc,Zt)}}return Zt}function Yd(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Zd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,I,O){Me.get(E.texture).__webglTexture=I,Me.get(E.depthTexture).__webglTexture=O;const B=Me.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const O=Me.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){R=E,T=I,b=O;let B=!0,D=null,J=!1,ae=!1;if(E){const pe=Me.get(E);if(pe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(pe.__hasExternalTextures)A.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const me=E.depthTexture;if(pe.__boundDepthTexture!==me){if(me!==null&&Me.has(me)&&(E.width!==me.image.width||E.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ae=!0);const Pe=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?D=Pe[I][O]:D=Pe[I],J=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?D=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?D=Pe[O]:D=Pe,P.copy(E.viewport),k.copy(E.scissor),F=E.scissorTest}else P.copy(ve).multiplyScalar(G).floor(),k.copy(Fe).multiplyScalar(G).floor(),F=et;if(Se.bindFramebuffer(N.FRAMEBUFFER,D)&&B&&Se.drawBuffers(E,D),Se.viewport(P),Se.scissor(k),Se.setScissorTest(F),J){const pe=Me.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,O)}else if(ae){const pe=Me.get(E.texture),Te=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,pe.__webglTexture,O||0,Te)}S=-1},this.readRenderTargetPixels=function(E,I,O,B,D,J,ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){Se.bindFramebuffer(N.FRAMEBUFFER,he);try{const pe=E.texture,Te=pe.format,Pe=pe.type;if(!Be.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-B&&O>=0&&O<=E.height-D&&N.readPixels(I,O,B,D,De.convert(Te),De.convert(Pe),J)}finally{const pe=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(E,I,O,B,D,J,ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){const pe=E.texture,Te=pe.format,Pe=pe.type;if(!Be.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-B&&O>=0&&O<=E.height-D){Se.bindFramebuffer(N.FRAMEBUFFER,he);const me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.bufferData(N.PIXEL_PACK_BUFFER,J.byteLength,N.STREAM_READ),N.readPixels(I,O,B,D,De.convert(Te),De.convert(Pe),0);const je=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,je);const nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gu(N,nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,J),N.deleteBuffer(me),N.deleteSync(nt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,O=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(E.image.width*B),J=Math.floor(E.image.height*B),ae=I!==null?I.x:0,he=I!==null?I.y:0;A.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,ae,he,D,J),Se.unbindTexture()},this.copyTextureToTexture=function(E,I,O=null,B=null,D=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],I=arguments[2],D=arguments[3]||0,O=null);let J,ae,he,pe,Te,Pe,me,je,nt;const rt=E.isCompressedTexture?E.mipmaps[D]:E.image;O!==null?(J=O.max.x-O.min.x,ae=O.max.y-O.min.y,he=O.isBox3?O.max.z-O.min.z:1,pe=O.min.x,Te=O.min.y,Pe=O.isBox3?O.min.z:0):(J=rt.width,ae=rt.height,he=rt.depth||1,pe=0,Te=0,Pe=0),B!==null?(me=B.x,je=B.y,nt=B.z):(me=0,je=0,nt=0);const Pt=De.convert(I.format),Ye=De.convert(I.type);let xe;I.isData3DTexture?(A.setTexture3D(I,0),xe=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(A.setTexture2DArray(I,0),xe=N.TEXTURE_2D_ARRAY):(A.setTexture2D(I,0),xe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const gn=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Zt=N.getParameter(N.UNPACK_SKIP_PIXELS),Ei=N.getParameter(N.UNPACK_SKIP_ROWS),Ft=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const ur=E.isDataArrayTexture||E.isData3DTexture,st=I.isDataArrayTexture||I.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const ln=Me.get(E),fr=Me.get(I),Vt=Me.get(ln.__renderTarget),Un=Me.get(fr.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let zn=0;zn<he;zn++)ur&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,D,Pe+zn),E.isDepthTexture?(st&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,D,nt+zn),N.blitFramebuffer(pe,Te,J,ae,me,je,J,ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):st?N.copyTexSubImage3D(xe,D,me,je,nt+zn,pe,Te,J,ae):N.copyTexSubImage2D(xe,D,me,je,nt+zn,pe,Te,J,ae);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(xe,D,me,je,nt,J,ae,he,Pt,Ye,rt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,D,me,je,nt,J,ae,he,Pt,rt.data):N.texSubImage3D(xe,D,me,je,nt,J,ae,he,Pt,Ye,rt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,me,je,J,ae,Pt,Ye,rt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,me,je,rt.width,rt.height,Pt,rt.data):N.texSubImage2D(N.TEXTURE_2D,D,me,je,J,ae,Pt,Ye,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,gn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft),D===0&&I.generateMipmaps&&N.generateMipmap(xe),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O=null,B=null,D=0){return E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,E=arguments[2],I=arguments[3],D=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,O,B,D)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){T=0,b=0,R=null,Se.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Wa{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new Wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n_ extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cn extends cn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],f=[],p=[];let g=0;const v=[],m=i/2;let h=0;w(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function w(){const x=new U,C=new U;let T=0;const b=(t-e)/i;for(let R=0;R<=s;R++){const S=[],M=R/s,P=M*(t-e)+e;for(let k=0;k<=r;k++){const F=k/r,V=F*c+a,Y=Math.sin(V),W=Math.cos(V);C.x=P*Y,C.y=-M*i+m,C.z=P*W,u.push(C.x,C.y,C.z),x.set(Y,b,W).normalize(),f.push(x.x,x.y,x.z),p.push(F,1-M),S.push(g++)}v.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=v[S][R],P=v[S+1][R],k=v[S+1][R+1],F=v[S][R+1];(e>0||S!==0)&&(d.push(M,P,F),T+=3),(t>0||S!==s-1)&&(d.push(P,k,F),T+=3)}l.addGroup(h,T,0),h+=T}function _(x){const C=g,T=new Ve,b=new U;let R=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let k=0;k<=r;k++){const V=k/r*c+a,Y=Math.cos(V),W=Math.sin(V);b.x=S*W,b.y=m*M,b.z=S*Y,u.push(b.x,b.y,b.z),f.push(0,M,0),T.x=Y*.5+.5,T.y=W*.5*M+.5,p.push(T.x,T.y),g++}for(let k=0;k<r;k++){const F=C+k,V=P+k;x===!0?d.push(V,V+1,F):d.push(V+1,V,F),R+=3}l.addGroup(h,R,x===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xa extends Cn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $a extends cn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Mt(s,3)),this.setAttribute("normal",new Mt(s.slice(),3)),this.setAttribute("uv",new Mt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new U,x=new U,C=new U;for(let T=0;T<t.length;T+=3)p(t[T+0],_),p(t[T+1],x),p(t[T+2],C),c(_,x,C,w)}function c(w,_,x,C){const T=C+1,b=[];for(let R=0;R<=T;R++){b[R]=[];const S=w.clone().lerp(x,R/T),M=_.clone().lerp(x,R/T),P=T-R;for(let k=0;k<=P;k++)k===0&&R===T?b[R][k]=S:b[R][k]=S.clone().lerp(M,k/P)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(b[R][M+1]),f(b[R+1][M]),f(b[R][M])):(f(b[R][M+1]),f(b[R+1][M+1]),f(b[R+1][M]))}}function l(w){const _=new U;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(w),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function d(){const w=new U;for(let _=0;_<s.length;_+=3){w.x=s[_+0],w.y=s[_+1],w.z=s[_+2];const x=m(w)/2/Math.PI+.5,C=h(w)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const _=o[w+0],x=o[w+2],C=o[w+4],T=Math.max(_,x,C),b=Math.min(_,x,C);T>.9&&b<.1&&(_<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function f(w){s.push(w.x,w.y,w.z)}function p(w,_){const x=w*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const w=new U,_=new U,x=new U,C=new U,T=new Ve,b=new Ve,R=new Ve;for(let S=0,M=0;S<s.length;S+=9,M+=6){w.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),T.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),C.copy(w).add(_).add(x).divideScalar(3);const P=m(C);v(T,M+0,w,P),v(b,M+2,_,P),v(R,M+4,x,P)}}function v(w,_,x,C){C<0&&w.x===1&&(o[_]=w.x-1),x.x===0&&x.z===0&&(o[_]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function h(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.vertices,e.indices,e.radius,e.details)}}class qa extends $a{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qa(e.radius,e.detail)}}class $s extends cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new U,f=new U,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const w=[],_=h/i;let x=0;h===0&&o===0?x=.5/t:h===i&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+x,1-_),w.push(l++)}d.push(w)}for(let h=0;h<i;h++)for(let w=0;w<t;w++){const _=d[h][w+1],x=d[h][w],C=d[h+1][w],T=d[h+1][w+1];(h!==0||o>0)&&p.push(_,x,T),(h!==i-1||c<Math.PI)&&p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ja extends cn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new U,u=new U,f=new U;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,w=(r+1)*p+g;o.push(v,m,w),o.push(m,h,w)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class i_ extends zr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sd extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class r_ extends Sd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Co=new mt,hl=new U,pl=new U;class s_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o_ extends s_{constructor(){super(new _d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a_ extends Sd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new o_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);function We(n){let e=n>>>0||1;return{get state(){return e>>>0},set state(t){e=t>>>0||1},next(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},range(t,i){return t+this.next()*(i-t)},pick(t){return t[Math.floor(this.next()*t.length)]}}}const Ns=2,Wi=5e3,c_=new Set(["theft","disturbance","assault","kill","accident","found_corpse","noise","sabotage"]);function Us(){const n=[];let e=0;return{events:n,append(t,i){if(!c_.has(t))throw new Error(`event type non valido: ${t}`);const r=i.severity??.5;if(!(r>=0&&r<=1))throw new Error(`severity fuori range: ${r}`);const s={id:`ev${++e}`,t:i.t??0,type:t,severity:r,x:i.x??0,z:i.z??0,actorId:i.actorId??null,victimId:i.victimId??null,place:i.place??"sconosciuto",moved:!!i.moved,witnesses:[]};for(n.push(s);n.length>Wi;)n.shift();return s},addWitness(t,i){t.witnesses.includes(i)||t.witnesses.push(i)},byId(t){return n.find(i=>i.id===t)},serialize(){return{seq:e,events:n}},restore(t){e=t.seq??0,n.length=0;const i=t.events??[],r=Math.max(0,i.length-Wi);for(let s=r;s<i.length;s++)n.push(i[s])}}}const ze={size:100,road:{minX:-50,maxX:50,minZ:-4,maxZ:4},piazza:{cx:37,cz:20,w:18,d:16},buildings:[{id:"bar",name:"Bar Centrale",x:-20,z:20,w:16,d:12,h:5,interior:!0,door:{side:"S",at:-20,width:2.4}},{id:"b2",name:"Palazzo (appartamenti)",x:12,z:20,w:8,d:12,h:9},{id:"b3",name:"Casa B3",x:24,z:20,w:8,d:12,h:6},{id:"b4",name:"Casa B4",x:-18,z:-20,w:14,d:10,h:6},{id:"b5",name:"Casa B5",x:10,z:-20,w:16,d:10,h:5}],coverWalls:[{x:29.5,z:14,w:5,d:.5},{x:-32.4,z:16,w:.5,d:5}],nodes:{road_w:{x:-40,z:0},road_c:{x:0,z:0},road_e:{x:44,z:0},vic_n:{x:17,z:13},vic_s:{x:18,z:-2},pia_c:{x:37,z:20},pia_w:{x:29,z:20},pia_e:{x:44,z:20},bar_in:{x:-20,z:20},bar_out:{x:-20,z:11},b4_door:{x:-18,z:-14},b5_door:{x:10,z:-14},sq_s:{x:0,z:-10},pia_s:{x:37,z:8},apt:{x:12,z:12.3},svc_in:{x:-34.5,z:20},svc_out:{x:-32,z:8},court:{x:-20,z:30},north_c:{x:-20,z:33},north_w:{x:-30,z:33},north_e:{x:30,z:33}},edges:[["road_w","road_c"],["road_c","road_e"],["road_c","vic_s"],["vic_s","vic_n"],["pia_w","pia_c"],["pia_c","pia_e"],["pia_c","pia_s"],["pia_s","vic_n"],["pia_s","pia_w"],["vic_s","road_c"],["road_c","sq_s"],["sq_s","b4_door"],["sq_s","b5_door"],["bar_out","road_c"],["bar_in","bar_out"],["road_e","pia_e"],["pia_e","pia_s"],["apt","vic_n"],["apt","vic_s"],["svc_in","svc_out"],["svc_out","road_w"],["court","north_c"],["north_c","north_w"],["north_c","north_e"],["north_w","road_w"],["north_e","pia_e"]],props:[{kind:"lamp",x:-30,z:6},{kind:"lamp",x:-5,z:-6},{kind:"lamp",x:18,z:12},{kind:"lamp",x:34,z:26},{kind:"lamp",x:-38,z:24},{kind:"bench",x:33,z:24},{kind:"bench",x:40,z:17},{kind:"crates",x:15.8,z:8},{kind:"yardstack",x:-38,z:20},{kind:"tree",x:-34,z:24},{kind:"tree",x:40,z:-8},{kind:"tree",x:-8,z:-28}]};function Ed(){return{yardstack:{kind:"sabotage",x:-38,z:20,state:"ok"}}}const ml={road_w:"strada ovest",road_c:"strada centrale",road_e:"strada est",vic_n:"vicolo nord",vic_s:"vicolo sud",pia_c:"piazza",pia_w:"piazza ovest",pia_e:"piazza est",pia_s:"ingresso piazza",bar_in:"bar (interno)",bar_out:"fuori dal bar",b4_door:"casa sud-ovest",b5_door:"casa sud-est",sq_s:"piazzale sud",apt:"palazzo (portone)",svc_in:"deposito",svc_out:"piazzale deposito",court:"corte retrostante",north_c:"vicolo nord",north_w:"vicolo nord-ovest",north_e:"vicolo nord-est"};let l_=0;const d_=new Map;function Rr(){return l_}function cr(){const n=[];for(const e of ze.buildings){const t=e.w/2,i=e.d/2;if(!e.interior){n.push({minX:e.x-t,maxX:e.x+t,minZ:e.z-i,maxZ:e.z+i,id:e.id,tall:!0,high:!0});continue}const r=.4,s=e.door.width/2,o=e.door.at,a=e.z-i,c=e.z+i,l=e.x-t,d=e.x+t;n.push({minX:l,maxX:o-s,minZ:a-r/2,maxZ:a+r/2,id:"bar_s1",tall:!0,high:!0}),n.push({minX:o+s,maxX:d,minZ:a-r/2,maxZ:a+r/2,id:"bar_s2",tall:!0,high:!0}),n.push({minX:l,maxX:d,minZ:c-r/2,maxZ:c+r/2,id:"bar_n",tall:!0,high:!0}),n.push({minX:l-r/2,maxX:l+r/2,minZ:a,maxZ:c,id:"bar_w",tall:!0,high:!0}),n.push({minX:d-r/2,maxX:d+r/2,minZ:a,maxZ:c,id:"bar_e",tall:!0,high:!0})}for(const e of ze.coverWalls??[])n.push({minX:e.x-e.w/2,maxX:e.x+e.w/2,minZ:e.z-e.d/2,maxZ:e.z+e.d/2,id:"cover",tall:!0,high:!0});for(const e of ze.props)(e.kind==="lamp"||e.kind==="tree")&&n.push({minX:e.x-.3,maxX:e.x+.3,minZ:e.z-.3,maxZ:e.z+.3,id:"prop",tall:!1}),e.kind==="crates"&&n.push({minX:e.x-1,maxX:e.x+1,minZ:e.z-1,maxZ:e.z+1,id:"crates",tall:!0}),e.kind==="yardstack"&&n.push({minX:e.x-1.2,maxX:e.x+1.2,minZ:e.z-1.2,maxZ:e.z+1.2,id:"yardstack",tall:!0}),e.kind==="bench"&&n.push({minX:e.x-1.1,maxX:e.x+1.1,minZ:e.z-.4,maxZ:e.z+.4,id:"prop",tall:!1});for(const e of d_.values())n.push({...e});return n}function yr(n,e,t,i){let r=n,s=e,o=!1;for(let c=0;c<3;c++){o=!1;for(const l of i){const d=Math.max(l.minX,Math.min(r,l.maxX)),u=Math.max(l.minZ,Math.min(s,l.maxZ)),f=r-d,p=s-u,g=f*f+p*p;if(g<t*t)if(o=!0,g<1e-8){const v=r-l.minX,m=l.maxX-r,h=s-l.minZ,w=l.maxZ-s,_=Math.min(v,m,h,w);_===v?r=l.minX-t:_===m?r=l.maxX+t:_===h?s=l.minZ-t:s=l.maxZ+t}else{const v=Math.sqrt(g);r=d+f/v*t,s=u+p/v*t}}if(!o)break}const a=ze.size/2-1;return r=Math.max(-a,Math.min(a,r)),s=Math.max(-a,Math.min(a,s)),{x:r,z:s,hit:o}}function Yn(n,e,t,i,r){for(const s of r)if(s.tall&&!(_l(n,e,s)||_l(t,i,s))&&u_(n,e,t,i,s))return!0;return!1}function _l(n,e,t){return n>t.minX&&n<t.maxX&&e>t.minZ&&e<t.maxZ}function u_(n,e,t,i,r){let s=0,o=1;const a=t-n,c=i-e,l=[[n,a,r.minX,r.maxX],[e,c,r.minZ,r.maxZ]];for(const[d,u,f,p]of l)if(Math.abs(u)<1e-9){if(d<f||d>p)return!1}else{let g=(f-d)/u,v=(p-d)/u;if(g>v){const m=g;g=v,v=m}if(s=Math.max(s,g),o=Math.min(o,v),s>o)return!1}return o>0&&s<1}function ya(n,e,t){const i=ze.buildings.find(r=>r.id===t);return i?Math.abs(n-i.x)<i.w/2&&Math.abs(e-i.z)<i.d/2:!1}const vt=.25,sn=.35,f_=vt*Math.SQRT1_2,ds=sn+f_,Xi=ze.size/2-1,Ue=Math.round(ze.size/vt),Bt=-100/2;let xi=null,Es=null,bd=-1,wd=0,bs=null;function gl(n){xi=cr(),Es=new Map;const e=4;for(let t=0;t<xi.length;t++){const i=xi[t],r=Math.floor((i.minX-sn)/e),s=Math.floor((i.maxX+sn)/e),o=Math.floor((i.minZ-sn)/e),a=Math.floor((i.maxZ+sn)/e);for(let c=r;c<=s;c++)for(let l=o;l<=a;l++){const d=(c+64)*1024+(l+64);let u=Es.get(d);u||(u=[],Es.set(d,u)),u.push(t)}}bs=null,Vn.clear(),bd=Rr(),n&&wd++}function qs(){xi===null?gl(!1):bd!==Rr()&&gl(!0)}function h_(){return qs(),wd}function ws(n,e){if(qs(),n<-Xi||n>Xi||e<-Xi||e>Xi)return!1;const t=(Math.floor((n-sn)/4)+64)*1024+(Math.floor((e-sn)/4)+64),i=Es.get(t);if(!i)return!0;const r=sn*sn;for(let s=0;s<i.length;s++){const o=xi[i[s]],a=n<o.minX?o.minX:n>o.maxX?o.maxX:n,c=e<o.minZ?o.minZ:e>o.maxZ?o.maxZ:e,l=n-a,d=e-c;if(l*l+d*d<r)return!1}return!0}function Ya(n,e,t,i){const r=t-n,s=i-e,o=Math.hypot(r,s),a=Math.ceil(o/.15);if(a<=1)return ws(n,e)&&ws(t,i);for(let c=0;c<=a;c++){const l=c/a;if(!ws(n+r*l,e+s*l))return!1}return!0}function Td(n,e){const t=Math.floor((n-Bt)/vt),i=Math.floor((e-Bt)/vt);return t<0||i<0||t>=Ue||i>=Ue?-1:i*Ue+t}function Xn(n){return Bt+(n+.5)*vt}function p_(){const n=new Uint8Array(Ue*Ue).fill(1),e=(r,s,o,a)=>{let c=Math.ceil((r-Bt)/vt-.5),l=Math.floor((s-Bt)/vt-.5),d=Math.ceil((o-Bt)/vt-.5),u=Math.floor((a-Bt)/vt-.5);c<0&&(c=0),d<0&&(d=0),l>Ue-1&&(l=Ue-1),u>Ue-1&&(u=Ue-1);for(let f=c;f<=l;f++){const p=d*Ue+f;for(let g=d;g<=u;g++)n[p+(g-d)*Ue]=0}};for(let r=0;r<xi.length;r++){const s=xi[r];e(s.minX-ds,s.maxX+ds,s.minZ-ds,s.maxZ+ds)}const t=Math.ceil((-Xi-Bt)/vt-.5),i=Math.floor((Xi-Bt)/vt-.5);for(let r=0;r<Ue;r++)for(let s=0;s<Ue;s++)(r<t||r>i||s<t||s>i)&&(n[s*Ue+r]=0);return n}function nr(){return qs(),bs||(bs={walk:p_()}),bs}function xl(n,e){const t=Td(n,e);return t>=0&&nr().walk[t]===1}function vl(n,e,t){const i=nr(),r=Math.floor((n-Bt)/vt),s=Math.floor((e-Bt)/vt),o=Math.ceil(t/vt);let a=-1,c=1/0;for(let d=0;d<=o;d++){const u=r-d,f=r+d,p=s-d,g=s+d;let v=-1,m=1/0;for(let h=u;h<=f;h++){if(h<0||h>=Ue)continue;const w=d===0?[s]:[p,g];for(const _ of w){if(_<0||_>=Ue)continue;const x=_*Ue+h;if(!i.walk[x])continue;const C=Xn(h)-n,T=Xn(_)-e,b=C*C+T*T;b<m&&(m=b,v=x)}}if(v>=0&&m<c&&(c=m,a=v),a>=0&&Math.sqrt(c)<=d*vt)break}if(a<0)return null;const l=a%Ue;return{x:Xn(l),z:Xn((a-l)/Ue),i:l,j:(a-l)/Ue}}class m_{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}clear(){this.k.length=0,this.v.length=0}push(e,t){const i=this.k,r=this.v;let s=i.length;for(i.push(e),r.push(t);s>0;){const o=s-1>>1;if(i[o]<=i[s])break;const a=i[o];i[o]=i[s],i[s]=a;const c=r[o];r[o]=r[s],r[s]=c,s=o}}pop(){const e=this.k,t=this.v,i=t[0],r=e.pop(),s=t.pop();if(e.length){e[0]=r,t[0]=s;let o=0;for(;;){const a=o*2+1,c=a+1;let l=o;if(a<e.length&&e[a]<e[l]&&(l=a),c<e.length&&e[c]<e[l]&&(l=c),l===o)break;const d=e[l];e[l]=e[o],e[o]=d;const u=t[l];t[l]=t[o],t[o]=u,o=l}}return i}}let ci=null,us=null,xr=null,ki=0,Oi=null;const __=[[1,0,10],[-1,0,10],[0,1,10],[0,-1,10],[1,1,14],[1,-1,14],[-1,1,14],[-1,-1,14]];function Ml(n,e,t,i){const r=n>t?n-t:t-n,s=e>i?e-i:i-e,o=r<s?r:s;return 10*(r+s)-6*o}const g_=16384;function yl(n,e){return(n+e)*g_+e}function Po(n,e,t,i){const s=nr().walk,o=Ue*Ue;(!ci||ci.length!==o)&&(ci=new Int32Array(o),us=new Int32Array(o),xr=new Int32Array(o),Oi=new m_),ki++,ki>1073741823&&(xr.fill(0),ki=1);const a=e*Ue+n,c=i*Ue+t;if(!s[a]||!s[c])return null;if(a===c)return[a];Oi.clear(),ci[a]=0,xr[a]=ki,us[a]=-1,Oi.push(yl(0,Ml(n,e,t,i)),a);let l=!1;for(;Oi.size;){const f=Oi.pop();if(f===c){l=!0;break}const p=f%Ue,g=(f-p)/Ue,v=ci[f];for(let m=0;m<8;m++){const[h,w,_]=__[m],x=p+h,C=g+w;if(x<0||C<0||x>=Ue||C>=Ue)continue;const T=C*Ue+x;if(!s[T]||h!==0&&w!==0&&(!s[g*Ue+x]||!s[C*Ue+p]))continue;const b=v+_;xr[T]===ki&&ci[T]<=b||(xr[T]=ki,ci[T]=b,us[T]=f,Oi.push(yl(b,Ml(x,C,t,i)),T))}}if(!l)return null;const d=[];let u=c;for(;u!==-1;)d.push(u),u=us[u];return d.reverse(),d}function x_(n){const e=n.map(s=>{const o=s%Ue;return{x:Xn(o),z:Xn((s-o)/Ue)}});if(e.length<=2)return e;const t=[e[0]];let i=0;const r=48;for(;i<e.length-1;){let s=Math.min(e.length-1,i+r);for(;s>i+1&&!Ya(e[i].x,e[i].z,e[s].x,e[s].z);s--);s<=i+1&&(s=i+1),t.push(e[s]),i=s}return t}const Vn=new Map,v_=2048;function Sl(n,e,t,i,r){const s=`${n},${e},${t},${i},${r}`;let o=Vn.get(s);if(o!==void 0)return Vn.delete(s),Vn.set(s,o),o;let a=null;if(r===0)a=Po(n,e,t,i);else{const c=r,l=20;let d=null,u=0;for(let f=1;f<=c&&!d&&u<l;f++){for(let p=t-f;p<=t+f&&!d&&u<l;p++)for(const g of[i-f,i+f]){if(p<0||g<0||p>=Ue||g>=Ue||!nr().walk[g*Ue+p])continue;u++;const v=Po(n,e,p,g);if(v){d=v;break}}for(let p=i-f+1;p<=i+f-1&&!d&&u<l;p++)for(const g of[t-f,t+f]){if(g<0||p<0||g>=Ue||p>=Ue||!nr().walk[p*Ue+g])continue;u++;const v=Po(n,e,g,p);if(v){d=v;break}}}a=d}if(o=a,Vn.size>=v_){const c=Vn.keys().next().value;Vn.delete(c)}return Vn.set(s,o),o}function Za(n,e,t,i){const r=ws(t,i)&&xl(t,i),s=r?El(t,i):vl(t,i,14);if(!s)return{points:[],ok:!1,exact:!1,goal:{x:t,z:i}};const o=xl(n,e)?El(n,e):vl(n,e,4);if(!o)return{points:[],ok:!1,exact:r,goal:r?{x:t,z:i}:{x:s.x,z:s.z}};const a=r?{x:t,z:i}:{x:s.x,z:s.z};if(Ya(n,e,s.x,s.z)){const u=[{x:n,z:e}];return Math.hypot(s.x-n,s.z-e)>vt&&u.push({x:s.x,z:s.z}),r&&u.push({x:t,z:i}),{points:bl(u),ok:!0,exact:r,goal:a}}const c=Sl(o.i,o.j,s.i,s.j,0)??Sl(o.i,o.j,s.i,s.j,6);if(!c)return{points:[],ok:!1,exact:r,goal:a};const l=x_(c),d=[{x:n,z:e}];for(const u of l)Math.hypot(u.x-d[d.length-1].x,u.z-d[d.length-1].z)<vt*.9||d.push(u);return r&&d.push({x:t,z:i}),{points:bl(d),ok:!0,exact:r,goal:a}}function El(n,e){const t=Math.floor((n-Bt)/vt),i=Math.floor((e-Bt)/vt);return{x:Xn(t),z:Xn(i),i:t,j:i}}function bl(n){const e=[];for(const t of n){const i=e[e.length-1];i&&Math.hypot(t.x-i.x,t.z-i.z)<1e-6||e.push(t)}return e}function Fr(){const n={};for(const e of Object.keys(ze.nodes))n[e]=[];for(const[e,t]of ze.edges)n[e].push(t),n[t].push(e);return n}function lr(n,e){let t=null,i=1e9;for(const[r,s]of Object.entries(ze.nodes)){const o=(s.x-n)**2+(s.z-e)**2;o<i&&(i=o,t=r)}return t}const M_=.15;function Ad(n,e,t){let i=0;for(const r of t){const s=Math.max(r.minX,Math.min(n,r.maxX)),o=Math.max(r.minZ,Math.min(e,r.maxZ));if(s===n&&o===e){const a=Math.min(n-r.minX,r.maxX-n,e-r.minZ,r.maxZ-e)+sn;a>i&&(i=a)}else{const a=sn-Math.hypot(n-s,e-o);a>i&&(i=a)}}return i}const fs=new Map;function Ln(n){let e=fs.get(n);if(e===void 0){if(fs.size===0){const t=cr();for(const[i,r]of Object.entries(ze.nodes))fs.set(i,Math.max(.6,Ad(r.x,r.z,t)+M_))}e=fs.get(n)??.6}return e}function Rd(n){const e=n??cr();qs();const t=[],i=[];for(const[r,s]of Object.entries(ze.nodes)){Ad(s.x,s.z,e)>0&&t.push(r);const o=Td(s.x,s.z);(o<0||!nr().walk[o])&&(t.includes(r)||t.push(r+"(cell)"))}for(const[r,s]of ze.edges){const o=ze.nodes[r],a=ze.nodes[s];!o||!a||Ya(o.x,o.z,a.x,a.z)||i.push(`${r}-${s}`)}return{nodeViolations:t,edgeViolations:i}}const ir=.05,Sa=4,y_={seen:600,heard:120,hearsay:180},S_=30;function Cd(n){return Number.isFinite(n)?Math.max(ir,Math.min(1,n)):ir}function lt(n){return{kind:n.kind,severity:n.severity??.5,px:n.px??0,pz:n.pz??0,place:n.place??"sconosciuto",actor:n.actor??"sconosciuto",subject:n.subject??null,channel:n.channel??"seen",confidence:Cd(n.confidence??.5),t:n.t??0,error:n.error??null,moved:n.moved??!1,w:n.w??null,contra:n.contra??0,provenance:[...n.provenance??[]].slice(0,Sa)}}function E_(n,e){const t=n.actor,i=e.actor,r=t&&i&&t!=="sconosciuto"&&i!=="sconosciuto"&&t!==i,s=Math.hypot(n.px-e.px,n.pz-e.pz)>S_;return r||s}function an(n,e){const t=y_[n.channel]??300;return n.confidence*Math.exp(-Math.max(0,e-n.t)/t)}function ht(n,e,t,i){const r=lt(t);if(r.provenance.includes(i))return"ignored";const s=n.get(e);if(!s)return n.set(e,r),"stored";if(s.provenance.includes(i)&&r.provenance.includes(i))return"ignored";if(s.kind==="accident"&&r.kind==="kill"){const a=[...s.provenance];for(const c of r.provenance)!a.includes(c)&&a.length<Sa&&a.push(c);return n.set(e,{...r,provenance:a}),"merged"}if(s.kind==="kill"&&r.kind==="accident")return"ignored";if(E_(s,r))return s.channel!=="seen"&&r.channel==="seen"?(n.set(e,{...r,contra:(s.contra??0)+1}),"merged"):s.channel==="seen"&&r.channel!=="seen"?"ignored":(s.contra=(s.contra??0)+1,s.confidence=Math.max(ir,+(s.confidence*.85).toFixed(3)),"merged");const o=[...s.provenance];for(const a of r.provenance)!o.includes(a)&&o.length<Sa&&o.push(a);return r.confidence>s.confidence?(n.set(e,{...r,provenance:o}),"merged"):o.length>s.provenance.length?(r.provenance.every(c=>!s.provenance.includes(c))&&r.t>s.t&&r.confidence>=.25&&r.confidence<=s.confidence&&(s.t=s.t+(r.t-s.t)*.25),n.set(e,{...s,provenance:o}),"merged"):"ignored"}function Ka(n,e){let t=0;for(const[i,r]of n)an(r,e)<ir+.01&&(n.delete(i),t++);return t}const b_={theft:"un furto",disturbance:"un trambusto",assault:"un’aggressione",kill:"un omicidio",accident:"un incidente",found_corpse:"un cadavere",corpse:"un cadavere",noise:"un rumore",sabotage:"un sabotaggio"};function w_(n,e){if(!n)return"nulla di sospetto";const t=Math.round(an(n,e??n.t)*100),i=n.error?` (ricordo impreciso: ${n.error})`:"",r=n.channel==="seen"?"visto di persona":n.channel==="heard"?"sentito":n.channel==="inferred"?"rimasto in dubbio, poi collegato":"sentito dire",s=b_[n.kind]??n.kind,o=n.provenance.length>1?` [via ${n.provenance.join("→")}]`:"",a=n.moved?" (scena alterata)":"";return`${s} ${n.place} — ${r}, fiducia ${t}%${i}${o}${a}`}const wl=new Set(["kill","sabotage"]);function Tl(n,e){return!!(n.subject&&e.subject&&n.subject===e.subject||n.place&&e.place&&n.place===e.place||Number.isFinite(n.px)&&Number.isFinite(e.px)&&Math.hypot(n.px-e.px,n.pz-e.pz)<=12)}function T_(n,e){const t=n.beliefs.get(e);if(!t)return[];const i=[];if(t.kind==="accident")for(const[r,s]of n.beliefs)r!==e&&wl.has(s.kind)&&Tl(s,t)&&(Al(n,r,s),i.push(r));else if(wl.has(t.kind))for(const[r,s]of n.beliefs)r!==e&&s.kind==="accident"&&Tl(t,s)&&(Al(n,r,t),i.push(r));return i}function Al(n,e,t){const i=n.beliefs.get(e);if(!i||i.kind!=="accident")return;const r=Cd(Math.min(an(t,t.t)*.9,.7));n.beliefs.set(e,{...i,kind:"kill",severity:.9,channel:"inferred",confidence:r,t:t.t,error:t.kind==="sabotage"?"causa preparata: non è stato un incidente":"cè un testimone del delitto",subject:i.subject??t.subject??null,provenance:[...i.provenance]})}const en=64,Pd={family:1,friend:.9,coworker:.85,neighbor:.8,acquaintance:.7,unknown:.6,enemy:0},A_={family:600,friend:300,coworker:150,neighbor:150,acquaintance:60};function In(n,e){return n.relType?.[e]??((n.relations?.[e]??0)>0?"acquaintance":"unknown")}function $i(n,e){return In(n,e)==="enemy"?0:n.relations?.[e]??0}function Ts(n,e){return Pd[In(n,e)]??.6}function br(n,e){if(!e)return 0;const t=In(n,e);return t==="enemy"||(n.relations?.[e]??0)<.3?0:A_[t]??0}const Dt={SHORT:0,NORMAL:1,SALIENT:2},R_=60,C_=900,Rl=12;function Cl(n,e){const t=n.beliefs.get(e);return t?t.severity>=.7||t.channel==="seen"&&(t.kind==="kill"||t.kind==="found_corpse"||t.kind==="assault")||t.subject&&br(n,t.subject)>0?Dt.SALIENT:t.kind==="noise"||t.severity<.3?Dt.SHORT:Dt.NORMAL:Dt.NORMAL}function dr(n,e){const t={};for(const r of Object.keys(n.relations??{}))t[r]=.5;const i={id:n.id,name:n.name,color:n.color,role:n.role??"civilian",x:n.x,z:n.z,yaw:0,speed:0,state:"dwell",agenda:n.agenda.map(r=>({...r})),agendaIdx:0,dwellLeft:2,path:[],pathIdx:0,fleeNode:null,pathGoal:null,pathOk:!0,pathExact:!0,arriveR:.6,pathNavRev:0,stuckFor:0,navX:n.x,navZ:n.z,navT:0,gotoX:null,gotoZ:null,relations:{...n.relations},relType:{...n.relType??{}},trust:t,home:n.home??null,work:n.work??null,schedule:n.schedule?n.schedule.map(r=>({...r})):null,agendaBlock:null,memory:[],beliefs:new Map,level:"L1",thinkAt:(e?e.next():0)*.5,gossipAt:0,talkT:0,symbolAt:0,gaze:{},awareness:0,alertedBy:null,alertT:-99,death:null,hidden:!1,routineShift:null,police:null,mesh:null};return i.role==="police"&&(i.police={state:"UNAWARE",since:0,searchX:0,searchZ:0,catchT:0}),i}function jt(n,e){const t=T_(n,e);for(const i of t)n.memory.includes(i)&&n.memTier&&(n.memTier[i]=Cl(n,i));if(!n.memory.includes(e)&&(n.memTier||(n.memTier={}),n.memAt||(n.memAt={}),n.memTier[e]=Cl(n,e),n.memAt[e]=n.beliefs.get(e)?.t??0,n.memory.push(e),n.memory.length>en)){const i=Ld(n,n.memory.length-en);n.memory=n.memory.filter(r=>!i.has(r));for(const r of i)delete n.memTier[r],delete n.memAt[r]}}function Ld(n,e){const t=[...n.memory].sort((i,r)=>(n.memTier[i]??Dt.NORMAL)-(n.memTier[r]??Dt.NORMAL)||(n.memAt[i]??0)-(n.memAt[r]??0));return new Set(t.slice(0,e))}function As(n,e){n.memTier||(n.memTier={}),n.memAt||(n.memAt={});const t=n.memory.length;let i=[];for(const o of n.memory){const a=n.memTier[o]??Dt.NORMAL,c=e-(n.memAt[o]??n.beliefs.get(o)?.t??0),l=n.beliefs.has(o);a===Dt.SHORT&&(!l||c>R_)||a===Dt.NORMAL&&!l||a===Dt.SALIENT&&c>C_||i.push(o)}const r=i.filter(o=>(n.memTier[o]??Dt.NORMAL)===Dt.SALIENT);if(r.length>Rl){const o=new Set([...r].sort((a,c)=>(n.memAt[a]??0)-(n.memAt[c]??0)).slice(0,r.length-Rl));i=i.filter(a=>!o.has(a))}if(i.length>en){const o=Ld({memory:i,memTier:n.memTier,memAt:n.memAt},i.length-en);i=i.filter(a=>!o.has(a))}n.memory=i;const s=new Set(i);for(const o of Object.keys(n.memTier))s.has(o)||delete n.memTier[o];for(const o of Object.keys(n.memAt))s.has(o)||delete n.memAt[o];return t-i.length}function kr(n){return{id:n.id,x:n.x,z:n.z,yaw:n.yaw,speed:n.speed,state:n.state,agendaIdx:n.agendaIdx,dwellLeft:n.dwellLeft,agenda:n.agenda.map(e=>({...e})),agendaBlock:n.agendaBlock??null,path:n.path.map(e=>({x:e.x,z:e.z})),pathIdx:n.pathIdx,fleeNode:n.fleeNode,pathGoal:n.pathGoal??null,pathOk:n.pathOk!==!1,pathExact:n.pathExact!==!1,arriveR:n.arriveR??.6,pathNavRev:n.pathNavRev??0,stuckFor:n.stuckFor??0,navX:n.navX??n.x,navZ:n.navZ??n.z,navT:n.navT??0,relations:{...n.relations},relType:{...n.relType??{}},memory:[...n.memory],memTier:{...n.memTier??{}},memAt:{...n.memAt??{}},trust:{...n.trust},beliefs:[...n.beliefs.entries()].map(([e,t])=>[e,{...t,provenance:[...t.provenance]}]),level:n.level,thinkAt:n.thinkAt,gossipAt:n.gossipAt,talkT:n.talkT??0,symbolAt:n.symbolAt??0,gaze:{...n.gaze??{}},awareness:n.awareness??0,alertedBy:n.alertedBy,alertT:n.alertT??-99,mournT:n.mournT??0,death:n.death?{...n.death}:null,hidden:!!n.hidden,routineShift:n.routineShift?{until:n.routineShift.until,node:n.routineShift.node}:null,police:n.police?{...n.police}:null,gotoX:n.gotoX,gotoZ:n.gotoZ}}function Or(n,e){n.x=e.x,n.z=e.z,n.yaw=e.yaw,n.speed=e.speed??0,n.state=e.state,n.agendaIdx=e.agendaIdx,n.dwellLeft=e.dwellLeft,Array.isArray(e.agenda)&&e.agenda.length&&(n.agenda=e.agenda.map(i=>({...i})));const t=e.path??[];n.path=t.filter(i=>i&&typeof i=="object"&&Number.isFinite(i.x)&&Number.isFinite(i.z)).map(i=>({x:i.x,z:i.z})),n.pathIdx=n.path.length===t.length?e.pathIdx??0:0,n.fleeNode=e.fleeNode??null,n.pathGoal=e.pathGoal??null,n.pathOk=e.pathOk!==!1,n.pathExact=e.pathExact!==!1,n.arriveR=e.arriveR??.6,n.pathNavRev=e.pathNavRev??0,n.stuckFor=e.stuckFor??0,n.navX=e.navX??n.x,n.navZ=e.navZ??n.z,n.navT=e.navT??0,n.relations={...e.relations},n.relType={...e.relType??{}},n.agendaBlock=e.agendaBlock??null,n.memory=[...e.memory],n.memTier={...e.memTier??{}},n.memAt={...e.memAt??{}},n.trust={...e.trust??{}},n.beliefs=new Map((e.beliefs??[]).map(([i,r])=>[i,{...r,provenance:[...r.provenance??[]]}])),n.level=e.level??"L1",n.thinkAt=e.thinkAt??0,n.gossipAt=e.gossipAt??0,n.talkT=e.talkT??0,n.symbolAt=e.symbolAt??0,n.gaze={...e.gaze??{}},n.awareness=e.awareness??0,n.alertedBy=e.alertedBy,n.alertT=e.alertT??-99,n.mournT=e.mournT??0,n.death=e.death?{...e.death}:null,n.hidden=!!e.hidden,n.routineShift=e.routineShift?{until:e.routineShift.until,node:e.routineShift.node}:null,n.police=e.police?{...e.police}:n.role==="police"?{state:"UNAWARE",since:0,searchX:0,searchZ:0,catchT:0}:null,n.gotoX=e.gotoX??null,n.gotoZ=e.gotoZ??null}const Id=[{id:"anna",name:"Anna (barista)",color:12999566,x:-20,z:18,home:"bar_in",work:"bar_in",relations:{bruno:.7,sara:.5,marco:.4,luca:.3,elena:.4,paolo:.7,bianca:.6,monica:.5,chiara:.5},relType:{bruno:"friend",sara:"friend",marco:"acquaintance",luca:"acquaintance",elena:"neighbor",paolo:"coworker",bianca:"coworker",monica:"coworker",chiara:"friend"},schedule:[{from:6,to:11,node:"bar_in",kind:"work"},{from:11,to:12,node:"pia_c",kind:"leisure"},{from:12,to:17,node:"bar_in",kind:"work"},{from:17,to:19,node:"bar_out",kind:"social"},{from:19,to:23,node:"bar_in",kind:"work"}],agenda:[{node:"bar_in",dwell:16},{node:"bar_out",dwell:3},{node:"pia_w",dwell:4},{node:"bar_out",dwell:2}]},{id:"bruno",name:"Bruno (operaio)",color:4882377,x:0,z:0,home:"b5_door",work:"svc_in",relations:{anna:.7,franco:.5,carla:.3,marco:.2,otello:.7,ivan:.5},relType:{anna:"friend",franco:"coworker",carla:"acquaintance",marco:"acquaintance",otello:"coworker",ivan:"coworker"},schedule:[{from:7,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"bar_out",kind:"leisure"},{from:13,to:17,node:"svc_in",kind:"work"},{from:17,to:20,node:"bar_in",kind:"social"}],agenda:[{node:"b5_door",dwell:6},{node:"svc_out",dwell:3},{node:"svc_in",dwell:8},{node:"road_c",dwell:2},{node:"bar_out",dwell:5}]},{id:"carla",name:"Carla (custode)",color:5484650,x:18,z:6,home:"vic_n",work:"court",relations:{bruno:.3,marta:.4,anna:.2,elena:.2,gino:.5},relType:{bruno:"acquaintance",marta:"neighbor",anna:"acquaintance",elena:"neighbor",gino:"neighbor"},schedule:[{from:8,to:12,node:"court",kind:"work"},{from:12,to:14,node:"pia_c",kind:"leisure"},{from:14,to:18,node:"court",kind:"work"},{from:18,to:21,node:"vic_n",kind:"social"}],agenda:[{node:"vic_s",dwell:3},{node:"vic_n",dwell:2},{node:"pia_c",dwell:7},{node:"pia_w",dwell:3}]},{id:"dario",name:"Dario (fornaio)",color:13666861,x:44,z:0,home:"north_e",work:"road_e",relations:{luca:.2,franco:.2,furio:.5},relType:{luca:"acquaintance",franco:"acquaintance",furio:"friend"},schedule:[{from:5,to:11,node:"road_e",kind:"work"},{from:11,to:15,node:"north_e",kind:"home"},{from:15,to:19,node:"pia_e",kind:"work"},{from:19,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"road_e",dwell:4},{node:"road_c",dwell:3},{node:"vic_s",dwell:3},{node:"road_c",dwell:2}]},{id:"elena",name:"Elena (passante)",color:9068496,x:-18,z:-14,home:"b4_door",relations:{anna:.5,sara:.4,carla:.2,marta:.3,nadia:.5,ida:.4},relType:{anna:"friend",sara:"friend",carla:"neighbor",marta:"neighbor",nadia:"friend",ida:"neighbor"},schedule:[{from:8,to:12,node:"sq_s",kind:"leisure"},{from:12,to:16,node:"pia_c",kind:"social"},{from:16,to:20,node:"bar_in",kind:"social"}],agenda:[{node:"b4_door",dwell:5},{node:"sq_s",dwell:2},{node:"bar_out",dwell:4},{node:"bar_in",dwell:8}]},{id:"marco",name:"Marco (bersaglio)",color:13908526,role:"target",x:12,z:12,home:"apt",relations:{luca:.8,sara:.7,anna:.4,bruno:.2,tiberio:.5,lina:.3},relType:{luca:"friend",sara:"friend",anna:"acquaintance",bruno:"acquaintance",tiberio:"coworker",lina:"neighbor"},schedule:[{from:7,to:10,node:"apt",kind:"home"},{from:10,to:14,node:"pia_c",kind:"work"},{from:14,to:17,node:"svc_in",kind:"work"},{from:17,to:21,node:"bar_in",kind:"social"},{from:21,to:24,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:10},{node:"pia_c",dwell:6},{node:"bar_in",dwell:10},{node:"svc_in",dwell:8},{node:"bar_in",dwell:6},{node:"court",dwell:7},{node:"pia_e",dwell:4}]},{id:"luca",name:"Luca (socio di Marco)",color:11557418,x:-20,z:11,home:"bar_out",relations:{marco:.8,sara:.3,dario:.2,anna:.3,monica:.4},relType:{marco:"friend",sara:"acquaintance",dario:"acquaintance",anna:"acquaintance",monica:"acquaintance"},schedule:[{from:9,to:13,node:"bar_in",kind:"work"},{from:13,to:17,node:"pia_c",kind:"social"},{from:17,to:22,node:"bar_in",kind:"social"},{from:22,to:24,node:"bar_out",kind:"home"}],agenda:[{node:"bar_out",dwell:4},{node:"bar_in",dwell:10},{node:"pia_c",dwell:6},{node:"road_c",dwell:3},{node:"apt",dwell:6}]},{id:"sara",name:"Sara (amica di Marco)",color:4176038,x:-18,z:-14,home:"b4_door",relations:{marco:.7,anna:.5,elena:.4,luca:.3,paolo:.85,nadia:.5},relType:{marco:"friend",anna:"friend",elena:"friend",luca:"acquaintance",paolo:"family",nadia:"friend"},schedule:[{from:8,to:12,node:"b4_door",kind:"home"},{from:12,to:16,node:"bar_in",kind:"social"},{from:16,to:20,node:"pia_c",kind:"social"},{from:20,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"b4_door",dwell:6},{node:"bar_in",dwell:8},{node:"pia_c",dwell:5},{node:"apt",dwell:7}]},{id:"rossi",name:"Ag. Rossi",color:2771668,role:"police",x:-40,z:0,home:"road_w",relations:{verdi:.6,sandro:.3},relType:{verdi:"coworker",sandro:"acquaintance"},schedule:[{from:8,to:14,node:"road_w",kind:"work"},{from:14,to:20,node:"pia_c",kind:"work"},{from:20,to:24,node:"road_w",kind:"home"}],agenda:[{node:"road_w",dwell:4},{node:"road_c",dwell:3},{node:"vic_s",dwell:4},{node:"pia_s",dwell:4}]},{id:"verdi",name:"Ag. Verdi",color:2783956,role:"police",x:44,z:0,home:"road_e",relations:{rossi:.6,sandro:.3},relType:{rossi:"coworker",sandro:"acquaintance"},schedule:[{from:8,to:14,node:"road_e",kind:"work"},{from:14,to:20,node:"vic_n",kind:"work"},{from:20,to:24,node:"road_e",kind:"home"}],agenda:[{node:"road_e",dwell:4},{node:"pia_e",dwell:4},{node:"pia_c",dwell:4},{node:"vic_n",dwell:3}]},{id:"franco",name:"Franco (operaio)",color:8022586,x:10,z:-14,home:"b5_door",work:"svc_in",relations:{bruno:.6,anna:.2,dario:.2,otello:.6,ivan:.5},relType:{bruno:"coworker",anna:"acquaintance",dario:"acquaintance",otello:"coworker",ivan:"coworker"},schedule:[{from:7,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"pia_s",kind:"leisure"},{from:13,to:17,node:"svc_out",kind:"work"},{from:17,to:20,node:"bar_out",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_out",dwell:2},{node:"svc_in",dwell:9},{node:"bar_out",dwell:4}]},{id:"marta",name:"Marta (anziana)",color:10132122,x:37,z:20,home:"pia_e",relations:{carla:.4,elena:.3,tea:.6,chiara:.5,osvaldo:.5},relType:{carla:"neighbor",elena:"neighbor",tea:"friend",chiara:"neighbor",osvaldo:"friend"},schedule:[{from:8,to:12,node:"pia_c",kind:"social"},{from:12,to:15,node:"pia_e",kind:"home"},{from:15,to:19,node:"pia_w",kind:"social"},{from:19,to:24,node:"pia_e",kind:"home"}],agenda:[{node:"pia_c",dwell:14},{node:"pia_e",dwell:10},{node:"pia_w",dwell:8}]},{id:"paolo",name:"Paolo (barista)",color:3120250,x:-20,z:14,home:"b4_door",work:"bar_in",relations:{sara:.85,anna:.7,elena:.4,monica:.6,nadia:.5},relType:{sara:"family",anna:"coworker",elena:"neighbor",monica:"coworker",nadia:"friend"},schedule:[{from:7,to:12,node:"bar_in",kind:"work"},{from:12,to:14,node:"b4_door",kind:"home"},{from:14,to:20,node:"bar_in",kind:"work"},{from:20,to:22,node:"pia_c",kind:"social"}],agenda:[{node:"bar_in",dwell:12},{node:"pia_w",dwell:4},{node:"b4_door",dwell:6}]},{id:"nadia",name:"Nadia (studentessa)",color:13658778,x:-16,z:-12,home:"b4_door",relations:{ida:.8,sara:.5,elena:.5,paolo:.5,rita:.3},relType:{ida:"family",sara:"friend",elena:"friend",paolo:"friend",rita:"acquaintance"},schedule:[{from:8,to:13,node:"court",kind:"work"},{from:13,to:17,node:"bar_in",kind:"leisure"},{from:17,to:21,node:"pia_c",kind:"social"},{from:21,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"court",dwell:10},{node:"bar_in",dwell:6},{node:"pia_c",dwell:5},{node:"b4_door",dwell:6}]},{id:"otello",name:"Otello (operaio)",color:10243882,x:8,z:-12,home:"b5_door",work:"svc_in",relations:{bruno:.7,franco:.6,ivan:.75},relType:{bruno:"coworker",franco:"coworker",ivan:"enemy"},schedule:[{from:6,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"road_c",kind:"leisure"},{from:13,to:18,node:"svc_out",kind:"work"},{from:18,to:21,node:"bar_out",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_in",dwell:10},{node:"svc_out",dwell:5},{node:"bar_out",dwell:4}]},{id:"ivan",name:"Ivan (magazziniere)",color:4890569,x:12,z:-16,home:"b5_door",work:"svc_out",relations:{otello:.75,bruno:.5,franco:.5,sandro:.35},relType:{otello:"enemy",bruno:"coworker",franco:"coworker",sandro:"acquaintance"},schedule:[{from:7,to:13,node:"svc_out",kind:"work"},{from:13,to:14,node:"pia_s",kind:"leisure"},{from:14,to:19,node:"svc_in",kind:"work"},{from:19,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_out",dwell:9},{node:"svc_in",dwell:6},{node:"bar_in",dwell:5}]},{id:"chiara",name:"Chiara (fioraia)",color:13189006,x:42,z:18,home:"court",work:"pia_e",relations:{marta:.5,anna:.5,osvaldo:.65,nino:.4,tea:.3},relType:{marta:"neighbor",anna:"friend",osvaldo:"family",nino:"acquaintance",tea:"acquaintance"},schedule:[{from:6,to:12,node:"pia_e",kind:"work"},{from:12,to:14,node:"court",kind:"home"},{from:14,to:19,node:"pia_c",kind:"work"},{from:19,to:22,node:"court",kind:"social"}],agenda:[{node:"pia_e",dwell:10},{node:"pia_c",dwell:7},{node:"court",dwell:6}]},{id:"nino",name:"Nino (ambulante)",color:13214247,x:35,z:18,home:"north_w",work:"pia_c",relations:{chiara:.4,marta:.3,gino:.4,peppe:.4},relType:{chiara:"acquaintance",marta:"acquaintance",gino:"friend",peppe:"friend"},schedule:[{from:6,to:7,node:"north_w",kind:"home"},{from:7,to:15,node:"pia_c",kind:"work"},{from:15,to:18,node:"bar_out",kind:"leisure"},{from:18,to:21,node:"north_w",kind:"social"}],agenda:[{node:"north_w",dwell:4},{node:"pia_c",dwell:12},{node:"bar_out",dwell:5}]},{id:"tea",name:"Tea (pensionata)",color:9079402,x:-20,z:31,home:"court",relations:{marta:.6,ida:.55,osvaldo:.5,lina:.7,chiara:.3},relType:{marta:"friend",ida:"friend",osvaldo:"neighbor",lina:"family",chiara:"acquaintance"},schedule:[{from:8,to:11,node:"court",kind:"home"},{from:11,to:13,node:"pia_c",kind:"social"},{from:13,to:17,node:"court",kind:"home"},{from:17,to:20,node:"pia_w",kind:"social"}],agenda:[{node:"court",dwell:12},{node:"pia_c",dwell:8},{node:"pia_w",dwell:6}]},{id:"furio",name:"Furio (corriere)",color:4156105,x:30,z:31,home:"north_e",work:"svc_out",relations:{dario:.5,tiberio:.6,ivan:.3},relType:{dario:"friend",tiberio:"coworker",ivan:"acquaintance"},schedule:[{from:6,to:11,node:"svc_out",kind:"work"},{from:11,to:13,node:"road_c",kind:"work"},{from:13,to:18,node:"svc_in",kind:"work"},{from:18,to:22,node:"north_e",kind:"home"}],agenda:[{node:"north_e",dwell:4},{node:"svc_out",dwell:8},{node:"road_c",dwell:4},{node:"svc_in",dwell:6}]},{id:"bianca",name:"Bianca (cuoca)",color:8011704,x:-18,z:22,home:"bar_in",work:"bar_in",relations:{anna:.6,monica:.75,paolo:.5,luca:.3},relType:{anna:"coworker",monica:"family",paolo:"coworker",luca:"acquaintance"},schedule:[{from:5,to:11,node:"bar_in",kind:"work"},{from:11,to:15,node:"bar_out",kind:"leisure"},{from:15,to:22,node:"bar_in",kind:"work"}],agenda:[{node:"bar_in",dwell:14},{node:"bar_out",dwell:5},{node:"pia_s",dwell:3}]},{id:"gino",name:"Gino (tabaccaio)",color:9095487,x:18,z:8,home:"vic_n",work:"pia_w",relations:{rita:.5,carla:.5,nino:.4,peppe:.4},relType:{rita:"neighbor",carla:"neighbor",nino:"friend",peppe:"acquaintance"},schedule:[{from:7,to:13,node:"pia_w",kind:"work"},{from:13,to:14,node:"vic_n",kind:"home"},{from:14,to:20,node:"pia_w",kind:"work"},{from:20,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"pia_w",dwell:12},{node:"vic_n",dwell:5},{node:"bar_in",dwell:4}]},{id:"rita",name:"Rita (parrucchiera)",color:13199914,x:17,z:0,home:"vic_s",work:"vic_s",relations:{gino:.5,nadia:.3,monica:.4,carla:.3},relType:{gino:"neighbor",nadia:"acquaintance",monica:"friend",carla:"acquaintance"},schedule:[{from:8,to:13,node:"vic_s",kind:"work"},{from:13,to:15,node:"pia_c",kind:"leisure"},{from:15,to:19,node:"vic_s",kind:"work"},{from:19,to:22,node:"bar_out",kind:"social"}],agenda:[{node:"vic_s",dwell:12},{node:"pia_c",dwell:5},{node:"bar_out",dwell:4}]},{id:"osvaldo",name:"Osvaldo (anziano)",color:6974090,x:-22,z:29,home:"court",relations:{chiara:.65,tea:.5,marta:.5,peppe:.5},relType:{chiara:"family",tea:"neighbor",marta:"friend",peppe:"friend"},schedule:[{from:8,to:12,node:"court",kind:"home"},{from:12,to:15,node:"pia_c",kind:"social"},{from:15,to:19,node:"north_c",kind:"social"},{from:19,to:24,node:"court",kind:"home"}],agenda:[{node:"court",dwell:10},{node:"pia_c",dwell:8},{node:"north_c",dwell:5}]},{id:"lina",name:"Lina (infermiera)",color:6279362,x:14,z:16,home:"apt",work:"pia_s",relations:{tea:.7,marco:.3,tiberio:.4,sara:.3},relType:{tea:"family",marco:"neighbor",tiberio:"neighbor",sara:"acquaintance"},schedule:[{from:8,to:16,node:"pia_s",kind:"work"},{from:16,to:18,node:"apt",kind:"home"},{from:18,to:21,node:"court",kind:"social"},{from:21,to:24,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:6},{node:"pia_s",dwell:12},{node:"court",dwell:5}]},{id:"tiberio",name:"Tiberio (commerciante)",color:13934638,x:10,z:16,home:"apt",work:"pia_e",relations:{marco:.5,furio:.6,lina:.4,luca:.3},relType:{marco:"coworker",furio:"coworker",lina:"neighbor",luca:"acquaintance"},schedule:[{from:8,to:13,node:"pia_e",kind:"work"},{from:13,to:15,node:"bar_in",kind:"leisure"},{from:15,to:20,node:"pia_e",kind:"work"},{from:20,to:23,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:6},{node:"pia_e",dwell:12},{node:"bar_in",dwell:5}]},{id:"monica",name:"Monica (cameriera)",color:14711706,x:6,z:-16,home:"b5_door",work:"bar_in",relations:{bianca:.75,paolo:.6,luca:.4,rita:.4,anna:.5},relType:{bianca:"family",paolo:"coworker",luca:"acquaintance",rita:"friend",anna:"coworker"},schedule:[{from:9,to:15,node:"bar_in",kind:"work"},{from:15,to:17,node:"b5_door",kind:"home"},{from:17,to:23,node:"bar_in",kind:"work"}],agenda:[{node:"b5_door",dwell:5},{node:"bar_in",dwell:14},{node:"pia_c",dwell:4}]},{id:"peppe",name:"Peppe (musicista)",color:8376394,x:16,z:-4,home:"vic_s",relations:{osvaldo:.5,nino:.4,gino:.4,elena:.3},relType:{osvaldo:"friend",nino:"friend",gino:"acquaintance",elena:"acquaintance"},schedule:[{from:10,to:14,node:"vic_s",kind:"home"},{from:14,to:18,node:"pia_c",kind:"leisure"},{from:18,to:23,node:"bar_out",kind:"social"}],agenda:[{node:"vic_s",dwell:6},{node:"pia_c",dwell:8},{node:"bar_out",dwell:7}]},{id:"ida",name:"Ida (vecchia del quartiere)",color:10111610,x:-14,z:-16,home:"b4_door",relations:{nadia:.8,tea:.5,elena:.4,sara:.4},relType:{nadia:"family",tea:"friend",elena:"neighbor",sara:"neighbor"},schedule:[{from:7,to:10,node:"pia_c",kind:"social"},{from:10,to:14,node:"b4_door",kind:"home"},{from:14,to:18,node:"pia_w",kind:"social"},{from:18,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"pia_c",dwell:8},{node:"b4_door",dwell:10},{node:"pia_w",dwell:6}]},{id:"sandro",name:"Sandro (guardiano notturno)",color:4868730,x:-20,z:33,home:"north_c",work:"road_c",relations:{ivan:.35,rossi:.3,verdi:.3,furio:.3},relType:{ivan:"acquaintance",rossi:"acquaintance",verdi:"acquaintance",furio:"acquaintance"},schedule:[{from:6,to:18,node:"north_c",kind:"home"},{from:18,to:24,node:"road_c",kind:"work"}],agenda:[{node:"north_c",dwell:8},{node:"road_c",dwell:6},{node:"vic_n",dwell:5},{node:"pia_s",dwell:4}]}],P_=.42,L_=.25,I_=.06,D_=1,N_=6;function Pl(n,e,t){return`${n}|${e.toFixed(2)},${t.toFixed(2)}`}function Cr(n,e,t,i,r){n.arriveR=r??.6;const s=Pl(i,e,t),o=h_();if(n.pathGoal===s&&n.pathNavRev===o){if(n.pathOk===!1)return{ok:!1,exact:n.pathExact!==!1,goal:{x:e,z:t}};if(n.path&&n.path.length>0)return{ok:!0,exact:n.pathExact!==!1,goal:{x:e,z:t}}}const a=n.pathGoal!==s,c=Za(n.x,n.z,e,t);return n.path=c.points,n.pathIdx=0,n.pathOk=c.ok,n.pathNavRev=o,n.pathExact=c.exact,n.pathGoal=s,a&&(n.stuckFor=0,n.navT=0,n.navX=n.x,n.navZ=n.z),c.ok&&!c.exact&&(n.pathGoal=Pl(i,c.goal.x,c.goal.z),i==="goto"&&(n.gotoX=c.goal.x,n.gotoZ=c.goal.z)),c.ok||(n.path=[],n.pathIdx=0),c}function U_(n){n.pathNavRev=-1}function Ja(n,e,t){if(!n.path||n.pathIdx>=n.path.length)return"arrived";const i=n.arriveR??.6,r=n.path[n.path.length-1];if(Math.hypot(r.x-n.x,r.z-n.z)<=i)return n.pathIdx=n.path.length,n.speed=0,"arrived";const s=n.path[n.pathIdx],o=s.x-n.x,a=s.z-n.z,c=Math.hypot(o,a),d=n.pathIdx===n.path.length-1?i:P_;if(c<=d)return n.pathIdx++,n.pathIdx>=n.path.length?"arrived":"moving";const u=Math.min(t,c/e);if(n.x+=o/c*u*e,n.z+=a/c*u*e,n.yaw=Math.atan2(o,a),n.speed=u,n.navT=(n.navT??0)+e,n.navT>=L_){const f=Math.hypot(n.x-(n.navX??n.x),n.z-(n.navZ??n.z));if(n.stuckFor=f<I_?(n.stuckFor??0)+n.navT:0,n.navX=n.x,n.navZ=n.z,n.navT=0,n.stuckFor>D_&&U_(n),n.stuckFor>N_)return"stalled"}return"moving"}function zs(n){n.path=[],n.pathIdx=0,n.pathGoal=null,n.stuckFor=0}function z_(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function F_(n,e,t,i){const r=[];for(const[s,o]of Object.entries(ze.nodes)){const a=Math.hypot(o.x-e,o.z-t);if(a<18)continue;const c=i?i.get(s)??0:0,l=z_(n.id+s)%1e3/1e3*5;r.push({id:s,x:o.x,z:o.z,score:a+l-7*c})}return r.sort((s,o)=>o.score-s.score||(s.id<o.id?-1:1)),r}function k_(n){const e=new Map;for(const t of n)t.state!=="alerted"||!t.fleeNode||e.set(t.fleeNode,(e.get(t.fleeNode)??0)+1);return e}function O_(n,e,t,i){const r=F_(n,e,t,i);for(const s of r.slice(0,8))if(Za(n.x,n.z,s.x,s.z).ok)return s;return r[0]??null}function B_(n){const e=Object.entries(ze.nodes).map(([t,i])=>({id:t,x:i.x,z:i.z,d:Math.hypot(i.x-n.x,i.z-n.z)})).sort((t,i)=>i.d-t.d||(t.id<i.id?-1:1));for(const t of e.slice(0,10))if(Za(n.x,n.z,t.x,t.z).ok)return t;return null}const gi=15,H_=Math.PI/3,G_=8,V_=.5,W_=.4;function Ea(n,e,t,i){return e.actorId==="player"&&t<=G_&&i>=V_?"uomo in verde":"sconosciuto"}const X_=.3,$_=.1;function js(n,e,t,i,r){const s=e-n.x,o=t-n.z,a=s*s+o*o;if(a>gi*gi)return{seen:!1};const c=Math.sqrt(a);if(c>1.2){let g=Math.atan2(s,o)-n.yaw;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;if(Math.abs(g)>H_)return{seen:!1}}if(Yn(n.x,n.z,e,t,i))return{seen:!1};const l=Math.max(.35,1-c/(gi*1.4)),d=.3+c/gi*1.7,u=(r.next()+r.next()-1)*d,f=(r.next()+r.next()-1)*d;let p=null;return c>10&&r.next()<.35&&(p=r.pick(["ora sbagliata","luogo impreciso","dettaglio confuso"])),{seen:!0,confidence:l,error:p,px:e+u,pz:t+f}}function q_(n,e,t,i,r,s,o=.05){const a=Math.hypot(n.x-e.x,n.z-e.z),c=js(n,e.x,e.z,t,i);if(n.memory.includes(e.id)){if(c.seen&&e.actorId){n.gaze||(n.gaze={}),n.gaze[e.id]=(n.gaze[e.id]??0)+o;const f=n.beliefs.get(e.id);if(f&&f.actor==="sconosciuto"&&n.gaze[e.id]>=W_){const p=Ea(n,e,a,c.confidence);p!=="sconosciuto"&&(f.actor=p,delete n.gaze[e.id])}}return"unseen"}if(!c.seen)return n.gaze&&(n.gaze[e.id]=(n.gaze[e.id]??0)*.5),"unseen";n.gaze||(n.gaze={});const l=n.state==="alerted"||n.state==="curious"?$_:X_,d=(n.gaze[e.id]??0)+o;return n.gaze[e.id]=d,d<l||ht(n.beliefs,e.id,lt({kind:e.type,severity:e.severity,px:c.px,pz:c.pz,place:e.place,actor:Ea(n,e,a,c.confidence),subject:e.victimId??null,channel:"seen",confidence:Math.min(1,c.confidence+.05),t:r,error:c.error,w:+(.5+a*.3).toFixed(2),moved:!!e.moved,provenance:[]}),n.id)==="ignored"||c.confidence<ir?"unseen":(delete n.gaze[e.id],jt(n,e.id),s.addWitness(e,n.id),"learned")}function Qa(n,e,t,i,r,s){const o=e-n.x,a=t-n.z,c=Math.hypot(o,a);let l=i;if(Yn(n.x,n.z,e,t,r)&&(l*=.5),c>l)return{heard:!1};const d=Math.max(.3,1-c/(l*1.3)),u=1+c*.15;return{heard:!0,confidence:d,px:e+(s.next()+s.next()-1)*u,pz:t+(s.next()+s.next()-1)*u,w:+(1+c*.5).toFixed(2)}}function ba(n,e,t){const i=e.crouch?7:15,r=e.x-n.x,s=e.z-n.z,o=Math.hypot(r,s);if(o>i&&!(e.running&&o<10))return{seen:!1};if(o>1.2){let a=Math.atan2(r,s)-n.yaw;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;if(Math.abs(a)>Math.PI/3&&!e.running)return{seen:!1}}return Yn(n.x,n.z,e.x,e.z,t)?{seen:!1}:{seen:!0,confidence:Math.max(.4,1-o/20)}}const wa=new Set(["kill","found_corpse","corpse","sabotage"]);function j_(n,e){const t=[];for(const[i,r]of n.beliefs){if(!wa.has(r.kind))continue;const s=an(r,e);s>=.2&&t.push({id:i,b:r,eff:s})}return t.sort((i,r)=>r.eff-i.eff),t}function Ta(n,e){const{t,rng:i}=e,r=n.police;for(const l of e.nearby(n,6))if(!(l.role==="police"||l.state==="dead"))for(const[d,u]of l.beliefs){if(!wa.has(u.kind))continue;const f=n.beliefs.get(d);if(f&&wa.has(f.kind))continue;const p=an(u,t);if(p<.25)continue;const v=u.provenance[u.provenance.length-1]===l.id?[...u.provenance]:[...u.provenance,l.id];if(ht(n.beliefs,d,lt({kind:u.kind,severity:u.severity,px:u.px,pz:u.pz,place:u.place,actor:u.actor,subject:u.subject??null,channel:"hearsay",confidence:+(p*.7).toFixed(3),t,error:u.error,moved:!!u.moved,provenance:v}),n.id)!=="ignored"){jt(n,d),e.stats.gossipOps++,e.onInterview?.(n,l,d);break}}const s=j_(n,t),o=s[0],a=o?o.eff:0;if(!o&&n.state!=="curious"){for(const[l,d]of n.beliefs)if(n.alertedBy!==l&&d.kind==="noise"&&an(d,t)>=.4){n.alertedBy=l,n.gotoX=d.px,n.gotoZ=d.pz,n.state="curious",r.state!=="ALERTED"&&(r.state="ALERTED",r.since=t);break}}const c=r.state;if(!o)r.state!=="UNAWARE"&&(r.state="UNAWARE",r.since=t,r.confirmed=!1,r.catchT=0);else if(a>=.45||r.confirmed){r.state!=="INVESTIGATING"&&(r.state="INVESTIGATING",r.since=t,r.searchX=o.b.px,r.searchZ=o.b.pz);const l=s.some(u=>u.b.actor==="uomo in verde"),d=ba(n,e.playerStealth,e.colliders);l&&d.seen&&!r.confirmed&&r.state!=="IDENTIFIED"&&(r.state="IDENTIFIED",r.since=t,r.lastSeenP=t,r.catchT=0)}else a>=.25?r.state!=="ALERTED"&&(r.state="ALERTED",r.since=t,r.searchX=o.b.px,r.searchZ=o.b.pz):a>=.2&&r.state==="UNAWARE"&&(r.state="UNAWARE",r.since=t);if(c!==r.state&&e.onPoliceState?.(n,c,r.state),r.state==="INVESTIGATING"){const l=Math.hypot(n.x-r.searchX,n.z-r.searchZ);let d=null;l<3?(d=e.corpsesNear(n.x,n.z,9),d?(r.confirmed=!0,r.state="SEARCHING",r.since=t,r.searchX=d.x,r.searchZ=d.z,n.state="dwell",n.dwellLeft=2):t-r.since>25?(r.state="ALERTED",r.since=t,r.confirmed=!1,r.catchT=0,n.gotoX=null):n.gotoX||(n.gotoX=r.searchX,n.gotoZ=r.searchZ,n.state="curious")):Number.isFinite(r.searchX)&&n.gotoX==null&&(n.gotoX=r.searchX,n.gotoZ=r.searchZ,n.state="curious"),l<3&&!d&&t-r.since<=25&&(s.some(f=>f.b.actor==="uomo in verde")&&r.state!=="IDENTIFIED"?(r.state="IDENTIFIED",r.since=t,r.lastSeenP=t,r.catchT=0):r.state!=="SEARCHING"&&(r.state="SEARCHING",r.since=t))}if(r.state==="SEARCHING"){const l=s.some(d=>d.b.actor==="uomo in verde");if(r.pickAt=r.pickAt??0,l)if(ba(n,e.playerStealth,e.colliders).seen){const u=Math.hypot(n.x-e.player.x,n.z-e.player.z);n.gotoX=e.player.x,n.gotoZ=e.player.z,n.state="curious",r.lastSeenP=t,u<2.5&&(r.catchT=(r.catchT??0)+e.dtThink,r.catchT>4&&e.onCaught?.(n))}else t-(r.lastSeenP??-99)>20&&t-r.since>150&&(r.state="ALERTED",r.since=t,r.catchT=0,n.gotoX=null);else t-r.since>120&&(r.state="ALERTED",r.since=t,n.gotoX=null)}if(r.state==="SEARCHING"||r.state==="INVESTIGATING"){const l=e.corpsesNear(n.x,n.z,6);if(l){let d=null;for(const u of e.nearby(n,6))if(!(u.state==="dead"||u.state==="arrested"||u.role==="police")&&!(Math.hypot(u.x-l.x,u.z-l.z)>=2.5)&&!Yn(n.x,n.z,u.x,u.z,e.colliders)){d=u;break}d?r.suspectId!==d.id?(r.suspectId=d.id,r.suspectSince=t):t-(r.suspectSince??t)>=4&&(r.suspectId=null,r.suspectSince=0,r.state="UNAWARE",r.since=t,r.confirmed=!1,r.catchT=0,n.gotoX=null,n.state="dwell",n.dwellLeft=3,d.state="arrested",d.speed=0,d.gotoX=null,d.gotoZ=null,d.fleeNode=null,e.onArrest?.(n,d)):r.suspectSince&&t-r.suspectSince>6&&(r.suspectId=null,r.suspectSince=0)}}}const Ll=.4,Y_=.3,Z_=[["road_","strada"],["vic_","vicolo"],["north_","vicolo"],["pia_","piazza"],["sq_","piazzale"],["b4","casa"],["b5","casa"],["apt","palazzo"],["bar_","bar"],["svc_","deposito"],["court","corte"]];function K_(n){for(const[e,t]of Z_)if(n.startsWith(e))return t;return n}const J_=600;function Sr(n){return(8+n*24/J_)%24}function Q_(n,e){for(const t of n.schedule)if(t.from<=t.to){if(e>=t.from&&e<t.to)return t}else if(e>=t.from||e<t.to)return t;return null}function eg(n,e,t){if(n.routineShift)if(e>=n.routineShift.until)n.routineShift=null;else{const c=n.routineShift.node;n.agendaBlock!==c&&(n.agendaBlock=c,n.agenda=[{node:c,dwell:20}],n.agendaIdx=0,n.path=[],n.pathIdx=0,n.state="dwell",n.dwellLeft=.3);return}if(!n.schedule||!n.schedule.length)return;const i=Sr(e),r=Q_(n,i),s=r?r.node:n.home??n.schedule[0].node;if(n.agendaBlock===s)return;n.agendaBlock=s;const o=r&&r.kind==="social",a=Math.round((o?25:15)+(t?t.next():0)*10);n.agenda=[{node:s,dwell:a}],n.agendaIdx=0,(n.state==="walk"||n.path.length)&&(n.path=[],n.pathIdx=0),n.state="dwell",n.dwellLeft=.3}function nn(n,e){const{t,navAdj:i,rng:r}=e;if(n.state!=="arrested"){if(n.role==="police")Ta(n,e);else{for(const[s,o]of n.beliefs){if(n.alertedBy===s)continue;const a=an(o,t);if(o.severity>=Ll&&a>=Y_){n.alertedBy=s;const c=br(n,o.subject);if(c&&(n.mournT=t+c),c>=300&&a>=.4){n.state="curious",n.gotoX=o.px,n.gotoZ=o.pz,n.dwellLeft=4;return}n.state=o.channel==="seen"?"alerted":"dwell",n.dwellLeft=4+r.next()*4;const l=k_(e.nearby(n,45)),d=O_(n,o.px,o.pz,l);n.fleeNode=d?d.id:null,n.fleeNode||(n.state="dwell",n.dwellLeft=6);return}}if(n.state!=="alerted"&&n.state!=="curious")for(const[s,o]of n.beliefs){if(n.alertedBy===s)continue;if(an(o,t)>=.25&&(o.kind==="noise"||o.severity<Ll)&&!(o.channel==="hearsay"&&o.kind==="suspicion")){const c=n.x-o.px,l=n.z-o.pz;if(c*c+l*l<2.25)continue;n.alertedBy=s,n.gotoX=o.px,n.gotoZ=o.pz,n.state="curious";break}}}if(t-n.gossipAt>3&&n.beliefs.size>0&&n.role!=="police"){const s=e.nearby(n,3.5).filter(o=>o.id===n.id||$i(n,o.id)<=0?!1:[...n.beliefs.entries()].some(([a,c])=>{const l=o.beliefs.get(a);return!l||l.kind!==c.kind}));if(s.length){s.sort((a,c)=>$i(n,c.id)-$i(n,a.id));const o=$i(n,s[0].id)>.15?s[0]:r.next()<.4?s[r.next()*s.length|0]:null;if(o){const a=[...n.beliefs.entries()].find(([c,l])=>{const d=o.beliefs.get(c);return!d||d.kind!==l.kind});if(a){const[c,l]=a,d=an(l,t);if(d>=ir){const u=n.trust[o.id]??.5,p=l.provenance[l.provenance.length-1]===n.id?[...l.provenance]:[...l.provenance,n.id],g=o.beliefs.has(c);let v=l.place,m=l.px,h=l.pz,w=l.actor,_=l.w??null;if(r.next()<.3&&(v=K_(l.place),m+=(r.next()+r.next()-1)*4,h+=(r.next()+r.next()-1)*4,_!=null&&(_=+(_+4).toFixed(2))),w!=="sconosciuto"&&r.next()<.12&&(w="sconosciuto"),ht(o.beliefs,c,lt({kind:l.kind,severity:l.severity,px:m,pz:h,place:v,actor:w,subject:l.subject??null,channel:"hearsay",confidence:+(d*(.4+.4*u)*Ts(n,o.id)).toFixed(3),t,error:l.error??(r.next()<.25?"dettaglio alterato nel passaparola":null),w:_,moved:!!l.moved,provenance:p}),o.id)!=="ignored"){if(jt(o,c),g){const T=.05*(Pd[In(o,n.id)]??.6);o.trust[n.id]=Math.min(1,(o.trust[n.id]??.5)+T)}const C=In(o,n.id);if(C!=="family"&&C!=="enemy"){const T=(r.next()-.5)*.06,b=n.relations[o.id]??.3;n.relations[o.id]=Math.max(0,Math.min(1,+(b+T).toFixed(4)))}n.gossipAt=t,o.gossipAt=t,n.talkT=t,o.talkT=t,e.stats.gossipOps++,e.onGossip?.(n,o,c)}}}}}}if(n.state!=="alerted"&&n.state!=="curious"&&(n.state==="walk"||n.state==="dwell"||n.state==="idle")){eg(n,t,r);const s=n.agenda[n.agendaIdx%n.agenda.length];if(n.state!=="walk"){const o=n.mournT&&t<n.mournT?.6:1;if(n.dwellLeft-=e.dtThink*o,n.dwellLeft>.4){for(const a of e.nearby(n,4))if(In(n,a.id)==="enemy"){n.dwellLeft=.4;break}}if(n.dwellLeft<=0){const a=ze.nodes[s.node],c=`walk|${s.node}|${n.agendaIdx}`;a?Cr(n,a.x,a.z,c,Ln(s.node)).ok?(n.state="walk",e.stats.pathComputations++):(n.agendaIdx++,n.dwellLeft=.5):n.agendaIdx++}}}}}function tg(n,e,t){if(!n.agenda||!n.agenda.length){n.state="dwell",n.dwellLeft=1;return}const i=n.agenda[n.agendaIdx%n.agenda.length],r=ze.nodes[i.node];if(!r){n.agendaIdx++,n.state="dwell",n.dwellLeft=i.dwell;return}const s=`walk|${i.node}|${n.agendaIdx}`;if(!Cr(n,r.x,r.z,s,Ln(i.node)).ok){n.agendaIdx++,n.state="dwell",n.dwellLeft=i.dwell,zs(n);return}const a=Ja(n,e,t);a!=="moving"&&(a==="stalled"&&zs(n),n.agendaIdx++,n.state="dwell",n.dwellLeft=i.dwell)}function ng(n,e,t,i,r){if(!Cr(n,e,t,"goto",1).ok)return!0;const o=Ja(n,i,r);return o==="moving"?!1:(o==="stalled"&&zs(n),!0)}const ig=.3,rg=.5,sg=8,og=10,ag=.35;function Aa(n,e,t){for(const i of n.npcs){if(i.state==="dead"||i.level==="L3")continue;const r=ba(i,e,n.colliders);if(!r.seen){i.awareness&&(i.awareness=Math.max(0,i.awareness-ig*t));continue}const s=Math.hypot(e.x-i.x,e.z-i.z);let o=.5*(1-Math.min(1,s/22));e.crouch&&(o*=.45),e.running&&(o*=1.9),i.awareness=Math.min(1,(i.awareness??0)+Math.max(.06,o)*t),i.awareness>=rg&&lg(n,i,e,s,r)}}const cg=120;function lg(n,e,t,i,r){const s=lr(t.x,t.z);for(const f of e.beliefs.values())if(f.kind==="suspicion"&&f.place===s&&n.t-f.t<cg)return;const o=`spot-${s}-${Math.floor(n.t/og)}`,a=.4+i/22*1.6,c=(n.rng.next()+n.rng.next()-1)*a,l=(n.rng.next()+n.rng.next()-1)*a,d=i<=sg;ht(e.beliefs,o,lt({kind:"suspicion",severity:ag,px:t.x+c,pz:t.z+l,place:s,actor:d?"uomo in verde":"sconosciuto",channel:"seen",confidence:r.confidence*(d?1:.85),t:n.t,error:d?null:"non l'ho riconosciuto",provenance:[]}),e.id)!=="ignored"&&jt(e,o)}const dg=6,Il=.55;function ec(n,e,t,i,r){const s=lr(e,t);n.journal.append("noise",{t:n.t,severity:r,x:e,z:t,actorId:null,place:s});const o=`noise-${n.t.toFixed(1)}-${Math.round(e)}-${Math.round(t)}`;let a=0;for(const c of n.npcs){if(c.state==="dead")continue;const l=Qa(c,e,t,i,n.colliders,n.rng);if(!l.heard)continue;ht(c.beliefs,o,lt({kind:"noise",severity:r,px:l.px,pz:l.pz,place:s,actor:"sconosciuto",channel:"heard",confidence:l.confidence,t:n.t,w:l.w,provenance:[]}),c.id)!=="ignored"&&(jt(c,o),a++)}return a}function ug(n,e,t){if(!e.running||e.crouch)return 0;const i=Math.floor(n.t/Il),r=Math.floor((n.t-t)/Il);return i===r?0:ec(n,e.x,e.z,dg,.25)}const fg=1.2;function Fs(n,e){return!e||e.state!=="dead"||e.hidden?!1:(e.hidden=!0,e.death&&(e.death.hidden=!0),n.stats.concealed=(n.stats.concealed??0)+1,!0)}function Ra(n,e,t,i){let r=null,s=i*i;for(const o of n.npcs){if(o.state!=="dead"||o.hidden)continue;const a=o.x-e,c=o.z-t,l=a*a+c*c;l<s&&(s=l,r=o)}return r}function Pr(n,e,t,i){return n.hidden?e*e+t*t<=Math.min(i,fg)**2:!0}const Dl=30,Nl=60,hg=12,pg=5,mg=4,_g=5,gg=2,xg=24,wr=8,Ul=2,vg=2;function Dd(n,e,t,i,r,s={}){return{t:0,npcs:n,journal:e,colliders:t,navAdj:i,rng:r,hooks:s,colliderEpoch:Rr(),counts:{L1:0,L2:0,L3:0},simMs:0,aiMs:0,unseen:[],grid:new Map,stats:{perceptionChecks:0,gossipOps:0,pathComputations:0,thinkRuns:0,pruned:0,thinkByLevel:{L1:0,L2:0,L3:0},budgetSkips:0,budgetPressure:0,corpseDiscoveries:0},pruneAt:0,corpseAt:0,corpseReported:new Set}}function Mg(n,e){return`${Math.floor(n/wr)},${Math.floor(e/wr)}`}function zl(n){n.grid.clear(),n.npcs.forEach((e,t)=>{const i=Mg(e.x,e.z);let r=n.grid.get(i);r||(r=[],n.grid.set(i,r)),r.push(t)})}function Fl(n,e,t){const i=[],r=Math.floor(e.x/wr),s=Math.floor(e.z/wr),o=Math.ceil(t/wr),a=t*t;for(let c=r-o;c<=r+o;c++)for(let l=s-o;l<=s+o;l++){const d=n.grid.get(`${c},${l}`);if(d)for(const u of d){const f=n.npcs[u];if(f===e||f.state==="dead")continue;const p=f.x-e.x,g=f.z-e.z;p*p+g*g<=a&&i.push(f)}}return i}function yg(n,e,t,i){let r,s,o,a=null;if(i){r=.95;const l=.3;s=e.x+(n.rng.next()+n.rng.next()-1)*l,o=e.z+(n.rng.next()+n.rng.next()-1)*l}else{const l=js(t,e.x,e.z,n.colliders,n.rng);if(!l.seen)return!1;r=l.confidence,s=l.px,o=l.pz,a=l.error}return ht(t.beliefs,e.id,lt({kind:e.type,severity:e.severity,px:s,pz:o,place:e.place,actor:e.actorId==="player"?"uomo in verde":e.actorId??"sconosciuto",subject:e.victimId??null,channel:"seen",confidence:r,t:n.t,error:a,moved:!!e.moved,provenance:[]}),t.id)==="ignored"?!1:(jt(t,e.id),n.journal.addWitness(e,t.id),!0)}function Ht(n,e,t){const i=performance.now();n.colliderEpoch!==Rr()&&(n.colliderEpoch=Rr(),n.colliders=cr()),n.t+=t;let r=0,s=0,o=0;for(const _ of n.unseen)for(const x of n.npcs){if(x.state==="dead")continue;const C=x.x-_.x,T=x.z-_.z;C*C+T*T>15*15||(n.stats.perceptionChecks++,q_(x,_,n.colliders,n.rng,n.t,n.journal,t)==="learned"&&n.hooks.onWitness?.(x,_))}for(let _=n.unseen.length-1;_>=0;_--)if(n.t-n.unseen[_].t>vg){const x=n.unseen[_];for(const C of n.npcs)C.gaze&&delete C.gaze[x.id];n.unseen.splice(_,1)}Aa(n,e,t),ug(n,e,t);const a=n.npcs.map(_=>({n:_,d:Math.hypot(_.x-e.x,_.z-e.z)})).sort((_,x)=>_.d-x.d),c=[];for(const _ of a){const x=_.n.level==="L1";(x?_.d<=Dl+pg:_.d<=Dl)&&c.push({o:_,eff:_.d-(x?mg:0)})}c.sort((_,x)=>_.eff-x.eff);const l=new Set(c.slice(0,hg).map(_=>_.o.n));for(const{n:_,d:x}of a){const C=_.level,T=C==="L1"||C==="L2"?Nl+_g:Nl;_.level=l.has(_)?"L1":x<=T?"L2":"L3",_.level==="L1"?r++:_.level==="L2"?s++:o++}zl(n);for(const{n:_}of a)_.thinkAt-=t;const d=performance.now(),u={x:e.x,z:e.z,crouch:!!e.crouch,running:!!e.running},f=(_,x,C)=>{let T=null,b=C*C;for(const R of n.npcs){if(R.state!=="dead")continue;const S=R.x-_,M=R.z-x,P=S*S+M*M;P>=b||Pr(R,S,M,C)&&(Yn(_,x,R.x,R.z,n.colliders)||(b=P,T=R))}return T?{x:T.x,z:T.z,id:T.id}:null},p={t:n.t,npcs:n.npcs,navAdj:n.navAdj,rng:n.rng,dtThink:.25,stats:n.stats,nearby:(_,x)=>Fl(n,_,x),player:e,playerStealth:u,colliders:n.colliders,corpsesNear:f,onGossip:n.hooks.onGossip,onInterview:n.hooks.onInterview,onPoliceState:n.hooks.onPoliceState,onCaught:n.hooks.onCaught,onArrest:n.hooks.onArrest},g=Math.round(n.t/t);let v=0,m=!1;for(let _=0;_<a.length;_++){const{n:x}=a[(_+g)%a.length],C=x.level==="L1"?.25:.5;if(x.thinkAt<=0&&x.level!=="L3"&&x.state!=="dead"){if(v>=xg){n.stats.budgetSkips++;continue}v++,x.thinkAt=C,n.stats.thinkRuns++,n.stats.thinkByLevel[x.level]++,nn(x,p),!m&&!(v&3)&&performance.now()-d>gg&&(m=!0,n.stats.budgetPressure++)}}n.aiMs=performance.now()-d;for(const{n:_}of a){if(_.state==="dead"){_.speed=0;continue}if(_.level==="L3"&&_.state!=="arrested"){if(_.symbolAt=(_.symbolAt??0)+t,_.symbolAt>6){_.symbolAt=0;const C=_.agenda[_.agendaIdx%_.agenda.length],T=ze.nodes[C.node],b=Math.hypot(_.x-e.x,_.z-e.z)>45;T&&b&&Yn(e.x,e.z,T.x,T.z,n.colliders)&&(_.x=T.x,_.z=T.z,_.agendaIdx++)}continue}if(_.state!=="walk"&&_.state!=="alerted"&&_.state!=="curious"){_.speed=0;continue}if(_.state==="curious"&&_.gotoX!=null){const C=yr(_.gotoX,_.gotoZ,.35,n.colliders);_.gotoX=C.x,_.gotoZ=C.z,ng(_,_.gotoX,_.gotoZ,t,_.role==="police"?2.4:1.7)&&(_.state="dwell",_.dwellLeft=3+n.rng.next()*4,_.gotoX=null,_.gotoZ=null)}else if(_.state==="alerted"&&_.fleeNode){const C=ze.nodes[_.fleeNode];if(!C)_.state="dwell",_.dwellLeft=5,_.fleeNode=null;else{const T=Math.max(1.5,Ln(_.fleeNode));let b=Cr(_,C.x,C.z,`flee|${_.fleeNode}`,T);if(!b.ok){const R=B_(_);R?(_.fleeNode=R.id,b=Cr(_,R.x,R.z,`flee|${R.id}`,Math.max(1.5,Ln(R.id)))):(_.state="dwell",_.dwellLeft=5,_.fleeNode=null,b=null)}if(b){const R=Ja(_,t,2.6);R!=="moving"&&(R==="stalled"&&zs(_),_.state="dwell",_.dwellLeft=5,_.fleeNode=null)}}}else tg(_,t,1.6);const x=yr(_.x,_.z,.35,n.colliders);_.x=x.x,_.z=x.z}zl(n);const h=.7,w=h*h;for(const{n:_}of a)if(!(_.state==="dead"||_.level==="L3"))for(const x of Fl(n,_,h)){if(x.level==="L3"||x.id<_.id)continue;let C=x.x-_.x,T=x.z-_.z,b=C*C+T*T;if(b>=w)continue;b<1e-9&&(C=1,T=0,b=1);const R=Math.sqrt(b),S=(h-R)/2;_.x-=C/R*S,_.z-=T/R*S,x.x+=C/R*S,x.z+=T/R*S;const M=yr(_.x,_.z,.35,n.colliders);_.x=M.x,_.z=M.z;const P=yr(x.x,x.z,.35,n.colliders);x.x=P.x,x.z=P.z}if(n.t-n.corpseAt>1){n.corpseAt=n.t;for(const _ of n.npcs){if(_.state!=="dead"||n.corpseReported.has(_.id))continue;let x=null,C=!1;for(const b of n.npcs){if(b.state==="dead")continue;const R=b.x-_.x,S=b.z-_.z,M=R*R+S*S;if(Pr(_,R,S,gi)&&!(M>gi*gi)){if(M<=Ul*Ul){if(!Yn(b.x,b.z,_.x,_.z,n.colliders)){x=b,C=!0;break}continue}if(js(b,_.x,_.z,n.colliders,n.rng).seen){x=b;break}}}if(!x)continue;n.corpseReported.add(_.id);const T=n.journal.append("found_corpse",{t:n.t,severity:.55,x:_.x,z:_.z,actorId:null,victimId:_.id,place:lr(_.x,_.z),moved:!!_.hidden});n.unseen.push(T),yg(n,T,x,C)&&(n.stats.corpseDiscoveries++,n.hooks.onWitness?.(x,T))}}if(n.t-n.pruneAt>10){n.pruneAt=n.t;for(const _ of n.npcs)n.stats.pruned+=Ka(_.beliefs,n.t),As(_,n.t)}n.counts={L1:r,L2:s,L3:o},n.simMs=performance.now()-i}function at(n,e,t){const i=n.journal.append(e,{t:n.t,...t});return n.unseen.push(i),i}function Sg(){const n=new Set,e={x:0,z:0,active:!1};let t=!1;const i={dx:0,dy:0},r=new Set,s=[],o=(b,R,S,M)=>{b.addEventListener(R,S,M),s.push([b,R,S,M])};o(window,"keydown",b=>{["ArrowUp","ArrowDown","Space"].includes(b.code)&&b.preventDefault(),b.code==="F3"&&b.preventDefault(),n.add(b.code),r.add(b.code)}),o(window,"keyup",b=>n.delete(b.code));let a=!1,c=0,l=0;const d=document.getElementById("app");o(d,"mousedown",b=>{a=!0,c=b.clientX,l=b.clientY}),o(window,"mousemove",b=>{a&&(i.dx+=b.clientX-c,i.dy+=b.clientY-l,c=b.clientX,l=b.clientY)}),o(window,"mouseup",()=>a=!1),o(d,"touchstart",b=>{for(const R of b.changedTouches)R.clientX>innerWidth*.4&&!a&&(a=!0,c=R.clientX,l=R.clientY)},{passive:!0}),o(d,"touchmove",b=>{for(const R of b.changedTouches)a&&(i.dx+=R.clientX-c,i.dy+=R.clientY-l,c=R.clientX,l=R.clientY)},{passive:!0}),o(d,"touchend",()=>a=!1);const u=document.getElementById("joy"),f=document.getElementById("stick");let p=null;const g=(b,R)=>{f.style.left=34+b+"px",f.style.top=34+R+"px"};o(u,"touchstart",b=>{p=b.changedTouches[0].identifier,b.preventDefault()},{passive:!1}),o(window,"touchmove",b=>{for(const R of b.changedTouches)if(R.identifier===p){const S=u.getBoundingClientRect();let M=R.clientX-(S.left+60),P=R.clientY-(S.top+60);const k=Math.hypot(M,P)||1,F=Math.min(k,44);M=M/k*F,P=P/k*F,g(M,P),e.x=M/44,e.z=P/44,e.active=!0}},{passive:!0}),o(window,"touchend",b=>{for(const R of b.changedTouches)R.identifier===p&&(p=null,e.x=0,e.z=0,e.active=!1,g(0,0))});const v=document.getElementById("btn-act"),m=document.getElementById("btn-run"),h=()=>r.add("KeyE"),w=()=>t=!t;o(v,"click",h),o(m,"click",w);const _=document.getElementById("btn-fight"),x=document.getElementById("btn-whistle"),C=document.getElementById("btn-crouch");return _&&o(_,"click",()=>r.add("KeyF")),x&&o(x,"click",()=>r.add("KeyQ")),C&&o(C,"click",()=>r.add("KeyC")),{api:{axis(){let b=0,R=0;(n.has("KeyW")||n.has("ArrowUp"))&&(R-=1),(n.has("KeyS")||n.has("ArrowDown"))&&(R+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(b-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(b+=1),e.active&&(b+=e.x,R+=e.z);const S=Math.hypot(b,R);return S>1&&(b/=S,R/=S),{x:b,z:R}},run(){return n.has("ShiftLeft")||n.has("ShiftRight")||t},consumeLook(){const b={dx:i.dx,dy:i.dy};return i.dx=0,i.dy=0,b},wasPressed(b){return r.has(b)?(r.delete(b),!0):!1},injectKey(b){r.add(b),n.add(b)},releaseKey(b){n.delete(b)},injectLook(b,R){i.dx+=b,i.dy+=R},setJoy(b,R){e.x=b,e.z=R,e.active=!0},clearJoy(){e.x=0,e.z=0,e.active=!1,g(0,0)}},dispose(){for(const[b,R,S,M]of s)b.removeEventListener(R,S,M);s.length=0}}}function Nd(n,e){return{x:n,z:e,yaw:Math.PI,speed:0,mesh:null,interactTarget:null,crouch:!1,running:!1,attackT:-99}}function Ud(n,e,t,i,r){const s=e.axis(),o=e.run()&&!n.crouch,a=n.crouch?1.5:o?5.2:3,c=Math.sin(t),l=Math.cos(t),d=-s.x*l-s.z*c,u=s.x*c-s.z*l,f=Math.hypot(d,u);if(f>.01){const g=Math.min(a,a*f);n.x+=d/f*g*i,n.z+=u/f*g*i,n.yaw=Math.atan2(d,u),n.speed=g}else n.speed=0;n.running=n.speed>3.5;const p=yr(n.x,n.z,.4,r);n.x=p.x,n.z=p.z}function Eg(n){return{x:n.x,z:n.z,yaw:n.yaw,crouch:n.crouch,attackCd:n.attackCd??-99,whistleCd:n.whistleCd??-99,attackT:n.attackT??-99}}function bg(n,e){n.crouch=e.crouch??!1,n.running=!1,n.attackCd=e.attackCd??-99,n.whistleCd=e.whistleCd??-99,n.attackT=e.attackT??-99}const ks=new Map;function Gi(n){let e=ks.get(n);return e||(e=new i_({color:n}),ks.set(n,e)),e}const Os=new Map;function li(n,e){let t=Os.get(n);return t||(t=e(),Os.set(n,t)),t}const Bs=new Map;function Ca(n){let e=Bs.get(n);return e||(e=new Ha({color:n}),Bs.set(n,e)),e}function wg(){for(const n of Os.values())n.dispose();for(const n of ks.values())n.dispose();for(const n of Bs.values())n.dispose();Os.clear(),ks.clear(),Bs.clear()}function Tg(n){const e=Gi,t=new Ae(new Tn(100,100),e(4020794));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=ze.road,r=new Ae(new Tn(i.maxX-i.minX,i.maxZ-i.minZ),e(3356220));r.rotation.x=-Math.PI/2,r.position.set(0,.02,0),n.add(r);const s=ze.piazza,o=new Ae(new Tn(s.w,s.d),e(9078136));o.rotation.x=-Math.PI/2,o.position.set(s.cx,.03,s.cz),n.add(o);const a=new Ae(new Tn(4,16),e(7301726));a.rotation.x=-Math.PI/2,a.position.set(18,.025,5),n.add(a);const c={bar:11569487,b2:8361648,b3:10256271,b4:9150586,b5:10525311};for(const l of ze.buildings){const d=new _i,u=e(c[l.id]??8947848),f=e(4865845);if(l.interior){const v=l.w/2,m=l.d/2,h=l.door.width/2,w=l.door.at,_=l.z-m,x=l.z+m,C=[[kl(l.x-v,w-h),_,w-h-(l.x-v),.4],[kl(w+h,l.x+v),_,l.x+v-(w+h),.4],[l.x,x,l.w,.4]];for(const[S,M,P,k]of C){const F=new Ae(new gt(P,3.2,k),u);F.position.set(S,3.2/2,M),d.add(F)}for(const S of[l.x-v,l.x+v]){const M=new Ae(new gt(.4,3.2,l.d),u);M.position.set(S,3.2/2,l.z),d.add(M)}const T=new Ae(new gt(l.w+.6,.4,l.d+.6),f);T.position.set(l.x,3.2+.2,l.z),d.add(T);const b=new Ae(new Tn(l.w,l.d),e(7232323));b.rotation.x=-Math.PI/2,b.position.set(l.x,.04,l.z),d.add(b);const R=new Ae(new gt(4,1,1),e(5913892));R.position.set(l.x,.5,l.z+2.5),d.add(R);for(const[S,M]of[[-2.5,-1.5],[0,-2],[2.5,-1]]){const P=new Ae(new Cn(.5,.5,.1,8),e(7816226));P.position.set(l.x+S,.75,l.z+M),d.add(P);const k=new Ae(new Cn(.08,.08,.75,6),e(3355443));k.position.set(l.x+S,.37,l.z+M),d.add(k)}}else{const p=new Ae(new gt(l.w,l.h,l.d),u);p.position.set(l.x,l.h/2,l.z),d.add(p);const g=new Ae(new gt(l.w+.6,.4,l.d+.6),f);g.position.set(l.x,l.h+.2,l.z),d.add(g);const v=e(1910064);for(const h of[l.z-l.d/2-.03,l.z+l.d/2+.03]){const w=new Ae(new gt(Math.max(1,l.w-2),1.1,.06),v);w.position.set(l.x,Math.min(3.4,l.h-1.4),h),d.add(w)}const m=new Ae(new gt(1.2,2.2,.1),e(3812380));m.position.set(l.x,1.1,l.z-l.d/2-.04),d.add(m)}n.add(d)}for(const l of ze.props){const d=new _i;if(l.kind==="lamp"){const u=new Ae(new Cn(.09,.09,4.4,6),e(2238e3));u.position.y=2.2,d.add(u);const f=new Ae(new $s(.28,8,6),Ca(16771496));f.position.y=4.5,d.add(f)}else if(l.kind==="tree"){const u=new Ae(new Cn(.18,.24,1.6,6),e(5914920));u.position.y=.8,d.add(u);const f=new Ae(new Xa(1.4,2.6,7),e(3042100));f.position.y=2.8,d.add(f)}else if(l.kind==="bench"){const u=new Ae(new gt(2.2,.12,.8),e(7031340));u.position.y=.5,d.add(u)}else if(l.kind==="crates"){const u=new Ae(new gt(1.2,1.2,1.2),e(9071162));u.position.y=.6,d.add(u);const f=new Ae(new gt(.9,.9,.9),e(8018992));f.position.set(.8,1.65,.2),f.rotation.y=.4,d.add(f)}else if(l.kind==="yardstack"){const u=new Ae(new gt(2.2,2.4,2.2),e(9071162));u.position.y=1.2,u.name="yardstack",d.add(u);const f=new Ae(new gt(1.4,1,1.4),e(8018992));f.position.y=2.9,f.name="yardstack_top",d.add(f)}d.position.set(l.x,0,l.z),n.add(d)}for(const l of ze.coverWalls??[]){const d=new Ae(new gt(l.w,2.2,l.d),e(10130314));d.position.set(l.x,1.1,l.z),n.add(d)}}function kl(n,e){return(n+e)/2}function Ag(){try{const n=document.createElement("canvas"),e=n.getContext("webgl2")||n.getContext("webgl"),t=e?.getExtension("WEBGL_debug_renderer_info"),i=t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):"";return/swiftshader|llvmpipe|software/i.test(i)}catch{return!1}}function Rg(n){const e=Ag(),t=.7,i=new t_({antialias:!e});i.setPixelRatio(e?1:Math.min(devicePixelRatio,2));const r=()=>{e?i.setSize(Math.round(innerWidth*t),Math.round(innerHeight*t),!1):i.setSize(innerWidth,innerHeight)};r(),n.appendChild(i.domElement);const s=new n_;s.background=new Ge(8889800),s.fog=new Wa(8889800,60,140),s.add(new r_(13624831,3820090,1.1));const o=new a_(16773849,1.6);o.position.set(30,45,20),s.add(o),Tg(s);const a=new $t(60,innerWidth/innerHeight,.1,300),c=()=>{a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),r()};return addEventListener("resize",c),{renderer:i,scene:s,camera:a,soft:e,dispose(){removeEventListener("resize",c),s.traverse(l=>{l.isMesh}),i.dispose(),wg(),i.domElement.remove()}}}function Pa(n,e,t){const i=new _i,r=li("body2",()=>new Cn(.26,.32,.75,8)),s=new Ae(r,Gi(n));s.position.y=1,i.add(s);const o=new Ae(li("head",()=>new $s(.24,10,8)),Gi(15251850));if(o.position.y=1.62,i.add(o),t==="police"){const m=new Ae(li("cap",()=>new Cn(.25,.26,.12,8)),Gi(1714794));m.position.y=1.82,i.add(m)}const a=li("leg",()=>new gt(.16,.62,.16)),c=Gi(3028032),l=new Ae(a,c);l.position.set(-.13,.31,0),i.add(l);const d=new Ae(a,c);d.position.set(.13,.31,0),i.add(d);const u=li("arm",()=>new gt(.12,.58,.12)),f=Gi(n),p=new Ae(u,f);p.position.set(-.36,1.05,0),i.add(p);const g=new Ae(u,f);if(g.position.set(.36,1.05,0),i.add(g),e){const m=new Ae(li("ring",()=>new ja(.55,.05,6,16)),Ca(3129201));m.rotation.x=Math.PI/2,m.position.y=.06,i.add(m)}const v=new Ae(li("mark",()=>new qa(.16)),Ca(16724804));return v.position.y=2.1,v.visible=!1,i.add(v),i.userData.mark=v,i.userData.limbs={legL:l,legR:d,armL:p,armR:g,phase:0},i}function Ol(n,e,t,i){const r=n.userData.limbs;if(!r)return;const s=Math.min(1,e/3);r.phase+=(2+e*2.2)*.05;const o=Math.sin(r.phase)*.55*s;r.legL.rotation.x=o,r.legR.rotation.x=-o,i?(r.armR.rotation.x=-2.2,r.armL.rotation.x=.3):(r.armL.rotation.x=-o*.8,r.armR.rotation.x=o*.8);const a=Math.sin(t*1.8)*.02*(1-s);r.legL.position.y=.31+a,r.legR.position.y=.31-a}function zd(){return{npcs:{},pairs:{},acc:0}}function Cg(n,e,t,i,r,s,o){if(n.acc+=o,n.acc<.25)return;const a=n.acc;n.acc=0;const c=Math.sin(t),l=Math.cos(t);for(const u of i){if(u.state==="dead")continue;const f=u.x-e.x,p=u.z-e.z,g=f*f+p*p;if(g>22*22)continue;const v=Math.sqrt(g)||.001;if(f/v*c+p/v*l<.25&&v>2||Yn(e.x,e.z,u.x,u.z,r))continue;let m=n.npcs[u.id];m||(m=n.npcs[u.id]={time:0,named:!1,last:null,spots:{},seen:0}),m.time+=a,m.seen++;const h=lr(u.x,u.z);m.last={t:s,node:h,x:+u.x.toFixed(1),z:+u.z.toFixed(1)},m.spots[h]=(m.spots[h]??0)+1,m.time>4&&(m.named=!0)}const d=i.filter(u=>{const f=n.npcs[u.id];return f&&u.state!=="dead"&&s-(f.last?.t??-99)<.3});for(let u=0;u<d.length;u++)for(let f=u+1;f<d.length;f++){const p=d[u].id,g=d[f].id,v=p<g?`${p}+${g}`:`${g}+${p}`;n.pairs[v]=(n.pairs[v]??0)+1}}function Fd(n,e){const t=n.npcs[e]??(n.npcs[e]={time:0,named:!0,last:null,spots:{},seen:0});t.named=!0}function Pg(n,e){const t=n.npcs[e];return t?Object.entries(t.spots).filter(([,i])=>i>=8).map(([i])=>i):[]}function Lg(n,e){n.npcs=e.npcs??{},n.pairs=e.pairs??{},n.acc=0}function kd(n,e){for(const t of n.npcs){t.thinkAt=t.thinkAt??0,t.symbolAt=0,t.speed=0,t.path=[],t.pathIdx=0,t.fleeNode=null,t.state==="alerted"&&(t.state="dwell");const i=[];for(const[r,s]of t.beliefs??[]){if(s&&typeof s=="object"&&"kind"in s){i.push([r,s]);continue}const o=(e??[]).find(a=>a.id===r);i.push([r,{kind:o?.type??"disturbance",severity:o?.severity??.5,px:o?.x??t.x,pz:o?.z??t.z,place:o?.place??"sconosciuto",actor:o?.actorId??"sconosciuto",channel:s?.source==="hearsay"?"hearsay":"seen",confidence:s?.confidence??.5,t:s?.t??0,error:s?.error??null,provenance:[]}])}t.beliefs=i}return n.version=2,n}const Ig="quartiere-p0",Jn="saves",tc="slot0";function nc(){return new Promise((n,e)=>{const t=indexedDB.open(Ig,Ns);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(Jn)||t.result.createObjectStore(Jn)},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}function Si(n){return{version:Ns,seed:n.seed,rngState:n.rng.state,t:n.sim.t,pruneAt:n.sim.pruneAt??0,corpseAt:n.sim.corpseAt??0,corpseReported:[...n.sim.corpseReported],player:Eg(n.player),npcs:n.npcs.map(kr),journal:n.journal.serialize(),unseen:n.sim.unseen.map(e=>e.id),pk:n.pk,interactables:n.interactables,caught:n.caught??!1,contract:n.contract?{targetId:n.contract.targetId,limit:n.contract.limit,startedAt:n.contract.startedAt??0}:null,world:{packageTaken:!!n.worldFlags.packageTaken}}}function Dn(n,e){if(!e||typeof e!="object")return null;let t=e;if(t.version===1&&(t=kd(Dg(t),t.journal?.events)),t.version!==Ns)throw new Error(`save v${t.version} non migrabile a v${Ns}`);n.seed=t.seed??n.seed,t.rngState!=null&&(n.rng.state=t.rngState),n.sim.t=t.t??0,n.sim.pruneAt=t.pruneAt??0,n.sim.corpseAt=t.corpseAt??t.t??0,n.sim.corpseReported=new Set(t.corpseReported??[]);const i=t.player??{};n.player.x=i.x??n.player.x,n.player.z=i.z??n.player.z,n.player.yaw=i.yaw??n.player.yaw,bg(n.player,i);const r=new Set(n.npcs.map(s=>s.id));for(const s of t.npcs??[]){const o=n.npcs.find(a=>a.id===s.id);o&&Or(o,s)}if(n.loadWarnings=[...(t.npcs??[]).filter(s=>!r.has(s.id)).map(s=>`npc-orfano:${s.id}`),...n.npcs.filter(s=>!(t.npcs??[]).some(o=>o.id===s.id)).map(s=>`npc-mancante:${s.id}`)],n.journal.restore(t.journal??{seq:0,events:[]}),t.pk&&n.pk&&Lg(n.pk,t.pk),t.interactables&&n.interactables){for(const[s,o]of Object.entries(t.interactables))n.interactables[s]&&(n.interactables[s].state=o.state);n.syncInteractables?.()}n.caught=t.caught??!1,n.contract=t.contract?{targetId:t.contract.targetId,limit:t.contract.limit,startedAt:t.contract.startedAt??0}:n.contract??null,n.caught&&(n.ended="caught"),n.sim.unseen.length=0;for(const s of t.unseen??[]){const o=n.journal.byId(s);o&&n.sim.unseen.push(o)}return n.worldFlags.packageTaken=t.world?.packageTaken??!0,t}function Dg(n){return JSON.parse(JSON.stringify(n))}let Bl=Promise.resolve();function Ng(n){const e=Bl.then(()=>Ug(n));return Bl=e.catch(()=>{}),e}async function Ug(n){const e=Si(n);e.savedAt=Date.now();const t=await nc();return await new Promise((i,r)=>{const s=t.transaction(Jn,"readwrite");s.objectStore(Jn).put(e,tc),s.oncomplete=i,s.onerror=()=>r(s.error)}),t.close(),e}async function Od(){try{const n=await nc(),e=await new Promise((t,i)=>{const s=n.transaction(Jn,"readonly").objectStore(Jn).get(tc);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)});return n.close(),e??null}catch{return null}}async function zg(n,e){const t=e??await Od();return t?Dn(n,t):null}async function Fg(){try{const n=await nc(),e=await new Promise(t=>{const r=n.transaction(Jn,"readonly").objectStore(Jn).get(tc);r.onsuccess=()=>t(r.result),r.onerror=()=>t(null)});return n.close(),!!e}catch{return!1}}const kg=900;function ic(n,e=kg){return{targetId:n,limit:e,startedAt:0}}function vi(n,e){if(!e)return{active:!1,expired:!1,remaining:0,elapsed:0};const t=n.t-(e.startedAt??0),i=Math.max(0,e.limit-t);return{active:!0,expired:i<=0,remaining:i,elapsed:t}}function Og(n,e){return e?n.npcs.find(t=>t.id===e.targetId)??null:null}function Er(n,e){if(!e)return"running";const t=vi(n,e),i=Og(n,e);return i&&i.state==="dead"?t.expired?"expired":"done":t.expired?"expired":"running"}function Bd(n){const e=Math.max(0,Math.ceil(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Bg(n){const e={top:document.getElementById("hud-top"),prompt:document.getElementById("prompt"),panel:document.getElementById("panel"),notebook:document.getElementById("notebook"),debug:document.getElementById("debug"),toast:document.getElementById("toast"),buttons:document.getElementById("hud-buttons")};let t=0,i="\0";const r={show(){e.top.style.display="flex",e.buttons.style.display="block"},toast(a,c=2600){e.toast.textContent=a,e.toast.style.display="block",t=performance.now()+c},tickToast(){t&&performance.now()>t&&(e.toast.style.display="none",t=0)},setPrompt(a){const c=a??"";if(c!==i){if(i=c,!c){e.prompt.style.display="none";return}e.prompt.style.display="block",e.prompt.innerHTML=c}},togglePanel(){e.panel.style.display=e.panel.style.display==="block"?"none":"block",e.panel.style.display==="block"&&r.renderPanel()},toggleNotebook(){e.notebook.style.display=e.notebook.style.display==="block"?"none":"block",e.notebook.style.display==="block"&&r.renderNotebook()},renderNotebook(){const a=n,c=a.pk,l=a.sim.t,d=Object.fromEntries(a.npcs.map(v=>[v.id,v]));let u="<h3>📓 Taccuino — solo ciò che hai osservato</h3>";const f=vi(a.sim,a.contract);u+='<div class="who"><b>Contratto: Marco</b> — maglia rossa, zona bar/piazza. Il resto devi scoprirlo tu.'+(f.active?` ⏱ finestra: <b>${Bd(f.remaining)}</b>${f.expired?" (scaduta)":""}`:"")+"</div>";const p=Object.keys(c.npcs).sort();p.length||(u+='<div class="who">Non hai ancora osservato nessuno. Guarda le persone (devono starti davanti e in vista).</div>');for(const v of p){const m=c.npcs[v],h=d[v];if(!h)continue;const w=m.named?h.name:`sconosciuto (osservato ${m.time.toFixed(0)}s)`,_=h.state==="dead"?" ☠ MORTO":"",x=m.last?`${ml[m.last.node]??m.last.node}, ${(l-m.last.t).toFixed(0)}s fa`:"mai",C=Pg(c,v).map(T=>ml[T]??T).join(", ")||"—";u+=`<div class="who"><b>${w}</b>${_}<br>ultimo avvistamento: ${x}<br>luoghi abituali: ${C}</div>`}const g=Object.entries(c.pairs).filter(([,v])=>v>=20).map(([v])=>{const[m,h]=v.split("+"),w=c.npcs[m]?.named?d[m]?.name??m:"sconosciuto",_=c.npcs[h]?.named?d[h]?.name??h:"sconosciuto";return`${w} ↔ ${_}`});g.length&&(u+=`<h3>Spesso visti insieme</h3><div class="who">${g.join("<br>")}</div>`),e.notebook.innerHTML=u},renderPanel(){const a=n,c=a.sim.t;let l=`<h3>GROUND TRUTH — event journal (${a.journal.events.length})</h3>`;a.journal.events.length||(l+='<div class="ev">nessun evento: il mondo è invariato.</div>');for(const d of a.journal.events)l+=`<div class="ev"><b>${d.id}</b> t=${d.t.toFixed(1)} · ${d.type} sev=${d.severity} · (${d.x.toFixed(1)}, ${d.z.toFixed(1)}) ${d.actorId?"· da "+d.actorId:""} · testimoni veri: [${d.witnesses.join(",")||"—"}]</div>`;l+="<h3>CREDENZE NPC (parziali, con fonte/fiducia/età)</h3>";for(const d of a.npcs){l+=`<div class="bel"><b>${d.name}</b> [${d.state}/${d.level}] mem:${d.memory.length}`,d.beliefs.size||(l+="<br>· crede: nulla di sospetto");for(const[u,f]of d.beliefs){const p=Math.round(an(f,c)*100);l+=`<br>· su ${u} (età ${(c-f.t).toFixed(0)}s): ${w_(f,c)} [eff ${p}%]`}l+="</div>"}e.panel.innerHTML=l},renderDebug(a,c){const l=n.renderer.renderer.info,d=performance.memory?(performance.memory.usedJSHeapSize/1048576).toFixed(0)+"MB":"n/a",u=n.sim.stats;e.debug.textContent=`FPS ${a} · frame ${c.toFixed(1)}ms · sim ${n.sim.simMs.toFixed(2)}ms · ai ${n.sim.aiMs.toFixed(2)}ms
NPC L1/${n.sim.counts.L1} L2/${n.sim.counts.L2} L3/${n.sim.counts.L3}
percep ${u.perceptionChecks} · gossip ${u.gossipOps} · path ${u.pathComputations} · think ${u.thinkRuns}
draw ${l.render.calls} · tri ${l.render.triangles} · heap ${d}
errori: ${n.errors.length}`+(n.errors.length?` · ultimo: ${n.errors[n.errors.length-1]}`:"")},toggleDebug(){e.debug.style.display=e.debug.style.display==="block"?"none":"block"}},s=()=>r.togglePanel(),o=()=>n.save();return document.getElementById("btn-panel").addEventListener("click",s),document.getElementById("btn-save").addEventListener("click",o),r.dispose=()=>{document.getElementById("btn-panel").removeEventListener("click",s),document.getElementById("btn-save").removeEventListener("click",o)},r}function Hg(){const n={ctx:null,master:null,stepAt:0,ensure(){if(n.ctx)return n.ctx.state==="suspended"&&n.ctx.resume(),!0;try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;n.ctx=new e,n.master=n.ctx.createGain(),n.master.gain.value=.25,n.master.connect(n.ctx.destination),n.ambience()}catch{return!1}return!!n.ctx},tone(e,t,i="sine",r=1,s=0){if(!n.ensure())return;const o=n.ctx.currentTime,a=n.ctx.createOscillator(),c=n.ctx.createGain();a.type=i,a.frequency.setValueAtTime(e,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,e+s),o+t),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(c),c.connect(n.master),a.start(o),a.stop(o+t+.02)},noiseBurst(e,t=1,i=400){if(!n.ensure())return;const r=n.ctx.currentTime,s=Math.floor(n.ctx.sampleRate*e),o=n.ctx.createBuffer(1,s,n.ctx.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const c=n.ctx.createBufferSource();c.buffer=o;const l=n.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=i;const d=n.ctx.createGain();d.gain.value=t,c.connect(l),l.connect(d),d.connect(n.master),c.start(r)},step(e){n.noiseBurst(.07,e?.5:.25,500)},whistle(){n.tone(2200,.35,"sine",.7,600)},swing(){n.noiseBurst(.12,.3,1200)},thud(){n.noiseBurst(.25,.9,300),n.tone(90,.2,"sine",.8,-40)},clank(){n.tone(620,.15,"square",.3),n.tone(930,.1,"square",.2)},crash(){n.noiseBurst(.7,1,900),n.tone(70,.5,"sine",.7,-30)},sting(){n.stingT&&clearTimeout(n.stingT),n.tone(440,.4,"sawtooth",.4,220),n.stingT=setTimeout(()=>{n.stingT=0,n.tone(554,.4,"sawtooth",.4,220)},180)},scream(){n.tone(900,.3,"sawtooth",.35,500)},ambience(){const e=n.ctx.sampleRate*2,t=n.ctx.createBuffer(1,e,n.ctx.sampleRate),i=t.getChannelData(0);let r=0;for(let c=0;c<e;c++)r=r*.98+(Math.random()*2-1)*.02,i[c]=r;const s=n.ctx.createBufferSource();s.buffer=t,s.loop=!0;const o=n.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=400;const a=n.ctx.createGain();a.gain.value=.5,s.connect(o),o.connect(a),a.connect(n.master),s.start(),n.ambienceSrc=s},dispose(){try{n.stingT&&(clearTimeout(n.stingT),n.stingT=0)}catch{}try{n.ambienceSrc?.stop()}catch{}n.ambienceSrc=null;try{n.ctx?.close()}catch{}n.ctx=null,n.master=null}};return n}const Gg=1.9,Vg=10,Wg=120;function Xg(n,e,t){const i=n.journal.append(e,{t:n.t,...t});return n.unseen.push(i),i}function Rs(n){const e=Math.min(1,n.awareness??0),t=n.state==="alerted"||n.state==="curious"?.2:0,i=.9-.55*e-t;return Math.max(.05,Math.min(.95,i))}function rr(n,e,t,i){if(!t||t.state==="dead")return{hit:!1,reason:"no-target"};if((i===void 0?n.rng.next():i)<Rs(t))return{hit:!0};const s=Xg(n,"assault",{severity:.85,x:e.x,z:e.z,actorId:"player",victimId:t.id,place:lr(e.x,e.z)}),o=$g(n,t,s),a=o&&t.beliefs.has(s.id);return a&&qg(t,n.t),{hit:!1,ev:s,perceived:o,alarm:a}}function $g(n,e,t){const i=js(e,t.x,t.z,n.colliders,n.rng);let r,s,o,a,c=null,l=null;const d=Math.hypot(e.x-t.x,e.z-t.z);if(i.seen)r="seen",s=i.confidence,o=i.px,a=i.pz,c=i.error;else{const f=Qa(e,t.x,t.z,Vg,n.colliders,n.rng);if(!f.heard)return!1;r="heard",s=f.confidence,o=f.px,a=f.pz,l=f.w}return ht(e.beliefs,t.id,lt({kind:"assault",severity:t.severity,px:o,pz:a,place:t.place,subject:t.victimId??null,actor:r==="seen"?Ea(e,t,d,s):"sconosciuto",channel:r,confidence:s,t:n.t,error:c,w:l,provenance:[]}),e.id)==="ignored"?!1:(jt(e,t.id),!0)}function qg(n,e){const t=n.home??(n.schedule&&n.schedule[0]?n.schedule[0].node:null)??(n.agenda[0]?n.agenda[0].node:null);return t?(n.routineShift={until:+(e+Wg).toFixed(3),node:t},!0):!1}const jg=.05;function Hs(n,e){const t=Ie(n,ct(We(n^40503),e));return{seed:n,rng:t.rng,sim:t.sim,npcs:t.sim.npcs,journal:t.sim.journal,player:{x:t.player.x,z:t.player.z,yaw:Math.PI,crouch:!1,running:!1,speed:0,attackCd:-99,whistleCd:-99,attackT:-99},pk:zd(),interactables:Ed(),caught:!1,worldFlags:{packageTaken:!0},loadWarnings:[]}}const qt=Hs;function hn(n,e,t){for(let i=e;i<t;i++){if(n.player.x=Math.sin(i/50)*20,n.player.z=Math.cos(i/70)*20,i===50&&at(n.sim,"theft",{severity:.7,x:10,z:10,actorId:"player",place:"strada"}),i===100&&(n.player.attackCd=n.sim.t),i===390){const r=n.sim.npcs[3],s=n.sim.npcs[0];r.x=s.x+2,r.z=s.z,r.state="dead",r.speed=0,r.path=[],r.fleeNode=null,r.gotoX=null,r.gotoZ=null,at(n.sim,"kill",{severity:1,x:r.x,z:r.z,actorId:"player",victimId:r.id,place:"piazza"})}Ht(n.sim,n.player,jg)}}function En(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function Yg(){const n=qt(4242,12);hn(n,0,400);const e=JSON.parse(JSON.stringify(Si(n)));hn(n,400,600);const t=wt(n.sim),i=n.journal.events.length,r=qt(9999,12);Dn(r,e),hn(r,400,600);const s=wt(r.sim),o=i>e.journal.events.length;return{pass:t===s&&o,info:`continueA=${t} continueB=${s} corpseDiscoveredDuringContinue=${o} corpseAt=${e.corpseAt}`}}function Zg(){const n=qt(3131,8);hn(n,0,120);const e=Si(n),t=JSON.parse(JSON.stringify(e)),i=JSON.stringify(e)===JSON.stringify(t),r=qt(1,8);Dn(r,t),hn(n,120,180),hn(r,120,180);const s=wt(n.sim)===wt(r.sim);return{pass:i&&s,info:`wireIdentical=${i} continueMatch=${s}`}}function Kg(){const n=We(777),e=We(777),t=[n.next(),n.next(),n.next()],i=[e.next(),e.next(),e.next()],r=n.state,s=[n.next(),n.next()];e.state=r;const o=[e.next(),e.next()],c=We(778).next()!==t[0];return{pass:JSON.stringify(t)===JSON.stringify(i)&&JSON.stringify(s)===JSON.stringify(o)&&c,info:`sameSeed=${JSON.stringify(t)===JSON.stringify(i)} stateRestore=${JSON.stringify(s)===JSON.stringify(o)} diffSeedDiff=${c}`}}function Jg(){const n=qt(5151,4);hn(n,0,101);const e=Si(n),t=qt(2,4);return Dn(t,JSON.parse(JSON.stringify(e))),{pass:t.player.attackCd===n.player.attackCd&&t.player.x===n.player.x&&t.player.z===n.player.z&&t.player.crouch===n.player.crouch,info:`attackCd ${e.player.attackCd} -> ${t.player.attackCd} pos=(${t.player.x.toFixed(2)},${t.player.z.toFixed(2)})`}}function Qg(){const n={version:2,seed:5,rngState:123,t:9,npcs:[],journal:{seq:0,events:[]}},e=qt(7,4);Dn(e,JSON.parse(JSON.stringify(n)));const t=e.sim.t===9&&e.sim.corpseAt===9&&e.worldFlags.packageTaken===!0&&e.caught===!1&&Array.isArray(e.loadWarnings)&&e.loadWarnings.length===e.npcs.length,i={version:1,seed:7,rngState:42,t:12.5,player:{x:1,z:2,yaw:0},npcs:[{id:"anna",x:0,z:0,yaw:0,state:"alerted",agendaIdx:0,dwellLeft:1,relations:{},memory:["ev1"],beliefs:[["ev1",{fact:"fatto",source:"seen",confidence:.8,t:10,error:null}]],alertedBy:"ev1",alertT:11,gossipAt:0}],journal:{seq:1,events:[{id:"ev1",t:10,type:"theft",severity:.6,x:37,z:21.5,actorId:"player",place:"piazza",witnesses:["anna"]}]},world:{packageTaken:!0}},r=qt(7,4);r.npcs[0].id="anna",Dn(r,JSON.parse(JSON.stringify(i)));const s=r.npcs[0],o=r.sim.t===12.5&&s.state==="dwell"&&s.beliefs.get("ev1")?.kind==="theft"&&s.beliefs.get("ev1")?.channel==="seen";let a=null;try{Dn(qt(7,4),{version:99})}catch(c){a=String(c.message)}return{pass:t&&o&&!!a,info:`v2default=${t} v1migrated=${o} badVersionRejected=${a}`}}function ex(){const n=qt(6161,10);hn(n,0,60);const e=n.npcs[0];e.state="alerted",e.fleeNode="road_e",e.alertedBy="ev1",e.alertT=n.sim.t,e.dwellLeft=7.5;let t=null,i=!0;for(let r=0;r<20;r++){const s=JSON.parse(JSON.stringify(Si(n))),o=qt(1e3+r,10);Dn(o,s),i=i&&o.npcs[0].state==="alerted"&&o.npcs[0].fleeNode==="road_e"&&o.npcs[0].dwellLeft===7.5&&wt(o.sim)===wt(n.sim),n.npcs[0].state="alerted",t===null&&(t=wt(o.sim))}return hn(n,60,120),{pass:i&&t!==null,info:`20 cicli alert-stable=${i}`}}function tx(){const n=Us();for(let o=0;o<Wi+500;o++)n.append("noise",{t:o*.05,severity:.2,x:0,z:0,place:"piazza"});const e=n.events.length===Wi,t=new Set(n.events.map(o=>o.id)).size===n.events.length,i={seq:99999,events:n.events.map(o=>({...o}))};i.events.push(...Array.from({length:10},(o,a)=>({id:"x"+a})));const r=Us();r.restore(i);const s=r.events.length===Wi;return{pass:e&&t&&s&&r.serialize().seq===99999,info:`len=${n.events.length}/${Wi} uniqueIds=${t} restoreBounded=${s}`}}function nx(){const n={memory:[],beliefs:new Map};for(let r=0;r<en*3;r++)jt(n,"ev"+r);const e=n.memory.length===en&&n.memory[0]==="ev"+(en*3-en)&&n.memory[en-1]==="ev"+(en*3-1),t=lt({kind:"noise",channel:"heard",confidence:.6,t:0,provenance:[]}),i=new Map([["old",t]]);return Ka(i,1e6),{pass:e&&i.size===0,info:`memory=${n.memory.length}/${en} pruned=${i.size===0}`}}function ix(){const n=qt(8181,8);hn(n,0,400);const e=Si(n),i=["version","seed","rngState","t","pruneAt","corpseAt","corpseReported","player","npcs","journal","unseen","pk","interactables","caught","world"].filter(l=>!(l in e)),r=e.npcs[0],o=["agenda","relType","trust","relations","memory","beliefs","police","death","thinkAt","gossipAt","dwellLeft","path"].filter(l=>!(l in r)),c=["attackCd","whistleCd"].filter(l=>!(l in e.player));return{pass:i.length===0&&o.length===0&&c.length===0,info:`missingTop=[${i}] missingNpc=[${o}] missingPlayer=[${c}] corpseAt=${e.corpseAt}`}}function rx(){const n=[En("save_hard_reload_continue",Yg),En("json_pure_roundtrip",Zg),En("rng_serialization",Kg),En("player_timers_persist",Jg),En("defaults_old_saves",Qg),En("alert_and_repeat_saveload",ex),En("journal_bounded",tx),En("memory_bounded",nx),En("save_field_coverage",ix)];return{suite:"p0-infra",passed:n.filter(t=>t.pass).length,total:n.length,tests:n}}const sx=Object.freeze(Object.defineProperty({__proto__:null,makeFakeGame:Hs,runInfraTests:rx},Symbol.toStringTag,{value:"Module"}));function ot(n,e){try{const t=e();return{name:n,pass:!!t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function Ys(n,e,t={}){const i=Ie(9101,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:n,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},...t.npcs??[]]),r=i.sim.npcs[0],s=i.sim.npcs[1];return r.state="dead",r.x=0,r.z=0,s.state="dwell",s.dwellLeft=1e9,s.yaw=e,i.player.x=45,i.player.z=45,{w:i,dead:r,finder:s}}const Hd=Math.atan2(3,0),rc=Math.atan2(-3,0);function Gs(n){return[...n.beliefs.entries()].map(([e,t])=>[e,t.kind])}function mn(n){return n.sim.journal.events.filter(e=>e.type==="found_corpse")}function ox(){const{w:n,finder:e}=Ys(3,Hd);ye(n.sim,n.player,60);const i=mn(n).length===0&&n.sim.corpseReported.size===0&&e.beliefs.size===0&&n.sim.stats.corpseDiscoveries===0;e.yaw=rc,ye(n.sim,n.player,60);const r=mn(n),s=r[0],o=r.length===1&&n.sim.corpseReported.has("dead")&&n.sim.stats.corpseDiscoveries===1,a=!!s&&e.beliefs.has(s.id)&&s.witnesses.includes("finder");return{pass:i&&o&&a,info:`blocked=${i} events=${r.length} reported=${n.sim.corpseReported.size} finderBeliefs=${JSON.stringify(Gs(e))} witnesses=${s?JSON.stringify(s.witnesses):"—"}`}}function ax(){const{w:n,finder:e}=Ys(1.2,Hd);ye(n.sim,n.player,60);const t=mn(n)[0];return{pass:!!t&&e.beliefs.has(t.id)&&t.witnesses.includes("finder")&&n.sim.stats.corpseDiscoveries===1,info:`events=${mn(n).length} finderBeliefs=${JSON.stringify(Gs(e))} witnesses=${t?JSON.stringify(t.witnesses):"—"}`}}function cx(){const{w:n}=Ys(40,rc);ye(n.sim,n.player,600);const e=mn(n);return{pass:e.length===0&&n.sim.corpseReported.size===0,info:`events=${e.length} reported=${n.sim.corpseReported.size}`}}function lx(){const{w:n,finder:e}=Ys(3,rc,{npcs:[{id:"second",name:"Second",color:3,x:3,z:3,relations:{},agenda:[{node:"road_c",dwell:5}]}]}),t=n.sim.npcs[2];t.state="dwell",t.dwellLeft=1e9,t.yaw=Math.atan2(-3,-3),ye(n.sim,n.player,90);const i=mn(n);return{pass:i.length===1&&e.beliefs.has(i[0].id)&&t.beliefs.has(i[0].id),info:`events=${i.length} f=${JSON.stringify(Gs(e))} s=${JSON.stringify(Gs(t))}`}}function Qn(n,e,t,i,r=!0,s=!1){const o=Ie(9301,[{id:"w",name:"Watcher",color:2,x:n,z:e,relations:{},agenda:[{node:"road_c",dwell:5}]}]),a=o.sim.npcs[0];a.state="dwell",a.dwellLeft=1e9;const c=Math.atan2(t-n,i-e);return a.yaw=r?c:c+Math.PI,o.player.x=t,o.player.z=i,o.player.crouch=s,{w:o,n:a}}function $n(n){return[...n.beliefs.values()].filter(e=>e.kind==="suspicion")}function dx(){const{w:n,n:e}=Qn(0,0,0,6,!1);ye(n.sim,n.player,80);const t=e.awareness,i=$n(e);return{pass:t===0&&i.length===0,info:`awareness=${t} susp=${i.length}`}}function ux(){const n=Qn(0,0,0,6,!0,!1),e=Qn(0,0,0,6,!0,!0);ye(n.w.sim,n.w.player,40),ye(e.w.sim,e.w.player,40);const t=n.n.awareness,i=e.n.awareness;return{pass:$n(n.n).length===1&&$n(e.n).length===0&&i>0&&i<t,info:`upA=${t?.toFixed(2)} crouchA=${i?.toFixed(2)} upSusp=${$n(n.n).length} crouchSusp=${$n(e.n).length}`}}function fx(){const{w:n,n:e}=Qn(29.5,17,29.5,11,!0);ye(n.sim,n.player,80);const t=$n(e);return{pass:t.length===0&&(e.awareness??0)===0,info:`awareness=${e.awareness} susp=${t.length}`}}function hx(){const n=o=>{for(let a=0;a<300&&$n(o.n).length===0;a++)ye(o.w.sim,o.w.player,1);return $n(o.n)[0]},e=Qn(0,0,0,6,!0),t=Qn(0,0,0,12,!0),i=n(e),r=n(t);return{pass:i?.actor==="uomo in verde"&&r?.actor==="sconosciuto",info:`near=${i?.actor??"—"} far=${r?.actor??"—"}`}}function px(){const n=Qn(0,0,0,6,!0),e=Qn(0,0,0,6,!0);ye(n.w.sim,n.w.player,150),ye(e.w.sim,e.w.player,150);const t=JSON.stringify([...n.n.beliefs.entries()].sort()),i=JSON.stringify([...e.n.beliefs.entries()].sort());return{pass:t===i&&n.n.awareness===e.n.awareness,info:`equal=${t===i&&n.n.awareness===e.n.awareness} a=${n.n.awareness?.toFixed(3)}`}}function zt(n){return n.state="dwell",n.dwellLeft=1e9,n}function Zs(n,e){const t=Ie(n,[{id:"vic",name:"Victim",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}],home:"road_w"},{id:"far",name:"Far",color:2,x:0,z:42,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[i,r]=t.sim.npcs;return zt(i),i.yaw=e,zt(r),t.player.x=0,t.player.z=1.5,{w:t,vic:i,far:r}}function mx(){const{w:n,vic:e,far:t}=Zs(9401,Math.PI),i=rr(n.sim,n.player,e,.99),r=n.sim.journal.events.filter(l=>l.type==="assault"),s=[...e.beliefs.values()].find(l=>l.kind==="assault"),o=e.state!=="dead",a=t.beliefs.size===0&&!t.memory.includes(i.ev?.id);ye(n.sim,n.player,40);const c=e.state==="alerted"||e.alertedBy===(i.ev&&i.ev.id);return{pass:!i.hit&&i.perceived&&r.length===1&&!!s&&s.channel==="heard"&&s.actor==="sconosciuto"&&o&&a&&c&&!!e.routineShift,info:`hit=${i.hit} perceived=${i.perceived} ch=${s?.channel} actor=${s?.actor} assaults=${r.length} alive=${o} noLeak=${a} state=${e.state} shift=${!!e.routineShift} farBeliefs=${t.beliefs.size}`}}function _x(){const{w:n,vic:e}=Zs(9402,0),t=rr(n.sim,n.player,e,.99),i=[...e.beliefs.values()].find(r=>r.kind==="assault");return{pass:!t.hit&&!!i&&i.channel==="seen"&&i.actor==="uomo in verde",info:`ch=${i?.channel} actor=${i?.actor}`}}function gx(){const{w:n,vic:e}=Zs(9403,0),t=Rs({awareness:0,state:"dwell"}),i=Rs({awareness:1,state:"dwell"}),r=Rs({awareness:1,state:"alerted"}),s=rr(n.sim,n.player,e,0),o=n.sim.journal.events.filter(l=>l.type==="assault").length,a=rr(n.sim,n.player,e,.999),c=n.sim.journal.events.filter(l=>l.type==="assault").length;return{pass:i<t&&r<=i&&s.hit===!0&&o===0&&a.hit===!1&&c===1&&e.state!=="dead",info:`calm=${t.toFixed(2)} ready=${i.toFixed(2)} alerted=${r.toFixed(2)} hit=${s.hit}/${o} miss=${a.hit}/${c} alive=${e.state}`}}function xx(){const{w:n,vic:e}=Zs(9404,Math.PI);rr(n.sim,n.player,e,.99);const t=e.routineShift;ye(n.sim,n.player,900);const i=e.agendaBlock===t.node&&e.agenda[0]?.node===t.node;return{pass:!!t&&t.node==="road_w"&&e.routineShift!=null&&i,info:`shift=${JSON.stringify(e.routineShift)} agendaBlock=${e.agendaBlock} agenda0=${e.agenda[0]?.node} state=${e.state}`}}function vx(){const n=Ie(9801,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:8,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[e,t]=n.sim.npcs;e.state="dead",e.death={evId:null,t:0,px:0,pz:0,kind:"kill",method:"melee"},zt(t),t.yaw=Math.atan2(-8,0),n.player.x=45,n.player.z=45;const i=Ra(n.sim,8,0,10),r=Fs(n.sim,e),s=Fs(n.sim,e),o=Ra(n.sim,8,0,10);ye(n.sim,n.player,120);const a=mn(n).length===0&&!n.sim.corpseReported.has("dead"),c=!Pr(e,8,0,15);t.x=1,ye(n.sim,n.player,120);const l=mn(n)[0],d=l?t.beliefs.get(l.id):null;return{pass:i===e&&r&&!s&&o===null&&a&&c&&!!l&&l.moved===!0&&!!d&&d.moved===!0,info:`before=${i?.id} conceal=${r}/${!s} after=${o} noDiscovery=${a} blocked=${c} ev=${!!l} moved=${l?.moved} bMoved=${d?.moved}`}}function Mx(){const n=Ie(9802,[{id:"dead",name:"Dead",color:1,x:3,z:3,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:3,z:9,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[e,t]=n.sim.npcs;e.state="dead",e.death={evId:null,t:0,px:3,pz:3,kind:"kill",method:"trap"},Fs(n.sim,e);const i=kr(e),r=dr({id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},We(5));Or(r,i);const s=r.hidden===!0&&r.death?.hidden===!0,o=!Pr(r,8,0,15)&&Pr(r,1,0,15);zt(t),t.yaw=Math.atan2(0,-6),t.x=3,t.z=9,n.player.x=45,n.player.z=45,ye(n.sim,n.player,120);const a=mn(n).length===0;t.z=3.6,ye(n.sim,n.player,120);const c=mn(n).length===1;return{pass:s&&o&&a&&c,info:`hidden=${s} blocked=${o} none=${a} found=${c} concealed=${n.sim.stats.concealed}`}}function Gd(n){const e=Ie(n,[{id:"wit",name:"Witness",color:1,x:0,z:6,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"cop",name:"Cop",color:2,role:"police",x:12,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[t,i]=e.sim.npcs;return zt(t),t.yaw=Math.atan2(0,-6),zt(i),i.yaw=Math.PI/2,e.player.x=45,e.player.z=45,{w:e,wit:t,cop:i}}function yx(){const{w:n,wit:e,cop:t}=Gd(9901);at(n.sim,"accident",{severity:.35,x:0,z:0,actorId:null,victimId:"ghost",place:"road_c"}),ye(n.sim,n.player,120);const i=e.beliefs.get("ev1"),r=[...e.beliefs.values(),...t.beliefs.values()].some(s=>s.kind==="kill");return{pass:!!i&&i.kind==="accident"&&!r&&t.police.state==="UNAWARE",info:`witKind=${i?.kind} sev=${i?.severity} murderBeliefs=${r} police=${t.police.state}`}}function Sx(){const{w:n,wit:e,cop:t}=Gd(9902);at(n.sim,"accident",{severity:.35,x:0,z:0,actorId:null,victimId:"ghost",place:"road_c"}),ye(n.sim,n.player,120);const i=e.beliefs.get("ev1");t.yaw=Math.atan2(-12,0),at(n.sim,"sabotage",{severity:.5,x:0,z:0,actorId:null,place:"road_c"}),ye(n.sim,n.player,180);const r=e.beliefs.get("ev1"),s=[...t.beliefs.values()].find(o=>o.kind==="kill"||o.kind==="sabotage");return{pass:i?.kind==="accident"&&!!r&&r.kind==="kill"&&r.channel==="inferred"&&r.confidence<=.7&&!!s&&t.police.state!=="UNAWARE"&&t.police.state!=="SUSPICIOUS",info:`before=${i?.kind} after=${r?.kind}/${r?.channel} conf=${r?.confidence?.toFixed(2)} copBelief=${s?.kind} police=${t.police.state}`}}function Ex(){const n=Ie(9601,[{id:"o",name:"Observer",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=zt(n.sim.npcs[0]);e.yaw=0,n.player.x=0,n.player.z=12,at(n.sim,"theft",{severity:.6,x:0,z:12,actorId:"player",place:"road_c"}),e.alertedBy="ev1",ye(n.sim,n.player,15);const t=e.beliefs.get("ev1"),i=!!t&&t.actor==="sconosciuto";e.x=0,e.z=6,ye(n.sim,n.player,12);const r=e.beliefs.get("ev1");return{pass:i&&r.actor==="uomo in verde",info:`far=${t?.actor} near=${r?.actor} dist=6`}}function bx(){const n=Ie(9602,[{id:"o",name:"Observer",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=zt(n.sim.npcs[0]);e.yaw=0,n.player.x=0,n.player.z=12,at(n.sim,"theft",{severity:.6,x:0,z:12,actorId:"player",place:"road_c"}),e.alertedBy="ev1",ye(n.sim,n.player,300);const t=e.beliefs.get("ev1");return{pass:!!t&&t.actor==="sconosciuto",info:`actor=${t?.actor} kind=${t?.kind}`}}function wx(){const n=d=>{const u=Ie(d,[{id:"near",name:"Near",color:1,x:5,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"distant",name:"Distant",color:2,x:11,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]);return zt(u.sim.npcs[0]),zt(u.sim.npcs[1]),u.player.x=0,u.player.z=0,u},e=n(9701);e.player.running=!0,ye(e.sim,e.player,60);const t=[...e.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise"),i=[...e.sim.npcs[1].beliefs.values()].filter(d=>d.kind==="noise"),r=t.every(d=>d.channel==="heard"&&d.actor==="sconosciuto"),s=e.sim.unseen.every(d=>d.type!=="noise"),o=n(9702);o.player.running=!0,o.player.crouch=!0,ye(o.sim,o.player,60);const a=[...o.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise"),c=n(9703);ye(c.sim,c.player,60);const l=[...c.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise");return{pass:t.length>=1&&i.length===0&&r&&s&&a.length===0&&l.length===0,info:`near=${t.length} far=${i.length} heardOnly=${r} noVisual=${s} crouch=${a.length} still=${l.length}`}}function Tx(){const n=Ie(9704,[{id:"a",name:"A",color:1,x:5,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"b",name:"B",color:2,x:30,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]);zt(n.sim.npcs[0]),zt(n.sim.npcs[1]);const e=ec(n.sim,0,0,10,.3),t=[...n.sim.npcs[0].beliefs.values()].filter(o=>o.kind==="noise"),i=[...n.sim.npcs[1].beliefs.values()].filter(o=>o.kind==="noise"),r=n.sim.journal.events.filter(o=>o.type==="noise"),s=n.sim.unseen.every(o=>o.type!=="noise");return{pass:e===1&&t.length===1&&t[0].channel==="heard"&&t[0].actor==="sconosciuto"&&i.length===0&&r.length===1&&s,info:`heard=${e} a=${t.length}/${t[0]?.channel} b=${i.length} journal=${r.length} noVisual=${s}`}}function Ax(){const n=Ie(9111,[{id:"marco",name:"Marco",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=n.sim.npcs[0],t=ic("marco",100),i=vi(n.sim,t),r=Er(n.sim,t);e.state="dead";const s=Er(n.sim,t);n.sim.t=200,e.state="dwell";const o=vi(n.sim,t),a=Er(n.sim,t);e.state="dead";const c=Er(n.sim,t);return{pass:i.active&&!i.expired&&i.remaining===100&&r==="running"&&s==="done"&&o.expired&&o.remaining===0&&a==="expired"&&c==="expired"&&vi(n.sim,null).active===!1,info:`start=${i.remaining} run=${r} done=${s} expired=${a} late=${c}`}}function Vd(n,e){const t=Ie(n,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"patsy",name:"Patsy",color:2,x:e?2.2:0,z:e?0:-4,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"cop",name:"Cop",color:3,role:"police",x:6,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[i,r,s]=t.sim.npcs;return i.state="dead",i.death={evId:null,t:0,px:0,pz:0,kind:"kill",method:"melee"},zt(r),r.yaw=e?Math.atan2(1.5,0):Math.atan2(0,-1),zt(s),s.yaw=Math.atan2(-6,0),t.player.x=44,t.player.z=30,t.sim.hooks.onArrest=(o,a)=>{t.arrests=(t.arrests??[]).concat(`${o.id}>${a.id}`)},t.sim.hooks.onCaught=()=>{t.caughtHook=!0},at(t.sim,"found_corpse",{severity:.55,x:0,z:0,actorId:null,victimId:"dead",place:"road_c"}),{w:t,dead:i,patsy:r,cop:s}}function Rx(){const{w:n,patsy:e}=Vd(9211,!0);return ye(n.sim,n.player,900),{pass:(n.arrests??[]).length===1&&n.arrests[0]==="cop>patsy"&&e.state==="arrested"&&!n.caughtHook,info:`arrests=${JSON.stringify(n.arrests??[])} patsy=${e.state} caught=${!!n.caughtHook}`}}function Cx(){const{w:n,patsy:e}=Vd(9212,!1);return ye(n.sim,n.player,900),{pass:(n.arrests??[]).length===0&&e.state==="dwell",info:`arrests=${JSON.stringify(n.arrests??[])} patsy=${e.state}`}}function Px(){const n=Hs(7777,6);n.contract=ic("marco",480),n.sim.t=120;const e=n.npcs[0];e.hidden=!0,e.death={evId:"ev9",t:30,px:e.x,pz:e.z,kind:"kill",method:"trap"},e.routineShift={until:240,node:"road_w"};const t=n.npcs.find(l=>l.role==="police"),i=Si(n),r=JSON.parse(JSON.stringify(i)),s=Hs(1,6);Dn(s,r);const o=s.npcs.find(l=>l.id===e.id),a=s.contract,c=vi(s.sim,s.contract);return{pass:o.hidden===!0&&o.death?.kind==="kill"&&o.routineShift?.node==="road_w"&&o.routineShift?.until===240&&a?.limit===480&&a?.targetId==="marco"&&c.remaining===360&&!c.expired&&(!t||s.npcs.find(l=>l.id===t.id).police!=null),info:`hidden=${o.hidden} shift=${JSON.stringify(o.routineShift)} contract=${JSON.stringify(a)} rem=${c.remaining}`}}function Lx(){return[ot("assassin_corpse_needs_perception",ox),ot("assassin_corpse_stumble_discoverer_knows",ax),ot("assassin_corpse_silent_without_knower",cx),ot("assassin_corpse_single_truth",lx),ot("assassin_awareness_requires_sight",dx),ot("assassin_awareness_crouch_slower",ux),ot("assassin_awareness_cover_blocks",fx),ot("assassin_awareness_recognition_range",hx),ot("assassin_awareness_deterministic",px),ot("assassin_melee_miss_sensors",mx),ot("assassin_melee_miss_seen",_x),ot("assassin_melee_hit_chance",gx),ot("assassin_melee_routine_shift",xx),ot("assassin_conceal_discovery",vx),ot("assassin_conceal_persist",Mx),ot("accident_initial_reading",yx),ot("accident_rivalutazione",Sx),ot("identity_partial_observation",Ex),ot("identity_stays_unknown",bx),ot("footsteps_heard_range",wx),ot("noise_no_identity",Tx),ot("contract_time_window",Ax),ot("arrest_patsy_on_scene",Rx),ot("arrest_nobody_no_suspicion",Cx),ot("save_restores_new_state",Px)]}const sc=.05;function Bi(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function Ix(){const n=Rd();return{pass:n.nodeViolations.length===0&&n.edgeViolations.length===0,info:`nodes=[${n.nodeViolations}] edges=[${n.edgeViolations}]`}}function Dx(){const{sim:n,player:e}=Ie(4401,[{id:"walker",name:"W",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}]),t=n.npcs[0],i=1200,r=[];for(const[a,c]of ze.edges)r.push([a,c]),r.push([c,a]);let s=0,o="";for(const[a,c]of r){const l=ze.nodes[a];t.x=l.x,t.z=l.z,t.state="dwell",t.dwellLeft=0,t.agendaIdx=0,t.agenda=[{node:c,dwell:999}],t.path=[],t.pathIdx=0,t.fleeNode=null,t.gotoX=null,t.gotoZ=null;let d=0;for(;d<i&&(Ht(n,e,sc),!(t.state==="dwell"&&t.agendaIdx>=1));d++);if(d>=i){const f=Math.hypot(ze.nodes[c].x-t.x,ze.nodes[c].z-t.z);return{pass:!1,info:`stallo ${a}->${c} dopo ${i} tick: distNodo=${f.toFixed(2)} (r=${Ln(c)}) state=${t.state} pathIdx=${t.pathIdx}/${t.path.length}`}}const u=Math.hypot(ze.nodes[c].x-t.x,ze.nodes[c].z-t.z);if(u>Ln(c)+.25)return{pass:!1,info:`arrivo lontano ${a}->${c}: dist=${u.toFixed(2)} > r=${Ln(c)}`};d>s&&(s=d,o=`${a}->${c}`)}return{pass:!0,info:`${r.length} cammini ok, max ${s} tick su ${o}`}}function Nx(){const{sim:n,player:e}=Ie(4402,[{id:"p1",name:"P1",color:1,x:18,z:-2,relations:{},agenda:[{node:"vic_n",dwell:999}]},{id:"p2",name:"P2",color:2,x:-32,z:8,relations:{},agenda:[{node:"svc_in",dwell:999}]}]),[t,i]=n.npcs;t.dwellLeft=0,i.dwellLeft=0;let r=!1,s=!1,o=0;for(;o<1200&&(Ht(n,e,sc),!r&&t.state==="dwell"&&t.agendaIdx>=1&&(r=!0),!s&&i.state==="dwell"&&i.agendaIdx>=1&&(s=!0),!(r&&s));o++);const a=Math.hypot(ze.nodes.vic_n.x-t.x,ze.nodes.vic_n.z-t.z),c=Math.hypot(ze.nodes.svc_in.x-i.x,ze.nodes.svc_in.z-i.z),l=t.state==="walk"&&t.pathIdx<t.path.length,d=i.state==="walk"&&i.pathIdx<i.path.length;return{pass:r&&s&&!l&&!d&&a<=Ln("vic_n")+.25&&c<=Ln("svc_in")+.25,info:`vic_n arrived=${r} d=${a.toFixed(2)} state=${t.state} | svc_in arrived=${s} d=${c.toFixed(2)} state=${i.state} | ticks=${o}`}}function Ux(){const n=(o,a,c)=>{const l=Nd(0,0);return Ud(l,{axis:()=>({x:a,z:c}),run:()=>!1},o,.2,[]),l},e=n(0,1,0),t=n(Math.PI/2,1,0),i=n(0,0,-1),r=n(Math.PI/2,0,-1);return{pass:e.x<-.1&&Math.abs(e.z)<1e-9&&t.z>.1&&Math.abs(t.x)<1e-9&&i.z>.1&&Math.abs(i.x)<1e-9&&r.x>.1&&Math.abs(r.z)<1e-9,info:`D@0=(${e.x.toFixed(2)},${e.z.toFixed(2)}) D@90=(${t.x.toFixed(2)},${t.z.toFixed(2)}) W@0=(${i.x.toFixed(2)},${i.z.toFixed(2)}) W@90=(${r.x.toFixed(2)},${r.z.toFixed(2)})`}}function zx(){const{sim:n,player:e}=Ie(4405,[{id:"cur",name:"Cur",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}]),t=n.npcs[0];t.state="curious",t.gotoX=12,t.gotoZ=20;const i=ya(t.gotoX,t.gotoZ,"b2");let r=!1,s=!1,o=0;for(;o<600;o++)if(Ht(n,e,sc),t.gotoX!=null&&!ya(t.gotoX,t.gotoZ,"b2")&&(r=!0),t.state==="dwell"){s=!0;break}return{pass:i&&r&&s,info:`startIn=${i} sanitized=${r} arrived=${s} ticks=${o} state=${t.state}`}}function Fx(){const n=[{id:"s1",name:"S1",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]},{id:"s2",name:"S2",color:2,x:.5,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}],e=()=>Ie(4406,n),t=e(),i=e();for(const l of[t,i])for(const d of l.sim.npcs)d.state="dwell",d.dwellLeft=1e9;ye(t.sim,t.player,100),ye(i.sim,i.player,100);const[r,s]=t.sim.npcs,o=Math.hypot(r.x-s.x,r.z-s.z),a=wt(t.sim),c=wt(i.sim);return{pass:o>=.69&&a===c,info:`dist 0.500 -> ${o.toFixed(3)}, hash ${a===c?"uguale":`diverso ${a}!=${c}`}`}}function kx(){return[Bi("nav_no_collider_conflicts",Ix),Bi("nav_arrival_reachable",Dx),Bi("nav_pole_reproduction",Nx),Bi("movement_camera_sign",Ux),Bi("goto_sanitized",zx),Bi("separation_deterministic",Fx)]}const ei=.05,Hl=Object.keys(ze.nodes);function Ox(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16)}function Bx(n){return{id:n.id,x:+n.x.toFixed(3),z:+n.z.toFixed(3),yaw:+n.yaw.toFixed(3),state:n.state,agendaIdx:n.agendaIdx,dwellLeft:+n.dwellLeft.toFixed(3),agenda:n.agenda,agendaBlock:n.agendaBlock??null,path:n.path,pathIdx:n.pathIdx,fleeNode:n.fleeNode,relations:n.relations,relType:n.relType??{},trust:n.trust,mournT:n.mournT??0,gotoX:n.gotoX,gotoZ:n.gotoZ,memory:n.memory,memTier:n.memTier??{},memAt:n.memAt??{},beliefs:[...n.beliefs.entries()].sort((e,t)=>e[0]<t[0]?-1:1),level:n.level,thinkAt:+n.thinkAt.toFixed(3),alertedBy:n.alertedBy,talkT:n.talkT??0,gaze:n.gaze??{}}}function wt(n){const e={t:+n.t.toFixed(3),rng:n.rng.state,npcs:n.npcs.map(Bx),journal:n.journal.events,unseen:n.unseen.map(t=>t.id)};return Ox(JSON.stringify(e))}function ct(n,e){const t=[];for(let i=0;i<e;i++){const r=[],s=3+Math.floor(n.next()*3);for(let c=0;c<s;c++)r.push({node:Hl[Math.floor(n.next()*Hl.length)],dwell:2+Math.floor(n.next()*6)});const o=ze.nodes[r[0].node],a={};t.push({id:`syn${i}`,name:`Syn ${i}`,color:8947848,x:o.x+n.next()*2-1,z:o.z+n.next()*2-1,agenda:r,relations:a})}for(let i=0;i<e;i++)for(let r=i+1;r<e;r++)if(n.next()<.2){const s=+(.2+n.next()*.6).toFixed(2);t[i].relations[t[r].id]=s,t[r].relations[t[i].id]=s}return t}function Ie(n,e){const t=We(n),i=Us(),r=cr(),s=Fr(),o=e.map(c=>dr(c,t));return{sim:Dd(o,i,r,s,t,{}),rng:t,player:{x:0,z:0}}}function ye(n,e,t){for(let i=0;i<t;i++)Ht(n,e,ei)}function ut(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function Hx(){const{sim:n,player:e}=Ie(1001,ct(We(7),2)),[t,i]=n.npcs;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=999,i.x=-40,i.z=0,i.yaw=-Math.PI/2,i.state="dwell",i.dwellLeft=999,e.x=37,e.z=21.5,at(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),ye(n,e,60);const r=!nn.toString().includes("journal"),s=t.beliefs.has("ev1")&&t.beliefs.get("ev1").channel==="seen",o=!i.beliefs.has("ev1")&&i.memory.length===0,a=n.journal.byId("ev1").witnesses;return{pass:r&&s&&o&&a.includes(t.id)&&!a.includes(i.id),info:`staticClean=${r} witnessSeen=${s} farIgnorant=${o} witnesses=[${a}]`}}function Gx(){const{sim:n,player:e}=Ie(2002,ct(We(8),3)),[t,i,r]=n.npcs;t.x=35,t.z=21,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=999,i.x=-40,i.z=0,i.state="dwell",i.dwellLeft=999,r.x=-45,r.z=-5,r.state="dwell",r.dwellLeft=999,e.x=37,e.z=21,at(n,"theft",{severity:.6,x:37,z:21,actorId:"player",place:"piazza"}),ye(n,e,60);const s=t.beliefs.has("ev1"),o=i.beliefs.has("ev1"),a=r.beliefs.has("ev1");return{pass:s&&!o&&!a,info:`A=${s} B=${o} C=${a}`}}function Vx(){const{sim:n,player:e}=Ie(3003,ct(We(9),3)),[t,i,r]=n.npcs;t.relations[i.id]=.9,i.relations[t.id]=.9,i.relations[r.id]=.9,r.relations[i.id]=.9,e.x=36,e.z=21;for(const[d,u]of[[t,35],[i,33.2],[r,39]])d.x=u,d.z=21,d.yaw=0,d.state="dwell",d.dwellLeft=9999;ht(t.beliefs,"evX",lt({kind:"theft",severity:.2,px:37,pz:21,place:"piazza",actor:"sconosciuto",channel:"seen",confidence:.9,t:0,provenance:[]}),t.id),jt(t,"evX"),ye(n,e,600);const s=i.beliefs.get("evX"),o=r.beliefs.get("evX"),a=s&&s.channel==="hearsay"&&s.provenance[0]===t.id&&s.provenance[s.provenance.length-1]===t.id,c=o&&o.channel==="hearsay"&&o.provenance[0]===t.id&&o.provenance[o.provenance.length-1]===i.id,l=s&&o&&o.confidence<s.confidence&&s.confidence<.9;return{pass:!!a&&!!c&&!!l,info:`Bprov=${JSON.stringify(s?.provenance)} Cprov=${JSON.stringify(o?.provenance)} confs=0.90/${s?.confidence?.toFixed(2)}/${o?.confidence?.toFixed(2)}`}}function Wx(){const n=()=>Ie(4242,ct(We(11),12)),e=r=>{const{sim:s,player:o}=r;for(let a=0;a<600;a++)o.x=Math.sin(a/50)*20,o.z=Math.cos(a/70)*20,a===100&&at(s,"theft",{severity:.7,x:10,z:10,actorId:"player",place:"strada"}),a===300&&at(s,"disturbance",{severity:.45,x:-20,z:11,actorId:"player",place:"bar"}),Ht(s,o,ei);return wt(s)},t=e(n()),i=e(n());return{pass:t===i,info:`h1=${t} h2=${i}`}}function Xx(){const n=Ie(5555,ct(We(12),8)),{sim:e,player:t}=n;for(let a=0;a<300;a++)a===50&&at(e,"theft",{severity:.8,x:5,z:5,actorId:"player",place:"strada"}),Ht(e,t,ei);const i=wt(e),r={t:e.t,rngState:e.rng.state,unseen:e.unseen.map(a=>a.id),pruneAt:e.pruneAt,journal:e.journal.serialize(),npcs:e.npcs.map(kr)},s=Ie(9999,ct(We(12),8));s.sim.rng.state=r.rngState,s.sim.t=r.t,s.sim.pruneAt=r.pruneAt,s.sim.journal.restore(r.journal),s.sim.unseen.length=0;for(const a of r.unseen){const c=s.sim.journal.byId(a);c&&s.sim.unseen.push(c)}r.npcs.forEach((a,c)=>Or(s.sim.npcs[c],a));const o=wt(s.sim);return{pass:i===o,info:`pre=${i} post=${o}`}}function $x(){const n={version:1,seed:7,rngState:42,t:12.5,player:{x:1,z:2,yaw:0},npcs:[{id:"anna",x:0,z:0,yaw:0,state:"alerted",agendaIdx:0,dwellLeft:1,relations:{},memory:["ev1"],beliefs:[["ev1",{fact:"una persona ha preso il pacco in piazza",source:"seen",confidence:.8,t:10,error:null}]],alertedBy:"ev1",alertT:11,gossipAt:0}],journal:{seq:1,events:[{id:"ev1",t:10,type:"theft",severity:.6,x:37,z:21.5,actorId:"player",place:"piazza",witnesses:["anna"]}]},world:{packageTaken:!0}},e=kd(JSON.parse(JSON.stringify(n)),n.journal.events),t=e.npcs[0].beliefs[0][1];return{pass:e.version===2&&t.kind==="theft"&&t.channel==="seen"&&t.px===37&&Array.isArray(t.provenance)&&e.npcs[0].state==="dwell"&&e.npcs[0].fleeNode===null,info:`v=${e.version} kind=${t.kind} ch=${t.channel} px=${t.px} state=${e.npcs[0].state}`}}function qx(){const n=new Map,e=ht(n,"e1",lt({kind:"theft",channel:"seen",confidence:.9,t:0,provenance:["a"]}),"b"),t=n.get("e1").confidence,i=ht(n,"e1",lt({kind:"theft",channel:"hearsay",confidence:.3,t:1,provenance:["c"]}),"b"),r=n.get("e1").confidence<=.9,s=ht(n,"e1",lt({kind:"theft",channel:"hearsay",confidence:.9,t:2,provenance:["b"]}),"b"),o=[],a=(c,l)=>{l!=="ignored"&&o.push(c)};return a("e1",e),a("e1",i),{pass:e==="stored"&&i==="merged"&&r&&s==="ignored"&&o.length===2,info:`r1=${e} r2=${i} r3=${s} conf=${t}->${n.get("e1").confidence} mem=${o.length}`}}function jx(){const n=lt({kind:"theft",channel:"hearsay",confidence:.6,t:0,provenance:["a"]}),e=an(n,1e3),t=new Map([["e1",n]]),i=Ka(t,1e5);return{pass:e<.6&&e>0&&i===1&&t.size===0,info:`eff(1000s)=${e.toFixed(3)} pruned=${i}`}}function Yx(){const{sim:n,player:e}=Ie(6666,ct(We(13),5));for(const i of n.npcs)i.x=-45,i.z=-45,i.state="dwell",i.dwellLeft=9999;e.x=45,e.z=45,at(n,"theft",{severity:.9,x:45,z:45,actorId:"player",place:"piazza"}),ye(n,e,60);const t=n.npcs.filter(i=>i.beliefs.size>0).length;return{pass:t===0&&n.journal.byId("ev1").witnesses.length===0,info:`learned=${t}`}}function Zx(){const{sim:n,player:e}=Ie(7777,ct(We(14),1)),[t]=n.npcs;e.x=-49,e.z=-49,t.x=49,t.z=49,t.state="dwell",t.dwellLeft=1,t.agenda=[{node:"pia_c",dwell:1},{node:"road_w",dwell:1}],t.agendaIdx=0,ye(n,e,200);const i=t.level;return{pass:i==="L3",info:`level=${i} agendaIdx=${t.agendaIdx} pos=(${(+t.x).toFixed(1)},${(+t.z).toFixed(1)})`}}function Kx(){const{sim:n,player:e}=Ie(8888,ct(We(15),80));e.x=0,e.z=0,at(n,"theft",{severity:.9,x:0,z:0,actorId:"player",place:"strada"});const t=performance.now();ye(n,e,200);const i=performance.now()-t;return{pass:n.counts.L1<=12,info:`200ticks80npc=${i.toFixed(0)}ms L1=${n.counts.L1} L2=${n.counts.L2} L3=${n.counts.L3}`}}function Jx(){const n=a=>a.replace(/\/\/[^\n]*/g,"").replace(/\/\*[\s\S]*?\*\//g,""),e=[];for(const[a,c]of[["think",nn],["policeThink",Ta],["awarenessTick",Aa]]){const l=n(c.toString());for(const d of["journal","witnesses","byId","unseen","worldTruth"])l.includes(d)&&e.push(`${a}:${d}`)}const t=Ie(9101,ct(We(31),2)),i=t.sim.npcs[0];i.x=0,i.z=0,i.yaw=0,i.awareness=1;const r={t:1,navAdj:Fr(),rng:We(32),dtThink:.25,stats:{perceptionChecks:0,gossipOps:0,pathComputations:0,thinkRuns:0,pruned:0,thinkByLevel:{L1:0,L2:0,L3:0}},nearby:()=>[],player:{x:0,z:5},playerStealth:{x:0,z:5,crouch:!1,running:!1},colliders:t.sim.colliders,corpsesNear:()=>null,get journal(){throw new Error("leak:journal")},get witnesses(){throw new Error("leak:witnesses")},get worldTruth(){throw new Error("leak:worldTruth")},get policeState(){throw new Error("leak:policeState")}},s=new Proxy(t.sim,{get(a,c){if(c==="journal"||c==="witnesses"||c==="worldTruth"||c==="unseen")throw new Error("leak:"+String(c));return a[c]}});let o="ok";try{nn(i,r);const a=dr({id:"copX",name:"Cop",color:1,role:"police",x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:1}]},We(33));Ta(a,r),Aa(s,{x:0,z:5,crouch:!1,running:!1},.05)}catch(a){o=String(a.message??a)}return{pass:e.length===0&&o==="ok",info:`srcLeaks=[${e}] runtime=${o}`}}function Qx(){const n=()=>Ie(3030,ct(We(41),30)),e=r=>{const{sim:s,player:o}=r;for(let a=0;a<800;a++)o.x=Math.sin(a/40)*25,o.z=Math.cos(a/55)*20,o.running=a%97<30,a===120&&at(s,"theft",{severity:.7,x:12,z:12,actorId:"player",place:"strada"}),a===360&&at(s,"disturbance",{severity:.45,x:-18,z:11,actorId:"player",place:"bar"}),a===620&&at(s,"kill",{severity:1,x:37,z:20,actorId:"player",victimId:"syn5",place:"piazza"}),Ht(s,o,ei);return wt(s)},t=e(n()),i=e(n());return{pass:t===i,info:`h1=${t} h2=${i}`}}function ev(){const n={relations:{b:.8},relType:{b:"family"}},e={relations:{d:.8},relType:{}},t={relations:{f:.9},relType:{f:"enemy"}},i={relations:{q:.2},relType:{q:"family"}},r=In(n,"b")==="family"&&In(e,"d")==="acquaintance"&&In({relations:{},relType:{}},"y")==="unknown"&&$i(n,"b")===.8&&$i(t,"f")===0&&br(n,"b")===600&&br(e,"d")===60&&br(i,"q")===0&&Ts(n,"b")===1&&Ts(e,"d")===.7&&Ts(t,"f")===0,s=p=>({t:0,navAdj:Fr(),rng:We(77),dtThink:.25,stats:{gossipOps:0,pathComputations:0,thinkRuns:0,perceptionChecks:0,pruned:0},nearby:()=>[],player:{x:0,z:0},colliders:p.sim.colliders,corpsesNear:()=>null}),o=()=>lt({kind:"kill",severity:1,px:5,pz:5,place:"piazza",subject:"kin",channel:"seen",confidence:.8,t:0,provenance:[]}),a=Ie(6001,ct(We(51),1)),c=a.sim.npcs[0];c.relations={kin:.8},c.relType={kin:"family"},ht(c.beliefs,"evK",o(),c.id),nn(c,s(a));const l=c.state==="curious"&&c.gotoX===5&&(c.mournT??0)>=600,d=Ie(6002,ct(We(52),1)),u=d.sim.npcs[0];ht(u.beliefs,"evK",o(),u.id),nn(u,s(d));const f=u.state==="alerted"&&u.fleeNode!==null&&(u.mournT??0)===0;return{pass:r&&l&&f,info:`unit=${r} helped=${l}(${c.state},mourn=${c.mournT}) flees=${f}(${u.state})`}}function tv(){const n=Id.find(p=>p.id==="bruno"),e=Ie(7101,[n]),t=e.sim.npcs[0],i={t:0,navAdj:Fr(),rng:We(71),dtThink:.25,stats:{gossipOps:0,pathComputations:0,thinkRuns:0,perceptionChecks:0,pruned:0},nearby:()=>[],player:{x:0,z:0},colliders:e.sim.colliders,corpsesNear:()=>null};i.t=25,nn(t,i);const r=t.agendaBlock==="svc_in"&&t.agenda[0].node==="svc_in";i.t=275,nn(t,i);const s=t.agendaBlock==="bar_in"&&t.agenda[0].node==="bar_in";i.t=450,nn(t,i);const o=t.agendaBlock==="b5_door"&&t.agenda[0].node==="b5_door";t.state="alerted",t.fleeNode="road_e",i.t=25,nn(t,i);const a=t.agendaBlock==="b5_door";t.state="dwell",t.alertedBy=null,t.fleeNode=null,nn(t,i);const c=t.agendaBlock==="svc_in",l=kr(t),d=dr(n,We(72));Or(d,l);const u=d.agendaBlock===t.agendaBlock&&JSON.stringify(d.agenda)===JSON.stringify(t.agenda),f=Sr(0)===8&&Sr(600)===8&&Sr(275)===19&&Sr(450)===2;return{pass:r&&s&&o&&a&&c&&u&&f,info:`work=${r} social=${s} home=${o} interrupt=${a} resume=${c} serial=${u} clock=${f}`}}function nv(){const e=Ie(8101,ct(We(61),1)).sim.npcs[0],t=(p,g,v,m=null)=>{ht(e.beliefs,p,lt({kind:g,severity:v,subject:m,px:0,pz:0,place:"piazza",channel:"seen",confidence:.8,t:0,provenance:[]}),e.id),jt(e,p)};t("evKill","kill",1,"kin"),t("evNoise","noise",.2),t("evTiny","disturbance",.2),t("evOrd","theft",.5);const i=e.memTier.evKill===2&&e.memTier.evNoise===0&&e.memTier.evTiny===0&&e.memTier.evOrd===1;e.beliefs.delete("evKill"),e.beliefs.delete("evNoise"),e.beliefs.delete("evTiny"),e.beliefs.delete("evOrd");const r=As(e,70),s=e.memory.includes("evKill")&&!e.memory.includes("evNoise")&&!e.memory.includes("evTiny")&&!e.memory.includes("evOrd"),o=e.memTier.evNoise===void 0&&e.memAt.evNoise===void 0,a=As(e,950),c=e.memory.length===0&&Object.keys(e.memTier).length===0&&Object.keys(e.memAt).length===0,d=Ie(8102,ct(We(62),1)).sim.npcs[0];for(let p=0;p<200;p++){const g="e"+p;ht(d.beliefs,g,lt({kind:"noise",severity:.2,px:0,pz:0,place:"p",channel:"heard",confidence:.3,t:p,provenance:[]}),d.id),jt(d,g),p%40===0&&As(d,p)}const u=d.memory.length<=64,f=Object.keys(d.memTier).length<=d.memory.length&&Object.keys(d.memAt).length<=d.memory.length;return{pass:i&&s&&o&&c&&u&&f,info:`tiers=${i} r1=${r} after70=${s} r2=${a} after950=${c} cap=${d.memory.length} maps=${Object.keys(d.memTier).length}`}}function iv(){const n=new Map;ht(n,"e1",lt({kind:"theft",channel:"hearsay",confidence:.8,t:0,px:0,pz:0,provenance:["a"]}),"self"),ht(n,"e1",lt({kind:"theft",channel:"hearsay",confidence:.7,t:1,px:50,pz:50,provenance:["b"]}),"self");const e=n.get("e1"),t=(e.contra??0)===1&&e.confidence<.8&&e.px===0;ht(n,"e1",lt({kind:"theft",channel:"seen",confidence:.6,t:2,px:48,pz:52,actor:"uomo in verde",provenance:[]}),"self");const i=n.get("e1"),r=i.channel==="seen"&&i.px===48&&(i.contra??0)===2;ht(n,"e1",lt({kind:"theft",channel:"hearsay",confidence:.9,t:3,px:0,pz:0,actor:"persona rossa",provenance:["x"]}),"self");const s=n.get("e1"),o=s.channel==="seen"&&s.px===48&&s.confidence===.6,a=new Map;ht(a,"e2",lt({kind:"theft",channel:"seen",confidence:.9,t:0,provenance:["a"]}),"self"),ht(a,"e2",lt({kind:"theft",channel:"hearsay",confidence:.4,t:100,px:0,pz:0,provenance:["c"]}),"self");const c=a.get("e2"),l=c.confidence===.9&&c.t>0&&c.t<=100;return{pass:t&&r&&o&&l,info:`crumble=${t}(contra=${e.contra},conf=${e.confidence?.toFixed(2)}) seenWins=${r} seenHolds=${o} corrob=${l}(t=${c.t},conf=${c.confidence})`}}function rv(){const{sim:n,player:e}=Ie(3011,ct(We(13),4)),[t,i,r,s]=n.npcs;t.relations[i.id]=.9,i.relations[t.id]=.9,i.relations[r.id]=.9,r.relations[i.id]=.9,r.relations[s.id]=.9,s.relations[r.id]=.9;for(const[m,h]of[[t,-10],[i,-7],[r,-4],[s,-1]])m.x=h,m.z=0,m.yaw=0,m.state="dwell",m.dwellLeft=9999;ht(t.beliefs,"evX",lt({kind:"theft",severity:.2,px:-8,pz:0,place:"strada",actor:"sconosciuto",channel:"seen",confidence:.9,t:0,provenance:[]}),t.id),jt(t,"evX");const o=()=>[t,i,r,s].filter(m=>m.beliefs.has("evX")).length;ye(n,e,80);const a=o();ye(n,e,520);const c=o();ye(n,e,1800);const l=o(),d=s.beliefs.get("evX"),u=!!d&&d.channel==="hearsay"&&d.provenance[0]===t.id&&d.provenance[d.provenance.length-1]===r.id,f=[t,i,r,s].some(m=>(m.talkT??0)>0),p=i.beliefs.get("evX"),g=r.beliefs.get("evX"),v=!!p&&!!g&&!!d&&d.confidence<g.confidence&&g.confidence<p.confidence&&p.confidence<.9;return{pass:a<=2&&c>=3&&l===4&&u&&v&&f,info:`early=${a} mid=${c} late=${l} Dprov=${JSON.stringify(d?.provenance)} talk=${f} confs=${p?.confidence?.toFixed(2)}/${g?.confidence?.toFixed(2)}/${d?.confidence?.toFixed(2)}`}}function sv(){const{sim:n,player:e}=Ie(4401,ct(We(31),3)),[t,i,r]=n.npcs;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=9999,i.x=34.5,i.z=19.5,i.yaw=-Math.PI/2,i.state="dwell",i.dwellLeft=9999,r.x=-40,r.z=0,r.state="dwell",r.dwellLeft=9999,e.x=37,e.z=21.5,at(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),Ht(n,e,ei);const s=t.beliefs.has("ev1");ye(n,e,10);const o=t.beliefs.get("ev1"),a=!!o&&o.channel==="seen"&&o.w!=null&&o.w<=1.5&&o.confidence>.5,c=!i.beliefs.has("ev1")&&!r.beliefs.has("ev1"),l=Qa(t,37,21.5,14,n.colliders,n.rng),d=l.heard&&o&&l.w>o.w&&l.confidence<o.confidence;ye(n,e,90);const u=Object.keys(t.gaze??{}).length===0&&Object.keys(i.gaze??{}).length===0;return{pass:!s&&a&&c&&d&&u,info:`instant=${s} w=${o?.w} conf=${o?.confidence?.toFixed(2)} heardW=${l.w} heardC=${l.confidence?.toFixed(2)} gazeClean=${u}`}}function ov(){const{sim:n,player:e}=Ie(6601,ct(We(61),4)),[t,i,r,s]=n.npcs;for(const c of n.npcs)c.relations={},c.relType={},c.state="dwell",c.dwellLeft=9999;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,i.x=47,i.z=21.5,i.yaw=Math.PI,r.x=-40,r.z=0,s.x=0,s.z=-40,e.x=37,e.z=21.5,e.crouch=!0,at(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),ye(n,e,600);const o=t.beliefs.has("ev1")&&t.beliefs.get("ev1").channel==="seen",a=!i.beliefs.has("ev1")&&!r.beliefs.has("ev1")&&!s.beliefs.has("ev1")&&i.memory.length===0&&r.memory.length===0&&s.memory.length===0;return{pass:o&&a,info:`aKnows=${o} noLeak=${a}`}}function av(){const{sim:n,player:e}=Ie(5501,ct(We(41),3)),[t,i,r]=n.npcs;for(const f of n.npcs)f.state="dwell",f.dwellLeft=9999;t.x=0,t.z=0,i.x=0,i.z=-50,r.x=50,r.z=50,e.x=0,e.z=20,ye(n,e,20);const s=t.level==="L1";let o=0,a=t.level;for(let f=0;f<10;f++)e.z=f%2===0?28:32,ye(n,e,10),t.level!==a&&(o++,a=t.level);e.x=0,e.z=8,ye(n,e,15);const c=i.level==="L2";let l=0,d=i.level;for(let f=0;f<10;f++)e.z=f%2===0?12:8,ye(n,e,10),i.level!==d&&(l++,d=i.level);const u=n.npcs.filter(f=>f.level==="L1").length<=12;return{pass:s&&c&&o===0&&l===0&&u,info:`startL1=${s} flips1=${o} startL2=${c} flips2=${l} L1count=${n.npcs.filter(f=>f.level==="L1").length}`}}function cv(){const{sim:n,player:e}=Ie(7710,ct(We(51),2)),[t,i]=n.npcs;for(const d of n.npcs)d.state="dwell",d.dwellLeft=9999;t.x=40,t.z=30,t.agenda=[{node:"pia_c",dwell:1},{node:"road_w",dwell:1}],t.agendaIdx=0,i.x=-49,i.z=-49,e.x=-49,e.z=-49,ye(n,e,40);const r=t.level==="L3";e.x=38,e.z=28;const s=n.stats.thinkByLevel.L1;let o=0;for(let d=0;d<40;d++){const u=t.x,f=t.z;Ht(n,e,ei),o=Math.max(o,Math.hypot(t.x-u,t.z-f))}const a=t.level==="L1"||t.level==="L2",c=o<=.2,l=n.stats.thinkByLevel.L1>s;return{pass:r&&a&&c&&l,info:`wasL3=${r} now=${t.level} maxStep=${o.toFixed(3)} L1think=${n.stats.thinkByLevel.L1-s}`}}function lv(){const n=()=>Ie(7710,ct(We(71),10)),e=(c,l,d)=>{for(let u=l;u<d;u++)c.player.x=Math.sin(u/40)*25,c.player.z=Math.cos(u/55)*25,u===120&&at(c.sim,"theft",{severity:.7,x:5,z:5,actorId:"player",place:"strada"}),u===250&&at(c.sim,"disturbance",{severity:.4,x:-15,z:10,actorId:"player",place:"bar"}),Ht(c.sim,c.player,ei)},t=n();e(t,0,300);const i={t:t.sim.t,rngState:t.sim.rng.state,unseen:t.sim.unseen.map(c=>c.id),pruneAt:t.sim.pruneAt,journal:t.sim.journal.serialize(),npcs:t.sim.npcs.map(kr)};e(t,300,500);const r=wt(t.sim),s=()=>{const c=n();c.sim.rng.state=i.rngState,c.sim.t=i.t,c.sim.pruneAt=i.pruneAt,c.sim.journal.restore(i.journal),c.sim.unseen.length=0;for(const l of i.unseen){const d=c.sim.journal.byId(l);d&&c.sim.unseen.push(d)}return i.npcs.forEach((l,d)=>Or(c.sim.npcs[d],l)),e(c,300,500),wt(c.sim)},o=s(),a=s();return{pass:r===o&&o===a,info:`cont=${r} load1=${o} load2=${a}`}}async function dv(){const n=[ut("truth_isolation",Hx),ut("divergent_knowledge",Gx),ut("gossip_chain",Vx),ut("determinism_replay",Wx),ut("save_load_roundtrip",Xx),ut("merge_integrity",qx),ut("migration_v1_v2",$x),ut("belief_decay_prune",jx),ut("no_witness_event",Yx),ut("l3_coherence",Zx),ut("scale_80_smoke",Kx),ut("truth_leak_static",Jx),ut("determinism_30",Qx),ut("relations_typed",ev),ut("schedule_routines",tv),ut("memory_tiers",nv),ut("contradiction_corrob",iv),ut("multi_hop_gossip",rv),ut("perception_quality",sv),ut("no_omniscienza",ov),ut("level_hysteresis",av),ut("l3_to_l1_promotion",cv),ut("replay_post_load",lv),...Lx(),...kx()];return{suite:"p0-foundation",passed:n.filter(t=>t.pass).length,total:n.length,tests:n,seedNote:"seed fissi per test"}}function uv(n,e=12345){const{sim:t,player:i}=Ie(e,ct(We(e),n));i.x=0,i.z=0,ye(t,i,40),t.stats.perceptionChecks=0,t.stats.gossipOps=0,t.stats.pathComputations=0,t.stats.thinkRuns=0,t.stats.thinkByLevel={L1:0,L2:0,L3:0};let r=0;const s=400,o=performance.now();for(let d=0;d<s;d++)d===100&&at(t,"theft",{severity:.8,x:5,z:5,actorId:"player",place:"strada"}),Ht(t,i,ei),r+=t.aiMs;const a=performance.now()-o;let c=0,l=0;for(const d of t.npcs)c+=d.memory.length,l+=d.beliefs.size;return{npcs:n,ticks:s,seed:e,simMsTotal:+a.toFixed(1),simMsPerTick:+(a/s).toFixed(3),aiMsPerTick:+(r/s).toFixed(3),perceptionChecks:t.stats.perceptionChecks,gossipOps:t.stats.gossipOps,pathComputations:t.stats.pathComputations,thinkRuns:t.stats.thinkRuns,thinkByLevel:{...t.stats.thinkByLevel},eventCount:t.journal.events.length,memoryCount:c,beliefCount:l,levels:{...t.counts},hash:wt(t)}}const Gl=Object.freeze(Object.defineProperty({__proto__:null,buildWorld:Ie,runAllTests:dv,runBench:uv,runTicks:ye,snapshotHash:wt,synthRoster:ct},Symbol.toStringTag,{value:"Module"}));function fv(n){const e={seed:n,rng:We(n),journal:Us(),colliders:cr(),navAdj:Fr(),npcs:[],player:Nd(37,2),pk:zd(),interactables:Ed(),caught:!1,contract:ic("marco",900),ended:null,worldFlags:{packageTaken:!0},errors:[],camYaw:0,camPitch:.5,fps:0,frameMs:0},t=Rd(e.colliders);(t.nodeViolations.length||t.edgeViolations.length)&&console.warn("[nav] waypoint in conflitto con collider",t),e.sim=Dd(e.npcs,e.journal,e.colliders,e.navAdj,e.rng,{onWitness:(r,s)=>{r.alertT=e.sim.t,(s.type==="kill"||s.type==="sabotage"||s.type==="found_corpse")&&(e.hud?.toast(`👁 ${r.name} ha visto qualcosa!`),s.type==="kill"&&e.audio?.scream())},onGossip:(r,s)=>e.hud?.toast(`💬 ${r.name} ha raccontato qualcosa a ${s.name}`),onInterview:(r,s)=>e.hud?.toast(`👮 ${r.name} interroga ${s.name}`),onPoliceState:(r,s,o)=>{(o==="ALERT"||o==="SEARCHING")&&e.audio?.sting()},onCaught:()=>{e.caught=!0,e.ended="caught",document.getElementById("caught").style.display="flex",e.audio?.sting()},onArrest:(r,s)=>{e.hud?.toast(`👮 ${r.name} ha arrestato ${s.name}: è lui il sospetto`),e.audio?.sting()}});for(const r of Id)e.npcs.push(dr(r,e.rng));Fd(e.pk,"marco"),e.renderer=Rg(document.getElementById("app")),e.player.mesh=Pa(3129201,!0,"player"),e.renderer.scene.add(e.player.mesh);for(const r of e.npcs)r.mesh=Pa(r.color,!1,r.role),r.mesh.position.set(r.x,0,r.z),e.renderer.scene.add(r.mesh);e.pkg=null,e.syncInteractables=()=>Wl(e),e.inputHandle=Sg(),e.input=e.inputHandle.api,e.hud=Bg(e),e.audio=Hg(),Wl(e);const i=r=>{e.errors.push(String(r.message??r.error??"errore").slice(0,120))};return addEventListener("error",i),e.dispose=()=>{removeEventListener("error",i),e.inputHandle.dispose(),e.hud.dispose(),e.audio?.dispose(),e.renderer.dispose();for(const r of e.npcs)r.mesh=null;e.player.mesh=null},e}function hv(n,e){const t=ct(n.rng,e).filter(i=>!n.npcs.some(r=>r.id===i.id));for(const i of t){const r=dr(i,n.rng);r.mesh=Pa(10066329,!1,"civilian"),r.mesh.position.set(r.x,0,r.z),n.renderer.scene.add(r.mesh),n.npcs.push(r)}return t.length}const pv={theft:"un furto",disturbance:"un trambusto",assault:"un’aggressione",kill:"un omicidio",found_corpse:"un cadavere",noise:"un rumore",sabotage:"un sabotaggio"},mv=new Set(["trap","fall","accident"]);function Wd(n,e,t){if(!e||e.state==="dead")return null;e.state="dead",e.speed=0,e.fleeNode=null,e.gotoX=null,e.gotoZ=null,e.path=[];const i=lr(e.x,e.z),r=mv.has(t),s=at(n.sim,r?"accident":"kill",{severity:r?.35:1,x:e.x,z:e.z,actorId:r?null:t==="melee"?"player":null,victimId:e.id,place:i});return e.death={evId:s.id,t:n.sim.t,px:e.x,pz:e.z,kind:r?"accident":"kill",method:t},Xd(n,e.x,e.z,t==="melee"?18:22,.35),n.audio?.thud(),s}function Xd(n,e,t,i,r){return ec(n.sim,e,t,i,r)}function _v(n){const e=n.player;if(n.sim.t-(e.attackCd??-99)<1.2)return null;e.attackCd=n.sim.t,e.attackT=n.sim.t;let t=null,i=Gg;for(const s of n.npcs){if(s.state==="dead")continue;const o=Math.hypot(s.x-e.x,s.z-e.z);o<i&&(i=o,t=s)}if(!t)return n.audio?.swing(),null;const r=rr(n.sim,n.player,t,n.sim.rng.next());return r.hit?Wd(n,t,"melee"):(n.audio?.swing(),r)}function gv(n){const e=n.player;n.sim.t-(e.whistleCd??-99)<3||(e.whistleCd=n.sim.t,n.audio?.whistle(),Xd(n,e.x,e.z,14,.2))}function xv(n){const e=n.interactables.yardstack,t=n.player;return e.state!=="ok"||Math.hypot(t.x-e.x,t.z-e.z)>2.8?null:(e.state="armed",n.syncInteractables(),n.audio?.clank(),at(n.sim,"sabotage",{severity:.5,x:e.x,z:e.z,actorId:"player",place:"svc_in"}),n.hud.toast("⚙ Catasta sabotata. Crollerà su chi ci passa sotto…"),!0)}function vv(n){const e=n.interactables.yardstack;if(e.state==="armed"){for(const t of n.npcs)if(t.state!=="dead"&&Math.hypot(t.x-e.x,t.z-e.z)<2.2){e.state="fallen",n.syncInteractables(),n.audio?.crash(),Wd(n,t,"trap"),n.hud.toast("💥 La catasta è crollata!");return}}}function Mv(n,e){Fd(n.pk,e.id);const t=[...e.beliefs.values()].pop();let i="Tutto tranquillo, come al solito.";if(t){const r=`${pv[t.kind]??"qualcosa di strano"} ${t.place}`;i=t.channel==="seen"?`Ho visto ${r}!`+(t.error?" (non ricordo bene i dettagli)":""):`Gira voce che ${r}…`}n.hud.toast(`🗣 ${e.name}: "${i}"`,4200)}function yv(n){const e=n.player;let t=null,i=2.5;for(const r of n.npcs){if(r.state==="dead")continue;const s=Math.hypot(r.x-e.x,r.z-e.z);s<i&&(i=s,t=r)}return t?{kind:"npc",npc:t}:null}function Sv(n,e){if(n.ended)return n.ended;n.ended=e;const t=document.getElementById("caught");if(t){const i=t.querySelector("h1"),r=t.querySelector("p");e==="window"?(i.textContent="Finestra chiusa",r.textContent="Il tempo del contratto è finito e il bersaglio è ancora vivo. Studiare troppo a lungo costa la missione."):e==="done"&&(i.textContent="Contratto concluso",r.textContent="Il bersaglio è stato eliminato entro la finestra. Ora resta solo capire se qualcuno ti ha visto."),t.style.display="flex"}return n.audio?.sting(),e}const Lo=1/20;function Ev(n,e){const t=Math.min(e,.1),i=n.input.consumeLook();n.camYaw-=i.dx*.005,n.camPitch=Math.max(.08,Math.min(1.1,n.camPitch+i.dy*.003)),Ud(n.player,n.input,n.camYaw,t,n.colliders),n.stepAcc=(n.stepAcc??0)+n.player.speed*t;const r=n.player.crouch?1.6:n.player.running?2.6:2;n.stepAcc>r&&n.player.speed>.5&&(n.stepAcc=0,n.audio?.step(n.player.running)),n.acc=(n.acc??0)+t;let s=0;for(;n.acc>=Lo&&s<5;)Ht(n.sim,n.player,Lo),n.acc-=Lo,s++;if(Cg(n.pk,n.player,n.camYaw,n.npcs,n.colliders,n.sim.t,t),vv(n),n.player.running)for(const C of n.npcs){if(C.state==="dead"||C.role==="police")continue;const T=n.player.x-C.x,b=n.player.z-C.z;if(T*T+b*b>36)continue;let R=Math.atan2(T,b)-C.yaw;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<Math.PI/3&&(C.suspT=n.sim.t)}const o=yv(n);n.player.interactTarget=o;const a=n.interactables.yardstack,c=Math.hypot(n.player.x-a.x,n.player.z-a.z)<2.8,l=Ra(n.sim,n.player.x,n.player.z,2.2);if(l?n.hud.setPrompt("Premi <b>E</b> per nascondere il corpo"):c&&a.state==="ok"?n.hud.setPrompt("Premi <b>E</b> per sabotare la catasta"):o?n.hud.setPrompt(`Premi <b>E</b> per parlare con <b>${o.npc.name}</b> · <b>F</b> colpisci`):n.hud.setPrompt(null),n.input.wasPressed("KeyE")&&(l&&Fs(n.sim,l)?n.hud.toast("🩸 Corpo nascosto: nessuno lo troverà guardandolo da lontano"):c&&a.state==="ok"?xv(n):o&&Mv(n,o.npc)),n.input.wasPressed("KeyF")&&_v(n),n.input.wasPressed("KeyQ")&&gv(n),n.input.wasPressed("KeyC")&&(n.player.crouch=!n.player.crouch,n.hud.toast(n.player.crouch?"🤫 Accovacciato: meno visibile, più lento":"🚶 In piedi")),n.input.wasPressed("KeyJ")&&n.hud.togglePanel(),n.input.wasPressed("KeyN")&&n.hud.toggleNotebook(),n.input.wasPressed("F3")&&n.hud.toggleDebug(),document.getElementById("notebook").style.display==="block"&&(n._nTick=(n._nTick??0)+1)%20===0&&n.hud.renderNotebook(),!n.ended){const C=Er(n.sim,n.contract);C!=="running"&&Sv(n,C)}const d=vi(n.sim,n.contract),u=Math.ceil(d.remaining);if(n._clockSec!==u){n._clockSec=u;const C=document.getElementById("objective");C&&(n._objBase==null&&(n._objBase=C.innerHTML),C.innerHTML=`${n._objBase} <b>⏱ ${Bd(d.remaining)}</b>`);const T=document.getElementById("notebook");T&&T.style.display==="block"&&n.hud?.renderNotebook()}const f=n.player.mesh;f.position.set(n.player.x,Vl(n.player),n.player.z),f.rotation.y=n.player.yaw,f.scale.y=n.player.crouch?.8:1,Ol(f,n.player.speed,n.sim.t,n.sim.t-(n.player.attackT??-99)<.45);for(const C of n.npcs){C.mesh.position.set(C.x,C.state==="dead"?.35:Vl(C),C.z),C.mesh.rotation.y=C.yaw,C.mesh.rotation.z=C.state==="dead"?Math.PI/2:0,C.state!=="dead"&&Ol(C.mesh,C.speed,n.sim.t,!1);const T=n.sim.t-(C.alertT??-99)<20,b=n.sim.t-(C.suspT??-99)<3;C.mesh.userData.mark.visible=C.state!=="dead"&&(C.state==="alerted"||b||T&&C.beliefs.size>0),C.mesh.visible=C.state!=="arrested"&&!(C.state==="dead"&&C.hidden)}const p=ya(n.player.x,n.player.z,"bar"),g=p?3.2:7,v=Math.sin(n.camYaw),m=Math.cos(n.camYaw);let h=1;if(!p){const C=-v*Math.cos(n.camPitch)*g,T=-m*Math.cos(n.camPitch)*g;for(const b of[1,.85,.7,.55,.4,.28]){if(!bv(n.player.x+C*b,n.player.z+T*b,n.colliders)){h=b;break}h=b}}const w=n.player.x-v*Math.cos(n.camPitch)*g*h,_=n.player.z-m*Math.cos(n.camPitch)*g*h,x=p?2.5:Math.sin(n.camPitch)*g*h+1.6;n.renderer.camera.position.set(w,x,_),n.renderer.camera.lookAt(n.player.x+v*2.2,1.2,n.player.z+m*2.2),n.renderer.renderer.render(n.renderer.scene,n.renderer.camera),n.hud.tickToast()}function bv(n,e,t){return t.some(i=>i.high&&n>i.minX-.3&&n<i.maxX+.3&&e>i.minZ-.3&&e<i.maxZ+.3)}function Vl(n){return n.speed>.2?Math.abs(Math.sin(performance.now()/130))*.06:0}function Wl(n){const e=n.interactables.yardstack,t=n.renderer.scene.getObjectByName("yardstack_top"),i=n.renderer.scene.getObjectByName("yardstack");!t||!i||(e.state==="fallen"?(i.rotation.x=Math.PI/2-.15,i.position.y=.6,t.rotation.x=Math.PI/2,t.position.y=.4):e.state==="armed"?t.rotation.z=.28:(i.rotation.x=0,i.position.y=1.2,t.rotation.x=0,t.rotation.z=0,t.position.y=2.9))}async function Io(n){try{await Ng(n),n.hud.toast("💾 Salvato in IndexedDB")}catch(e){n.hud.toast("❌ Salvataggio fallito: "+String(e.message??e).slice(0,100))}}let Je=null,Lr=!1,Tr=0,Cs=0,La=0,Do=0,hs=0,Ps=0,ps=0,$d=0;function wv(){return Lr}function Tv(){return $d}function Ls(){Lr=!1,Tr&&cancelAnimationFrame(Tr),Tr=0,Cs&&clearInterval(Cs),Cs=0;const n=document.getElementById("caught");if(n&&(n.style.display="none"),Je){try{Je.dispose()}catch{}Je=null}window.__p0=null}async function ms(n){Ls(),$d++,document.getElementById("start-screen").style.display="none";let e=null;n||(e=await Od());const t=n?Math.random()*1e9|0:e?.seed??Math.random()*1e9|0;localStorage.setItem("quartiere-p0-lastseed",String(t||"continue")),Je=fv(t||Math.random()*1e9|0);const i=new URLSearchParams(location.search);if(i.has("npc")&&hv(Je,Math.max(0,parseInt(i.get("npc")||"0",10))),!n)try{const r=await zg(Je,e);Je.loadWarnings?.length&&Je.hud.toast("⚠ "+Je.loadWarnings.join(", "),4e3)}catch(r){Ls(),document.getElementById("start-screen").style.display="flex",document.getElementById("start-msg").textContent="Save incompatibile: "+String(r.message??r).slice(0,140);return}return Je.save=()=>Io(Je),Je.audio.ensure(),Je.hud.show(),Lr=!0,La=performance.now(),Cs=setInterval(()=>{Lr&&!document.hidden&&Io(Je)},3e4),Tr=requestAnimationFrame(qd),window.__p0={game:Je,save:()=>Io(Je),journal:()=>Je.journal.events,beliefs:r=>[...Je.npcs.find(s=>s.id===r)?.beliefs.entries()??[]],tp:(r,s)=>{Je.player.x=r,Je.player.z=s},npcPos:r=>{const s=Je.npcs.find(o=>o.id===r);return{x:s.x,z:s.z,state:s.state,level:s.level}},fps:()=>Ps,destroy:Ls},Je}function qd(n){if(!Lr)return;Tr=requestAnimationFrame(qd);const e=performance.now(),t=(n-La)/1e3;La=n,Do+=1/Math.max(t,1e-4),hs++,hs>=30&&(Ps=Math.round(Do/hs),Do=0,hs=0),Ev(Je,t),ps=ps*.9+(performance.now()-e)*.1,Je.fps=Ps,Je.frameMs=ps,document.getElementById("debug").style.display==="block"&&Je.hud.renderDebug(Ps,ps),document.getElementById("panel").style.display==="block"&&(Je._pTick=(Je._pTick??0)+1)%20===0&&Je.hud.renderPanel()}const Hi=new URLSearchParams(location.search);if(Hi.has("test"))(async()=>{const{runAllTests:n}=await Gr(async()=>{const{runAllTests:o}=await Promise.resolve().then(()=>Gl);return{runAllTests:o}},void 0),{runInfraTests:e}=await Gr(async()=>{const{runInfraTests:o}=await Promise.resolve().then(()=>sx);return{runInfraTests:o}},void 0),t=await n(),i=e(),r=[...t.tests,...i.tests],s={passed:r.filter(o=>o.pass).length,total:r.length,suites:[t.suite,i.suite],tests:r};document.body.innerHTML=`<pre id="test-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${_s(JSON.stringify(s,null,1))}</pre>`,console.log("[P0-TEST]",JSON.stringify(s))})();else if(Hi.has("bench")){const n=Math.max(1,parseInt(Hi.get("bench")||"5",10));(async()=>{const{runBench:e}=await Gr(async()=>{const{runBench:i}=await Promise.resolve().then(()=>Gl);return{runBench:i}},void 0),t=e(n,12345);document.body.innerHTML=`<pre id="bench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${_s(JSON.stringify(t,null,1))}</pre>`,console.log("[P0-BENCH]",JSON.stringify(t))})()}else if(Hi.has("gfxbench")){let n=function(e){const t=e.renderer.renderer.info,i=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576):null;return{npcs:e.npcs.length,drawCalls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,programs:t.programs?.length??null,heapMB:i,simMs:+e.sim.simMs.toFixed(3),aiMs:+e.sim.aiMs.toFixed(3),frameMs:+e.frameMs.toFixed(2),fps:e.fps,levels:{...e.sim.counts},thinkRuns:e.sim.stats.thinkRuns,gossipOps:e.sim.stats.gossipOps,pathComputations:e.sim.stats.pathComputations,perceptionChecks:e.sim.stats.perceptionChecks,eventCount:e.journal.events.length}};(async()=>{const e=Math.max(60,parseInt(Hi.get("frames")||"240",10));await ms(!0);const t=window.__p0.game,i=[];let r=0;await new Promise(a=>{const c=()=>{r++,r%30===0&&i.push(n(t)),r>=e?a():requestAnimationFrame(c)};requestAnimationFrame(c)});const o={...i[i.length-1]??n(t),frames:e,samples:i.length};Ls(),document.body.innerHTML=`<pre id="gfxbench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${_s(JSON.stringify(o,null,1))}</pre>`,console.log("[P0-GFXBENCH]",JSON.stringify(o))})()}else Hi.has("lifecycle")?(async()=>{const{runLifecycleTests:n,runLifecyclePhase2:e}=await Gr(async()=>{const{runLifecycleTests:i,runLifecyclePhase2:r}=await import("./lifecycle-7EtAu7L6.js");return{runLifecycleTests:i,runLifecyclePhase2:r}},[]),t=sessionStorage.getItem("p0-lc")?await e():await n();document.body.innerHTML=`<pre id="lifecycle-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${_s(JSON.stringify(t,null,1))}</pre>`,console.log("[P0-LIFECYCLE]",JSON.stringify(t))})():(document.getElementById("btn-new").addEventListener("click",()=>ms(!0)),document.getElementById("btn-continue").addEventListener("click",()=>ms(!1)),document.getElementById("btn-retry").addEventListener("click",()=>{document.getElementById("caught").style.display="none",ms(!0)}),Fg().then(n=>{n||(document.getElementById("btn-continue").style.opacity="0.4")}));function _s(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}export{Tv as a,ms as b,Ls as d,wv as i};
