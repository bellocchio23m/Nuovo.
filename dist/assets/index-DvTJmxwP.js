(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const ih="modulepreload",oh=function(n){return"/"+n},Vc={},Ws=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");o=Promise.allSettled(t.map(l=>{if(l=oh(l),l in Vc)return;Vc[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":ih,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="170",sh=0,Wc=1,rh=2,Ql=1,ah=2,ni=3,Ci=0,Jt=1,fn=2,Ti=0,Bo=1,$c=2,Xc=3,qc=4,lh=5,qi=100,ch=101,dh=102,uh=103,fh=104,hh=200,ph=201,mh=202,_h=203,Ja=204,Qa=205,gh=206,xh=207,vh=208,yh=209,bh=210,Mh=211,wh=212,Sh=213,Eh=214,el=0,tl=1,nl=2,Vo=3,il=4,ol=5,sl=6,rl=7,Kr=0,Th=1,Ah=2,Ai=0,Rh=1,Ch=2,Ph=3,Vu=4,Lh=5,Ih=6,Dh=7,Wu=300,Wo=301,$o=302,al=303,ll=304,Jr=306,Pi=1e3,ji=1001,cl=1002,kn=1003,kh=1004,$s=1005,Bn=1006,la=1007,Zi=1008,di=1009,$u=1010,Xu=1011,Ps=1012,ec=1013,eo=1014,ii=1015,zs=1016,tc=1017,nc=1018,Xo=1020,qu=35902,Yu=1021,ju=1022,In=1023,Zu=1024,Ku=1025,Go=1026,qo=1027,Ju=1028,ic=1029,Qu=1030,oc=1031,sc=1033,br=33776,Mr=33777,wr=33778,Sr=33779,dl=35840,ul=35841,fl=35842,hl=35843,pl=36196,ml=37492,_l=37496,gl=37808,xl=37809,vl=37810,yl=37811,bl=37812,Ml=37813,wl=37814,Sl=37815,El=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Er=36492,Ll=36494,Il=36495,ef=36283,Dl=36284,kl=36285,zl=36286,zh=3200,Nh=3201,Qr=0,Uh=1,Mi="",Vt="srgb",ns="srgb-linear",ea="linear",pt="srgb",fo=7680,Yc=519,Fh=512,Oh=513,Bh=514,tf=515,Gh=516,Hh=517,Vh=518,Wh=519,jc=35044,Zc="300 es",oi=2e3,Fr=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,Nl=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function $h(n,e){return(n%e+e)%e}function da(n,e,t){return(1-t)*n+t*e}function fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*o+e.x,this.y=s*o+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,o,s,r,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,s,r,a,l,c)}set(e,t,i,o,s,r,a,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],x=i[8],v=o[0],m=o[3],h=o[6],E=o[1],g=o[4],y=o[7],L=o[2],R=o[5],A=o[8];return s[0]=r*v+a*E+l*L,s[3]=r*m+a*g+l*R,s[6]=r*h+a*y+l*A,s[1]=c*v+d*E+u*L,s[4]=c*m+d*g+u*R,s[7]=c*h+d*y+u*A,s[2]=f*v+p*E+x*L,s[5]=f*m+p*g+x*R,s[8]=f*h+p*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*a*c-i*s*d+i*a*l+o*s*c-o*r*l}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*r-a*c,f=a*l-d*s,p=c*s-r*l,x=t*u+i*f+o*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=u*v,e[1]=(o*c-d*i)*v,e[2]=(a*i-o*r)*v,e[3]=f*v,e[4]=(d*t-o*l)*v,e[5]=(o*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-o*c,o*l,-o*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new He;function nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){const n=Or("canvas");return n.style.display="block",n}const Kc={};function ys(n){n in Kc||(Kc[n]=!0,console.warn(n))}function qh(n,e,t){return new Promise(function(i,o){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Yh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(n.r=si(n.r),n.g=si(n.g),n.b=si(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(n.r=Ho(n.r),n.g=Ho(n.g),n.b=Ho(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Mi?ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],ed=[.3127,.329],td=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[ns]:{primaries:Jc,whitePoint:ed,transfer:ea,toXYZ:td,fromXYZ:nd,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:Jc,whitePoint:ed,transfer:pt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});let ho;class Zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ho===void 0&&(ho=Or("canvas")),ho.width=e.width,ho.height=e.height;const i=ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=si(s[r]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kh=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(fa(o[r].image)):s.push(fa(o[r]))}else s=fa(o);i.url=s}return t||(e.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class Qt extends is{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=ji,o=ji,s=Bn,r=Zi,a=In,l=di,c=Qt.DEFAULT_ANISOTROPY,d=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ns(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Wu;Qt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,o=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*o+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*o+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*o+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*o+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],x=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,y=(p+1)/2,L=(h+1)/2,R=(d+f)/4,A=(u+v)/4,P=(x+m)/4;return g>y&&g>L?g<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(g),o=R/i,s=A/i):y>L?y<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(y),i=R/o,s=P/o):L<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(L),i=A/s,o=P/s),this.set(i,o,s,t),this}let E=Math.sqrt((m-x)*(m-x)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(u-v)/E,this.z=(f-d)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends Qh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sf extends Qt{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends Qt{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,s,r,a){let l=i[o+0],c=i[o+1],d=i[o+2],u=i[o+3];const f=s[r+0],p=s[r+1],x=s[r+2],v=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(u!==v||l!==f||c!==p||d!==x){let m=1-a;const h=l*f+c*p+d*x+u*v,E=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const L=Math.sqrt(g),R=Math.atan2(L,h*E);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const y=a*E;if(l=l*m+f*y,c=c*m+p*y,d=d*m+x*y,u=u*m+v*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=L,c*=L,d*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,o,s,r){const a=i[o],l=i[o+1],c=i[o+2],d=i[o+3],u=s[r],f=s[r+1],p=s[r+2],x=s[r+3];return e[t]=a*x+d*u+l*p-c*f,e[t+1]=l*x+d*f+c*u-a*p,e[t+2]=c*x+d*p+a*f-l*u,e[t+3]=d*x-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(o/2),u=a(s/2),f=l(i/2),p=l(o/2),x=l(s/2);switch(r){case"XYZ":this._x=f*d*u+c*p*x,this._y=c*p*u-f*d*x,this._z=c*d*x+f*p*u,this._w=c*d*u-f*p*x;break;case"YXZ":this._x=f*d*u+c*p*x,this._y=c*p*u-f*d*x,this._z=c*d*x-f*p*u,this._w=c*d*u+f*p*x;break;case"ZXY":this._x=f*d*u-c*p*x,this._y=c*p*u+f*d*x,this._z=c*d*x+f*p*u,this._w=c*d*u-f*p*x;break;case"ZYX":this._x=f*d*u-c*p*x,this._y=c*p*u+f*d*x,this._z=c*d*x-f*p*u,this._w=c*d*u+f*p*x;break;case"YZX":this._x=f*d*u+c*p*x,this._y=c*p*u+f*d*x,this._z=c*d*x-f*p*u,this._w=c*d*u-f*p*x;break;case"XZY":this._x=f*d*u-c*p*x,this._y=c*p*u-f*d*x,this._z=c*d*x+f*p*u,this._w=c*d*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-o)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(o+r)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(o+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(r-o)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+r*a+o*c-s*l,this._y=o*d+r*l+s*a-i*c,this._z=s*d+r*c+i*l-o*a,this._w=r*d-i*a-o*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,s=this._z,r=this._w;let a=r*e._w+i*e._x+o*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=o,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*o+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=o*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*o,this.y=s[1]*t+s[4]*i+s[7]*o,this.z=s[2]*t+s[5]*i+s[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*o+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*o+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*o+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*o-a*i),d=2*(a*t-s*o),u=2*(s*i-r*t);return this.x=t+l*c+r*u-a*d,this.y=i+l*d+a*c-s*u,this.z=o+l*u+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*o,this.y=s[1]*t+s[5]*i+s[9]*o,this.z=s[2]*t+s[6]*i+s[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=o*l-s*a,this.y=s*r-i*l,this.z=i*a-o*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new F,id=new os;class Us{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Tn):Tn.fromBufferAttribute(s,r),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const o=e.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),qs.subVectors(this.max,hs),po.subVectors(e.a,hs),mo.subVectors(e.b,hs),_o.subVectors(e.c,hs),pi.subVectors(mo,po),mi.subVectors(_o,mo),Ni.subVectors(po,_o);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!pa(t,po,mo,_o,qs)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,po,mo,_o,qs))?!1:(Ys.crossVectors(pi,mi),t=[Ys.x,Ys.y,Ys.z],pa(t,po,mo,_o,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,Xs=new Us,po=new F,mo=new F,_o=new F,pi=new F,mi=new F,Ni=new F,hs=new F,qs=new F,Ys=new F,Ui=new F;function pa(n,e,t,i,o){for(let s=0,r=n.length-3;s<=r;s+=3){Ui.fromArray(n,s);const a=o.x*Math.abs(Ui.x)+o.y*Math.abs(Ui.y)+o.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),d=i.dot(Ui);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const tp=new Us,ps=new F,ma=new F;class rc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tp.setFromPoints(e).getCenter(i);let o=0;for(let s=0,r=e.length;s<r;s++)o=Math.max(o,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ps,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ma)),this.expandByPoint(ps.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new F,_a=new F,js=new F,_i=new F,ga=new F,Zs=new F,xa=new F;class np{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){_a.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(_a);const s=e.distanceTo(t)*.5,r=-this.direction.dot(js),a=_i.dot(this.direction),l=-_i.dot(js),c=_i.lengthSq(),d=Math.abs(1-r*r);let u,f,p,x;if(d>0)if(u=r*l-a,f=r*a-l,x=s*d,u>=0)if(f>=-x)if(f<=x){const v=1/d;u*=v,f*=v,p=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-r*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(r*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=r>0?-s:s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(_a).addScaledVector(js,f),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),o=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,s,r,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),i>r||s>o||((s>i||isNaN(i))&&(i=s),(r<o||isNaN(o))&&(o=r),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>o)||((a>i||i!==i)&&(i=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,o,s){ga.subVectors(t,e),Zs.subVectors(i,e),xa.crossVectors(ga,Zs);let r=this.direction.dot(xa),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(_i,Zs));if(l<0)return null;const c=a*this.direction.dot(ga.cross(_i));if(c<0||l+c>r)return null;const d=-a*_i.dot(xa);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,o,s,r,a,l,c,d,u,f,p,x,v,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,s,r,a,l,c,d,u,f,p,x,v,m)}set(e,t,i,o,s,r,a,l,c,d,u,f,p,x,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=o,h[1]=s,h[5]=r,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=x,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/go.setFromMatrixColumn(e,0).length(),s=1/go.setFromMatrixColumn(e,1).length(),r=1/go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,s=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(o),c=Math.sin(o),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=r*d,p=r*u,x=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=x+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,x=c*d,v=c*u;t[0]=f+v*a,t[4]=x*a-p,t[8]=r*c,t[1]=r*u,t[5]=r*d,t[9]=-a,t[2]=p*a-x,t[6]=v+f*a,t[10]=r*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,x=c*d,v=c*u;t[0]=f-v*a,t[4]=-r*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=r*d,t[9]=v-f*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const f=r*d,p=r*u,x=a*d,v=a*u;t[0]=l*d,t[4]=x*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,x=a*l,v=a*c;t[0]=l*d,t[4]=v-f*u,t[8]=x*u+p,t[1]=u,t[5]=r*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+x,t[10]=f-v*u}else if(e.order==="XZY"){const f=r*l,p=r*c,x=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+v,t[5]=r*d,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,op)}lookAt(e,t,i){const o=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),gi.crossVectors(i,ln),gi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),gi.crossVectors(i,ln)),gi.normalize(),Ks.crossVectors(ln,gi),o[0]=gi.x,o[4]=Ks.x,o[8]=ln.x,o[1]=gi.y,o[5]=Ks.y,o[9]=ln.y,o[2]=gi.z,o[6]=Ks.z,o[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],x=i[2],v=i[6],m=i[10],h=i[14],E=i[3],g=i[7],y=i[11],L=i[15],R=o[0],A=o[4],P=o[8],b=o[12],M=o[1],I=o[5],_=o[9],S=o[13],D=o[2],z=o[6],k=o[10],$=o[14],G=o[3],J=o[7],te=o[11],ee=o[15];return s[0]=r*R+a*M+l*D+c*G,s[4]=r*A+a*I+l*z+c*J,s[8]=r*P+a*_+l*k+c*te,s[12]=r*b+a*S+l*$+c*ee,s[1]=d*R+u*M+f*D+p*G,s[5]=d*A+u*I+f*z+p*J,s[9]=d*P+u*_+f*k+p*te,s[13]=d*b+u*S+f*$+p*ee,s[2]=x*R+v*M+m*D+h*G,s[6]=x*A+v*I+m*z+h*J,s[10]=x*P+v*_+m*k+h*te,s[14]=x*b+v*S+m*$+h*ee,s[3]=E*R+g*M+y*D+L*G,s[7]=E*A+g*I+y*z+L*J,s[11]=E*P+g*_+y*k+L*te,s[15]=E*b+g*S+y*$+L*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],h=e[15];return x*(+s*l*u-o*c*u-s*a*f+i*c*f+o*a*p-i*l*p)+v*(+t*l*p-t*c*f+s*r*f-o*r*p+o*c*d-s*l*d)+m*(+t*c*u-t*a*p-s*r*u+i*r*p+s*a*d-i*c*d)+h*(-o*a*d-t*l*u+t*a*f+o*r*u-i*r*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],h=e[15],E=u*m*c-v*f*c+v*l*p-a*m*p-u*l*h+a*f*h,g=x*f*c-d*m*c-x*l*p+r*m*p+d*l*h-r*f*h,y=d*v*c-x*u*c+x*a*p-r*v*p-d*a*h+r*u*h,L=x*u*l-d*v*l-x*a*f+r*v*f+d*a*m-r*u*m,R=t*E+i*g+o*y+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(v*f*s-u*m*s-v*o*p+i*m*p+u*o*h-i*f*h)*A,e[2]=(a*m*s-v*l*s+v*o*c-i*m*c-a*o*h+i*l*h)*A,e[3]=(u*l*s-a*f*s-u*o*c+i*f*c+a*o*p-i*l*p)*A,e[4]=g*A,e[5]=(d*m*s-x*f*s+x*o*p-t*m*p-d*o*h+t*f*h)*A,e[6]=(x*l*s-r*m*s-x*o*c+t*m*c+r*o*h-t*l*h)*A,e[7]=(r*f*s-d*l*s+d*o*c-t*f*c-r*o*p+t*l*p)*A,e[8]=y*A,e[9]=(x*u*s-d*v*s-x*i*p+t*v*p+d*i*h-t*u*h)*A,e[10]=(r*v*s-x*a*s+x*i*c-t*v*c-r*i*h+t*a*h)*A,e[11]=(d*a*s-r*u*s-d*i*c+t*u*c+r*i*p-t*a*p)*A,e[12]=L*A,e[13]=(d*v*o-x*u*o+x*i*f-t*v*f-d*i*m+t*u*m)*A,e[14]=(x*a*o-r*v*o-x*i*l+t*v*l+r*i*m-t*a*m)*A,e[15]=(r*u*o-d*a*o+d*i*l-t*u*l-r*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,o=e.y,s=e.z;return t[0]*=i,t[4]*=o,t[8]*=s,t[1]*=i,t[5]*=o,t[9]*=s,t[2]*=i,t[6]*=o,t[10]*=s,t[3]*=i,t[7]*=o,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),s=1-i,r=e.x,a=e.y,l=e.z,c=s*r,d=s*a;return this.set(c*r+i,c*a-o*l,c*l+o*a,0,c*a+o*l,d*a+i,d*l-o*r,0,c*l-o*a,d*l+o*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,s,r){return this.set(1,i,s,0,e,1,r,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,d=r+r,u=a+a,f=s*c,p=s*d,x=s*u,v=r*d,m=r*u,h=a*u,E=l*c,g=l*d,y=l*u,L=i.x,R=i.y,A=i.z;return o[0]=(1-(v+h))*L,o[1]=(p+y)*L,o[2]=(x-g)*L,o[3]=0,o[4]=(p-y)*R,o[5]=(1-(f+h))*R,o[6]=(m+E)*R,o[7]=0,o[8]=(x+g)*A,o[9]=(m-E)*A,o[10]=(1-(f+v))*A,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let s=go.set(o[0],o[1],o[2]).length();const r=go.set(o[4],o[5],o[6]).length(),a=go.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),e.x=o[12],e.y=o[13],e.z=o[14],An.copy(this);const c=1/s,d=1/r,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),i.x=s,i.y=r,i.z=a,this}makePerspective(e,t,i,o,s,r,a=oi){const l=this.elements,c=2*s/(t-e),d=2*s/(i-o),u=(t+e)/(t-e),f=(i+o)/(i-o);let p,x;if(a===oi)p=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===Fr)p=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,o,s,r,a=oi){const l=this.elements,c=1/(t-e),d=1/(i-o),u=1/(r-s),f=(t+e)*c,p=(i+o)*d;let x,v;if(a===oi)x=(r+s)*u,v=-2*u;else if(a===Fr)x=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const go=new F,An=new Tt,ip=new F(0,0,0),op=new F(1,1,1),gi=new F,Ks=new F,ln=new F,od=new Tt,sd=new os;class pn{constructor(e=0,t=0,i=0,o=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,s=o[0],r=o[4],a=o[8],l=o[1],c=o[5],d=o[9],u=o[2],f=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sp=0;const rd=new F,xo=new os,Jn=new Tt,Js=new F,ms=new F,rp=new F,ap=new os,ad=new F(1,0,0),ld=new F(0,1,0),cd=new F(0,0,1),dd={type:"added"},lp={type:"removed"},vo={type:"childadded",child:null},va={type:"childremoved",child:null};class Wt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,t=new pn,i=new os,o=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tt},normalMatrix:{value:new He}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Js.copy(e):Js.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(ms,Js,this.up):Jn.lookAt(Js,ms,this.up),this.quaternion.setFromRotationMatrix(Jn),o&&(Jn.extractRotation(o.matrixWorld),xo.setFromRotationMatrix(Jn),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dd),vo.child=e,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dd),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));o.material=a}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),u=r(e.shapes),f=r(e.skeletons),p=r(e.animations),x=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=o,i;function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new F,Qn=new F,ya=new F,ei=new F,yo=new F,bo=new F,ud=new F,ba=new F,Ma=new F,wa=new F,Sa=new mt,Ea=new mt,Ta=new mt;class Pn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Rn.subVectors(e,t),o.cross(Rn);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(e,t,i,o,s){Rn.subVectors(o,t),Qn.subVectors(i,t),ya.subVectors(e,t);const r=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(ya),c=Qn.dot(Qn),d=Qn.dot(ya),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-a*d)*f,x=(r*d-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,o,s,r,a,l){return this.getBarycoord(e,t,i,o,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(r,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,i,o,s,r){return Sa.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),Sa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,o),r.setScalar(0),r.addScaledVector(Sa,s.x),r.addScaledVector(Ea,s.y),r.addScaledVector(Ta,s.z),r}static isFrontFacing(e,t,i,o){return Rn.subVectors(i,t),Qn.subVectors(e,t),Rn.cross(Qn).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,o,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,s=this.c;let r,a;yo.subVectors(o,i),bo.subVectors(s,i),ba.subVectors(e,i);const l=yo.dot(ba),c=bo.dot(ba);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,o);const d=yo.dot(Ma),u=bo.dot(Ma);if(d>=0&&u<=d)return t.copy(o);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(i).addScaledVector(yo,r);wa.subVectors(e,s);const p=yo.dot(wa),x=bo.dot(wa);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(bo,a);const m=d*x-p*u;if(m<=0&&u-d>=0&&p-x>=0)return ud.subVectors(s,o),a=(u-d)/(u-d+(p-x)),t.copy(o).addScaledVector(ud,a);const h=1/(m+v+f);return r=v*h,a=f*h,t.copy(i).addScaledVector(yo,r).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=it.workingColorSpace){if(e=$h(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Aa(r,s,e+1/3),this.g=Aa(r,s,e),this.b=Aa(r,s,e-1/3)}return it.toWorkingColorSpace(this,o),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=af[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return it.fromWorkingColorSpace(Yt.copy(this),e),Math.round(jt(Yt.r*255,0,255))*65536+Math.round(jt(Yt.g*255,0,255))*256+Math.round(jt(Yt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,o=Yt.g,s=Yt.b,r=Math.max(i,o,s),a=Math.min(i,o,s);let l,c;const d=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=d<=.5?u/(r+a):u/(2-r-a),r){case i:l=(o-s)/u+(o<s?6:0);break;case o:l=(s-i)/u+2;break;case s:l=(i-o)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Vt){it.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,o=Yt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Qs);const i=da(xi.h,Qs.h,t),o=da(xi.s,Qs.s,t),s=da(xi.l,Qs.l,t);return this.setHSL(i,o,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*o,this.g=s[1]*t+s[4]*i+s[7]*o,this.b=s[2]*t+s[5]*i+s[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Oe;Oe.NAMES=af;let cp=0;class ro extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ns(),this.name="",this.blending=Bo,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Qa&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=o(e.textures),r=o(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends ro{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new F,er=new Ue;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jc,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),o=nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),o=nn(o,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class lf extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cf extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dp=0;const xn=new Tt,Ra=new Wt,Mo=new F,cn=new Us,_s=new Us,Gt=new F;class rn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?cf:lf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,s=e.length;o<s;o++){const r=e[o];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Mt(i,3))}else{for(let i=0,o=t.count;i<o;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(cn.min,_s.min),cn.expandByPoint(Gt),Gt.addVectors(cn.max,_s.max),cn.expandByPoint(Gt)):(cn.expandByPoint(_s.min),cn.expandByPoint(_s.max))}cn.getCenter(i);let o=0;for(let s=0,r=e.count;s<r;s++)Gt.fromBufferAttribute(e,s),o=Math.max(o,i.distanceToSquared(Gt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Gt.fromBufferAttribute(a,c),l&&(Mo.fromBufferAttribute(e,c),Gt.add(Mo)),o=Math.max(o,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const c=new F,d=new F,u=new F,f=new Ue,p=new Ue,x=new Ue,v=new F,m=new F;function h(P,b,M){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,M),d.sub(c),u.sub(c),p.sub(f),x.sub(f);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(I),a[P].add(v),a[b].add(v),a[M].add(v),l[P].add(m),l[b].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,b=E.length;P<b;++P){const M=E[P],I=M.start,_=M.count;for(let S=I,D=I+_;S<D;S+=3)h(e.getX(S+0),e.getX(S+1),e.getX(S+2))}const g=new F,y=new F,L=new F,R=new F;function A(P){L.fromBufferAttribute(o,P),R.copy(L);const b=a[P];g.copy(b),g.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(R,b);const I=y.dot(l[P])<0?-1:1;r.setXYZW(P,g.x,g.y,g.z,I)}for(let P=0,b=E.length;P<b;++P){const M=E[P],I=M.start,_=M.count;for(let S=I,D=I+_;S<D;S+=3)A(e.getX(S+0)),A(e.getX(S+1)),A(e.getX(S+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const o=new F,s=new F,r=new F,a=new F,l=new F,c=new F,d=new F,u=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),d.subVectors(r,s),u.subVectors(o,s),d.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)o.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,s),u.subVectors(o,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*d;for(let h=0;h<d;h++)f[x++]=c[p++]}return new hn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(o[l]=d,s=!0)}s&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fd=new Tt,Fi=new np,tr=new rc,hd=new F,nr=new F,ir=new F,or=new F,Ca=new F,sr=new F,pd=new F,rr=new F;class ae extends Wt{constructor(e=new rn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(s&&a){sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(Ca.fromBufferAttribute(u,e),r?sr.addScaledVector(Ca,d):sr.addScaledVector(Ca.sub(t),d))}t.add(sr)}return t}raycast(e,t){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),!(tr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(tr,hd)===null||Fi.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(fd.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(fd),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let o;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,v=f.length;x<v;x++){const m=f[x],h=r[m.materialIndex],E=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,L=g;y<L;y+=3){const R=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);o=ar(this,h,e,i,c,d,u,R,A,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,h=v;m<h;m+=3){const E=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);o=ar(this,r,e,i,c,d,u,E,g,y),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,v=f.length;x<v;x++){const m=f[x],h=r[m.materialIndex],E=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,L=g;y<L;y+=3){const R=y,A=y+1,P=y+2;o=ar(this,h,e,i,c,d,u,R,A,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,h=v;m<h;m+=3){const E=m,g=m+1,y=m+2;o=ar(this,r,e,i,c,d,u,E,g,y),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function up(n,e,t,i,o,s,r,a){let l;if(e.side===Jt?l=i.intersectTriangle(r,s,o,!0,a):l=i.intersectTriangle(o,s,r,e.side===Ci,a),l===null)return null;rr.copy(a),rr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:n}}function ar(n,e,t,i,o,s,r,a,l,c){n.getVertexPosition(a,nr),n.getVertexPosition(l,ir),n.getVertexPosition(c,or);const d=up(n,e,t,i,nr,ir,or,pd);if(d){const u=new F;Pn.getBarycoord(pd,nr,ir,or,u),o&&(d.uv=Pn.getInterpolatedAttribute(o,a,l,c,u,new Ue)),s&&(d.uv1=Pn.getInterpolatedAttribute(s,a,l,c,u,new Ue)),r&&(d.normal=Pn.getInterpolatedAttribute(r,a,l,c,u,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Pn.getNormal(nr,ir,or,f.normal),d.face=f,d.barycoord=u}return d}class ut extends rn{constructor(e=1,t=1,i=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],u=[];let f=0,p=0;x("z","y","x",-1,-1,i,t,e,r,s,0),x("z","y","x",1,-1,i,t,-e,r,s,1),x("x","z","y",1,1,e,i,t,o,r,2),x("x","z","y",1,-1,e,i,-t,o,r,3),x("x","y","z",1,-1,e,t,i,o,s,4),x("x","y","z",-1,-1,e,t,-i,o,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(u,2));function x(v,m,h,E,g,y,L,R,A,P,b){const M=y/A,I=L/P,_=y/2,S=L/2,D=R/2,z=A+1,k=P+1;let $=0,G=0;const J=new F;for(let te=0;te<k;te++){const ee=te*I-S;for(let be=0;be<z;be++){const ye=be*M-_;J[v]=ye*E,J[m]=ee*g,J[h]=D,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[h]=R>0?1:-1,d.push(J.x,J.y,J.z),u.push(be/A),u.push(1-te/P),$+=1}}for(let te=0;te<P;te++)for(let ee=0;ee<A;ee++){const be=f+ee+z*te,ye=f+ee+z*(te+1),q=f+(ee+1)+z*(te+1),ne=f+(ee+1)+z*te;l.push(be,ye,ne),l.push(ye,q,ne),G+=6}a.addGroup(p,G,b),p+=G,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Yo(n[t]);for(const o in i)e[o]=i[o]}return e}function fp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function df(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const hp={clone:Yo,merge:Kt};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends ro{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?t.uniforms[o]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[o]={type:"m4",value:r.toArray()}:t.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uf extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new F,md=new Ue,_d=new Ue;class dn extends uf{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,md,_d),t.subVectors(_d,md)}setViewOffset(e,t,i,o,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*o/l,t-=r.offsetY*i/c,o*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wo=-90,So=1;class _p extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new dn(wo,So,e,t);o.layers=this.layers,this.add(o);const s=new dn(wo,So,e,t);s.layers=this.layers,this.add(s);const r=new dn(wo,So,e,t);r.layers=this.layers,this.add(r);const a=new dn(wo,So,e,t);a.layers=this.layers,this.add(a);const l=new dn(wo,So,e,t);l.layers=this.layers,this.add(l);const c=new dn(wo,So,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,s),e.setRenderTarget(i,1,o),e.render(t,r),e.setRenderTarget(i,2,o),e.render(t,a),e.setRenderTarget(i,3,o),e.render(t,l),e.setRenderTarget(i,4,o),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,o),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ff extends Qt{constructor(e,t,i,o,s,r,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Wo,super(e,t,i,o,s,r,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gp extends to{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new ff(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ut(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ti});s.uniforms.tEquirect.value=t;const r=new ae(o,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Bn),new _p(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,o){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,o);e.setRenderTarget(s)}}const Pa=new F,xp=new F,vp=new He;class $i{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Pa.subVectors(i,t).cross(xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pa),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vp.getNormalMatrix(e),o=this.coplanarPoint(Pa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new rc,lr=new F;class ac{constructor(e=new $i,t=new $i,i=new $i,o=new $i,s=new $i,r=new $i){this.planes=[e,t,i,o,s,r]}set(e,t,i,o,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,o=e.elements,s=o[0],r=o[1],a=o[2],l=o[3],c=o[4],d=o[5],u=o[6],f=o[7],p=o[8],x=o[9],v=o[10],m=o[11],h=o[12],E=o[13],g=o[14],y=o[15];if(i[0].setComponents(l-s,f-c,m-p,y-h).normalize(),i[1].setComponents(l+s,f+c,m+p,y+h).normalize(),i[2].setComponents(l+r,f+d,m+x,y+E).normalize(),i[3].setComponents(l-r,f-d,m-x,y-E).normalize(),i[4].setComponents(l-a,f-u,m-v,y-g).normalize(),t===oi)i[5].setComponents(l+a,f+u,m+v,y+g).normalize();else if(t===Fr)i[5].setComponents(a,u,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(lr.x=o.normal.x>0?e.max.x:e.min.x,lr.y=o.normal.y>0?e.max.y:e.min.y,lr.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hf(){let n=null,e=!1,t=null,i=null;function o(s,r){t(s,r),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yp(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){const x=u[f],v=u[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){const v=u[p];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:o,remove:s,update:r}}class Dt extends rn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const s=e/2,r=t/2,a=Math.floor(i),l=Math.floor(o),c=a+1,d=l+1,u=e/a,f=t/l,p=[],x=[],v=[],m=[];for(let h=0;h<d;h++){const E=h*f-r;for(let g=0;g<c;g++){const y=g*u-s;x.push(y,-E,0),v.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const g=E+c*h,y=E+c*(h+1),L=E+1+c*(h+1),R=E+1+c*h;p.push(g,y,R),p.push(y,L,R)}this.setIndex(p),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.widthSegments,e.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,v0=`struct PhysicalMaterial {
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
}`,y0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Hm=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:bp,alphahash_pars_fragment:Mp,alphamap_fragment:wp,alphamap_pars_fragment:Sp,alphatest_fragment:Ep,alphatest_pars_fragment:Tp,aomap_fragment:Ap,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Lp,beginnormal_vertex:Ip,bsdfs:Dp,iridescence_fragment:kp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:Gp,color_pars_vertex:Hp,color_vertex:Vp,common:Wp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:jp,emissivemap_pars_fragment:Zp,colorspace_fragment:Kp,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:h0,envmap_vertex:i0,fog_vertex:o0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:u0,lights_pars_begin:f0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:_0,lights_phong_pars_fragment:g0,lights_physical_fragment:x0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:b0,lights_fragment_end:M0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:I0,morphinstance_vertex:D0,morphcolor_vertex:k0,morphnormal_vertex:z0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:G0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Y0,packing:j0,premultiplied_alpha_fragment:Z0,project_vertex:K0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:om,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:dm,specularmap_pars_fragment:um,tonemapping_fragment:fm,tonemapping_pars_fragment:hm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:_m,uv_pars_vertex:gm,uv_vertex:xm,worldpos_vertex:vm,background_vert:ym,background_frag:bm,backgroundCube_vert:Mm,backgroundCube_frag:wm,cube_vert:Sm,cube_frag:Em,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Im,linedashed_frag:Dm,meshbasic_vert:km,meshbasic_frag:zm,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:Gm,meshphong_vert:Hm,meshphong_frag:Vm,meshphysical_vert:Wm,meshphysical_frag:$m,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:jm,shadow_vert:Zm,shadow_frag:Km,sprite_vert:Jm,sprite_frag:Qm},ce={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},On={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};On.physical={uniforms:Kt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const cr={r:0,b:0,g:0},Bi=new pn,e_=new Tt;function t_(n,e,t,i,o,s,r){const a=new Oe(0);let l=s===!0?0:1,c,d,u=null,f=0,p=null;function x(E){let g=E.isScene===!0?E.background:null;return g&&g.isTexture&&(g=(E.backgroundBlurriness>0?t:e).get(g)),g}function v(E){let g=!1;const y=x(E);y===null?h(a,l):y&&y.isColor&&(h(y,1),g=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,g){const y=x(g);y&&(y.isCubeTexture||y.mapping===Jr)?(d===void 0&&(d=new ae(new ut(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Yo(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),Bi.copy(g.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Bi)),d.material.toneMapped=it.getTransfer(y.colorSpace)!==pt,(u!==y||f!==y.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ae(new Dt(2,2),new Li({name:"BackgroundMaterial",uniforms:Yo(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,g){E.getRGB(cr,df(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,g,r)}return{getClearColor:function(){return a},setClearColor:function(E,g=1){a.set(E),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:m}}function n_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=f(null);let s=o,r=!1;function a(M,I,_,S,D){let z=!1;const k=u(S,_,I);s!==k&&(s=k,c(s.object)),z=p(M,S,_,D),z&&x(M,S,_,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,y(M,I,_,S),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,I,_){const S=_.wireframe===!0;let D=i[M.id];D===void 0&&(D={},i[M.id]=D);let z=D[I.id];z===void 0&&(z={},D[I.id]=z);let k=z[S];return k===void 0&&(k=f(l()),z[S]=k),k}function f(M){const I=[],_=[],S=[];for(let D=0;D<t;D++)I[D]=0,_[D]=0,S[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:_,attributeDivisors:S,object:M,attributes:{},index:null}}function p(M,I,_,S){const D=s.attributes,z=I.attributes;let k=0;const $=_.getAttributes();for(const G in $)if($[G].location>=0){const te=D[G];let ee=z[G];if(ee===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),te===void 0||te.attribute!==ee||ee&&te.data!==ee.data)return!0;k++}return s.attributesNum!==k||s.index!==S}function x(M,I,_,S){const D={},z=I.attributes;let k=0;const $=_.getAttributes();for(const G in $)if($[G].location>=0){let te=z[G];te===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ee={};ee.attribute=te,te&&te.data&&(ee.data=te.data),D[G]=ee,k++}s.attributes=D,s.attributesNum=k,s.index=S}function v(){const M=s.newAttributes;for(let I=0,_=M.length;I<_;I++)M[I]=0}function m(M){h(M,0)}function h(M,I){const _=s.newAttributes,S=s.enabledAttributes,D=s.attributeDivisors;_[M]=1,S[M]===0&&(n.enableVertexAttribArray(M),S[M]=1),D[M]!==I&&(n.vertexAttribDivisor(M,I),D[M]=I)}function E(){const M=s.newAttributes,I=s.enabledAttributes;for(let _=0,S=I.length;_<S;_++)I[_]!==M[_]&&(n.disableVertexAttribArray(_),I[_]=0)}function g(M,I,_,S,D,z,k){k===!0?n.vertexAttribIPointer(M,I,_,D,z):n.vertexAttribPointer(M,I,_,S,D,z)}function y(M,I,_,S){v();const D=S.attributes,z=_.getAttributes(),k=I.defaultAttributeValues;for(const $ in z){const G=z[$];if(G.location>=0){let J=D[$];if(J===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const te=J.normalized,ee=J.itemSize,be=e.get(J);if(be===void 0)continue;const ye=be.buffer,q=be.type,ne=be.bytesPerElement,_e=q===n.INT||q===n.UNSIGNED_INT||J.gpuType===ec;if(J.isInterleavedBufferAttribute){const re=J.data,Re=re.stride,De=J.offset;if(re.isInstancedInterleavedBuffer){for(let le=0;le<G.locationSize;le++)h(G.location+le,re.meshPerAttribute);M.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let le=0;le<G.locationSize;le++)g(G.location+le,ee/G.locationSize,q,te,Re*ne,(De+ee/G.locationSize*le)*ne,_e)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)h(G.location+re,J.meshPerAttribute);M.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let re=0;re<G.locationSize;re++)g(G.location+re,ee/G.locationSize,q,te,ee*ne,ee/G.locationSize*re*ne,_e)}}else if(k!==void 0){const te=k[$];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te)}}}}E()}function L(){P();for(const M in i){const I=i[M];for(const _ in I){const S=I[_];for(const D in S)d(S[D].object),delete S[D];delete I[_]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const _ in I){const S=I[_];for(const D in S)d(S[D].object),delete S[D];delete I[_]}delete i[M.id]}function A(M){for(const I in i){const _=i[I];if(_[M.id]===void 0)continue;const S=_[M.id];for(const D in S)d(S[D].object),delete S[D];delete _[M.id]}}function P(){b(),r=!0,s!==o&&(s=o,c(s.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function i_(n,e,t){let i;function o(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function r(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x];t.update(p,i,1)}function l(c,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)r(c[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=d[v]*f[v];t.update(x,i,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o_(n,e,t,i){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(A){return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function s_(n){const e=this;let t=null,i=0,o=!1,s=!1;const r=new $i,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||o;return o=f,i=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const x=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!o||x===null||x.length===0||s&&!m)s?d(null):c();else{const E=s?0:i,g=E*4;let y=h.clippingState||null;l.value=y,y=d(x,f,g,p);for(let L=0;L!==g;++L)y[L]=t[L];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,x){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const h=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,y=p;g!==v;++g,y+=4)r.copy(u[g]).applyMatrix4(E,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function r_(n){let e=new WeakMap;function t(r,a){return a===al?r.mapping=Wo:a===ll&&(r.mapping=$o),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===al||a===ll)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new gp(l.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",o),t(c.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pf extends uf{constructor(e=-1,t=1,i=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-e,r=i+e,a=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zo=4,gd=[.125,.215,.35,.446,.526,.582],Yi=20,La=new pf,xd=new Oe;let Ia=null,Da=0,ka=0,za=!1;const Xi=(1+Math.sqrt(5))/2,Eo=1/Xi,vd=[new F(-Xi,Eo,0),new F(Xi,Eo,0),new F(-Eo,0,Xi),new F(Eo,0,Xi),new F(0,Xi,-Eo),new F(0,Xi,Eo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,o,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,ka),this._renderer.xr.enabled=za,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:zs,format:In,colorSpace:ns,depthBuffer:!1},o=yd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a_(s)),this._blurMaterial=l_(s,e,t)}return o}_compileMaterial(e){const t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,o){const a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(xd),d.toneMapping=Ai,d.autoClear=!1;const p=new ri({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),x=new ae(new ut,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(xd),v=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):E===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;dr(o,E*g,h>2?g:0,g,g),d.setRenderTarget(o),v&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Wo||e.mapping===$o;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,La)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vd[(o-s-1)%vd.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,o,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,o,"latitudinal",s),this._halfBlur(r,e,i,i,o,"longitudinal",s)}_halfBlur(e,t,i,o,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new ae(this._lodPlanes[o],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),v=s/x,m=isFinite(s)?1+Math.floor(d*v):Yi;m>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const h=[];let E=0;for(let A=0;A<Yi;++A){const P=A/v,b=Math.exp(-P*P/2);h.push(b),A===0?E+=b:A<m&&(E+=2*b)}for(let A=0;A<h.length;A++)h[A]=h[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-i;const y=this._sizeLods[o],L=3*y*(o>g-zo?o-g+zo:0),R=4*(this._cubeSize-y);dr(t,L,R,3*y,2*y),l.setRenderTarget(t),l.render(u,La)}}function a_(n){const e=[],t=[],i=[];let o=n;const s=n-zo+1+gd.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);t.push(a);let l=1/a;r>n-zo?l=gd[r-n+zo-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,x=6,v=3,m=2,h=1,E=new Float32Array(v*x*p),g=new Float32Array(m*x*p),y=new Float32Array(h*x*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,P=R>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(b,v*x*R),g.set(f,m*x*R);const M=[R,R,R,R,R,R];y.set(M,h*x*R)}const L=new rn;L.setAttribute("position",new hn(E,v)),L.setAttribute("uv",new hn(g,m)),L.setAttribute("faceIndex",new hn(y,h)),e.push(L),o>zo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yd(n,e,t){const i=new to(n,e,t);return i.texture.mapping=Jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function l_(n,e,t){const i=new Float32Array(Yi),o=new F(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bd(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Md(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function c_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===al||l===ll,d=l===Wo||l===$o;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ul(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&o(p)?(t===null&&(t=new Ul(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function o(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function d_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function u_(n,e,t,i){const o={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const v=f.morphAttributes[x];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",r),delete o[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return o[f.id]===!0||(f.addEventListener("dispose",r),o[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const x in f)e.update(f[x],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const v=p[x];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,x=u.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let g=0,y=E.length;g<y;g+=3){const L=E[g+0],R=E[g+1],A=E[g+2];f.push(L,R,R,A,A,L)}}else if(x!==void 0){const E=x.array;v=x.version;for(let g=0,y=E.length/3-1;g<y;g+=3){const L=g+0,R=g+1,A=g+2;f.push(L,R,R,A,A,L)}}else return;const m=new(nf(f)?cf:lf)(f,1);m.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function d(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function f_(n,e,t){let i;function o(f){i=f}let s,r;function a(f){s=f.type,r=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*r),t.update(p,i,1)}function c(f,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,f*r,x),t.update(p,i,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];t.update(m,i,1)}function u(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/r,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,x);let h=0;for(let E=0;E<x;E++)h+=p[E]*v[E];t.update(h,i,1)}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function h_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function p_(n,e,t){const i=new WeakMap,o=new mt;function s(r,a,l){const c=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let b=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),x===!0&&(g=2),v===!0&&(g=3);let y=a.attributes.position.count*g,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*L*4*u),A=new sf(R,y,L,u);A.type=ii,A.needsUpdate=!0;const P=g*4;for(let M=0;M<u;M++){const I=m[M],_=h[M],S=E[M],D=y*L*4*M;for(let z=0;z<I.count;z++){const k=z*P;p===!0&&(o.fromBufferAttribute(I,z),R[D+k+0]=o.x,R[D+k+1]=o.y,R[D+k+2]=o.z,R[D+k+3]=0),x===!0&&(o.fromBufferAttribute(_,z),R[D+k+4]=o.x,R[D+k+5]=o.y,R[D+k+6]=o.z,R[D+k+7]=0),v===!0&&(o.fromBufferAttribute(S,z),R[D+k+8]=o.x,R[D+k+9]=o.y,R[D+k+10]=o.z,R[D+k+11]=S.itemSize===4?o.w:1)}}f={count:u,texture:A,size:new Ue(y,L)},i.set(a,f),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function m_(n,e,t,i){let o=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(o.get(u)!==c&&(e.update(u),o.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return u}function r(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class mf extends Qt{constructor(e,t,i,o,s,r,a,l,c,d=Go){if(d!==Go&&d!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Go&&(i=eo),i===void 0&&d===qo&&(i=Xo),super(null,o,s,r,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _f=new Qt,wd=new mf(1,1),gf=new sf,xf=new ep,vf=new ff,Sd=[],Ed=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let s=Sd[o];if(s===void 0&&(s=new Float32Array(o),Sd[o]=s),e!==0){i.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ta(n,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Rd.set(i),n.uniformMatrix2fv(this.addr,!1,Rd),Bt(t,i)}}function b_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Ad.set(i),n.uniformMatrix3fv(this.addr,!1,Ad),Bt(t,i)}}function M_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Td.set(i),n.uniformMatrix4fv(this.addr,!1,Td),Bt(t,i)}}function w_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function A_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function L_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(wd.compareFunction=tf,s=wd):s=_f,t.setTexture2D(e||s,o)}function I_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||xf,o)}function D_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||vf,o)}function k_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||gf,o)}function z_(n){switch(n){case 5126:return __;case 35664:return g_;case 35665:return x_;case 35666:return v_;case 35674:return y_;case 35675:return b_;case 35676:return M_;case 5124:case 35670:return w_;case 35667:case 35671:return S_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return k_}}function N_(n,e){n.uniform1fv(this.addr,e)}function U_(n,e){const t=ss(e,this.size,2);n.uniform2fv(this.addr,t)}function F_(n,e){const t=ss(e,this.size,3);n.uniform3fv(this.addr,t)}function O_(n,e){const t=ss(e,this.size,4);n.uniform4fv(this.addr,t)}function B_(n,e){const t=ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G_(n,e){const t=ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H_(n,e){const t=ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function $_(n,e){n.uniform3iv(this.addr,e)}function X_(n,e){n.uniform4iv(this.addr,e)}function q_(n,e){n.uniform1uiv(this.addr,e)}function Y_(n,e){n.uniform2uiv(this.addr,e)}function j_(n,e){n.uniform3uiv(this.addr,e)}function Z_(n,e){n.uniform4uiv(this.addr,e)}function K_(n,e,t){const i=this.cache,o=e.length,s=ta(t,o);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let r=0;r!==o;++r)t.setTexture2D(e[r]||_f,s[r])}function J_(n,e,t){const i=this.cache,o=e.length,s=ta(t,o);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let r=0;r!==o;++r)t.setTexture3D(e[r]||xf,s[r])}function Q_(n,e,t){const i=this.cache,o=e.length,s=ta(t,o);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let r=0;r!==o;++r)t.setTextureCube(e[r]||vf,s[r])}function eg(n,e,t){const i=this.cache,o=e.length,s=ta(t,o);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let r=0;r!==o;++r)t.setTexture2DArray(e[r]||gf,s[r])}function tg(n){switch(n){case 5126:return N_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return B_;case 35675:return G_;case 35676:return H_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return $_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return j_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return eg}}class ng{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}}class ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tg(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(e,t[a.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Cd(n,e){n.seq.push(e),n.map[e.id]=e}function sg(n,e,t){const i=n.name,o=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),r=Na.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===o){Cd(t,c===void 0?new ng(a,n,e):new ig(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new og(a),Cd(t,u)),t=u}}}class Tr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=e.getActiveUniform(t,o),r=e.getUniformLocation(t,s.name);sg(s,r,this)}}setValue(e,t,i,o){const s=this.map[t];s!==void 0&&s.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,s=e.length;o!==s;++o){const r=e[o];r.id in t&&i.push(r)}return i}}function Pd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rg=37297;let ag=0;function lg(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=o;r<s;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Ld=new He;function cg(n){it._getMatrix(Ld,it.workingColorSpace,n);const e=`mat3( ${Ld.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Id(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+lg(n.getShaderSource(e),r)}else return o}function dg(n,e){const t=cg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ug(n,e){let t;switch(e){case Rh:t="Linear";break;case Ch:t="Reinhard";break;case Ph:t="Cineon";break;case Vu:t="ACESFilmic";break;case Ih:t="AgX";break;case Dh:t="Neutral";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new F;function fg(){it.getLuminanceCoefficients(ur);const n=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function pg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(e,o),r=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function bs(n){return n!==""}function Dd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace(_g,xg)}const gg=new Map;function xg(n,e){let t=$e[e];if(t===void 0){const i=gg.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(n){return n.replace(vg,yg)}function yg(n,e,t,i){let o="";for(let s=parseInt(e);s<parseInt(t);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Mg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wo:case $o:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function Sg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kr:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case Ah:e="ENVMAP_BLENDING_ADD";break}return e}function Eg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Tg(n,e,t,i){const o=n.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=bg(t),c=Mg(t),d=wg(t),u=Sg(t),f=Eg(t),p=hg(t),x=pg(s),v=o.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),h.length>0&&(h+=`
`)):(m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),h=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ai?ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,dg("linearToOutputTexel",t.outputColorSpace),fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),r=Fl(r),r=Dd(r,t),r=kd(r,t),a=Fl(a),a=Dd(a,t),a=kd(a,t),r=zd(r),a=zd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=E+m+r,y=E+h+a,L=Pd(o,o.VERTEX_SHADER,g),R=Pd(o,o.FRAGMENT_SHADER,y);o.attachShader(v,L),o.attachShader(v,R),t.index0AttributeName!==void 0?o.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v);function A(I){if(n.debug.checkShaderErrors){const _=o.getProgramInfoLog(v).trim(),S=o.getShaderInfoLog(L).trim(),D=o.getShaderInfoLog(R).trim();let z=!0,k=!0;if(o.getProgramParameter(v,o.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,v,L,R);else{const $=Id(o,L,"vertex"),G=Id(o,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+_+`
`+$+`
`+G)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(S===""||D==="")&&(k=!1);k&&(I.diagnostics={runnable:z,programLog:_,vertexShader:{log:S,prefix:m},fragmentShader:{log:D,prefix:h}})}o.deleteShader(L),o.deleteShader(R),P=new Tr(o,v),b=mg(o,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(v,rg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ag++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let Ag=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cg(e),t.set(e,i)),i}}class Cg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Pg(n,e,t,i,o,s,r){const a=new rf,l=new Rg,c=new Set,d=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let p=o.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,_,S){const D=_.fog,z=S.geometry,k=b.isMeshStandardMaterial?_.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),G=$&&$.mapping===Jr?$.image.height:null,J=x[b.type];b.precision!==null&&(p=o.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=te!==void 0?te.length:0;let be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let ye,q,ne,_e;if(J){const ft=On[J];ye=ft.vertexShader,q=ft.fragmentShader}else ye=b.vertexShader,q=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const re=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),De=S.isInstancedMesh===!0,le=S.isBatchedMesh===!0,Ae=!!b.map,Le=!!b.matcap,st=!!$,U=!!b.aoMap,zt=!!b.lightMap,Ze=!!b.bumpMap,qe=!!b.normalMap,Ce=!!b.displacementMap,at=!!b.emissiveMap,de=!!b.metalnessMap,C=!!b.roughnessMap,w=b.anisotropy>0,H=b.clearcoat>0,j=b.dispersion>0,Q=b.iridescence>0,Y=b.sheen>0,Me=b.transmission>0,fe=w&&!!b.anisotropyMap,ge=H&&!!b.clearcoatMap,tt=H&&!!b.clearcoatNormalMap,oe=H&&!!b.clearcoatRoughnessMap,xe=Q&&!!b.iridescenceMap,Ie=Q&&!!b.iridescenceThicknessMap,ze=Y&&!!b.sheenColorMap,ve=Y&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,We=!!b.specularColorMap,gt=!!b.specularIntensityMap,N=Me&&!!b.transmissionMap,ue=Me&&!!b.thicknessMap,X=!!b.gradientMap,K=!!b.alphaMap,me=b.alphaTest>0,he=!!b.alphaHash,Be=!!b.extensions;let Pt=Ai;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const Xt={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:q,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:le,batchingColor:le&&S._colorsTexture!==null,instancing:De,instancingColor:De&&S.instanceColor!==null,instancingMorph:De&&S.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ns,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:Le,envMap:st,envMapMode:st&&$.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:zt,bumpMap:Ze,normalMap:qe,displacementMap:f&&Ce,emissiveMap:at,normalMapObjectSpace:qe&&b.normalMapType===Uh,normalMapTangentSpace:qe&&b.normalMapType===Qr,metalnessMap:de,roughnessMap:C,anisotropy:w,anisotropyMap:fe,clearcoat:H,clearcoatMap:ge,clearcoatNormalMap:tt,clearcoatRoughnessMap:oe,dispersion:j,iridescence:Q,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:Y,sheenColorMap:ze,sheenRoughnessMap:ve,specularMap:Qe,specularColorMap:We,specularIntensityMap:gt,transmission:Me,transmissionMap:N,thicknessMap:ue,gradientMap:X,opaque:b.transparent===!1&&b.blending===Bo&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:me,alphaHash:he,combine:b.combine,mapUv:Ae&&v(b.map.channel),aoMapUv:U&&v(b.aoMap.channel),lightMapUv:zt&&v(b.lightMap.channel),bumpMapUv:Ze&&v(b.bumpMap.channel),normalMapUv:qe&&v(b.normalMap.channel),displacementMapUv:Ce&&v(b.displacementMap.channel),emissiveMapUv:at&&v(b.emissiveMap.channel),metalnessMapUv:de&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:ge&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(b.sheenRoughnessMap.channel),specularMapUv:Qe&&v(b.specularMap.channel),specularColorMapUv:We&&v(b.specularColorMap.channel),specularIntensityMapUv:gt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ue&&v(b.thicknessMap.channel),alphaMapUv:K&&v(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(qe||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!z.attributes.uv&&(Ae||K),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:S.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===Jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function h(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(E(M,b),g(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function g(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const M=x[b.type];let I;if(M){const _=On[M];I=hp.clone(_.uniforms)}else I=b.uniforms;return I}function L(b,M){let I;for(let _=0,S=d.length;_<S;_++){const D=d[_];if(D.cacheKey===M){I=D,++I.usedTimes;break}}return I===void 0&&(I=new Tg(n,M,b,s),d.push(I)),I}function R(b){if(--b.usedTimes===0){const M=d.indexOf(b);d[M]=d[d.length-1],d.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:P}}function Lg(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function o(r,a,l){n.get(r)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:s}}function Ig(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fd(){const n=[];let e=0;const t=[],i=[],o=[];function s(){e=0,t.length=0,i.length=0,o.length=0}function r(u,f,p,x,v,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:v,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=x,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function a(u,f,p,x,v,m){const h=r(u,f,p,x,v,m);p.transmission>0?i.push(h):p.transparent===!0?o.push(h):t.push(h)}function l(u,f,p,x,v,m){const h=r(u,f,p,x,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?o.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||Ig),i.length>1&&i.sort(f||Ud),o.length>1&&o.sort(f||Ud)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:o,init:s,push:a,unshift:l,finish:d,sort:c}}function Dg(){let n=new WeakMap;function e(i,o){const s=n.get(i);let r;return s===void 0?(r=new Fd,n.set(i,[r])):o>=s.length?(r=new Fd,s.push(r)):r=s[o],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function kg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function zg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ng=0;function Ug(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fg(n){const e=new kg,t=zg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const o=new F,s=new Tt,r=new Tt;function a(c){let d=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,v=0,m=0,h=0,E=0,g=0,y=0,L=0,R=0,A=0;c.sort(Ug);for(let b=0,M=c.length;b<M;b++){const I=c[b],_=I.color,S=I.intensity,D=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=_.r*S,u+=_.g*S,f+=_.b*S;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],S);A++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=k,p++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(_).multiplyScalar(S),k.distance=D,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[v]=k;const $=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,$.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[v]=$.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=z,y++}v++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(_).multiplyScalar(S),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=k,m++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const $=I.shadow,G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=z,i.pointShadowMatrix[x]=I.shadow.matrix,g++}i.point[x]=k,x++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(S),k.groundColor.copy(I.groundColor).multiplyScalar(S),i.hemi[h]=k,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==E||P.numPointShadows!==g||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,P.directionalLength=p,P.pointLength=x,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=E,P.numPointShadows=g,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=A,i.version=Ng++)}function l(c,d){let u=0,f=0,p=0,x=0,v=0;const m=d.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const g=c[h];if(g.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(m),u++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(g.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),x++}else if(g.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Od(n){const e=new Fg(n),t=[],i=[];function o(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function r(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Og(n){let e=new WeakMap;function t(o,s=0){const r=e.get(o);let a;return r===void 0?(a=new Od(n),e.set(o,[a])):s>=r.length?(a=new Od(n),r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Bg extends ro{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gg extends ro{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Wg(n,e,t){let i=new ac;const o=new Ue,s=new Ue,r=new mt,a=new Bg({depthPacking:Nh}),l=new Gg,c={},d=t.maxTextureSize,u={[Ci]:Jt,[Jt]:Ci,[fn]:fn},f=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Hg,fragmentShader:Vg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new rn;x.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ae(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let h=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),_=n.state;_.setBlending(Ti),_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);const S=h!==ni&&this.type===ni,D=h===ni&&this.type!==ni;for(let z=0,k=R.length;z<k;z++){const $=R[z],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const J=G.getFrameExtents();if(o.multiply(J),s.copy(G.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(s.x=Math.floor(d/J.x),o.x=s.x*J.x,G.mapSize.x=s.x),o.y>d&&(s.y=Math.floor(d/J.y),o.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||S===!0||D===!0){const ee=this.type!==ni?{minFilter:kn,magFilter:kn}:{};G.map!==null&&G.map.dispose(),G.map=new to(o.x,o.y,ee),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const te=G.getViewportCount();for(let ee=0;ee<te;ee++){const be=G.getViewport(ee);r.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),_.viewport(r),G.updateMatrices($,ee),i=G.getFrustum(),y(A,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===ni&&E(G,P),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,I)};function E(R,A){const P=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new to(o.x,o.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,P,p,v,null)}function g(R,A,P,b){let M=null;const I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const _=M.uuid,S=A.uuid;let D=c[_];D===void 0&&(D={},c[_]=D);let z=D[S];z===void 0&&(z=M.clone(),D[S]=z,A.addEventListener("dispose",L)),M=z}if(M.visible=A.visible,M.wireframe=A.wireframe,b===ni?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const _=n.properties.get(M);_.light=P}return M}function y(R,A,P,b,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const S=e.update(R),D=R.material;if(Array.isArray(D)){const z=S.groups;for(let k=0,$=z.length;k<$;k++){const G=z[k],J=D[G.materialIndex];if(J&&J.visible){const te=g(R,J,b,M);R.onBeforeShadow(n,R,A,P,S,te,G),n.renderBufferDirect(P,null,S,te,R,G),R.onAfterShadow(n,R,A,P,S,te,G)}}}else if(D.visible){const z=g(R,D,b,M);R.onBeforeShadow(n,R,A,P,S,z,null),n.renderBufferDirect(P,null,S,z,R,null),R.onAfterShadow(n,R,A,P,S,z,null)}}const _=R.children;for(let S=0,D=_.length;S<D;S++)y(_[S],A,P,b,M)}function L(R){R.target.removeEventListener("dispose",L);for(const P in c){const b=c[P],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const $g={[el]:tl,[nl]:sl,[il]:rl,[Vo]:ol,[tl]:el,[sl]:nl,[rl]:il,[ol]:Vo};function Xg(n,e){function t(){let N=!1;const ue=new mt;let X=null;const K=new mt(0,0,0,0);return{setMask:function(me){X!==me&&!N&&(n.colorMask(me,me,me,me),X=me)},setLocked:function(me){N=me},setClear:function(me,he,Be,Pt,Xt){Xt===!0&&(me*=Pt,he*=Pt,Be*=Pt),ue.set(me,he,Be,Pt),K.equals(ue)===!1&&(n.clearColor(me,he,Be,Pt),K.copy(ue))},reset:function(){N=!1,X=null,K.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,X=null,K=null,me=null;return{setReversed:function(he){if(ue!==he){const Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const Pt=me;me=null,this.setClear(Pt)}ue=he},getReversed:function(){return ue},setTest:function(he){he?re(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(he){X!==he&&!N&&(n.depthMask(he),X=he)},setFunc:function(he){if(ue&&(he=$g[he]),K!==he){switch(he){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case Vo:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=he}},setLocked:function(he){N=he},setClear:function(he){me!==he&&(ue&&(he=1-he),n.clearDepth(he),me=he)},reset:function(){N=!1,X=null,K=null,me=null,ue=!1}}}function o(){let N=!1,ue=null,X=null,K=null,me=null,he=null,Be=null,Pt=null,Xt=null;return{setTest:function(ft){N||(ft?re(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(ft){ue!==ft&&!N&&(n.stencilMask(ft),ue=ft)},setFunc:function(ft,Sn,Yn){(X!==ft||K!==Sn||me!==Yn)&&(n.stencilFunc(ft,Sn,Yn),X=ft,K=Sn,me=Yn)},setOp:function(ft,Sn,Yn){(he!==ft||Be!==Sn||Pt!==Yn)&&(n.stencilOp(ft,Sn,Yn),he=ft,Be=Sn,Pt=Yn)},setLocked:function(ft){N=ft},setClear:function(ft){Xt!==ft&&(n.clearStencil(ft),Xt=ft)},reset:function(){N=!1,ue=null,X=null,K=null,me=null,he=null,Be=null,Pt=null,Xt=null}}}const s=new t,r=new i,a=new o,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,p=[],x=null,v=!1,m=null,h=null,E=null,g=null,y=null,L=null,R=null,A=new Oe(0,0,0),P=0,b=!1,M=null,I=null,_=null,S=null,D=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=$>=2);let J=null,te={};const ee=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),ye=new mt().fromArray(ee),q=new mt().fromArray(be);function ne(N,ue,X,K){const me=new Uint8Array(4),he=n.createTexture();n.bindTexture(N,he),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<X;Be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ue+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return he}const _e={};_e[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),re(n.DEPTH_TEST),r.setFunc(Vo),Ze(!1),qe(Wc),re(n.CULL_FACE),U(Ti);function re(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Re(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function De(N,ue){return u[N]!==ue?(n.bindFramebuffer(N,ue),u[N]=ue,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function le(N,ue){let X=p,K=!1;if(N){X=f.get(ue),X===void 0&&(X=[],f.set(ue,X));const me=N.textures;if(X.length!==me.length||X[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Be=me.length;he<Be;he++)X[he]=n.COLOR_ATTACHMENT0+he;X.length=me.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function Ae(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const Le={[qi]:n.FUNC_ADD,[ch]:n.FUNC_SUBTRACT,[dh]:n.FUNC_REVERSE_SUBTRACT};Le[uh]=n.MIN,Le[fh]=n.MAX;const st={[hh]:n.ZERO,[ph]:n.ONE,[mh]:n.SRC_COLOR,[Ja]:n.SRC_ALPHA,[bh]:n.SRC_ALPHA_SATURATE,[vh]:n.DST_COLOR,[gh]:n.DST_ALPHA,[_h]:n.ONE_MINUS_SRC_COLOR,[Qa]:n.ONE_MINUS_SRC_ALPHA,[yh]:n.ONE_MINUS_DST_COLOR,[xh]:n.ONE_MINUS_DST_ALPHA,[Mh]:n.CONSTANT_COLOR,[wh]:n.ONE_MINUS_CONSTANT_COLOR,[Sh]:n.CONSTANT_ALPHA,[Eh]:n.ONE_MINUS_CONSTANT_ALPHA};function U(N,ue,X,K,me,he,Be,Pt,Xt,ft){if(N===Ti){v===!0&&(Re(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),N!==lh){if(N!==m||ft!==b){if((h!==qi||y!==qi)&&(n.blendEquation(n.FUNC_ADD),h=qi,y=qi),ft)switch(N){case Bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,g=null,L=null,R=null,A.set(0,0,0),P=0,m=N,b=ft}return}me=me||ue,he=he||X,Be=Be||K,(ue!==h||me!==y)&&(n.blendEquationSeparate(Le[ue],Le[me]),h=ue,y=me),(X!==E||K!==g||he!==L||Be!==R)&&(n.blendFuncSeparate(st[X],st[K],st[he],st[Be]),E=X,g=K,L=he,R=Be),(Pt.equals(A)===!1||Xt!==P)&&(n.blendColor(Pt.r,Pt.g,Pt.b,Xt),A.copy(Pt),P=Xt),m=N,b=!1}function zt(N,ue){N.side===fn?Re(n.CULL_FACE):re(n.CULL_FACE);let X=N.side===Jt;ue&&(X=!X),Ze(X),N.blending===Bo&&N.transparent===!1?U(Ti):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function qe(N){N!==sh?(re(n.CULL_FACE),N!==I&&(N===Wc?n.cullFace(n.BACK):N===rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),I=N}function Ce(N){N!==_&&(k&&n.lineWidth(N),_=N)}function at(N,ue,X){N?(re(n.POLYGON_OFFSET_FILL),(S!==ue||D!==X)&&(n.polygonOffset(ue,X),S=ue,D=X)):Re(n.POLYGON_OFFSET_FILL)}function de(N){N?re(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+z-1),J!==N&&(n.activeTexture(N),J=N)}function w(N,ue,X){X===void 0&&(J===null?X=n.TEXTURE0+z-1:X=J);let K=te[X];K===void 0&&(K={type:void 0,texture:void 0},te[X]=K),(K.type!==N||K.texture!==ue)&&(J!==X&&(n.activeTexture(X),J=X),n.bindTexture(N,ue||_e[N]),K.type=N,K.texture=ue)}function H(){const N=te[J];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(N){ye.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function ve(N){q.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Qe(N,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let K=X.get(N);K===void 0&&(K=n.getUniformBlockIndex(ue,N.name),X.set(N,K))}function We(N,ue){const K=c.get(ue).get(N);l.get(ue)!==K&&(n.uniformBlockBinding(ue,K,N.__bindingPointIndex),l.set(ue,K))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},J=null,te={},u={},f=new WeakMap,p=[],x=null,v=!1,m=null,h=null,E=null,g=null,y=null,L=null,R=null,A=new Oe(0,0,0),P=0,b=!1,M=null,I=null,_=null,S=null,D=null,ye.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:re,disable:Re,bindFramebuffer:De,drawBuffers:le,useProgram:Ae,setBlending:U,setMaterial:zt,setFlipSided:Ze,setCullFace:qe,setLineWidth:Ce,setPolygonOffset:at,setScissorTest:de,activeTexture:C,bindTexture:w,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:xe,texImage3D:Ie,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:tt,texStorage3D:oe,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:ze,viewport:ve,reset:gt}}function Bd(n,e,t,i){const o=qg(i);switch(t){case Yu:return n*e;case Zu:return n*e;case Ku:return n*e*2;case Ju:return n*e/o.components*o.byteLength;case ic:return n*e/o.components*o.byteLength;case Qu:return n*e*2/o.components*o.byteLength;case oc:return n*e*2/o.components*o.byteLength;case ju:return n*e*3/o.components*o.byteLength;case In:return n*e*4/o.components*o.byteLength;case sc:return n*e*4/o.components*o.byteLength;case br:case Mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wr:case Sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case hl:return Math.max(n,16)*Math.max(e,8)/4;case dl:case fl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Er:case Ll:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ef:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qg(n){switch(n){case di:case $u:return{byteLength:1,components:1};case Ps:case Xu:case zs:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case eo:case ec:case ii:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yg(n,e,t,i,o,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return p?new OffscreenCanvas(C,w):Or("canvas")}function v(C,w,H){let j=1;const Q=de(C);if((Q.width>H||Q.height>H)&&(j=H/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(j*Q.width),Me=Math.floor(j*Q.height);u===void 0&&(u=x(Y,Me));const fe=w?x(Y,Me):u;return fe.width=Y,fe.height=Me,fe.getContext("2d").drawImage(C,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Me+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function g(C,w,H,j,Q=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=w;if(w===n.RED&&(H===n.FLOAT&&(Y=n.R32F),H===n.HALF_FLOAT&&(Y=n.R16F),H===n.UNSIGNED_BYTE&&(Y=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.R8UI),H===n.UNSIGNED_SHORT&&(Y=n.R16UI),H===n.UNSIGNED_INT&&(Y=n.R32UI),H===n.BYTE&&(Y=n.R8I),H===n.SHORT&&(Y=n.R16I),H===n.INT&&(Y=n.R32I)),w===n.RG&&(H===n.FLOAT&&(Y=n.RG32F),H===n.HALF_FLOAT&&(Y=n.RG16F),H===n.UNSIGNED_BYTE&&(Y=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RG8UI),H===n.UNSIGNED_SHORT&&(Y=n.RG16UI),H===n.UNSIGNED_INT&&(Y=n.RG32UI),H===n.BYTE&&(Y=n.RG8I),H===n.SHORT&&(Y=n.RG16I),H===n.INT&&(Y=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),H===n.UNSIGNED_INT&&(Y=n.RGB32UI),H===n.BYTE&&(Y=n.RGB8I),H===n.SHORT&&(Y=n.RGB16I),H===n.INT&&(Y=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),H===n.UNSIGNED_INT&&(Y=n.RGBA32UI),H===n.BYTE&&(Y=n.RGBA8I),H===n.SHORT&&(Y=n.RGBA16I),H===n.INT&&(Y=n.RGBA32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),w===n.RGBA){const Me=Q?ea:it.getTransfer(j);H===n.FLOAT&&(Y=n.RGBA32F),H===n.HALF_FLOAT&&(Y=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Y=Me===pt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(C,w){let H;return C?w===null||w===eo||w===Xo?H=n.DEPTH24_STENCIL8:w===ii?H=n.DEPTH32F_STENCIL8:w===Ps&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===eo||w===Xo?H=n.DEPTH_COMPONENT24:w===ii?H=n.DEPTH_COMPONENT32F:w===Ps&&(H=n.DEPTH_COMPONENT16),H}function L(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){const w=C.target;w.removeEventListener("dispose",R),P(w),w.isVideoTexture&&d.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),M(w)}function P(C){const w=i.get(C);if(w.__webglInit===void 0)return;const H=C.source,j=f.get(H);if(j){const Q=j[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(j).length===0&&f.delete(H)}i.remove(C)}function b(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const H=C.source,j=f.get(H);delete j[w.__cacheKey],r.memory.textures--}function M(C){const w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let Q=0;Q<w.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=C.textures;for(let j=0,Q=H.length;j<Q;j++){const Y=i.get(H[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),r.memory.textures--),i.remove(H[j])}i.remove(C)}let I=0;function _(){I=0}function S(){const C=I;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),I+=1,C}function D(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function z(C,w){const H=i.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,C,w);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function k(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function $(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function G(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ne(H,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const J={[Pi]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},te={[kn]:n.NEAREST,[kh]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},ee={[Fh]:n.NEVER,[Wh]:n.ALWAYS,[Oh]:n.LESS,[tf]:n.LEQUAL,[Bh]:n.EQUAL,[Vh]:n.GEQUAL,[Gh]:n.GREATER,[Hh]:n.NOTEQUAL};function be(C,w){if(w.type===ii&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===la||w.magFilter===$s||w.magFilter===Zi||w.minFilter===Bn||w.minFilter===la||w.minFilter===$s||w.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,J[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,te[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kn||w.minFilter!==$s&&w.minFilter!==Zi||w.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const j=w.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const Y=D(w);if(Y!==C.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,H=!0),Q[Y].usedTimes++;const Me=Q[C.__cacheKey];Me!==void 0&&(Q[C.__cacheKey].usedTimes--,Me.usedTimes===0&&b(w)),C.__cacheKey=Y,C.__webglTexture=Q[Y].texture}return H}function q(C,w,H){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);const Q=ye(C,w),Y=w.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+H);const Me=i.get(Y);if(Y.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const fe=it.getPrimaries(it.workingColorSpace),ge=w.colorSpace===Mi?null:it.getPrimaries(w.colorSpace),tt=w.colorSpace===Mi||fe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let oe=v(w.image,!1,o.maxTextureSize);oe=at(w,oe);const xe=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type);let ze=g(w.internalFormat,xe,Ie,w.colorSpace,w.isVideoTexture);be(j,w);let ve;const Qe=w.mipmaps,We=w.isVideoTexture!==!0,gt=Me.__version===void 0||Q===!0,N=Y.dataReady,ue=L(w,oe);if(w.isDepthTexture)ze=y(w.format===qo,w.type),gt&&(We?t.texStorage2D(n.TEXTURE_2D,1,ze,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ze,oe.width,oe.height,0,xe,Ie,null));else if(w.isDataTexture)if(Qe.length>0){We&&gt&&t.texStorage2D(n.TEXTURE_2D,ue,ze,Qe[0].width,Qe[0].height);for(let X=0,K=Qe.length;X<K;X++)ve=Qe[X],We?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,xe,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,X,ze,ve.width,ve.height,0,xe,Ie,ve.data);w.generateMipmaps=!1}else We?(gt&&t.texStorage2D(n.TEXTURE_2D,ue,ze,oe.width,oe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Ie,oe.data)):t.texImage2D(n.TEXTURE_2D,0,ze,oe.width,oe.height,0,xe,Ie,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ze,Qe[0].width,Qe[0].height,oe.depth);for(let X=0,K=Qe.length;X<K;X++)if(ve=Qe[X],w.format!==In)if(xe!==null)if(We){if(N)if(w.layerUpdates.size>0){const me=Bd(ve.width,ve.height,w.format,w.type);for(const he of w.layerUpdates){const Be=ve.data.subarray(he*me/ve.data.BYTES_PER_ELEMENT,(he+1)*me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,he,ve.width,ve.height,1,xe,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,oe.depth,xe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,ze,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,oe.depth,xe,Ie,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,ze,ve.width,ve.height,oe.depth,0,xe,Ie,ve.data)}else{We&&gt&&t.texStorage2D(n.TEXTURE_2D,ue,ze,Qe[0].width,Qe[0].height);for(let X=0,K=Qe.length;X<K;X++)ve=Qe[X],w.format!==In?xe!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,X,ze,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,xe,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,X,ze,ve.width,ve.height,0,xe,Ie,ve.data)}else if(w.isDataArrayTexture)if(We){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ze,oe.width,oe.height,oe.depth),N)if(w.layerUpdates.size>0){const X=Bd(oe.width,oe.height,w.format,w.type);for(const K of w.layerUpdates){const me=oe.data.subarray(K*X/oe.data.BYTES_PER_ELEMENT,(K+1)*X/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,oe.width,oe.height,1,xe,Ie,me)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ie,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,oe.width,oe.height,oe.depth,0,xe,Ie,oe.data);else if(w.isData3DTexture)We?(gt&&t.texStorage3D(n.TEXTURE_3D,ue,ze,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,oe.width,oe.height,oe.depth,0,xe,Ie,oe.data);else if(w.isFramebufferTexture){if(gt)if(We)t.texStorage2D(n.TEXTURE_2D,ue,ze,oe.width,oe.height);else{let X=oe.width,K=oe.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,ze,X,K,0,xe,Ie,null),X>>=1,K>>=1}}else if(Qe.length>0){if(We&&gt){const X=de(Qe[0]);t.texStorage2D(n.TEXTURE_2D,ue,ze,X.width,X.height)}for(let X=0,K=Qe.length;X<K;X++)ve=Qe[X],We?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe,Ie,ve):t.texImage2D(n.TEXTURE_2D,X,ze,xe,Ie,ve);w.generateMipmaps=!1}else if(We){if(gt){const X=de(oe);t.texStorage2D(n.TEXTURE_2D,ue,ze,X.width,X.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ie,oe)}else t.texImage2D(n.TEXTURE_2D,0,ze,xe,Ie,oe);m(w)&&h(j),Me.__version=Y.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ne(C,w,H){if(w.image.length!==6)return;const j=ye(C,w),Q=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const Y=i.get(Q);if(Q.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+H);const Me=it.getPrimaries(it.workingColorSpace),fe=w.colorSpace===Mi?null:it.getPrimaries(w.colorSpace),ge=w.colorSpace===Mi||Me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const tt=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let K=0;K<6;K++)!tt&&!oe?xe[K]=v(w.image[K],!0,o.maxCubemapSize):xe[K]=oe?w.image[K].image:w.image[K],xe[K]=at(w,xe[K]);const Ie=xe[0],ze=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),Qe=g(w.internalFormat,ze,ve,w.colorSpace),We=w.isVideoTexture!==!0,gt=Y.__version===void 0||j===!0,N=Q.dataReady;let ue=L(w,Ie);be(n.TEXTURE_CUBE_MAP,w);let X;if(tt){We&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Qe,Ie.width,Ie.height);for(let K=0;K<6;K++){X=xe[K].mipmaps;for(let me=0;me<X.length;me++){const he=X[me];w.format!==In?ze!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,he.width,he.height,ze,ve,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Qe,he.width,he.height,0,ze,ve,he.data)}}}else{if(X=w.mipmaps,We&&gt){X.length>0&&ue++;const K=de(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Qe,K.width,K.height)}for(let K=0;K<6;K++)if(oe){We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe[K].width,xe[K].height,ze,ve,xe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qe,xe[K].width,xe[K].height,0,ze,ve,xe[K].data);for(let me=0;me<X.length;me++){const Be=X[me].image[K].image;We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Be.width,Be.height,ze,ve,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Qe,Be.width,Be.height,0,ze,ve,Be.data)}}else{We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ze,ve,xe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qe,ze,ve,xe[K]);for(let me=0;me<X.length;me++){const he=X[me];We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,ze,ve,he.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Qe,ze,ve,he.image[K])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function _e(C,w,H,j,Q,Y){const Me=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),ge=g(H.internalFormat,Me,fe,H.colorSpace),tt=i.get(w),oe=i.get(H);if(oe.__renderTarget=w,!tt.__hasExternalTextures){const xe=Math.max(1,w.width>>Y),Ie=Math.max(1,w.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,ge,xe,Ie,w.depth,0,Me,fe,null):t.texImage2D(Q,Y,ge,xe,Ie,0,Me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),qe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,oe.__webglTexture,0,Ze(w)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,oe.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(C,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const j=w.depthTexture,Q=j&&j.isDepthTexture?j.type:null,Y=y(w.stencilBuffer,Q),Me=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Ze(w);qe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Y,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Y,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Y,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,C)}else{const j=w.textures;for(let Q=0;Q<j.length;Q++){const Y=j[Q],Me=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),ge=g(Y.internalFormat,Me,fe,Y.colorSpace),tt=Ze(w);H&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,ge,w.width,w.height):qe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const Q=j.__webglTexture,Y=Ze(w);if(w.depthTexture.format===Go)qe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(w.depthTexture.format===qo)qe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(C){const w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=j}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),re(w.__webglDepthbuffer[j],C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),re(w.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(C,w,H){const j=i.get(C);w!==void 0&&_e(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&De(C)}function Ae(C){const w=C.texture,H=i.get(C),j=i.get(w);C.addEventListener("dispose",A);const Q=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,r.memory.textures++),Y){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)H.__webglFramebuffer[fe][ge]=n.createFramebuffer()}else H.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)H.__webglFramebuffer[fe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Me)for(let fe=0,ge=Q.length;fe<ge;fe++){const tt=i.get(Q[fe]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),r.memory.textures++)}if(C.samples>0&&qe(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const ge=Q[fe];H.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const tt=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),xe=g(ge.internalFormat,tt,oe,ge.colorSpace,C.isXRRenderTarget===!0),Ie=Ze(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),re(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),be(n.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)_e(H.__webglFramebuffer[fe][ge],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else _e(H.__webglFramebuffer[fe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let fe=0,ge=Q.length;fe<ge;fe++){const tt=Q[fe],oe=i.get(tt);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),be(n.TEXTURE_2D,tt),_e(H.__webglFramebuffer,C,tt,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(tt)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),be(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)_e(H.__webglFramebuffer[ge],C,w,n.COLOR_ATTACHMENT0,fe,ge);else _e(H.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,fe,0);m(w)&&h(fe),t.unbindTexture()}C.depthBuffer&&De(C)}function Le(C){const w=C.textures;for(let H=0,j=w.length;H<j;H++){const Q=w[H];if(m(Q)){const Y=E(C),Me=i.get(Q).__webglTexture;t.bindTexture(Y,Me),h(Y),t.unbindTexture()}}}const st=[],U=[];function zt(C){if(C.samples>0){if(qe(C)===!1){const w=C.textures,H=C.width,j=C.height;let Q=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),fe=w.length>1;if(fe)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const tt=i.get(w[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,H,j,0,0,H,j,Q,n.NEAREST),l===!0&&(st.length=0,U.length=0,st.push(n.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(Y),U.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const tt=i.get(w[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ze(C){return Math.min(o.maxSamples,C.samples)}function qe(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(C){const w=r.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function at(C,w){const H=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ns&&H!==Mi&&(it.getTransfer(H)===pt?(j!==In||Q!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=_,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=le,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=qe}function jg(n,e){function t(i,o=Mi){let s;const r=it.getTransfer(o);if(i===di)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$u)return n.BYTE;if(i===Xu)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===eo)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===zs)return n.HALF_FLOAT;if(i===Yu)return n.ALPHA;if(i===ju)return n.RGB;if(i===In)return n.RGBA;if(i===Zu)return n.LUMINANCE;if(i===Ku)return n.LUMINANCE_ALPHA;if(i===Go)return n.DEPTH_COMPONENT;if(i===qo)return n.DEPTH_STENCIL;if(i===Ju)return n.RED;if(i===ic)return n.RED_INTEGER;if(i===Qu)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===sc)return n.RGBA_INTEGER;if(i===br||i===Mr||i===wr||i===Sr)if(r===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===ul||i===fl||i===hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===_l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pl||i===ml)return r===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_l)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gl||i===xl||i===vl||i===yl||i===bl||i===Ml||i===wl||i===Sl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Er||i===Ll||i===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Er)return r===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ef||i===Dl||i===kl||i===zl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Zg extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fe extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kg={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Qt,s=e.properties.get(o);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Li({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Dt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tx extends is{constructor(e,t){super();const i=this;let o=null,s=1,r=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,x=null;const v=new ex,m=t.getContextAttributes();let h=null,E=null;const g=[],y=[],L=new Ue;let R=null;const A=new dn;A.viewport=new mt;const P=new dn;P.viewport=new mt;const b=[A,P],M=new Zg;let I=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=g[q];return ne===void 0&&(ne=new Ua,g[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=g[q];return ne===void 0&&(ne=new Ua,g[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=g[q];return ne===void 0&&(ne=new Ua,g[q]=ne),ne.getHandSpace()};function S(q){const ne=y.indexOf(q.inputSource);if(ne===-1)return;const _e=g[ne];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||r),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){o.removeEventListener("select",S),o.removeEventListener("selectstart",S),o.removeEventListener("selectend",S),o.removeEventListener("squeeze",S),o.removeEventListener("squeezestart",S),o.removeEventListener("squeezeend",S),o.removeEventListener("end",D),o.removeEventListener("inputsourceschange",z);for(let q=0;q<g.length;q++){const ne=y[q];ne!==null&&(y[q]=null,g[q].disconnect(ne))}I=null,_=null,v.reset(),e.setRenderTarget(h),p=null,f=null,u=null,o=null,E=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(h=e.getRenderTarget(),o.addEventListener("select",S),o.addEventListener("selectstart",S),o.addEventListener("selectend",S),o.addEventListener("squeeze",S),o.addEventListener("squeezestart",S),o.addEventListener("squeezeend",S),o.addEventListener("end",D),o.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),o.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(o,t,ne),o.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new to(p.framebufferWidth,p.framebufferHeight,{format:In,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,_e=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?qo:Go,_e=m.stencil?Xo:eo);const Re={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(Re),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new to(f.textureWidth,f.textureHeight,{format:In,type:di,depthTexture:new mf(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await o.requestReferenceSpace(a),ye.setContext(o),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(q){for(let ne=0;ne<q.removed.length;ne++){const _e=q.removed[ne],re=y.indexOf(_e);re>=0&&(y[re]=null,g[re].disconnect(_e))}for(let ne=0;ne<q.added.length;ne++){const _e=q.added[ne];let re=y.indexOf(_e);if(re===-1){for(let De=0;De<g.length;De++)if(De>=y.length){y.push(_e),re=De;break}else if(y[De]===null){y[De]=_e,re=De;break}if(re===-1)break}const Re=g[re];Re&&Re.connect(_e)}}const k=new F,$=new F;function G(q,ne,_e){k.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const re=k.distanceTo($),Re=ne.projectionMatrix.elements,De=_e.projectionMatrix.elements,le=Re[14]/(Re[10]-1),Ae=Re[14]/(Re[10]+1),Le=(Re[9]+1)/Re[5],st=(Re[9]-1)/Re[5],U=(Re[8]-1)/Re[0],zt=(De[8]+1)/De[0],Ze=le*U,qe=le*zt,Ce=re/(-U+zt),at=Ce*-U;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const de=le+Ce,C=Ae+Ce,w=Ze-at,H=qe+(re-at),j=Le*Ae/C*de,Q=st*Ae/C*de;q.projectionMatrix.makePerspective(w,H,j,Q,de,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let ne=q.near,_e=q.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),M.near=P.near=A.near=ne,M.far=P.far=A.far=_e,(I!==M.near||_!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,_=M.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const re=q.parent,Re=M.cameras;J(M,re);for(let De=0;De<Re.length;De++)J(Re[De],re);Re.length===2?G(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),te(q,M,re)};function te(q,ne,_e){_e===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ee=null;function be(q,ne){if(d=ne.getViewerPose(c||r),x=ne,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let re=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let De=0;De<_e.length;De++){const le=_e[De];let Ae=null;if(p!==null)Ae=p.getViewport(le);else{const st=u.getViewSubImage(f,le);Ae=st.viewport,De===0&&(e.setRenderTargetTextures(E,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(E))}let Le=b[De];Le===void 0&&(Le=new dn,Le.layers.enable(De),Le.viewport=new mt,b[De]=Le),Le.matrix.fromArray(le.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(le.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),De===0&&(M.matrix.copy(Le.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Le)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const De=u.getDepthInformation(_e[0]);De&&De.isValid&&De.texture&&v.init(e,De,o.renderState)}}for(let _e=0;_e<g.length;_e++){const re=y[_e],Re=g[_e];re!==null&&Re!==void 0&&Re.update(re,ne,c||r)}ee&&ee(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const ye=new hf;ye.setAnimationLoop(be),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const Gi=new pn,nx=new Tt;function ix(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,df(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function o(m,h,E,g,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,E,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Jt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Jt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),g=E.envMap,y=E.envMapRotation;g&&(m.envMap.value=g,Gi.copy(y),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(Gi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=g*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Jt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function ox(n,e,t,i){let o={},s={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,g){const y=g.program;i.uniformBlockBinding(E,y)}function c(E,g){let y=o[E.id];y===void 0&&(x(E),y=d(E),o[E.id]=y,E.addEventListener("dispose",m));const L=g.program;i.updateUBOMapping(E,L);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function d(E){const g=u();E.__bindingPointIndex=g;const y=n.createBuffer(),L=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y}function u(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const g=o[E.id],y=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let R=0,A=y.length;R<A;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,M=P.length;b<M;b++){const I=P[b];if(p(I,R,b,L)===!0){const _=I.__offset,S=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let z=0;z<S.length;z++){const k=S[z],$=v(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,_+D,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,_,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,g,y,L){const R=E.value,A=g+"_"+y;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const P=L[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function x(E){const g=E.uniforms;let y=0;const L=16;for(let A=0,P=g.length;A<P;A++){const b=Array.isArray(g[A])?g[A]:[g[A]];for(let M=0,I=b.length;M<I;M++){const _=b[M],S=Array.isArray(_.value)?_.value:[_.value];for(let D=0,z=S.length;D<z;D++){const k=S[D],$=v(k),G=y%L,J=G%$.boundary,te=G+J;y+=J,te!==0&&L-te<$.storage&&(y+=L-te),_.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=y,y+=$.storage}}}const R=y%L;return R>0&&(y+=L-R),E.__size=y,E.__cache={},this}function v(E){const g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function m(E){const g=E.target;g.removeEventListener("dispose",m);const y=r.indexOf(g.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(o[g.id]),delete o[g.id],delete s[g.id]}function h(){for(const E in o)n.deleteBuffer(o[E]);r=[],o={},s={}}return{bind:l,update:c,dispose:h}}class sx{constructor(e={}){const{canvas:t=Xh(),context:i=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const x=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const E=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Ai,this.toneMappingExposure=1;const y=this;let L=!1,R=0,A=0,P=null,b=-1,M=null;const I=new mt,_=new mt;let S=null;const D=new Oe(0);let z=0,k=t.width,$=t.height,G=1,J=null,te=null;const ee=new mt(0,0,k,$),be=new mt(0,0,k,$);let ye=!1;const q=new ac;let ne=!1,_e=!1;const re=new Tt,Re=new Tt,De=new F,le=new mt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function st(){return P===null?G:1}let U=i;function zt(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){const O="webgl2";if(U=zt(O,T),U===null)throw zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ze,qe,Ce,at,de,C,w,H,j,Q,Y,Me,fe,ge,tt,oe,xe,Ie,ze,ve,Qe,We,gt,N;function ue(){Ze=new d_(U),Ze.init(),We=new jg(U,Ze),qe=new o_(U,Ze,e,We),Ce=new Xg(U,Ze),qe.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),at=new h_(U),de=new Lg,C=new Yg(U,Ze,Ce,de,qe,We,at),w=new r_(y),H=new c_(y),j=new yp(U),gt=new n_(U,j),Q=new u_(U,j,at,gt),Y=new m_(U,Q,j,at),ze=new p_(U,qe,C),oe=new s_(de),Me=new Pg(y,w,H,Ze,qe,gt,oe),fe=new ix(y,de),ge=new Dg,tt=new Og(Ze),Ie=new t_(y,w,H,Ce,Y,p,l),xe=new Wg(y,Y,qe),N=new ox(U,at,qe,Ce),ve=new i_(U,Ze,at),Qe=new f_(U,Ze,at),at.programs=Me.programs,y.capabilities=qe,y.extensions=Ze,y.properties=de,y.renderLists=ge,y.shadowMap=xe,y.state=Ce,y.info=at}ue();const X=new tx(y,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(k,$,!1))},this.getSize=function(T){return T.set(k,$)},this.setSize=function(T,O,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,$=O,t.width=Math.floor(T*G),t.height=Math.floor(O*G),V===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(k*G,$*G).floor()},this.setDrawingBufferSize=function(T,O,V){k=T,$=O,G=V,t.width=Math.floor(T*V),t.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,O,V,W){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,O,V,W),Ce.viewport(I.copy(ee).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(be)},this.setScissor=function(T,O,V,W){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,O,V,W),Ce.scissor(_.copy(be).multiplyScalar(G).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Ce.setScissorTest(ye=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,O=!0,V=!0){let W=0;if(T){let B=!1;if(P!==null){const se=P.texture.format;B=se===sc||se===oc||se===ic}if(B){const se=P.texture.type,pe=se===di||se===eo||se===Ps||se===Xo||se===tc||se===nc,we=Ie.getClearColor(),Se=Ie.getClearAlpha(),Ne=we.r,Ge=we.g,Ee=we.b;pe?(x[0]=Ne,x[1]=Ge,x[2]=Ee,x[3]=Se,U.clearBufferuiv(U.COLOR,0,x)):(v[0]=Ne,v[1]=Ge,v[2]=Ee,v[3]=Se,U.clearBufferiv(U.COLOR,0,v))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),tt.dispose(),de.dispose(),w.dispose(),H.dispose(),Y.dispose(),gt.dispose(),N.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",zc),X.removeEventListener("sessionend",Nc),zi.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=at.autoReset,O=xe.enabled,V=xe.autoUpdate,W=xe.needsUpdate,B=xe.type;ue(),at.autoReset=T,xe.enabled=O,xe.autoUpdate=V,xe.needsUpdate=W,xe.type=B}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const O=T.target;O.removeEventListener("dispose",Be),Pt(O)}function Pt(T){Xt(T),de.remove(T)}function Xt(T){const O=de.get(T).programs;O!==void 0&&(O.forEach(function(V){Me.releaseProgram(V)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,W,B,se){O===null&&(O=Ae);const pe=B.isMesh&&B.matrixWorld.determinant()<0,we=eh(T,O,V,W,B);Ce.setMaterial(W,pe);let Se=V.index,Ne=1;if(W.wireframe===!0){if(Se=Q.getWireframeAttribute(V),Se===void 0)return;Ne=2}const Ge=V.drawRange,Ee=V.attributes.position;let ot=Ge.start*Ne,xt=(Ge.start+Ge.count)*Ne;se!==null&&(ot=Math.max(ot,se.start*Ne),xt=Math.min(xt,(se.start+se.count)*Ne)),Se!==null?(ot=Math.max(ot,0),xt=Math.min(xt,Se.count)):Ee!=null&&(ot=Math.max(ot,0),xt=Math.min(xt,Ee.count));const vt=xt-ot;if(vt<0||vt===1/0)return;gt.setup(B,W,we,V,Se);let tn,lt=ve;if(Se!==null&&(tn=j.get(Se),lt=Qe,lt.setIndex(tn)),B.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*st()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(B.isLine){let Te=W.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*st()),B.isLineSegments?lt.setMode(U.LINES):B.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else B.isPoints?lt.setMode(U.POINTS):B.isSprite&&lt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Te=B._multiDrawStarts,jn=B._multiDrawCounts,ct=B._multiDrawCount,En=Se?j.get(Se).bytesPerElement:1,uo=de.get(W).currentProgram.getUniforms();for(let an=0;an<ct;an++)uo.setValue(U,"_gl_DrawID",an),lt.render(Te[an]/En,jn[an])}else if(B.isInstancedMesh)lt.renderInstances(ot,vt,B.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jn=Math.min(V.instanceCount,Te);lt.renderInstances(ot,vt,jn)}else lt.render(ot,vt)};function ft(T,O,V){T.transparent===!0&&T.side===fn&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,Vs(T,O,V),T.side=Ci,T.needsUpdate=!0,Vs(T,O,V),T.side=fn):Vs(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),h=tt.get(V),h.init(O),g.push(h),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),T!==V&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const W=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const se=B.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const we=se[pe];ft(we,V,B),W.add(we)}else ft(se,V,B),W.add(se)}),g.pop(),h=null,W},this.compileAsync=function(T,O,V=null){const W=this.compile(T,O,V);return new Promise(B=>{function se(){if(W.forEach(function(pe){de.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){B(T);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Sn=null;function Yn(T){Sn&&Sn(T)}function zc(){zi.stop()}function Nc(){zi.start()}const zi=new hf;zi.setAnimationLoop(Yn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(T){Sn=T,X.setAnimationLoop(T),T===null?zi.stop():zi.start()},X.addEventListener("sessionstart",zc),X.addEventListener("sessionend",Nc),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,P),h=tt.get(T,g.length),h.init(O),g.push(h),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Re),_e=this.localClippingEnabled,ne=oe.init(this.clippingPlanes,_e),m=ge.get(T,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&aa(se,O,-1/0,y.sortObjects)}aa(T,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,te),Le=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Le&&Ie.addToRenderList(m,T),this.info.render.frame++,ne===!0&&oe.beginShadows();const V=h.state.shadowsArray;xe.render(V,T,O),ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(h.setupLights(),O.isArrayCamera){const se=O.cameras;if(B.length>0)for(let pe=0,we=se.length;pe<we;pe++){const Se=se[pe];Fc(W,B,T,Se)}Le&&Ie.render(T);for(let pe=0,we=se.length;pe<we;pe++){const Se=se[pe];Uc(m,T,Se,Se.viewport)}}else B.length>0&&Fc(W,B,T,O),Le&&Ie.render(T),Uc(m,T,O);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,O),gt.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?(h=g[g.length-1],ne===!0&&oe.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function aa(T,O,V,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);const pe=Y.update(T),we=T.material;we.visible&&m.push(T,pe,we,V,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const pe=Y.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),le.copy(pe.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(we)){const Se=pe.groups;for(let Ne=0,Ge=Se.length;Ne<Ge;Ne++){const Ee=Se[Ne],ot=we[Ee.materialIndex];ot&&ot.visible&&m.push(T,pe,ot,V,le.z,Ee)}}else we.visible&&m.push(T,pe,we,V,le.z,null)}}const se=T.children;for(let pe=0,we=se.length;pe<we;pe++)aa(se[pe],O,V,W)}function Uc(T,O,V,W){const B=T.opaque,se=T.transmissive,pe=T.transparent;h.setupLightsView(V),ne===!0&&oe.setGlobalState(y.clippingPlanes,V),W&&Ce.viewport(I.copy(W)),B.length>0&&Hs(B,O,V),se.length>0&&Hs(se,O,V),pe.length>0&&Hs(pe,O,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Fc(T,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new to(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?zs:di,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const se=h.state.transmissionRenderTarget[W.id],pe=W.viewport||I;se.setSize(pe.z,pe.w);const we=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(D),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Le&&Ie.render(V);const Se=y.toneMapping;y.toneMapping=Ai;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),ne===!0&&oe.setGlobalState(y.clippingPlanes,W),Hs(T,V,W),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ee=0,ot=O.length;Ee<ot;Ee++){const xt=O[Ee],vt=xt.object,tn=xt.geometry,lt=xt.material,Te=xt.group;if(lt.side===fn&&vt.layers.test(W.layers)){const jn=lt.side;lt.side=Jt,lt.needsUpdate=!0,Oc(vt,V,W,tn,lt,Te),lt.side=jn,lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}y.setRenderTarget(we),y.setClearColor(D,z),Ne!==void 0&&(W.viewport=Ne),y.toneMapping=Se}function Hs(T,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,se=T.length;B<se;B++){const pe=T[B],we=pe.object,Se=pe.geometry,Ne=W===null?pe.material:W,Ge=pe.group;we.layers.test(V.layers)&&Oc(we,O,V,Se,Ne,Ge)}}function Oc(T,O,V,W,B,se){T.onBeforeRender(y,O,V,W,B,se),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,O,V,W,T,se),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,y.renderBufferDirect(V,O,W,B,T,se),B.side=Ci,B.needsUpdate=!0,y.renderBufferDirect(V,O,W,B,T,se),B.side=fn):y.renderBufferDirect(V,O,W,B,T,se),T.onAfterRender(y,O,V,W,B,se)}function Vs(T,O,V){O.isScene!==!0&&(O=Ae);const W=de.get(T),B=h.state.lights,se=h.state.shadowsArray,pe=B.state.version,we=Me.getParameters(T,B.state,se,O,V),Se=Me.getProgramCacheKey(we);let Ne=W.programs;W.environment=T.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(T.isMeshStandardMaterial?H:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Be),Ne=new Map,W.programs=Ne);let Ge=Ne.get(Se);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===pe)return Gc(T,we),Ge}else we.uniforms=Me.getUniforms(T),T.onBeforeCompile(we,y),Ge=Me.acquireProgram(we,Se),Ne.set(Se,Ge),W.uniforms=we.uniforms;const Ee=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),Gc(T,we),W.needsLights=nh(T),W.lightsStateVersion=pe,W.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function Bc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Tr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Gc(T,O){const V=de.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function eh(T,O,V,W,B){O.isScene!==!0&&(O=Ae),C.resetTextureUnits();const se=O.fog,pe=W.isMeshStandardMaterial?O.environment:null,we=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ns,Se=(W.isMeshStandardMaterial?H:w).get(W.envMap||pe),Ne=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color;let vt=Ai;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vt=y.toneMapping);const tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=tn!==void 0?tn.length:0,Te=de.get(W),jn=h.state.lights;if(ne===!0&&(_e===!0||T!==M)){const gn=T===M&&W.id===b;oe.setState(W,T,gn)}let ct=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==jn.state.version||Te.outputColorSpace!==we||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==Se||W.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==oe.numPlanes||Te.numIntersection!==oe.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==Ge||Te.morphTargets!==Ee||Te.morphNormals!==ot||Te.morphColors!==xt||Te.toneMapping!==vt||Te.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Te.__version=W.version);let En=Te.currentProgram;ct===!0&&(En=Vs(W,O,B));let uo=!1,an=!1,ds=!1;const yt=En.getUniforms(),Un=Te.uniforms;if(Ce.useProgram(En.program)&&(uo=!0,an=!0,ds=!0),W.id!==b&&(b=W.id,an=!0),uo||M!==T){Ce.buffers.depth.getReversed()?(re.copy(T.projectionMatrix),Yh(re),jh(re),yt.setValue(U,"projectionMatrix",re)):yt.setValue(U,"projectionMatrix",T.projectionMatrix),yt.setValue(U,"viewMatrix",T.matrixWorldInverse);const fi=yt.map.cameraPosition;fi!==void 0&&fi.setValue(U,De.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,an=!0,ds=!0)}if(B.isSkinnedMesh){yt.setOptional(U,B,"bindMatrix"),yt.setOptional(U,B,"bindMatrixInverse");const gn=B.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),yt.setValue(U,"boneTexture",gn.boneTexture,C))}B.isBatchedMesh&&(yt.setOptional(U,B,"batchingTexture"),yt.setValue(U,"batchingTexture",B._matricesTexture,C),yt.setOptional(U,B,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",B._indirectTexture,C),yt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",B._colorsTexture,C));const us=V.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&ze.update(B,V,En),(an||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,yt.setValue(U,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Un.envMap.value=Se,Un.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),an&&(yt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&th(Un,ds),se&&W.fog===!0&&fe.refreshFogUniforms(Un,se),fe.refreshMaterialUniforms(Un,W,G,$,h.state.transmissionRenderTarget[T.id]),Tr.upload(U,Bc(Te),Un,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Tr.upload(U,Bc(Te),Un,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(U,"center",B.center),yt.setValue(U,"modelViewMatrix",B.modelViewMatrix),yt.setValue(U,"normalMatrix",B.normalMatrix),yt.setValue(U,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let fi=0,hi=gn.length;fi<hi;fi++){const Hc=gn[fi];N.update(Hc,En),N.bind(Hc,En)}}return En}function th(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function nh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,V){de.get(T.texture).__webglTexture=O,de.get(T.depthTexture).__webglTexture=V;const W=de.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const V=de.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){P=T,R=O,A=V;let W=!0,B=null,se=!1,pe=!1;if(T){const Se=de.get(T);if(Se.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Se.__hasExternalTextures)C.rebindTextures(T,de.get(T.texture).__webglTexture,de.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&de.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Ge=de.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][V]:B=Ge[O],se=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?B=de.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[V]:B=Ge,I.copy(T.viewport),_.copy(T.scissor),S=T.scissorTest}else I.copy(ee).multiplyScalar(G).floor(),_.copy(be).multiplyScalar(G).floor(),S=ye;if(Ce.bindFramebuffer(U.FRAMEBUFFER,B)&&W&&Ce.drawBuffers(T,B),Ce.viewport(I),Ce.scissor(_),Ce.setScissorTest(S),se){const Se=de.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,V)}else if(pe){const Se=de.get(T.texture),Ne=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Ne)}b=-1},this.readRenderTargetPixels=function(T,O,V,W,B,se,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){Ce.bindFramebuffer(U.FRAMEBUFFER,we);try{const Se=T.texture,Ne=Se.format,Ge=Se.type;if(!qe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&V>=0&&V<=T.height-B&&U.readPixels(O,V,W,B,We.convert(Ne),We.convert(Ge),se)}finally{const Se=P!==null?de.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,O,V,W,B,se,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){const Se=T.texture,Ne=Se.format,Ge=Se.type;if(!qe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-W&&V>=0&&V<=T.height-B){Ce.bindFramebuffer(U.FRAMEBUFFER,we);const Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),U.readPixels(O,V,W,B,We.convert(Ne),We.convert(Ge),0);const ot=P!==null?de.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,ot);const xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qh(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(Ee),U.deleteSync(xt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,V=0){T.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-V),B=Math.floor(T.image.width*W),se=Math.floor(T.image.height*W),pe=O!==null?O.x:0,we=O!==null?O.y:0;C.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,pe,we,B,se),Ce.unbindTexture()},this.copyTextureToTexture=function(T,O,V=null,W=null,B=0){T.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],O=arguments[2],B=arguments[3]||0,V=null);let se,pe,we,Se,Ne,Ge,Ee,ot,xt;const vt=T.isCompressedTexture?T.mipmaps[B]:T.image;V!==null?(se=V.max.x-V.min.x,pe=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Ne=V.min.y,Ge=V.isBox3?V.min.z:0):(se=vt.width,pe=vt.height,we=vt.depth||1,Se=0,Ne=0,Ge=0),W!==null?(Ee=W.x,ot=W.y,xt=W.z):(Ee=0,ot=0,xt=0);const tn=We.convert(O.format),lt=We.convert(O.type);let Te;O.isData3DTexture?(C.setTexture3D(O,0),Te=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Te=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Te=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const jn=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),En=U.getParameter(U.UNPACK_SKIP_PIXELS),uo=U.getParameter(U.UNPACK_SKIP_ROWS),an=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const ds=T.isDataArrayTexture||T.isData3DTexture,yt=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Un=de.get(T),us=de.get(O),gn=de.get(Un.__renderTarget),fi=de.get(us.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let hi=0;hi<we;hi++)ds&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(T).__webglTexture,B,Ge+hi),T.isDepthTexture?(yt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(O).__webglTexture,B,xt+hi),U.blitFramebuffer(Se,Ne,se,pe,Ee,ot,se,pe,U.DEPTH_BUFFER_BIT,U.NEAREST)):yt?U.copyTexSubImage3D(Te,B,Ee,ot,xt+hi,Se,Ne,se,pe):U.copyTexSubImage2D(Te,B,Ee,ot,xt+hi,Se,Ne,se,pe);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Te,B,Ee,ot,xt,se,pe,we,tn,lt,vt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,B,Ee,ot,xt,se,pe,we,tn,vt.data):U.texSubImage3D(Te,B,Ee,ot,xt,se,pe,we,tn,lt,vt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Ee,ot,se,pe,tn,lt,vt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Ee,ot,vt.width,vt.height,tn,vt.data):U.texSubImage2D(U.TEXTURE_2D,B,Ee,ot,se,pe,tn,lt,vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,jn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,En),U.pixelStorei(U.UNPACK_SKIP_ROWS,uo),U.pixelStorei(U.UNPACK_SKIP_IMAGES,an),B===0&&O.generateMipmaps&&U.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V=null,W=null,B=0){return T.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],O=arguments[3],B=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,V,W,B)},this.initRenderTarget=function(T){de.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,Ce.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class cc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yf extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class no extends Qt{constructor(e,t,i,o,s,r,a,l,c){super(e,t,i,o,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dc extends rn{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,i=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:o},t=Math.floor(t),o=jt(o,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],d=1/t,u=new F,f=new Ue,p=new F,x=new F,v=new F;let m=0,h=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,h=e[E+1].y-e[E].y,p.x=h*1,p.y=-m,p.z=h*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[E+1].x-e[E].x,h=e[E+1].y-e[E].y,p.x=h*1,p.y=-m,p.z=h*0,x.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(x)}for(let E=0;E<=t;E++){const g=i+E*d*o,y=Math.sin(g),L=Math.cos(g);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*y,u.y=e[R].y,u.z=e[R].x*L,r.push(u.x,u.y,u.z),f.x=E/t,f.y=R/(e.length-1),a.push(f.x,f.y);const A=l[3*R+0]*y,P=l[3*R+1],b=l[3*R+0]*L;c.push(A,P,b)}}for(let E=0;E<t;E++)for(let g=0;g<e.length-1;g++){const y=g+E*e.length,L=y,R=y+e.length,A=y+e.length+1,P=y+1;s.push(L,R,P),s.push(A,P,R)}this.setIndex(s),this.setAttribute("position",new Mt(r,3)),this.setAttribute("uv",new Mt(a,2)),this.setAttribute("normal",new Mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.points,e.segments,e.phiStart,e.phiLength)}}class wi extends rn{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new F,d=new Ue;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*o;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(r[f]/e+1)/2,d.y=(r[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ft extends rn{constructor(e=1,t=1,i=1,o=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;o=Math.floor(o),s=Math.floor(s);const d=[],u=[],f=[],p=[];let x=0;const v=[],m=i/2;let h=0;E(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function E(){const y=new F,L=new F;let R=0;const A=(t-e)/i;for(let P=0;P<=s;P++){const b=[],M=P/s,I=M*(t-e)+e;for(let _=0;_<=o;_++){const S=_/o,D=S*l+a,z=Math.sin(D),k=Math.cos(D);L.x=I*z,L.y=-M*i+m,L.z=I*k,u.push(L.x,L.y,L.z),y.set(z,A,k).normalize(),f.push(y.x,y.y,y.z),p.push(S,1-M),b.push(x++)}v.push(b)}for(let P=0;P<o;P++)for(let b=0;b<s;b++){const M=v[b][P],I=v[b+1][P],_=v[b+1][P+1],S=v[b][P+1];(e>0||b!==0)&&(d.push(M,I,S),R+=3),(t>0||b!==s-1)&&(d.push(I,_,S),R+=3)}c.addGroup(h,R,0),h+=R}function g(y){const L=x,R=new Ue,A=new F;let P=0;const b=y===!0?e:t,M=y===!0?1:-1;for(let _=1;_<=o;_++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),x++;const I=x;for(let _=0;_<=o;_++){const D=_/o*l+a,z=Math.cos(D),k=Math.sin(D);A.x=b*k,A.y=m*M,A.z=b*z,u.push(A.x,A.y,A.z),f.push(0,M,0),R.x=z*.5+.5,R.y=k*.5*M+.5,p.push(R.x,R.y),x++}for(let _=0;_<o;_++){const S=L+_,D=I+_;y===!0?d.push(D,D+1,S):d.push(D+1,D,S),P+=3}c.addGroup(h,P,y===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uc extends Ft{constructor(e=1,t=1,i=32,o=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,i,o,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new uc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fc extends rn{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const s=[],r=[];a(o),c(i),d(),this.setAttribute("position",new Mt(s,3)),this.setAttribute("normal",new Mt(s.slice(),3)),this.setAttribute("uv",new Mt(r,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const g=new F,y=new F,L=new F;for(let R=0;R<t.length;R+=3)p(t[R+0],g),p(t[R+1],y),p(t[R+2],L),l(g,y,L,E)}function l(E,g,y,L){const R=L+1,A=[];for(let P=0;P<=R;P++){A[P]=[];const b=E.clone().lerp(y,P/R),M=g.clone().lerp(y,P/R),I=R-P;for(let _=0;_<=I;_++)_===0&&P===R?A[P][_]=b:A[P][_]=b.clone().lerp(M,_/I)}for(let P=0;P<R;P++)for(let b=0;b<2*(R-P)-1;b++){const M=Math.floor(b/2);b%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function c(E){const g=new F;for(let y=0;y<s.length;y+=3)g.x=s[y+0],g.y=s[y+1],g.z=s[y+2],g.normalize().multiplyScalar(E),s[y+0]=g.x,s[y+1]=g.y,s[y+2]=g.z}function d(){const E=new F;for(let g=0;g<s.length;g+=3){E.x=s[g+0],E.y=s[g+1],E.z=s[g+2];const y=m(E)/2/Math.PI+.5,L=h(E)/Math.PI+.5;r.push(y,1-L)}x(),u()}function u(){for(let E=0;E<r.length;E+=6){const g=r[E+0],y=r[E+2],L=r[E+4],R=Math.max(g,y,L),A=Math.min(g,y,L);R>.9&&A<.1&&(g<.2&&(r[E+0]+=1),y<.2&&(r[E+2]+=1),L<.2&&(r[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function p(E,g){const y=E*3;g.x=e[y+0],g.y=e[y+1],g.z=e[y+2]}function x(){const E=new F,g=new F,y=new F,L=new F,R=new Ue,A=new Ue,P=new Ue;for(let b=0,M=0;b<s.length;b+=9,M+=6){E.set(s[b+0],s[b+1],s[b+2]),g.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),R.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),P.set(r[M+4],r[M+5]),L.copy(E).add(g).add(y).divideScalar(3);const I=m(L);v(R,M+0,E,I),v(A,M+2,g,I),v(P,M+4,y,I)}}function v(E,g,y,L){L<0&&E.x===1&&(r[g]=E.x-1),y.x===0&&y.z===0&&(r[g]=L/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.vertices,e.indices,e.radius,e.details)}}class hc extends fc{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hc(e.radius,e.detail)}}class Ye extends rn{constructor(e=1,t=32,i=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const d=[],u=new F,f=new F,p=[],x=[],v=[],m=[];for(let h=0;h<=i;h++){const E=[],g=h/i;let y=0;h===0&&r===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(o+R*s)*Math.sin(r+g*a),u.y=e*Math.cos(r+g*a),u.z=e*Math.sin(o+R*s)*Math.sin(r+g*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(R+y,1-g),E.push(c++)}d.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const g=d[h][E+1],y=d[h][E],L=d[h+1][E],R=d[h+1][E+1];(h!==0||r>0)&&p.push(g,y,R),(h!==i-1||l<Math.PI)&&p.push(y,L,R)}this.setIndex(p),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vn extends rn{constructor(e=1,t=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const r=[],a=[],l=[],c=[],d=new F,u=new F,f=new F;for(let p=0;p<=i;p++)for(let x=0;x<=o;x++){const v=x/o*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(x/o),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=o;x++){const v=(o+1)*p+x-1,m=(o+1)*(p-1)+x-1,h=(o+1)*(p-1)+x,E=(o+1)*p+x;r.push(v,m,E),r.push(m,h,E)}this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jo extends ro{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bf extends jo{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rx extends ro{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends ro{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pc extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ax extends pc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fa=new Tt,Gd=new F,Hd=new F;class Mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hd),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vd=new Tt,gs=new F,Oa=new F;class lx extends Mf{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),i.position.copy(gs),Oa.copy(i.position),Oa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Oa),i.updateMatrixWorld(),o.makeTranslation(-gs.x,-gs.y,-gs.z),Vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd)}}class wf extends pc{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new lx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cx extends Mf{constructor(){super(new pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends pc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function et(n){let e=n>>>0||1;return{get state(){return e>>>0},set state(t){e=t>>>0||1},next(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},range(t,i){return t+this.next()*(i-t)},pick(t){return t[Math.floor(this.next()*t.length)]}}}const Br=2,No=5e3,dx=new Set(["theft","disturbance","assault","kill","accident","found_corpse","noise","sabotage"]);function Gr(){const n=[];let e=0;return{events:n,append(t,i){if(!dx.has(t))throw new Error(`event type non valido: ${t}`);const o=i.severity??.5;if(!(o>=0&&o<=1))throw new Error(`severity fuori range: ${o}`);const s={id:`ev${++e}`,t:i.t??0,type:t,severity:o,x:i.x??0,z:i.z??0,actorId:i.actorId??null,victimId:i.victimId??null,place:i.place??"sconosciuto",moved:!!i.moved,witnesses:[]};for(n.push(s);n.length>No;)n.shift();return s},addWitness(t,i){t.witnesses.includes(i)||t.witnesses.push(i)},byId(t){return n.find(i=>i.id===t)},serialize(){return{seq:e,events:n}},restore(t){e=t.seq??0,n.length=0;const i=t.events??[],o=Math.max(0,i.length-No);for(let s=o;s<i.length;s++)n.push(i[s])}}}const je={size:100,road:{minX:-50,maxX:50,minZ:-4,maxZ:4},piazza:{cx:37,cz:20,w:18,d:16},buildings:[{id:"bar",name:"Bar Centrale",x:-20,z:20,w:16,d:12,h:5,interior:!0,door:{side:"S",at:-20,width:2.4}},{id:"b2",name:"Palazzo (appartamenti)",x:12,z:20,w:8,d:12,h:9},{id:"b3",name:"Casa B3",x:24,z:20,w:8,d:12,h:6},{id:"b4",name:"Casa B4",x:-18,z:-20,w:14,d:10,h:6},{id:"b5",name:"Casa B5",x:10,z:-20,w:16,d:10,h:5}],coverWalls:[{x:29.5,z:14,w:5,d:.5},{x:-32.4,z:16,w:.5,d:5}],nodes:{road_w:{x:-40,z:0},road_c:{x:0,z:0},road_e:{x:44,z:0},vic_n:{x:17,z:13},vic_s:{x:18,z:-2},pia_c:{x:37,z:20},pia_w:{x:29,z:20},pia_e:{x:44,z:20},bar_in:{x:-20,z:20},bar_out:{x:-20,z:11},b4_door:{x:-18,z:-14},b5_door:{x:10,z:-14},sq_s:{x:0,z:-10},pia_s:{x:37,z:8},apt:{x:12,z:12.3},svc_in:{x:-34.5,z:20},svc_out:{x:-32,z:8},court:{x:-20,z:30},north_c:{x:-20,z:33},north_w:{x:-30,z:33},north_e:{x:30,z:33}},edges:[["road_w","road_c"],["road_c","road_e"],["road_c","vic_s"],["vic_s","vic_n"],["pia_w","pia_c"],["pia_c","pia_e"],["pia_c","pia_s"],["pia_s","vic_n"],["pia_s","pia_w"],["vic_s","road_c"],["road_c","sq_s"],["sq_s","b4_door"],["sq_s","b5_door"],["bar_out","road_c"],["bar_in","bar_out"],["road_e","pia_e"],["pia_e","pia_s"],["apt","vic_n"],["apt","vic_s"],["svc_in","svc_out"],["svc_out","road_w"],["court","north_c"],["north_c","north_w"],["north_c","north_e"],["north_w","road_w"],["north_e","pia_e"]],props:[{kind:"lamp",x:-30,z:6},{kind:"lamp",x:-5,z:-6},{kind:"lamp",x:18,z:12},{kind:"lamp",x:34,z:26},{kind:"lamp",x:-38,z:24},{kind:"bench",x:33,z:24},{kind:"bench",x:40,z:17},{kind:"crates",x:15.8,z:8},{kind:"yardstack",x:-38,z:20},{kind:"tree",x:-34,z:24},{kind:"tree",x:40,z:-8},{kind:"tree",x:-8,z:-28}]};function Sf(){return{yardstack:{kind:"sabotage",x:-38,z:20,state:"ok"}}}const $d={road_w:"strada ovest",road_c:"strada centrale",road_e:"strada est",vic_n:"vicolo nord",vic_s:"vicolo sud",pia_c:"piazza",pia_w:"piazza ovest",pia_e:"piazza est",pia_s:"ingresso piazza",bar_in:"bar (interno)",bar_out:"fuori dal bar",b4_door:"casa sud-ovest",b5_door:"casa sud-est",sq_s:"piazzale sud",apt:"palazzo (portone)",svc_in:"deposito",svc_out:"piazzale deposito",court:"corte retrostante",north_c:"vicolo nord",north_w:"vicolo nord-ovest",north_e:"vicolo nord-est"},Zo=.35,io=.15,ie=(n,e,t,i,o)=>({minX:n,maxX:e,minZ:t,maxZ:i,id:o}),Ko=(n,e,t,i,o)=>ie(n,e,t-i/2,t+i/2,o),oo=(n,e,t,i,o)=>ie(t-i/2,t+i/2,n,e,o);function ui(n,e,t,i,o){const s=[];let r=n;const a=[...i].sort((l,c)=>l[0]-c[0]);for(const[l,c]of a)l>r&&s.push(Ko(r,l,t,Zo,o)),r=Math.max(r,c);return r<e&&s.push(Ko(r,e,t,Zo,o)),s}function Wn(n,e,t,i,o){const s=[];let r=n;const a=[...i].sort((l,c)=>l[0]-c[0]);for(const[l,c]of a)l>r&&s.push(oo(r,l,t,Zo,o)),r=Math.max(r,c);return r<e&&s.push(oo(r,e,t,Zo,o)),s}function $n(n,e,t,i,o){const s=[];let r=n;const a=[...i].sort((l,c)=>l[0]-c[0]);for(const[l,c]of a)l>r&&s.push(Ko(r,l,t,io,o)),r=Math.max(r,c);return r<e&&s.push(Ko(r,e,t,io,o)),s}function zn(n,e,t,i,o){const s=[];let r=n;const a=[...i].sort((l,c)=>l[0]-c[0]);for(const[l,c]of a)l>r&&s.push(oo(r,l,t,io,o)),r=Math.max(r,c);return r<e&&s.push(oo(r,e,t,io,o)),s}const dt=(n,e,t,i,o,s,r,a,l={})=>({id:n,x:e,z:t,axis:i,w:o,h:l.h??2.1,y:s??0,type:r,state:a,lockedBy:l.lockedBy??null,openAngle:l.openAngle??1.85,openMs:650,closeMs:800}),Je=(n,e,t,i,o,s,r,a,l={})=>({id:n,x:e,z:t,axis:i,w:o,y0:s,h:r,state:a,passable:!!l.passable,fixed:!!l.fixed,peek:l.peek??null}),ux={id:"b2",type:"residential",label:"Palazzo — appartamento modernizzato",x0:8,x1:16,z0:14,z1:26,floors:2,hero:!0,theme:"modernized",rooms:[{id:"b2_hall",purpose:"stairwell",x0:8.35,z0:14.2,x1:10.9,z1:25.8,y:0},{id:"b2_living",purpose:"living_kitchen",x0:11.1,z0:14.2,x1:15.8,z1:19.9,y:0},{id:"b2_bed",purpose:"bedroom",x0:11.1,z0:20.1,x1:15.8,z1:25.8,y:0},{id:"b2_bath",purpose:"bathroom",x0:13.9,z0:22.1,x1:15.8,z1:25.8,y:0},{id:"b2_loft",purpose:"studio",x0:11.1,z0:14.2,x1:15.8,z1:25.8,y:3},{id:"b2_bathU",purpose:"bathroom",x0:13.9,z0:22.1,x1:15.8,z1:25.8,y:3},{id:"b2_landU",purpose:"landing",x0:8.35,z0:21,x1:10.9,z1:22.6,y:3}],walls:[...ui(8,16,14,[[10.3,11.7],[13,14]],"b2_s"),...ui(8,16,26,[[13,14]],"b2_n"),...Wn(14,26,8,[],"b2_w"),...Wn(14,26,16,[],"b2_e"),...zn(14.175,25.825,11,[[17.5,18.5],[21.3,22.3]],"b2_hallE"),...$n(11.075,15.825,20,[[13.2,14.2]],"b2_mid"),...zn(22,25.825,13.8,[],"b2_podW"),...$n(13.875,15.825,22,[[14.3,15.1]],"b2_podS"),oo(15,22.6,9.5,io,"b2_stairE")],wallsU:[],furniture:[ie(14.4,15.8,14.175,14.975,"b2_kitchen"),ie(14.5,15.3,14.975,15.775,"b2_fridge"),ie(11.2,11.9,15.6,17.6,"b2_sofa"),ie(12.4,13.2,16,17.2,"b2_coffee"),ie(15.2,15.8,16.1,17.1,"b2_tv"),ie(14.3,15.5,18,19,"b2_dining"),ie(11.2,12.9,23.5,25.5,"b2_bed"),ie(11.075,11.675,20.5,22.5,"b2_ward"),ie(14.5,15.7,20.3,21.1,"b2_desk"),ie(14,15.7,24,25.7,"b2_tub"),ie(14.1,14.7,22.4,23,"b2_wc"),ie(15,15.6,22.3,22.8,"b2_sink"),ie(11.5,13.5,25,25.8,"b2U_kit"),ie(11.3,13.1,14.5,16.5,"b2U_bed"),ie(15.2,15.8,14.5,16.5,"b2U_ward"),ie(11.2,12.4,23,23.8,"b2U_desk"),ie(14.3,15,16.5,18.5,"b2U_sofa"),ie(13.3,14.1,16.9,18.1,"b2U_coffee"),ie(12,13,14.2,14.6,"b2U_shelf"),ie(9.575,9.725,21,22.6,"b2_balustrade")],stairs:[{id:"b2_stair",x0:8.35,x1:9.425,z0:15,z1:21,axis:"z",y0:0,y1:3}],slabU:[{x0:9.575,x1:15.825,z0:14.175,z1:25.825},{x0:8.35,x1:11,z0:21,z1:22.6}],doors:[dt("door_b2_main",11,14,"x",1.4,0,"residential_front","closed"),dt("door_b2_apt",13.5,14,"x",1,0,"apartment","closed",{lockedBy:"key_apt"}),dt("door_b2_rear",13.5,26,"x",1,0,"service","closed"),dt("door_b2_hallG",11,18,"z",1,0,"interior","open"),dt("door_b2_hallU",11,21.8,"z",1,3,"interior","open"),dt("door_b2_in1",13.7,20,"x",1,0,"interior","open"),dt("door_b2_bathG",14.7,22,"x",.8,0,"bathroom","closed"),dt("door_b2_bathU",14.7,22,"x",.8,3,"bathroom","closed")],windows:[Je("win_b2_apt",9.5,14,"x",1.1,1,1.3,"closed",{peek:"Dentro: vano scala con cassette della posta."}),Je("win_b2_g2",15,14,"x",1.1,1,1.3,"closed",{peek:"Dentro: soggiorno con divano e televisore."}),Je("win_b2_upS",12.5,14,"x",1.1,4,1.3,"closed",{}),Je("win_b2_upN",12.5,26,"x",1.1,4,1.3,"closed",{}),Je("win_b2_w1",8,18,"z",1.1,1,1.3,"closed",{}),Je("win_b2_e1",16,22,"z",1.1,1,1.3,"closed",{}),Je("win_b2_g3",15.2,14,"x",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b2_upS2",14.8,14,"x",1.1,4,1.3,"closed",{fixed:!0}),Je("win_b2_nG",10.5,26,"x",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b2_upN2",14.8,26,"x",1.1,4,1.3,"closed",{fixed:!0}),Je("win_b2_w2",8,22,"z",1.1,4,1.3,"closed",{fixed:!0}),Je("win_b2_e2",16,18,"z",1.1,4,1.3,"closed",{fixed:!0})],lights:[{id:"b2_liv",x:13.4,z:17.2,y:2.8,warm:16767392},{id:"b2_bed",x:12.4,z:22.6,y:2.8,warm:16769720},{id:"b2_loft",x:13.4,z:19,y:5.8,warm:14214399},{id:"b2_hall",x:9.7,z:19,y:2.8,warm:16771524}]},fx={id:"b3",type:"commercial",label:"Alimentari + appartamento",x0:20,x1:28,z0:14,z1:26,floors:2,hero:!0,theme:"shop_worn",rooms:[{id:"b3_sales",purpose:"sales_floor",x0:20.2,z0:14.2,x1:26.4,z1:21.4,y:0},{id:"b3_back",purpose:"storage",x0:20.2,z0:21.6,x1:26.4,z1:25.8,y:0},{id:"b3_wc",purpose:"restroom",x0:22.1,z0:23.1,x1:23.9,z1:25.8,y:0},{id:"b3_aptU",purpose:"living_bed",x0:20.2,z0:14.2,x1:27.8,z1:25.8,y:3},{id:"b3_wcU",purpose:"restroom",x0:22.1,z0:23.1,x1:23.9,z1:25.8,y:3}],walls:[...ui(20,28,14,[[21.4,22.6],[23.2,24.8]],"b3_s"),...ui(20,28,26,[[23.5,24.5]],"b3_n"),...Wn(14,26,20,[[23.4,24.6]],"b3_w"),...Wn(14,26,28,[],"b3_e"),...$n(20.175,26.45,21.5,[[25.3,26.3]],"b3_mid"),...zn(23,25.825,22,[],"b3_podW"),...$n(22,24,23,[[22.5,23.3]],"b3_podS"),...zn(23,25.825,24,[],"b3_podE"),oo(15,22.6,26.525,io,"b3_stairW")],wallsU:[],furniture:[ie(20.3,20.9,15,18.5,"b3_shelfW"),ie(25.3,25.9,15.5,18.5,"b3_shelfE"),ie(22.5,23.5,16.5,18.5,"b3_gondola"),ie(23,25,19.5,20.3,"b3_counter"),ie(20.3,21.1,19.8,20.6,"b3_fridge"),ie(24.5,26.3,24.9,25.7,"b3_rack"),ie(20.3,21.5,24.5,25.5,"b3_boxes"),ie(24.3,25.5,22.3,23.1,"b3_prep"),ie(22.2,22.8,24.8,25.4,"b3_wcB"),ie(23.2,23.8,24.9,25.4,"b3_wcS"),ie(20.5,22.3,14.5,16.5,"b3U_bed"),ie(24.8,25.6,14.2,15,"b3U_ward"),ie(22.8,24,16.5,17.5,"b3U_table"),ie(20.5,21.2,18.5,20.5,"b3U_sofa"),ie(25,26,14.2,14.6,"b3U_shelf"),ie(27,27.8,22.8,24.8,"b3U_kit"),ie(22.2,22.8,24.8,25.4,"b3U_wcB"),ie(23.2,23.8,24.9,25.4,"b3U_wcS")],stairs:[{id:"b3_stair",x0:26.6,x1:27.7,z0:15,z1:21,axis:"z",y0:0,y1:3}],slabU:[{x0:20.175,x1:27.825,z0:14.175,z1:25.825}],doors:[dt("door_b3_shop",24,14,"x",1.6,0,"shop_glass","open"),dt("door_b3_back",24,26,"x",1,0,"service","closed",{lockedBy:"key_b3"}),dt("door_b3_staff",25.8,21.5,"x",1,0,"staff","closed"),dt("door_b3_wc",22.9,23,"x",.8,0,"bathroom","closed"),dt("door_b3_wcU",22.9,23,"x",.8,3,"bathroom","closed")],windows:[Je("win_b3_shop",22,14,"x",1.2,.9,1.4,"closed",{peek:"Dentro: scaffali pieni e cassette di frutta."}),Je("win_b3_side",20,24,"z",1.2,.6,1.2,"closed",{passable:!0,peek:"Magazzino: scatoloni e scaffali. La finestra e' bassa."}),Je("win_b3_upS",24,14,"x",1.1,4,1.3,"closed",{}),Je("win_b3_upN",22,26,"x",1.1,4,1.3,"closed",{}),Je("win_b3_disp",26,14,"x",1.2,.9,1.4,"closed",{fixed:!0}),Je("win_b3_nG",21.5,26,"x",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b3_eG",28,18,"z",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b3_eU",28,22,"z",1.1,4,1.3,"closed",{fixed:!0})],lights:[{id:"b3_sales",x:23.2,z:18,y:2.8,warm:16773328},{id:"b3_back",x:23,z:23.6,y:2.8,warm:14213352},{id:"b3_aptU",x:23.6,z:19,y:5.8,warm:16769720}]},hx={id:"b4",type:"residential",label:"Casa familiare — due generazioni",x0:-25,x1:-11,z0:-25,z1:-15,floors:2,hero:!0,theme:"older_family",rooms:[{id:"b4_living",purpose:"living_dining_kitchen",x0:-24.8,z0:-24.8,x1:-16.6,z1:-15.2,y:0},{id:"b4_bed1",purpose:"bedroom",x0:-16.4,z0:-20.1,x1:-11.2,z1:-15.2,y:0},{id:"b4_bed2",purpose:"bedroom",x0:-16.4,z0:-24.8,x1:-11.2,z1:-20.3,y:0},{id:"b4_bath",purpose:"bathroom",x0:-12.9,z0:-24.8,x1:-11.2,z1:-22.9,y:0},{id:"b4_loft",purpose:"studio",x0:-24.8,z0:-24.8,x1:-11.2,z1:-15.2,y:3},{id:"b4_bathU",purpose:"bathroom",x0:-12.9,z0:-24.8,x1:-11.2,z1:-22.9,y:3}],walls:[...ui(-25,-11,-15,[[-18.6,-17.4]],"b4_n"),...ui(-25,-11,-25,[[-18.5,-17.5]],"b4_s"),...Wn(-25,-15,-25,[],"b4_w"),...Wn(-25,-15,-11,[[-20.6,-19.4]],"b4_e"),...zn(-24.825,-15.175,-16.5,[[-22.3,-21.3],[-17.3,-16.3]],"b4_vert"),...$n(-16.425,-11.175,-20.2,[[-14.2,-13.2]],"b4_horiz"),...zn(-24.825,-22.8,-13,[],"b4_podW"),...$n(-13,-11.175,-22.8,[[-12.5,-11.7]],"b4_podN"),oo(-24,-16.8,-23.55,io,"b4_stairE")],wallsU:[],furniture:[ie(-22,-20,-16.9,-16.2,"b4_sofa"),ie(-21.7,-20.7,-18,-17,"b4_coffee"),ie(-17.2,-16.6,-19,-17.8,"b4_shelf"),ie(-19.5,-18.7,-17.5,-16.7,"b4_arm"),ie(-22.5,-21,-20.5,-19.3,"b4_dining"),ie(-24.5,-21.5,-24.8,-24.2,"b4_kitchen"),ie(-21.2,-20.4,-24.8,-24,"b4_fridge"),ie(-15.3,-13.5,-17.1,-15.2,"b4_bed1"),ie(-11.9,-11.2,-17.5,-15.5,"b4_ward1"),ie(-12.8,-11.4,-19.5,-18.7,"b4_desk1"),ie(-16,-14.2,-24.5,-22.5,"b4_bed2"),ie(-11.9,-11.2,-21.3,-20.4,"b4_ward2"),ie(-12.9,-12.35,-24.75,-24.05,"b4_shower"),ie(-11.65,-11.2,-24.7,-24.1,"b4_wc"),ie(-11.65,-11.2,-23.6,-23.1,"b4_sink"),ie(-22,-20.2,-16.8,-14.9,"b4U_bed"),ie(-16,-14,-24.7,-23.9,"b4U_kit"),ie(-12.9,-12.35,-24.75,-24.05,"b4U_shower"),ie(-11.65,-11.2,-24.7,-24.1,"b4U_wc"),ie(-11.65,-11.2,-23.6,-23.1,"b4U_sink"),ie(-20.5,-19,-22,-21,"b4U_desk"),ie(-14.5,-13,-17.5,-16.5,"b4U_sofa"),ie(-18,-16.8,-16.8,-16,"b4U_shelf")],stairs:[{id:"b4_stair",x0:-24.825,x1:-23.625,z0:-24,z1:-18,axis:"z",y0:0,y1:3}],slabU:[{x0:-24.825,x1:-11.175,z0:-24.825,z1:-15.175}],doors:[dt("door_b4_main",-18,-15,"x",1.2,0,"residential_front","closed"),dt("door_b4_back",-18,-25,"x",1,0,"service","closed"),dt("door_b4_e2",-16.5,-21.8,"z",1,0,"interior","open"),dt("door_b4_in",-13.7,-20.2,"x",1,0,"interior","open"),dt("door_b4_bath",-12.1,-22.8,"x",.8,0,"bathroom","closed"),dt("door_b4_bathU",-12.1,-22.8,"x",.8,3,"bathroom","closed")],windows:[Je("win_b4_n1",-23,-15,"x",1.1,1,1.3,"closed",{peek:"Dentro: soggiorno con divano e libreria."}),Je("win_b4_n2",-13,-15,"x",1.1,1,1.3,"closed",{peek:"Dentro: camera da letto in ordine."}),Je("win_b4_side",-11,-20,"z",1.2,.6,1.2,"closed",{passable:!0,peek:"Ripostiglio: scatoloni. La finestra e' bassa, si passa."}),Je("win_b4_s1",-23,-25,"x",1.1,1,1.3,"closed",{}),Je("win_b4_upN",-20,-15,"x",1.1,4,1.3,"closed",{}),Je("win_b4_s2",-13,-25,"x",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b4_upS",-20,-25,"x",1.1,4,1.3,"closed",{fixed:!0}),Je("win_b4_w1",-25,-20,"z",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b4_w2",-25,-17,"z",1.1,4,1.3,"closed",{fixed:!0})],lights:[{id:"b4_liv",x:-20.5,z:-18,y:2.8,warm:16767392},{id:"b4_kit",x:-23,z:-22.5,y:2.8,warm:16773328},{id:"b4_bed1",x:-14.4,z:-16.5,y:2.8,warm:16769720},{id:"b4_loft",x:-18,z:-19,y:5.8,warm:14214399}]},px={id:"b5",type:"office",label:"Studio professionale",x0:2,x1:18,z0:-25,z1:-15,floors:1,theme:"office_modern",rooms:[{id:"b5_recept",purpose:"reception",x0:2.2,z0:-18.9,x1:17.8,z1:-15.2,y:0},{id:"b5_work",purpose:"workspace",x0:8.1,z0:-24.8,x1:12.9,z1:-19.1,y:0},{id:"b5_office",purpose:"office",x0:2.2,z0:-24.8,x1:7.9,z1:-19.1,y:0},{id:"b5_break",purpose:"break_room",x0:13.1,z0:-24.8,x1:17.8,z1:-19.1,y:0},{id:"b5_wc",purpose:"restroom",x0:15.6,z0:-24.8,x1:17.8,z1:-22.9,y:0},{id:"b5_midW",purpose:"workspace",x0:2.2,z0:-24.8,x1:7.9,z1:-19.1,y:0}],walls:[...ui(2,18,-15,[[9.3,10.7]],"b5_n"),...ui(2,18,-25,[[9.5,10.5]],"b5_s"),...Wn(-25,-15,2,[],"b5_w"),...Wn(-25,-15,18,[],"b5_e"),...$n(2.175,17.825,-19,[[6.5,7.5],[12.5,13.5]],"b5_mid"),...zn(-24.825,-19.075,8,[[-22.5,-21.5]],"b5_offE"),...zn(-24.825,-19.075,13,[[-21.5,-20.5]],"b5_brkW"),...zn(-24.825,-22.8,15.5,[],"b5_podW"),...$n(15.5,17.825,-22.8,[[16,16.8]],"b5_podN")],wallsU:[],furniture:[ie(5.5,8,-17.3,-16.5,"b5_deskR"),ie(12.5,14.5,-17.3,-16.5,"b5_wait"),ie(8.5,10,-21.5,-20.7,"b5_desk1"),ie(10.8,12.3,-21.5,-20.7,"b5_desk2"),ie(8.3,9.1,-23.8,-23,"b5_cab"),ie(11,12.5,-24.5,-23.5,"b5_boxes"),ie(3,4.6,-24.5,-23.7,"b5_deskD"),ie(5,7,-23,-22,"b5_meet"),ie(2.2,2.8,-22,-20,"b5_files"),ie(13.3,15.3,-24.8,-24,"b5_kit"),ie(14.8,15.4,-24.8,-24,"b5_fridgeB"),ie(13.5,15,-22.5,-21.5,"b5_tableB"),ie(15.9,16.5,-24.5,-23.9,"b5_wcB"),ie(16.9,17.5,-24.5,-23.9,"b5_wcS"),ie(4,6,-19.5,-19.15,"b5_shelfR")],stairs:[],slabU:[],doors:[dt("door_b5_main",10,-15,"x",1.4,0,"shop_glass","closed"),dt("door_b5_back",10,-25,"x",1,0,"service","closed"),dt("door_b5_in1",7,-19,"x",1,0,"office","open"),dt("door_b5_in2",13,-19,"x",1,0,"office","open"),dt("door_b5_off",8,-22,"z",1,0,"office","closed"),dt("door_b5_wc",16.4,-22.8,"x",.8,0,"bathroom","closed")],windows:[Je("win_b5_n1",5,-15,"x",1.4,1,1.3,"closed",{peek:"Dentro: reception con bancone e sedie."}),Je("win_b5_n2",14,-15,"x",1.4,1,1.3,"closed",{peek:"Dentro: sala d'attesa con tavolini."}),Je("win_b5_s1",5,-25,"x",1.1,1,1.3,"closed",{}),Je("win_b5_e1",18,-20,"z",1.1,1,1.3,"closed",{}),Je("win_b5_s2",14,-25,"x",1.1,1,1.3,"closed",{fixed:!0}),Je("win_b5_w1",2,-20,"z",1.1,1,1.3,"closed",{fixed:!0})],lights:[{id:"b5_recept",x:10,z:-17,y:3,warm:15266047},{id:"b5_work",x:10.5,z:-22,y:3,warm:16773328},{id:"b5_office",x:5,z:-22,y:3,warm:16769720}]},mx={id:"bar",type:"bar",label:"Bar Centrale",x0:-28,x1:-12,z0:14,z1:26,floors:1,hero:!1,theme:"bar_warm",rooms:[{id:"bar_sala",purpose:"cafe_floor",x0:-27.8,z0:14.2,x1:-12.2,z1:23.4,y:0},{id:"bar_office",purpose:"back_office",x0:-27.8,z0:23.6,x1:-20.6,z1:25.8,y:0},{id:"bar_store",purpose:"storage",x0:-20.4,z0:23.6,x1:-14.1,z1:25.8,y:0},{id:"bar_wc",purpose:"restroom",x0:-13.9,z0:24.1,x1:-12.2,z1:25.8,y:0}],walls:[Ko(-28,-21.2,14,Zo,"bar_s1"),Ko(-18.8,-12,14,Zo,"bar_s2"),...ui(-28,-12,26,[[-17.5,-16.5]],"bar_n"),...Wn(14,26,-28,[],"bar_w"),...Wn(14,26,-12,[],"bar_e"),...$n(-27.8,-12.2,23.5,[[-19.2,-18.2],[-15.2,-14.2]],"bar_mid"),...zn(23.575,25.8,-20.5,[[24.3,25.3]],"bar_div"),...zn(24,25.8,-14,[],"bar_podW"),...$n(-14,-12.2,24,[[-13.3,-12.5]],"bar_podN")],wallsU:[],furniture:[ie(-22,-18,22,23,"bar_counter"),ie(-23,-22,18,19,"bar_t1"),ie(-21.8,-20.8,17.5,18.5,"bar_t2"),ie(-18,-17,18.5,19.5,"bar_t3"),ie(-26,-24.5,24.5,25.3,"bar_desk"),ie(-26,-23,25.4,25.8,"bar_shelf"),ie(-19.5,-18,24.9,25.7,"bar_rack"),ie(-16.5,-15.5,25,25.7,"bar_boxes"),ie(-15.8,-15,23.7,24.5,"bar_fridge"),ie(-13.7,-13.1,24.9,25.4,"bar_wcB"),ie(-12.8,-12.3,24.9,25.4,"bar_wcS")],stairs:[],slabU:[],doors:[dt("door_bar_main",-20,14,"x",2.4,0,"shop_glass","open",{h:2.4}),dt("door_bar_back",-17,26,"x",1,0,"service","closed"),dt("door_bar_off",-18.7,23.5,"x",1,0,"staff","closed"),dt("door_bar_store",-20.5,24.8,"z",1,0,"staff","open"),dt("door_bar_wc",-12.9,24,"x",.8,0,"bathroom","closed")],windows:[Je("win_bar_w",-25.5,14,"x",2.2,.9,1.4,"closed",{peek:"Dentro: bancone, tavolini, scaffale di bottiglie."}),Je("win_bar_e",-14.5,14,"x",2.2,.9,1.4,"closed",{peek:"Dentro: tavolini apparecchiati e lampade accese."})],lights:[{id:"barMain",x:-20,z:18.5,y:2.9,warm:16767392},{id:"barBack",x:-19,z:24.8,y:2.9,warm:14213352}]},mc=[mx,ux,fx,hx,px];function _x(){const n=[];for(const e of mc){for(const t of e.walls)n.push({...t,tall:!0,high:!0});for(const t of e.wallsU)n.push({...t,tall:!0,high:!0});for(const t of e.furniture){const i=t.id.includes("coffee")||t.id.includes("tableB")||t.id.includes("dining");n.push({...t,tall:!i,high:!1})}}return n}function _c(){const n=[];for(const e of mc)for(const t of e.doors)n.push({...t,building:e.id});return n}function Ef(){const n=[];for(const e of mc)for(const t of e.windows)n.push({...t,building:e.id});return n}function Xd(n){return n.axis==="x"?{minX:n.x-n.w/2,maxX:n.x+n.w/2,minZ:n.z-.3/2,maxZ:n.z+.3/2}:{minX:n.x-.3/2,maxX:n.x+.3/2,minZ:n.z-n.w/2,maxZ:n.z+n.w/2}}const Hr=new Map;let qd=!1;function gc(){if(!qd){for(const n of _c())Hr.set(n.id,n.state==="open");qd=!0}}function gx(n){return gc(),Hr.get(n)??!0}function Tf(n,e){gc(),(Hr.get(n)??!0)!==e&&(Hr.set(n,e),Fs++)}const Ol=new Map;function xx(n,e){(Ol.get(n)??!1)!==e&&(Ol.set(n,e),Fs++)}function vx(n){return Ol.get(n)??!1}let Fs=0;const xc=new Map;function Ls(){return Fs}function yx(n,e){xc.set(n,{minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ,id:n,tall:!0,high:e.high!==!1}),Fs++}function bx(n){xc.delete(n)&&Fs++}function ao(){gc();const n=[],e=new Set(["b2","b3","b4","b5"]);for(const t of je.buildings){if(e.has(t.id))continue;const i=t.w/2,o=t.d/2;if(!t.interior){n.push({minX:t.x-i,maxX:t.x+i,minZ:t.z-o,maxZ:t.z+o,id:t.id,tall:!0,high:!0});continue}}for(const t of _x())n.push({minX:t.minX,maxX:t.maxX,minZ:t.minZ,maxZ:t.maxZ,id:t.id,tall:!0,high:t.high!==!1});for(const t of _c()){if(gx(t.id))continue;const i=Xd(t);n.push({...i,id:"door:"+t.id,tall:!0,high:!0})}for(const t of Ef()){if(!t.passable||vx(t.id))continue;const i=Xd(t);n.push({...i,id:"win:"+t.id,tall:!0,high:!0})}for(const t of je.coverWalls??[])n.push({minX:t.x-t.w/2,maxX:t.x+t.w/2,minZ:t.z-t.d/2,maxZ:t.z+t.d/2,id:"cover",tall:!0,high:!0});for(const t of je.props)(t.kind==="lamp"||t.kind==="tree")&&n.push({minX:t.x-.3,maxX:t.x+.3,minZ:t.z-.3,maxZ:t.z+.3,id:"prop",tall:!1}),t.kind==="crates"&&n.push({minX:t.x-1,maxX:t.x+1,minZ:t.z-1,maxZ:t.z+1,id:"crates",tall:!0}),t.kind==="yardstack"&&n.push({minX:t.x-1.2,maxX:t.x+1.2,minZ:t.z-1.2,maxZ:t.z+1.2,id:"yardstack",tall:!0}),t.kind==="bench"&&n.push({minX:t.x-1.1,maxX:t.x+1.1,minZ:t.z-.4,maxZ:t.z+.4,id:"prop",tall:!1});for(const t of xc.values())n.push({...t});return n}function Ms(n,e,t,i){let o=n,s=e,r=!1;for(let l=0;l<3;l++){r=!1;for(const c of i){const d=Math.max(c.minX,Math.min(o,c.maxX)),u=Math.max(c.minZ,Math.min(s,c.maxZ)),f=o-d,p=s-u,x=f*f+p*p;if(x<t*t)if(r=!0,x<1e-8){const v=o-c.minX,m=c.maxX-o,h=s-c.minZ,E=c.maxZ-s,g=Math.min(v,m,h,E);g===v?o=c.minX-t:g===m?o=c.maxX+t:g===h?s=c.minZ-t:s=c.maxZ+t}else{const v=Math.sqrt(x);o=d+f/v*t,s=u+p/v*t}}if(!r)break}const a=je.size/2-1;return o=Math.max(-a,Math.min(a,o)),s=Math.max(-a,Math.min(a,s)),{x:o,z:s,hit:r}}function Ri(n,e,t,i,o){for(const s of o)if(s.tall&&!(Yd(n,e,s)||Yd(t,i,s))&&Mx(n,e,t,i,s))return!0;return!1}function Yd(n,e,t){return n>t.minX&&n<t.maxX&&e>t.minZ&&e<t.maxZ}function Mx(n,e,t,i,o){let s=0,r=1;const a=t-n,l=i-e,c=[[n,a,o.minX,o.maxX],[e,l,o.minZ,o.maxZ]];for(const[d,u,f,p]of c)if(Math.abs(u)<1e-9){if(d<f||d>p)return!1}else{let x=(f-d)/u,v=(p-d)/u;if(x>v){const m=x;x=v,v=m}if(s=Math.max(s,x),r=Math.min(r,v),s>r)return!1}return r>0&&s<1}function Bl(n,e,t){const i=je.buildings.find(o=>o.id===t);return i?Math.abs(n-i.x)<i.w/2&&Math.abs(e-i.z)<i.d/2:!1}const wx=3,Z=(n,e,t,i,o,s,r={})=>({id:n,kind:e,action:t,x:i,z:o,radius:r.radius??2.8,label:s,state:r.state??"closed",lockedBy:r.lockedBy??null,loot:r.loot??null,vehicle:r.vehicle??null,panel:r.panel??null,light:r.light??null,peek:r.peek??null,y:r.y??0});function Sx(){return[Z("door_bar_main","door","OPEN",-20,13.6,"Porta del bar",{state:"open"}),Z("door_bar_back","door","OPEN",-17,26.4,"Porta di servizio",{}),Z("door_b2_main","door","OPEN",11,13.6,"Portone condominiale",{}),Z("door_b2_apt","door","OPEN",13.5,13.6,"Porta appartamento",{lockedBy:"key_apt"}),Z("door_b3_shop","door","OPEN",24,13.6,"Porta del negozio",{state:"open"}),Z("door_b3_back","door","OPEN",24,26.4,"Retro del negozio",{lockedBy:"key_b3"}),Z("door_b4_main","door","OPEN",-18,-14.6,"Porta di casa",{}),Z("door_b4_back","door","OPEN",-18,-25.4,"Porta sul retro",{}),Z("door_b5_main","door","OPEN",10,-14.6,"Porta di casa",{}),Z("door_b5_back","door","OPEN",10,-25.4,"Porta sul retro",{}),Z("door_svc_gate","door","OPEN",-31,7,"Cancello del deposito",{state:"open"}),Z("door_court_gate","door","OPEN",-19,33,"Cancello della corte",{state:"open"}),...Rx()]}const Ex=new Set(["door_bar_main","door_bar_back","door_b2_main","door_b2_apt","door_b3_shop","door_b3_back","door_b4_main","door_b4_back","door_b5_main","door_b5_back","door_svc_gate","door_court_gate"]),Tx=new Set(["win_bar_w","win_bar_e","win_b3_shop","win_b2_apt"]),Ax={door_b2_rear:"Porta sul retro",door_b2_hallG:"Porta del vano scala",door_b2_hallU:"Porta del ballatoio",door_b2_in1:"Porta della camera",door_b2_bathG:"Porta del bagno",door_b2_bathU:"Porta del bagno (sopra)",door_b3_staff:"Porta dello staff",door_b3_wc:"Porta del bagno",door_b3_wcU:"Porta del bagno (sopra)",door_b4_e2:"Passaggio",door_b4_in:"Porta della camera",door_b4_bath:"Porta del bagno",door_b4_bathU:"Porta del bagno (sopra)",door_b5_in1:"Porta interna",door_b5_in2:"Porta interna",door_b5_off:"Porta direzione",door_b5_wc:"Porta del bagno",door_bar_off:"Porta ufficio (staff)",door_bar_store:"Porta magazzino",door_bar_wc:"Porta del bagno"};function Rx(){const n=[];for(const e of _c())Ex.has(e.id)||n.push(Z(e.id,"door","OPEN",e.x,e.z,Ax[e.id]??`Porta (${e.id})`,{state:e.state,y:e.y??0}));return n}function Cx(){const n=[];for(const e of Ef())Tx.has(e.id)||e.fixed||n.push(Z(e.id,"window","OPEN",e.x,e.z,`Finestra (${e.id})`,{state:e.state,y:e.y0??0,peek:e.peek??"Dentro: una stanza."}));return n}function Px(){return[Z("win_bar_w","window","OPEN",-25.5,13.7,"Vetrina del bar",{peek:"Dentro: bancone, tavolini, scaffale di bottiglie."}),Z("win_bar_e","window","OPEN",-14.5,13.7,"Vetrina del bar",{peek:"Dentro: tavolini apparecchiati e lampade accese."}),Z("win_b3_shop","window","OPEN",22,13.7,"Vetrina alimentari",{peek:"Dentro: scaffali pieni e cassette di frutta."}),Z("win_b2_apt","window","OPEN",10,13.7,"Finestra del palazzo",{peek:"Dentro: una stanza in penombra, qualcuno potrebbe sentirti."}),...Cx()]}function Lx(){return[Z("cont_dump_alley","container","SEARCH",21.6,3.5,"Cassonetto",{loot:"tool_screwdriver2"}),Z("cont_dump_court","container","SEARCH",-24.5,29,"Cassonetto",{}),Z("cont_dump_south","container","SEARCH",14.5,-22.5,"Cassonetto",{loot:"coin_piazza"}),Z("cont_crate_vic","container","SEARCH",15.8,8,"Cassa di legno",{loot:"bottle_depot"}),Z("cont_bar_drawer","container","OPEN",-21,22.5,"Cassetto del bancone",{loot:"doc_bar_till"}),Z("cont_bar_fridge","container","OPEN",-18,24.8,"Frigorifero",{loot:"bottle_bar"}),Z("cont_bar_shelf","container","OPEN",-20,25.2,"Scaffale",{}),Z("cont_apt_locker","container","SEARCH",13.8,12.4,"Armadietto",{loot:"note_depot"}),Z("cont_svc_box","container","OPEN",-36,19,"Cassa del deposito",{loot:"tool_hammer"}),Z("cont_yard_crate","container","OPEN",-37,21.5,"Cassa",{}),Z("cont_court_chest","container","OPEN",-22,31,"Baule",{loot:"doc_court"}),Z("cont_b2_ward","container","SEARCH",11.4,21.5,"Armadio (camera)",{y:0,loot:"doc_apt"}),Z("cont_b2_desk","container","OPEN",15.1,20.7,"Scrivania (camera)",{y:0}),Z("cont_b2_kit","container","OPEN",15.1,14.6,"Pensile cucina",{y:0,loot:"coin_b2"}),Z("cont_b2U_ward","container","SEARCH",15.5,15.5,"Armadio (sopra)",{y:3}),Z("cont_b3_till","container","OPEN",24,19.9,"Cassa del negozio",{y:0}),Z("cont_b3_stock","container","SEARCH",25.4,25.3,"Scaffale magazzino",{y:0,loot:"bottle_shop"}),Z("cont_b4_trunk","container","OPEN",-12.1,-19.1,"Baule (camera)",{y:0,loot:"doc_family"}),Z("cont_b4_kit","container","OPEN",-23,-24.5,"Credenza cucina",{y:0}),Z("cont_b4_ward1","container","SEARCH",-11.5,-16.5,"Armadio (camera 1)",{y:0}),Z("cont_b5_files","container","OPEN",2.5,-21,"Archivio",{y:0,loot:"doc_office"}),Z("cont_b5_deskD","container","OPEN",3.8,-24.1,"Scrivania direzione",{y:0}),Z("cont_bar_office","container","OPEN",-25.2,24.9,"Cassetto ufficio",{y:0,loot:"doc_bar_back"}),Z("cont_bar_store","container","SEARCH",-18.7,25.3,"Scaffale magazzino",{y:0})]}function Ix(){return[Z("key_b3","pickup","TAKE",33.5,24.5,"Chiave (retro negozio)",{state:"present"}),Z("doc_bar_till","pickup","TAKE",-20.5,22.5,"Scontrino del bar",{state:"hidden"}),Z("tool_wrench","pickup","TAKE",17.2,7.5,"Chiave inglese",{state:"present"}),Z("key_svc","pickup","TAKE",-19,30.5,"Chiave del deposito",{state:"present"}),Z("doc_contract","pickup","TAKE",37.5,19.5,"Foglio stropicciato",{state:"present"}),Z("tool_screwdriver","pickup","TAKE",-35.5,19,"Cacciavite",{state:"present"}),Z("tool_screwdriver2","pickup","TAKE",21.6,4.6,"Cacciavite",{state:"hidden"}),Z("note_court","pickup","TAKE",-21.5,31.5,"Biglietto",{state:"present"}),Z("doc_court","pickup","TAKE",-22,31.8,"Lettera",{state:"hidden"}),Z("key_apt","pickup","TAKE",14,12.8,"Chiave (appartamento)",{state:"present"}),Z("note_depot","pickup","TAKE",-36,19.8,"Bolla di consegna",{state:"hidden"}),Z("bottle_bar","pickup","TAKE",-18.6,24.2,"Bottiglia",{state:"hidden"}),Z("bottle_depot","pickup","TAKE",15.8,8.8,"Bottiglia",{state:"hidden"}),Z("tool_hammer","pickup","TAKE",-36.8,19.6,"Martello",{state:"hidden"}),Z("coin_piazza","pickup","TAKE",14.5,-21.6,"Moneta",{state:"hidden"}),Z("doc_apt","pickup","TAKE",11.4,22.2,"Lettera",{state:"hidden",y:0}),Z("coin_b2","pickup","TAKE",15.1,15.2,"Spiccioli",{state:"hidden",y:0}),Z("bottle_shop","pickup","TAKE",25.4,24.6,"Bottiglia",{state:"hidden",y:0}),Z("doc_family","pickup","TAKE",-12.1,-18.4,"Foto di famiglia",{state:"hidden",y:0}),Z("doc_office","pickup","TAKE",2.5,-20.3,"Fattura",{state:"hidden",y:0}),Z("doc_bar_back","pickup","TAKE",-25.2,24.2,"Registro del bar",{state:"hidden",y:0})]}function Dx(){return[Z("sw_bar_main","light","TOGGLE",-21.5,14.5,"Interruttore (sala)",{state:"on",light:"barMain"}),Z("sw_bar_back","light","TOGGLE",-15.8,25.6,"Interruttore (retro)",{state:"on",light:"barBack"}),Z("lamp_west","light","TOGGLE",-30,6,"Lampione",{state:"on",light:"lampWest"}),Z("lamp_center","light","TOGGLE",-5,-6,"Lampione",{state:"on",light:"lampCenter"}),Z("lamp_vicolo","light","TOGGLE",18,12,"Lampione",{state:"on",light:"lampVicolo"}),Z("lamp_piazza","light","TOGGLE",34,26,"Lampione",{state:"on",light:"lampPiazza"}),Z("sw_b2_liv","light","TOGGLE",12.2,14.6,"Interruttore (soggiorno)",{state:"on",light:"b2_liv",y:0}),Z("sw_b2_bed","light","TOGGLE",12.2,20.4,"Interruttore (camera)",{state:"off",light:"b2_bed",y:0}),Z("sw_b2_loft","light","TOGGLE",11.6,21.6,"Interruttore (sopra)",{state:"on",light:"b2_loft",y:3}),Z("sw_b3_sales","light","TOGGLE",23.4,14.6,"Interruttore (negozio)",{state:"on",light:"b3_sales",y:0}),Z("sw_b4_liv","light","TOGGLE",-17.2,-15.6,"Interruttore (soggiorno)",{state:"on",light:"b4_liv",y:0}),Z("sw_b4_loft","light","TOGGLE",-23.8,-17.4,"Interruttore (loft)",{state:"off",light:"b4_loft",y:3}),Z("sw_b5_work","light","TOGGLE",10.5,-19.6,"Interruttore (uffici)",{state:"on",light:"b5_work",y:0}),Z("sw_bar_off","light","TOGGLE",-19.6,23.9,"Interruttore (retro)",{state:"on",light:"barBack",y:0})]}function kx(){return[Z("sit_chair_1","furniture","SIT",-22.5,18.5,"Sedia",{state:"free"}),Z("sit_chair_2","furniture","SIT",-17.5,19,"Sedia",{state:"free"}),Z("sit_stool","furniture","SIT",-18.5,22.5,"Sgabello",{state:"free"}),Z("sit_bench_1","furniture","SIT",33,24,"Panchina",{state:"free",radius:2.2}),Z("sit_bench_2","furniture","SIT",40,17,"Panchina",{state:"free",radius:2.2}),Z("sit_crate","furniture","SIT",15.8,8.8,"Cassa (seduta)",{state:"free"}),Z("sit_b2_sofa","furniture","SIT",12.2,16.6,"Divano",{state:"free",y:0}),Z("sit_b2_bed","furniture","SIT",12,24.2,"Letto",{state:"free",y:0}),Z("sit_b4_sofa","furniture","SIT",-21,-17.4,"Divano",{state:"free",y:0}),Z("sit_b4_chair","furniture","SIT",-19.1,-17.1,"Poltrona",{state:"free",y:0}),Z("sit_b5_wait","furniture","SIT",13.5,-16.9,"Sedia attesa",{state:"free",y:0}),Z("sit_bar_1","furniture","SIT",-21.3,18,"Sedia del bar",{state:"free",y:0})]}function zx(){return[Z("dev_coffee","device","USE",-19.5,22.3,"Macchina del caffè",{state:"idle",radius:2.2}),Z("dev_radio","device","USE",-19.2,25.2,"Radio",{state:"off",radius:2.2}),Z("dev_phone","device","USE",28.5,12.5,"Telefono pubblico",{state:"idle",radius:2.2}),Z("dev_bell","device","RING",11.8,13.2,"Campanello",{state:"idle",radius:2.2}),Z("dev_b4_tv","device","USE",-16.9,-18.4,"Televisore",{state:"off",radius:2.2,y:0}),Z("dev_b2_radio","device","USE",15.5,16.6,"Radio",{state:"off",radius:2.2,y:0}),Z("dev_b5_coffee","device","USE",14.3,-24.4,"Macchina del caffe (ufficio)",{state:"idle",radius:2.2,y:0})]}function Nx(){return[Z("vendor_sud","street","USE",26.5,13.2,"Distributore",{state:"idle"}),Z("bin_nord","street","SEARCH",-28.8,6,"Cestino",{}),Z("bin_sud","street","SEARCH",-3.8,-6,"Cestino",{}),Z("fountain","street","DRINK",37,27.2,"Fontanella",{state:"idle",radius:2.2})]}function Ux(){return[Z("car_red_door","vehicle","OPEN",8,-1.6,"Sportello auto",{vehicle:"red",panel:"door"}),Z("car_red_trunk","vehicle","OPEN",8,-4.6,"Bagagliaio",{vehicle:"red",panel:"trunk",loot:"tool_wrench2"}),Z("car_blue_door","vehicle","OPEN",12.5,-1.6,"Sportello auto",{vehicle:"blue",panel:"door"}),Z("car_blue_hood","vehicle","OPEN",12.5,-4.4,"Cofano",{vehicle:"blue",panel:"hood"}),Z("car_gray_door","vehicle","OPEN",-36,4.4,"Sportello auto",{vehicle:"gray",panel:"door"}),Z("car_gray_trunk","vehicle","OPEN",-36,1.6,"Bagagliaio",{vehicle:"gray",panel:"trunk"}),Z("tool_wrench2","pickup","TAKE",8,-5.2,"Chiave a rullino",{state:"hidden"})]}function Fx(){const n={};for(const e of[...Sx(),...Px(),...Lx(),...Ix(),...Dx(),...kx(),...zx(),...Nx(),...Ux()])n[e.id]=e;return n}function Ox(n,e,t,i=wx,o=null){let s=null,r=i;for(const a of Object.values(n)){if(a.kind==="pickup"&&a.state!=="present"||o!==null&&a.y!==void 0&&Math.abs(a.y-o)>1.6)continue;const l=Math.hypot(a.x-e,a.z-t),c=a.radius??2.8;l<Math.min(c,r)&&(r=l,s=a)}return s}const Bx={door:n=>n==="open"?"Chiudi":"Apri",window:n=>n==="open"?"Chiudi":"Apri",container:n=>n==="open"?"Chiudi":n==="searched"?"Rovista":"Apri",pickup:()=>"Raccogli",light:n=>n==="on"?"Spegni":"Accendi",furniture:n=>n==="seated"?"Alzati":"Siediti",device:(n,e)=>e.id==="dev_bell"?"Suona":e.id==="dev_phone"?"Usa":n==="on"?"Spegni":"Usa",street:(n,e)=>e.id==="fountain"?"Bevi":e.id==="vendor_sud"?"Usa":"Rovista",vehicle:n=>n==="open"?"Chiudi":"Apri"};function Gx(n){return n?`Premi <b>E</b> · ${(Bx[n.kind]??(()=>"Usa"))(n.state,n)} <b>${n.label}</b>`:null}function Hx(n,e){const t=n[e];if(!t)return{ok:!1,msg:"Niente da usare qui.",sound:null};switch(t.kind){case"door":return t.state!=="open"&&t.lockedBy&&n[t.lockedBy]?.state!=="taken"?{ok:!1,msg:`🔒 ${t.label}: serve la chiave giusta.`,sound:"locked"}:(t.state=t.state==="open"?"closed":"open",t.lockedBy&&(t.lockedBy=null),{ok:!0,msg:t.state==="open"?`🚪 ${t.label}: aperta.`:`🚪 ${t.label}: chiusa.`,sound:"door",door:{id:e,open:t.state==="open"}});case"window":return t.state=t.state==="open"?"closed":"open",{ok:!0,msg:t.state==="open"?`🪟 ${t.label}: aperta. ${t.peek??""}`:`🪟 ${t.label}: chiusa.`,sound:"window",win:{id:e,open:t.state==="open"}};case"container":{if(t.state==="open")return t.state="closed",{ok:!0,msg:`📦 ${t.label}: chiuso.`,sound:"drawer"};t.state="open";const i=t.loot&&n[t.loot]&&n[t.loot].state==="hidden"?t.loot:null;return i&&(n[i].state="present"),{ok:!0,msg:i?`📦 ${t.label}: dentro c'è <b>${n[i].label}</b>!`:`📦 ${t.label}: niente di utile.`,sound:"drawer",loot:i}}case"pickup":return t.state!=="present"?{ok:!1,msg:"Già preso.",sound:null}:(t.state="taken",{ok:!0,msg:`🎒 Raccolto: <b>${t.label}</b>.`,sound:"pickup",taken:e});case"light":return t.state=t.state==="on"?"off":"on",{ok:!0,msg:t.state==="on"?`💡 ${t.label}: accesa.`:`💡 ${t.label}: spenta. Meglio non farsi vedere…`,sound:"switch",light:{id:e,on:t.state==="on"}};case"furniture":return t.state=t.state==="seated"?"free":"seated",{ok:!0,msg:t.state==="seated"?`🪑 Ti siedi (${t.label}). Premi E per alzarti.`:"🚶 Ti alzi.",sound:"sit",seat:{id:e,seated:t.state==="seated"}};case"device":return t.id==="dev_bell"?{ok:!0,msg:"🔔 Drin! Qualcuno verrà a controllare…",sound:"bell",noise:{x:t.x,z:t.z,radius:16,severity:.3}}:t.id==="dev_phone"?t.state==="used"?{ok:!1,msg:"☎ Il telefono è muto ora.",sound:null}:(t.state="used",{ok:!0,msg:"☎ Una voce: «Il bersaglio gira tra bar e piazza. Muoviti.»",sound:"phone",info:!0}):t.id==="dev_radio"?(t.state=t.state==="on"?"off":"on",{ok:!0,msg:t.state==="on"?"📻 La radio gracchia una notizia…":"📻 Radio spenta.",sound:"switch"}):t.id==="dev_b4_tv"?(t.state=t.state==="on"?"off":"on",{ok:!0,msg:t.state==="on"?"Telegiornale: niente di nuovo dal quartiere.":"Televisore spento.",sound:"switch",tv:{on:t.state==="on"}}):t.id==="dev_b2_radio"?(t.state=t.state==="on"?"off":"on",{ok:!0,msg:t.state==="on"?"Musica leggera dalla radio.":"Radio spenta.",sound:"switch"}):(t.state=t.state==="idle"?"brewing":"idle",{ok:!0,msg:t.state==="brewing"?"☕ La macchina borbotta… caffè in arrivo.":"☕ Prendi il caffè. Amaro e bollente.",sound:"switch"});case"street":return t.id==="vendor_sud"?{ok:!0,msg:"🥤 Il distributore ronza… cade una lattina. La prendi.",sound:"switch",taken:null}:t.id==="fountain"?{ok:!0,msg:"💧 Bevi acqua fresca. Meglio.",sound:"switch"}:t.state==="open"?(t.state="closed",{ok:!0,msg:`🗑 ${t.label}: richiuso.`,sound:"drawer"}):(t.state="open",{ok:!0,msg:`🗑 Frughi nel ${t.label}: solo cartacce.`,sound:"drawer"});case"vehicle":{t.state=t.state==="open"?"closed":"open";const i=t.loot&&n[t.loot]&&n[t.loot].state==="hidden"?t.loot:null;return i&&t.state==="open"&&(n[i].state="present"),{ok:!0,msg:t.state==="open"?`🚗 ${t.label}: aperto.${i?` Dentro c'è <b>${n[i].label}</b>!`:""}`:`🚗 ${t.label}: chiuso.`,sound:"door",loot:i}}default:return{ok:!1,msg:"Niente da fare.",sound:null}}}function Vx(n){return{minX:n.x-.7,maxX:n.x+.7,minZ:n.z-.35,maxZ:n.z+.35}}const Jo=new Map,bn=new Map;function mn(n){let e=n>>>0||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wx(n,e,t,i){let o=Jo.get(n);if(o)return o;if(typeof document>"u")return null;const s=document.createElement("canvas");return s.width=e,s.height=t,i(s.getContext("2d"),e,t),o=new no(s),o.wrapS=o.wrapT=Pi,o.colorSpace=Vt,o.anisotropy=4,Jo.set(n,o),o}function $x(n,e,t,i){let o=Jo.get(n);if(o)return o;if(typeof document>"u")return null;const s=document.createElement("canvas");return s.width=e,s.height=t,i(s.getContext("2d"),e,t),o=new no(s),o.wrapS=o.wrapT=Pi,Jo.set(n,o),o}function lo(n,e,t,i,o,s,r,a=.04,l=.12,c=3){for(let d=0;d<o;d++){n.fillStyle=i()<.5?s:r,n.globalAlpha=a+i()*(l-a);const u=1+i()*c;n.fillRect(i()*e,i()*t,u,u)}n.globalAlpha=1}function Xx(n){return(e,t,i)=>{const o=mn(n);e.fillStyle="#33363c",e.fillRect(0,0,t,i),lo(e,t,i,o,2600,"#4a4d55","#22242a",.05,.14,2.5);for(let s=0;s<130;s++)e.fillStyle="#6a6d75",e.globalAlpha=.15+o()*.2,e.fillRect(o()*t,o()*i,1.5,1.5);e.globalAlpha=1,e.strokeStyle="rgba(12,12,14,0.5)",e.lineWidth=1;for(let s=0;s<4;s++){e.beginPath();let r=o()*t,a=o()*i;e.moveTo(r,a);for(let l=0;l<5;l++)r+=(o()-.5)*60,a+=(o()-.5)*60,e.lineTo(r,a);e.stroke()}e.fillStyle="rgba(20,20,24,0.35)",e.fillRect(o()*t*.5,0,26+o()*20,i)}}function Do(n,e="#9d988c"){return(t,i,o)=>{const s=mn(n);t.fillStyle=e,t.fillRect(0,0,i,o),lo(t,i,o,s,1600,"#b7b1a4","#7c776d",.05,.12,3);for(let r=0;r<7;r++)t.fillStyle=s()<.5?"rgba(60,58,52,0.10)":"rgba(200,195,180,0.10)",t.beginPath(),t.ellipse(s()*i,s()*o,8+s()*26,6+s()*18,s()*3,0,7),t.fill()}}function jd(n){return(e,t,i)=>{Do(n)(e,t,i),e.strokeStyle="rgba(45,42,36,0.6)",e.lineWidth=3;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(s*t/2,0),e.lineTo(s*t/2,i),e.stroke(),e.beginPath(),e.moveTo(0,s*i/2),e.lineTo(t,s*i/2),e.stroke();const o=mn(n+9);for(let s=0;s<2;s++)for(let r=0;r<2;r++)e.fillStyle=`rgba(${o()<.5?"40,38,32":"210,205,190"},${.04+o()*.07})`,e.fillRect(s*t/2,r*i/2,t/2,i/2)}}function xs(n,e){return(t,i,o)=>{const s=mn(n);t.fillStyle=e,t.fillRect(0,0,i,o);for(let r=0;r<26;r++)t.fillStyle=s()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",t.beginPath(),t.ellipse(s()*i,s()*o,12+s()*34,10+s()*26,s()*3,0,7),t.fill();lo(t,i,o,s,700,"rgba(255,255,255,0.5)","rgba(0,0,0,0.4)",.03,.08,2),t.fillStyle="rgba(40,36,30,0.10)";for(let r=0;r<5;r++){const a=s()*i;t.fillRect(a,0,2+s()*3,o*(.2+s()*.5))}}}function Ba(n,e="#b9b0a0",t="#8a4a38",i="#74402f"){return(o,s,r)=>{const a=mn(n);o.fillStyle=e,o.fillRect(0,0,s,r);const l=8,c=r/l;for(let d=0;d<l;d++){const u=d%2*.25;for(let f=-1;f<5;f++){const p=s/4,x=a();o.fillStyle=x<.33?t:x<.66?i:"#95543c",o.fillRect((f+u)*p+2,d*c+2,p-4,c-4),o.fillStyle=`rgba(0,0,0,${.04+a()*.1})`,o.fillRect((f+u)*p+2,d*c+2,p-4,c-4)}}lo(o,s,r,a,500,"rgba(255,255,255,0.5)","rgba(0,0,0,0.5)",.03,.08,2)}}function Ga(n,e="#a89f8c"){return(t,i,o)=>{const s=mn(n);t.fillStyle=e,t.fillRect(0,0,i,o),t.strokeStyle="rgba(50,46,40,0.55)",t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*o/2),t.lineTo(i,r*o/2),t.stroke();for(let r=0;r<6;r++){const a=s()*i;t.beginPath(),t.moveTo(a,0),t.lineTo(a+(s()-.5)*10,o/2),t.stroke();const l=s()*i;t.beginPath(),t.moveTo(l,o/2),t.lineTo(l+(s()-.5)*10,o),t.stroke()}lo(t,i,o,s,1200,"#bcb29e","#847b68",.05,.12,3)}}function Ar(n,e="#6b4a2c",t="#4a3120"){return(i,o,s)=>{const r=mn(n);i.fillStyle=e,i.fillRect(0,0,o,s);for(let a=0;a<s;a+=3){i.strokeStyle=`rgba(30,18,10,${.1+r()*.16})`,i.lineWidth=1+r(),i.beginPath(),i.moveTo(0,a);for(let l=0;l<=o;l+=16)i.lineTo(l,a+Math.sin(l*.08+a)*2+(r()-.5)*2);i.stroke()}for(let a=0;a<3;a++){const l=r()*o,c=r()*s;i.strokeStyle=t,i.lineWidth=2,i.beginPath(),i.ellipse(l,c,4+r()*4,6+r()*5,0,0,7),i.stroke()}i.strokeStyle="rgba(20,12,6,0.5)",i.lineWidth=2;for(let a=0;a<=4;a++)i.beginPath(),i.moveTo(a*o/4,0),i.lineTo(a*o/4,s),i.stroke()}}function qx(n){return(e,t,i)=>{const o=mn(n);e.fillStyle="#7a5138",e.fillRect(0,0,t,i);for(let s=0;s<i;s+=16){e.fillStyle=`rgba(0,0,0,${.08+o()*.1})`,e.fillRect(0,s,t,3);for(let r=s/16%2*8;r<t;r+=16)e.fillStyle=`rgba(${o()<.5?"255,220,190":"20,8,4"},${.05+o()*.08})`,e.fillRect(r,s,14,14)}lo(e,t,i,o,400,"#8d6750","#4e3423",.05,.12,2)}}function Yx(n){return(e,t,i)=>{const o=mn(n);e.fillStyle="#5d6d43",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){e.strokeStyle=o()<.5?"#71835a":"#47542f",e.globalAlpha=.3+o()*.5,e.lineWidth=1;const r=o()*t,a=o()*i;e.beginPath(),e.moveTo(r,a),e.lineTo(r+(o()-.5)*3,a-2-o()*3),e.stroke()}e.globalAlpha=1}}function jx(n){return(e,t,i)=>{const o=mn(n);e.fillStyle="#5a4128",e.fillRect(0,0,t,i);for(let s=0;s<t;s+=4){e.strokeStyle=`rgba(20,12,6,${.25+o()*.3})`,e.lineWidth=1+o()*2,e.beginPath(),e.moveTo(s,0);for(let r=0;r<=i;r+=16)e.lineTo(s+Math.sin(r*.1+s)*3,r);e.stroke()}}}function Zx(n,e="#7a6a8a"){return(t,i,o)=>{const s=mn(n);t.fillStyle=e,t.fillRect(0,0,i,o),t.globalAlpha=.16;for(let r=0;r<o;r+=2)t.fillStyle=r%4?"#000":"#fff",t.fillRect(0,r,i,1);t.globalAlpha=1,lo(t,i,o,s,300,"rgba(255,255,255,0.4)","rgba(0,0,0,0.4)",.04,.1,2)}}function Kx(n){return(e,t,i)=>{Ar(n,"#7d5a36","#54371f")(e,t,i),e.strokeStyle="rgba(30,18,8,0.4)",e.lineWidth=2;for(let o=-i;o<t;o+=24)e.beginPath(),e.moveTo(o,0),e.lineTo(o+i,i),e.stroke()}}function Jx(n,e=200,t=60){return(i,o,s)=>{const r=mn(n);i.fillStyle=`rgb(${e},${e},${e})`,i.fillRect(0,0,o,s);for(let a=0;a<500;a++){const l=Math.max(0,Math.min(255,Math.round(e+(r()-.5)*t)));i.fillStyle=`rgb(${l},${l},${l})`,i.globalAlpha=.5,i.fillRect(r()*o,r()*s,2+r()*4,2+r()*4)}i.globalAlpha=1}}function Zd(n="stain"){if(typeof document>"u")return null;const e=`grime|${n}`;let t=Jo.get(e);if(t)return t;const i=document.createElement("canvas");i.width=i.height=128;const o=i.getContext("2d"),s=mn(n==="stain"?101:n==="scratch"?202:303);if(o.clearRect(0,0,128,128),n==="scratch"){o.strokeStyle="rgba(210,200,180,0.5)";for(let r=0;r<12;r++){o.lineWidth=.8+s(),o.beginPath();const a=s()*128,l=s()*128;o.moveTo(a,l),o.lineTo(a+(s()-.5)*70,l+(s()-.5)*70),o.stroke()}}else for(let r=0;r<22;r++){const a=o.createRadialGradient(0,0,0,0,0,8+s()*22),l=s()<.6;a.addColorStop(0,l?"rgba(30,28,24,0.28)":"rgba(190,180,160,0.20)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.save(),o.translate(s()*128,s()*128),o.fillStyle=a,o.fillRect(-32,-32,64,64),o.restore()}return t=new no(i),Jo.set(e,t),t}function en(n,e){let t=bn.get(n);if(t)return t;if(typeof document>"u")return null;const{map:i,rough:o,color:s=16777215,roughness:r=.9,metalness:a=0,rx:l=1,ry:c=1,bump:d=.02,env:u=.35}=e;let f=i,p=o;return i&&(l!==1||c!==1)&&(f=i.clone(),f.needsUpdate=!0,f.wrapS=f.wrapT=Pi,f.repeat.set(l,c),p&&(p=o.clone(),p.needsUpdate=!0,p.repeat.set(l,c))),t=new jo({color:s,map:f??null,roughnessMap:p??null,bumpMap:f??null,bumpScale:d,roughness:r,metalness:a,envMapIntensity:u}),bn.set(n,t),t}const Kd=256;function _t(n,e,t=200,i=60){return{map:Wx(`s7-${n}`,Kd,Kd,e),rough:$x(`s7-${n}-r`,128,128,Jx(1e3+n.length*77,t,i))}}let Ct=null;function Zt(){return Ct||typeof document>"u"||(Ct={asphalt:_t("asphalt",Xx(11),235,40),concrete:_t("concrete",Do(23),215,50),concrete2:_t("concrete2",Do(124,"#a39d90"),210,50),paving:_t("paving",jd(67),205,55),plaster:[_t("plaster0",xs(37,"#d9b06a"),225,40),_t("plaster1",xs(38,"#b9c2cc"),225,40),_t("plaster2",xs(39,"#cfa3a8"),225,40),_t("plaster3",xs(40,"#c4bd9a"),225,40),_t("plaster4",xs(41,"#c9a87f"),225,40)],cement:[_t("cement0",Do(55,"#8f8a7e"),220,45),_t("cement1",Do(56,"#7d7a72"),225,45),_t("cement2",Do(57,"#a8a294"),210,55)],stone:[_t("stone0",Ga(71),215,50),_t("stone1",Ga(72,"#968c78"),220,50),_t("stone2",Ga(73,"#b5ab96"),205,55)],brick:[_t("brick0",Ba(91),220,45),_t("brick1",Ba(92,"#b9b0a0","#7d5a46","#654832"),220,45),_t("brick2",Ba(93,"#a89c88","#93503a","#7a4433"),220,45)],wood:[_t("wood0",Ar(111),175,70),_t("wood1",Ar(112,"#7d5c34","#54371f"),165,70),_t("wood2",Ar(113,"#4e3822","#2e1f12"),185,60)],roof:_t("roof",qx(83),230,40),grass:_t("grass",Yx(51),240,30),trunk:_t("trunk",jx(61),225,40),fabric:_t("fabric",Zx(121),240,25),floorWood:_t("floorwood",Kx(131),170,60),tileFloor:_t("tilefloor",jd(141),150,60)}),Ct}const Qx={asphalt:7,concrete:3,paving:1.5,plaster:6,cement:4,stone:3,brick:2,wood:2,roof:3,grass:6,trunk:1,fabric:1,floor:4};function wn(n,e,t){const i=Qx[n]??4;return[Math.max(1,Math.round(e/i)),Math.max(1,Math.round(t/i))]}function e1(n,e){let t=0;for(let i=0;i<n.length;i++)t=t*31+n.charCodeAt(i)>>>0;return t%e}function t1(n=100,e=8){Zt();const[t,i]=wn("asphalt",n,e);return en(`asphalt|${t}x${i}`,{...Ct.asphalt,roughness:.95,bump:.03,rx:t,ry:i,env:.15})}function n1(n=4,e=16){Zt();const[t,i]=wn("asphalt",n,e);return en(`alley|${t}x${i}`,{...Ct.asphalt,color:9407878,roughness:.97,bump:.03,rx:t,ry:i,env:.1})}function Jd(n=100,e=2.2,t=0){Zt();const i=t%2?Ct.concrete2:Ct.concrete,[o,s]=wn("concrete",n,e);return en(`sidewalk${t%2}|${o}x${s}`,{...i,roughness:.92,bump:.02,rx:o,ry:s,env:.2})}function Ha(n=18,e=16,t=!1){Zt();const[i,o]=wn("paving",n,e);return en(`piazza${t?"D":""}|${i}x${o}`,{...Ct.paving,color:t?11050888:13617332,roughness:.88,bump:.025,rx:i,ry:o,env:.25})}function To(n=0,e=10,t=6){Zt();const i=Ct.plaster[(n%5+5)%5],[o,s]=wn("plaster",e,t);return en(`plaster${n%5}|${o}x${s}`,{...i,roughness:.9,bump:.015,rx:o,ry:s,env:.25})}function Qd(n=0,e=4,t=3){Zt();const i=Ct.cement[(n%3+3)%3],[o,s]=wn("cement",e,t);return en(`cement${n%3}|${o}x${s}`,{...i,roughness:.93,bump:.02,rx:o,ry:s,env:.2})}function Va(n=0,e=4,t=3){Zt();const i=Ct.stone[(n%3+3)%3],[o,s]=wn("stone",e,t);return en(`stone${n%3}|${o}x${s}`,{...i,roughness:.9,bump:.03,rx:o,ry:s,env:.25})}function i1(n=0,e=4,t=3){Zt();const i=Ct.brick[(n%3+3)%3],[o,s]=wn("brick",e,t);return en(`brick${n%3}|${o}x${s}`,{...i,roughness:.88,bump:.03,rx:o,ry:s,env:.25})}function Fn(n=0,e=2,t=2){Zt();const i=Ct.wood[(n%3+3)%3],[o,s]=wn("wood",e,t);return en(`wood${n%3}|${o}x${s}`,{...i,roughness:.62,bump:.02,rx:o,ry:s,env:.5})}function o1(n=10,e=10){Zt();const[t,i]=wn("roof",n,e);return en(`roof|${t}x${i}`,{...Ct.roof,roughness:.92,bump:.03,rx:t,ry:i,env:.2})}function s1(n=100,e=100){Zt();const[t,i]=wn("grass",n,e);return en(`grass|${t}x${i}`,{...Ct.grass,color:12108956,roughness:1,bump:.02,rx:t,ry:i,env:.05})}function r1(){return Zt(),en("trunk",{...Ct.trunk,roughness:.95,bump:.04,rx:1,ry:2,env:.15})}function eu(n=0){Zt();const e=[4880959,3828276,5603142][n%3],[t,i]=[2,2];return en(`leaf${n%3}`,{...Ct.grass,color:e,roughness:.95,bump:.02,rx:t,ry:i,env:.1})}function a1(){return Zt(),en("hedge",{...Ct.grass,color:4024883,roughness:1,bump:.02,rx:2,ry:1,env:.05})}function l1(n=16,e=12){Zt();const[t,i]=wn("floor",n,e);return en(`floorwood|${t}x${i}`,{...Ct.floorWood,roughness:.55,bump:.015,rx:t,ry:i,env:.6})}function Nt(n="iron"){const e={iron:{color:3817286,roughness:.55,metalness:.85,env:.9},steel:{color:10133672,roughness:.32,metalness:.95,env:1.1},brass:{color:11045434,roughness:.38,metalness:.9,env:1},rust:{color:7226662,roughness:.9,metalness:.25,env:.3},painted:{color:3033690,roughness:.5,metalness:.4,env:.7}},t=e[n]??e.iron,i=`metal|${n}`;let o=bn.get(i);return o||(typeof document>"u"?null:(Zt(),o=new jo({color:t.color,map:Ct.concrete.map,roughnessMap:Ct.concrete.rough,roughness:t.roughness,metalness:t.metalness,envMapIntensity:t.env,bumpMap:Ct.concrete.map,bumpScale:.008}),bn.set(i,o),o))}function Ts(n){const e=`car|${n.toString(16)}`;let t=bn.get(e);return t||(typeof document>"u"?null:(t=new bf({color:n,roughness:.28,metalness:.6,clearcoat:.8,clearcoatRoughness:.2,envMapIntensity:1.2}),bn.set(e,t),t))}function ws(n=12571864,e=.32){const t=`glass|${n.toString(16)}|${e}`;let i=bn.get(t);return i||(typeof document>"u"?null:(i=new bf({color:n,transparent:!0,opacity:e,roughness:.06,metalness:0,envMapIntensity:1.4,side:fn}),bn.set(t,i),i))}function tu(){const n="puddle";let e=bn.get(n);return e||(typeof document>"u"?null:(e=new jo({color:3752782,roughness:.05,metalness:.1,transparent:!0,opacity:.85,envMapIntensity:1.6}),bn.set(n,e),e))}function ko(){const n="lampon";let e=bn.get(n);return e||(typeof document>"u"?null:(e=new ri({color:16767370}),bn.set(n,e),e))}function Ht(n,e,t,i){const o=new ae(new ut(n,e,t),i);return o.castShadow=!0,o.receiveShadow=!0,o}function Hi(n){return new Gn({color:n})}const c1={door_bar_main:0,door_b2_apt:1,door_b3_shop:0,door_b4_main:2};function d1(n){return n==="door_bar_back"||n==="door_svc_gate"||n==="door_court_gate"?Nt("painted"):Fn(c1[n]??1)}function u1(n,e){const t=new Map,i=new Fe;i.name="interactions";const o=(r,a)=>{t.set(r,a),i.add(a.group)};for(const r of Object.values(e))if(!((r.y??0)>1.5)){if(r.kind==="door"){const a=new Fe;a.position.set(r.x,0,r.z);const l=Ht(1.3,2.2,.08,d1(r.id));l.position.set(.65,1.15,0);const c=new Fe;c.add(l);const d=new ae(new Ye(.06,8,6),Nt("brass"));d.position.set(1.1,0,.08),l.add(d);let u=null;r.lockedBy&&(u=Ht(.16,.2,.08,Nt("steel")),u.position.set(1.1,1,.1),a.add(u)),a.add(c),o(r.id,{group:a,pivot:c,padlock:u,kind:"door",targetY:r.state==="open"?-1.85:0}),c.rotation.y=r.state==="open"?-1.85:0}else if(r.kind==="window"){const a=new Fe;a.position.set(r.x,1.9,r.z);const l=new ae(new ut(1,1.2,.05),ws());l.position.set(.5,0,0);const c=new Fe;c.add(l),a.add(c),o(r.id,{group:a,pivot:c,kind:"window",targetY:r.state==="open"?1.2:0})}else if(r.kind==="container"||r.kind==="street"){const a=new Fe;if(a.position.set(r.x,0,r.z),r.id.startsWith("bin_")){const l=new ae(new Ye(.3,8,6,0,Math.PI*2,0,1.2),Hi(3037748));l.position.y=.75,l.castShadow=!0;const c=new Fe;c.position.y=.75,c.add(l),l.position.set(0,0,0),a.add(c),o(r.id,{group:a,pivot:c,kind:"lid",targetX:0})}else if(r.id==="vendor_sud"){const l=Ts(10107438),c=Ht(1.1,1.9,.7,l);c.position.y=.95,a.add(c);const d=new ae(new Dt(.8,1.2),ws(14215402,.5));d.position.set(0,1,.36),a.add(d);const u=new ae(new Dt(.9,.25),ko());u.position.set(0,1.75,.36),a.add(u),o(r.id,{group:a,pivot:null,kind:"static"})}else if(r.id==="fountain"){const l=new ae(new Ft(.5,.6,.7,10),Hi(9274744));l.position.y=.35,l.castShadow=!0,a.add(l);const c=new ae(new Ft(.05,.08,.8,6),ws(13625582,.6));c.position.y=1,a.add(c),o(r.id,{group:a,pivot:null,kind:"static"})}else{const l=Ht(1.4,.09,.9,Nt("iron"));l.position.set(0,0,.45);const c=new Fe;c.position.set(0,1.32,-.45),c.add(l),a.add(c),o(r.id,{group:a,pivot:c,kind:"lid",targetX:r.state==="open"?-1:0})}}else if(r.kind==="pickup"){const a=new Fe;a.position.set(r.x,.55,r.z);let l;if(r.id.startsWith("key_")){l=new Fe;const d=new ae(new Vn(.09,.025,6,12),Nt("brass"));l.add(d);const u=Ht(.05,.22,.03,Nt("brass"));u.position.y=-.16,l.add(u)}else if(r.id.startsWith("doc_")||r.id.startsWith("note_"))l=Ht(.3,.02,.4,Hi(15262416));else if(r.id.startsWith("tool_")){l=new Fe;const d=Ht(.08,.08,.4,Hi(9054754));l.add(d);const u=Ht(.1,.1,.16,Nt("steel"));u.position.z=.26,l.add(u)}else r.id.startsWith("bottle_")?l=new ae(new Ft(.09,.09,.34,8),ws(4160058,.75)):l=new ae(new Ft(.09,.09,.03,10),Nt("brass"));l.traverse?.(d=>{d.isMesh&&(d.castShadow=!0)}),l.isMesh&&(l.castShadow=!0),a.add(l);const c=new ae(new Dt(.5,.5),new ri({color:16771496,transparent:!0,opacity:.35,side:fn}));c.rotation.x=-Math.PI/2,c.position.y=-.5,a.add(c),a.visible=r.state==="present",o(r.id,{group:a,pivot:null,kind:"pickup",spin:l})}else if(r.kind==="light"){const a=new Fe;a.position.set(r.x,0,r.z);const l=Ht(.14,.2,.05,Hi(15130834));l.position.set(0,1.4,.1),a.add(l);let c=null,d=null;r.light==="barMain"||r.light==="barBack"?(c=new ae(new Ye(.12,8,6),r.state==="on"?ko():Hi(5592400)),c.position.set(0,2.6,r.light==="barMain"?3.5:5),a.add(c),d=new wf(16767392,r.state==="on"?12:0,14,1.8),d.position.copy(c.position),a.add(d)):(c=new ae(new Ye(.14,8,6),r.state==="on"?ko():Hi(3815992)),c.position.set(0,4.42,1),a.add(c)),o(r.id,{group:a,pivot:null,kind:"lamp",bulb:c,pl:d,light:r.light})}else if(r.kind==="furniture"){const a=new Fe;a.position.set(r.x,.02,r.z);const l=new ae(new wi(.4,12),new ri({color:8034922,transparent:!0,opacity:0}));l.rotation.x=-Math.PI/2,l.position.y=.03,a.add(l),o(r.id,{group:a,pivot:null,kind:"seat",marker:l})}else if(r.kind==="device"){const a=new Fe;if(a.position.set(r.x,0,r.z),r.id==="dev_coffee"){const l=Ht(.6,.5,.45,Nt("steel"));l.position.y=1.25,a.add(l);const c=new ae(new Dt(.4,.1),ko());c.position.set(0,1.35,.23),a.add(c),c.visible=r.state==="brewing",o(r.id,{group:a,pivot:null,kind:"coffee",glow:c})}else if(r.id==="dev_radio"){const l=Ht(.5,.3,.25,Fn(2));l.position.y=2.1,a.add(l);const c=new ae(new Dt(.3,.08),ko());c.position.set(0,2.12,.13),a.add(c),c.visible=r.state==="on",o(r.id,{group:a,pivot:null,kind:"radio",glow:c})}else if(r.id==="dev_phone"){const l=Ht(.12,2.4,.12,Nt("iron"));l.position.y=1.2,a.add(l);const c=Ht(.8,.1,.7,Nt("painted"));c.position.y=2.45,a.add(c);const d=Ht(.4,.5,.25,Nt("iron"));d.position.y=1.6,a.add(d),o(r.id,{group:a,pivot:null,kind:"static"})}else{const l=Ht(.12,.18,.06,Nt("brass"));l.position.y=1.5,a.add(l),o(r.id,{group:a,pivot:null,kind:"static"})}}else if(r.kind==="vehicle"){const a=new Fe;a.position.set(r.x,.7,r.z);const l=Ts(r.vehicle==="red"?9054754:r.vehicle==="blue"?2771578:6975092);let c,d=new Fe;r.panel==="door"?(c=Ht(1.9,.6,.06,l),c.position.set(0,0,.95),d.add(c)):(c=Ht(r.panel==="hood"?1.1:1.5,.08,1.5,l),c.position.set(r.panel==="hood"?-.55:.75,.15,0),d.add(c)),a.add(d);const u=r.state==="open";d.rotation.y=r.panel==="door"&&u?-1.1:0,d.rotation.z=r.panel!=="door"&&u?.7:0,o(r.id,{group:a,pivot:d,kind:"carpanel",panel:r.panel,targetY:0,targetZ:0})}}const s=new ae(new Vn(.7,.05,8,24),new ri({color:16765503,transparent:!0,opacity:.9}));return s.rotation.x=-Math.PI/2,s.visible=!1,i.add(s),n.add(i),{group:i,refs:t,ring:s}}function vc(n,e,t){const i=n.get(t),o=e[t];if(!(!i||!o)){if(i.kind==="door")i.targetY=o.state==="open"?-1.85:0,i.padlock&&(i.padlock.visible=!!o.lockedBy);else if(i.kind==="window")i.targetY=o.state==="open"?1.2:0;else if(i.kind==="lid")i.targetX=o.state==="open"?-1:0;else if(i.kind==="pickup")i.group.visible=o.state==="present";else if(i.kind==="lamp"){const s=o.state==="on";i.pl&&(i.pl.intensity=s?12:0),i.bulb&&(i.bulb.material=s?ko():new Gn({color:3815992}))}else if(i.kind==="seat")i.marker&&(i.marker.material.opacity=o.state==="seated"?.5:0);else if(i.kind==="coffee"||i.kind==="radio")i.glow&&(i.glow.visible=o.state==="brewing"||o.state==="on");else if(i.kind==="carpanel"){const s=o.state==="open";i.targetY=i.panel==="door"&&s?-1.1:0,i.targetZ=i.panel!=="door"&&s?.7:0}}}function Af(n,e){for(const t of n.keys())e[t]&&vc(n,e,t);for(const t of Object.values(e))if(t.kind==="pickup"){const i=n.get(t.id);i&&(i.group.visible=t.state==="present")}}let fr=0;function f1(n,e,t,i,o,s){fr+=t;for(const[r,a]of n){const l=a.group.position.x-i,c=a.group.position.z-o,d=l*l+c*c>1600;a.pivot&&!d&&(a.targetY!==void 0&&(a.pivot.rotation.y+=(a.targetY-a.pivot.rotation.y)*Math.min(1,t*7)),a.targetX!==void 0&&(a.pivot.rotation.x+=(a.targetX-a.pivot.rotation.x)*Math.min(1,t*7)),a.targetZ!==void 0&&a.kind==="carpanel"&&a.panel!=="door"&&(a.pivot.rotation.z+=(a.targetZ-a.pivot.rotation.z)*Math.min(1,t*7))),a.kind==="pickup"&&a.group.visible&&!d&&(a.group.position.y=.55+Math.sin(fr*2.5+a.group.position.x)*.08,a.spin&&(a.spin.rotation.y=fr*1.5))}if(s&&n.has(s)){const r=n.get(s);e.visible=!0,e.position.set(r.group.position.x,.08,r.group.position.z);const a=1+Math.sin(fr*4)*.08;e.scale.set(a,a,1)}else e.visible=!1}const Ut=.25,Dn=.35,h1=Ut*Math.SQRT1_2,hr=Dn+h1,Uo=je.size/2-1,Xe=Math.round(je.size/Ut),un=-100/2;let Ji=null,Rr=null,Rf=-1,Cf=0,Cr=null;function nu(n){Ji=ao(),Rr=new Map;const e=4;for(let t=0;t<Ji.length;t++){const i=Ji[t],o=Math.floor((i.minX-Dn)/e),s=Math.floor((i.maxX+Dn)/e),r=Math.floor((i.minZ-Dn)/e),a=Math.floor((i.maxZ+Dn)/e);for(let l=o;l<=s;l++)for(let c=r;c<=a;c++){const d=(l+64)*1024+(c+64);let u=Rr.get(d);u||(u=[],Rr.set(d,u)),u.push(t)}}Cr=null,bi.clear(),Rf=Ls(),n&&Cf++}function na(){Ji===null?nu(!1):Rf!==Ls()&&nu(!0)}function p1(){return na(),Cf}function Pr(n,e){if(na(),n<-Uo||n>Uo||e<-Uo||e>Uo)return!1;const t=(Math.floor((n-Dn)/4)+64)*1024+(Math.floor((e-Dn)/4)+64),i=Rr.get(t);if(!i)return!0;const o=Dn*Dn;for(let s=0;s<i.length;s++){const r=Ji[i[s]],a=n<r.minX?r.minX:n>r.maxX?r.maxX:n,l=e<r.minZ?r.minZ:e>r.maxZ?r.maxZ:e,c=n-a,d=e-l;if(c*c+d*d<o)return!1}return!0}function yc(n,e,t,i){const o=t-n,s=i-e,r=Math.hypot(o,s),a=Math.ceil(r/.15);if(a<=1)return Pr(n,e)&&Pr(t,i);for(let l=0;l<=a;l++){const c=l/a;if(!Pr(n+o*c,e+s*c))return!1}return!0}function Pf(n,e){const t=Math.floor((n-un)/Ut),i=Math.floor((e-un)/Ut);return t<0||i<0||t>=Xe||i>=Xe?-1:i*Xe+t}function Si(n){return un+(n+.5)*Ut}function m1(){const n=new Uint8Array(Xe*Xe).fill(1),e=(o,s,r,a)=>{let l=Math.ceil((o-un)/Ut-.5),c=Math.floor((s-un)/Ut-.5),d=Math.ceil((r-un)/Ut-.5),u=Math.floor((a-un)/Ut-.5);l<0&&(l=0),d<0&&(d=0),c>Xe-1&&(c=Xe-1),u>Xe-1&&(u=Xe-1);for(let f=l;f<=c;f++){const p=d*Xe+f;for(let x=d;x<=u;x++)n[p+(x-d)*Xe]=0}};for(let o=0;o<Ji.length;o++){const s=Ji[o];e(s.minX-hr,s.maxX+hr,s.minZ-hr,s.maxZ+hr)}const t=Math.ceil((-Uo-un)/Ut-.5),i=Math.floor((Uo-un)/Ut-.5);for(let o=0;o<Xe;o++)for(let s=0;s<Xe;s++)(o<t||o>i||s<t||s>i)&&(n[s*Xe+o]=0);return n}function Qo(){return na(),Cr||(Cr={walk:m1()}),Cr}function iu(n,e){const t=Pf(n,e);return t>=0&&Qo().walk[t]===1}function ou(n,e,t){const i=Qo(),o=Math.floor((n-un)/Ut),s=Math.floor((e-un)/Ut),r=Math.ceil(t/Ut);let a=-1,l=1/0;for(let d=0;d<=r;d++){const u=o-d,f=o+d,p=s-d,x=s+d;let v=-1,m=1/0;for(let h=u;h<=f;h++){if(h<0||h>=Xe)continue;const E=d===0?[s]:[p,x];for(const g of E){if(g<0||g>=Xe)continue;const y=g*Xe+h;if(!i.walk[y])continue;const L=Si(h)-n,R=Si(g)-e,A=L*L+R*R;A<m&&(m=A,v=y)}}if(v>=0&&m<l&&(l=m,a=v),a>=0&&Math.sqrt(l)<=d*Ut)break}if(a<0)return null;const c=a%Xe;return{x:Si(c),z:Si((a-c)/Xe),i:c,j:(a-c)/Xe}}class _1{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}clear(){this.k.length=0,this.v.length=0}push(e,t){const i=this.k,o=this.v;let s=i.length;for(i.push(e),o.push(t);s>0;){const r=s-1>>1;if(i[r]<=i[s])break;const a=i[r];i[r]=i[s],i[s]=a;const l=o[r];o[r]=o[s],o[s]=l,s=r}}pop(){const e=this.k,t=this.v,i=t[0],o=e.pop(),s=t.pop();if(e.length){e[0]=o,t[0]=s;let r=0;for(;;){const a=r*2+1,l=a+1;let c=r;if(a<e.length&&e[a]<e[c]&&(c=a),l<e.length&&e[l]<e[c]&&(c=l),c===r)break;const d=e[c];e[c]=e[r],e[r]=d;const u=t[c];t[c]=t[r],t[r]=u,r=c}}return i}}let Vi=null,pr=null,vs=null,Ao=0,Ro=null;const g1=[[1,0,10],[-1,0,10],[0,1,10],[0,-1,10],[1,1,14],[1,-1,14],[-1,1,14],[-1,-1,14]];function su(n,e,t,i){const o=n>t?n-t:t-n,s=e>i?e-i:i-e,r=o<s?o:s;return 10*(o+s)-6*r}const x1=16384;function ru(n,e){return(n+e)*x1+e}function Wa(n,e,t,i){const s=Qo().walk,r=Xe*Xe;(!Vi||Vi.length!==r)&&(Vi=new Int32Array(r),pr=new Int32Array(r),vs=new Int32Array(r),Ro=new _1),Ao++,Ao>1073741823&&(vs.fill(0),Ao=1);const a=e*Xe+n,l=i*Xe+t;if(!s[a]||!s[l])return null;if(a===l)return[a];Ro.clear(),Vi[a]=0,vs[a]=Ao,pr[a]=-1,Ro.push(ru(0,su(n,e,t,i)),a);let c=!1;for(;Ro.size;){const f=Ro.pop();if(f===l){c=!0;break}const p=f%Xe,x=(f-p)/Xe,v=Vi[f];for(let m=0;m<8;m++){const[h,E,g]=g1[m],y=p+h,L=x+E;if(y<0||L<0||y>=Xe||L>=Xe)continue;const R=L*Xe+y;if(!s[R]||h!==0&&E!==0&&(!s[x*Xe+y]||!s[L*Xe+p]))continue;const A=v+g;vs[R]===Ao&&Vi[R]<=A||(vs[R]=Ao,Vi[R]=A,pr[R]=f,Ro.push(ru(A,su(y,L,t,i)),R))}}if(!c)return null;const d=[];let u=l;for(;u!==-1;)d.push(u),u=pr[u];return d.reverse(),d}function v1(n){const e=n.map(s=>{const r=s%Xe;return{x:Si(r),z:Si((s-r)/Xe)}});if(e.length<=2)return e;const t=[e[0]];let i=0;const o=48;for(;i<e.length-1;){let s=Math.min(e.length-1,i+o);for(;s>i+1&&!yc(e[i].x,e[i].z,e[s].x,e[s].z);s--);s<=i+1&&(s=i+1),t.push(e[s]),i=s}return t}const bi=new Map,y1=2048;function au(n,e,t,i,o){const s=`${n},${e},${t},${i},${o}`;let r=bi.get(s);if(r!==void 0)return bi.delete(s),bi.set(s,r),r;let a=null;if(o===0)a=Wa(n,e,t,i);else{const l=o,c=20;let d=null,u=0;for(let f=1;f<=l&&!d&&u<c;f++){for(let p=t-f;p<=t+f&&!d&&u<c;p++)for(const x of[i-f,i+f]){if(p<0||x<0||p>=Xe||x>=Xe||!Qo().walk[x*Xe+p])continue;u++;const v=Wa(n,e,p,x);if(v){d=v;break}}for(let p=i-f+1;p<=i+f-1&&!d&&u<c;p++)for(const x of[t-f,t+f]){if(x<0||p<0||x>=Xe||p>=Xe||!Qo().walk[p*Xe+x])continue;u++;const v=Wa(n,e,x,p);if(v){d=v;break}}}a=d}if(r=a,bi.size>=y1){const l=bi.keys().next().value;bi.delete(l)}return bi.set(s,r),r}function bc(n,e,t,i){const o=Pr(t,i)&&iu(t,i),s=o?lu(t,i):ou(t,i,14);if(!s)return{points:[],ok:!1,exact:!1,goal:{x:t,z:i}};const r=iu(n,e)?lu(n,e):ou(n,e,4);if(!r)return{points:[],ok:!1,exact:o,goal:o?{x:t,z:i}:{x:s.x,z:s.z}};const a=o?{x:t,z:i}:{x:s.x,z:s.z};if(yc(n,e,s.x,s.z)){const u=[{x:n,z:e}];return Math.hypot(s.x-n,s.z-e)>Ut&&u.push({x:s.x,z:s.z}),o&&u.push({x:t,z:i}),{points:cu(u),ok:!0,exact:o,goal:a}}const l=au(r.i,r.j,s.i,s.j,0)??au(r.i,r.j,s.i,s.j,6);if(!l)return{points:[],ok:!1,exact:o,goal:a};const c=v1(l),d=[{x:n,z:e}];for(const u of c)Math.hypot(u.x-d[d.length-1].x,u.z-d[d.length-1].z)<Ut*.9||d.push(u);return o&&d.push({x:t,z:i}),{points:cu(d),ok:!0,exact:o,goal:a}}function lu(n,e){const t=Math.floor((n-un)/Ut),i=Math.floor((e-un)/Ut);return{x:Si(t),z:Si(i),i:t,j:i}}function cu(n){const e=[];for(const t of n){const i=e[e.length-1];i&&Math.hypot(t.x-i.x,t.z-i.z)<1e-6||e.push(t)}return e}function Os(){const n={};for(const e of Object.keys(je.nodes))n[e]=[];for(const[e,t]of je.edges)n[e].push(t),n[t].push(e);return n}function rs(n,e){let t=null,i=1e9;for(const[o,s]of Object.entries(je.nodes)){const r=(s.x-n)**2+(s.z-e)**2;r<i&&(i=r,t=o)}return t}const b1=.15;function Lf(n,e,t){let i=0;for(const o of t){const s=Math.max(o.minX,Math.min(n,o.maxX)),r=Math.max(o.minZ,Math.min(e,o.maxZ));if(s===n&&r===e){const a=Math.min(n-o.minX,o.maxX-n,e-o.minZ,o.maxZ-e)+Dn;a>i&&(i=a)}else{const a=Dn-Math.hypot(n-s,e-r);a>i&&(i=a)}}return i}const mr=new Map;function ai(n){let e=mr.get(n);if(e===void 0){if(mr.size===0){const t=ao();for(const[i,o]of Object.entries(je.nodes))mr.set(i,Math.max(.6,Lf(o.x,o.z,t)+b1))}e=mr.get(n)??.6}return e}function If(n){const e=n??ao();na();const t=[],i=[];for(const[o,s]of Object.entries(je.nodes)){Lf(s.x,s.z,e)>0&&t.push(o);const r=Pf(s.x,s.z);(r<0||!Qo().walk[r])&&(t.includes(o)||t.push(o+"(cell)"))}for(const[o,s]of je.edges){const r=je.nodes[o],a=je.nodes[s];!r||!a||yc(r.x,r.z,a.x,a.z)||i.push(`${o}-${s}`)}return{nodeViolations:t,edgeViolations:i}}const es=.05,Gl=4,M1={seen:600,heard:120,hearsay:180},w1=30;function Df(n){return Number.isFinite(n)?Math.max(es,Math.min(1,n)):es}function Et(n){return{kind:n.kind,severity:n.severity??.5,px:n.px??0,pz:n.pz??0,place:n.place??"sconosciuto",actor:n.actor??"sconosciuto",subject:n.subject??null,channel:n.channel??"seen",confidence:Df(n.confidence??.5),t:n.t??0,error:n.error??null,moved:n.moved??!1,w:n.w??null,contra:n.contra??0,provenance:[...n.provenance??[]].slice(0,Gl)}}function S1(n,e){const t=n.actor,i=e.actor,o=t&&i&&t!=="sconosciuto"&&i!=="sconosciuto"&&t!==i,s=Math.hypot(n.px-e.px,n.pz-e.pz)>w1;return o||s}function Nn(n,e){const t=M1[n.channel]??300;return n.confidence*Math.exp(-Math.max(0,e-n.t)/t)}function Lt(n,e,t,i){const o=Et(t);if(o.provenance.includes(i))return"ignored";const s=n.get(e);if(!s)return n.set(e,o),"stored";if(s.provenance.includes(i)&&o.provenance.includes(i))return"ignored";if(s.kind==="accident"&&o.kind==="kill"){const a=[...s.provenance];for(const l of o.provenance)!a.includes(l)&&a.length<Gl&&a.push(l);return n.set(e,{...o,provenance:a}),"merged"}if(s.kind==="kill"&&o.kind==="accident")return"ignored";if(S1(s,o))return s.channel!=="seen"&&o.channel==="seen"?(n.set(e,{...o,contra:(s.contra??0)+1}),"merged"):s.channel==="seen"&&o.channel!=="seen"?"ignored":(s.contra=(s.contra??0)+1,s.confidence=Math.max(es,+(s.confidence*.85).toFixed(3)),"merged");const r=[...s.provenance];for(const a of o.provenance)!r.includes(a)&&r.length<Gl&&r.push(a);return o.confidence>s.confidence?(n.set(e,{...o,provenance:r}),"merged"):r.length>s.provenance.length?(o.provenance.every(l=>!s.provenance.includes(l))&&o.t>s.t&&o.confidence>=.25&&o.confidence<=s.confidence&&(s.t=s.t+(o.t-s.t)*.25),n.set(e,{...s,provenance:r}),"merged"):"ignored"}function Mc(n,e){let t=0;for(const[i,o]of n)Nn(o,e)<es+.01&&(n.delete(i),t++);return t}const E1={theft:"un furto",disturbance:"un trambusto",assault:"un’aggressione",kill:"un omicidio",accident:"un incidente",found_corpse:"un cadavere",corpse:"un cadavere",noise:"un rumore",sabotage:"un sabotaggio"};function T1(n,e){if(!n)return"nulla di sospetto";const t=Math.round(Nn(n,e??n.t)*100),i=n.error?` (ricordo impreciso: ${n.error})`:"",o=n.channel==="seen"?"visto di persona":n.channel==="heard"?"sentito":n.channel==="inferred"?"rimasto in dubbio, poi collegato":"sentito dire",s=E1[n.kind]??n.kind,r=n.provenance.length>1?` [via ${n.provenance.join("→")}]`:"",a=n.moved?" (scena alterata)":"";return`${s} ${n.place} — ${o}, fiducia ${t}%${i}${r}${a}`}const du=new Set(["kill","sabotage"]);function uu(n,e){return!!(n.subject&&e.subject&&n.subject===e.subject||n.place&&e.place&&n.place===e.place||Number.isFinite(n.px)&&Number.isFinite(e.px)&&Math.hypot(n.px-e.px,n.pz-e.pz)<=12)}function A1(n,e){const t=n.beliefs.get(e);if(!t)return[];const i=[];if(t.kind==="accident")for(const[o,s]of n.beliefs)o!==e&&du.has(s.kind)&&uu(s,t)&&(fu(n,o,s),i.push(o));else if(du.has(t.kind))for(const[o,s]of n.beliefs)o!==e&&s.kind==="accident"&&uu(t,s)&&(fu(n,o,t),i.push(o));return i}function fu(n,e,t){const i=n.beliefs.get(e);if(!i||i.kind!=="accident")return;const o=Df(Math.min(Nn(t,t.t)*.9,.7));n.beliefs.set(e,{...i,kind:"kill",severity:.9,channel:"inferred",confidence:o,t:t.t,error:t.kind==="sabotage"?"causa preparata: non è stato un incidente":"cè un testimone del delitto",subject:i.subject??t.subject??null,provenance:[...i.provenance]})}const Cn=64,kf={family:1,friend:.9,coworker:.85,neighbor:.8,acquaintance:.7,unknown:.6,enemy:0},R1={family:600,friend:300,coworker:150,neighbor:150,acquaintance:60};function li(n,e){return n.relType?.[e]??((n.relations?.[e]??0)>0?"acquaintance":"unknown")}function Fo(n,e){return li(n,e)==="enemy"?0:n.relations?.[e]??0}function Lr(n,e){return kf[li(n,e)]??.6}function As(n,e){if(!e)return 0;const t=li(n,e);return t==="enemy"||(n.relations?.[e]??0)<.3?0:R1[t]??0}const on={SHORT:0,NORMAL:1,SALIENT:2},C1=60,P1=900,hu=12;function pu(n,e){const t=n.beliefs.get(e);return t?t.severity>=.7||t.channel==="seen"&&(t.kind==="kill"||t.kind==="found_corpse"||t.kind==="assault")||t.subject&&As(n,t.subject)>0?on.SALIENT:t.kind==="noise"||t.severity<.3?on.SHORT:on.NORMAL:on.NORMAL}function as(n,e){const t={};for(const o of Object.keys(n.relations??{}))t[o]=.5;const i={id:n.id,name:n.name,color:n.color,role:n.role??"civilian",x:n.x,z:n.z,yaw:0,speed:0,state:"dwell",agenda:n.agenda.map(o=>({...o})),agendaIdx:0,dwellLeft:2,path:[],pathIdx:0,fleeNode:null,pathGoal:null,pathOk:!0,pathExact:!0,arriveR:.6,pathNavRev:0,stuckFor:0,navX:n.x,navZ:n.z,navT:0,gotoX:null,gotoZ:null,relations:{...n.relations},relType:{...n.relType??{}},trust:t,home:n.home??null,work:n.work??null,schedule:n.schedule?n.schedule.map(o=>({...o})):null,agendaBlock:null,memory:[],beliefs:new Map,level:"L1",thinkAt:(e?e.next():0)*.5,gossipAt:0,talkT:0,symbolAt:0,gaze:{},awareness:0,alertedBy:null,alertT:-99,death:null,hidden:!1,routineShift:null,police:null,mesh:null};return i.role==="police"&&(i.police={state:"UNAWARE",since:0,searchX:0,searchZ:0,catchT:0}),i}function Mn(n,e){const t=A1(n,e);for(const i of t)n.memory.includes(i)&&n.memTier&&(n.memTier[i]=pu(n,i));if(!n.memory.includes(e)&&(n.memTier||(n.memTier={}),n.memAt||(n.memAt={}),n.memTier[e]=pu(n,e),n.memAt[e]=n.beliefs.get(e)?.t??0,n.memory.push(e),n.memory.length>Cn)){const i=zf(n,n.memory.length-Cn);n.memory=n.memory.filter(o=>!i.has(o));for(const o of i)delete n.memTier[o],delete n.memAt[o]}}function zf(n,e){const t=[...n.memory].sort((i,o)=>(n.memTier[i]??on.NORMAL)-(n.memTier[o]??on.NORMAL)||(n.memAt[i]??0)-(n.memAt[o]??0));return new Set(t.slice(0,e))}function Ir(n,e){n.memTier||(n.memTier={}),n.memAt||(n.memAt={});const t=n.memory.length;let i=[];for(const r of n.memory){const a=n.memTier[r]??on.NORMAL,l=e-(n.memAt[r]??n.beliefs.get(r)?.t??0),c=n.beliefs.has(r);a===on.SHORT&&(!c||l>C1)||a===on.NORMAL&&!c||a===on.SALIENT&&l>P1||i.push(r)}const o=i.filter(r=>(n.memTier[r]??on.NORMAL)===on.SALIENT);if(o.length>hu){const r=new Set([...o].sort((a,l)=>(n.memAt[a]??0)-(n.memAt[l]??0)).slice(0,o.length-hu));i=i.filter(a=>!r.has(a))}if(i.length>Cn){const r=zf({memory:i,memTier:n.memTier,memAt:n.memAt},i.length-Cn);i=i.filter(a=>!r.has(a))}n.memory=i;const s=new Set(i);for(const r of Object.keys(n.memTier))s.has(r)||delete n.memTier[r];for(const r of Object.keys(n.memAt))s.has(r)||delete n.memAt[r];return t-i.length}function Bs(n){return{id:n.id,x:n.x,z:n.z,yaw:n.yaw,speed:n.speed,state:n.state,agendaIdx:n.agendaIdx,dwellLeft:n.dwellLeft,agenda:n.agenda.map(e=>({...e})),agendaBlock:n.agendaBlock??null,path:n.path.map(e=>({x:e.x,z:e.z})),pathIdx:n.pathIdx,fleeNode:n.fleeNode,pathGoal:n.pathGoal??null,pathOk:n.pathOk!==!1,pathExact:n.pathExact!==!1,arriveR:n.arriveR??.6,pathNavRev:n.pathNavRev??0,stuckFor:n.stuckFor??0,navX:n.navX??n.x,navZ:n.navZ??n.z,navT:n.navT??0,relations:{...n.relations},relType:{...n.relType??{}},memory:[...n.memory],memTier:{...n.memTier??{}},memAt:{...n.memAt??{}},trust:{...n.trust},beliefs:[...n.beliefs.entries()].map(([e,t])=>[e,{...t,provenance:[...t.provenance]}]),level:n.level,thinkAt:n.thinkAt,gossipAt:n.gossipAt,talkT:n.talkT??0,symbolAt:n.symbolAt??0,gaze:{...n.gaze??{}},awareness:n.awareness??0,alertedBy:n.alertedBy,alertT:n.alertT??-99,mournT:n.mournT??0,death:n.death?{...n.death}:null,hidden:!!n.hidden,routineShift:n.routineShift?{until:n.routineShift.until,node:n.routineShift.node}:null,police:n.police?{...n.police}:null,gotoX:n.gotoX,gotoZ:n.gotoZ}}function Gs(n,e){n.x=e.x,n.z=e.z,n.yaw=e.yaw,n.speed=e.speed??0,n.state=e.state,n.agendaIdx=e.agendaIdx,n.dwellLeft=e.dwellLeft,Array.isArray(e.agenda)&&e.agenda.length&&(n.agenda=e.agenda.map(i=>({...i})));const t=e.path??[];n.path=t.filter(i=>i&&typeof i=="object"&&Number.isFinite(i.x)&&Number.isFinite(i.z)).map(i=>({x:i.x,z:i.z})),n.pathIdx=n.path.length===t.length?e.pathIdx??0:0,n.fleeNode=e.fleeNode??null,n.pathGoal=e.pathGoal??null,n.pathOk=e.pathOk!==!1,n.pathExact=e.pathExact!==!1,n.arriveR=e.arriveR??.6,n.pathNavRev=e.pathNavRev??0,n.stuckFor=e.stuckFor??0,n.navX=e.navX??n.x,n.navZ=e.navZ??n.z,n.navT=e.navT??0,n.relations={...e.relations},n.relType={...e.relType??{}},n.agendaBlock=e.agendaBlock??null,n.memory=[...e.memory],n.memTier={...e.memTier??{}},n.memAt={...e.memAt??{}},n.trust={...e.trust??{}},n.beliefs=new Map((e.beliefs??[]).map(([i,o])=>[i,{...o,provenance:[...o.provenance??[]]}])),n.level=e.level??"L1",n.thinkAt=e.thinkAt??0,n.gossipAt=e.gossipAt??0,n.talkT=e.talkT??0,n.symbolAt=e.symbolAt??0,n.gaze={...e.gaze??{}},n.awareness=e.awareness??0,n.alertedBy=e.alertedBy,n.alertT=e.alertT??-99,n.mournT=e.mournT??0,n.death=e.death?{...e.death}:null,n.hidden=!!e.hidden,n.routineShift=e.routineShift?{until:e.routineShift.until,node:e.routineShift.node}:null,n.police=e.police?{...e.police}:n.role==="police"?{state:"UNAWARE",since:0,searchX:0,searchZ:0,catchT:0}:null,n.gotoX=e.gotoX??null,n.gotoZ=e.gotoZ??null}const Nf=[{id:"anna",name:"Anna (barista)",color:12999566,x:-20,z:18,home:"bar_in",work:"bar_in",relations:{bruno:.7,sara:.5,marco:.4,luca:.3,elena:.4,paolo:.7,bianca:.6,monica:.5,chiara:.5},relType:{bruno:"friend",sara:"friend",marco:"acquaintance",luca:"acquaintance",elena:"neighbor",paolo:"coworker",bianca:"coworker",monica:"coworker",chiara:"friend"},schedule:[{from:6,to:11,node:"bar_in",kind:"work"},{from:11,to:12,node:"pia_c",kind:"leisure"},{from:12,to:17,node:"bar_in",kind:"work"},{from:17,to:19,node:"bar_out",kind:"social"},{from:19,to:23,node:"bar_in",kind:"work"}],agenda:[{node:"bar_in",dwell:16},{node:"bar_out",dwell:3},{node:"pia_w",dwell:4},{node:"bar_out",dwell:2}]},{id:"bruno",name:"Bruno (operaio)",color:4882377,x:0,z:0,home:"b5_door",work:"svc_in",relations:{anna:.7,franco:.5,carla:.3,marco:.2,otello:.7,ivan:.5},relType:{anna:"friend",franco:"coworker",carla:"acquaintance",marco:"acquaintance",otello:"coworker",ivan:"coworker"},schedule:[{from:7,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"bar_out",kind:"leisure"},{from:13,to:17,node:"svc_in",kind:"work"},{from:17,to:20,node:"bar_in",kind:"social"}],agenda:[{node:"b5_door",dwell:6},{node:"svc_out",dwell:3},{node:"svc_in",dwell:8},{node:"road_c",dwell:2},{node:"bar_out",dwell:5}]},{id:"carla",name:"Carla (custode)",color:5484650,x:18,z:6,home:"vic_n",work:"court",relations:{bruno:.3,marta:.4,anna:.2,elena:.2,gino:.5},relType:{bruno:"acquaintance",marta:"neighbor",anna:"acquaintance",elena:"neighbor",gino:"neighbor"},schedule:[{from:8,to:12,node:"court",kind:"work"},{from:12,to:14,node:"pia_c",kind:"leisure"},{from:14,to:18,node:"court",kind:"work"},{from:18,to:21,node:"vic_n",kind:"social"}],agenda:[{node:"vic_s",dwell:3},{node:"vic_n",dwell:2},{node:"pia_c",dwell:7},{node:"pia_w",dwell:3}]},{id:"dario",name:"Dario (fornaio)",color:13666861,x:44,z:0,home:"north_e",work:"road_e",relations:{luca:.2,franco:.2,furio:.5},relType:{luca:"acquaintance",franco:"acquaintance",furio:"friend"},schedule:[{from:5,to:11,node:"road_e",kind:"work"},{from:11,to:15,node:"north_e",kind:"home"},{from:15,to:19,node:"pia_e",kind:"work"},{from:19,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"road_e",dwell:4},{node:"road_c",dwell:3},{node:"vic_s",dwell:3},{node:"road_c",dwell:2}]},{id:"elena",name:"Elena (passante)",color:9068496,x:-18,z:-14,home:"b4_door",relations:{anna:.5,sara:.4,carla:.2,marta:.3,nadia:.5,ida:.4},relType:{anna:"friend",sara:"friend",carla:"neighbor",marta:"neighbor",nadia:"friend",ida:"neighbor"},schedule:[{from:8,to:12,node:"sq_s",kind:"leisure"},{from:12,to:16,node:"pia_c",kind:"social"},{from:16,to:20,node:"bar_in",kind:"social"}],agenda:[{node:"b4_door",dwell:5},{node:"sq_s",dwell:2},{node:"bar_out",dwell:4},{node:"bar_in",dwell:8}]},{id:"marco",name:"Marco (bersaglio)",color:13908526,role:"target",x:12,z:12,home:"apt",relations:{luca:.8,sara:.7,anna:.4,bruno:.2,tiberio:.5,lina:.3},relType:{luca:"friend",sara:"friend",anna:"acquaintance",bruno:"acquaintance",tiberio:"coworker",lina:"neighbor"},schedule:[{from:7,to:10,node:"apt",kind:"home"},{from:10,to:14,node:"pia_c",kind:"work"},{from:14,to:17,node:"svc_in",kind:"work"},{from:17,to:21,node:"bar_in",kind:"social"},{from:21,to:24,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:10},{node:"pia_c",dwell:6},{node:"bar_in",dwell:10},{node:"svc_in",dwell:8},{node:"bar_in",dwell:6},{node:"court",dwell:7},{node:"pia_e",dwell:4}]},{id:"luca",name:"Luca (socio di Marco)",color:11557418,x:-20,z:11,home:"bar_out",relations:{marco:.8,sara:.3,dario:.2,anna:.3,monica:.4},relType:{marco:"friend",sara:"acquaintance",dario:"acquaintance",anna:"acquaintance",monica:"acquaintance"},schedule:[{from:9,to:13,node:"bar_in",kind:"work"},{from:13,to:17,node:"pia_c",kind:"social"},{from:17,to:22,node:"bar_in",kind:"social"},{from:22,to:24,node:"bar_out",kind:"home"}],agenda:[{node:"bar_out",dwell:4},{node:"bar_in",dwell:10},{node:"pia_c",dwell:6},{node:"road_c",dwell:3},{node:"apt",dwell:6}]},{id:"sara",name:"Sara (amica di Marco)",color:4176038,x:-18,z:-14,home:"b4_door",relations:{marco:.7,anna:.5,elena:.4,luca:.3,paolo:.85,nadia:.5},relType:{marco:"friend",anna:"friend",elena:"friend",luca:"acquaintance",paolo:"family",nadia:"friend"},schedule:[{from:8,to:12,node:"b4_door",kind:"home"},{from:12,to:16,node:"bar_in",kind:"social"},{from:16,to:20,node:"pia_c",kind:"social"},{from:20,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"b4_door",dwell:6},{node:"bar_in",dwell:8},{node:"pia_c",dwell:5},{node:"apt",dwell:7}]},{id:"rossi",name:"Ag. Rossi",color:2771668,role:"police",x:-40,z:0,home:"road_w",relations:{verdi:.6,sandro:.3},relType:{verdi:"coworker",sandro:"acquaintance"},schedule:[{from:8,to:14,node:"road_w",kind:"work"},{from:14,to:20,node:"pia_c",kind:"work"},{from:20,to:24,node:"road_w",kind:"home"}],agenda:[{node:"road_w",dwell:4},{node:"road_c",dwell:3},{node:"vic_s",dwell:4},{node:"pia_s",dwell:4}]},{id:"verdi",name:"Ag. Verdi",color:2783956,role:"police",x:44,z:0,home:"road_e",relations:{rossi:.6,sandro:.3},relType:{rossi:"coworker",sandro:"acquaintance"},schedule:[{from:8,to:14,node:"road_e",kind:"work"},{from:14,to:20,node:"vic_n",kind:"work"},{from:20,to:24,node:"road_e",kind:"home"}],agenda:[{node:"road_e",dwell:4},{node:"pia_e",dwell:4},{node:"pia_c",dwell:4},{node:"vic_n",dwell:3}]},{id:"franco",name:"Franco (operaio)",color:8022586,x:10,z:-14,home:"b5_door",work:"svc_in",relations:{bruno:.6,anna:.2,dario:.2,otello:.6,ivan:.5},relType:{bruno:"coworker",anna:"acquaintance",dario:"acquaintance",otello:"coworker",ivan:"coworker"},schedule:[{from:7,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"pia_s",kind:"leisure"},{from:13,to:17,node:"svc_out",kind:"work"},{from:17,to:20,node:"bar_out",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_out",dwell:2},{node:"svc_in",dwell:9},{node:"bar_out",dwell:4}]},{id:"marta",name:"Marta (anziana)",color:10132122,x:37,z:20,home:"pia_e",relations:{carla:.4,elena:.3,tea:.6,chiara:.5,osvaldo:.5},relType:{carla:"neighbor",elena:"neighbor",tea:"friend",chiara:"neighbor",osvaldo:"friend"},schedule:[{from:8,to:12,node:"pia_c",kind:"social"},{from:12,to:15,node:"pia_e",kind:"home"},{from:15,to:19,node:"pia_w",kind:"social"},{from:19,to:24,node:"pia_e",kind:"home"}],agenda:[{node:"pia_c",dwell:14},{node:"pia_e",dwell:10},{node:"pia_w",dwell:8}]},{id:"paolo",name:"Paolo (barista)",color:3120250,x:-20,z:14,home:"b4_door",work:"bar_in",relations:{sara:.85,anna:.7,elena:.4,monica:.6,nadia:.5},relType:{sara:"family",anna:"coworker",elena:"neighbor",monica:"coworker",nadia:"friend"},schedule:[{from:7,to:12,node:"bar_in",kind:"work"},{from:12,to:14,node:"b4_door",kind:"home"},{from:14,to:20,node:"bar_in",kind:"work"},{from:20,to:22,node:"pia_c",kind:"social"}],agenda:[{node:"bar_in",dwell:12},{node:"pia_w",dwell:4},{node:"b4_door",dwell:6}]},{id:"nadia",name:"Nadia (studentessa)",color:13658778,x:-16,z:-12,home:"b4_door",relations:{ida:.8,sara:.5,elena:.5,paolo:.5,rita:.3},relType:{ida:"family",sara:"friend",elena:"friend",paolo:"friend",rita:"acquaintance"},schedule:[{from:8,to:13,node:"court",kind:"work"},{from:13,to:17,node:"bar_in",kind:"leisure"},{from:17,to:21,node:"pia_c",kind:"social"},{from:21,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"court",dwell:10},{node:"bar_in",dwell:6},{node:"pia_c",dwell:5},{node:"b4_door",dwell:6}]},{id:"otello",name:"Otello (operaio)",color:10243882,x:8,z:-12,home:"b5_door",work:"svc_in",relations:{bruno:.7,franco:.6,ivan:.75},relType:{bruno:"coworker",franco:"coworker",ivan:"enemy"},schedule:[{from:6,to:12,node:"svc_in",kind:"work"},{from:12,to:13,node:"road_c",kind:"leisure"},{from:13,to:18,node:"svc_out",kind:"work"},{from:18,to:21,node:"bar_out",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_in",dwell:10},{node:"svc_out",dwell:5},{node:"bar_out",dwell:4}]},{id:"ivan",name:"Ivan (magazziniere)",color:4890569,x:12,z:-16,home:"b5_door",work:"svc_out",relations:{otello:.75,bruno:.5,franco:.5,sandro:.35},relType:{otello:"enemy",bruno:"coworker",franco:"coworker",sandro:"acquaintance"},schedule:[{from:7,to:13,node:"svc_out",kind:"work"},{from:13,to:14,node:"pia_s",kind:"leisure"},{from:14,to:19,node:"svc_in",kind:"work"},{from:19,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"b5_door",dwell:5},{node:"svc_out",dwell:9},{node:"svc_in",dwell:6},{node:"bar_in",dwell:5}]},{id:"chiara",name:"Chiara (fioraia)",color:13189006,x:42,z:18,home:"court",work:"pia_e",relations:{marta:.5,anna:.5,osvaldo:.65,nino:.4,tea:.3},relType:{marta:"neighbor",anna:"friend",osvaldo:"family",nino:"acquaintance",tea:"acquaintance"},schedule:[{from:6,to:12,node:"pia_e",kind:"work"},{from:12,to:14,node:"court",kind:"home"},{from:14,to:19,node:"pia_c",kind:"work"},{from:19,to:22,node:"court",kind:"social"}],agenda:[{node:"pia_e",dwell:10},{node:"pia_c",dwell:7},{node:"court",dwell:6}]},{id:"nino",name:"Nino (ambulante)",color:13214247,x:35,z:18,home:"north_w",work:"pia_c",relations:{chiara:.4,marta:.3,gino:.4,peppe:.4},relType:{chiara:"acquaintance",marta:"acquaintance",gino:"friend",peppe:"friend"},schedule:[{from:6,to:7,node:"north_w",kind:"home"},{from:7,to:15,node:"pia_c",kind:"work"},{from:15,to:18,node:"bar_out",kind:"leisure"},{from:18,to:21,node:"north_w",kind:"social"}],agenda:[{node:"north_w",dwell:4},{node:"pia_c",dwell:12},{node:"bar_out",dwell:5}]},{id:"tea",name:"Tea (pensionata)",color:9079402,x:-20,z:31,home:"court",relations:{marta:.6,ida:.55,osvaldo:.5,lina:.7,chiara:.3},relType:{marta:"friend",ida:"friend",osvaldo:"neighbor",lina:"family",chiara:"acquaintance"},schedule:[{from:8,to:11,node:"court",kind:"home"},{from:11,to:13,node:"pia_c",kind:"social"},{from:13,to:17,node:"court",kind:"home"},{from:17,to:20,node:"pia_w",kind:"social"}],agenda:[{node:"court",dwell:12},{node:"pia_c",dwell:8},{node:"pia_w",dwell:6}]},{id:"furio",name:"Furio (corriere)",color:4156105,x:30,z:31,home:"north_e",work:"svc_out",relations:{dario:.5,tiberio:.6,ivan:.3},relType:{dario:"friend",tiberio:"coworker",ivan:"acquaintance"},schedule:[{from:6,to:11,node:"svc_out",kind:"work"},{from:11,to:13,node:"road_c",kind:"work"},{from:13,to:18,node:"svc_in",kind:"work"},{from:18,to:22,node:"north_e",kind:"home"}],agenda:[{node:"north_e",dwell:4},{node:"svc_out",dwell:8},{node:"road_c",dwell:4},{node:"svc_in",dwell:6}]},{id:"bianca",name:"Bianca (cuoca)",color:8011704,x:-18,z:22,home:"bar_in",work:"bar_in",relations:{anna:.6,monica:.75,paolo:.5,luca:.3},relType:{anna:"coworker",monica:"family",paolo:"coworker",luca:"acquaintance"},schedule:[{from:5,to:11,node:"bar_in",kind:"work"},{from:11,to:15,node:"bar_out",kind:"leisure"},{from:15,to:22,node:"bar_in",kind:"work"}],agenda:[{node:"bar_in",dwell:14},{node:"bar_out",dwell:5},{node:"pia_s",dwell:3}]},{id:"gino",name:"Gino (tabaccaio)",color:9095487,x:18,z:8,home:"vic_n",work:"pia_w",relations:{rita:.5,carla:.5,nino:.4,peppe:.4},relType:{rita:"neighbor",carla:"neighbor",nino:"friend",peppe:"acquaintance"},schedule:[{from:7,to:13,node:"pia_w",kind:"work"},{from:13,to:14,node:"vic_n",kind:"home"},{from:14,to:20,node:"pia_w",kind:"work"},{from:20,to:22,node:"bar_in",kind:"social"}],agenda:[{node:"pia_w",dwell:12},{node:"vic_n",dwell:5},{node:"bar_in",dwell:4}]},{id:"rita",name:"Rita (parrucchiera)",color:13199914,x:17,z:0,home:"vic_s",work:"vic_s",relations:{gino:.5,nadia:.3,monica:.4,carla:.3},relType:{gino:"neighbor",nadia:"acquaintance",monica:"friend",carla:"acquaintance"},schedule:[{from:8,to:13,node:"vic_s",kind:"work"},{from:13,to:15,node:"pia_c",kind:"leisure"},{from:15,to:19,node:"vic_s",kind:"work"},{from:19,to:22,node:"bar_out",kind:"social"}],agenda:[{node:"vic_s",dwell:12},{node:"pia_c",dwell:5},{node:"bar_out",dwell:4}]},{id:"osvaldo",name:"Osvaldo (anziano)",color:6974090,x:-22,z:29,home:"court",relations:{chiara:.65,tea:.5,marta:.5,peppe:.5},relType:{chiara:"family",tea:"neighbor",marta:"friend",peppe:"friend"},schedule:[{from:8,to:12,node:"court",kind:"home"},{from:12,to:15,node:"pia_c",kind:"social"},{from:15,to:19,node:"north_c",kind:"social"},{from:19,to:24,node:"court",kind:"home"}],agenda:[{node:"court",dwell:10},{node:"pia_c",dwell:8},{node:"north_c",dwell:5}]},{id:"lina",name:"Lina (infermiera)",color:6279362,x:14,z:16,home:"apt",work:"pia_s",relations:{tea:.7,marco:.3,tiberio:.4,sara:.3},relType:{tea:"family",marco:"neighbor",tiberio:"neighbor",sara:"acquaintance"},schedule:[{from:8,to:16,node:"pia_s",kind:"work"},{from:16,to:18,node:"apt",kind:"home"},{from:18,to:21,node:"court",kind:"social"},{from:21,to:24,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:6},{node:"pia_s",dwell:12},{node:"court",dwell:5}]},{id:"tiberio",name:"Tiberio (commerciante)",color:13934638,x:10,z:16,home:"apt",work:"pia_e",relations:{marco:.5,furio:.6,lina:.4,luca:.3},relType:{marco:"coworker",furio:"coworker",lina:"neighbor",luca:"acquaintance"},schedule:[{from:8,to:13,node:"pia_e",kind:"work"},{from:13,to:15,node:"bar_in",kind:"leisure"},{from:15,to:20,node:"pia_e",kind:"work"},{from:20,to:23,node:"apt",kind:"home"}],agenda:[{node:"apt",dwell:6},{node:"pia_e",dwell:12},{node:"bar_in",dwell:5}]},{id:"monica",name:"Monica (cameriera)",color:14711706,x:6,z:-16,home:"b5_door",work:"bar_in",relations:{bianca:.75,paolo:.6,luca:.4,rita:.4,anna:.5},relType:{bianca:"family",paolo:"coworker",luca:"acquaintance",rita:"friend",anna:"coworker"},schedule:[{from:9,to:15,node:"bar_in",kind:"work"},{from:15,to:17,node:"b5_door",kind:"home"},{from:17,to:23,node:"bar_in",kind:"work"}],agenda:[{node:"b5_door",dwell:5},{node:"bar_in",dwell:14},{node:"pia_c",dwell:4}]},{id:"peppe",name:"Peppe (musicista)",color:8376394,x:16,z:-4,home:"vic_s",relations:{osvaldo:.5,nino:.4,gino:.4,elena:.3},relType:{osvaldo:"friend",nino:"friend",gino:"acquaintance",elena:"acquaintance"},schedule:[{from:10,to:14,node:"vic_s",kind:"home"},{from:14,to:18,node:"pia_c",kind:"leisure"},{from:18,to:23,node:"bar_out",kind:"social"}],agenda:[{node:"vic_s",dwell:6},{node:"pia_c",dwell:8},{node:"bar_out",dwell:7}]},{id:"ida",name:"Ida (vecchia del quartiere)",color:10111610,x:-14,z:-16,home:"b4_door",relations:{nadia:.8,tea:.5,elena:.4,sara:.4},relType:{nadia:"family",tea:"friend",elena:"neighbor",sara:"neighbor"},schedule:[{from:7,to:10,node:"pia_c",kind:"social"},{from:10,to:14,node:"b4_door",kind:"home"},{from:14,to:18,node:"pia_w",kind:"social"},{from:18,to:24,node:"b4_door",kind:"home"}],agenda:[{node:"pia_c",dwell:8},{node:"b4_door",dwell:10},{node:"pia_w",dwell:6}]},{id:"sandro",name:"Sandro (guardiano notturno)",color:4868730,x:-20,z:33,home:"north_c",work:"road_c",relations:{ivan:.35,rossi:.3,verdi:.3,furio:.3},relType:{ivan:"acquaintance",rossi:"acquaintance",verdi:"acquaintance",furio:"acquaintance"},schedule:[{from:6,to:18,node:"north_c",kind:"home"},{from:18,to:24,node:"road_c",kind:"work"}],agenda:[{node:"north_c",dwell:8},{node:"road_c",dwell:6},{node:"vic_n",dwell:5},{node:"pia_s",dwell:4}]}],L1=.42,I1=.25,D1=.06,k1=1,z1=6;function mu(n,e,t){return`${n}|${e.toFixed(2)},${t.toFixed(2)}`}function Is(n,e,t,i,o){n.arriveR=o??.6;const s=mu(i,e,t),r=p1();if(n.pathGoal===s&&n.pathNavRev===r){if(n.pathOk===!1)return{ok:!1,exact:n.pathExact!==!1,goal:{x:e,z:t}};if(n.path&&n.path.length>0)return{ok:!0,exact:n.pathExact!==!1,goal:{x:e,z:t}}}const a=n.pathGoal!==s,l=bc(n.x,n.z,e,t);return n.path=l.points,n.pathIdx=0,n.pathOk=l.ok,n.pathNavRev=r,n.pathExact=l.exact,n.pathGoal=s,a&&(n.stuckFor=0,n.navT=0,n.navX=n.x,n.navZ=n.z),l.ok&&!l.exact&&(n.pathGoal=mu(i,l.goal.x,l.goal.z),i==="goto"&&(n.gotoX=l.goal.x,n.gotoZ=l.goal.z)),l.ok||(n.path=[],n.pathIdx=0),l}function N1(n){n.pathNavRev=-1}function wc(n,e,t){if(!n.path||n.pathIdx>=n.path.length)return"arrived";const i=n.arriveR??.6,o=n.path[n.path.length-1];if(Math.hypot(o.x-n.x,o.z-n.z)<=i)return n.pathIdx=n.path.length,n.speed=0,"arrived";const s=n.path[n.pathIdx],r=s.x-n.x,a=s.z-n.z,l=Math.hypot(r,a),d=n.pathIdx===n.path.length-1?i:L1;if(l<=d)return n.pathIdx++,n.pathIdx>=n.path.length?"arrived":"moving";const u=Math.min(t,l/e);if(n.x+=r/l*u*e,n.z+=a/l*u*e,n.yaw=Math.atan2(r,a),n.speed=u,n.navT=(n.navT??0)+e,n.navT>=I1){const f=Math.hypot(n.x-(n.navX??n.x),n.z-(n.navZ??n.z));if(n.stuckFor=f<D1?(n.stuckFor??0)+n.navT:0,n.navX=n.x,n.navZ=n.z,n.navT=0,n.stuckFor>k1&&N1(n),n.stuckFor>z1)return"stalled"}return"moving"}function Vr(n){n.path=[],n.pathIdx=0,n.pathGoal=null,n.stuckFor=0}function U1(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function F1(n,e,t,i){const o=[];for(const[s,r]of Object.entries(je.nodes)){const a=Math.hypot(r.x-e,r.z-t);if(a<18)continue;const l=i?i.get(s)??0:0,c=U1(n.id+s)%1e3/1e3*5;o.push({id:s,x:r.x,z:r.z,score:a+c-7*l})}return o.sort((s,r)=>r.score-s.score||(s.id<r.id?-1:1)),o}function O1(n){const e=new Map;for(const t of n)t.state!=="alerted"||!t.fleeNode||e.set(t.fleeNode,(e.get(t.fleeNode)??0)+1);return e}function B1(n,e,t,i){const o=F1(n,e,t,i);for(const s of o.slice(0,8))if(bc(n.x,n.z,s.x,s.z).ok)return s;return o[0]??null}function G1(n){const e=Object.entries(je.nodes).map(([t,i])=>({id:t,x:i.x,z:i.z,d:Math.hypot(i.x-n.x,i.z-n.z)})).sort((t,i)=>i.d-t.d||(t.id<i.id?-1:1));for(const t of e.slice(0,10))if(bc(n.x,n.z,t.x,t.z).ok)return t;return null}const Ki=15,H1=Math.PI/3,V1=8,W1=.5,$1=.4;function Hl(n,e,t,i){return e.actorId==="player"&&t<=V1&&i>=W1?"uomo in verde":"sconosciuto"}const X1=.3,q1=.1;function ia(n,e,t,i,o){const s=e-n.x,r=t-n.z,a=s*s+r*r;if(a>Ki*Ki)return{seen:!1};const l=Math.sqrt(a);if(l>1.2){let x=Math.atan2(s,r)-n.yaw;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;if(Math.abs(x)>H1)return{seen:!1}}if(Ri(n.x,n.z,e,t,i))return{seen:!1};const c=Math.max(.35,1-l/(Ki*1.4)),d=.3+l/Ki*1.7,u=(o.next()+o.next()-1)*d,f=(o.next()+o.next()-1)*d;let p=null;return l>10&&o.next()<.35&&(p=o.pick(["ora sbagliata","luogo impreciso","dettaglio confuso"])),{seen:!0,confidence:c,error:p,px:e+u,pz:t+f}}function Y1(n,e,t,i,o,s,r=.05){const a=Math.hypot(n.x-e.x,n.z-e.z),l=ia(n,e.x,e.z,t,i);if(n.memory.includes(e.id)){if(l.seen&&e.actorId){n.gaze||(n.gaze={}),n.gaze[e.id]=(n.gaze[e.id]??0)+r;const f=n.beliefs.get(e.id);if(f&&f.actor==="sconosciuto"&&n.gaze[e.id]>=$1){const p=Hl(n,e,a,l.confidence);p!=="sconosciuto"&&(f.actor=p,delete n.gaze[e.id])}}return"unseen"}if(!l.seen)return n.gaze&&(n.gaze[e.id]=(n.gaze[e.id]??0)*.5),"unseen";n.gaze||(n.gaze={});const c=n.state==="alerted"||n.state==="curious"?q1:X1,d=(n.gaze[e.id]??0)+r;return n.gaze[e.id]=d,d<c||Lt(n.beliefs,e.id,Et({kind:e.type,severity:e.severity,px:l.px,pz:l.pz,place:e.place,actor:Hl(n,e,a,l.confidence),subject:e.victimId??null,channel:"seen",confidence:Math.min(1,l.confidence+.05),t:o,error:l.error,w:+(.5+a*.3).toFixed(2),moved:!!e.moved,provenance:[]}),n.id)==="ignored"||l.confidence<es?"unseen":(delete n.gaze[e.id],Mn(n,e.id),s.addWitness(e,n.id),"learned")}function Sc(n,e,t,i,o,s){const r=e-n.x,a=t-n.z,l=Math.hypot(r,a);let c=i;if(Ri(n.x,n.z,e,t,o)&&(c*=.5),l>c)return{heard:!1};const d=Math.max(.3,1-l/(c*1.3)),u=1+l*.15;return{heard:!0,confidence:d,px:e+(s.next()+s.next()-1)*u,pz:t+(s.next()+s.next()-1)*u,w:+(1+l*.5).toFixed(2)}}function Vl(n,e,t){const i=e.crouch?7:15,o=e.x-n.x,s=e.z-n.z,r=Math.hypot(o,s);if(r>i&&!(e.running&&r<10))return{seen:!1};if(r>1.2){let a=Math.atan2(o,s)-n.yaw;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;if(Math.abs(a)>Math.PI/3&&!e.running)return{seen:!1}}return Ri(n.x,n.z,e.x,e.z,t)?{seen:!1}:{seen:!0,confidence:Math.max(.4,1-r/20)}}const Wl=new Set(["kill","found_corpse","corpse","sabotage"]);function j1(n,e){const t=[];for(const[i,o]of n.beliefs){if(!Wl.has(o.kind))continue;const s=Nn(o,e);s>=.2&&t.push({id:i,b:o,eff:s})}return t.sort((i,o)=>o.eff-i.eff),t}function $l(n,e){const{t,rng:i}=e,o=n.police;for(const c of e.nearby(n,6))if(!(c.role==="police"||c.state==="dead"))for(const[d,u]of c.beliefs){if(!Wl.has(u.kind))continue;const f=n.beliefs.get(d);if(f&&Wl.has(f.kind))continue;const p=Nn(u,t);if(p<.25)continue;const v=u.provenance[u.provenance.length-1]===c.id?[...u.provenance]:[...u.provenance,c.id];if(Lt(n.beliefs,d,Et({kind:u.kind,severity:u.severity,px:u.px,pz:u.pz,place:u.place,actor:u.actor,subject:u.subject??null,channel:"hearsay",confidence:+(p*.7).toFixed(3),t,error:u.error,moved:!!u.moved,provenance:v}),n.id)!=="ignored"){Mn(n,d),e.stats.gossipOps++,e.onInterview?.(n,c,d);break}}const s=j1(n,t),r=s[0],a=r?r.eff:0;if(!r&&n.state!=="curious"){for(const[c,d]of n.beliefs)if(n.alertedBy!==c&&d.kind==="noise"&&Nn(d,t)>=.4){n.alertedBy=c,n.gotoX=d.px,n.gotoZ=d.pz,n.state="curious",o.state!=="ALERTED"&&(o.state="ALERTED",o.since=t);break}}const l=o.state;if(!r)o.state!=="UNAWARE"&&(o.state="UNAWARE",o.since=t,o.confirmed=!1,o.catchT=0);else if(a>=.45||o.confirmed){o.state!=="INVESTIGATING"&&(o.state="INVESTIGATING",o.since=t,o.searchX=r.b.px,o.searchZ=r.b.pz);const c=s.some(u=>u.b.actor==="uomo in verde"),d=Vl(n,e.playerStealth,e.colliders);c&&d.seen&&!o.confirmed&&o.state!=="IDENTIFIED"&&(o.state="IDENTIFIED",o.since=t,o.lastSeenP=t,o.catchT=0)}else a>=.25?o.state!=="ALERTED"&&(o.state="ALERTED",o.since=t,o.searchX=r.b.px,o.searchZ=r.b.pz):a>=.2&&o.state==="UNAWARE"&&(o.state="UNAWARE",o.since=t);if(l!==o.state&&e.onPoliceState?.(n,l,o.state),o.state==="INVESTIGATING"){const c=Math.hypot(n.x-o.searchX,n.z-o.searchZ);let d=null;c<3?(d=e.corpsesNear(n.x,n.z,9),d?(o.confirmed=!0,o.state="SEARCHING",o.since=t,o.searchX=d.x,o.searchZ=d.z,n.state="dwell",n.dwellLeft=2):t-o.since>25?(o.state="ALERTED",o.since=t,o.confirmed=!1,o.catchT=0,n.gotoX=null):n.gotoX||(n.gotoX=o.searchX,n.gotoZ=o.searchZ,n.state="curious")):Number.isFinite(o.searchX)&&n.gotoX==null&&(n.gotoX=o.searchX,n.gotoZ=o.searchZ,n.state="curious"),c<3&&!d&&t-o.since<=25&&(s.some(f=>f.b.actor==="uomo in verde")&&o.state!=="IDENTIFIED"?(o.state="IDENTIFIED",o.since=t,o.lastSeenP=t,o.catchT=0):o.state!=="SEARCHING"&&(o.state="SEARCHING",o.since=t))}if(o.state==="SEARCHING"){const c=s.some(d=>d.b.actor==="uomo in verde");if(o.pickAt=o.pickAt??0,c)if(Vl(n,e.playerStealth,e.colliders).seen){const u=Math.hypot(n.x-e.player.x,n.z-e.player.z);n.gotoX=e.player.x,n.gotoZ=e.player.z,n.state="curious",o.lastSeenP=t,u<2.5&&(o.catchT=(o.catchT??0)+e.dtThink,o.catchT>4&&e.onCaught?.(n))}else t-(o.lastSeenP??-99)>20&&t-o.since>150&&(o.state="ALERTED",o.since=t,o.catchT=0,n.gotoX=null);else t-o.since>120&&(o.state="ALERTED",o.since=t,n.gotoX=null)}if(o.state==="SEARCHING"||o.state==="INVESTIGATING"){const c=e.corpsesNear(n.x,n.z,6);if(c){let d=null;for(const u of e.nearby(n,6))if(!(u.state==="dead"||u.state==="arrested"||u.role==="police")&&!(Math.hypot(u.x-c.x,u.z-c.z)>=2.5)&&!Ri(n.x,n.z,u.x,u.z,e.colliders)){d=u;break}d?o.suspectId!==d.id?(o.suspectId=d.id,o.suspectSince=t):t-(o.suspectSince??t)>=4&&(o.suspectId=null,o.suspectSince=0,o.state="UNAWARE",o.since=t,o.confirmed=!1,o.catchT=0,n.gotoX=null,n.state="dwell",n.dwellLeft=3,d.state="arrested",d.speed=0,d.gotoX=null,d.gotoZ=null,d.fleeNode=null,e.onArrest?.(n,d)):o.suspectSince&&t-o.suspectSince>6&&(o.suspectId=null,o.suspectSince=0)}}}const _u=.4,Z1=.3,K1=[["road_","strada"],["vic_","vicolo"],["north_","vicolo"],["pia_","piazza"],["sq_","piazzale"],["b4","casa"],["b5","casa"],["apt","palazzo"],["bar_","bar"],["svc_","deposito"],["court","corte"]];function J1(n){for(const[e,t]of K1)if(n.startsWith(e))return t;return n}const Q1=600;function Ss(n){return(8+n*24/Q1)%24}function ev(n,e){for(const t of n.schedule)if(t.from<=t.to){if(e>=t.from&&e<t.to)return t}else if(e>=t.from||e<t.to)return t;return null}function tv(n,e,t){if(n.routineShift)if(e>=n.routineShift.until)n.routineShift=null;else{const l=n.routineShift.node;n.agendaBlock!==l&&(n.agendaBlock=l,n.agenda=[{node:l,dwell:20}],n.agendaIdx=0,n.path=[],n.pathIdx=0,n.state="dwell",n.dwellLeft=.3);return}if(!n.schedule||!n.schedule.length)return;const i=Ss(e),o=ev(n,i),s=o?o.node:n.home??n.schedule[0].node;if(n.agendaBlock===s)return;n.agendaBlock=s;const r=o&&o.kind==="social",a=Math.round((r?25:15)+(t?t.next():0)*10);n.agenda=[{node:s,dwell:a}],n.agendaIdx=0,(n.state==="walk"||n.path.length)&&(n.path=[],n.pathIdx=0),n.state="dwell",n.dwellLeft=.3}function Ln(n,e){const{t,navAdj:i,rng:o}=e;if(n.state!=="arrested"){if(n.role==="police")$l(n,e);else{for(const[s,r]of n.beliefs){if(n.alertedBy===s)continue;const a=Nn(r,t);if(r.severity>=_u&&a>=Z1){n.alertedBy=s;const l=As(n,r.subject);if(l&&(n.mournT=t+l),l>=300&&a>=.4){n.state="curious",n.gotoX=r.px,n.gotoZ=r.pz,n.dwellLeft=4;return}n.state=r.channel==="seen"?"alerted":"dwell",n.dwellLeft=4+o.next()*4;const c=O1(e.nearby(n,45)),d=B1(n,r.px,r.pz,c);n.fleeNode=d?d.id:null,n.fleeNode||(n.state="dwell",n.dwellLeft=6);return}}if(n.state!=="alerted"&&n.state!=="curious")for(const[s,r]of n.beliefs){if(n.alertedBy===s)continue;if(Nn(r,t)>=.25&&(r.kind==="noise"||r.severity<_u)&&!(r.channel==="hearsay"&&r.kind==="suspicion")){const l=n.x-r.px,c=n.z-r.pz;if(l*l+c*c<2.25)continue;n.alertedBy=s,n.gotoX=r.px,n.gotoZ=r.pz,n.state="curious";break}}}if(t-n.gossipAt>3&&n.beliefs.size>0&&n.role!=="police"){const s=e.nearby(n,3.5).filter(r=>r.id===n.id||Fo(n,r.id)<=0?!1:[...n.beliefs.entries()].some(([a,l])=>{const c=r.beliefs.get(a);return!c||c.kind!==l.kind}));if(s.length){s.sort((a,l)=>Fo(n,l.id)-Fo(n,a.id));const r=Fo(n,s[0].id)>.15?s[0]:o.next()<.4?s[o.next()*s.length|0]:null;if(r){const a=[...n.beliefs.entries()].find(([l,c])=>{const d=r.beliefs.get(l);return!d||d.kind!==c.kind});if(a){const[l,c]=a,d=Nn(c,t);if(d>=es){const u=n.trust[r.id]??.5,p=c.provenance[c.provenance.length-1]===n.id?[...c.provenance]:[...c.provenance,n.id],x=r.beliefs.has(l);let v=c.place,m=c.px,h=c.pz,E=c.actor,g=c.w??null;if(o.next()<.3&&(v=J1(c.place),m+=(o.next()+o.next()-1)*4,h+=(o.next()+o.next()-1)*4,g!=null&&(g=+(g+4).toFixed(2))),E!=="sconosciuto"&&o.next()<.12&&(E="sconosciuto"),Lt(r.beliefs,l,Et({kind:c.kind,severity:c.severity,px:m,pz:h,place:v,actor:E,subject:c.subject??null,channel:"hearsay",confidence:+(d*(.4+.4*u)*Lr(n,r.id)).toFixed(3),t,error:c.error??(o.next()<.25?"dettaglio alterato nel passaparola":null),w:g,moved:!!c.moved,provenance:p}),r.id)!=="ignored"){if(Mn(r,l),x){const R=.05*(kf[li(r,n.id)]??.6);r.trust[n.id]=Math.min(1,(r.trust[n.id]??.5)+R)}const L=li(r,n.id);if(L!=="family"&&L!=="enemy"){const R=(o.next()-.5)*.06,A=n.relations[r.id]??.3;n.relations[r.id]=Math.max(0,Math.min(1,+(A+R).toFixed(4)))}n.gossipAt=t,r.gossipAt=t,n.talkT=t,r.talkT=t,e.stats.gossipOps++,e.onGossip?.(n,r,l)}}}}}}if(n.state!=="alerted"&&n.state!=="curious"&&(n.state==="walk"||n.state==="dwell"||n.state==="idle")){tv(n,t,o);const s=n.agenda[n.agendaIdx%n.agenda.length];if(n.state!=="walk"){const r=n.mournT&&t<n.mournT?.6:1;if(n.dwellLeft-=e.dtThink*r,n.dwellLeft>.4){for(const a of e.nearby(n,4))if(li(n,a.id)==="enemy"){n.dwellLeft=.4;break}}if(n.dwellLeft<=0){const a=je.nodes[s.node],l=`walk|${s.node}|${n.agendaIdx}`;a?Is(n,a.x,a.z,l,ai(s.node)).ok?(n.state="walk",e.stats.pathComputations++):(n.agendaIdx++,n.dwellLeft=.5):n.agendaIdx++}}}}}function nv(n,e,t){if(!n.agenda||!n.agenda.length){n.state="dwell",n.dwellLeft=1;return}const i=n.agenda[n.agendaIdx%n.agenda.length],o=je.nodes[i.node];if(!o){n.agendaIdx++,n.state="dwell",n.dwellLeft=i.dwell;return}const s=`walk|${i.node}|${n.agendaIdx}`;if(!Is(n,o.x,o.z,s,ai(i.node)).ok){n.agendaIdx++,n.state="dwell",n.dwellLeft=i.dwell,Vr(n);return}const a=wc(n,e,t);a!=="moving"&&(a==="stalled"&&Vr(n),n.agendaIdx++,n.state="dwell",n.dwellLeft=i.dwell)}function iv(n,e,t,i,o){if(!Is(n,e,t,"goto",1).ok)return!0;const r=wc(n,i,o);return r==="moving"?!1:(r==="stalled"&&Vr(n),!0)}const ov=.3,sv=.5,rv=8,av=10,lv=.35;function Xl(n,e,t){for(const i of n.npcs){if(i.state==="dead"||i.level==="L3")continue;const o=Vl(i,e,n.colliders);if(!o.seen){i.awareness&&(i.awareness=Math.max(0,i.awareness-ov*t));continue}const s=Math.hypot(e.x-i.x,e.z-i.z);let r=.5*(1-Math.min(1,s/22));e.crouch&&(r*=.45),e.running&&(r*=1.9),i.awareness=Math.min(1,(i.awareness??0)+Math.max(.06,r)*t),i.awareness>=sv&&dv(n,i,e,s,o)}}const cv=120;function dv(n,e,t,i,o){const s=rs(t.x,t.z);for(const f of e.beliefs.values())if(f.kind==="suspicion"&&f.place===s&&n.t-f.t<cv)return;const r=`spot-${s}-${Math.floor(n.t/av)}`,a=.4+i/22*1.6,l=(n.rng.next()+n.rng.next()-1)*a,c=(n.rng.next()+n.rng.next()-1)*a,d=i<=rv;Lt(e.beliefs,r,Et({kind:"suspicion",severity:lv,px:t.x+l,pz:t.z+c,place:s,actor:d?"uomo in verde":"sconosciuto",channel:"seen",confidence:o.confidence*(d?1:.85),t:n.t,error:d?null:"non l'ho riconosciuto",provenance:[]}),e.id)!=="ignored"&&Mn(e,r)}const uv=6,gu=.55;function Ec(n,e,t,i,o){const s=rs(e,t);n.journal.append("noise",{t:n.t,severity:o,x:e,z:t,actorId:null,place:s});const r=`noise-${n.t.toFixed(1)}-${Math.round(e)}-${Math.round(t)}`;let a=0;for(const l of n.npcs){if(l.state==="dead")continue;const c=Sc(l,e,t,i,n.colliders,n.rng);if(!c.heard)continue;Lt(l.beliefs,r,Et({kind:"noise",severity:o,px:c.px,pz:c.pz,place:s,actor:"sconosciuto",channel:"heard",confidence:c.confidence,t:n.t,w:c.w,provenance:[]}),l.id)!=="ignored"&&(Mn(l,r),a++)}return a}function fv(n,e,t){if(!e.running||e.crouch)return 0;const i=Math.floor(n.t/gu),o=Math.floor((n.t-t)/gu);return i===o?0:Ec(n,e.x,e.z,uv,.25)}const hv=1.2;function Wr(n,e){return!e||e.state!=="dead"||e.hidden?!1:(e.hidden=!0,e.death&&(e.death.hidden=!0),n.stats.concealed=(n.stats.concealed??0)+1,!0)}function ql(n,e,t,i){let o=null,s=i*i;for(const r of n.npcs){if(r.state!=="dead"||r.hidden)continue;const a=r.x-e,l=r.z-t,c=a*a+l*l;c<s&&(s=c,o=r)}return o}function Ds(n,e,t,i){return n.hidden?e*e+t*t<=Math.min(i,hv)**2:!0}const xu=30,vu=60,pv=12,mv=5,_v=4,gv=5,xv=2,vv=24,Rs=8,yu=2,yv=2;function Uf(n,e,t,i,o,s={}){return{t:0,npcs:n,journal:e,colliders:t,navAdj:i,rng:o,hooks:s,colliderEpoch:Ls(),counts:{L1:0,L2:0,L3:0},simMs:0,aiMs:0,unseen:[],grid:new Map,stats:{perceptionChecks:0,gossipOps:0,pathComputations:0,thinkRuns:0,pruned:0,thinkByLevel:{L1:0,L2:0,L3:0},budgetSkips:0,budgetPressure:0,corpseDiscoveries:0},pruneAt:0,corpseAt:0,corpseReported:new Set}}function bv(n,e){return`${Math.floor(n/Rs)},${Math.floor(e/Rs)}`}function bu(n){n.grid.clear(),n.npcs.forEach((e,t)=>{const i=bv(e.x,e.z);let o=n.grid.get(i);o||(o=[],n.grid.set(i,o)),o.push(t)})}function Mu(n,e,t){const i=[],o=Math.floor(e.x/Rs),s=Math.floor(e.z/Rs),r=Math.ceil(t/Rs),a=t*t;for(let l=o-r;l<=o+r;l++)for(let c=s-r;c<=s+r;c++){const d=n.grid.get(`${l},${c}`);if(d)for(const u of d){const f=n.npcs[u];if(f===e||f.state==="dead")continue;const p=f.x-e.x,x=f.z-e.z;p*p+x*x<=a&&i.push(f)}}return i}function Mv(n,e,t,i){let o,s,r,a=null;if(i){o=.95;const c=.3;s=e.x+(n.rng.next()+n.rng.next()-1)*c,r=e.z+(n.rng.next()+n.rng.next()-1)*c}else{const c=ia(t,e.x,e.z,n.colliders,n.rng);if(!c.seen)return!1;o=c.confidence,s=c.px,r=c.pz,a=c.error}return Lt(t.beliefs,e.id,Et({kind:e.type,severity:e.severity,px:s,pz:r,place:e.place,actor:e.actorId==="player"?"uomo in verde":e.actorId??"sconosciuto",subject:e.victimId??null,channel:"seen",confidence:o,t:n.t,error:a,moved:!!e.moved,provenance:[]}),t.id)==="ignored"?!1:(Mn(t,e.id),n.journal.addWitness(e,t.id),!0)}function _n(n,e,t){const i=performance.now();n.colliderEpoch!==Ls()&&(n.colliderEpoch=Ls(),n.colliders=ao()),n.t+=t;let o=0,s=0,r=0;for(const g of n.unseen)for(const y of n.npcs){if(y.state==="dead")continue;const L=y.x-g.x,R=y.z-g.z;L*L+R*R>15*15||(n.stats.perceptionChecks++,Y1(y,g,n.colliders,n.rng,n.t,n.journal,t)==="learned"&&n.hooks.onWitness?.(y,g))}for(let g=n.unseen.length-1;g>=0;g--)if(n.t-n.unseen[g].t>yv){const y=n.unseen[g];for(const L of n.npcs)L.gaze&&delete L.gaze[y.id];n.unseen.splice(g,1)}Xl(n,e,t),fv(n,e,t);const a=n.npcs.map(g=>({n:g,d:Math.hypot(g.x-e.x,g.z-e.z)})).sort((g,y)=>g.d-y.d),l=[];for(const g of a){const y=g.n.level==="L1";(y?g.d<=xu+mv:g.d<=xu)&&l.push({o:g,eff:g.d-(y?_v:0)})}l.sort((g,y)=>g.eff-y.eff);const c=new Set(l.slice(0,pv).map(g=>g.o.n));for(const{n:g,d:y}of a){const L=g.level,R=L==="L1"||L==="L2"?vu+gv:vu;g.level=c.has(g)?"L1":y<=R?"L2":"L3",g.level==="L1"?o++:g.level==="L2"?s++:r++}bu(n);for(const{n:g}of a)g.thinkAt-=t;const d=performance.now(),u={x:e.x,z:e.z,crouch:!!e.crouch,running:!!e.running},f=(g,y,L)=>{let R=null,A=L*L;for(const P of n.npcs){if(P.state!=="dead")continue;const b=P.x-g,M=P.z-y,I=b*b+M*M;I>=A||Ds(P,b,M,L)&&(Ri(g,y,P.x,P.z,n.colliders)||(A=I,R=P))}return R?{x:R.x,z:R.z,id:R.id}:null},p={t:n.t,npcs:n.npcs,navAdj:n.navAdj,rng:n.rng,dtThink:.25,stats:n.stats,nearby:(g,y)=>Mu(n,g,y),player:e,playerStealth:u,colliders:n.colliders,corpsesNear:f,onGossip:n.hooks.onGossip,onInterview:n.hooks.onInterview,onPoliceState:n.hooks.onPoliceState,onCaught:n.hooks.onCaught,onArrest:n.hooks.onArrest},x=Math.round(n.t/t);let v=0,m=!1;for(let g=0;g<a.length;g++){const{n:y}=a[(g+x)%a.length],L=y.level==="L1"?.25:.5;if(y.thinkAt<=0&&y.level!=="L3"&&y.state!=="dead"){if(v>=vv){n.stats.budgetSkips++;continue}v++,y.thinkAt=L,n.stats.thinkRuns++,n.stats.thinkByLevel[y.level]++,Ln(y,p),!m&&!(v&3)&&performance.now()-d>xv&&(m=!0,n.stats.budgetPressure++)}}n.aiMs=performance.now()-d;for(const{n:g}of a){if(g.state==="dead"){g.speed=0;continue}if(g.level==="L3"&&g.state!=="arrested"){if(g.symbolAt=(g.symbolAt??0)+t,g.symbolAt>6){g.symbolAt=0;const L=g.agenda[g.agendaIdx%g.agenda.length],R=je.nodes[L.node],A=Math.hypot(g.x-e.x,g.z-e.z)>45;R&&A&&Ri(e.x,e.z,R.x,R.z,n.colliders)&&(g.x=R.x,g.z=R.z,g.agendaIdx++)}continue}if(g.state!=="walk"&&g.state!=="alerted"&&g.state!=="curious"){g.speed=0;continue}if(g.state==="curious"&&g.gotoX!=null){const L=Ms(g.gotoX,g.gotoZ,.35,n.colliders);g.gotoX=L.x,g.gotoZ=L.z,iv(g,g.gotoX,g.gotoZ,t,g.role==="police"?2.4:1.7)&&(g.state="dwell",g.dwellLeft=3+n.rng.next()*4,g.gotoX=null,g.gotoZ=null)}else if(g.state==="alerted"&&g.fleeNode){const L=je.nodes[g.fleeNode];if(!L)g.state="dwell",g.dwellLeft=5,g.fleeNode=null;else{const R=Math.max(1.5,ai(g.fleeNode));let A=Is(g,L.x,L.z,`flee|${g.fleeNode}`,R);if(!A.ok){const P=G1(g);P?(g.fleeNode=P.id,A=Is(g,P.x,P.z,`flee|${P.id}`,Math.max(1.5,ai(P.id)))):(g.state="dwell",g.dwellLeft=5,g.fleeNode=null,A=null)}if(A){const P=wc(g,t,2.6);P!=="moving"&&(P==="stalled"&&Vr(g),g.state="dwell",g.dwellLeft=5,g.fleeNode=null)}}}else nv(g,t,1.6);const y=Ms(g.x,g.z,.35,n.colliders);g.x=y.x,g.z=y.z}bu(n);const h=.7,E=h*h;for(const{n:g}of a)if(!(g.state==="dead"||g.level==="L3"))for(const y of Mu(n,g,h)){if(y.level==="L3"||y.id<g.id)continue;let L=y.x-g.x,R=y.z-g.z,A=L*L+R*R;if(A>=E)continue;A<1e-9&&(L=1,R=0,A=1);const P=Math.sqrt(A),b=(h-P)/2;g.x-=L/P*b,g.z-=R/P*b,y.x+=L/P*b,y.z+=R/P*b;const M=Ms(g.x,g.z,.35,n.colliders);g.x=M.x,g.z=M.z;const I=Ms(y.x,y.z,.35,n.colliders);y.x=I.x,y.z=I.z}if(n.t-n.corpseAt>1){n.corpseAt=n.t;for(const g of n.npcs){if(g.state!=="dead"||n.corpseReported.has(g.id))continue;let y=null,L=!1;for(const A of n.npcs){if(A.state==="dead")continue;const P=A.x-g.x,b=A.z-g.z,M=P*P+b*b;if(Ds(g,P,b,Ki)&&!(M>Ki*Ki)){if(M<=yu*yu){if(!Ri(A.x,A.z,g.x,g.z,n.colliders)){y=A,L=!0;break}continue}if(ia(A,g.x,g.z,n.colliders,n.rng).seen){y=A;break}}}if(!y)continue;n.corpseReported.add(g.id);const R=n.journal.append("found_corpse",{t:n.t,severity:.55,x:g.x,z:g.z,actorId:null,victimId:g.id,place:rs(g.x,g.z),moved:!!g.hidden});n.unseen.push(R),Mv(n,R,y,L)&&(n.stats.corpseDiscoveries++,n.hooks.onWitness?.(y,R))}}if(n.t-n.pruneAt>10){n.pruneAt=n.t;for(const g of n.npcs)n.stats.pruned+=Mc(g.beliefs,n.t),Ir(g,n.t)}n.counts={L1:o,L2:s,L3:r},n.simMs=performance.now()-i}function wt(n,e,t){const i=n.journal.append(e,{t:n.t,...t});return n.unseen.push(i),i}function wv(){const n=new Set,e={x:0,z:0,active:!1};let t=!1;const i={dx:0,dy:0},o=new Set,s=[],r=(A,P,b,M)=>{A.addEventListener(P,b,M),s.push([A,P,b,M])};r(window,"keydown",A=>{["ArrowUp","ArrowDown","Space"].includes(A.code)&&A.preventDefault(),A.code==="F3"&&A.preventDefault(),n.add(A.code),o.add(A.code)}),r(window,"keyup",A=>n.delete(A.code));let a=!1,l=0,c=0;const d=document.getElementById("app");r(d,"mousedown",A=>{a=!0,l=A.clientX,c=A.clientY}),r(window,"mousemove",A=>{a&&(i.dx+=A.clientX-l,i.dy+=A.clientY-c,l=A.clientX,c=A.clientY)}),r(window,"mouseup",()=>a=!1),r(d,"touchstart",A=>{for(const P of A.changedTouches)P.clientX>innerWidth*.4&&!a&&(a=!0,l=P.clientX,c=P.clientY)},{passive:!0}),r(d,"touchmove",A=>{for(const P of A.changedTouches)a&&(i.dx+=P.clientX-l,i.dy+=P.clientY-c,l=P.clientX,c=P.clientY)},{passive:!0}),r(d,"touchend",()=>a=!1);const u=document.getElementById("joy"),f=document.getElementById("stick");let p=null;const x=(A,P)=>{f.style.left=34+A+"px",f.style.top=34+P+"px"};r(u,"touchstart",A=>{p=A.changedTouches[0].identifier,A.preventDefault()},{passive:!1}),r(window,"touchmove",A=>{for(const P of A.changedTouches)if(P.identifier===p){const b=u.getBoundingClientRect();let M=P.clientX-(b.left+60),I=P.clientY-(b.top+60);const _=Math.hypot(M,I)||1,S=Math.min(_,44);M=M/_*S,I=I/_*S,x(M,I),e.x=M/44,e.z=I/44,e.active=!0}},{passive:!0}),r(window,"touchend",A=>{for(const P of A.changedTouches)P.identifier===p&&(p=null,e.x=0,e.z=0,e.active=!1,x(0,0))});const v=document.getElementById("btn-act"),m=document.getElementById("btn-run"),h=()=>o.add("KeyE"),E=()=>t=!t;r(v,"click",h),r(m,"click",E);const g=document.getElementById("btn-fight"),y=document.getElementById("btn-whistle"),L=document.getElementById("btn-crouch");return g&&r(g,"click",()=>o.add("KeyF")),y&&r(y,"click",()=>o.add("KeyQ")),L&&r(L,"click",()=>o.add("KeyC")),{api:{axis(){let A=0,P=0;(n.has("KeyW")||n.has("ArrowUp"))&&(P-=1),(n.has("KeyS")||n.has("ArrowDown"))&&(P+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(A-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(A+=1),e.active&&(A+=e.x,P+=e.z);const b=Math.hypot(A,P);return b>1&&(A/=b,P/=b),{x:A,z:P}},run(){return n.has("ShiftLeft")||n.has("ShiftRight")||t},consumeLook(){const A={dx:i.dx,dy:i.dy};return i.dx=0,i.dy=0,A},wasPressed(A){return o.has(A)?(o.delete(A),!0):!1},injectKey(A){o.add(A),n.add(A)},releaseKey(A){n.delete(A)},injectLook(A,P){i.dx+=A,i.dy+=P},setJoy(A,P){e.x=A,e.z=P,e.active=!0},clearJoy(){e.x=0,e.z=0,e.active=!1,x(0,0)}},dispose(){for(const[A,P,b,M]of s)A.removeEventListener(P,b,M);s.length=0}}}function Ff(n,e){return{x:n,z:e,yaw:Math.PI,speed:0,mesh:null,interactTarget:null,crouch:!1,running:!1,attackT:-99}}function Of(n,e,t,i,o){const s=e.axis(),r=e.run()&&!n.crouch,a=n.crouch?1.5:r?5.2:3,l=Math.sin(t),c=Math.cos(t),d=-s.x*c-s.z*l,u=s.x*l-s.z*c,f=Math.hypot(d,u);if(f>.01){const x=Math.min(a,a*f);n.x+=d/f*x*i,n.z+=u/f*x*i,n.yaw=Math.atan2(d,u),n.speed=x}else n.speed=0;n.running=n.speed>3.5;const p=Ms(n.x,n.z,.4,o);n.x=p.x,n.z=p.z}function Sv(n){return{x:n.x,z:n.z,yaw:n.yaw,crouch:n.crouch,attackCd:n.attackCd??-99,whistleCd:n.whistleCd??-99,attackT:n.attackT??-99}}function Ev(n,e){n.crouch=e.crouch??!1,n.running=!1,n.attackCd=e.attackCd??-99,n.whistleCd=e.whistleCd??-99,n.attackT=e.attackT??-99}class Tv extends yf{constructor(){super();const e=new ut;e.deleteAttribute("uv");const t=new jo({side:Jt}),i=new jo,o=new wf(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const s=new ae(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new ae(e,i);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new ae(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ae(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ae(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new ae(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const u=new ae(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new ae(e,Co(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new ae(e,Co(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const x=new ae(e,Co(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const v=new ae(e,Co(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new ae(e,Co(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const h=new ae(e,Co(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Co(n){const e=new ri;return e.color.setScalar(n),e}const $r=new Map;function Av(n){let e=$r.get(n);return e||(e=new Gn({color:n}),$r.set(n,e)),e}const Xr=new Map;function Yl(n,e){let t=Xr.get(n);return t||(t=e(),Xr.set(n,t)),t}const qr=new Map;function Oo(n){let e=qr.get(n);return e||(e=new ri({color:n}),qr.set(n,e)),e}const Yr=new Map,wu=new Map;function Rv(n){let e=n>>>0||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ls(n,e,t,i){let o=Yr.get(n);if(o)return o;if(typeof document>"u")return null;const s=document.createElement("canvas");return s.width=e,s.height=t,i(s.getContext("2d"),e,t),o=new no(s),o.wrapS=o.wrapT=Pi,o.colorSpace=Vt,Yr.set(n,o),o}function cs(n,e,t,i,o,s){return(r,a,l)=>{r.fillStyle=n,r.fillRect(0,0,a,l);const c=Rv(t);for(let d=0;d<e;d++){r.fillStyle=c()<.5?i:o,r.globalAlpha=.05+c()*.09;const u=1+c()*2.5;r.fillRect(c()*a,c()*l,u,u)}if(r.globalAlpha=1,s){r.strokeStyle="rgba(0,0,0,0.25)",r.lineWidth=1;for(let d=0;d<3;d++){r.beginPath();let u=c()*a,f=c()*l;r.moveTo(u,f);for(let p=0;p<4;p++)u+=(c()-.5)*40,f+=(c()-.5)*40,r.lineTo(u,f);r.stroke()}}}}function Cv(){return ls("asphalt",128,128,cs("#3a3d44",900,11,"#55585f","#22242a",!0))}function Pv(){return ls("concrete",128,128,cs("#9a958a",700,23,"#b5b0a4","#7c776d",!1))}function Lv(){return ls("plaster",128,128,cs("#d8d2c4",500,37,"#e8e2d4","#b8b0a0",!1))}function Iv(){return ls("grass",128,128,cs("#5a6b44",1e3,51,"#6d7f52","#434f31",!1))}function Dv(){return ls("paving",128,128,(n,e,t)=>{cs("#8f8a7c",500,67,"#a09a8c","#78736a",!1)(n,e,t),n.strokeStyle="rgba(40,38,32,0.55)",n.lineWidth=2;for(let i=0;i<=2;i++)n.beginPath(),n.moveTo(i*e/2,0),n.lineTo(i*e/2,t),n.stroke(),n.beginPath(),n.moveTo(0,i*t/2),n.lineTo(e,i*t/2),n.stroke()})}function kv(){return ls("roof",128,128,(n,e,t)=>{cs("#6b4a38",400,83,"#7d5a46","#54382a",!1)(n,e,t),n.strokeStyle="rgba(30,18,12,0.5)",n.lineWidth=2;for(let i=0;i<t;i+=16)n.beginPath(),n.moveTo(0,i),n.lineTo(e,i),n.stroke();n.strokeStyle="rgba(30,18,12,0.3)";for(let i=0,o=0;i<t;i+=16,o++)for(let s=o%2*8;s<e;s+=16)n.beginPath(),n.moveTo(s,i),n.lineTo(s,i+16),n.stroke()})}function zv(){for(const n of Xr.values())n.dispose();for(const n of $r.values())n.dispose();for(const n of qr.values())n.dispose();Xr.clear(),$r.clear(),qr.clear();for(const n of Yr.values())n.dispose();for(const n of wu.values())n.dispose();Yr.clear(),wu.clear()}function Nv(n){const e=Av;Cv(),Pv(),Lv(),Iv(),Dv(),kv();const t=(_,S,D=0,z=0,k=0,$=0)=>(S.position.set(D,z,k),$&&(S.rotation.y=$),_.add(S),S),i=(_,S,D,z)=>{const k=new ae(new ut(_,S,D),z);return k.castShadow=!0,k.receiveShadow=!0,k},o=(_,S,D)=>{const z=new ae(new Dt(_,S),D);return z.rotation.x=-Math.PI/2,z.receiveShadow=!0,z},s=(_,S,D,z,k=8)=>{const $=new ae(new Ft(_,S,D,k),z);return $.castShadow=!0,$.receiveShadow=!0,$},r={grass:s1(100,100),asphalt:t1(100,8),sidewalk:Jd(100,2.2,0),sidewalk2:Jd(100,2.2,1),curb:Va(1,100,.3),lineWhite:Oo(15263450),lineYellow:Oo(14198842),piazza:Ha(18,16),piazzaDark:Ha(18,2,!0),alley:n1(4,16),plasterBar:To(0,16,5),plasterB2:To(1,8,9),plasterB3:To(2,8,6),plasterB4:To(3,14,6),plasterB5:To(4,16,5),brickShop:i1(0,8,3),stoneBase:Va(0,14,1.2),plinth:Qd(0,8,1.1),roof:o1(12,10),roofFlat:Qd(2,12,10),trimWhite:Va(2,8,.3),woodDark:Fn(2,2,2),woodMid:Fn(0,2,2),doorGreen:Fn(1,1.4,2.4),doorBlue:Fn(1,1.4,2.4),doorBrown:Fn(2,1.4,2.4),shutterGreen:Fn(1,1,2),shutterBrown:Fn(2,1,2),winGlass:ws(13621466,.42),winLit:Oo(14202730),metal:Nt("iron"),metalLight:Nt("steel"),brass:Nt("brass"),binGreen:Nt("painted"),dumpster:Nt("painted"),barrelRust:Nt("rust"),tarpBlue:e(2771578),hedge:a1(),trunk:r1(),leaf:eu(0),leafDark:eu(1),carRed:Ts(9054754),carBlue:Ts(2771578),carGray:Ts(6975092),tire:e(1842206),awningRed:e(10107438),awningStripe:e(15130056),signBar:Fn(2,4,1),signGold:Oo(15255658),paper:e(14209730),posterR:e(11024946),posterB:e(2775706),posterY:e(13148218),clay:e(11034682),sack:e(10127978),barFloor:l1(16,12),pavingAlt:Ha(8,8)},a=Zd("stain"),l=Zd("scratch"),c=(_,S,D,z=.8)=>{const k=new ae(new Dt(S,D),new ri({map:_,transparent:!0,opacity:z,depthWrite:!1}));return k.rotation.x=-Math.PI/2,k},d=o(100,100,r.grass);n.add(d),d.position.y=0;for(const[_,S,D,z]of[[-38,-28,22,14],[30,-28,26,12],[-38,32,12,10]]){const k=o(D,z,r.plinth);t(n,k,_,.012,S)}const u=je.road,f=u.maxX-u.minX,p=u.maxZ-u.minZ,x=o(f,p,r.asphalt);t(n,x,0,.02,0);for(let _=-49;_<=49;_+=2.4)Math.abs(_-18)<3||Math.abs(_)<2.2||Math.abs(_+20)<2.2||t(n,i(1.2,.012,.14,r.lineWhite),_,.032,0);for(const _ of[-3.4,3.4])t(n,i(f,.012,.12,r.lineWhite),0,.032,_);for(const _ of[-1,1]){const S=i(100,.14,2.2,r.sidewalk);t(n,S,0,.07,_*5.1),t(n,i(100,.16,.18,r.curb),0,.08,_*3.95)}for(const _ of[-20,0])for(let S=-3;S<=3;S++)t(n,i(1.6,.014,.55,r.lineWhite),_,.034,S*1);for(let _=5;_<=19;_+=3.2)t(n,i(.12,.012,2,r.lineYellow),_,.033,-3);for(const[_,S]of[[-12,1.5],[24,-1.5],[-34,.5]]){const D=new ae(new wi(.45,12),e(2763824));D.rotation.x=-Math.PI/2,t(n,D,_,.035,S)}const v=je.piazza,m=o(v.w,v.d,r.piazza);t(n,m,v.cx,.03,v.cz),t(n,i(v.w+.4,.1,.5,r.piazzaDark),v.cx,.05,v.cz-v.d/2),t(n,i(v.w+.4,.1,.5,r.piazzaDark),v.cx,.05,v.cz+v.d/2),t(n,i(.5,.1,v.d+.4,r.piazzaDark),v.cx-v.w/2,.05,v.cz),t(n,i(.5,.1,v.d+.4,r.piazzaDark),v.cx+v.w/2,.05,v.cz);{const _=new Fe,S=s(1.6,1.7,.55,r.plinth,12);t(_,S,0,.27,0);const D=s(1.4,1.4,.1,r.woodDark,12);t(_,D,0,.55,0);const z=s(.16,.22,1.8,r.trunk,7);t(_,z,0,1.4,0);const k=new ae(new Ye(1.3,9,7),r.leaf);k.castShadow=!0,t(_,k,0,2.9,0);const $=new ae(new Ye(.85,8,6),r.leafDark);$.castShadow=!0,t(_,$,.7,2.3,.4),t(n,_,37,0,25.5)}{const _=o(4,16,r.alley);t(n,_,18,.025,5);const S=new ae(new wi(.9,12),tu());S.rotation.x=-Math.PI/2,t(n,S,17.2,.04,6.5),t(n,c(a,2.4,3.2),18,.045,3.5)}[[-20,12.4,4,2.5],[24,12.4,4,2.5],[12,12.4,3,2],[-18,-13.4,3,2],[10,-13.4,3,2],[-28.8,6.6,1.6,1.6],[-3.8,-5.4,1.6,1.6],[21.6,4.8,2.6,2],[-24.5,30.2,2.6,2],[-17,27.2,4,2],[37,21.5,5,4]].forEach(([S,D,z,k],$)=>{t(n,c($%3===2?l:a,z,k,.75),S,.05+$%3*.001,D)});const h={bar:r.plasterBar,b2:r.plasterB2,b3:r.plasterB3,b4:r.plasterB4,b5:r.plasterB5},E={bar:r.woodMid,b2:r.doorGreen,b3:r.doorBlue,b4:r.doorGreen,b5:r.doorBrown};let g=null;if(typeof document<"u"){const _=document.createElement("canvas");_.width=256,_.height=64;const S=_.getContext("2d");S.fillStyle="#1e3a2e",S.fillRect(0,0,256,64),S.strokeStyle="#c8a03a",S.lineWidth=4,S.strokeRect(4,4,248,56),S.fillStyle="#e8c86a",S.font="bold 30px serif",S.textAlign="center",S.textBaseline="middle",S.fillText("BAR CENTRALE",128,34),g=new no(_),g.colorSpace=Vt}let y=null;if(typeof document<"u"){const _=document.createElement("canvas");_.width=256,_.height=64;const S=_.getContext("2d");S.fillStyle="#5a1f1a",S.fillRect(0,0,256,64),S.strokeStyle="#e6ddc8",S.lineWidth=3,S.strokeRect(4,4,248,56),S.fillStyle="#f0e6cc",S.font="bold 28px serif",S.textAlign="center",S.textBaseline="middle",S.fillText("ALIMENTARI",128,34),y=new no(_),y.colorSpace=Vt}function L(_,S,D,z){const k=new Fe,$=new ae(new Dt(_,S),e(1316894));if(t(k,$,0,0,-.06),t(k,i(_,S,.06,r.winGlass),0,0,0),z){const G=new ae(new Dt(_*.8,S*.8),r.winLit);t(k,G,0,0,.06)}if(t(k,i(_+.16,.1,.08,r.trimWhite),0,S/2,.02),t(k,i(_+.16,.1,.08,r.trimWhite),0,-S/2,.02),t(k,i(.1,S,.08,r.trimWhite),-_/2,0,.02),t(k,i(.1,S,.08,r.trimWhite),_/2,0,.02),t(k,i(.07,S,.06,r.trimWhite),0,0,.03),t(k,i(_,.07,.06,r.trimWhite),0,0,.03),t(k,i(_+.4,.09,.22,r.plinth),0,-S/2-.12,.06),D){const G=_>1.4?r.shutterGreen:r.shutterBrown;t(k,i(.45,S,.05,G),-_/2-.28,0,0),t(k,i(.45,S,.05,G),_/2+.28,0,0)}return k}function R(_,S,D,z={}){const k=new Fe;t(k,i(_+.3,S+.15,.12,r.plinth),0,.075,-.02),t(k,i(_,S,.14,D),0,0,.02),t(k,i(_+.5,.14,.2,r.trimWhite),0,S/2+.1,.04),t(k,i(_+.6,.14,.7,r.sidewalk),0,-S/2+.07,.35);const $=new ae(new Ye(.09,8,6),r.winLit);if(t(k,$,_/2+.35,S/2-.3,.12),t(k,i(.08,.08,.08,r.metal),_/2+.35,S/2-.18,.06),z.mailbox&&t(k,i(.3,.4,.12,r.metalLight),-_/2-.35,.1,.1),z.number){const G=new ae(new Dt(.28,.2),r.paper);t(k,G,_/2+.35,.35,.09)}return k}const A={bar:11569487,b2:8361648,b3:10256271,b4:9150586,b5:10525311};for(const _ of je.buildings){const S=new Fe,D=h[_.id]??e(A[_.id]??8947848);if(_.interior){const $=_.w/2,G=_.d/2,J=_.door.width/2,te=_.door.at,ee=_.z-G,be=_.z+G,ye=[[Su(_.x-$,te-J),ee,te-J-(_.x-$),.4],[Su(te+J,_.x+$),ee,_.x+$-(te+J),.4],[_.x,be,_.w,.4]];for(const[le,Ae,Le,st]of ye){const U=i(Le,3.2,st,D);t(S,U,le,3.2/2,Ae)}for(const le of[_.x-$,_.x+$]){const Ae=i(.4,3.2,_.d,D);t(S,Ae,le,3.2/2,_.z)}if(t(S,i(_.w+.3,.9,.3,r.signBar),_.x,3.2-.4,ee-.1),g){const le=new ae(new Dt(6.4,1),new Gn({map:g}));t(S,le,_.x,3.2-.4,ee-.27),le.rotation.y=Math.PI}t(S,i(.08,.08,1,r.metal),_.x+4.2,3.2-.2,ee-.6),t(S,i(.9,.7,.08,r.signBar),_.x+4.2,3.2-.7,ee-1);const q=new ae(new Dt(.7,.5),r.signGold);t(S,q,_.x+4.2,3.2-.7,ee-1.05),q.rotation.y=Math.PI,t(S,i(_.w+.6,.3,_.d+.6,r.trimWhite),_.x,3.2+.15,_.z);const ne=i(_.w+.6,.35,_.d+.6,r.roofFlat);t(S,ne,_.x,3.2+.4,_.z),t(S,i(_.w+.6,.25,.3,D),_.x,3.2+.7,_.z-_.d/2-.15);for(const le of[_.x-5.5,_.x+5.5]){const Ae=L(2.2,1.4,!1,!0);Ae.position.set(le,1.9,ee-.03),Ae.rotation.y=Math.PI,S.add(Ae)}t(S,i(_.w+.14,.9,.14,r.plinth),_.x,.45,ee-.02);const _e=R(1.4,2.4,r.woodMid,{});_e.position.set(te,1.2,ee-.05),_e.rotation.y=Math.PI,S.add(_e);const re=i(5,.08,1.6,r.awningRed);re.rotation.x=.28,t(S,re,_.x,3.1,ee-.9);for(const le of[-2.3,2.3]){const Ae=s(.04,.04,2.4,r.metal,6);t(S,Ae,_.x+le,1.6,ee-1.6)}const Re=R(1,2.1,r.metal,{});Re.position.set(_.x+3,1.05,be+.05),S.add(Re);for(const[le,Ae]of[[1.5,1.2],[2.4,.9],[4.6,1.4]]){const Le=new ae(new Ye(.35,7,6),r.sack);Le.castShadow=!0,t(S,Le,_.x+le,.3,be+Ae)}const De=o(_.w,_.d,r.barFloor);t(S,De,_.x,.045,_.z),t(S,i(4,1,1,r.woodDark),_.x,.5,_.z+2.5),t(S,i(6,.15,.5,r.woodMid),_.x,2.2,_.z+5.4);for(let le=-2;le<=2;le++)t(S,s(.12,.12,.3,[r.posterR,r.posterB,r.posterY,r.paper,r.winGlass][le+2],6),_.x+le*1,2,_.z+5.4);for(const[le,Ae]of[[-2.5,-1.5],[0,-2],[2.5,-1]]){const Le=s(.5,.5,.1,r.woodMid,10);t(S,Le,_.x+le,.75,_.z+Ae),t(S,s(.08,.08,.75,r.metal,6),_.x+le,.37,_.z+Ae);for(const[U,zt]of[[-.7,0],[.7,0]])t(S,i(.4,.06,.4,r.woodDark),_.x+le+U,.45,_.z+Ae+zt),t(S,s(.04,.04,.45,r.metal,6),_.x+le+U,.22,_.z+Ae+zt);const st=new ae(new Ye(.12,8,6),r.winLit);t(S,st,_.x+le,2.6,_.z+Ae),t(S,s(.02,.02,.6,r.metal,5),_.x+le,2.95,_.z+Ae)}for(const[le,Ae]of[[-4.5,-3.2],[-2.2,-4],[3,-3.4]]){const Le=s(.55,.55,.08,r.woodMid,10);t(S,Le,_.x+le,.72,_.z+Ae-6),t(S,s(.06,.06,.72,r.metal,6),_.x+le,.36,_.z+Ae-6);for(const st of[.4,2.5])t(S,i(.42,.06,.42,r.woodDark),_.x+le+Math.cos(st)*.95,.45,_.z+Ae-6+Math.sin(st)*.95)}{const le=s(.05,.05,2.4,r.woodDark,6);t(S,le,_.x-3.3,1.2,_.z-9.8);const Ae=new ae(new uc(1.6,.7,8),r.awningRed);Ae.castShadow=!0,t(S,Ae,_.x-3.3,2.6,_.z-9.8)}for(const le of[-7,7]){t(S,i(.9,.5,.5,r.woodMid),_.x+le,.35,ee-.9),t(S,s(.14,.1,.3,r.clay,7),_.x+le-.2,.75,ee-.9),t(S,s(.14,.1,.3,r.clay,7),_.x+le+.2,.75,ee-.9);const Ae=new ae(new Ye(.2,7,6),r.leaf);Ae.castShadow=!0,t(S,Ae,_.x+le-.2,1,ee-.9);const Le=new ae(new Ye(.2,7,6),r.posterR);Le.castShadow=!0,t(S,Le,_.x+le+.2,1,ee-.9)}}else{const z=_.h;t(S,i(_.w,z,_.d,D),_.x,z/2,_.z);const k=_.id==="b3"?r.brickShop:_.id==="b4"?r.stoneBase:r.plinth;t(S,i(_.w+.14,1.1,_.d+.14,k),_.x,.55,_.z),t(S,i(_.w+.2,.22,_.d+.2,r.trimWhite),_.x,3.1,_.z),t(S,i(_.w+.5,.3,_.d+.5,r.trimWhite),_.x,z-.15,_.z),t(S,i(_.w+.6,.35,_.d+.6,r.roofFlat),_.x,z+.17,_.z);for(const[G,J,te,ee]of[[_.w+.6,.25,0,-_.d/2-.2],[_.w+.6,.25,0,_.d/2+.2],[.25,_.d+.6,-_.w/2-.2,0],[.25,_.d+.6,_.w/2+.2,0]])t(S,i(G,.7,J,D),_.x+te,z+.6,_.z+ee);t(S,i(.7,1.2,.7,r.plinth),_.x+_.w/4,z+.9,_.z);for(const G of[-1,1]){const J=s(.06,.06,z-.5,r.metalLight,6);t(S,J,_.x+G*(_.w/2+.12),(z-.5)/2,_.z-_.d/2-.12)}const $=z>7?[1.9,4.6,7]:z>5.5?[1.9,4.4]:[1.8,3.9];for(const G of[_.z-_.d/2,_.z+_.d/2]){const J=G>_.z?1:-1,te=Math.max(2,Math.floor((_.w-2)/2.2));$.forEach((be,ye)=>{for(let q=0;q<te;q++){const ne=_.x-(te-1)*2.2/2+q*2.2,_e=(q*7+ye*3+Math.round(_.x))%5===0,re=L(1.1,1.3,_.id==="b4"||_.id==="b5",_e);re.position.set(ne,be,G+J*.03),J<0&&(re.rotation.y=Math.PI),S.add(re)}});const ee=_.z>0?-1:1;if(ee<0&&G<_.z||ee>0&&G>_.z){const be=R(1.2,2.2,E[_.id],{mailbox:_.id!=="b3",number:!0});be.position.set(_.x,1.1,G+ee*.05),ee<0&&(be.rotation.y=Math.PI),S.add(be)}}if(_.id==="b2"||_.id==="b5"){const G=_.z>0?_.z-_.d/2:_.z+_.d/2,J=_.z>0?-1:1;for(const te of[-2.2,2.2]){const ee=new Fe;t(ee,i(2,.12,.9,r.plinth),0,0,0);for(let ye=-2;ye<=2;ye++)t(ee,i(.06,.7,.06,r.metal),ye*.45,.4,.4);t(ee,i(2,.07,.07,r.metal),0,.78,.4),t(ee,s(.16,.12,.25,r.clay,8),-.7,.2,.1);const be=new ae(new Ye(.22,7,6),r.leaf);be.castShadow=!0,t(ee,be,-.7,.45,.1),ee.position.set(_.x+te,3,G+J*.5),S.add(ee)}}if(_.id!=="b3"){const G=_.x+_.w/2;for(const[J,te]of[[2.6,-2],[2.6,2]]){const ee=i(.5,.4,.7,r.metalLight);t(S,ee,G+.28,J,_.z+te),t(S,i(.02,.25,.5,r.metal),G+.54,J,_.z+te)}}if(_.id==="b3"&&y){const G=new ae(new Dt(4.2,1.05),new Gn({map:y}));t(S,G,_.x,3.6,_.z-_.d/2-.08),G.rotation.y=Math.PI;const J=i(4.4,.08,1.2,r.awningStripe);J.rotation.x=.25,t(S,J,_.x,3,_.z-_.d/2-.6);for(const[te,ee]of[[-1.4,13134378],[-.4,8038458],[.6,13148218]]){t(S,i(.8,.35,.6,r.woodMid),_.x+te,.35,_.z-_.d/2-1);for(let be=0;be<3;be++){const ye=new ae(new Ye(.11,6,5),e(ee));t(S,ye,_.x+te-.2+be*.2,.6,_.z-_.d/2-1)}}}if(_.id==="b2"||_.id==="b4"){const G=_.x-_.w/4,J=_.z+1;t(S,s(.04,.04,2.2,r.metal,6),G,z+1.4,J),t(S,i(1.2,.05,.05,r.metal),G,z+2.2,J),t(S,i(.8,.05,.05,r.metal),G,z+1.9,J)}}n.add(S)}for(const _ of je.props){const S=new Fe;if(_.kind==="lamp"){const D=s(.09,.12,4.6,r.metal,8);t(S,D,0,2.3,0),t(S,i(.08,.08,.08,r.metal),0,4.62,0);const z=i(.08,.08,1.1,r.metal);t(S,z,0,4.66,.5);const k=s(.3,.42,.25,r.metal,8);t(S,k,0,4.55,1);const $=new ae(new Ye(.14,8,6),r.winLit);t(S,$,0,4.42,1),t(S,i(.5,.5,.12,r.plinth),0,.25,0)}else if(_.kind==="tree"){const D=s(.18,.26,1.8,r.trunk,7);t(S,D,0,.9,0);const z=new ae(new Ye(1.5,9,7),r.leaf);z.castShadow=!0,t(S,z,0,2.9,0);const k=new ae(new Ye(1,8,6),r.leafDark);k.castShadow=!0,t(S,k,.8,2.2,.5);const $=new ae(new Ye(.8,8,6),r.leaf);$.castShadow=!0,t(S,$,-.8,2.3,-.3);const G=s(.9,1,.3,r.plinth,10);t(S,G,0,.15,0)}else if(_.kind==="bench"){for(const D of[-.28,.28])t(S,i(2.2,.07,.14,r.woodMid),0,.5,D);t(S,i(2.2,.5,.07,r.woodMid),0,.85,-.36);for(const D of[-.9,.9])t(S,i(.08,.5,.7,r.metal),D,.25,0)}else if(_.kind==="crates"){const D=i(1.2,1.2,1.2,r.woodMid);t(S,D,0,.6,0);const z=i(.9,.9,.9,r.woodDark);z.rotation.y=.4,t(S,z,.8,1.65,.2),t(S,i(1,.08,1,r.tarpBlue),-.5,1.35,-.4)}else if(_.kind==="yardstack"){const D=i(2.2,2.4,2.2,r.woodMid);D.name="yardstack",t(S,D,0,1.2,0),t(S,i(2.3,.15,2.3,r.woodDark),0,.4,0),t(S,i(2.3,.15,2.3,r.woodDark),0,2,0);const z=i(1.4,1,1.4,r.sack);z.name="yardstack_top",t(S,z,0,2.9,0)}S.position.set(_.x,0,_.z),n.add(S)}for(const _ of je.coverWalls??[]){const S=i(_.w,2.2,_.d,To(e1(`cover${_.x}`,5),Math.max(_.w,_.d),2.2));t(n,S,_.x,1.1,_.z),t(n,i(_.w+.2,.15,_.d+.2,r.trimWhite),_.x,2.25,_.z),t(n,c(a,Math.min(_.w,3),1.4,.6),_.x,.06,_.z+(_.d>_.w?0:.8));const D=[r.posterR,r.posterB,r.posterY],z=Math.max(_.w,_.d),k=Math.max(1,Math.floor(z/1.4));for(let $=0;$<k;$++){const G=-z/2+($+.5)*(z/k),J=new ae(new Dt(.6,.8),D[$%3]);_.w>_.d?t(n,J,_.x+G,1.3,_.z+_.d/2+.02):(J.rotation.y=Math.PI/2,t(n,J,_.x+_.w/2+.02,1.3,_.z+G))}}for(const[_,S,D]of[[-28.8,6,.14],[-3.8,-6,.14],[19.2,12,0],[35.2,26,.03],[-36.8,24,0]]){const z=new Fe;t(z,s(.32,.28,.75,r.binGreen,9),0,.38,0),t(z,s(.34,.34,.08,r.metal),0,.79,0),t(n,z,_,D,S)}for(let _=29;_<=45;_+=2)t(n,s(.12,.14,.8,r.metalLight,8),_,.4,11.4);for(let _=-26;_<=-14;_+=2)Math.abs(_+20)<1.2||t(n,s(.12,.14,.8,r.metalLight,8),_,.4,13);for(const[_,S,D]of[[-22.5,5.6,0],[20.5,-5.6,1],[42,5.6,0]]){const z=new Fe;if(t(z,s(.05,.05,2.6,r.metalLight,6),0,1.3,0),D===0){const k=new ae(new wi(.4,3),new Gn({color:13122094,side:fn}));k.castShadow=!0,t(z,k,0,2.5,0);const $=new ae(new wi(.24,3),r.paper);t(z,$,0,2.5,.01)}else{const k=s(.35,.35,.04,e(13122094),12);k.rotation.x=Math.PI/2,t(z,k,0,2.5,0);const $=s(.2,.2,.05,r.paper,12);$.rotation.x=Math.PI/2,t(z,$,0,2.5,0)}t(n,z,_,.14,S)}function P(_,S){const D=new Fe;t(D,i(1.7,.55,4,_),0,.65,0),t(D,i(1.5,.5,2,r.winGlass),0,1.15,-.2),t(D,i(1.72,.12,4.02,r.trimWhite),0,.42,0);for(const[z,k]of[[-.8,1.3],[.8,1.3],[-.8,-1.3],[.8,-1.3]]){const $=s(.32,.32,.22,r.tire,10);$.rotation.z=Math.PI/2,t(D,$,z,.32,k)}return D.rotation.y=S,D}t(n,P(r.carRed,Math.PI/2),8,.02,-3),t(n,P(r.carBlue,Math.PI/2),12.5,.02,-3),t(n,P(r.carGray,Math.PI/2),-36,.02,3);{const _=new Fe;t(_,i(.4,.4,1.6,r.posterR),0,.55,0),t(_,i(.35,.3,.5,r.metal),0,.75,-.5);for(const D of[-.8,.8]){const z=s(.3,.3,.12,r.tire,10);z.rotation.z=Math.PI/2,t(_,z,0,.3,D)}const S=s(.03,.03,.5,r.metalLight,6);S.rotation.z=Math.PI/2,t(_,S,0,1,.85),t(n,_,-13.5,0,12.6,.5)}function b(_,S,D,z){const k=new Fe;for(const $ of[-.55,.55]){const G=new ae(new Vn(.32,.04,6,14),r.tire);G.castShadow=!0,t(k,G,0,.32,$)}t(k,i(.05,.05,1,z),0,.55,0),t(k,i(.05,.5,.05,z),0,.7,.45),t(n,k,_,0,S,D)}b(-26.5,12.2,1.2,r.posterB),b(30.5,12,-.6,r.posterY);for(const[_,S,D]of[[21.6,3.5,.3],[-24.5,29,-.2],[14.5,-22.5,.1]]){const z=new Fe;t(z,i(1.6,1.1,1,r.dumpster),0,.67,0);const k=i(1.6,.1,1,r.metal);k.rotation.z=.08,t(z,k,0,1.27,0);for(const $ of[-.6,.6])for(const G of[-.35,.35])t(z,s(.09,.09,.12,r.tire,8),$,.06,G);t(n,z,_,0,S,D)}for(const[_,S]of[[-36.5,18],[-35.6,18.6],[-37.2,21.5],[-31,12.5]]){const D=new ae(new Ye(.4,7,6),r.sack);D.castShadow=!0,t(n,D,_,.35,S)}for(const[_,S]of[[-36,22],[-35,22.4],[-33,9.5]])t(n,s(.35,.35,.9,r.barrelRust,10),_,.45,S);t(n,i(2,.9,1.2,r.tarpBlue),-36.5,.45,16,.2);for(let _=0;_<5;_++)t(n,i(.12,1.1,.12,r.woodDark),-39.5+_*1.1,.55,17);t(n,i(5.6,.12,.1,r.woodDark),-37.3,.95,17),t(n,i(5.6,.12,.1,r.woodDark),-37.3,.5,17);for(const _ of[-23.5,-16.5])t(n,s(.05,.05,2.4,r.woodDark,6),_,1.2,31.5);{const _=i(7,.02,.02,r.metal);t(n,_,-20,2.3,31.5);const S=[r.paper,r.posterB,r.awningRed,r.paper,r.posterY];for(let D=0;D<5;D++){const z=new ae(new Dt(.7,.9),new Gn({color:S[D].color,side:fn}));z.castShadow=!0,t(n,z,-22.8+D*1.4,1.85,31.5,.15*(D%2?1:-1))}}const M=(_,S,D)=>{for(let z=_;z<=S;z+=1.2){const k=i(1.1,.7,.7,r.hedge);t(n,k,z,.35,D)}};M(-28,-12,35.5),M(-24,-12,-26.5),M(2,18,-26.5);for(const[_,S]of[[-19.5,-14.6],[-16.5,-14.6],[8.5,-14.6],[11.5,-14.6],[10.5,13.5],[13.5,13.5]]){t(n,i(.6,.4,.4,r.woodMid),_,.2,S);const D=new ae(new Ye(.28,7,6),r.leaf);D.castShadow=!0,t(n,D,_,.6,S)}{t(n,i(.12,2,.12,r.woodDark),32.4,1,15.6),t(n,i(.12,2,.12,r.woodDark),33.6,1,15.6),t(n,i(1.5,1,.08,r.woodMid),33,1.5,15.6);const _=new ae(new Dt(1.2,.7),r.paper);t(n,_,33,1.5,15.65)}function I(_,S,D,z){const k=(_+D)/2,$=(S+z)/2,G=Math.hypot(D-_,z-S),J=-Math.atan2(z-S,D-_);for(const te of[0,1]){const ee=i(G/2,.03,.03,r.metal),be=te===0?(_+k)/2:(k+D)/2,ye=te===0?(S+$)/2:($+z)/2;ee.position.set(be,4.45,ye),ee.rotation.y=J,ee.rotation.z=te===0?.07:-.07,n.add(ee)}}I(-30,6,-5,-6),I(-5,-6,18,12);{const _=new ae(new wi(1.1,12),tu());_.rotation.x=-Math.PI/2,t(n,_,-17,.04,29.5),t(n,c(a,3,2.4),-19.5,.045,31)}for(const[_,S]of[[-27,30],[-13,32.5],[24,-12],[-6,-24]])for(let D=0;D<3;D++)t(n,s(.02,.05,.5+D*.12,r.hedge,5),_+D*.25,.3,S)}function Su(n,e){return(n+e)/2}const Eu=new Map;function Uv(n,e,t,i){let o=Eu.get(n);if(o)return o;if(typeof document>"u")return null;const s=document.createElement("canvas");return s.width=e,s.height=t,i(s.getContext("2d"),e,t),o=new no(s),o.wrapS=o.wrapT=Pi,o.colorSpace=Vt,Eu.set(n,o),o}const Tu=new Map;function Bf(n,e,t){const i=n+"|"+e;let o=Tu.get(i);return o||(o=new Gn({color:e,map:t??null}),Tu.set(i,o)),o}function oa(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Tc(n){let e=n>>>0||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const so=()=>new Tt;function ke(n,e,t,i=0,o=0,s=0,r=1,a=1,l=1){const c=new os().setFromEuler(new pn(i,o,s));return so().compose(new F(n,e,t),c,new F(r,a,l))}function kt(n){const e=n.map(({g:l,m:c})=>{const d=l.index?l.toNonIndexed():l.clone();return c&&d.applyMatrix4(c),d});let t=0;for(const l of e)t+=l.attributes.position.count;const i=new Float32Array(t*3),o=new Float32Array(t*3),s=new Float32Array(t*2);let r=0;for(const l of e){const c=l.attributes.position.count;i.set(l.attributes.position.array,r*3),o.set(l.attributes.normal.array,r*3),l.attributes.uv&&s.set(l.attributes.uv.array,r*2),r+=c}const a=new rn;return a.setAttribute("position",new hn(i,3)),a.setAttribute("normal",new hn(o,3)),a.setAttribute("uv",new hn(s,2)),a}function Fv(n){return(e,t,i)=>{if(e.fillStyle="#ffffff",e.fillRect(0,0,t,i),n==="denim"){for(let o=0;o<i;o+=3)e.fillStyle=o%6===0?"rgba(255,255,255,0.10)":"rgba(0,0,20,0.16)",e.fillRect(0,o,t,1);e.strokeStyle="rgba(0,0,25,0.12)",e.lineWidth=1;for(let o=-i;o<t;o+=5)e.beginPath(),e.moveTo(o,0),e.lineTo(o+i,i),e.stroke()}else if(n==="knit")for(let o=0;o<i;o+=6)for(let s=0;s<t;s+=6)e.fillStyle=(s+o)%12===0?"rgba(0,0,0,0.14)":"rgba(255,255,255,0.10)",e.beginPath(),e.arc(s+3,o+3,2.1,0,7),e.fill();else if(n==="leather"){for(let o=0;o<900;o++)e.fillStyle=Math.random()<.5?"rgba(0,0,0,0.10)":"rgba(255,255,255,0.08)",e.fillRect(Math.random()*t,Math.random()*i,1.6,1.2);e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(0,0,t,8)}else if(n==="weave"){for(let o=0;o<i;o+=2)e.fillStyle="rgba(0,0,0,0.05)",e.fillRect(0,o,t,1);for(let o=0;o<t;o+=2)e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(o,0,1,i)}else if(n==="hair"){e.strokeStyle="rgba(0,0,0,0.28)",e.lineWidth=1;for(let o=0;o<t;o+=3)e.beginPath(),e.moveTo(o,0),e.quadraticCurveTo(o+3,i/2,o-2,i),e.stroke();e.strokeStyle="rgba(255,255,255,0.10)";for(let o=1;o<t;o+=6)e.beginPath(),e.moveTo(o,0),e.quadraticCurveTo(o+2,i/2,o,i),e.stroke()}}}const $a={};function Gf(n){if($a[n])return $a[n];const e=Uv("fabric_"+n,128,128,Fv(n));return $a[n]=e,e}const Au=new Map;function Ov(n){let e=Au.get(n);return e||(e=new Gn({color:n,emissive:1838342,emissiveIntensity:.32}),Au.set(n,e)),e}function At(n,e){return Bf("fab_"+e+"|"+n,n,Gf(e))}function Bv(n){return Bf("hair|"+n,n,Gf("hair"))}const Ru=new Map;function vn(n,e=60){const t=n+"|"+e;let i=Ru.get(t);return i||(i=new rx({color:n,specular:7829350,shininess:e}),Ru.set(t,i)),i}const Cu=new Map;function Wi(n){let e=Cu.get(n);return e||(e=new Gn({color:n}),Cu.set(n,e)),e}const Xa=[15911332,15317389,14262126,11894354,8279091,5190429],Gv=[1643024,3022098,4992794,7225117,10246692,13082972,9080726,14210508],Hv=[4157365,11878213,4168794,13672494,8015797,4174005,13658669,9083560,4869976,13222580],Hf=[3033714,3824266,2372682,4876954],Vv=[15262940,2236966,7031342,9051950,3824191,11907236],Pu=new Set(["anna","carla","elena","sara","marta","nadia","chiara","tea","rita","lina","monica","ida","bianca"]),Wv=new Set(["marta","tea","osvaldo","ida"]),$v=new Set(["anna","paolo","bianca","monica"]),Xv=new Set(["bruno","franco","otello","ivan"]);function qv(n,e,t,i){const o=oa("human|"+n),s=Tc(o),r=k=>k[Math.floor(s()*k.length)%k.length];let a=Pu.has(n);!Pu.has(n)&&!i&&n.startsWith("syn")&&(a=s()<.5),i&&(a=!1);const l=Wv.has(n),c=i?"adult":l?"elder":s()<.18?"young":s()<.72?"adult":"elder",d=a?1.58+s()*.18:1.68+s()*.2,u=s(),f=u<.28?"slim":u<.78?"normal":"heavy",p=Xa[Math.floor(s()*Xa.length)%Xa.length];let x;const v=s();a?x=v<.22?2:v<.45?1:v<.6?6:v<.75?3:v<.88?0:7:c==="elder"?x=v<.35?5:v<.65?4:v<.85?0:1:x=v<.34?0:v<.55?1:v<.68?4:v<.8?3:v<.9?2:5;let m=r(Gv);c==="elder"?m=r([12104876,14210508,9080726,12104876,7236194]):s()<.12&&(m=r([12104876,9080726]));let h=0;if(!a&&c!=="young"){const k=s();h=k<.55?0:k<.7?1:k<.88?2:3}else!a&&s()<.12&&(h=s()<.6?1:2);const E=Math.floor(s()*3),g=.9+s()*.25,y=.9+s()*.25,L=s();let R;if(i)R="player";else if(e==="police")R="police";else if(e==="target")R="target";else if($v.has(n))R="bar";else if(Xv.has(n))R="worker";else if(n==="tiberio")R="business";else if(n==="sandro")R="guard";else if(l)R=s()<.6?"elder":"casual";else{const k=s();R=k<.34?"casual":k<.55?"street":k<.72?"business":k<.88?"casual2":"worker_casual"}const A=r(Hv),P=r(R==="business"?[2763828,3817290,2040102]:Hf),b=r(Vv),M=!i&&(R==="business"||c==="elder"||s()<.14),I=e==="police"?"cap":(R==="worker"||R==="worker_casual")&&s()<.7?"helmet":R==="guard"||s()<.08?"beanie":null,_=.92+s()*.16,S=.88+s()*.24,D=o%628/100,z=s()*Math.PI*2;return{id:n,role:e,female:a,age:c,H:d,build:f,skin:p,hairStyle:x,hairColor:m,beard:h,faceVariant:E,jawW:g,cheek:y,eyeDeep:L,outfit:R,top:A,bottom:P,shoes:b,glasses:M,hat:I,freq:_,amp:S,phase:D,sway:z,colorHint:t}}function Xn(n,e){const t=n.attributes.position,i=new F;for(let o=0;o<t.count;o++)i.fromBufferAttribute(t,o),e(i,o),t.setXYZ(o,i.x,i.y,i.z);return n.computeVertexNormals(),n}function qa(n){const e=new Ye(1,22,17),t=[.42,.3,.52][n],i=[1,.92,1.06][n],o=[1,.85,1.15][n];return Xn(e,s=>{let{x:r,y:a,z:l}=s;r*=.104,a*=.132*i,l*=.118;const c=l>0;if(a<.015){const d=Math.min(1,(.015-a)/.13);r*=1-t*d*.62,l*=1-.1*d,a<-.075&&c&&(l+=.016*Math.min(1,(-.075-a)/.05))}if(c&&a>-.03&&a<.045){const d=1-Math.abs(a-.008)/.04,u=Math.min(1,Math.abs(r)/.07);r+=Math.sign(r)*.006*Math.max(0,d)*u}if(c&&a>.03&&a<.075){const d=1-Math.abs(a-.052)/.025;l+=.004*o*Math.max(0,d)*(1-Math.min(1,Math.abs(r)/.09))}l<-.04&&(l*=.94),Math.abs(r)>.085&&a<-.05&&(r*=.96),s.set(r,a,l)}),e}function Yv(){const n=new Ye(.0135,10,8);return kt([{g:n,m:ke(-.031,.002,.106,0,0,0,1,1.1,.5)},{g:n,m:ke(.031,.002,.106,0,0,0,1,1.1,.5)}])}function jv(){const n=new Ye(.0062,8,6);return kt([{g:n,m:ke(-.031,.001,.1105)},{g:n,m:ke(.031,.001,.1105)}])}function Zv(){const n=new ut(.034,.0085,.01);return kt([{g:n,m:ke(-.034,.036,.112,0,-.12,-.1)},{g:n,m:ke(.034,.036,.112,0,.12,.1)}])}function Kv(){const n=new ut(.03,.011,.016);return kt([{g:n,m:ke(-.031,.0115,.104,-.28,0,0)},{g:n,m:ke(.031,.0115,.104,-.28,0,0)}])}function Jv(){const n=new Ye(.021,8,7);return Xn(n,e=>{e.x*=.55,e.y*=1.15}),kt([{g:n,m:ke(-.1,-.008,.008)},{g:n,m:ke(.1,-.008,.008)}])}function Qv(){const n=new ut(.02,.034,.016),e=new Ye(.0135,8,7),t=new Ye(.009,7,6),i=new Ye(.009,7,6);return kt([{g:n,m:ke(0,-.008,.112,-.12,0,0)},{g:e,m:ke(0,-.028,.12,0,0,0,1,.85,1)},{g:t,m:ke(-.013,-.033,.113)},{g:i,m:ke(.013,-.033,.113)}])}function e2(){const n=new ut(.042,.007,.008),e=new Ye(.011,8,6);return Xn(e,t=>{t.x*=1.9,t.y*=.55,t.z*=.7}),kt([{g:n,m:ke(0,-.056,.102,.15,0,0)},{g:e,m:ke(0,-.064,.099,.2,0,0)}])}function t2(){const n=new Vn(.017,.0028,6,14),e=new ut(.013,.003,.003),t=new ut(.003,.003,.095);return kt([{g:n,m:ke(-.031,.002,.112)},{g:n,m:ke(.031,.002,.112)},{g:e,m:ke(0,.004,.113)},{g:t,m:ke(-.072,.006,.068,0,.3,0)},{g:t,m:ke(.072,.006,.068,0,-.3,0)}])}function Po(n=0,e=0,t=7){const i=new Ye(1,16,12,0,Math.PI*2,0,2.02);return Xn(i,o=>{let{x:s,y:r,z:a}=o;if(s*=.116,r*=.13,a*=.126,a>.06&&r<.045){const l=Math.min(1,(a-.06)/.06),c=Math.min(1,(.045-r)/.06+.4),d=l*l*(3-2*l)*(c*c*(3-2*c));r+=d*.088}if(Math.abs(s)>.062&&r<0&&(r+=.028*Math.min(1,(Math.abs(s)-.062)/.035)),a<0&&n>0){const l=Math.min(1,-a/.12)*Math.min(1,(.05-r)/.1+.5);a-=n*Math.max(0,l),r-=n*.55*Math.max(0,l)}if(e>0){const l=Math.sin(s*131+t)*Math.sin(r*157+t*2)*Math.sin(a*149+t*3),c=1+l*e;s*=c,r=r*c+l*e*.02,a*=c}r+=.018,o.set(s,r,a)}),i}function n2(n){if(n===5)return null;if(n===0)return Po(0,.035);if(n===4){const o=new Ye(1,12,8,0,Math.PI*2,0,1.95);return Xn(o,s=>{s.set(s.x*.107,s.y*.122+.02,s.z*.119)}),o}if(n===3)return Po(.01,.09);if(n===1)return Po(.035,.02);if(n===7)return Po(.05,.05);if(n===2){const o=Po(.06,.02),s=new Ft(.095,.115,.26,12,1,!0),r=new ut(.035,.2,.05),a=new ut(.035,.2,.05);return kt([{g:o,m:so()},{g:s,m:ke(0,-.14,-.055,.1,0,0)},{g:r,m:ke(-.095,-.1,.01,0,0,.06)},{g:a,m:ke(.095,-.1,.01,0,0,-.06)}])}const e=Po(.03,.02),t=new Ft(.026,.018,.24,8),i=new Vn(.026,.008,6,10);return kt([{g:e,m:so()},{g:t,m:ke(0,-.1,-.155,.55,0,0)},{g:i,m:ke(0,.005,-.115,.3,0,0)}])}function i2(n){if(!n)return null;const e=new ut(.024,.009,.012),t=new ut(.024,.009,.012),i=[{g:e,m:ke(-.014,-.048,.108,0,-.2,-.08)},{g:t,m:ke(.014,-.048,.108,0,.2,.08)}];if(n>=2){const o=new Ye(.05,10,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55);Xn(o,s=>{s.set(s.x*1,s.y*1.15-.055,s.z*.9+.055)}),i.push({g:o,m:so()})}if(n>=3){const o=new Ye(.085,10,8,0,Math.PI*2,Math.PI*.42,Math.PI*.5);Xn(o,s=>{s.set(s.x*1.02,s.y*1.2-.03,s.z*.95+.03)}),i.push({g:o,m:so()})}return kt(i)}function Lu(){const n=new Ft(.098,.108,.085,12),e=new Ft(.072,.072,.012,12,1,!1,0,Math.PI);return{cap:kt([{g:n,m:ke(0,.105,0,0,0,0)},{g:e,m:ke(0,.066,.1,0,-Math.PI/2,0,1,1,1.25)}]),badge:(()=>{const t=new Ft(.016,.016,.008,10);return t.rotateX(Math.PI/2-.15),t.translate(0,.105,.102),t})()}}function o2(){const n=new Ye(.115,12,8,0,Math.PI*2,0,1.45),e=new Ft(.135,.14,.014,12);return kt([{g:n,m:ke(0,.055,0)},{g:e,m:ke(0,.058,0)}])}function s2(){const n=new Ye(.112,12,9,0,Math.PI*2,0,1.85),e=new Vn(.105,.018,8,14);return Xn(n,t=>{t.set(t.x,t.y*.95+.035,t.z)}),kt([{g:n,m:so()},{g:e,m:ke(0,.035,0,Math.PI/2,0,0)}])}function _r(n,e){const t=[],i=n?[[.128,0],[.118,.08],[.122,.16],[.142,.3],[.15,.38],[.132,.46],[.062,.53],[.052,.55]]:[[.132,0],[.122,.08],[.13,.18],[.148,.32],[.152,.4],[.13,.47],[.06,.53],[.052,.55]];e&&(i[4][0]+=.014,i[5][0]+=.016);for(const[s,r]of i)t.push(new Ue(s,r));const o=new dc(t,14);return o.computeVertexNormals(),o}function Iu(n){const e=new Ye(1,14,11);return Xn(e,t=>{const i=n?.15:.132;t.set(t.x*i,t.y*.115,t.z*.105)}),e}function Ya(n,e,t,i=0){const o=new Ft(n,e,t,9);if(o.translate(0,-t/2,0),i){const s=o.attributes.position,r=new F;for(let a=0;a<s.count;a++){r.fromBufferAttribute(s,a);const l=Math.min(1,-r.y/t);r.z+=i*l*l,s.setXYZ(a,r.x,r.y,r.z)}o.computeVertexNormals()}return o}function Du(n){const e=new Ft(n?.048:.056,n?.042:.049,.3,9);e.translate(0,-.15,0);const t=new Ft(n?.04:.047,n?.032:.038,.28,9);return t.translate(0,-.14,0),kt([{g:e,m:so()},{g:t,m:ke(0,-.3,.008,.1,0,0)}])}function r2(){const e=[{g:new ut(.075,.085,.032),m:ke(0,-.045,0)}];for(let i=0;i<4;i++){const o=new ut(.016,.075-Math.abs(i-1.5)*.012,.015);e.push({g:o,m:ke(-.027+i*.018,-.115,.004,.12,0,0)})}const t=new ut(.016,.05,.015);return e.push({g:t,m:ke(-.042,-.055,.012,.3,0,.5)}),kt(e)}function a2(){const n=new ut(.095,.075,.21),e=new Ye(.048,9,7);Xn(e,o=>{o.set(o.x,o.y*.7,o.z*1.15)});const t=new ut(.1,.028,.27),i=new ut(.09,.035,.06);return kt([{g:n,m:ke(0,.055,.02)},{g:e,m:ke(0,.035,.125)},{g:t,m:ke(0,.014,.035)},{g:i,m:ke(0,.017,-.075)}])}function l2(){const n=new Ft(.048,.055,.11,10);return n.translate(0,.055,0),n}function ku(){const n=new ut(.1,.22,.012),e=new ut(.035,.2,.01),t=new ut(.045,.04,.014);return{shirt:kt([{g:n,m:ke(0,-.02,.108,-.06,0,0)}]),tie:kt([{g:e,m:ke(0,-.1,.116,-.06,0,0)},{g:t,m:ke(0,.015,.112,-.06,0,0)}])}}function c2(){const n=new ut(.24,.3,.015),e=new ut(.3,.34,.015);return kt([{g:n,m:ke(0,.3,.125,-.05,0,0)},{g:e,m:ke(0,-.02,.135,.04,0,0)}])}function d2(){const n=new Vn(.085,.038,8,12,Math.PI*1.2);return n.rotateZ(Math.PI*.9),n.rotateX(-.5),n}function u2(){return new Ft(.138,.142,.045,12)}const nt={};function Ke(n,e){let t=nt[n]??Yl(n,e);return nt[n]=t,t}function f2(){Ke("skull0",()=>qa(0)),Ke("skull1",()=>qa(1)),Ke("skull2",()=>qa(2)),Ke("eyew",Yv),Ke("pupil",jv),Ke("brow",Zv),Ke("lid",Kv),Ke("ear",Jv),Ke("nose",Qv),Ke("mouth",e2),Ke("glasses",t2);for(let n=0;n<=7;n++)n!==5&&Ke("hair"+n,()=>n2(n));for(let n=1;n<=3;n++)Ke("beard"+n,()=>i2(n));return Ke("torsoM",()=>_r(!1,!1)),Ke("torsoF",()=>_r(!0,!1)),Ke("torsoMJ",()=>_r(!1,!0)),Ke("torsoFJ",()=>_r(!0,!0)),Ke("pelvisM",()=>Iu(!1)),Ke("pelvisF",()=>Iu(!0)),Ke("arm",()=>Du(!1)),Ke("armS",()=>Du(!0)),Ke("hand",r2),Ke("shoe",a2),Ke("neck",l2),Ke("shirt",()=>ku().shirt),Ke("tie",()=>ku().tie),Ke("apron",c2),Ke("hood",d2),Ke("belt",u2),Ke("cap",()=>Lu().cap),Ke("capbadge",()=>Lu().badge),Ke("helmet",o2),Ke("beanie",s2),Ke("thigh",()=>Ya(.075,.058,.45)),Ke("calf",()=>Ya(.056,.04,.4,.012)),Ke("sleeve",()=>Ya(.066,.06,.13)),nt}let Dr=null;function Vf(n){Dr=n}function rt(n,e,t=!1){const i=new ae(n,e);return t&&(i.castShadow=!0),i}function h2(n,e,t,i){f2();const o=i?.id??"anon_"+String(n)+"_"+String(t),s=qv(o,t??i?.role??"civilian",n,!!e),{H:r,female:a,build:l}=s,c=r/1.75,d=l==="slim"?.88:l==="heavy"?1.16:1,u=(a?.185:.21)*(l==="heavy"?1.12:l==="slim"?.94:1),f=.87*c+.03,p=1.47*c,x=1.13*c,v=Ov(s.skin),m=Bv(s.hairColor),h=s.outfit,E=h==="business"||h==="target"||h==="guard"||h==="police";let g,y,L,R=!0;h==="player"?(g=At(3129201,"knit"),y=At(3028032,"denim"),L=vn(15262940,25)):h==="police"?(g=At(2241630,"weave"),y=At(1845838,"weave"),L=vn(1315862,70)):h==="target"?(g=At(11546664,"weave"),y=At(2303020,"denim"),L=vn(2760728,60),R=!0):h==="business"?(g=At(yi(s,[2896448,4864558,2042426]),"weave"),y=At(s.bottom,"weave"),L=vn(1643794,80)):h==="street"?(g=At(s.top,"knit"),y=At(yi(s,Hf),"denim"),L=vn(s.shoes,30)):h==="bar"?(g=At(14999250,"weave"),y=At(2303020,"weave"),L=vn(1841688,60),R=!1):h==="worker"||h==="worker_casual"?(g=At(yi(s,[11754014,3037834,5925422]),"weave"),y=At(yi(s,[3820126,4864552,3026484]),"denim"),L=vn(3022869,40)):h==="guard"?(g=At(3027256,"knit"),y=At(2303020,"denim"),L=vn(1841688,50)):h==="elder"?(g=At(yi(s,[6974074,8022618,5925498,9079434]),"knit"),y=At(3817290,"weave"),L=vn(2762018,40)):(g=At(s.top,h==="casual2"?"weave":"knit"),y=At(s.bottom,"denim"),L=vn(s.shoes,30),R=h!=="casual"),p2(s)&&(R=!1);const A=new Fe,P=new Fe;A.add(P);const b=new Fe;b.position.y=f,P.add(b);const M=rt(nt[a?"pelvisF":"pelvisM"],y);M.scale.set(d,1,1),b.add(M);const I=new Fe;I.position.y=.02,s.age==="elder"&&(I.rotation.x=.07),b.add(I);const _=(a?"torsoF":"torsoM")+(E?"J":""),S=rt(nt[_],g,!0);if(S.position.y=p+.03-.55*c-(f+.02),S.scale.set((a?1.18:1.32)*d,c,.78*d),I.add(S),h==="police"||h==="guard"||h==="worker"){const de=rt(nt.belt,Wi(1314828));de.position.y=x-f+.02,de.scale.set(d*1.32,1,d*1.05),I.add(de)}let D=null,z=null;h==="business"&&(D=rt(nt.shirt,At(15262938,"weave")),D.position.y=p-f-.13,D.scale.set(1,c,1),I.add(D),z=rt(nt.tie,Wi(yi(s,[8003374,2046558,3026478]))),z.position.y=p-f-.13,z.scale.set(1,c,1),I.add(z));let k=null;h==="bar"&&(k=rt(nt.apron,At(2767406,"weave")),k.position.y=.98*c-(f+.02),k.scale.set(1,c,1),I.add(k));let $=null;(h==="street"||h==="player")&&($=rt(nt.hood,g),$.position.set(0,p-f-.04,-.115),I.add($));function G(de){const C=de,w=new Fe;w.position.set(C*u,p-f-.04,0),I.add(w);const H=rt(nt[d<.95?"armS":"arm"],R?g:v);if(H.scale.set(1,c,1),w.add(H),!R){const Y=rt(nt.sleeve,g);Y.position.y=-.01,w.add(Y);const Me=rt(Ke("shcap",()=>new Ye(.068,10,8)),g);w.add(Me)}const j=new Fe;j.position.set(0,-.585*c,.012),w.add(j);const Q=rt(nt.hand,v);return j.add(Q),w.rotation.z=C*-.07,{pivot:w,handG:j}}const J=G(-1),te=G(1),ee=new Fe;ee.position.y=p-f+.02,I.add(ee);const be=rt(nt.neck,v);ee.add(be);const ye=new Fe;ye.position.y=.115,ee.add(ye);const q=rt(nt["skull"+s.faceVariant],v,!0);q.scale.set(s.jawW,1,1),ye.add(q);const ne=rt(nt.eyew,Wi(15920610));ne.position.z=s.eyeDeep*.002,ye.add(ne);const _e=rt(nt.pupil,Wi(2365970));_e.position.z=s.eyeDeep*.002,ye.add(_e);const re=rt(nt.lid,v);ye.add(re);const Re=rt(nt.brow,m);ye.add(Re);const De=rt(nt.nose,v);ye.add(De);const le=rt(nt.mouth,Wi(7223856));ye.add(le);const Ae=rt(nt.ear,v);ye.add(Ae);let Le=null;if(s.hairStyle!==5)Le=rt(nt["hair"+s.hairStyle],m,!0),ye.add(Le);else{const de=rt(nt.hair4,m);de.scale.set(1.02,.55,1.02),de.position.y=-.015,ye.add(de),Le=de}let st=null;s.beard&&(st=rt(nt["beard"+s.beard],m),ye.add(st));let U=null;s.glasses&&(U=rt(nt.glasses,Wi(1842208)),ye.add(U));let zt=null;if(s.hat==="cap"){const de=rt(nt.cap,Wi(1714773),!0);ye.add(de),zt=rt(nt.capbadge,vn(12623920,90)),ye.add(zt)}else if(s.hat==="helmet"){const de=rt(nt.helmet,vn(yi(s,[13672480,15262938,11546664]),55),!0);ye.add(de)}else if(s.hat==="beanie"){const de=rt(nt.beanie,At(yi(s,[3817290,6172206,3034682]),"knit"));ye.add(de)}function Ze(de){const C=new Fe;C.position.set(de*.105*d,-.03,0),b.add(C);const w=rt(nt.thigh,y);w.scale.set(d,c,d),C.add(w);const H=new Fe;H.position.y=-.45*c,C.add(H);const j=rt(nt.calf,y);j.scale.set(d*.95,c,d*.95),H.add(j);const Q=rt(nt.shoe,L);return Q.position.set(0,-.42*c,.035),H.add(Q),{hip:C,knee:H}}const qe=Ze(-1),Ce=Ze(1);if(e){const de=new ae(Yl("ring",()=>new Vn(.55,.05,6,16)),Oo(3129201));de.rotation.x=Math.PI/2,de.position.y=.06,A.add(de)}const at=new ae(Yl("mark",()=>new hc(.16)),Oo(16724804));return at.position.y=2.05*c,at.visible=!1,A.add(at),A.userData.mark=at,A.userData.limbs={legL:qe.hip,legR:Ce.hip,armL:J.pivot,armR:te.pivot,phase:s.phase},A.userData.human={spec:s,rig:P,hips:b,torsoG:I,neckG:ee,headG:ye,eyeW:ne,pupils:_e,brows:Re,armL:J.pivot,armR:te.pivot,handL:J.handG,handR:te.handG,thighL:qe.hip,thighR:Ce.hip,kneeL:qe.knee,kneeR:Ce.knee,torso:S,skull:q,far:[_e,Re,le,Ae,U,zt].filter(Boolean),mid:[],phase:s.phase,freq:s.freq,amp:s.amp,sway:s.sway,dispSpeed:0,lastYaw:0,blinkAt:2+s.phase%3,lodTick:oa(o)%8,talkSeed:s.phase,k:c,H:r},A}function yi(n,e){const t=Tc(oa("top|"+n.id))();return e[Math.floor(t*e.length)%e.length]}function p2(n){return n.outfit==="bar"?!0:Tc(oa("slv|"+n.id))()<.3&&!["business","police","guard","worker","elder","player"].includes(n.outfit)}function m2(n,e,t,i,o){const s=n.userData.human,r=n.userData.limbs;if(!s||!r)return;o=o||{},s.lodTick++;const a=Math.max(0,e||0);s.dispSpeed+=(a-s.dispSpeed)*.18;const l=s.dispSpeed,c=Math.min(1,l/3),d=Math.min(1,l/.4);s.phase+=(1.6+l*2.6)*.055*s.freq;const u=Math.sin(s.phase)*(.62*d+.18*c)*s.amp,f=Math.sin(s.phase+Math.PI)*(.62*d+.18*c)*s.amp,p=!!o.crouch,x=!!o.alert;if(p)s.thighL.rotation.x=-1.65,s.thighR.rotation.x=-1.65,s.kneeL.rotation.x=1.9,s.kneeR.rotation.x=1.9,s.rig.position.y=-.52*s.k,s.torsoG.rotation.x=.35+(s.spec.age==="elder"?.07:0),s.armL.rotation.x=-.5,s.armR.rotation.x=-.5,s.headG.rotation.x=-.25;else{if(s.rig.position.y=Math.abs(Math.sin(s.phase))*.035*d,s.thighL.rotation.x=u,s.thighR.rotation.x=f,s.kneeL.rotation.x=Math.max(0,-Math.sin(s.phase-.6))*(.9*d+.5*c)+.06,s.kneeR.rotation.x=Math.max(0,-Math.sin(s.phase+Math.PI-.6))*(.9*d+.5*c)+.06,s.thighL.rotation.z=.02,s.thighR.rotation.z=-.02,s.torsoG.rotation.y=-u*.14,s.torsoG.rotation.z=Math.sin(s.phase)*.035*d+Math.sin(t*.9+s.sway)*.012*(1-d),s.torsoG.rotation.x=(s.spec.age==="elder"?.07:.02)+c*.16+d*.04,i)s.armR.rotation.x=-2.3,s.armR.rotation.z=.5,s.armL.rotation.x=.4,s.armL.rotation.z=-.35,s.torsoG.rotation.y=-.3;else if(x)s.armL.rotation.x=-u*.5,s.armR.rotation.x=u*.5,s.armL.rotation.z=-.55,s.armR.rotation.z=.55,s.headG.rotation.x=-.06;else if(o.talk){const E=Math.sin(t*3.1+s.talkSeed*3);s.armR.rotation.x=-.55+E*.22*s.amp,s.armR.rotation.z=.35,s.armL.rotation.x=-.15+Math.sin(t*2.3+s.talkSeed)*.08,s.armL.rotation.z=-.15,s.headG.rotation.x=.05+Math.sin(t*2.6+s.talkSeed*2)*.045}else s.armL.rotation.x=-f*.75,s.armR.rotation.x=-u*.75,s.armL.rotation.z=-.07-d*.03,s.armR.rotation.z=.07+d*.03,s.armL.rotation.x+=Math.sin(t*1.7+s.sway)*.02*(1-d),s.armR.rotation.x+=Math.sin(t*1.7+s.sway+1)*.02*(1-d),s.hips.position.x=Math.sin(t*.55+s.sway)*.018*(1-d),s.headG.rotation.y=Math.sin(t*.42+s.sway*2)*.16*(1-d),s.headG.rotation.x=Math.sin(t*1.7+s.sway)*.02*(1-d);s.handL.rotation.x=-s.armL.rotation.x*.35,s.handR.rotation.x=-s.armR.rotation.x*.35;const m=n.rotation.y||0;let h=m-s.lastYaw;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;s.lastYaw=m,s.lean=(s.lean??0)*.9+Math.max(-.2,Math.min(.2,h*3))*.1,s.torsoG.rotation.z+=s.lean}t>s.blinkAt&&(s.blinkAt=t+1.8+s.phase*7%3.2,s.blinkUntil=t+.12);const v=t<(s.blinkUntil??-1)?.12:1;if(s.eyeW.scale.y=v,s.pupils.scale.y=v,Dr&&s.lodTick%8===0){const m=n.position.x-Dr.position.x,h=n.position.z-Dr.position.z,E=m*m+h*h,g=E>22*22,y=E>50*50;for(const L of s.far)L.visible=!g&&!y;for(const L of s.mid)L.visible=!y}r.phase=s.phase}function _2(){try{const n=document.createElement("canvas"),e=n.getContext("webgl2")||n.getContext("webgl"),t=e?.getExtension("WEBGL_debug_renderer_info"),i=t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):"";return/swiftshader|llvmpipe|software/i.test(i)}catch{return!1}}function g2(n){const e=_2(),t=.7,i=new sx({antialias:!e});i.setPixelRatio(e?1:Math.min(devicePixelRatio,2));const o=()=>{e?i.setSize(Math.round(innerWidth*t),Math.round(innerHeight*t),!1):i.setSize(innerWidth,innerHeight)};o(),n.appendChild(i.domElement);const s=new yf;s.background=new Oe(9416916),s.fog=new cc(9416916,60,140),i.toneMapping=Vu,i.toneMappingExposure=1.15,s.add(new ax(14083317,5525567,.85));const r=new Wd(16769720,2.4);r.position.set(34,42,18),s.add(r);const a=new Wd(13154458,.35);a.position.set(-20,12,-30),s.add(a);try{const d=new Ul(i);s.environment=d.fromScene(new Tv,.04).texture,s.environmentIntensity=.35,d.dispose()}catch{}e||(i.shadowMap.enabled=!0,i.shadowMap.type=Ql,r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,r.shadow.camera.near=5,r.shadow.camera.far=150,r.shadow.bias=-6e-4,r.shadow.radius=2),Nv(s);const l=new dn(60,innerWidth/innerHeight,.1,300),c=()=>{l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),o()};return addEventListener("resize",c),{renderer:i,scene:s,camera:l,soft:e,dispose(){removeEventListener("resize",c),s.traverse(d=>{d.isMesh}),i.dispose(),zv(),i.domElement.remove()}}}let jl=null;function x2(n){jl=n,Vf(n)}function Zl(n,e,t,i){const o=h2(n,e,t,i);return jl&&Vf(jl),o}function zu(n,e,t,i,o){m2(n,e,t,i,o)}function Wf(){return{npcs:{},pairs:{},acc:0}}function v2(n,e,t,i,o,s,r){if(n.acc+=r,n.acc<.25)return;const a=n.acc;n.acc=0;const l=Math.sin(t),c=Math.cos(t);for(const u of i){if(u.state==="dead")continue;const f=u.x-e.x,p=u.z-e.z,x=f*f+p*p;if(x>22*22)continue;const v=Math.sqrt(x)||.001;if(f/v*l+p/v*c<.25&&v>2||Ri(e.x,e.z,u.x,u.z,o))continue;let m=n.npcs[u.id];m||(m=n.npcs[u.id]={time:0,named:!1,last:null,spots:{},seen:0}),m.time+=a,m.seen++;const h=rs(u.x,u.z);m.last={t:s,node:h,x:+u.x.toFixed(1),z:+u.z.toFixed(1)},m.spots[h]=(m.spots[h]??0)+1,m.time>4&&(m.named=!0)}const d=i.filter(u=>{const f=n.npcs[u.id];return f&&u.state!=="dead"&&s-(f.last?.t??-99)<.3});for(let u=0;u<d.length;u++)for(let f=u+1;f<d.length;f++){const p=d[u].id,x=d[f].id,v=p<x?`${p}+${x}`:`${x}+${p}`;n.pairs[v]=(n.pairs[v]??0)+1}}function Ac(n,e){const t=n.npcs[e]??(n.npcs[e]={time:0,named:!0,last:null,spots:{},seen:0});t.named=!0}function y2(n,e){const t=n.npcs[e];return t?Object.entries(t.spots).filter(([,i])=>i>=8).map(([i])=>i):[]}function b2(n,e){n.npcs=e.npcs??{},n.pairs=e.pairs??{},n.acc=0}function $f(n,e){for(const t of n.npcs){t.thinkAt=t.thinkAt??0,t.symbolAt=0,t.speed=0,t.path=[],t.pathIdx=0,t.fleeNode=null,t.state==="alerted"&&(t.state="dwell");const i=[];for(const[o,s]of t.beliefs??[]){if(s&&typeof s=="object"&&"kind"in s){i.push([o,s]);continue}const r=(e??[]).find(a=>a.id===o);i.push([o,{kind:r?.type??"disturbance",severity:r?.severity??.5,px:r?.x??t.x,pz:r?.z??t.z,place:r?.place??"sconosciuto",actor:r?.actorId??"sconosciuto",channel:s?.source==="hearsay"?"hearsay":"seen",confidence:s?.confidence??.5,t:s?.t??0,error:s?.error??null,provenance:[]}])}t.beliefs=i}return n.version=2,n}const M2="quartiere-p0",Ii="saves",Rc="slot0";function Cc(){return new Promise((n,e)=>{const t=indexedDB.open(M2,Br);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(Ii)||t.result.createObjectStore(Ii)},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}function co(n){return{version:Br,seed:n.seed,rngState:n.rng.state,t:n.sim.t,pruneAt:n.sim.pruneAt??0,corpseAt:n.sim.corpseAt??0,corpseReported:[...n.sim.corpseReported],player:Sv(n.player),npcs:n.npcs.map(Bs),journal:n.journal.serialize(),unseen:n.sim.unseen.map(e=>e.id),pk:n.pk,interactables:n.interactables,caught:n.caught??!1,contract:n.contract?{targetId:n.contract.targetId,limit:n.contract.limit,startedAt:n.contract.startedAt??0}:null,world:{packageTaken:!!n.worldFlags.packageTaken}}}function ci(n,e){if(!e||typeof e!="object")return null;let t=e;if(t.version===1&&(t=$f(w2(t),t.journal?.events)),t.version!==Br)throw new Error(`save v${t.version} non migrabile a v${Br}`);n.seed=t.seed??n.seed,t.rngState!=null&&(n.rng.state=t.rngState),n.sim.t=t.t??0,n.sim.pruneAt=t.pruneAt??0,n.sim.corpseAt=t.corpseAt??t.t??0,n.sim.corpseReported=new Set(t.corpseReported??[]);const i=t.player??{};n.player.x=i.x??n.player.x,n.player.z=i.z??n.player.z,n.player.yaw=i.yaw??n.player.yaw,Ev(n.player,i);const o=new Set(n.npcs.map(s=>s.id));for(const s of t.npcs??[]){const r=n.npcs.find(a=>a.id===s.id);r&&Gs(r,s)}if(n.loadWarnings=[...(t.npcs??[]).filter(s=>!o.has(s.id)).map(s=>`npc-orfano:${s.id}`),...n.npcs.filter(s=>!(t.npcs??[]).some(r=>r.id===s.id)).map(s=>`npc-mancante:${s.id}`)],n.journal.restore(t.journal??{seq:0,events:[]}),t.pk&&n.pk&&b2(n.pk,t.pk),t.interactables&&n.interactables){for(const[s,r]of Object.entries(t.interactables))n.interactables[s]&&(n.interactables[s].state=r.state);n.syncInteractables?.()}n.caught=t.caught??!1,n.contract=t.contract?{targetId:t.contract.targetId,limit:t.contract.limit,startedAt:t.contract.startedAt??0}:n.contract??null,n.caught&&(n.ended="caught"),n.sim.unseen.length=0;for(const s of t.unseen??[]){const r=n.journal.byId(s);r?n.sim.unseen.push(r):n.sim.unseen.push({id:s,t:0,type:"noise",severity:0,x:0,z:0,place:"sconosciuto",actorId:null,victimId:null,moved:!1,witnesses:[]})}return n.worldFlags.packageTaken=t.world?.packageTaken??!0,t}function w2(n){return JSON.parse(JSON.stringify(n))}let Nu=Promise.resolve();function S2(n){const e=Nu.then(()=>E2(n));return Nu=e.catch(()=>{}),e}async function E2(n){const e=co(n);e.savedAt=Date.now();const t=await Cc();return await new Promise((i,o)=>{const s=t.transaction(Ii,"readwrite");s.objectStore(Ii).put(e,Rc),s.oncomplete=i,s.onerror=()=>o(s.error)}),t.close(),e}async function Xf(){try{const n=await Cc(),e=await new Promise((t,i)=>{const s=n.transaction(Ii,"readonly").objectStore(Ii).get(Rc);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)});return n.close(),e??null}catch{return null}}async function T2(n,e){const t=e??await Xf();return t?ci(n,t):null}async function A2(){try{const n=await Cc(),e=await new Promise(t=>{const o=n.transaction(Ii,"readonly").objectStore(Ii).get(Rc);o.onsuccess=()=>t(o.result),o.onerror=()=>t(null)});return n.close(),!!e}catch{return!1}}const R2=900;function Pc(n,e=R2){return{targetId:n,limit:e,startedAt:0}}function Qi(n,e){if(!e)return{active:!1,expired:!1,remaining:0,elapsed:0};const t=n.t-(e.startedAt??0),i=Math.max(0,e.limit-t);return{active:!0,expired:i<=0,remaining:i,elapsed:t}}function C2(n,e){return e?n.npcs.find(t=>t.id===e.targetId)??null:null}function Es(n,e){if(!e)return"running";const t=Qi(n,e),i=C2(n,e);return i&&i.state==="dead"?t.expired?"expired":"done":t.expired?"expired":"running"}function qf(n){const e=Math.max(0,Math.ceil(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function P2(n){const e={top:document.getElementById("hud-top"),prompt:document.getElementById("prompt"),panel:document.getElementById("panel"),notebook:document.getElementById("notebook"),debug:document.getElementById("debug"),toast:document.getElementById("toast"),buttons:document.getElementById("hud-buttons")};let t=0,i="\0";const o={show(){e.top.style.display="flex",e.buttons.style.display="block"},toast(a,l=2600){e.toast.textContent=a,e.toast.style.display="block",t=performance.now()+l},tickToast(){t&&performance.now()>t&&(e.toast.style.display="none",t=0)},setPrompt(a){const l=a??"";if(l!==i){if(i=l,!l){e.prompt.style.display="none";return}e.prompt.style.display="block",e.prompt.innerHTML=l}},togglePanel(){e.panel.style.display=e.panel.style.display==="block"?"none":"block",e.panel.style.display==="block"&&o.renderPanel()},toggleNotebook(){e.notebook.style.display=e.notebook.style.display==="block"?"none":"block",e.notebook.style.display==="block"&&o.renderNotebook()},renderNotebook(){const a=n,l=a.pk,c=a.sim.t,d=Object.fromEntries(a.npcs.map(v=>[v.id,v]));let u="<h3>📓 Taccuino — solo ciò che hai osservato</h3>";const f=Qi(a.sim,a.contract);u+='<div class="who"><b>Contratto: Marco</b> — maglia rossa, zona bar/piazza. Il resto devi scoprirlo tu.'+(f.active?` ⏱ finestra: <b>${qf(f.remaining)}</b>${f.expired?" (scaduta)":""}`:"")+"</div>";const p=Object.keys(l.npcs).sort();p.length||(u+='<div class="who">Non hai ancora osservato nessuno. Guarda le persone (devono starti davanti e in vista).</div>');for(const v of p){const m=l.npcs[v],h=d[v];if(!h)continue;const E=m.named?h.name:`sconosciuto (osservato ${m.time.toFixed(0)}s)`,g=h.state==="dead"?" ☠ MORTO":"",y=m.last?`${$d[m.last.node]??m.last.node}, ${(c-m.last.t).toFixed(0)}s fa`:"mai",L=y2(l,v).map(R=>$d[R]??R).join(", ")||"—";u+=`<div class="who"><b>${E}</b>${g}<br>ultimo avvistamento: ${y}<br>luoghi abituali: ${L}</div>`}const x=Object.entries(l.pairs).filter(([,v])=>v>=20).map(([v])=>{const[m,h]=v.split("+"),E=l.npcs[m]?.named?d[m]?.name??m:"sconosciuto",g=l.npcs[h]?.named?d[h]?.name??h:"sconosciuto";return`${E} ↔ ${g}`});x.length&&(u+=`<h3>Spesso visti insieme</h3><div class="who">${x.join("<br>")}</div>`),e.notebook.innerHTML=u},renderPanel(){const a=n,l=a.sim.t;let c=`<h3>GROUND TRUTH — event journal (${a.journal.events.length})</h3>`;a.journal.events.length||(c+='<div class="ev">nessun evento: il mondo è invariato.</div>');for(const d of a.journal.events)c+=`<div class="ev"><b>${d.id}</b> t=${d.t.toFixed(1)} · ${d.type} sev=${d.severity} · (${d.x.toFixed(1)}, ${d.z.toFixed(1)}) ${d.actorId?"· da "+d.actorId:""} · testimoni veri: [${d.witnesses.join(",")||"—"}]</div>`;c+="<h3>CREDENZE NPC (parziali, con fonte/fiducia/età)</h3>";for(const d of a.npcs){c+=`<div class="bel"><b>${d.name}</b> [${d.state}/${d.level}] mem:${d.memory.length}`,d.beliefs.size||(c+="<br>· crede: nulla di sospetto");for(const[u,f]of d.beliefs){const p=Math.round(Nn(f,l)*100);c+=`<br>· su ${u} (età ${(l-f.t).toFixed(0)}s): ${T1(f,l)} [eff ${p}%]`}c+="</div>"}e.panel.innerHTML=c},renderDebug(a,l){const c=n.renderer.renderer.info,d=performance.memory?(performance.memory.usedJSHeapSize/1048576).toFixed(0)+"MB":"n/a",u=n.sim.stats;e.debug.textContent=`FPS ${a} · frame ${l.toFixed(1)}ms · sim ${n.sim.simMs.toFixed(2)}ms · ai ${n.sim.aiMs.toFixed(2)}ms
NPC L1/${n.sim.counts.L1} L2/${n.sim.counts.L2} L3/${n.sim.counts.L3}
percep ${u.perceptionChecks} · gossip ${u.gossipOps} · path ${u.pathComputations} · think ${u.thinkRuns}
draw ${c.render.calls} · tri ${c.render.triangles} · heap ${d}
errori: ${n.errors.length}`+(n.errors.length?` · ultimo: ${n.errors[n.errors.length-1]}`:"")},toggleDebug(){e.debug.style.display=e.debug.style.display==="block"?"none":"block"}},s=()=>o.togglePanel(),r=()=>n.save();return document.getElementById("btn-panel").addEventListener("click",s),document.getElementById("btn-save").addEventListener("click",r),o.dispose=()=>{document.getElementById("btn-panel").removeEventListener("click",s),document.getElementById("btn-save").removeEventListener("click",r)},o}function L2(){const n={ctx:null,master:null,stepAt:0,ensure(){if(n.ctx)return n.ctx.state==="suspended"&&n.ctx.resume(),!0;try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;n.ctx=new e,n.master=n.ctx.createGain(),n.master.gain.value=.25,n.master.connect(n.ctx.destination),n.ambience()}catch{return!1}return!!n.ctx},tone(e,t,i="sine",o=1,s=0){if(!n.ensure())return;const r=n.ctx.currentTime,a=n.ctx.createOscillator(),l=n.ctx.createGain();a.type=i,a.frequency.setValueAtTime(e,r),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,e+s),r+t),l.gain.setValueAtTime(o,r),l.gain.exponentialRampToValueAtTime(.001,r+t),a.connect(l),l.connect(n.master),a.start(r),a.stop(r+t+.02)},noiseBurst(e,t=1,i=400){if(!n.ensure())return;const o=n.ctx.currentTime,s=Math.floor(n.ctx.sampleRate*e),r=n.ctx.createBuffer(1,s,n.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const l=n.ctx.createBufferSource();l.buffer=r;const c=n.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=i;const d=n.ctx.createGain();d.gain.value=t,l.connect(c),c.connect(d),d.connect(n.master),l.start(o)},step(e){n.noiseBurst(.07,e?.5:.25,500)},whistle(){n.tone(2200,.35,"sine",.7,600)},swing(){n.noiseBurst(.12,.3,1200)},thud(){n.noiseBurst(.25,.9,300),n.tone(90,.2,"sine",.8,-40)},clank(){n.tone(620,.15,"square",.3),n.tone(930,.1,"square",.2)},crash(){n.noiseBurst(.7,1,900),n.tone(70,.5,"sine",.7,-30)},sting(){n.stingT&&clearTimeout(n.stingT),n.tone(440,.4,"sawtooth",.4,220),n.stingT=setTimeout(()=>{n.stingT=0,n.tone(554,.4,"sawtooth",.4,220)},180)},scream(){n.tone(900,.3,"sawtooth",.35,500)},door(){n.noiseBurst(.15,.4,700),n.tone(140,.18,"triangle",.5,-40)},window(){n.noiseBurst(.1,.25,2e3),n.tone(500,.1,"triangle",.25,120)},drawer(){n.noiseBurst(.18,.35,900)},pickup(){n.tone(660,.09,"sine",.5),setTimeout(()=>n.tone(990,.12,"sine",.5),90)},switch_(){n.tone(1200,.05,"square",.25)},sit(){n.noiseBurst(.12,.3,400)},phone(){n.tone(440,.15,"sine",.4),setTimeout(()=>n.tone(480,.15,"sine",.4),200)},bell(){n.tone(880,.5,"sine",.5,-80),setTimeout(()=>n.tone(880,.5,"sine",.4,-80),350)},locked(){n.tone(180,.12,"square",.35),setTimeout(()=>n.tone(150,.15,"square",.35),140)},ambience(){const e=n.ctx.sampleRate*2,t=n.ctx.createBuffer(1,e,n.ctx.sampleRate),i=t.getChannelData(0);let o=0;for(let l=0;l<e;l++)o=o*.98+(Math.random()*2-1)*.02,i[l]=o;const s=n.ctx.createBufferSource();s.buffer=t,s.loop=!0;const r=n.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=400;const a=n.ctx.createGain();a.gain.value=.5,s.connect(r),r.connect(a),a.connect(n.master),s.start(),n.ambienceSrc=s},dispose(){try{n.stingT&&(clearTimeout(n.stingT),n.stingT=0)}catch{}try{n.ambienceSrc?.stop()}catch{}n.ambienceSrc=null;try{n.ctx?.close()}catch{}n.ctx=null,n.master=null}};return n}const I2=1.9,D2=10,k2=120;function z2(n,e,t){const i=n.journal.append(e,{t:n.t,...t});return n.unseen.push(i),i}function kr(n){const e=Math.min(1,n.awareness??0),t=n.state==="alerted"||n.state==="curious"?.2:0,i=.9-.55*e-t;return Math.max(.05,Math.min(.95,i))}function ts(n,e,t,i){if(!t||t.state==="dead")return{hit:!1,reason:"no-target"};if((i===void 0?n.rng.next():i)<kr(t))return{hit:!0};const s=z2(n,"assault",{severity:.85,x:e.x,z:e.z,actorId:"player",victimId:t.id,place:rs(e.x,e.z)}),r=N2(n,t,s),a=r&&t.beliefs.has(s.id);return a&&U2(t,n.t),{hit:!1,ev:s,perceived:r,alarm:a}}function N2(n,e,t){const i=ia(e,t.x,t.z,n.colliders,n.rng);let o,s,r,a,l=null,c=null;const d=Math.hypot(e.x-t.x,e.z-t.z);if(i.seen)o="seen",s=i.confidence,r=i.px,a=i.pz,l=i.error;else{const f=Sc(e,t.x,t.z,D2,n.colliders,n.rng);if(!f.heard)return!1;o="heard",s=f.confidence,r=f.px,a=f.pz,c=f.w}return Lt(e.beliefs,t.id,Et({kind:"assault",severity:t.severity,px:r,pz:a,place:t.place,subject:t.victimId??null,actor:o==="seen"?Hl(e,t,d,s):"sconosciuto",channel:o,confidence:s,t:n.t,error:l,w:c,provenance:[]}),e.id)==="ignored"?!1:(Mn(e,t.id),!0)}function U2(n,e){const t=n.home??(n.schedule&&n.schedule[0]?n.schedule[0].node:null)??(n.agenda[0]?n.agenda[0].node:null);return t?(n.routineShift={until:+(e+k2).toFixed(3),node:t},!0):!1}const F2=.05;function jr(n,e){const t=Ve(n,St(et(n^40503),e));return{seed:n,rng:t.rng,sim:t.sim,npcs:t.sim.npcs,journal:t.sim.journal,player:{x:t.player.x,z:t.player.z,yaw:Math.PI,crouch:!1,running:!1,speed:0,attackCd:-99,whistleCd:-99,attackT:-99},pk:Wf(),interactables:Sf(),caught:!1,worldFlags:{packageTaken:!0},loadWarnings:[]}}const yn=jr;function Hn(n,e,t){for(let i=e;i<t;i++){if(n.player.x=Math.sin(i/50)*20,n.player.z=Math.cos(i/70)*20,i===50&&wt(n.sim,"theft",{severity:.7,x:10,z:10,actorId:"player",place:"strada"}),i===100&&(n.player.attackCd=n.sim.t),i===390){const o=n.sim.npcs[3],s=n.sim.npcs[0];o.x=s.x+2,o.z=s.z,o.state="dead",o.speed=0,o.path=[],o.fleeNode=null,o.gotoX=null,o.gotoZ=null,wt(n.sim,"kill",{severity:1,x:o.x,z:o.z,actorId:"player",victimId:o.id,place:"piazza"})}_n(n.sim,n.player,F2)}}function ti(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function O2(){const n=yn(4242,12);Hn(n,0,400);const e=JSON.parse(JSON.stringify(co(n)));Hn(n,400,600);const t=$t(n.sim),i=n.journal.events.length,o=yn(9999,12);ci(o,e),Hn(o,400,600);const s=$t(o.sim),r=i>e.journal.events.length;return{pass:t===s&&r,info:`continueA=${t} continueB=${s} corpseDiscoveredDuringContinue=${r} corpseAt=${e.corpseAt}`}}function B2(){const n=yn(3131,8);Hn(n,0,120);const e=co(n),t=JSON.parse(JSON.stringify(e)),i=JSON.stringify(e)===JSON.stringify(t),o=yn(1,8);ci(o,t),Hn(n,120,180),Hn(o,120,180);const s=$t(n.sim)===$t(o.sim);return{pass:i&&s,info:`wireIdentical=${i} continueMatch=${s}`}}function G2(){const n=et(777),e=et(777),t=[n.next(),n.next(),n.next()],i=[e.next(),e.next(),e.next()],o=n.state,s=[n.next(),n.next()];e.state=o;const r=[e.next(),e.next()],l=et(778).next()!==t[0];return{pass:JSON.stringify(t)===JSON.stringify(i)&&JSON.stringify(s)===JSON.stringify(r)&&l,info:`sameSeed=${JSON.stringify(t)===JSON.stringify(i)} stateRestore=${JSON.stringify(s)===JSON.stringify(r)} diffSeedDiff=${l}`}}function H2(){const n=yn(5151,4);Hn(n,0,101);const e=co(n),t=yn(2,4);return ci(t,JSON.parse(JSON.stringify(e))),{pass:t.player.attackCd===n.player.attackCd&&t.player.x===n.player.x&&t.player.z===n.player.z&&t.player.crouch===n.player.crouch,info:`attackCd ${e.player.attackCd} -> ${t.player.attackCd} pos=(${t.player.x.toFixed(2)},${t.player.z.toFixed(2)})`}}function V2(){const n={version:2,seed:5,rngState:123,t:9,npcs:[],journal:{seq:0,events:[]}},e=yn(7,4);ci(e,JSON.parse(JSON.stringify(n)));const t=e.sim.t===9&&e.sim.corpseAt===9&&e.worldFlags.packageTaken===!0&&e.caught===!1&&Array.isArray(e.loadWarnings)&&e.loadWarnings.length===e.npcs.length,i={version:1,seed:7,rngState:42,t:12.5,player:{x:1,z:2,yaw:0},npcs:[{id:"anna",x:0,z:0,yaw:0,state:"alerted",agendaIdx:0,dwellLeft:1,relations:{},memory:["ev1"],beliefs:[["ev1",{fact:"fatto",source:"seen",confidence:.8,t:10,error:null}]],alertedBy:"ev1",alertT:11,gossipAt:0}],journal:{seq:1,events:[{id:"ev1",t:10,type:"theft",severity:.6,x:37,z:21.5,actorId:"player",place:"piazza",witnesses:["anna"]}]},world:{packageTaken:!0}},o=yn(7,4);o.npcs[0].id="anna",ci(o,JSON.parse(JSON.stringify(i)));const s=o.npcs[0],r=o.sim.t===12.5&&s.state==="dwell"&&s.beliefs.get("ev1")?.kind==="theft"&&s.beliefs.get("ev1")?.channel==="seen";let a=null;try{ci(yn(7,4),{version:99})}catch(l){a=String(l.message)}return{pass:t&&r&&!!a,info:`v2default=${t} v1migrated=${r} badVersionRejected=${a}`}}function W2(){const n=yn(6161,10);Hn(n,0,60);const e=n.npcs[0];e.state="alerted",e.fleeNode="road_e",e.alertedBy="ev1",e.alertT=n.sim.t,e.dwellLeft=7.5;let t=null,i=!0;for(let o=0;o<20;o++){const s=JSON.parse(JSON.stringify(co(n))),r=yn(1e3+o,10);ci(r,s),i=i&&r.npcs[0].state==="alerted"&&r.npcs[0].fleeNode==="road_e"&&r.npcs[0].dwellLeft===7.5&&$t(r.sim)===$t(n.sim),n.npcs[0].state="alerted",t===null&&(t=$t(r.sim))}return Hn(n,60,120),{pass:i&&t!==null,info:`20 cicli alert-stable=${i}`}}function $2(){const n=Gr();for(let r=0;r<No+500;r++)n.append("noise",{t:r*.05,severity:.2,x:0,z:0,place:"piazza"});const e=n.events.length===No,t=new Set(n.events.map(r=>r.id)).size===n.events.length,i={seq:99999,events:n.events.map(r=>({...r}))};i.events.push(...Array.from({length:10},(r,a)=>({id:"x"+a})));const o=Gr();o.restore(i);const s=o.events.length===No;return{pass:e&&t&&s&&o.serialize().seq===99999,info:`len=${n.events.length}/${No} uniqueIds=${t} restoreBounded=${s}`}}function X2(){const n={memory:[],beliefs:new Map};for(let o=0;o<Cn*3;o++)Mn(n,"ev"+o);const e=n.memory.length===Cn&&n.memory[0]==="ev"+(Cn*3-Cn)&&n.memory[Cn-1]==="ev"+(Cn*3-1),t=Et({kind:"noise",channel:"heard",confidence:.6,t:0,provenance:[]}),i=new Map([["old",t]]);return Mc(i,1e6),{pass:e&&i.size===0,info:`memory=${n.memory.length}/${Cn} pruned=${i.size===0}`}}function q2(){const n=yn(8181,8);Hn(n,0,400);const e=co(n),i=["version","seed","rngState","t","pruneAt","corpseAt","corpseReported","player","npcs","journal","unseen","pk","interactables","caught","world"].filter(c=>!(c in e)),o=e.npcs[0],r=["agenda","relType","trust","relations","memory","beliefs","police","death","thinkAt","gossipAt","dwellLeft","path"].filter(c=>!(c in o)),l=["attackCd","whistleCd"].filter(c=>!(c in e.player));return{pass:i.length===0&&r.length===0&&l.length===0,info:`missingTop=[${i}] missingNpc=[${r}] missingPlayer=[${l}] corpseAt=${e.corpseAt}`}}function Y2(){const n=[ti("save_hard_reload_continue",O2),ti("json_pure_roundtrip",B2),ti("rng_serialization",G2),ti("player_timers_persist",H2),ti("defaults_old_saves",V2),ti("alert_and_repeat_saveload",W2),ti("journal_bounded",$2),ti("memory_bounded",X2),ti("save_field_coverage",q2)];return{suite:"p0-infra",passed:n.filter(t=>t.pass).length,total:n.length,tests:n}}const j2=Object.freeze(Object.defineProperty({__proto__:null,makeFakeGame:jr,runInfraTests:Y2},Symbol.toStringTag,{value:"Module"}));function bt(n,e){try{const t=e();return{name:n,pass:!!t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function sa(n,e,t={}){const i=Ve(9101,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:n,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},...t.npcs??[]]),o=i.sim.npcs[0],s=i.sim.npcs[1];return o.state="dead",o.x=0,o.z=0,s.state="dwell",s.dwellLeft=1e9,s.yaw=e,i.player.x=45,i.player.z=45,{w:i,dead:o,finder:s}}const Yf=Math.atan2(3,0),Lc=Math.atan2(-3,0);function Zr(n){return[...n.beliefs.entries()].map(([e,t])=>[e,t.kind])}function qn(n){return n.sim.journal.events.filter(e=>e.type==="found_corpse")}function Z2(){const{w:n,finder:e}=sa(3,Yf);Pe(n.sim,n.player,60);const i=qn(n).length===0&&n.sim.corpseReported.size===0&&e.beliefs.size===0&&n.sim.stats.corpseDiscoveries===0;e.yaw=Lc,Pe(n.sim,n.player,60);const o=qn(n),s=o[0],r=o.length===1&&n.sim.corpseReported.has("dead")&&n.sim.stats.corpseDiscoveries===1,a=!!s&&e.beliefs.has(s.id)&&s.witnesses.includes("finder");return{pass:i&&r&&a,info:`blocked=${i} events=${o.length} reported=${n.sim.corpseReported.size} finderBeliefs=${JSON.stringify(Zr(e))} witnesses=${s?JSON.stringify(s.witnesses):"—"}`}}function K2(){const{w:n,finder:e}=sa(1.2,Yf);Pe(n.sim,n.player,60);const t=qn(n)[0];return{pass:!!t&&e.beliefs.has(t.id)&&t.witnesses.includes("finder")&&n.sim.stats.corpseDiscoveries===1,info:`events=${qn(n).length} finderBeliefs=${JSON.stringify(Zr(e))} witnesses=${t?JSON.stringify(t.witnesses):"—"}`}}function J2(){const{w:n}=sa(40,Lc);Pe(n.sim,n.player,600);const e=qn(n);return{pass:e.length===0&&n.sim.corpseReported.size===0,info:`events=${e.length} reported=${n.sim.corpseReported.size}`}}function Q2(){const{w:n,finder:e}=sa(3,Lc,{npcs:[{id:"second",name:"Second",color:3,x:3,z:3,relations:{},agenda:[{node:"road_c",dwell:5}]}]}),t=n.sim.npcs[2];t.state="dwell",t.dwellLeft=1e9,t.yaw=Math.atan2(-3,-3),Pe(n.sim,n.player,90);const i=qn(n);return{pass:i.length===1&&e.beliefs.has(i[0].id)&&t.beliefs.has(i[0].id),info:`events=${i.length} f=${JSON.stringify(Zr(e))} s=${JSON.stringify(Zr(t))}`}}function Di(n,e,t,i,o=!0,s=!1){const r=Ve(9301,[{id:"w",name:"Watcher",color:2,x:n,z:e,relations:{},agenda:[{node:"road_c",dwell:5}]}]),a=r.sim.npcs[0];a.state="dwell",a.dwellLeft=1e9;const l=Math.atan2(t-n,i-e);return a.yaw=o?l:l+Math.PI,r.player.x=t,r.player.z=i,r.player.crouch=s,{w:r,n:a}}function Ei(n){return[...n.beliefs.values()].filter(e=>e.kind==="suspicion")}function ey(){const{w:n,n:e}=Di(0,0,0,6,!1);Pe(n.sim,n.player,80);const t=e.awareness,i=Ei(e);return{pass:t===0&&i.length===0,info:`awareness=${t} susp=${i.length}`}}function ty(){const n=Di(0,0,0,6,!0,!1),e=Di(0,0,0,6,!0,!0);Pe(n.w.sim,n.w.player,40),Pe(e.w.sim,e.w.player,40);const t=n.n.awareness,i=e.n.awareness;return{pass:Ei(n.n).length===1&&Ei(e.n).length===0&&i>0&&i<t,info:`upA=${t?.toFixed(2)} crouchA=${i?.toFixed(2)} upSusp=${Ei(n.n).length} crouchSusp=${Ei(e.n).length}`}}function ny(){const{w:n,n:e}=Di(29.5,17,29.5,11,!0);Pe(n.sim,n.player,80);const t=Ei(e);return{pass:t.length===0&&(e.awareness??0)===0,info:`awareness=${e.awareness} susp=${t.length}`}}function iy(){const n=r=>{for(let a=0;a<300&&Ei(r.n).length===0;a++)Pe(r.w.sim,r.w.player,1);return Ei(r.n)[0]},e=Di(0,0,0,6,!0),t=Di(0,0,0,12,!0),i=n(e),o=n(t);return{pass:i?.actor==="uomo in verde"&&o?.actor==="sconosciuto",info:`near=${i?.actor??"—"} far=${o?.actor??"—"}`}}function oy(){const n=Di(0,0,0,6,!0),e=Di(0,0,0,6,!0);Pe(n.w.sim,n.w.player,150),Pe(e.w.sim,e.w.player,150);const t=JSON.stringify([...n.n.beliefs.entries()].sort()),i=JSON.stringify([...e.n.beliefs.entries()].sort());return{pass:t===i&&n.n.awareness===e.n.awareness,info:`equal=${t===i&&n.n.awareness===e.n.awareness} a=${n.n.awareness?.toFixed(3)}`}}function sn(n){return n.state="dwell",n.dwellLeft=1e9,n}function ra(n,e){const t=Ve(n,[{id:"vic",name:"Victim",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}],home:"road_w"},{id:"far",name:"Far",color:2,x:0,z:42,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[i,o]=t.sim.npcs;return sn(i),i.yaw=e,sn(o),t.player.x=0,t.player.z=1.5,{w:t,vic:i,far:o}}function sy(){const{w:n,vic:e,far:t}=ra(9401,Math.PI),i=ts(n.sim,n.player,e,.99),o=n.sim.journal.events.filter(c=>c.type==="assault"),s=[...e.beliefs.values()].find(c=>c.kind==="assault"),r=e.state!=="dead",a=t.beliefs.size===0&&!t.memory.includes(i.ev?.id);Pe(n.sim,n.player,40);const l=e.state==="alerted"||e.alertedBy===(i.ev&&i.ev.id);return{pass:!i.hit&&i.perceived&&o.length===1&&!!s&&s.channel==="heard"&&s.actor==="sconosciuto"&&r&&a&&l&&!!e.routineShift,info:`hit=${i.hit} perceived=${i.perceived} ch=${s?.channel} actor=${s?.actor} assaults=${o.length} alive=${r} noLeak=${a} state=${e.state} shift=${!!e.routineShift} farBeliefs=${t.beliefs.size}`}}function ry(){const{w:n,vic:e}=ra(9402,0),t=ts(n.sim,n.player,e,.99),i=[...e.beliefs.values()].find(o=>o.kind==="assault");return{pass:!t.hit&&!!i&&i.channel==="seen"&&i.actor==="uomo in verde",info:`ch=${i?.channel} actor=${i?.actor}`}}function ay(){const{w:n,vic:e}=ra(9403,0),t=kr({awareness:0,state:"dwell"}),i=kr({awareness:1,state:"dwell"}),o=kr({awareness:1,state:"alerted"}),s=ts(n.sim,n.player,e,0),r=n.sim.journal.events.filter(c=>c.type==="assault").length,a=ts(n.sim,n.player,e,.999),l=n.sim.journal.events.filter(c=>c.type==="assault").length;return{pass:i<t&&o<=i&&s.hit===!0&&r===0&&a.hit===!1&&l===1&&e.state!=="dead",info:`calm=${t.toFixed(2)} ready=${i.toFixed(2)} alerted=${o.toFixed(2)} hit=${s.hit}/${r} miss=${a.hit}/${l} alive=${e.state}`}}function ly(){const{w:n,vic:e}=ra(9404,Math.PI);ts(n.sim,n.player,e,.99);const t=e.routineShift;Pe(n.sim,n.player,900);const i=e.agendaBlock===t.node&&e.agenda[0]?.node===t.node;return{pass:!!t&&t.node==="road_w"&&e.routineShift!=null&&i,info:`shift=${JSON.stringify(e.routineShift)} agendaBlock=${e.agendaBlock} agenda0=${e.agenda[0]?.node} state=${e.state}`}}function cy(){const n=Ve(9801,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:8,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[e,t]=n.sim.npcs;e.state="dead",e.death={evId:null,t:0,px:0,pz:0,kind:"kill",method:"melee"},sn(t),t.yaw=Math.atan2(-8,0),n.player.x=45,n.player.z=45;const i=ql(n.sim,8,0,10),o=Wr(n.sim,e),s=Wr(n.sim,e),r=ql(n.sim,8,0,10);Pe(n.sim,n.player,120);const a=qn(n).length===0&&!n.sim.corpseReported.has("dead"),l=!Ds(e,8,0,15);t.x=1,Pe(n.sim,n.player,120);const c=qn(n)[0],d=c?t.beliefs.get(c.id):null;return{pass:i===e&&o&&!s&&r===null&&a&&l&&!!c&&c.moved===!0&&!!d&&d.moved===!0,info:`before=${i?.id} conceal=${o}/${!s} after=${r} noDiscovery=${a} blocked=${l} ev=${!!c} moved=${c?.moved} bMoved=${d?.moved}`}}function dy(){const n=Ve(9802,[{id:"dead",name:"Dead",color:1,x:3,z:3,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"finder",name:"Finder",color:2,x:3,z:9,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[e,t]=n.sim.npcs;e.state="dead",e.death={evId:null,t:0,px:3,pz:3,kind:"kill",method:"trap"},Wr(n.sim,e);const i=Bs(e),o=as({id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},et(5));Gs(o,i);const s=o.hidden===!0&&o.death?.hidden===!0,r=!Ds(o,8,0,15)&&Ds(o,1,0,15);sn(t),t.yaw=Math.atan2(0,-6),t.x=3,t.z=9,n.player.x=45,n.player.z=45,Pe(n.sim,n.player,120);const a=qn(n).length===0;t.z=3.6,Pe(n.sim,n.player,120);const l=qn(n).length===1;return{pass:s&&r&&a&&l,info:`hidden=${s} blocked=${r} none=${a} found=${l} concealed=${n.sim.stats.concealed}`}}function jf(n){const e=Ve(n,[{id:"wit",name:"Witness",color:1,x:0,z:6,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"cop",name:"Cop",color:2,role:"police",x:12,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[t,i]=e.sim.npcs;return sn(t),t.yaw=Math.atan2(0,-6),sn(i),i.yaw=Math.PI/2,e.player.x=45,e.player.z=45,{w:e,wit:t,cop:i}}function uy(){const{w:n,wit:e,cop:t}=jf(9901);wt(n.sim,"accident",{severity:.35,x:0,z:0,actorId:null,victimId:"ghost",place:"road_c"}),Pe(n.sim,n.player,120);const i=e.beliefs.get("ev1"),o=[...e.beliefs.values(),...t.beliefs.values()].some(s=>s.kind==="kill");return{pass:!!i&&i.kind==="accident"&&!o&&t.police.state==="UNAWARE",info:`witKind=${i?.kind} sev=${i?.severity} murderBeliefs=${o} police=${t.police.state}`}}function fy(){const{w:n,wit:e,cop:t}=jf(9902);wt(n.sim,"accident",{severity:.35,x:0,z:0,actorId:null,victimId:"ghost",place:"road_c"}),Pe(n.sim,n.player,120);const i=e.beliefs.get("ev1");t.yaw=Math.atan2(-12,0),wt(n.sim,"sabotage",{severity:.5,x:0,z:0,actorId:null,place:"road_c"}),Pe(n.sim,n.player,180);const o=e.beliefs.get("ev1"),s=[...t.beliefs.values()].find(r=>r.kind==="kill"||r.kind==="sabotage");return{pass:i?.kind==="accident"&&!!o&&o.kind==="kill"&&o.channel==="inferred"&&o.confidence<=.7&&!!s&&t.police.state!=="UNAWARE"&&t.police.state!=="SUSPICIOUS",info:`before=${i?.kind} after=${o?.kind}/${o?.channel} conf=${o?.confidence?.toFixed(2)} copBelief=${s?.kind} police=${t.police.state}`}}function hy(){const n=Ve(9601,[{id:"o",name:"Observer",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=sn(n.sim.npcs[0]);e.yaw=0,n.player.x=0,n.player.z=12,wt(n.sim,"theft",{severity:.6,x:0,z:12,actorId:"player",place:"road_c"}),e.alertedBy="ev1",Pe(n.sim,n.player,15);const t=e.beliefs.get("ev1"),i=!!t&&t.actor==="sconosciuto";e.x=0,e.z=6,Pe(n.sim,n.player,12);const o=e.beliefs.get("ev1");return{pass:i&&o.actor==="uomo in verde",info:`far=${t?.actor} near=${o?.actor} dist=6`}}function py(){const n=Ve(9602,[{id:"o",name:"Observer",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=sn(n.sim.npcs[0]);e.yaw=0,n.player.x=0,n.player.z=12,wt(n.sim,"theft",{severity:.6,x:0,z:12,actorId:"player",place:"road_c"}),e.alertedBy="ev1",Pe(n.sim,n.player,300);const t=e.beliefs.get("ev1");return{pass:!!t&&t.actor==="sconosciuto",info:`actor=${t?.actor} kind=${t?.kind}`}}function my(){const n=d=>{const u=Ve(d,[{id:"near",name:"Near",color:1,x:5,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"distant",name:"Distant",color:2,x:11,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]);return sn(u.sim.npcs[0]),sn(u.sim.npcs[1]),u.player.x=0,u.player.z=0,u},e=n(9701);e.player.running=!0,Pe(e.sim,e.player,60);const t=[...e.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise"),i=[...e.sim.npcs[1].beliefs.values()].filter(d=>d.kind==="noise"),o=t.every(d=>d.channel==="heard"&&d.actor==="sconosciuto"),s=e.sim.unseen.every(d=>d.type!=="noise"),r=n(9702);r.player.running=!0,r.player.crouch=!0,Pe(r.sim,r.player,60);const a=[...r.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise"),l=n(9703);Pe(l.sim,l.player,60);const c=[...l.sim.npcs[0].beliefs.values()].filter(d=>d.kind==="noise");return{pass:t.length>=1&&i.length===0&&o&&s&&a.length===0&&c.length===0,info:`near=${t.length} far=${i.length} heardOnly=${o} noVisual=${s} crouch=${a.length} still=${c.length}`}}function _y(){const n=Ve(9704,[{id:"a",name:"A",color:1,x:5,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"b",name:"B",color:2,x:30,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]);sn(n.sim.npcs[0]),sn(n.sim.npcs[1]);const e=Ec(n.sim,0,0,10,.3),t=[...n.sim.npcs[0].beliefs.values()].filter(r=>r.kind==="noise"),i=[...n.sim.npcs[1].beliefs.values()].filter(r=>r.kind==="noise"),o=n.sim.journal.events.filter(r=>r.type==="noise"),s=n.sim.unseen.every(r=>r.type!=="noise");return{pass:e===1&&t.length===1&&t[0].channel==="heard"&&t[0].actor==="sconosciuto"&&i.length===0&&o.length===1&&s,info:`heard=${e} a=${t.length}/${t[0]?.channel} b=${i.length} journal=${o.length} noVisual=${s}`}}function gy(){const n=Ve(9111,[{id:"marco",name:"Marco",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),e=n.sim.npcs[0],t=Pc("marco",100),i=Qi(n.sim,t),o=Es(n.sim,t);e.state="dead";const s=Es(n.sim,t);n.sim.t=200,e.state="dwell";const r=Qi(n.sim,t),a=Es(n.sim,t);e.state="dead";const l=Es(n.sim,t);return{pass:i.active&&!i.expired&&i.remaining===100&&o==="running"&&s==="done"&&r.expired&&r.remaining===0&&a==="expired"&&l==="expired"&&Qi(n.sim,null).active===!1,info:`start=${i.remaining} run=${o} done=${s} expired=${a} late=${l}`}}function Zf(n,e){const t=Ve(n,[{id:"dead",name:"Dead",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"patsy",name:"Patsy",color:2,x:e?2.2:0,z:e?0:-4,relations:{},agenda:[{node:"road_c",dwell:5}]},{id:"cop",name:"Cop",color:3,role:"police",x:6,z:0,relations:{},agenda:[{node:"road_c",dwell:5}]}]),[i,o,s]=t.sim.npcs;return i.state="dead",i.death={evId:null,t:0,px:0,pz:0,kind:"kill",method:"melee"},sn(o),o.yaw=e?Math.atan2(1.5,0):Math.atan2(0,-1),sn(s),s.yaw=Math.atan2(-6,0),t.player.x=44,t.player.z=30,t.sim.hooks.onArrest=(r,a)=>{t.arrests=(t.arrests??[]).concat(`${r.id}>${a.id}`)},t.sim.hooks.onCaught=()=>{t.caughtHook=!0},wt(t.sim,"found_corpse",{severity:.55,x:0,z:0,actorId:null,victimId:"dead",place:"road_c"}),{w:t,dead:i,patsy:o,cop:s}}function xy(){const{w:n,patsy:e}=Zf(9211,!0);return Pe(n.sim,n.player,900),{pass:(n.arrests??[]).length===1&&n.arrests[0]==="cop>patsy"&&e.state==="arrested"&&!n.caughtHook,info:`arrests=${JSON.stringify(n.arrests??[])} patsy=${e.state} caught=${!!n.caughtHook}`}}function vy(){const{w:n,patsy:e}=Zf(9212,!1);return Pe(n.sim,n.player,900),{pass:(n.arrests??[]).length===0&&e.state==="dwell",info:`arrests=${JSON.stringify(n.arrests??[])} patsy=${e.state}`}}function yy(){const n=jr(7777,6);n.contract=Pc("marco",480),n.sim.t=120;const e=n.npcs[0];e.hidden=!0,e.death={evId:"ev9",t:30,px:e.x,pz:e.z,kind:"kill",method:"trap"},e.routineShift={until:240,node:"road_w"};const t=n.npcs.find(c=>c.role==="police"),i=co(n),o=JSON.parse(JSON.stringify(i)),s=jr(1,6);ci(s,o);const r=s.npcs.find(c=>c.id===e.id),a=s.contract,l=Qi(s.sim,s.contract);return{pass:r.hidden===!0&&r.death?.kind==="kill"&&r.routineShift?.node==="road_w"&&r.routineShift?.until===240&&a?.limit===480&&a?.targetId==="marco"&&l.remaining===360&&!l.expired&&(!t||s.npcs.find(c=>c.id===t.id).police!=null),info:`hidden=${r.hidden} shift=${JSON.stringify(r.routineShift)} contract=${JSON.stringify(a)} rem=${l.remaining}`}}function by(){return[bt("assassin_corpse_needs_perception",Z2),bt("assassin_corpse_stumble_discoverer_knows",K2),bt("assassin_corpse_silent_without_knower",J2),bt("assassin_corpse_single_truth",Q2),bt("assassin_awareness_requires_sight",ey),bt("assassin_awareness_crouch_slower",ty),bt("assassin_awareness_cover_blocks",ny),bt("assassin_awareness_recognition_range",iy),bt("assassin_awareness_deterministic",oy),bt("assassin_melee_miss_sensors",sy),bt("assassin_melee_miss_seen",ry),bt("assassin_melee_hit_chance",ay),bt("assassin_melee_routine_shift",ly),bt("assassin_conceal_discovery",cy),bt("assassin_conceal_persist",dy),bt("accident_initial_reading",uy),bt("accident_rivalutazione",fy),bt("identity_partial_observation",hy),bt("identity_stays_unknown",py),bt("footsteps_heard_range",my),bt("noise_no_identity",_y),bt("contract_time_window",gy),bt("arrest_patsy_on_scene",xy),bt("arrest_nobody_no_suspicion",vy),bt("save_restores_new_state",yy)]}const Ic=.05;function Lo(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function My(){const n=If();return{pass:n.nodeViolations.length===0&&n.edgeViolations.length===0,info:`nodes=[${n.nodeViolations}] edges=[${n.edgeViolations}]`}}function wy(){const{sim:n,player:e}=Ve(4401,[{id:"walker",name:"W",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}]),t=n.npcs[0],i=1200,o=[];for(const[a,l]of je.edges)o.push([a,l]),o.push([l,a]);let s=0,r="";for(const[a,l]of o){const c=je.nodes[a];t.x=c.x,t.z=c.z,t.state="dwell",t.dwellLeft=0,t.agendaIdx=0,t.agenda=[{node:l,dwell:999}],t.path=[],t.pathIdx=0,t.fleeNode=null,t.gotoX=null,t.gotoZ=null;let d=0;for(;d<i&&(_n(n,e,Ic),!(t.state==="dwell"&&t.agendaIdx>=1));d++);if(d>=i){const f=Math.hypot(je.nodes[l].x-t.x,je.nodes[l].z-t.z);return{pass:!1,info:`stallo ${a}->${l} dopo ${i} tick: distNodo=${f.toFixed(2)} (r=${ai(l)}) state=${t.state} pathIdx=${t.pathIdx}/${t.path.length}`}}const u=Math.hypot(je.nodes[l].x-t.x,je.nodes[l].z-t.z);if(u>ai(l)+.25)return{pass:!1,info:`arrivo lontano ${a}->${l}: dist=${u.toFixed(2)} > r=${ai(l)}`};d>s&&(s=d,r=`${a}->${l}`)}return{pass:!0,info:`${o.length} cammini ok, max ${s} tick su ${r}`}}function Sy(){const{sim:n,player:e}=Ve(4402,[{id:"p1",name:"P1",color:1,x:18,z:-2,relations:{},agenda:[{node:"vic_n",dwell:999}]},{id:"p2",name:"P2",color:2,x:-32,z:8,relations:{},agenda:[{node:"svc_in",dwell:999}]}]),[t,i]=n.npcs;t.dwellLeft=0,i.dwellLeft=0;let o=!1,s=!1,r=0;for(;r<1200&&(_n(n,e,Ic),!o&&t.state==="dwell"&&t.agendaIdx>=1&&(o=!0),!s&&i.state==="dwell"&&i.agendaIdx>=1&&(s=!0),!(o&&s));r++);const a=Math.hypot(je.nodes.vic_n.x-t.x,je.nodes.vic_n.z-t.z),l=Math.hypot(je.nodes.svc_in.x-i.x,je.nodes.svc_in.z-i.z),c=t.state==="walk"&&t.pathIdx<t.path.length,d=i.state==="walk"&&i.pathIdx<i.path.length;return{pass:o&&s&&!c&&!d&&a<=ai("vic_n")+.25&&l<=ai("svc_in")+.25,info:`vic_n arrived=${o} d=${a.toFixed(2)} state=${t.state} | svc_in arrived=${s} d=${l.toFixed(2)} state=${i.state} | ticks=${r}`}}function Ey(){const n=(r,a,l)=>{const c=Ff(0,0);return Of(c,{axis:()=>({x:a,z:l}),run:()=>!1},r,.2,[]),c},e=n(0,1,0),t=n(Math.PI/2,1,0),i=n(0,0,-1),o=n(Math.PI/2,0,-1);return{pass:e.x<-.1&&Math.abs(e.z)<1e-9&&t.z>.1&&Math.abs(t.x)<1e-9&&i.z>.1&&Math.abs(i.x)<1e-9&&o.x>.1&&Math.abs(o.z)<1e-9,info:`D@0=(${e.x.toFixed(2)},${e.z.toFixed(2)}) D@90=(${t.x.toFixed(2)},${t.z.toFixed(2)}) W@0=(${i.x.toFixed(2)},${i.z.toFixed(2)}) W@90=(${o.x.toFixed(2)},${o.z.toFixed(2)})`}}function Ty(){const{sim:n,player:e}=Ve(4405,[{id:"cur",name:"Cur",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}]),t=n.npcs[0];t.state="curious",t.gotoX=12,t.gotoZ=20;const i=Bl(t.gotoX,t.gotoZ,"b2");let o=!1,s=!1,r=0;for(;r<600;r++)if(_n(n,e,Ic),t.gotoX!=null&&!Bl(t.gotoX,t.gotoZ,"b2")&&(o=!0),t.state==="dwell"){s=!0;break}return{pass:i&&o&&s,info:`startIn=${i} sanitized=${o} arrived=${s} ticks=${r} state=${t.state}`}}function Ay(){const n=[{id:"s1",name:"S1",color:1,x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]},{id:"s2",name:"S2",color:2,x:.5,z:0,relations:{},agenda:[{node:"road_c",dwell:999}]}],e=()=>Ve(4406,n),t=e(),i=e();for(const c of[t,i])for(const d of c.sim.npcs)d.state="dwell",d.dwellLeft=1e9;Pe(t.sim,t.player,100),Pe(i.sim,i.player,100);const[o,s]=t.sim.npcs,r=Math.hypot(o.x-s.x,o.z-s.z),a=$t(t.sim),l=$t(i.sim);return{pass:r>=.69&&a===l,info:`dist 0.500 -> ${r.toFixed(3)}, hash ${a===l?"uguale":`diverso ${a}!=${l}`}`}}function Ry(){return[Lo("nav_no_collider_conflicts",My),Lo("nav_arrival_reachable",wy),Lo("nav_pole_reproduction",Sy),Lo("movement_camera_sign",Ey),Lo("goto_sanitized",Ty),Lo("separation_deterministic",Ay)]}const ki=.05,Uu=Object.keys(je.nodes);function Cy(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16)}function Py(n){return{id:n.id,x:+n.x.toFixed(3),z:+n.z.toFixed(3),yaw:+n.yaw.toFixed(3),state:n.state,agendaIdx:n.agendaIdx,dwellLeft:+n.dwellLeft.toFixed(3),agenda:n.agenda,agendaBlock:n.agendaBlock??null,path:n.path,pathIdx:n.pathIdx,fleeNode:n.fleeNode,relations:n.relations,relType:n.relType??{},trust:n.trust,mournT:n.mournT??0,gotoX:n.gotoX,gotoZ:n.gotoZ,memory:n.memory,memTier:n.memTier??{},memAt:n.memAt??{},beliefs:[...n.beliefs.entries()].sort((e,t)=>e[0]<t[0]?-1:1),level:n.level,thinkAt:+n.thinkAt.toFixed(3),alertedBy:n.alertedBy,talkT:n.talkT??0,gaze:n.gaze??{}}}function $t(n){const e={t:+n.t.toFixed(3),rng:n.rng.state,npcs:n.npcs.map(Py),journal:n.journal.events,unseen:n.unseen.map(t=>t.id)};return Cy(JSON.stringify(e))}function St(n,e){const t=[];for(let i=0;i<e;i++){const o=[],s=3+Math.floor(n.next()*3);for(let l=0;l<s;l++)o.push({node:Uu[Math.floor(n.next()*Uu.length)],dwell:2+Math.floor(n.next()*6)});const r=je.nodes[o[0].node],a={};t.push({id:`syn${i}`,name:`Syn ${i}`,color:8947848,x:r.x+n.next()*2-1,z:r.z+n.next()*2-1,agenda:o,relations:a})}for(let i=0;i<e;i++)for(let o=i+1;o<e;o++)if(n.next()<.2){const s=+(.2+n.next()*.6).toFixed(2);t[i].relations[t[o].id]=s,t[o].relations[t[i].id]=s}return t}function Ve(n,e){const t=et(n),i=Gr(),o=ao(),s=Os(),r=e.map(l=>as(l,t));return{sim:Uf(r,i,o,s,t,{}),rng:t,player:{x:0,z:0}}}function Pe(n,e,t){for(let i=0;i<t;i++)_n(n,e,ki)}function Rt(n,e){try{const t=e();return{name:n,pass:t.pass,detail:t.info??""}}catch(t){return{name:n,pass:!1,detail:"throw: "+String(t.message??t).slice(0,200)}}}function Ly(){const{sim:n,player:e}=Ve(1001,St(et(7),2)),[t,i]=n.npcs;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=999,i.x=-40,i.z=0,i.yaw=-Math.PI/2,i.state="dwell",i.dwellLeft=999,e.x=37,e.z=21.5,wt(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),Pe(n,e,60);const o=!Ln.toString().includes("journal"),s=t.beliefs.has("ev1")&&t.beliefs.get("ev1").channel==="seen",r=!i.beliefs.has("ev1")&&i.memory.length===0,a=n.journal.byId("ev1").witnesses;return{pass:o&&s&&r&&a.includes(t.id)&&!a.includes(i.id),info:`staticClean=${o} witnessSeen=${s} farIgnorant=${r} witnesses=[${a}]`}}function Iy(){const{sim:n,player:e}=Ve(2002,St(et(8),3)),[t,i,o]=n.npcs;t.x=35,t.z=21,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=999,i.x=-40,i.z=0,i.state="dwell",i.dwellLeft=999,o.x=-45,o.z=-5,o.state="dwell",o.dwellLeft=999,e.x=37,e.z=21,wt(n,"theft",{severity:.6,x:37,z:21,actorId:"player",place:"piazza"}),Pe(n,e,60);const s=t.beliefs.has("ev1"),r=i.beliefs.has("ev1"),a=o.beliefs.has("ev1");return{pass:s&&!r&&!a,info:`A=${s} B=${r} C=${a}`}}function Dy(){const{sim:n,player:e}=Ve(3003,St(et(9),3)),[t,i,o]=n.npcs;t.relations[i.id]=.9,i.relations[t.id]=.9,i.relations[o.id]=.9,o.relations[i.id]=.9,e.x=36,e.z=21;for(const[d,u]of[[t,35],[i,33.2],[o,39]])d.x=u,d.z=21,d.yaw=0,d.state="dwell",d.dwellLeft=9999;Lt(t.beliefs,"evX",Et({kind:"theft",severity:.2,px:37,pz:21,place:"piazza",actor:"sconosciuto",channel:"seen",confidence:.9,t:0,provenance:[]}),t.id),Mn(t,"evX"),Pe(n,e,600);const s=i.beliefs.get("evX"),r=o.beliefs.get("evX"),a=s&&s.channel==="hearsay"&&s.provenance[0]===t.id&&s.provenance[s.provenance.length-1]===t.id,l=r&&r.channel==="hearsay"&&r.provenance[0]===t.id&&r.provenance[r.provenance.length-1]===i.id,c=s&&r&&r.confidence<s.confidence&&s.confidence<.9;return{pass:!!a&&!!l&&!!c,info:`Bprov=${JSON.stringify(s?.provenance)} Cprov=${JSON.stringify(r?.provenance)} confs=0.90/${s?.confidence?.toFixed(2)}/${r?.confidence?.toFixed(2)}`}}function ky(){const n=()=>Ve(4242,St(et(11),12)),e=o=>{const{sim:s,player:r}=o;for(let a=0;a<600;a++)r.x=Math.sin(a/50)*20,r.z=Math.cos(a/70)*20,a===100&&wt(s,"theft",{severity:.7,x:10,z:10,actorId:"player",place:"strada"}),a===300&&wt(s,"disturbance",{severity:.45,x:-20,z:11,actorId:"player",place:"bar"}),_n(s,r,ki);return $t(s)},t=e(n()),i=e(n());return{pass:t===i,info:`h1=${t} h2=${i}`}}function zy(){const n=Ve(5555,St(et(12),8)),{sim:e,player:t}=n;for(let a=0;a<300;a++)a===50&&wt(e,"theft",{severity:.8,x:5,z:5,actorId:"player",place:"strada"}),_n(e,t,ki);const i=$t(e),o={t:e.t,rngState:e.rng.state,unseen:e.unseen.map(a=>a.id),pruneAt:e.pruneAt,journal:e.journal.serialize(),npcs:e.npcs.map(Bs)},s=Ve(9999,St(et(12),8));s.sim.rng.state=o.rngState,s.sim.t=o.t,s.sim.pruneAt=o.pruneAt,s.sim.journal.restore(o.journal),s.sim.unseen.length=0;for(const a of o.unseen){const l=s.sim.journal.byId(a);l&&s.sim.unseen.push(l)}o.npcs.forEach((a,l)=>Gs(s.sim.npcs[l],a));const r=$t(s.sim);return{pass:i===r,info:`pre=${i} post=${r}`}}function Ny(){const n={version:1,seed:7,rngState:42,t:12.5,player:{x:1,z:2,yaw:0},npcs:[{id:"anna",x:0,z:0,yaw:0,state:"alerted",agendaIdx:0,dwellLeft:1,relations:{},memory:["ev1"],beliefs:[["ev1",{fact:"una persona ha preso il pacco in piazza",source:"seen",confidence:.8,t:10,error:null}]],alertedBy:"ev1",alertT:11,gossipAt:0}],journal:{seq:1,events:[{id:"ev1",t:10,type:"theft",severity:.6,x:37,z:21.5,actorId:"player",place:"piazza",witnesses:["anna"]}]},world:{packageTaken:!0}},e=$f(JSON.parse(JSON.stringify(n)),n.journal.events),t=e.npcs[0].beliefs[0][1];return{pass:e.version===2&&t.kind==="theft"&&t.channel==="seen"&&t.px===37&&Array.isArray(t.provenance)&&e.npcs[0].state==="dwell"&&e.npcs[0].fleeNode===null,info:`v=${e.version} kind=${t.kind} ch=${t.channel} px=${t.px} state=${e.npcs[0].state}`}}function Uy(){const n=new Map,e=Lt(n,"e1",Et({kind:"theft",channel:"seen",confidence:.9,t:0,provenance:["a"]}),"b"),t=n.get("e1").confidence,i=Lt(n,"e1",Et({kind:"theft",channel:"hearsay",confidence:.3,t:1,provenance:["c"]}),"b"),o=n.get("e1").confidence<=.9,s=Lt(n,"e1",Et({kind:"theft",channel:"hearsay",confidence:.9,t:2,provenance:["b"]}),"b"),r=[],a=(l,c)=>{c!=="ignored"&&r.push(l)};return a("e1",e),a("e1",i),{pass:e==="stored"&&i==="merged"&&o&&s==="ignored"&&r.length===2,info:`r1=${e} r2=${i} r3=${s} conf=${t}->${n.get("e1").confidence} mem=${r.length}`}}function Fy(){const n=Et({kind:"theft",channel:"hearsay",confidence:.6,t:0,provenance:["a"]}),e=Nn(n,1e3),t=new Map([["e1",n]]),i=Mc(t,1e5);return{pass:e<.6&&e>0&&i===1&&t.size===0,info:`eff(1000s)=${e.toFixed(3)} pruned=${i}`}}function Oy(){const{sim:n,player:e}=Ve(6666,St(et(13),5));for(const i of n.npcs)i.x=-45,i.z=-45,i.state="dwell",i.dwellLeft=9999;e.x=45,e.z=45,wt(n,"theft",{severity:.9,x:45,z:45,actorId:"player",place:"piazza"}),Pe(n,e,60);const t=n.npcs.filter(i=>i.beliefs.size>0).length;return{pass:t===0&&n.journal.byId("ev1").witnesses.length===0,info:`learned=${t}`}}function By(){const{sim:n,player:e}=Ve(7777,St(et(14),1)),[t]=n.npcs;e.x=-49,e.z=-49,t.x=49,t.z=49,t.state="dwell",t.dwellLeft=1,t.agenda=[{node:"pia_c",dwell:1},{node:"road_w",dwell:1}],t.agendaIdx=0,Pe(n,e,200);const i=t.level;return{pass:i==="L3",info:`level=${i} agendaIdx=${t.agendaIdx} pos=(${(+t.x).toFixed(1)},${(+t.z).toFixed(1)})`}}function Gy(){const{sim:n,player:e}=Ve(8888,St(et(15),80));e.x=0,e.z=0,wt(n,"theft",{severity:.9,x:0,z:0,actorId:"player",place:"strada"});const t=performance.now();Pe(n,e,200);const i=performance.now()-t;return{pass:n.counts.L1<=12,info:`200ticks80npc=${i.toFixed(0)}ms L1=${n.counts.L1} L2=${n.counts.L2} L3=${n.counts.L3}`}}function Hy(){const n=a=>a.replace(/\/\/[^\n]*/g,"").replace(/\/\*[\s\S]*?\*\//g,""),e=[];for(const[a,l]of[["think",Ln],["policeThink",$l],["awarenessTick",Xl]]){const c=n(l.toString());for(const d of["journal","witnesses","byId","unseen","worldTruth"])c.includes(d)&&e.push(`${a}:${d}`)}const t=Ve(9101,St(et(31),2)),i=t.sim.npcs[0];i.x=0,i.z=0,i.yaw=0,i.awareness=1;const o={t:1,navAdj:Os(),rng:et(32),dtThink:.25,stats:{perceptionChecks:0,gossipOps:0,pathComputations:0,thinkRuns:0,pruned:0,thinkByLevel:{L1:0,L2:0,L3:0}},nearby:()=>[],player:{x:0,z:5},playerStealth:{x:0,z:5,crouch:!1,running:!1},colliders:t.sim.colliders,corpsesNear:()=>null,get journal(){throw new Error("leak:journal")},get witnesses(){throw new Error("leak:witnesses")},get worldTruth(){throw new Error("leak:worldTruth")},get policeState(){throw new Error("leak:policeState")}},s=new Proxy(t.sim,{get(a,l){if(l==="journal"||l==="witnesses"||l==="worldTruth"||l==="unseen")throw new Error("leak:"+String(l));return a[l]}});let r="ok";try{Ln(i,o);const a=as({id:"copX",name:"Cop",color:1,role:"police",x:0,z:0,relations:{},agenda:[{node:"road_c",dwell:1}]},et(33));$l(a,o),Xl(s,{x:0,z:5,crouch:!1,running:!1},.05)}catch(a){r=String(a.message??a)}return{pass:e.length===0&&r==="ok",info:`srcLeaks=[${e}] runtime=${r}`}}function Vy(){const n=()=>Ve(3030,St(et(41),30)),e=o=>{const{sim:s,player:r}=o;for(let a=0;a<800;a++)r.x=Math.sin(a/40)*25,r.z=Math.cos(a/55)*20,r.running=a%97<30,a===120&&wt(s,"theft",{severity:.7,x:12,z:12,actorId:"player",place:"strada"}),a===360&&wt(s,"disturbance",{severity:.45,x:-18,z:11,actorId:"player",place:"bar"}),a===620&&wt(s,"kill",{severity:1,x:37,z:20,actorId:"player",victimId:"syn5",place:"piazza"}),_n(s,r,ki);return $t(s)},t=e(n()),i=e(n());return{pass:t===i,info:`h1=${t} h2=${i}`}}function Wy(){const n={relations:{b:.8},relType:{b:"family"}},e={relations:{d:.8},relType:{}},t={relations:{f:.9},relType:{f:"enemy"}},i={relations:{q:.2},relType:{q:"family"}},o=li(n,"b")==="family"&&li(e,"d")==="acquaintance"&&li({relations:{},relType:{}},"y")==="unknown"&&Fo(n,"b")===.8&&Fo(t,"f")===0&&As(n,"b")===600&&As(e,"d")===60&&As(i,"q")===0&&Lr(n,"b")===1&&Lr(e,"d")===.7&&Lr(t,"f")===0,s=p=>({t:0,navAdj:Os(),rng:et(77),dtThink:.25,stats:{gossipOps:0,pathComputations:0,thinkRuns:0,perceptionChecks:0,pruned:0},nearby:()=>[],player:{x:0,z:0},colliders:p.sim.colliders,corpsesNear:()=>null}),r=()=>Et({kind:"kill",severity:1,px:5,pz:5,place:"piazza",subject:"kin",channel:"seen",confidence:.8,t:0,provenance:[]}),a=Ve(6001,St(et(51),1)),l=a.sim.npcs[0];l.relations={kin:.8},l.relType={kin:"family"},Lt(l.beliefs,"evK",r(),l.id),Ln(l,s(a));const c=l.state==="curious"&&l.gotoX===5&&(l.mournT??0)>=600,d=Ve(6002,St(et(52),1)),u=d.sim.npcs[0];Lt(u.beliefs,"evK",r(),u.id),Ln(u,s(d));const f=u.state==="alerted"&&u.fleeNode!==null&&(u.mournT??0)===0;return{pass:o&&c&&f,info:`unit=${o} helped=${c}(${l.state},mourn=${l.mournT}) flees=${f}(${u.state})`}}function $y(){const n=Nf.find(p=>p.id==="bruno"),e=Ve(7101,[n]),t=e.sim.npcs[0],i={t:0,navAdj:Os(),rng:et(71),dtThink:.25,stats:{gossipOps:0,pathComputations:0,thinkRuns:0,perceptionChecks:0,pruned:0},nearby:()=>[],player:{x:0,z:0},colliders:e.sim.colliders,corpsesNear:()=>null};i.t=25,Ln(t,i);const o=t.agendaBlock==="svc_in"&&t.agenda[0].node==="svc_in";i.t=275,Ln(t,i);const s=t.agendaBlock==="bar_in"&&t.agenda[0].node==="bar_in";i.t=450,Ln(t,i);const r=t.agendaBlock==="b5_door"&&t.agenda[0].node==="b5_door";t.state="alerted",t.fleeNode="road_e",i.t=25,Ln(t,i);const a=t.agendaBlock==="b5_door";t.state="dwell",t.alertedBy=null,t.fleeNode=null,Ln(t,i);const l=t.agendaBlock==="svc_in",c=Bs(t),d=as(n,et(72));Gs(d,c);const u=d.agendaBlock===t.agendaBlock&&JSON.stringify(d.agenda)===JSON.stringify(t.agenda),f=Ss(0)===8&&Ss(600)===8&&Ss(275)===19&&Ss(450)===2;return{pass:o&&s&&r&&a&&l&&u&&f,info:`work=${o} social=${s} home=${r} interrupt=${a} resume=${l} serial=${u} clock=${f}`}}function Xy(){const e=Ve(8101,St(et(61),1)).sim.npcs[0],t=(p,x,v,m=null)=>{Lt(e.beliefs,p,Et({kind:x,severity:v,subject:m,px:0,pz:0,place:"piazza",channel:"seen",confidence:.8,t:0,provenance:[]}),e.id),Mn(e,p)};t("evKill","kill",1,"kin"),t("evNoise","noise",.2),t("evTiny","disturbance",.2),t("evOrd","theft",.5);const i=e.memTier.evKill===2&&e.memTier.evNoise===0&&e.memTier.evTiny===0&&e.memTier.evOrd===1;e.beliefs.delete("evKill"),e.beliefs.delete("evNoise"),e.beliefs.delete("evTiny"),e.beliefs.delete("evOrd");const o=Ir(e,70),s=e.memory.includes("evKill")&&!e.memory.includes("evNoise")&&!e.memory.includes("evTiny")&&!e.memory.includes("evOrd"),r=e.memTier.evNoise===void 0&&e.memAt.evNoise===void 0,a=Ir(e,950),l=e.memory.length===0&&Object.keys(e.memTier).length===0&&Object.keys(e.memAt).length===0,d=Ve(8102,St(et(62),1)).sim.npcs[0];for(let p=0;p<200;p++){const x="e"+p;Lt(d.beliefs,x,Et({kind:"noise",severity:.2,px:0,pz:0,place:"p",channel:"heard",confidence:.3,t:p,provenance:[]}),d.id),Mn(d,x),p%40===0&&Ir(d,p)}const u=d.memory.length<=64,f=Object.keys(d.memTier).length<=d.memory.length&&Object.keys(d.memAt).length<=d.memory.length;return{pass:i&&s&&r&&l&&u&&f,info:`tiers=${i} r1=${o} after70=${s} r2=${a} after950=${l} cap=${d.memory.length} maps=${Object.keys(d.memTier).length}`}}function qy(){const n=new Map;Lt(n,"e1",Et({kind:"theft",channel:"hearsay",confidence:.8,t:0,px:0,pz:0,provenance:["a"]}),"self"),Lt(n,"e1",Et({kind:"theft",channel:"hearsay",confidence:.7,t:1,px:50,pz:50,provenance:["b"]}),"self");const e=n.get("e1"),t=(e.contra??0)===1&&e.confidence<.8&&e.px===0;Lt(n,"e1",Et({kind:"theft",channel:"seen",confidence:.6,t:2,px:48,pz:52,actor:"uomo in verde",provenance:[]}),"self");const i=n.get("e1"),o=i.channel==="seen"&&i.px===48&&(i.contra??0)===2;Lt(n,"e1",Et({kind:"theft",channel:"hearsay",confidence:.9,t:3,px:0,pz:0,actor:"persona rossa",provenance:["x"]}),"self");const s=n.get("e1"),r=s.channel==="seen"&&s.px===48&&s.confidence===.6,a=new Map;Lt(a,"e2",Et({kind:"theft",channel:"seen",confidence:.9,t:0,provenance:["a"]}),"self"),Lt(a,"e2",Et({kind:"theft",channel:"hearsay",confidence:.4,t:100,px:0,pz:0,provenance:["c"]}),"self");const l=a.get("e2"),c=l.confidence===.9&&l.t>0&&l.t<=100;return{pass:t&&o&&r&&c,info:`crumble=${t}(contra=${e.contra},conf=${e.confidence?.toFixed(2)}) seenWins=${o} seenHolds=${r} corrob=${c}(t=${l.t},conf=${l.confidence})`}}function Yy(){const{sim:n,player:e}=Ve(3011,St(et(13),4)),[t,i,o,s]=n.npcs;t.relations[i.id]=.9,i.relations[t.id]=.9,i.relations[o.id]=.9,o.relations[i.id]=.9,o.relations[s.id]=.9,s.relations[o.id]=.9;for(const[m,h]of[[t,-10],[i,-7],[o,-4],[s,-1]])m.x=h,m.z=0,m.yaw=0,m.state="dwell",m.dwellLeft=9999;Lt(t.beliefs,"evX",Et({kind:"theft",severity:.2,px:-8,pz:0,place:"strada",actor:"sconosciuto",channel:"seen",confidence:.9,t:0,provenance:[]}),t.id),Mn(t,"evX");const r=()=>[t,i,o,s].filter(m=>m.beliefs.has("evX")).length;Pe(n,e,80);const a=r();Pe(n,e,520);const l=r();Pe(n,e,1800);const c=r(),d=s.beliefs.get("evX"),u=!!d&&d.channel==="hearsay"&&d.provenance[0]===t.id&&d.provenance[d.provenance.length-1]===o.id,f=[t,i,o,s].some(m=>(m.talkT??0)>0),p=i.beliefs.get("evX"),x=o.beliefs.get("evX"),v=!!p&&!!x&&!!d&&d.confidence<x.confidence&&x.confidence<p.confidence&&p.confidence<.9;return{pass:a<=2&&l>=3&&c===4&&u&&v&&f,info:`early=${a} mid=${l} late=${c} Dprov=${JSON.stringify(d?.provenance)} talk=${f} confs=${p?.confidence?.toFixed(2)}/${x?.confidence?.toFixed(2)}/${d?.confidence?.toFixed(2)}`}}function jy(){const{sim:n,player:e}=Ve(4401,St(et(31),3)),[t,i,o]=n.npcs;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,t.state="dwell",t.dwellLeft=9999,i.x=34.5,i.z=19.5,i.yaw=-Math.PI/2,i.state="dwell",i.dwellLeft=9999,o.x=-40,o.z=0,o.state="dwell",o.dwellLeft=9999,e.x=37,e.z=21.5,wt(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),_n(n,e,ki);const s=t.beliefs.has("ev1");Pe(n,e,10);const r=t.beliefs.get("ev1"),a=!!r&&r.channel==="seen"&&r.w!=null&&r.w<=1.5&&r.confidence>.5,l=!i.beliefs.has("ev1")&&!o.beliefs.has("ev1"),c=Sc(t,37,21.5,14,n.colliders,n.rng),d=c.heard&&r&&c.w>r.w&&c.confidence<r.confidence;Pe(n,e,90);const u=Object.keys(t.gaze??{}).length===0&&Object.keys(i.gaze??{}).length===0;return{pass:!s&&a&&l&&d&&u,info:`instant=${s} w=${r?.w} conf=${r?.confidence?.toFixed(2)} heardW=${c.w} heardC=${c.confidence?.toFixed(2)} gazeClean=${u}`}}function Zy(){const{sim:n,player:e}=Ve(6601,St(et(61),4)),[t,i,o,s]=n.npcs;for(const l of n.npcs)l.relations={},l.relType={},l.state="dwell",l.dwellLeft=9999;t.x=34.5,t.z=21.5,t.yaw=Math.PI/2,i.x=47,i.z=21.5,i.yaw=Math.PI,o.x=-40,o.z=0,s.x=0,s.z=-40,e.x=37,e.z=21.5,e.crouch=!0,wt(n,"theft",{severity:.6,x:37,z:21.5,actorId:"player",place:"piazza"}),Pe(n,e,600);const r=t.beliefs.has("ev1")&&t.beliefs.get("ev1").channel==="seen",a=!i.beliefs.has("ev1")&&!o.beliefs.has("ev1")&&!s.beliefs.has("ev1")&&i.memory.length===0&&o.memory.length===0&&s.memory.length===0;return{pass:r&&a,info:`aKnows=${r} noLeak=${a}`}}function Ky(){const{sim:n,player:e}=Ve(5501,St(et(41),3)),[t,i,o]=n.npcs;for(const f of n.npcs)f.state="dwell",f.dwellLeft=9999;t.x=0,t.z=0,i.x=0,i.z=-50,o.x=50,o.z=50,e.x=0,e.z=20,Pe(n,e,20);const s=t.level==="L1";let r=0,a=t.level;for(let f=0;f<10;f++)e.z=f%2===0?28:32,Pe(n,e,10),t.level!==a&&(r++,a=t.level);e.x=0,e.z=8,Pe(n,e,15);const l=i.level==="L2";let c=0,d=i.level;for(let f=0;f<10;f++)e.z=f%2===0?12:8,Pe(n,e,10),i.level!==d&&(c++,d=i.level);const u=n.npcs.filter(f=>f.level==="L1").length<=12;return{pass:s&&l&&r===0&&c===0&&u,info:`startL1=${s} flips1=${r} startL2=${l} flips2=${c} L1count=${n.npcs.filter(f=>f.level==="L1").length}`}}function Jy(){const{sim:n,player:e}=Ve(7710,St(et(51),2)),[t,i]=n.npcs;for(const d of n.npcs)d.state="dwell",d.dwellLeft=9999;t.x=40,t.z=30,t.agenda=[{node:"pia_c",dwell:1},{node:"road_w",dwell:1}],t.agendaIdx=0,i.x=-49,i.z=-49,e.x=-49,e.z=-49,Pe(n,e,40);const o=t.level==="L3";e.x=38,e.z=28;const s=n.stats.thinkByLevel.L1;let r=0;for(let d=0;d<40;d++){const u=t.x,f=t.z;_n(n,e,ki),r=Math.max(r,Math.hypot(t.x-u,t.z-f))}const a=t.level==="L1"||t.level==="L2",l=r<=.2,c=n.stats.thinkByLevel.L1>s;return{pass:o&&a&&l&&c,info:`wasL3=${o} now=${t.level} maxStep=${r.toFixed(3)} L1think=${n.stats.thinkByLevel.L1-s}`}}function Qy(){const n=()=>Ve(7710,St(et(71),10)),e=(l,c,d)=>{for(let u=c;u<d;u++)l.player.x=Math.sin(u/40)*25,l.player.z=Math.cos(u/55)*25,u===120&&wt(l.sim,"theft",{severity:.7,x:5,z:5,actorId:"player",place:"strada"}),u===250&&wt(l.sim,"disturbance",{severity:.4,x:-15,z:10,actorId:"player",place:"bar"}),_n(l.sim,l.player,ki)},t=n();e(t,0,300);const i={t:t.sim.t,rngState:t.sim.rng.state,unseen:t.sim.unseen.map(l=>l.id),pruneAt:t.sim.pruneAt,journal:t.sim.journal.serialize(),npcs:t.sim.npcs.map(Bs)};e(t,300,500);const o=$t(t.sim),s=()=>{const l=n();l.sim.rng.state=i.rngState,l.sim.t=i.t,l.sim.pruneAt=i.pruneAt,l.sim.journal.restore(i.journal),l.sim.unseen.length=0;for(const c of i.unseen){const d=l.sim.journal.byId(c);d&&l.sim.unseen.push(d)}return i.npcs.forEach((c,d)=>Gs(l.sim.npcs[d],c)),e(l,300,500),$t(l.sim)},r=s(),a=s();return{pass:o===r&&r===a,info:`cont=${o} load1=${r} load2=${a}`}}async function eb(){const n=[Rt("truth_isolation",Ly),Rt("divergent_knowledge",Iy),Rt("gossip_chain",Dy),Rt("determinism_replay",ky),Rt("save_load_roundtrip",zy),Rt("merge_integrity",Uy),Rt("migration_v1_v2",Ny),Rt("belief_decay_prune",Fy),Rt("no_witness_event",Oy),Rt("l3_coherence",By),Rt("scale_80_smoke",Gy),Rt("truth_leak_static",Hy),Rt("determinism_30",Vy),Rt("relations_typed",Wy),Rt("schedule_routines",$y),Rt("memory_tiers",Xy),Rt("contradiction_corrob",qy),Rt("multi_hop_gossip",Yy),Rt("perception_quality",jy),Rt("no_omniscienza",Zy),Rt("level_hysteresis",Ky),Rt("l3_to_l1_promotion",Jy),Rt("replay_post_load",Qy),...by(),...Ry()];return{suite:"p0-foundation",passed:n.filter(t=>t.pass).length,total:n.length,tests:n,seedNote:"seed fissi per test"}}function tb(n,e=12345){const{sim:t,player:i}=Ve(e,St(et(e),n));i.x=0,i.z=0,Pe(t,i,40),t.stats.perceptionChecks=0,t.stats.gossipOps=0,t.stats.pathComputations=0,t.stats.thinkRuns=0,t.stats.thinkByLevel={L1:0,L2:0,L3:0};let o=0;const s=400,r=performance.now();for(let d=0;d<s;d++)d===100&&wt(t,"theft",{severity:.8,x:5,z:5,actorId:"player",place:"strada"}),_n(t,i,ki),o+=t.aiMs;const a=performance.now()-r;let l=0,c=0;for(const d of t.npcs)l+=d.memory.length,c+=d.beliefs.size;return{npcs:n,ticks:s,seed:e,simMsTotal:+a.toFixed(1),simMsPerTick:+(a/s).toFixed(3),aiMsPerTick:+(o/s).toFixed(3),perceptionChecks:t.stats.perceptionChecks,gossipOps:t.stats.gossipOps,pathComputations:t.stats.pathComputations,thinkRuns:t.stats.thinkRuns,thinkByLevel:{...t.stats.thinkByLevel},eventCount:t.journal.events.length,memoryCount:l,beliefCount:c,levels:{...t.counts},hash:$t(t)}}const Fu=Object.freeze(Object.defineProperty({__proto__:null,buildWorld:Ve,runAllTests:eb,runBench:tb,runTicks:Pe,snapshotHash:$t,synthRoster:St},Symbol.toStringTag,{value:"Module"}));function nb(n){const e={seed:n,rng:et(n),journal:Gr(),colliders:ao(),navAdj:Os(),npcs:[],player:Ff(37,2),pk:Wf(),interactables:{...Sf(),...Fx()},caught:!1,contract:Pc("marco",900),ended:null,worldFlags:{packageTaken:!0},errors:[],camYaw:0,camPitch:.5,fps:0,frameMs:0},t=If(e.colliders);(t.nodeViolations.length||t.edgeViolations.length)&&console.warn("[nav] waypoint in conflitto con collider",t),e.sim=Uf(e.npcs,e.journal,e.colliders,e.navAdj,e.rng,{onWitness:(o,s)=>{o.alertT=e.sim.t,(s.type==="kill"||s.type==="sabotage"||s.type==="found_corpse")&&(e.hud?.toast(`👁 ${o.name} ha visto qualcosa!`),s.type==="kill"&&e.audio?.scream())},onGossip:(o,s)=>e.hud?.toast(`💬 ${o.name} ha raccontato qualcosa a ${s.name}`),onInterview:(o,s)=>e.hud?.toast(`👮 ${o.name} interroga ${s.name}`),onPoliceState:(o,s,r)=>{(r==="ALERT"||r==="SEARCHING")&&e.audio?.sting()},onCaught:()=>{e.caught=!0,e.ended="caught",document.getElementById("caught").style.display="flex",e.audio?.sting()},onArrest:(o,s)=>{e.hud?.toast(`👮 ${o.name} ha arrestato ${s.name}: è lui il sospetto`),e.audio?.sting()}});for(const o of Nf)e.npcs.push(as(o,e.rng));Ac(e.pk,"marco"),e.renderer=g2(document.getElementById("app")),x2(e.renderer.camera),e.player.mesh=Zl(3129201,!0,"player",{id:"player",role:"player"}),e.renderer.scene.add(e.player.mesh);for(const o of e.npcs)o.mesh=Zl(o.color,!1,o.role,o),o.mesh.position.set(o.x,0,o.z),e.renderer.scene.add(o.mesh);e.pkg=null,e.syncInteractables=()=>Bu(e),kc(e),e.interactMeshes=u1(e.renderer.scene,e.interactables),Af(e.interactMeshes.refs,e.interactables),e.inputHandle=wv(),e.input=e.inputHandle.api,e.hud=P2(e),e.audio=L2(),Bu(e);const i=o=>{e.errors.push(String(o.message??o.error??"errore").slice(0,120))};return addEventListener("error",i),e.dispose=()=>{removeEventListener("error",i),e.inputHandle.dispose(),e.hud.dispose(),e.audio?.dispose(),e.renderer.dispose();for(const o of e.npcs)o.mesh=null;e.player.mesh=null},e}function ib(n,e){const t=St(n.rng,e).filter(i=>!n.npcs.some(o=>o.id===i.id));for(const i of t){const o=as(i,n.rng);o.mesh=Zl(10066329,!1,"civilian",o),o.mesh.position.set(o.x,0,o.z),n.renderer.scene.add(o.mesh),n.npcs.push(o)}return t.length}const ob={theft:"un furto",disturbance:"un trambusto",assault:"un’aggressione",kill:"un omicidio",found_corpse:"un cadavere",noise:"un rumore",sabotage:"un sabotaggio"},sb=new Set(["trap","fall","accident"]);function Kf(n,e,t){if(!e||e.state==="dead")return null;e.state="dead",e.speed=0,e.fleeNode=null,e.gotoX=null,e.gotoZ=null,e.path=[];const i=rs(e.x,e.z),o=sb.has(t),s=wt(n.sim,o?"accident":"kill",{severity:o?.35:1,x:e.x,z:e.z,actorId:o?null:t==="melee"?"player":null,victimId:e.id,place:i});return e.death={evId:s.id,t:n.sim.t,px:e.x,pz:e.z,kind:o?"accident":"kill",method:t},Dc(n,e.x,e.z,t==="melee"?18:22,.35),n.audio?.thud(),s}function Dc(n,e,t,i,o){return Ec(n.sim,e,t,i,o)}function rb(n){const e=n.player;if(n.sim.t-(e.attackCd??-99)<1.2)return null;e.attackCd=n.sim.t,e.attackT=n.sim.t;let t=null,i=I2;for(const s of n.npcs){if(s.state==="dead")continue;const r=Math.hypot(s.x-e.x,s.z-e.z);r<i&&(i=r,t=s)}if(!t)return n.audio?.swing(),null;const o=ts(n.sim,n.player,t,n.sim.rng.next());return o.hit?Kf(n,t,"melee"):(n.audio?.swing(),o)}function ab(n){const e=n.player;n.sim.t-(e.whistleCd??-99)<3||(e.whistleCd=n.sim.t,n.audio?.whistle(),Dc(n,e.x,e.z,14,.2))}function lb(n){const e=n.interactables.yardstack,t=n.player;return e.state!=="ok"||Math.hypot(t.x-e.x,t.z-e.z)>2.8?null:(e.state="armed",n.syncInteractables(),n.audio?.clank(),wt(n.sim,"sabotage",{severity:.5,x:e.x,z:e.z,actorId:"player",place:"svc_in"}),n.hud.toast("⚙ Catasta sabotata. Crollerà su chi ci passa sotto…"),!0)}function cb(n){const e=n.interactables.yardstack;if(e.state==="armed"){for(const t of n.npcs)if(t.state!=="dead"&&Math.hypot(t.x-e.x,t.z-e.z)<2.2){e.state="fallen",n.syncInteractables(),n.audio?.crash(),Kf(n,t,"trap"),n.hud.toast("💥 La catasta è crollata!");return}}}function db(n,e){Ac(n.pk,e.id);const t=[...e.beliefs.values()].pop();let i="Tutto tranquillo, come al solito.";if(t){const o=`${ob[t.kind]??"qualcosa di strano"} ${t.place}`;i=t.channel==="seen"?`Ho visto ${o}!`+(t.error?" (non ricordo bene i dettagli)":""):`Gira voce che ${o}…`}n.hud.toast(`🗣 ${e.name}: "${i}"`,4200)}function ub(n){const e=n.player;let t=null,i=2.5;for(const o of n.npcs){if(o.state==="dead")continue;const s=Math.hypot(o.x-e.x,o.z-e.z);s<i&&(i=s,t=o)}return t?{kind:"npc",npc:t}:null}function fb(n,e){if(n.ended)return n.ended;n.ended=e;const t=document.getElementById("caught");if(t){const i=t.querySelector("h1"),o=t.querySelector("p");e==="window"?(i.textContent="Finestra chiusa",o.textContent="Il tempo del contratto è finito e il bersaglio è ancora vivo. Studiare troppo a lungo costa la missione."):e==="done"&&(i.textContent="Contratto concluso",o.textContent="Il bersaglio è stato eliminato entro la finestra. Ora resta solo capire se qualcuno ti ha visto."),t.style.display="flex"}return n.audio?.sting(),e}const ja=1/20;function hb(n,e){const t=Math.min(e,.1),i=n.input.consumeLook();if(n.camYaw-=i.dx*.005,n.camPitch=Math.max(.08,Math.min(1.1,n.camPitch+i.dy*.003)),n.player.seated){const b=n.input.axis();Math.abs(b.x)>.1||Math.abs(b.z)>.1?Hu(n):n.player.speed=0}else Of(n.player,n.input,n.camYaw,t,n.colliders);n.stepAcc=(n.stepAcc??0)+n.player.speed*t;const o=n.player.crouch?1.6:n.player.running?2.6:2;n.stepAcc>o&&n.player.speed>.5&&(n.stepAcc=0,n.audio?.step(n.player.running)),n.acc=(n.acc??0)+t;let s=0;for(;n.acc>=ja&&s<5;)_n(n.sim,n.player,ja),n.acc-=ja,s++;if(v2(n.pk,n.player,n.camYaw,n.npcs,n.colliders,n.sim.t,t),cb(n),n.player.running)for(const b of n.npcs){if(b.state==="dead"||b.role==="police")continue;const M=n.player.x-b.x,I=n.player.z-b.z;if(M*M+I*I>36)continue;let _=Math.atan2(M,I)-b.yaw;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;Math.abs(_)<Math.PI/3&&(b.suspT=n.sim.t)}const r=ub(n);n.player.interactTarget=r;const a=n.interactables.yardstack,l=Math.hypot(n.player.x-a.x,n.player.z-a.z)<2.8,c=ql(n.sim,n.player.x,n.player.z,2.2),d=n.player.seated?null:Ox(n.interactables,n.player.x,n.player.z,3,0),u=r?Math.hypot(r.npc.x-n.player.x,r.npc.z-n.player.z):1e9,f=d?Math.hypot(d.x-n.player.x,d.z-n.player.z):1e9,p=d&&f<=u;if(c?n.hud.setPrompt("Premi <b>E</b> per nascondere il corpo"):l&&a.state==="ok"?n.hud.setPrompt("Premi <b>E</b> per sabotare la catasta"):p?n.hud.setPrompt(Gx(d)):r?n.hud.setPrompt(`Premi <b>E</b> per parlare con <b>${r.npc.name}</b> · <b>F</b> colpisci`):n.hud.setPrompt(null),n.input.wasPressed("KeyE")&&(c&&Wr(n.sim,c)?n.hud.toast("🩸 Corpo nascosto: nessuno lo troverà guardandolo da lontano"):l&&a.state==="ok"?lb(n):p?mb(n,d.id):r?db(n,r.npc):n.player.seated&&Hu(n)),n.input.wasPressed("KeyF")&&rb(n),n.input.wasPressed("KeyQ")&&ab(n),n.input.wasPressed("KeyC")&&(n.player.crouch=!n.player.crouch,n.hud.toast(n.player.crouch?"🤫 Accovacciato: meno visibile, più lento":"🚶 In piedi")),n.input.wasPressed("KeyJ")&&n.hud.togglePanel(),n.input.wasPressed("KeyN")&&n.hud.toggleNotebook(),n.input.wasPressed("F3")&&n.hud.toggleDebug(),document.getElementById("notebook").style.display==="block"&&(n._nTick=(n._nTick??0)+1)%20===0&&n.hud.renderNotebook(),!n.ended){const b=Es(n.sim,n.contract);b!=="running"&&fb(n,b)}const x=Qi(n.sim,n.contract),v=Math.ceil(x.remaining);if(n._clockSec!==v){n._clockSec=v;const b=document.getElementById("objective");b&&(n._objBase==null&&(n._objBase=b.innerHTML),b.innerHTML=`${n._objBase} <b>⏱ ${qf(x.remaining)}</b>`);const M=document.getElementById("notebook");M&&M.style.display==="block"&&n.hud?.renderNotebook()}const m=n.player.mesh;m.position.set(n.player.x,n.player.seated?-.32:Ou(n.player),n.player.z),m.rotation.y=n.player.yaw,zu(m,n.player.seated?0:n.player.speed,n.sim.t,n.sim.t-(n.player.attackT??-99)<.45,{crouch:!!n.player.crouch||!!n.player.seated});for(const b of n.npcs){b.mesh.position.set(b.x,b.state==="dead"?.35:Ou(b),b.z),b.mesh.rotation.y=b.yaw,b.mesh.rotation.z=b.state==="dead"?Math.PI/2:0,b.state!=="dead"&&zu(b.mesh,b.speed,n.sim.t,!1,{talk:n.sim.t-(b.talkT??-99)<2.5,alert:b.state==="alerted"||b.state==="curious"});const M=n.sim.t-(b.alertT??-99)<20,I=n.sim.t-(b.suspT??-99)<3;b.mesh.userData.mark.visible=b.state!=="dead"&&(b.state==="alerted"||I||M&&b.beliefs.size>0),b.mesh.visible=b.state!=="arrested"&&!(b.state==="dead"&&b.hidden)}const h=Bl(n.player.x,n.player.z,"bar"),E=h?3.2:7,g=Math.sin(n.camYaw),y=Math.cos(n.camYaw);let L=1;if(!h){const b=-g*Math.cos(n.camPitch)*E,M=-y*Math.cos(n.camPitch)*E;for(const I of[1,.85,.7,.55,.4,.28]){if(!pb(n.player.x+b*I,n.player.z+M*I,n.colliders)){L=I;break}L=I}}const R=n.player.x-g*Math.cos(n.camPitch)*E*L,A=n.player.z-y*Math.cos(n.camPitch)*E*L,P=h?2.5:Math.sin(n.camPitch)*E*L+1.6;n.renderer.camera.position.set(R,P,A),n.renderer.camera.lookAt(n.player.x+g*2.2,1.2,n.player.z+y*2.2),n.interactMeshes&&f1(n.interactMeshes.refs,n.interactMeshes.ring,t,n.player.x,n.player.z,p?d.id:null),n.renderer.renderer.render(n.renderer.scene,n.renderer.camera),n.hud.tickToast()}function pb(n,e,t){return t.some(i=>i.high&&n>i.minX-.3&&n<i.maxX+.3&&e>i.minZ-.3&&e<i.maxZ+.3)}function Ou(n){return n.speed>.2?Math.abs(Math.sin(performance.now()/130))*.06:0}function Bu(n){const e=n.interactables.yardstack,t=n.renderer.scene.getObjectByName("yardstack_top"),i=n.renderer.scene.getObjectByName("yardstack");t&&i&&(e.state==="fallen"?(i.rotation.x=Math.PI/2-.15,i.position.y=.6,t.rotation.x=Math.PI/2,t.position.y=.4):e.state==="armed"?t.rotation.z=.28:(i.rotation.x=0,i.position.y=1.2,t.rotation.x=0,t.rotation.z=0,t.position.y=2.9)),n.interactMeshes&&(kc(n),Af(n.interactMeshes.refs,n.interactables))}function kc(n){for(const e of Object.values(n.interactables)){if(e.kind!=="door")continue;const t=e.state==="open";t?bx("door:"+e.id):yx("door:"+e.id,Vx(e)),Tf(e.id,t)}n.colliders=ao()}const Gu={door:"door",window:"window",drawer:"drawer",pickup:"pickup",switch:"switch_",sit:"sit",phone:"phone",bell:"bell",locked:"locked"};function mb(n,e){const t=Hx(n.interactables,e);t.sound&&Gu[t.sound]&&n.audio?.[Gu[t.sound]]?.(),t.msg&&n.hud.toast(t.msg,3200);const i=o=>{o&&n.interactables[o]&&n.interactMeshes&&vc(n.interactMeshes.refs,n.interactables,o)};if(i(e),i(t.loot),i(t.taken),t.door&&(kc(n),Tf(e,t.door.open)),t.win&&xx(e,t.win.open),t.noise&&Dc(n,t.noise.x,t.noise.z,t.noise.radius,t.noise.severity),t.info&&_b(n),t.seat)if(t.seat.seated){for(const o of Object.values(n.interactables))o.kind==="furniture"&&o.id!==e&&o.state==="seated"&&(o.state="free",i(o.id));n.player.seated=e}else n.player.seated=null;return t}function Hu(n){const e=n.player.seated;n.player.seated=null,e&&n.interactables[e]&&(n.interactables[e].state="free",n.interactMeshes&&vc(n.interactMeshes.refs,n.interactables,e)),n.hud.toast("🚶 Ti alzi.")}function _b(n){const e=n.npcs.filter(i=>!n.pk.npcs[i.id]?.named);if(!e.length)return;const t=e[n.rng.next()*e.length|0];Ac(n.pk,t.id)}async function Za(n){try{await S2(n),n.hud.toast("💾 Salvato in IndexedDB")}catch(e){n.hud.toast("❌ Salvataggio fallito: "+String(e.message??e).slice(0,100))}}let ht=null,ks=!1,Cs=0,zr=0,Kl=0,Ka=0,gr=0,Nr=0,xr=0,Jf=0;function gb(){return ks}function xb(){return Jf}function Ur(){ks=!1,Cs&&cancelAnimationFrame(Cs),Cs=0,zr&&clearInterval(zr),zr=0;const n=document.getElementById("caught");if(n&&(n.style.display="none"),ht){try{ht.dispose()}catch{}ht=null}window.__p0=null}async function vr(n){Ur(),Jf++,document.getElementById("start-screen").style.display="none";let e=null;n||(e=await Xf());const t=n?Math.random()*1e9|0:e?.seed??Math.random()*1e9|0;localStorage.setItem("quartiere-p0-lastseed",String(t||"continue")),ht=nb(t||Math.random()*1e9|0);const i=new URLSearchParams(location.search);if(i.has("npc")&&ib(ht,Math.max(0,parseInt(i.get("npc")||"0",10))),!n)try{const o=await T2(ht,e);ht.loadWarnings?.length&&ht.hud.toast("⚠ "+ht.loadWarnings.join(", "),4e3)}catch(o){Ur(),document.getElementById("start-screen").style.display="flex",document.getElementById("start-msg").textContent="Save incompatibile: "+String(o.message??o).slice(0,140);return}return ht.save=()=>Za(ht),ht.audio.ensure(),ht.hud.show(),ks=!0,Kl=performance.now(),zr=setInterval(()=>{ks&&!document.hidden&&Za(ht)},3e4),Cs=requestAnimationFrame(Qf),window.__p0={game:ht,save:()=>Za(ht),journal:()=>ht.journal.events,beliefs:o=>[...ht.npcs.find(s=>s.id===o)?.beliefs.entries()??[]],tp:(o,s)=>{ht.player.x=o,ht.player.z=s},npcPos:o=>{const s=ht.npcs.find(r=>r.id===o);return{x:s.x,z:s.z,state:s.state,level:s.level}},fps:()=>Nr,destroy:Ur},ht}function Qf(n){if(!ks)return;Cs=requestAnimationFrame(Qf);const e=performance.now(),t=(n-Kl)/1e3;Kl=n,Ka+=1/Math.max(t,1e-4),gr++,gr>=30&&(Nr=Math.round(Ka/gr),Ka=0,gr=0),hb(ht,t),xr=xr*.9+(performance.now()-e)*.1,ht.fps=Nr,ht.frameMs=xr,document.getElementById("debug").style.display==="block"&&ht.hud.renderDebug(Nr,xr),document.getElementById("panel").style.display==="block"&&(ht._pTick=(ht._pTick??0)+1)%20===0&&ht.hud.renderPanel()}const Io=new URLSearchParams(location.search);if(Io.has("test"))(async()=>{const{runAllTests:n}=await Ws(async()=>{const{runAllTests:r}=await Promise.resolve().then(()=>Fu);return{runAllTests:r}},void 0),{runInfraTests:e}=await Ws(async()=>{const{runInfraTests:r}=await Promise.resolve().then(()=>j2);return{runInfraTests:r}},void 0),t=await n(),i=e(),o=[...t.tests,...i.tests],s={passed:o.filter(r=>r.pass).length,total:o.length,suites:[t.suite,i.suite],tests:o};document.body.innerHTML=`<pre id="test-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${yr(JSON.stringify(s,null,1))}</pre>`,console.log("[P0-TEST]",JSON.stringify(s))})();else if(Io.has("bench")){const n=Math.max(1,parseInt(Io.get("bench")||"5",10));(async()=>{const{runBench:e}=await Ws(async()=>{const{runBench:i}=await Promise.resolve().then(()=>Fu);return{runBench:i}},void 0),t=e(n,12345);document.body.innerHTML=`<pre id="bench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${yr(JSON.stringify(t,null,1))}</pre>`,console.log("[P0-BENCH]",JSON.stringify(t))})()}else if(Io.has("gfxbench")){let n=function(e){const t=e.renderer.renderer.info,i=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576):null;return{npcs:e.npcs.length,drawCalls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,programs:t.programs?.length??null,heapMB:i,simMs:+e.sim.simMs.toFixed(3),aiMs:+e.sim.aiMs.toFixed(3),frameMs:+e.frameMs.toFixed(2),fps:e.fps,levels:{...e.sim.counts},thinkRuns:e.sim.stats.thinkRuns,gossipOps:e.sim.stats.gossipOps,pathComputations:e.sim.stats.pathComputations,perceptionChecks:e.sim.stats.perceptionChecks,eventCount:e.journal.events.length}};(async()=>{const e=Math.max(60,parseInt(Io.get("frames")||"240",10));await vr(!0);const t=window.__p0.game,i=[];let o=0;await new Promise(a=>{const l=()=>{o++,o%30===0&&i.push(n(t)),o>=e?a():requestAnimationFrame(l)};requestAnimationFrame(l)});const r={...i[i.length-1]??n(t),frames:e,samples:i.length};Ur(),document.body.innerHTML=`<pre id="gfxbench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${yr(JSON.stringify(r,null,1))}</pre>`,console.log("[P0-GFXBENCH]",JSON.stringify(r))})()}else Io.has("lifecycle")?(async()=>{const{runLifecycleTests:n,runLifecyclePhase2:e}=await Ws(async()=>{const{runLifecycleTests:i,runLifecyclePhase2:o}=await import("./lifecycle-lYXVdUTV.js");return{runLifecycleTests:i,runLifecyclePhase2:o}},[]),t=sessionStorage.getItem("p0-lc")?await e():await n();document.body.innerHTML=`<pre id="lifecycle-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${yr(JSON.stringify(t,null,1))}</pre>`,console.log("[P0-LIFECYCLE]",JSON.stringify(t))})():(document.getElementById("btn-new").addEventListener("click",()=>vr(!0)),document.getElementById("btn-continue").addEventListener("click",()=>vr(!1)),document.getElementById("btn-retry").addEventListener("click",()=>{document.getElementById("caught").style.display="none",vr(!0)}),A2().then(n=>{n||(document.getElementById("btn-continue").style.opacity="0.4")}));function yr(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}export{xb as a,vr as b,Ur as d,gb as i};
