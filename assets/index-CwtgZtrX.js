(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ul="178",Mp=0,ku=1,Ep=2,pf=1,mf=2,ii=3,Oi=0,rn=1,An=2,Ui=0,Wr=1,Hu=2,Gu=3,Vu=4,bp=5,er=100,Tp=101,wp=102,Ap=103,Rp=104,Cp=200,Pp=201,Lp=202,Dp=203,Ic=204,Uc=205,Ip=206,Up=207,Np=208,Fp=209,Op=210,Bp=211,zp=212,kp=213,Hp=214,Nc=0,Fc=1,Oc=2,es=3,Bc=4,zc=5,kc=6,Hc=7,gf=0,Gp=1,Vp=2,Ni=0,Wp=1,Xp=2,qp=3,_f=4,Yp=5,$p=6,Zp=7,vf=300,ts=301,ns=302,Gc=303,Vc=304,xa=306,Wc=1e3,sr=1001,Xc=1002,Gt=1003,Kp=1004,Gn=1005,Vn=1006,Wa=1007,or=1008,Xn=1009,xf=1010,Sf=1011,Ws=1012,Nl=1013,ur=1014,ri=1015,co=1016,Fl=1017,Ol=1018,Xs=1020,yf=35902,Mf=1021,Ef=1022,Pn=1023,qs=1026,Ys=1027,bf=1028,Bl=1029,Tf=1030,zl=1031,kl=1033,$o=33776,Zo=33777,Ko=33778,Jo=33779,qc=35840,Yc=35841,$c=35842,Zc=35843,Kc=36196,Jc=37492,jc=37496,Qc=37808,el=37809,tl=37810,nl=37811,il=37812,rl=37813,sl=37814,ol=37815,al=37816,cl=37817,ll=37818,ul=37819,hl=37820,fl=37821,jo=36492,dl=36494,pl=36495,wf=36283,ml=36284,gl=36285,_l=36286,Jp=3200,jp=3201,Af=0,Qp=1,Ai="",Dt="srgb",is="srgb-linear",ta="linear",mt="srgb",Er=7680,Wu=519,em=512,tm=513,nm=514,Rf=515,im=516,rm=517,sm=518,om=519,vl=35044,Xu="300 es",si=2e3,na=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const Us=Math.PI/180,rs=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Hl(n,e){return(n%e+e)%e}function am(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cm(n,e,t){return n!==e?(t-n)/(e-n):0}function Ns(n,e,t){return(1-t)*n+t*e}function lm(n,e,t,i){return Ns(n,e,1-Math.exp(-t*i))}function um(n,e=1){return e-Math.abs(Hl(n,e*2)-e)}function hm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pm(n,e){return n+Math.random()*(e-n)}function mm(n){return n*(.5-Math.random())}function gm(n){n!==void 0&&(qu=n);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(n){return n*Us}function vm(n){return n*rs}function xm(n){return(n&n-1)===0&&n!==0}function Sm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ym(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mm(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $t={DEG2RAD:Us,RAD2DEG:rs,generateUUID:Wn,clamp:Je,euclideanModulo:Hl,mapLinear:am,inverseLerp:cm,lerp:Ns,damp:lm,pingpong:um,smoothstep:hm,smootherstep:fm,randInt:dm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:_m,radToDeg:vm,isPowerOfTwo:xm,ceilPowerOfTwo:Sm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Mm,normalize:dt,denormalize:Rn};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==d||l!==p||u!==g){let m=1-a;const h=c*d+l*p+u*g+f*x,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const N=Math.sqrt(T),D=Math.atan2(N,h*A);m=Math.sin(m*D)/N,a=Math.sin(a*D)/N}const y=a*A;if(c=c*m+d*y,l=l*m+p*y,u=u*m+g*y,f=f*m+x*y,m===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=N,l*=N,u*=N,f*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-a*p,e[t+2]=l*g+u*p+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new R,Yu=new fs;class $e{constructor(e,t,i,r,s,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],A=r[1],T=r[4],y=r[7],N=r[2],D=r[5],P=r[8];return s[0]=o*x+a*A+c*N,s[3]=o*m+a*T+c*D,s[6]=o*h+a*y+c*P,s[1]=l*x+u*A+f*N,s[4]=l*m+u*T+f*D,s[7]=l*h+u*y+f*P,s[2]=d*x+p*A+g*N,s[5]=d*m+p*T+g*D,s[8]=d*h+p*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new $e;function Cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Em(){const n=ia("canvas");return n.style.display="block",n}const $u={};function Xr(n){n in $u||($u[n]=!0,console.warn(n))}function bm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Tm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){const n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?ta:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:Zu,fromXYZ:Ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Zu,fromXYZ:Ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const ut=Am();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let br;class Rm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=ia("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ya(r[o].image)):s.push(Ya(r[o]))}else s=Ya(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pm=0;const $a=new R;class Qt extends hs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=sr,r=sr,s=Vn,o=or,a=Pn,c=Xn,l=Qt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Wn(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=vf;Qt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(p+1)/2,N=(h+1)/2,D=(u+d)/4,P=(f+x)/4,U=(g+m)/4;return T>y&&T>N?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=D/i,s=P/i):y>N?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=D/r,s=U/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=P/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lm extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Qt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends Lm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pf extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),xo.subVectors(this.max,ys),Tr.subVectors(e.a,ys),wr.subVectors(e.b,ys),Ar.subVectors(e.c,ys),Si.subVectors(wr,Tr),yi.subVectors(Ar,wr),Xi.subVectors(Tr,Ar);let t=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Xi.y,Xi.x,0];return!Za(t,Tr,wr,Ar,xo)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Tr,wr,Ar,xo))?!1:(So.crossVectors(Si,yi),t=[So.x,So.y,So.z],Za(t,Tr,wr,Ar,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,vo=new ds,Tr=new R,wr=new R,Ar=new R,Si=new R,yi=new R,Xi=new R,ys=new R,xo=new R,So=new R,qi=new R;function Za(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qi.fromArray(n,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Im=new ds,Ms=new R,Ka=new R;class Vl{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Im.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Ka)),this.expandByPoint(Ms.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new R,Ja=new R,yo=new R,Mi=new R,ja=new R,Mo=new R,Qa=new R;class Lf{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ja.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yo),a=Mi.dot(this.direction),c=-Mi.dot(yo),l=Mi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ja).addScaledVector(yo,d),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){ja.subVectors(t,e),Mo.subVectors(i,e),Qa.crossVectors(ja,Mo);let o=this.direction.dot(Qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const c=a*this.direction.dot(Mo.crossVectors(Mi,Mo));if(c<0)return null;const l=a*this.direction.dot(ja.cross(Mi));if(l<0||c+l>o)return null;const u=-a*Mi.dot(Qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,c,l,u,f,d,p,g,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,d,p,g,x,m)}set(e,t,i,r,s,o,a,c,l,u,f,d,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,x=l*f;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Nm)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ei.crossVectors(i,an),Ei.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ei.crossVectors(i,an)),Ei.normalize(),Eo.crossVectors(an,Ei),r[0]=Ei.x,r[4]=Eo.x,r[8]=an.x,r[1]=Ei.y,r[5]=Eo.y,r[9]=an.y,r[2]=Ei.z,r[6]=Eo.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],A=i[3],T=i[7],y=i[11],N=i[15],D=r[0],P=r[4],U=r[8],M=r[12],S=r[1],L=r[5],G=r[9],z=r[13],$=r[2],Y=r[6],q=r[10],Q=r[14],V=r[3],fe=r[7],Se=r[11],we=r[15];return s[0]=o*D+a*S+c*$+l*V,s[4]=o*P+a*L+c*Y+l*fe,s[8]=o*U+a*G+c*q+l*Se,s[12]=o*M+a*z+c*Q+l*we,s[1]=u*D+f*S+d*$+p*V,s[5]=u*P+f*L+d*Y+p*fe,s[9]=u*U+f*G+d*q+p*Se,s[13]=u*M+f*z+d*Q+p*we,s[2]=g*D+x*S+m*$+h*V,s[6]=g*P+x*L+m*Y+h*fe,s[10]=g*U+x*G+m*q+h*Se,s[14]=g*M+x*z+m*Q+h*we,s[3]=A*D+T*S+y*$+N*V,s[7]=A*P+T*L+y*Y+N*fe,s[11]=A*U+T*G+y*q+N*Se,s[15]=A*M+T*z+y*Q+N*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*p-i*c*p)+x*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*f+t*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],A=f*m*l-x*d*l+x*c*p-a*m*p-f*c*h+a*d*h,T=g*d*l-u*m*l-g*c*p+o*m*p+u*c*h-o*d*h,y=u*x*l-g*f*l+g*a*p-o*x*p-u*a*h+o*f*h,N=g*f*c-u*x*c-g*a*d+o*x*d+u*a*m-o*f*m,D=t*A+i*T+r*y+s*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=A*P,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*h+i*c*h)*P,e[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*p-i*c*p)*P,e[4]=T*P,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*P,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*P,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*P,e[8]=y*P,e[9]=(g*f*s-u*x*s-g*i*p+t*x*p+u*i*h-t*f*h)*P,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*h+t*a*h)*P,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*P,e[12]=N*P,e[13]=(u*x*r-g*f*r+g*i*d-t*x*d-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,g=s*f,x=o*u,m=o*f,h=a*f,A=c*l,T=c*u,y=c*f,N=i.x,D=i.y,P=i.z;return r[0]=(1-(x+h))*N,r[1]=(p+y)*N,r[2]=(g-T)*N,r[3]=0,r[4]=(p-y)*D,r[5]=(1-(d+h))*D,r[6]=(m+A)*D,r[7]=0,r[8]=(g+T)*P,r[9]=(m-A)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const l=1/s,u=1/o,f=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=si){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===si)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===na)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=si){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*l,p=(i+r)*u;let g,x;if(a===si)g=(o+s)*f,x=-2*f;else if(a===na)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new R,yn=new xt,Um=new R(0,0,0),Nm=new R(1,1,1),Ei=new R,Eo=new R,an=new R,Ju=new xt,ju=new fs;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ju.setFromEuler(this),this.setFromQuaternion(ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fm=0;const Qu=new R,Cr=new fs,Qn=new xt,bo=new R,Es=new R,Om=new R,Bm=new fs,eh=new R(1,0,0),th=new R(0,1,0),nh=new R(0,0,1),ih={type:"added"},zm={type:"removed"},Pr={type:"childadded",child:null},ec={type:"childremoved",child:null};class Ut extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new R,t=new In,i=new fs,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Es,bo,this.up):Qn.lookAt(bo,Es,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zm),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new R(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new R,ei=new R,tc=new R,ti=new R,Lr=new R,Dr=new R,rh=new R,nc=new R,ic=new R,rc=new R,sc=new gt,oc=new gt,ac=new gt;class gn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mn.subVectors(r,t),ei.subVectors(i,t),tc.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(ei),c=Mn.dot(tc),l=ei.dot(ei),u=ei.dot(tc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(e,t,i,r){return Mn.subVectors(i,t),ei.subVectors(e,t),Mn.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Mn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Dr.subVectors(s,i),nc.subVectors(e,i);const c=Lr.dot(nc),l=Dr.dot(nc);if(c<=0&&l<=0)return t.copy(i);ic.subVectors(e,r);const u=Lr.dot(ic),f=Dr.dot(ic);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Lr,o);rc.subVectors(e,s);const p=Lr.dot(rc),g=Dr.dot(rc);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Dr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return rh.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(rh,a);const h=1/(m+x+d);return o=x*h,a=d*h,t.copy(i).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},To={h:0,s:0,l:0};function cc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Hl(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=cc(o,s,e+1/3),this.g=cc(o,s,e),this.b=cc(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ut.workingToColorSpace(qt.copy(this),e),Math.round(Je(qt.r*255,0,255))*65536+Math.round(Je(qt.g*255,0,255))*256+Math.round(Je(qt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Dt){ut.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(To);const i=Ns(bi.h,To.h,t),r=Ns(bi.s,To.s,t),s=Ns(bi.l,To.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new st;st.NAMES=Df;let km=0;class ps extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Wr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ic&&(i.blendSrc=this.blendSrc),this.blendDst!==Uc&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new R,wo=new ae;let Hm=0;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class If extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uf extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gm=0;const pn=new xt,lc=new Ut,Ir=new R,cn=new ds,bs=new ds,kt=new R;class vn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?Uf:If)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(cn.min,bs.min),cn.expandByPoint(kt),kt.addVectors(cn.max,bs.max),cn.expandByPoint(kt)):(cn.expandByPoint(bs.min),cn.expandByPoint(bs.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)kt.fromBufferAttribute(a,l),c&&(Ir.fromBufferAttribute(e,l),kt.add(Ir)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new R,c[U]=new R;const l=new R,u=new R,f=new R,d=new ae,p=new ae,g=new ae,x=new R,m=new R;function h(U,M,S){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[U].add(x),a[M].add(x),a[S].add(x),c[U].add(m),c[M].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){const S=A[U],L=S.start,G=S.count;for(let z=L,$=L+G;z<$;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new R,y=new R,N=new R,D=new R;function P(U){N.fromBufferAttribute(r,U),D.copy(N);const M=a[U];T.copy(M),T.sub(N.multiplyScalar(N.dot(M))).normalize(),y.crossVectors(D,M);const L=y.dot(c[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,L)}for(let U=0,M=A.length;U<M;++U){const S=A[U],L=S.start,G=S.count;for(let z=L,$=L+G;z<$;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R,f=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Ln(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new xt,Yi=new Lf,Ao=new Vl,oh=new R,Ro=new R,Co=new R,Po=new R,uc=new R,Lo=new R,ah=new R,Do=new R;class Ht extends Ut{constructor(e=new vn,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Lo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(uc.fromBufferAttribute(f,e),o?Lo.addScaledVector(uc,u):Lo.addScaledVector(uc.sub(t),u))}t.add(Lo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(Ao.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ao,oh)===null||Yi.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(sh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,N=T;y<N;y+=3){const D=a.getX(y),P=a.getX(y+1),U=a.getX(y+2);r=Io(this,h,e,i,l,u,f,D,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const A=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);r=Io(this,o,e,i,l,u,f,A,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,N=T;y<N;y+=3){const D=y,P=y+1,U=y+2;r=Io(this,h,e,i,l,u,f,D,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const A=m,T=m+1,y=m+2;r=Io(this,o,e,i,l,u,f,A,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Vm(n,e,t,i,r,s,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Oi,a),c===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Do);return l<t.near||l>t.far?null:{distance:l,point:Do.clone(),object:n}}function Io(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ro),n.getVertexPosition(c,Co),n.getVertexPosition(l,Po);const u=Vm(n,e,t,i,Ro,Co,Po,ah);if(u){const f=new R;gn.getBarycoord(ah,Ro,Co,Po,f),r&&(u.uv=gn.getInterpolatedAttribute(r,a,c,l,f,new ae)),s&&(u.uv1=gn.getInterpolatedAttribute(s,a,c,l,f,new ae)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,c,l,f,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};gn.getNormal(Ro,Co,Po,d.normal),u.face=d,u.barycoord=f}return u}class Hi extends vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function g(x,m,h,A,T,y,N,D,P,U,M){const S=y/P,L=N/U,G=y/2,z=N/2,$=D/2,Y=P+1,q=U+1;let Q=0,V=0;const fe=new R;for(let Se=0;Se<q;Se++){const we=Se*L-z;for(let Xe=0;Xe<Y;Xe++){const tt=Xe*S-G;fe[x]=tt*A,fe[m]=we*T,fe[h]=$,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[h]=D>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Xe/P),f.push(1-Se/U),Q+=1}}for(let Se=0;Se<U;Se++)for(let we=0;we<P;we++){const Xe=d+we+Y*Se,tt=d+we+Y*(Se+1),Z=d+(we+1)+Y*(Se+1),le=d+(we+1)+Y*Se;c.push(Xe,tt,le),c.push(tt,Z,le),V+=6}a.addGroup(p,V,M),p+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const r in i)e[r]=i[r]}return e}function Wm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Xm={clone:ss,merge:jt};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ff extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new R,ch=new ae,lh=new ae;class nn extends Ff{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,ch,lh),t.subVectors(lh,ch)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Nr=1;class $m extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Ur,Nr,e,t);r.layers=this.layers,this.add(r);const s=new nn(Ur,Nr,e,t);s.layers=this.layers,this.add(s);const o=new nn(Ur,Nr,e,t);o.layers=this.layers,this.add(o);const a=new nn(Ur,Nr,e,t);a.layers=this.layers,this.add(a);const c=new nn(Ur,Nr,e,t);c.layers=this.layers,this.add(c);const l=new nn(Ur,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Of extends Qt{constructor(e=[],t=ts,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zm extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Of(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ui});s.uniforms.tEquirect.value=t;const o=new Ht(r,s),a=t.minFilter;return t.minFilter===or&&(t.minFilter=Vn),new $m(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class ct extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Km={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=i}clone(){return new Xl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jm extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new R;class ra{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bf extends ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fr;const Ts=new R,Or=new R,Br=new R,zr=new ae,ws=new ae,zf=new xt,Uo=new R,As=new R,No=new R,uh=new ae,fc=new ae,hh=new ae;class Qm extends Ut{constructor(e=new Bf){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new vn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jm(t,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new ra(i,3,0,!1)),Fr.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=Fr,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Br.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Fo(Uo.set(-.5,-.5,0),Br,o,Or,r,s),Fo(As.set(.5,-.5,0),Br,o,Or,r,s),Fo(No.set(.5,.5,0),Br,o,Or,r,s),uh.set(0,0),fc.set(1,0),hh.set(1,1);let a=e.ray.intersectTriangle(Uo,As,No,!1,Ts);if(a===null&&(Fo(As.set(-.5,.5,0),Br,o,Or,r,s),fc.set(0,1),a=e.ray.intersectTriangle(Uo,No,As,!1,Ts),a===null))return;const c=e.ray.origin.distanceTo(Ts);c<e.near||c>e.far||t.push({distance:c,point:Ts.clone(),uv:gn.getInterpolation(Ts,Uo,As,No,uh,fc,hh,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fo(n,e,t,i,r,s){zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ws.x=s*zr.x-r*zr.y,ws.y=r*zr.x+s*zr.y):ws.copy(zr),n.copy(e),n.x+=ws.x,n.y+=ws.y,n.applyMatrix4(zf)}const dc=new R,e0=new R,t0=new $e;class ji{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=dc.subVectors(i,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t0.getNormalMatrix(e),r=this.coplanarPoint(dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Vl,n0=new ae(.5,.5),Oo=new R;class ql{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],A=r[13],T=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,m-p,y-h).normalize(),i[1].setComponents(c+s,d+l,m+p,y+h).normalize(),i[2].setComponents(c+o,d+u,m+g,y+A).normalize(),i[3].setComponents(c-o,d-u,m-g,y-A).normalize(),i[4].setComponents(c-a,d-f,m-x,y-T).normalize(),t===si)i[5].setComponents(c+a,d+f,m+x,y+T).normalize();else if(t===na)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=n0.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gi extends Qt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kf extends Qt{constructor(e,t,i=ur,r,s,o,a=Gt,c=Gt,l,u=qs,f=1){if(u!==qs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sa extends vn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const x=[],m=i/2;let h=0;A(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(p,2));function A(){const y=new R,N=new R;let D=0;const P=(t-e)/i;for(let U=0;U<=s;U++){const M=[],S=U/s,L=S*(t-e)+e;for(let G=0;G<=r;G++){const z=G/r,$=z*c+a,Y=Math.sin($),q=Math.cos($);N.x=L*Y,N.y=-S*i+m,N.z=L*q,f.push(N.x,N.y,N.z),y.set(Y,P,q).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-S),M.push(g++)}x.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const S=x[M][U],L=x[M+1][U],G=x[M+1][U+1],z=x[M][U+1];(e>0||M!==0)&&(u.push(S,L,z),D+=3),(t>0||M!==s-1)&&(u.push(L,G,z),D+=3)}l.addGroup(h,D,0),h+=D}function T(y){const N=g,D=new ae,P=new R;let U=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let G=0;G<=r;G++){const $=G/r*c+a,Y=Math.cos($),q=Math.sin($);P.x=M*q,P.y=m*S,P.z=M*Y,f.push(P.x,P.y,P.z),d.push(0,S,0),D.x=Y*.5+.5,D.y=q*.5*S+.5,p.push(D.x,D.y),g++}for(let G=0;G<r;G++){const z=N+G,$=L+G;y===!0?u.push($,$+1,z):u.push($+1,$,z),U+=3}l.addGroup(h,U,y===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends Sa{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ae:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new R,r=[],s=[],o=[],a=new R,c=new xt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $l extends Yn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*f+this.aX,l=d*f+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class i0 extends $l{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zl(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Bo=new R,pc=new Zl,mc=new Zl,gc=new Zl;class r0 extends Yn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Bo.subVectors(r[0],r[1]).add(r[0]),l=Bo);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),pc.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,x,m),mc.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,x,m),gc.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),mc.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),gc.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return i.set(pc.calc(c),mc.calc(c),gc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function s0(n,e){const t=1-n;return t*t*e}function o0(n,e){return 2*(1-n)*n*e}function a0(n,e){return n*n*e}function Fs(n,e,t,i){return s0(n,e)+o0(n,t)+a0(n,i)}function c0(n,e){const t=1-n;return t*t*t*e}function l0(n,e){const t=1-n;return 3*t*t*n*e}function u0(n,e){return 3*(1-n)*n*n*e}function h0(n,e){return n*n*n*e}function Os(n,e,t,i,r){return c0(n,e)+l0(n,t)+u0(n,i)+h0(n,r)}class Hf extends Yn{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Os(e,r.x,s.x,o.x,a.x),Os(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class f0 extends Yn{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Os(e,r.x,s.x,o.x,a.x),Os(e,r.y,s.y,o.y,a.y),Os(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gf extends Yn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d0 extends Yn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vf extends Yn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Fs(e,r.x,s.x,o.x),Fs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p0 extends Yn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Fs(e,r.x,s.x,o.x),Fs(e,r.y,s.y,o.y),Fs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wf extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(fh(a,c.x,l.x,u.x,f.x),fh(a,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ae().fromArray(r))}return this}}var xl=Object.freeze({__proto__:null,ArcCurve:i0,CatmullRomCurve3:r0,CubicBezierCurve:Hf,CubicBezierCurve3:f0,EllipseCurve:$l,LineCurve:Gf,LineCurve3:d0,QuadraticBezierCurve:Vf,QuadraticBezierCurve3:p0,SplineCurve:Wf});class m0 extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new xl[r.type]().fromJSON(r))}return this}}class dh extends m0{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Gf(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Vf(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Hf(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new $l(e,t,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ya extends dh{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new dh().fromJSON(r))}return this}}function g0(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Xf(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=y0(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let d=t;d<r;d+=t){const p=n[d],g=n[d+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return $s(s,o,t,a,c,l,0),o}function Xf(n,e,t,i,r){let s;if(r===D0(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ph(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ph(o/i|0,n[o],n[o+1],s);return s&&os(s,s.next)&&(Ks(s),s=s.next),s}function fr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(os(t,t.next)||wt(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $s(n,e,t,i,r,s,o){if(!n)return;!o&&s&&w0(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?v0(n,i,r,s):_0(n)){e.push(c.i,n.i,l.i),Ks(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=x0(fr(n),e),$s(n,e,t,i,r,s,2)):o===2&&S0(n,e,t,i,r,s):$s(fr(n),e,t,i,r,s,1);break}}}function _0(n){const e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),f=Math.min(a,c,l),d=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&Ps(r,a,s,c,o,l,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v0(n,e,t,i){const r=n.prev,s=n,o=n.next;if(wt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,f=s.y,d=o.y,p=Math.min(a,c,l),g=Math.min(u,f,d),x=Math.max(a,c,l),m=Math.max(u,f,d),h=Sl(p,g,e,t,i),A=Sl(x,m,e,t,i);let T=n.prevZ,y=n.nextZ;for(;T&&T.z>=h&&y&&y.z<=A;){if(T.x>=p&&T.x<=x&&T.y>=g&&T.y<=m&&T!==r&&T!==o&&Ps(a,u,c,f,l,d,T.x,T.y)&&wt(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ps(a,u,c,f,l,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=h;){if(T.x>=p&&T.x<=x&&T.y>=g&&T.y<=m&&T!==r&&T!==o&&Ps(a,u,c,f,l,d,T.x,T.y)&&wt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ps(a,u,c,f,l,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function x0(n,e){let t=n;do{const i=t.prev,r=t.next.next;!os(i,r)&&Yf(i,t,t.next,r)&&Zs(i,r)&&Zs(r,i)&&(e.push(i.i,t.i,r.i),Ks(t),Ks(t.next),t=n=r),t=t.next}while(t!==n);return fr(t)}function S0(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C0(o,a)){let c=$f(o,a);o=fr(o,o.next),c=fr(c,c.next),$s(o,e,t,i,r,s,0),$s(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function y0(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Xf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(R0(l))}r.sort(M0);for(let s=0;s<r.length;s++)t=E0(r[s],t);return t}function M0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function E0(n,e){const t=b0(n,e);if(!t)return e;const i=$f(t,n);return fr(i,i.next),fr(t,t.next)}function b0(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(os(n,t))return t;do{if(os(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&qf(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Zs(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&T0(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function T0(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function w0(n,e,t,i){let r=n;do r.z===0&&(r.z=Sl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,A0(r)}function A0(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Sl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function R0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qf(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Ps(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&qf(n,e,t,i,r,s,o,a)}function C0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!P0(n,e)&&(Zs(n,e)&&Zs(e,n)&&L0(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||os(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function os(n,e){return n.x===e.x&&n.y===e.y}function Yf(n,e,t,i){const r=ko(wt(n,e,t)),s=ko(wt(n,e,i)),o=ko(wt(t,i,n)),a=ko(wt(t,i,e));return!!(r!==s&&o!==a||r===0&&zo(n,t,e)||s===0&&zo(n,i,e)||o===0&&zo(t,n,i)||a===0&&zo(t,e,i))}function zo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ko(n){return n>0?1:n<0?-1:0}function P0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zs(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function L0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $f(n,e){const t=yl(n.i,n.x,n.y),i=yl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ph(n,e,t,i){const r=yl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ks(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function D0(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class I0{static triangulate(e,t,i=2){return g0(e,t,i)}}class oi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return oi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];mh(e),gh(i,e);let o=e.length;t.forEach(mh);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,gh(i,t[c]);const a=I0.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function mh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Kl extends vn{constructor(e=new ya([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Vt(r,3)),this.setAttribute("uv",new Vt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:U0;let T,y=!1,N,D,P,U;h&&(T=h.getSpacedPoints(u),y=!0,d=!1,N=h.computeFrenetFrames(u,!1),D=new R,P=new R,U=new R),d||(m=0,p=0,g=0,x=0);const M=a.extractPoints(l);let S=M.shape;const L=M.holes;if(!oi.isClockWise(S)){S=S.reverse();for(let E=0,ue=L.length;E<ue;E++){const ne=L[E];oi.isClockWise(ne)&&(L[E]=ne.reverse())}}function z(E){const ne=10000000000000001e-36;let he=E[0];for(let K=1;K<=E.length;K++){const ye=K%E.length,re=E[ye],Me=re.x-he.x,Ve=re.y-he.y,w=Me*Me+Ve*Ve,_=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(he.x),Math.abs(he.y)),B=ne*_*_;if(w<=B){E.splice(ye,1),K--;continue}he=re}}z(S),L.forEach(z);const $=L.length,Y=S;for(let E=0;E<$;E++){const ue=L[E];S=S.concat(ue)}function q(E,ue,ne){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(ue,ne)}const Q=S.length;function V(E,ue,ne){let he,K,ye;const re=E.x-ue.x,Me=E.y-ue.y,Ve=ne.x-E.x,w=ne.y-E.y,_=re*re+Me*Me,B=re*w-Me*Ve;if(Math.abs(B)>Number.EPSILON){const W=Math.sqrt(_),ee=Math.sqrt(Ve*Ve+w*w),X=ue.x-Me/W,Pe=ue.y+re/W,de=ne.x-w/ee,Ae=ne.y+Ve/ee,Le=((de-X)*w-(Ae-Pe)*Ve)/(re*w-Me*Ve);he=X+re*Le-E.x,K=Pe+Me*Le-E.y;const te=he*he+K*K;if(te<=2)return new ae(he,K);ye=Math.sqrt(te/2)}else{let W=!1;re>Number.EPSILON?Ve>Number.EPSILON&&(W=!0):re<-Number.EPSILON?Ve<-Number.EPSILON&&(W=!0):Math.sign(Me)===Math.sign(w)&&(W=!0),W?(he=-Me,K=re,ye=Math.sqrt(_)):(he=re,K=Me,ye=Math.sqrt(_/2))}return new ae(he/ye,K/ye)}const fe=[];for(let E=0,ue=Y.length,ne=ue-1,he=E+1;E<ue;E++,ne++,he++)ne===ue&&(ne=0),he===ue&&(he=0),fe[E]=V(Y[E],Y[ne],Y[he]);const Se=[];let we,Xe=fe.concat();for(let E=0,ue=$;E<ue;E++){const ne=L[E];we=[];for(let he=0,K=ne.length,ye=K-1,re=he+1;he<K;he++,ye++,re++)ye===K&&(ye=0),re===K&&(re=0),we[he]=V(ne[he],ne[ye],ne[re]);Se.push(we),Xe=Xe.concat(we)}let tt;if(m===0)tt=oi.triangulateShape(Y,L);else{const E=[],ue=[];for(let ne=0;ne<m;ne++){const he=ne/m,K=p*Math.cos(he*Math.PI/2),ye=g*Math.sin(he*Math.PI/2)+x;for(let re=0,Me=Y.length;re<Me;re++){const Ve=q(Y[re],fe[re],ye);qe(Ve.x,Ve.y,-K),he===0&&E.push(Ve)}for(let re=0,Me=$;re<Me;re++){const Ve=L[re];we=Se[re];const w=[];for(let _=0,B=Ve.length;_<B;_++){const W=q(Ve[_],we[_],ye);qe(W.x,W.y,-K),he===0&&w.push(W)}he===0&&ue.push(w)}}tt=oi.triangulateShape(E,ue)}const Z=tt.length,le=g+x;for(let E=0;E<Q;E++){const ue=d?q(S[E],Xe[E],le):S[E];y?(P.copy(N.normals[0]).multiplyScalar(ue.x),D.copy(N.binormals[0]).multiplyScalar(ue.y),U.copy(T[0]).add(P).add(D),qe(U.x,U.y,U.z)):qe(ue.x,ue.y,0)}for(let E=1;E<=u;E++)for(let ue=0;ue<Q;ue++){const ne=d?q(S[ue],Xe[ue],le):S[ue];y?(P.copy(N.normals[E]).multiplyScalar(ne.x),D.copy(N.binormals[E]).multiplyScalar(ne.y),U.copy(T[E]).add(P).add(D),qe(U.x,U.y,U.z)):qe(ne.x,ne.y,f/u*E)}for(let E=m-1;E>=0;E--){const ue=E/m,ne=p*Math.cos(ue*Math.PI/2),he=g*Math.sin(ue*Math.PI/2)+x;for(let K=0,ye=Y.length;K<ye;K++){const re=q(Y[K],fe[K],he);qe(re.x,re.y,f+ne)}for(let K=0,ye=L.length;K<ye;K++){const re=L[K];we=Se[K];for(let Me=0,Ve=re.length;Me<Ve;Me++){const w=q(re[Me],we[Me],he);y?qe(w.x,w.y+T[u-1].y,T[u-1].x+ne):qe(w.x,w.y,f+ne)}}}De(),ve();function De(){const E=r.length/3;if(d){let ue=0,ne=Q*ue;for(let he=0;he<Z;he++){const K=tt[he];Ne(K[2]+ne,K[1]+ne,K[0]+ne)}ue=u+m*2,ne=Q*ue;for(let he=0;he<Z;he++){const K=tt[he];Ne(K[0]+ne,K[1]+ne,K[2]+ne)}}else{for(let ue=0;ue<Z;ue++){const ne=tt[ue];Ne(ne[2],ne[1],ne[0])}for(let ue=0;ue<Z;ue++){const ne=tt[ue];Ne(ne[0]+Q*u,ne[1]+Q*u,ne[2]+Q*u)}}i.addGroup(E,r.length/3-E,0)}function ve(){const E=r.length/3;let ue=0;Ie(Y,ue),ue+=Y.length;for(let ne=0,he=L.length;ne<he;ne++){const K=L[ne];Ie(K,ue),ue+=K.length}i.addGroup(E,r.length/3-E,1)}function Ie(E,ue){let ne=E.length;for(;--ne>=0;){const he=ne;let K=ne-1;K<0&&(K=E.length-1);for(let ye=0,re=u+m*2;ye<re;ye++){const Me=Q*ye,Ve=Q*(ye+1),w=ue+he+Me,_=ue+K+Me,B=ue+K+Ve,W=ue+he+Ve;St(w,_,B,W)}}}function qe(E,ue,ne){c.push(E),c.push(ue),c.push(ne)}function Ne(E,ue,ne){at(E),at(ue),at(ne);const he=r.length/3,K=A.generateTopUV(i,r,he-3,he-2,he-1);Ye(K[0]),Ye(K[1]),Ye(K[2])}function St(E,ue,ne,he){at(E),at(ue),at(he),at(ue),at(ne),at(he);const K=r.length/3,ye=A.generateSideWallUV(i,r,K-6,K-3,K-2,K-1);Ye(ye[0]),Ye(ye[1]),Ye(ye[3]),Ye(ye[1]),Ye(ye[2]),Ye(ye[3])}function at(E){r.push(c[E*3+0]),r.push(c[E*3+1]),r.push(c[E*3+2])}function Ye(E){s.push(E.x),s.push(E.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return N0(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xl[r.type]().fromJSON(r)),new Kl(i,e.options)}}const U0={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ae(s,o),new ae(a,c),new ae(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-f),new ae(d,1-g),new ae(x,1-h)]:[new ae(a,1-c),new ae(u,1-f),new ae(p,1-g),new ae(m,1-h)]}};function N0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ma extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const A=h*d-o;for(let T=0;T<l;T++){const y=T*f-s;g.push(y,-A,0),x.push(0,0,1),m.push(T/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<a;A++){const T=A+l*h,y=A+l*(h+1),N=A+1+l*(h+1),D=A+1+l*h;p.push(T,y,D),p.push(y,N,D)}this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jl extends vn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let f=e;const d=(t-e)/r,p=new R,g=new ae;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let x=0;x<r;x++){const m=x*(i+1);for(let h=0;h<i;h++){const A=h+m,T=A,y=A+i+1,N=A+i+2,D=A+1;a.push(T,y,D),a.push(y,N,D)}}this.setIndex(a),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ea extends vn{constructor(e=new ya([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(s,3)),this.setAttribute("uv",new Vt(o,2));function l(u){const f=r.length/3,d=u.extractPoints(t);let p=d.shape;const g=d.holes;oi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const A=g[m];oi.isClockWise(A)===!0&&(g[m]=A.reverse())}const x=oi.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const A=g[m];p=p.concat(A)}for(let m=0,h=p.length;m<h;m++){const A=p[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,h=x.length;m<h;m++){const A=x[m],T=A[0]+f,y=A[1]+f,N=A[2]+f;i.push(T,y,N),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return F0(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Ea(i,e.curveSegments)}}function F0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Nt extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Af,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O0 extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B0 extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ba extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class z0 extends ba{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _c=new xt,_h=new R,vh=new R;class jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k0 extends jl{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=rs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class H0 extends ba{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new k0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xh=new xt,Rs=new R,vc=new R;class G0 extends jl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rs),vc.copy(i.position),vc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vc),i.updateMatrixWorld(),r.makeTranslation(-Rs.x,-Rs.y,-Rs.z),xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}}class V0 extends ba{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new G0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zf extends Ff{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W0 extends jl{constructor(){super(new Zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X0 extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new W0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class q0 extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sh=new xt;class Y0{constructor(e,t,i=0,r=1/0){this.ray=new Lf(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(e,t=!0,i=[]){return Ml(e,this,i,t),i.sort(yh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ml(e[r],this,i,t);return i.sort(yh),i}}function yh(n,e){return n.distance-e.distance}function Ml(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ml(s[o],e,t,!0)}}function Mh(n,e,t,i){const r=$0(i);switch(t){case Mf:return n*e;case bf:return n*e/r.components*r.byteLength;case Bl:return n*e/r.components*r.byteLength;case Tf:return n*e*2/r.components*r.byteLength;case zl:return n*e*2/r.components*r.byteLength;case Ef:return n*e*3/r.components*r.byteLength;case Pn:return n*e*4/r.components*r.byteLength;case kl:return n*e*4/r.components*r.byteLength;case $o:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:case Zc:return Math.max(n,16)*Math.max(e,8)/4;case qc:case $c:return Math.max(n,8)*Math.max(e,8)/2;case Kc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jo:case dl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wf:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(n){switch(n){case Xn:case xf:return{byteLength:1,components:1};case Ws:case Sf:case co:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case ur:case Nl:case ri:return{byteLength:4,components:1};case yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);function Kf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Z0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
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
#endif`,$g=`struct PhysicalMaterial {
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
}`,Zg=`
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U_=`float getShadowMask() {
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
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,O_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,nv=`#if DEPTH_PACKING == 3200
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
}`,iv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
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
}`,cv=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,uv=`uniform vec3 diffuse;
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
}`,hv=`#define LAMBERT
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
}`,fv=`#define LAMBERT
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
}`,dv=`#define MATCAP
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
}`,pv=`#define MATCAP
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
}`,mv=`#define NORMAL
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
}`,gv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,vv=`#define PHONG
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
}`,xv=`#define STANDARD
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
}`,Sv=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,Ev=`uniform float size;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,wv=`uniform vec3 color;
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
}`,Av=`uniform float rotation;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:K0,alphahash_pars_fragment:J0,alphamap_fragment:j0,alphamap_pars_fragment:Q0,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:rg,batching_vertex:sg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:_g,color_vertex:vg,common:xg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Eg,emissivemap_fragment:bg,emissivemap_pars_fragment:Tg,colorspace_fragment:wg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Dg,fog_vertex:Ig,fog_pars_vertex:Ug,fog_fragment:Ng,fog_pars_fragment:Fg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:kg,lights_pars_begin:Hg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:$g,lights_fragment_begin:Zg,lights_fragment_maps:Kg,lights_fragment_end:Jg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:e_,logdepthbuf_vertex:t_,map_fragment:n_,map_pars_fragment:i_,map_particle_fragment:r_,map_particle_pars_fragment:s_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:a_,morphinstance_vertex:c_,morphcolor_vertex:l_,morphnormal_vertex:u_,morphtarget_pars_vertex:h_,morphtarget_vertex:f_,normal_fragment_begin:d_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:__,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:M_,opaque_fragment:E_,packing:b_,premultiplied_alpha_fragment:T_,project_vertex:w_,dithering_fragment:A_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:D_,shadowmap_vertex:I_,shadowmask_pars_fragment:U_,skinbase_vertex:N_,skinning_pars_vertex:F_,skinning_vertex:O_,skinnormal_vertex:B_,specularmap_fragment:z_,specularmap_pars_fragment:k_,tonemapping_fragment:H_,tonemapping_pars_fragment:G_,transmission_fragment:V_,transmission_pars_fragment:W_,uv_pars_fragment:X_,uv_pars_vertex:q_,uv_vertex:Y_,worldpos_vertex:$_,background_vert:Z_,background_frag:K_,backgroundCube_vert:J_,backgroundCube_frag:j_,cube_vert:Q_,cube_frag:ev,depth_vert:tv,depth_frag:nv,distanceRGBA_vert:iv,distanceRGBA_frag:rv,equirect_vert:sv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:cv,meshbasic_vert:lv,meshbasic_frag:uv,meshlambert_vert:hv,meshlambert_frag:fv,meshmatcap_vert:dv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:_v,meshphong_frag:vv,meshphysical_vert:xv,meshphysical_frag:Sv,meshtoon_vert:yv,meshtoon_frag:Mv,points_vert:Ev,points_frag:bv,shadow_vert:Tv,shadow_frag:wv,sprite_vert:Av,sprite_frag:Rv},me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},kn={basic:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:jt([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:jt([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:jt([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:jt([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:jt([me.lights,me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};kn.physical={uniforms:jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ho={r:0,b:0,g:0},Zi=new In,Cv=new xt;function Pv(n,e,t,i,r,s,o){const a=new st(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function x(T){let y=!1;const N=g(T);N===null?h(a,c):N&&N.isColor&&(h(N,1),y=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,y){const N=g(y);N&&(N.isCubeTexture||N.mapping===xa)?(u===void 0&&(u=new Ht(new Hi(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:ss(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(Zi)),u.material.toneMapped=ut.getTransfer(N.colorSpace)!==mt,(f!==N||d!==N.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=N,d=N.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new Ht(new Ma(2,2),new Bi({name:"BackgroundMaterial",uniforms:ss(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(N.colorSpace)!==mt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||d!==N.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=N,d=N.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,y){T.getRGB(Ho,Nf(n)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(a,c)},render:x,addToRenderList:m,dispose:A}}function Lv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,G,z,$){let Y=!1;const q=f(z,G,L);s!==q&&(s=q,l(s.object)),Y=p(S,z,G,$),Y&&g(S,z,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(S,L,G,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,L,G){const z=G.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Y=$[L.id];Y===void 0&&(Y={},$[L.id]=Y);let q=Y[z];return q===void 0&&(q=d(c()),Y[z]=q),q}function d(S){const L=[],G=[],z=[];for(let $=0;$<t;$++)L[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,G,z){const $=s.attributes,Y=L.attributes;let q=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){const Se=$[V];let we=Y[V];if(we===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),Se===void 0||Se.attribute!==we||we&&Se.data!==we.data)return!0;q++}return s.attributesNum!==q||s.index!==z}function g(S,L,G,z){const $={},Y=L.attributes;let q=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){let Se=Y[V];Se===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor));const we={};we.attribute=Se,Se&&Se.data&&(we.data=Se.data),$[V]=we,q++}s.attributes=$,s.attributesNum=q,s.index=z}function x(){const S=s.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const G=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;G[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),$[S]!==L&&(n.vertexAttribDivisor(S,L),$[S]=L)}function A(){const S=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==S[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function T(S,L,G,z,$,Y,q){q===!0?n.vertexAttribIPointer(S,L,G,$,Y):n.vertexAttribPointer(S,L,G,z,$,Y)}function y(S,L,G,z){x();const $=z.attributes,Y=G.getAttributes(),q=L.defaultAttributeValues;for(const Q in Y){const V=Y[Q];if(V.location>=0){let fe=$[Q];if(fe===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const Se=fe.normalized,we=fe.itemSize,Xe=e.get(fe);if(Xe===void 0)continue;const tt=Xe.buffer,Z=Xe.type,le=Xe.bytesPerElement,De=Z===n.INT||Z===n.UNSIGNED_INT||fe.gpuType===Nl;if(fe.isInterleavedBufferAttribute){const ve=fe.data,Ie=ve.stride,qe=fe.offset;if(ve.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)h(V.location+Ne,ve.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ne=0;Ne<V.locationSize;Ne++)T(V.location+Ne,we/V.locationSize,Z,Se,Ie*le,(qe+we/V.locationSize*Ne)*le,De)}else{if(fe.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)h(V.location+ve,fe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ve=0;ve<V.locationSize;ve++)T(V.location+ve,we/V.locationSize,Z,Se,we*le,we/V.locationSize*ve*le,De)}}else if(q!==void 0){const Se=q[Q];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(V.location,Se);break;case 3:n.vertexAttrib3fv(V.location,Se);break;case 4:n.vertexAttrib4fv(V.location,Se);break;default:n.vertexAttrib1fv(V.location,Se)}}}}A()}function N(){U();for(const S in i){const L=i[S];for(const G in L){const z=L[G];for(const $ in z)u(z[$].object),delete z[$];delete L[G]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const G in L){const z=L[G];for(const $ in z)u(z[$].object),delete z[$];delete L[G]}delete i[S.id]}function P(S){for(const L in i){const G=i[L];if(G[S.id]===void 0)continue;const z=G[S.id];for(const $ in z)u(z[$].object),delete z[$];delete G[S.id]}}function U(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Dv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function c(l,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Iv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Xn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ri&&!U)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:N,maxSamples:D}}function Uv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ji,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const A=s?0:i,T=A*4;let y=h.clippingState||null;c.value=y,y=u(g,d,T,p);for(let N=0;N!==T;++N)y[N]=t[N];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const h=p+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,y=p;T!==x;++T,y+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Nv(n){let e=new WeakMap;function t(o,a){return a===Gc?o.mapping=ts:a===Vc&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gc||a===Vc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Gr=4,Eh=[.125,.215,.35,.446,.526,.582],tr=20,xc=new Zf,bh=new st;let Sc=null,yc=0,Mc=0,Ec=!1;const Qi=(1+Math.sqrt(5))/2,kr=1/Qi,Th=[new R(-Qi,kr,0),new R(Qi,kr,0),new R(-kr,0,Qi),new R(kr,0,Qi),new R(0,Qi,-kr),new R(0,Qi,kr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Fv=new R;class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Fv}=s;Sc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,yc,Mc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:co,format:Pn,colorSpace:is,depthBuffer:!1},r=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ov(s)),this._blurMaterial=Bv(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,i,r,s){const c=new nn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(bh),f.toneMapping=Ni,f.autoClear=!1;const g=new ms({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new Ht(new Hi,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(bh),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):T===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;Go(r,T*y,A>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Go(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Th[(r-s-1)%Th.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*tr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const h=[];let A=0;for(let P=0;P<tr;++P){const U=P/x,M=Math.exp(-U*U/2);h.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const y=this._sizeLods[r],N=3*y*(r>T-Gr?r-T+Gr:0),D=4*(this._cubeSize-y);Go(t,N,D,3*y,2*y),c.setRenderTarget(t),c.render(f,xc)}}function Ov(n){const e=[],t=[],i=[];let r=n;const s=n-Gr+1+Eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Gr?c=Eh[o-n+Gr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,A=new Float32Array(x*g*p),T=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let D=0;D<p;D++){const P=D%3*2/3-1,U=D>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,x*g*D),T.set(d,m*g*D);const S=[D,D,D,D,D,D];y.set(S,h*g*D)}const N=new vn;N.setAttribute("position",new Ln(A,x)),N.setAttribute("uv",new Ln(T,m)),N.setAttribute("faceIndex",new Ln(y,h)),e.push(N),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ah(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bv(n,e,t){const i=new Float32Array(tr),r=new R(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Rh(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ch(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function zv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gc||c===Vc,u=c===ts||c===ns;if(l||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new wh(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new wh(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hv(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let T=0,y=A.length;T<y;T+=3){const N=A[T+0],D=A[T+1],P=A[T+2];d.push(N,D,D,P,P,N)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const N=T+0,D=T+1,P=T+2;d.push(N,D,D,P,P,N)}}else return;const m=new(Cf(d)?Uf:If)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Gv(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let h=0;for(let A=0;A<g;A++)h+=p[A]*x[A];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Vv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wv(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let N=a.attributes.position.count*y,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*D*4*f),U=new Pf(P,N,D,f);U.type=ri,U.needsUpdate=!0;const M=y*4;for(let L=0;L<f;L++){const G=h[L],z=A[L],$=T[L],Y=N*D*4*L;for(let q=0;q<G.count;q++){const Q=q*M;g===!0&&(r.fromBufferAttribute(G,q),P[Y+Q+0]=r.x,P[Y+Q+1]=r.y,P[Y+Q+2]=r.z,P[Y+Q+3]=0),x===!0&&(r.fromBufferAttribute(z,q),P[Y+Q+4]=r.x,P[Y+Q+5]=r.y,P[Y+Q+6]=r.z,P[Y+Q+7]=0),m===!0&&(r.fromBufferAttribute($,q),P[Y+Q+8]=r.x,P[Y+Q+9]=r.y,P[Y+Q+10]=r.z,P[Y+Q+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new ae(N,D)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Xv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Jf=new Qt,Ph=new kf(1,1),jf=new Pf,Qf=new Dm,ed=new Of,Lh=[],Dh=[],Ih=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lh[r];if(s===void 0&&(s=new Float32Array(r),Lh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ta(n,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),Bt(t,i)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Uh.set(i),n.uniformMatrix3fv(this.addr,!1,Uh),Bt(t,i)}}function jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),Bt(t,i)}}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ph.compareFunction=Rf,s=Ph):s=Jf,t.setTexture2D(e||s,r)}function cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qf,r)}function lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ed,r)}function ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jf,r)}function hx(n){switch(n){case 5126:return qv;case 35664:return Yv;case 35665:return $v;case 35666:return Zv;case 35674:return Kv;case 35675:return Jv;case 35676:return jv;case 5124:case 35670:return Qv;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(n,e){n.uniform1fv(this.addr,e)}function dx(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function px(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function mx(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function gx(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _x(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vx(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xx(n,e){n.uniform1iv(this.addr,e)}function Sx(n,e){n.uniform2iv(this.addr,e)}function yx(n,e){n.uniform3iv(this.addr,e)}function Mx(n,e){n.uniform4iv(this.addr,e)}function Ex(n,e){n.uniform1uiv(this.addr,e)}function bx(n,e){n.uniform2uiv(this.addr,e)}function Tx(n,e){n.uniform3uiv(this.addr,e)}function wx(n,e){n.uniform4uiv(this.addr,e)}function Ax(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jf,s[o])}function Rx(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qf,s[o])}function Cx(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ed,s[o])}function Px(n,e,t){const i=this.cache,r=e.length,s=Ta(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jf,s[o])}function Lx(n){switch(n){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return Sx;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return Ex;case 36294:return bx;case 36295:return Tx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hx(t.type)}}class Ix{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function Nx(n,e,t){const i=n.name,r=i.length;for(bc.lastIndex=0;;){const s=bc.exec(i),o=bc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Fh(t,l===void 0?new Dx(a,n,e):new Ix(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Ux(a),Fh(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fx=37297;let Ox=0;function Bx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bh=new $e;function zx(n){ut._getMatrix(Bh,ut.workingColorSpace,n);const e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bx(n.getShaderSource(e),o)}else return r}function kx(n,e){const t=zx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hx(n,e){let t;switch(e){case Wp:t="Linear";break;case Xp:t="Reinhard";break;case qp:t="Cineon";break;case _f:t="ACESFilmic";break;case $p:t="AgX";break;case Zp:t="Neutral";break;case Yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new R;function Gx(){ut.getLuminanceCoefficients(Vo);const n=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Wx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ls(n){return n!==""}function kh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(qx,$x)}const Yx=new Map;function $x(n,e){let t=Ze[e];if(t===void 0){const i=Yx.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(n){return n.replace(Zx,Kx)}function Kx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Jx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function jx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ns&&(e="ENVMAP_MODE_REFRACTION"),e}function eS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gf:e="ENVMAP_BLENDING_MULTIPLY";break;case Gp:e="ENVMAP_BLENDING_MIX";break;case Vp:e="ENVMAP_BLENDING_ADD";break}return e}function tS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Jx(t),l=jx(t),u=Qx(t),f=eS(t),d=tS(t),p=Vx(t),g=Wx(s),x=r.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),h.length>0&&(h+=`
`)):(m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),h=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=El(o),o=kh(o,t),o=Hh(o,t),a=El(a),a=kh(a,t),a=Hh(a,t),o=Gh(o),a=Gh(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+m+o,y=A+h+a,N=Oh(r,r.VERTEX_SHADER,T),D=Oh(r,r.FRAGMENT_SHADER,y);r.attachShader(x,N),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(L){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(N).trim(),$=r.getShaderInfoLog(D).trim();let Y=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,N,D);else{const Q=zh(r,N,"vertex"),V=zh(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Q+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(q=!1);q&&(L.diagnostics={runnable:Y,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:h}})}r.deleteShader(N),r.deleteShader(D),U=new Qo(r,x),M=Xx(r,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Fx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ox++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=D,this}let iS=0;class rS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sS(e),t.set(e,i)),i}}class sS{constructor(e){this.id=iS++,this.code=e,this.usedTimes=0}}function oS(n,e,t,i,r,s,o){const a=new Wl,c=new rS,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,G,z){const $=G.fog,Y=z.geometry,q=M.isMeshStandardMaterial?G.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),V=Q&&Q.mapping===xa?Q.image.height:null,fe=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,we=Se!==void 0?Se.length:0;let Xe=0;Y.morphAttributes.position!==void 0&&(Xe=1),Y.morphAttributes.normal!==void 0&&(Xe=2),Y.morphAttributes.color!==void 0&&(Xe=3);let tt,Z,le,De;if(fe){const ht=kn[fe];tt=ht.vertexShader,Z=ht.fragmentShader}else tt=M.vertexShader,Z=M.fragmentShader,c.update(M),le=c.getVertexShaderID(M),De=c.getFragmentShaderID(M);const ve=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),qe=z.isInstancedMesh===!0,Ne=z.isBatchedMesh===!0,St=!!M.map,at=!!M.matcap,Ye=!!Q,E=!!M.aoMap,ue=!!M.lightMap,ne=!!M.bumpMap,he=!!M.normalMap,K=!!M.displacementMap,ye=!!M.emissiveMap,re=!!M.metalnessMap,Me=!!M.roughnessMap,Ve=M.anisotropy>0,w=M.clearcoat>0,_=M.dispersion>0,B=M.iridescence>0,W=M.sheen>0,ee=M.transmission>0,X=Ve&&!!M.anisotropyMap,Pe=w&&!!M.clearcoatMap,de=w&&!!M.clearcoatNormalMap,Ae=w&&!!M.clearcoatRoughnessMap,Le=B&&!!M.iridescenceMap,te=B&&!!M.iridescenceThicknessMap,Ee=W&&!!M.sheenColorMap,Be=W&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,pe=!!M.specularColorMap,Ge=!!M.specularIntensityMap,I=ee&&!!M.transmissionMap,ge=ee&&!!M.thicknessMap,ie=!!M.gradientMap,Te=!!M.alphaMap,se=M.alphaTest>0,j=!!M.alphaHash,Re=!!M.extensions;let We=Ni;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(We=n.toneMapping);const yt={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:Z,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&z._colorsTexture!==null,instancing:qe,instancingColor:qe&&z.instanceColor!==null,instancingMorph:qe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:is,alphaToCoverage:!!M.alphaToCoverage,map:St,matcap:at,envMap:Ye,envMapMode:Ye&&Q.mapping,envMapCubeUVHeight:V,aoMap:E,lightMap:ue,bumpMap:ne,normalMap:he,displacementMap:d&&K,emissiveMap:ye,normalMapObjectSpace:he&&M.normalMapType===Qp,normalMapTangentSpace:he&&M.normalMapType===Af,metalnessMap:re,roughnessMap:Me,anisotropy:Ve,anisotropyMap:X,clearcoat:w,clearcoatMap:Pe,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:B,iridescenceMap:Le,iridescenceThicknessMap:te,sheen:W,sheenColorMap:Ee,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:pe,specularIntensityMap:Ge,transmission:ee,transmissionMap:I,thicknessMap:ge,gradientMap:ie,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:se,alphaHash:j,combine:M.combine,mapUv:St&&x(M.map.channel),aoMapUv:E&&x(M.aoMap.channel),lightMapUv:ue&&x(M.lightMap.channel),bumpMapUv:ne&&x(M.bumpMap.channel),normalMapUv:he&&x(M.normalMap.channel),displacementMapUv:K&&x(M.displacementMap.channel),emissiveMapUv:ye&&x(M.emissiveMap.channel),metalnessMapUv:re&&x(M.metalnessMap.channel),roughnessMapUv:Me&&x(M.roughnessMap.channel),anisotropyMapUv:X&&x(M.anisotropyMap.channel),clearcoatMapUv:Pe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(M.sheenRoughnessMap.channel),specularMapUv:Oe&&x(M.specularMap.channel),specularColorMapUv:pe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ge&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:ge&&x(M.thicknessMap.channel),alphaMapUv:Te&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(he||Ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(St||Te),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ie,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(A(S,M),T(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function A(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function T(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let L;if(S){const G=kn[S];L=Xm.clone(G.uniforms)}else L=M.uniforms;return L}function N(M,S){let L;for(let G=0,z=u.length;G<z;G++){const $=u[G];if($.cacheKey===S){L=$,++L.usedTimes;break}}return L===void 0&&(L=new nS(n,S,M,s),u.push(L)),L}function D(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function P(M){c.remove(M)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:N,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:U}}function aS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function cS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||cS),i.length>1&&i.sort(d||Wh),r.length>1&&r.sort(d||Wh)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function lS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xh,n.set(i,[o])):r>=s.length?(o=new Xh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new st};break;case"SpotLight":t={position:new R,direction:new R,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function hS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fS=0;function dS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pS(n){const e=new uS,t=hS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const r=new R,s=new xt,o=new xt;function a(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,A=0,T=0,y=0,N=0,D=0,P=0;l.sort(dS);for(let M=0,S=l.length;M<S;M++){const L=l[M],G=L.color,z=L.intensity,$=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=G.r*z,f+=G.g*z,d+=G.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],z);P++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,V=t.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,A++}i.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(G).multiplyScalar(z),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[x]=q;const Q=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,Q.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[x]=Q.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=Y,y++}x++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(G).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Q=L.shadow,V=t.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[h]=q,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==y||U.numSpotMaps!==N||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+N-D,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=y,U.numSpotMaps=N,U.numLightProbes=P,i.version=fS++)}function c(l,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const T=l[h];if(T.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function qh(n){const e=new pS(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function mS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qh(n),e.set(r,[a])):s>=o.length?(a=new qh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`;function vS(n,e,t){let i=new ql;const r=new ae,s=new ae,o=new gt,a=new O0({depthPacking:jp}),c=new B0,l={},u=t.maxTextureSize,f={[Oi]:rn,[rn]:Oi,[An]:An},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf;let h=this.type;this.render=function(D,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Ui),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=h!==ii&&this.type===ii,$=h===ii&&this.type!==ii;for(let Y=0,q=D.length;Y<q;Y++){const Q=D[Y],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const fe=V.getFrameExtents();if(r.multiply(fe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,V.mapSize.y=s.y)),V.map===null||z===!0||$===!0){const we=this.type!==ii?{minFilter:Gt,magFilter:Gt}:{};V.map!==null&&V.map.dispose(),V.map=new hr(r.x,r.y,we),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Se=V.getViewportCount();for(let we=0;we<Se;we++){const Xe=V.getViewport(we);o.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),G.viewport(o),V.updateMatrices(Q,we),i=V.getFrustum(),y(P,U,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ii&&A(V,U),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function A(D,P){const U=e.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new hr(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,x,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,U,p,x,null)}function T(D,P,U,M){let S=null;const L=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)S=L;else if(S=U.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const G=S.uuid,z=P.uuid;let $=l[G];$===void 0&&($={},l[G]=$);let Y=$[z];Y===void 0&&(Y=S.clone(),$[z]=Y,P.addEventListener("dispose",N)),S=Y}if(S.visible=P.visible,S.wireframe=P.wireframe,M===ii?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:f[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=U}return S}function y(D,P,U,M,S){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===ii)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const z=e.update(D),$=D.material;if(Array.isArray($)){const Y=z.groups;for(let q=0,Q=Y.length;q<Q;q++){const V=Y[q],fe=$[V.materialIndex];if(fe&&fe.visible){const Se=T(D,fe,M,S);D.onBeforeShadow(n,D,P,U,z,Se,V),n.renderBufferDirect(U,null,z,Se,D,V),D.onAfterShadow(n,D,P,U,z,Se,V)}}}else if($.visible){const Y=T(D,$,M,S);D.onBeforeShadow(n,D,P,U,z,Y,null),n.renderBufferDirect(U,null,z,Y,D,null),D.onAfterShadow(n,D,P,U,z,Y,null)}}const G=D.children;for(let z=0,$=G.length;z<$;z++)y(G[z],P,U,M,S)}function N(D){D.target.removeEventListener("dispose",N);for(const U in l){const M=l[U],S=D.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const xS={[Nc]:Fc,[Oc]:kc,[Bc]:Hc,[es]:zc,[Fc]:Nc,[kc]:Oc,[Hc]:Bc,[zc]:es};function SS(n,e){function t(){let I=!1;const ge=new gt;let ie=null;const Te=new gt(0,0,0,0);return{setMask:function(se){ie!==se&&!I&&(n.colorMask(se,se,se,se),ie=se)},setLocked:function(se){I=se},setClear:function(se,j,Re,We,yt){yt===!0&&(se*=We,j*=We,Re*=We),ge.set(se,j,Re,We),Te.equals(ge)===!1&&(n.clearColor(se,j,Re,We),Te.copy(ge))},reset:function(){I=!1,ie=null,Te.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,ie=null,Te=null,se=null;return{setReversed:function(j){if(ge!==j){const Re=e.get("EXT_clip_control");j?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ge=j;const We=se;se=null,this.setClear(We)}},getReversed:function(){return ge},setTest:function(j){j?ve(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(j){ie!==j&&!I&&(n.depthMask(j),ie=j)},setFunc:function(j){if(ge&&(j=xS[j]),Te!==j){switch(j){case Nc:n.depthFunc(n.NEVER);break;case Fc:n.depthFunc(n.ALWAYS);break;case Oc:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case Bc:n.depthFunc(n.EQUAL);break;case zc:n.depthFunc(n.GEQUAL);break;case kc:n.depthFunc(n.GREATER);break;case Hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=j}},setLocked:function(j){I=j},setClear:function(j){se!==j&&(ge&&(j=1-j),n.clearDepth(j),se=j)},reset:function(){I=!1,ie=null,Te=null,se=null,ge=!1}}}function r(){let I=!1,ge=null,ie=null,Te=null,se=null,j=null,Re=null,We=null,yt=null;return{setTest:function(ht){I||(ht?ve(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!I&&(n.stencilMask(ht),ge=ht)},setFunc:function(ht,xn,Kn){(ie!==ht||Te!==xn||se!==Kn)&&(n.stencilFunc(ht,xn,Kn),ie=ht,Te=xn,se=Kn)},setOp:function(ht,xn,Kn){(j!==ht||Re!==xn||We!==Kn)&&(n.stencilOp(ht,xn,Kn),j=ht,Re=xn,We=Kn)},setLocked:function(ht){I=ht},setClear:function(ht){yt!==ht&&(n.clearStencil(ht),yt=ht)},reset:function(){I=!1,ge=null,ie=null,Te=null,se=null,j=null,Re=null,We=null,yt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,A=null,T=null,y=null,N=null,D=null,P=new st(0,0,0),U=0,M=!1,S=null,L=null,G=null,z=null,$=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Q>=2);let fe=null,Se={};const we=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),tt=new gt().fromArray(we),Z=new gt().fromArray(Xe);function le(I,ge,ie,Te){const se=new Uint8Array(4),j=n.createTexture();n.bindTexture(I,j),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<ie;Re++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ge+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return j}const De={};De[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(es),ne(!1),he(ku),ve(n.CULL_FACE),E(Ui);function ve(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ie(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function qe(I,ge){return f[I]!==ge?(n.bindFramebuffer(I,ge),f[I]=ge,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ne(I,ge){let ie=p,Te=!1;if(I){ie=d.get(ge),ie===void 0&&(ie=[],d.set(ge,ie));const se=I.textures;if(ie.length!==se.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let j=0,Re=se.length;j<Re;j++)ie[j]=n.COLOR_ATTACHMENT0+j;ie.length=se.length,Te=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Te=!0);Te&&n.drawBuffers(ie)}function St(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const at={[er]:n.FUNC_ADD,[Tp]:n.FUNC_SUBTRACT,[wp]:n.FUNC_REVERSE_SUBTRACT};at[Ap]=n.MIN,at[Rp]=n.MAX;const Ye={[Cp]:n.ZERO,[Pp]:n.ONE,[Lp]:n.SRC_COLOR,[Ic]:n.SRC_ALPHA,[Op]:n.SRC_ALPHA_SATURATE,[Np]:n.DST_COLOR,[Ip]:n.DST_ALPHA,[Dp]:n.ONE_MINUS_SRC_COLOR,[Uc]:n.ONE_MINUS_SRC_ALPHA,[Fp]:n.ONE_MINUS_DST_COLOR,[Up]:n.ONE_MINUS_DST_ALPHA,[Bp]:n.CONSTANT_COLOR,[zp]:n.ONE_MINUS_CONSTANT_COLOR,[kp]:n.CONSTANT_ALPHA,[Hp]:n.ONE_MINUS_CONSTANT_ALPHA};function E(I,ge,ie,Te,se,j,Re,We,yt,ht){if(I===Ui){x===!0&&(Ie(n.BLEND),x=!1);return}if(x===!1&&(ve(n.BLEND),x=!0),I!==bp){if(I!==m||ht!==M){if((h!==er||y!==er)&&(n.blendEquation(n.FUNC_ADD),h=er,y=er),ht)switch(I){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hu:n.blendFunc(n.ONE,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,T=null,N=null,D=null,P.set(0,0,0),U=0,m=I,M=ht}return}se=se||ge,j=j||ie,Re=Re||Te,(ge!==h||se!==y)&&(n.blendEquationSeparate(at[ge],at[se]),h=ge,y=se),(ie!==A||Te!==T||j!==N||Re!==D)&&(n.blendFuncSeparate(Ye[ie],Ye[Te],Ye[j],Ye[Re]),A=ie,T=Te,N=j,D=Re),(We.equals(P)===!1||yt!==U)&&(n.blendColor(We.r,We.g,We.b,yt),P.copy(We),U=yt),m=I,M=!1}function ue(I,ge){I.side===An?Ie(n.CULL_FACE):ve(n.CULL_FACE);let ie=I.side===rn;ge&&(ie=!ie),ne(ie),I.blending===Wr&&I.transparent===!1?E(Ui):E(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Te=I.stencilWrite;a.setTest(Te),Te&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function he(I){I!==Mp?(ve(n.CULL_FACE),I!==L&&(I===ku?n.cullFace(n.BACK):I===Ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),L=I}function K(I){I!==G&&(q&&n.lineWidth(I),G=I)}function ye(I,ge,ie){I?(ve(n.POLYGON_OFFSET_FILL),(z!==ge||$!==ie)&&(n.polygonOffset(ge,ie),z=ge,$=ie)):Ie(n.POLYGON_OFFSET_FILL)}function re(I){I?ve(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Me(I){I===void 0&&(I=n.TEXTURE0+Y-1),fe!==I&&(n.activeTexture(I),fe=I)}function Ve(I,ge,ie){ie===void 0&&(fe===null?ie=n.TEXTURE0+Y-1:ie=fe);let Te=Se[ie];Te===void 0&&(Te={type:void 0,texture:void 0},Se[ie]=Te),(Te.type!==I||Te.texture!==ge)&&(fe!==ie&&(n.activeTexture(ie),fe=ie),n.bindTexture(I,ge||De[I]),Te.type=I,Te.texture=ge)}function w(){const I=Se[fe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){tt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function Be(I){Z.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Oe(I,ge){let ie=l.get(ge);ie===void 0&&(ie=new WeakMap,l.set(ge,ie));let Te=ie.get(I);Te===void 0&&(Te=n.getUniformBlockIndex(ge,I.name),ie.set(I,Te))}function pe(I,ge){const Te=l.get(ge).get(I);c.get(ge)!==Te&&(n.uniformBlockBinding(ge,Te,I.__bindingPointIndex),c.set(ge,Te))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,Se={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,A=null,T=null,y=null,N=null,D=null,P=new st(0,0,0),U=0,M=!1,S=null,L=null,G=null,z=null,$=null,tt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Ie,bindFramebuffer:qe,drawBuffers:Ne,useProgram:St,setBlending:E,setMaterial:ue,setFlipSided:ne,setCullFace:he,setLineWidth:K,setPolygonOffset:ye,setScissorTest:re,activeTexture:Me,bindTexture:Ve,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:Le,texImage3D:te,updateUBOMapping:Oe,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:ee,compressedTexSubImage2D:X,compressedTexSubImage3D:Pe,scissor:Ee,viewport:Be,reset:Ge}}function yS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):ia("canvas")}function x(w,_,B){let W=1;const ee=Ve(w);if((ee.width>B||ee.height>B)&&(W=B/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(W*ee.width),Pe=Math.floor(W*ee.height);f===void 0&&(f=g(X,Pe));const de=_?g(X,Pe):f;return de.width=X,de.height=Pe,de.getContext("2d").drawImage(w,0,0,X,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Pe+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,_,B,W,ee=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=_;if(_===n.RED&&(B===n.FLOAT&&(X=n.R32F),B===n.HALF_FLOAT&&(X=n.R16F),B===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.R8UI),B===n.UNSIGNED_SHORT&&(X=n.R16UI),B===n.UNSIGNED_INT&&(X=n.R32UI),B===n.BYTE&&(X=n.R8I),B===n.SHORT&&(X=n.R16I),B===n.INT&&(X=n.R32I)),_===n.RG&&(B===n.FLOAT&&(X=n.RG32F),B===n.HALF_FLOAT&&(X=n.RG16F),B===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RG8UI),B===n.UNSIGNED_SHORT&&(X=n.RG16UI),B===n.UNSIGNED_INT&&(X=n.RG32UI),B===n.BYTE&&(X=n.RG8I),B===n.SHORT&&(X=n.RG16I),B===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGB8UI),B===n.UNSIGNED_SHORT&&(X=n.RGB16UI),B===n.UNSIGNED_INT&&(X=n.RGB32UI),B===n.BYTE&&(X=n.RGB8I),B===n.SHORT&&(X=n.RGB16I),B===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),B===n.UNSIGNED_INT&&(X=n.RGBA32UI),B===n.BYTE&&(X=n.RGBA8I),B===n.SHORT&&(X=n.RGBA16I),B===n.INT&&(X=n.RGBA32I)),_===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),_===n.RGBA){const Pe=ee?ta:ut.getTransfer(W);B===n.FLOAT&&(X=n.RGBA32F),B===n.HALF_FLOAT&&(X=n.RGBA16F),B===n.UNSIGNED_BYTE&&(X=Pe===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(w,_){let B;return w?_===null||_===ur||_===Xs?B=n.DEPTH24_STENCIL8:_===ri?B=n.DEPTH32F_STENCIL8:_===Ws&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ur||_===Xs?B=n.DEPTH_COMPONENT24:_===ri?B=n.DEPTH_COMPONENT32F:_===Ws&&(B=n.DEPTH_COMPONENT16),B}function N(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Vn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function D(w){const _=w.target;_.removeEventListener("dispose",D),U(_),_.isVideoTexture&&u.delete(_)}function P(w){const _=w.target;_.removeEventListener("dispose",P),S(_)}function U(w){const _=i.get(w);if(_.__webglInit===void 0)return;const B=w.source,W=d.get(B);if(W){const ee=W[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(w),Object.keys(W).length===0&&d.delete(B)}i.remove(w)}function M(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const B=w.source,W=d.get(B);delete W[_.__cacheKey],o.memory.textures--}function S(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let ee=0;ee<_.__webglFramebuffer[W].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[W][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=w.textures;for(let W=0,ee=B.length;W<ee;W++){const X=i.get(B[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(B[W])}i.remove(w)}let L=0;function G(){L=0}function z(){const w=L;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function $(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Y(w,_){const B=i.get(w);if(w.isVideoTexture&&re(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(B,w,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function q(w,_){const B=i.get(w);if(w.version>0&&B.__version!==w.version){De(B,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function Q(w,_){const B=i.get(w);if(w.version>0&&B.__version!==w.version){De(B,w,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function V(w,_){const B=i.get(w);if(w.version>0&&B.__version!==w.version){ve(B,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}const fe={[Wc]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[Xc]:n.MIRRORED_REPEAT},Se={[Gt]:n.NEAREST,[Kp]:n.NEAREST_MIPMAP_NEAREST,[Gn]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},we={[em]:n.NEVER,[om]:n.ALWAYS,[tm]:n.LESS,[Rf]:n.LEQUAL,[nm]:n.EQUAL,[sm]:n.GEQUAL,[im]:n.GREATER,[rm]:n.NOTEQUAL};function Xe(w,_){if(_.type===ri&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Vn||_.magFilter===Wa||_.magFilter===Gn||_.magFilter===or||_.minFilter===Vn||_.minFilter===Wa||_.minFilter===Gn||_.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,fe[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,fe[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,fe[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Se[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Gn&&_.minFilter!==or||_.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function tt(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",D));const W=_.source;let ee=d.get(W);ee===void 0&&(ee={},d.set(W,ee));const X=$(_);if(X!==w.__cacheKey){ee[X]===void 0&&(ee[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[X].usedTimes++;const Pe=ee[w.__cacheKey];Pe!==void 0&&(ee[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(_)),w.__cacheKey=X,w.__webglTexture=ee[X].texture}return B}function Z(w,_,B){return Math.floor(Math.floor(w/B)/_)}function le(w,_,B,W){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,W,_.data);else{X.sort((te,Ee)=>te.start-Ee.start);let Pe=0;for(let te=1;te<X.length;te++){const Ee=X[Pe],Be=X[te],Oe=Ee.start+Ee.count,pe=Z(Be.start,_.width,4),Ge=Z(Ee.start,_.width,4);Be.start<=Oe+1&&pe===Ge&&Z(Be.start+Be.count-1,_.width,4)===pe?Ee.count=Math.max(Ee.count,Be.start+Be.count-Ee.start):(++Pe,X[Pe]=Be)}X.length=Pe+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let te=0,Ee=X.length;te<Ee;te++){const Be=X[te],Oe=Math.floor(Be.start/4),pe=Math.ceil(Be.count/4),Ge=Oe%_.width,I=Math.floor(Oe/_.width),ge=pe,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ge,I,ge,ie,B,W,_.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function De(w,_,B){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);const ee=tt(w,_),X=_.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+B);const Pe=i.get(X);if(X.version!==Pe.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const de=ut.getPrimaries(ut.workingColorSpace),Ae=_.colorSpace===Ai?null:ut.getPrimaries(_.colorSpace),Le=_.colorSpace===Ai||de===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let te=x(_.image,!1,r.maxTextureSize);te=Me(_,te);const Ee=s.convert(_.format,_.colorSpace),Be=s.convert(_.type);let Oe=T(_.internalFormat,Ee,Be,_.colorSpace,_.isVideoTexture);Xe(W,_);let pe;const Ge=_.mipmaps,I=_.isVideoTexture!==!0,ge=Pe.__version===void 0||ee===!0,ie=X.dataReady,Te=N(_,te);if(_.isDepthTexture)Oe=y(_.format===Ys,_.type),ge&&(I?t.texStorage2D(n.TEXTURE_2D,1,Oe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Oe,te.width,te.height,0,Ee,Be,null));else if(_.isDataTexture)if(Ge.length>0){I&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,Oe,Ge[0].width,Ge[0].height);for(let se=0,j=Ge.length;se<j;se++)pe=Ge[se],I?ie&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,Ee,Be,pe.data):t.texImage2D(n.TEXTURE_2D,se,Oe,pe.width,pe.height,0,Ee,Be,pe.data);_.generateMipmaps=!1}else I?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,Oe,te.width,te.height),ie&&le(_,te,Ee,Be)):t.texImage2D(n.TEXTURE_2D,0,Oe,te.width,te.height,0,Ee,Be,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Oe,Ge[0].width,Ge[0].height,te.depth);for(let se=0,j=Ge.length;se<j;se++)if(pe=Ge[se],_.format!==Pn)if(Ee!==null)if(I){if(ie)if(_.layerUpdates.size>0){const Re=Mh(pe.width,pe.height,_.format,_.type);for(const We of _.layerUpdates){const yt=pe.data.subarray(We*Re/pe.data.BYTES_PER_ELEMENT,(We+1)*Re/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,We,pe.width,pe.height,1,Ee,yt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,te.depth,Ee,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Oe,pe.width,pe.height,te.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,te.depth,Ee,Be,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Oe,pe.width,pe.height,te.depth,0,Ee,Be,pe.data)}else{I&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,Oe,Ge[0].width,Ge[0].height);for(let se=0,j=Ge.length;se<j;se++)pe=Ge[se],_.format!==Pn?Ee!==null?I?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Oe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,Ee,Be,pe.data):t.texImage2D(n.TEXTURE_2D,se,Oe,pe.width,pe.height,0,Ee,Be,pe.data)}else if(_.isDataArrayTexture)if(I){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Oe,te.width,te.height,te.depth),ie)if(_.layerUpdates.size>0){const se=Mh(te.width,te.height,_.format,_.type);for(const j of _.layerUpdates){const Re=te.data.subarray(j*se/te.data.BYTES_PER_ELEMENT,(j+1)*se/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,Ee,Be,Re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ee,Be,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,te.width,te.height,te.depth,0,Ee,Be,te.data);else if(_.isData3DTexture)I?(ge&&t.texStorage3D(n.TEXTURE_3D,Te,Oe,te.width,te.height,te.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ee,Be,te.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,te.width,te.height,te.depth,0,Ee,Be,te.data);else if(_.isFramebufferTexture){if(ge)if(I)t.texStorage2D(n.TEXTURE_2D,Te,Oe,te.width,te.height);else{let se=te.width,j=te.height;for(let Re=0;Re<Te;Re++)t.texImage2D(n.TEXTURE_2D,Re,Oe,se,j,0,Ee,Be,null),se>>=1,j>>=1}}else if(Ge.length>0){if(I&&ge){const se=Ve(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Te,Oe,se.width,se.height)}for(let se=0,j=Ge.length;se<j;se++)pe=Ge[se],I?ie&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ee,Be,pe):t.texImage2D(n.TEXTURE_2D,se,Oe,Ee,Be,pe);_.generateMipmaps=!1}else if(I){if(ge){const se=Ve(te);t.texStorage2D(n.TEXTURE_2D,Te,Oe,se.width,se.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Be,te)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Ee,Be,te);m(_)&&h(W),Pe.__version=X.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ve(w,_,B){if(_.image.length!==6)return;const W=tt(w,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const X=i.get(ee);if(ee.version!==X.__version||W===!0){t.activeTexture(n.TEXTURE0+B);const Pe=ut.getPrimaries(ut.workingColorSpace),de=_.colorSpace===Ai?null:ut.getPrimaries(_.colorSpace),Ae=_.colorSpace===Ai||Pe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Le=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let j=0;j<6;j++)!Le&&!te?Ee[j]=x(_.image[j],!0,r.maxCubemapSize):Ee[j]=te?_.image[j].image:_.image[j],Ee[j]=Me(_,Ee[j]);const Be=Ee[0],Oe=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Ge=T(_.internalFormat,Oe,pe,_.colorSpace),I=_.isVideoTexture!==!0,ge=X.__version===void 0||W===!0,ie=ee.dataReady;let Te=N(_,Be);Xe(n.TEXTURE_CUBE_MAP,_);let se;if(Le){I&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ge,Be.width,Be.height);for(let j=0;j<6;j++){se=Ee[j].mipmaps;for(let Re=0;Re<se.length;Re++){const We=se[Re];_.format!==Pn?Oe!==null?I?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re,0,0,We.width,We.height,Oe,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re,Ge,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re,0,0,We.width,We.height,Oe,pe,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re,Ge,We.width,We.height,0,Oe,pe,We.data)}}}else{if(se=_.mipmaps,I&&ge){se.length>0&&Te++;const j=Ve(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(te){I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee[j].width,Ee[j].height,Oe,pe,Ee[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Ee[j].width,Ee[j].height,0,Oe,pe,Ee[j].data);for(let Re=0;Re<se.length;Re++){const yt=se[Re].image[j].image;I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re+1,0,0,yt.width,yt.height,Oe,pe,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re+1,Ge,yt.width,yt.height,0,Oe,pe,yt.data)}}else{I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Oe,pe,Ee[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Oe,pe,Ee[j]);for(let Re=0;Re<se.length;Re++){const We=se[Re];I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re+1,0,0,Oe,pe,We.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re+1,Ge,Oe,pe,We.image[j])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),X.__version=ee.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ie(w,_,B,W,ee,X){const Pe=s.convert(B.format,B.colorSpace),de=s.convert(B.type),Ae=T(B.internalFormat,Pe,de,B.colorSpace),Le=i.get(_),te=i.get(B);if(te.__renderTarget=_,!Le.__hasExternalTextures){const Ee=Math.max(1,_.width>>X),Be=Math.max(1,_.height>>X);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,X,Ae,Ee,Be,_.depth,0,Pe,de,null):t.texImage2D(ee,X,Ae,Ee,Be,0,Pe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ee,te.__webglTexture,0,K(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ee,te.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(w,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const W=_.depthTexture,ee=W&&W.isDepthTexture?W.type:null,X=y(_.stencilBuffer,ee),Pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=K(_);ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,X,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,w)}else{const W=_.textures;for(let ee=0;ee<W.length;ee++){const X=W[ee],Pe=s.convert(X.format,X.colorSpace),de=s.convert(X.type),Ae=T(X.internalFormat,Pe,de,X.colorSpace),Le=K(_);B&&ye(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ae,_.width,_.height):ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const ee=W.__webglTexture,X=K(_);if(_.depthTexture.format===qs)ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Ys)ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function St(w){const _=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?Ne(_.__webglFramebuffer[0],w):Ne(_.__webglFramebuffer,w)}else if(B){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),qe(_.__webglDepthbuffer[W],w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),qe(_.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(w,_,B){const W=i.get(w);_!==void 0&&Ie(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&St(w)}function Ye(w){const _=w.texture,B=i.get(w),W=i.get(_);w.addEventListener("dispose",P);const ee=w.textures,X=w.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,o.memory.textures++),X){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)B.__webglFramebuffer[de][Ae]=n.createFramebuffer()}else B.__webglFramebuffer[de]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)B.__webglFramebuffer[de]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let de=0,Ae=ee.length;de<Ae;de++){const Le=i.get(ee[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ye(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const Ae=ee[de];B.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Le=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),Ee=T(Ae.internalFormat,Le,te,Ae.colorSpace,w.isXRRenderTarget===!0),Be=K(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,B.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)Ie(B.__webglFramebuffer[de][Ae],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae);else Ie(B.__webglFramebuffer[de],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let de=0,Ae=ee.length;de<Ae;de++){const Le=ee[de],te=i.get(Le);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Xe(n.TEXTURE_2D,Le),Ie(B.__webglFramebuffer,w,Le,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Le)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,W.__webglTexture),Xe(de,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)Ie(B.__webglFramebuffer[Ae],w,_,n.COLOR_ATTACHMENT0,de,Ae);else Ie(B.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,de,0);m(_)&&h(de),t.unbindTexture()}w.depthBuffer&&St(w)}function E(w){const _=w.textures;for(let B=0,W=_.length;B<W;B++){const ee=_[B];if(m(ee)){const X=A(w),Pe=i.get(ee).__webglTexture;t.bindTexture(X,Pe),h(X),t.unbindTexture()}}}const ue=[],ne=[];function he(w){if(w.samples>0){if(ye(w)===!1){const _=w.textures,B=w.width,W=w.height;let ee=n.COLOR_BUFFER_BIT;const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(w),de=_.length>1;if(de)for(let Le=0;Le<_.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Le=0;Le<_.length;Le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const te=i.get(_[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,B,W,0,0,B,W,ee,n.NEAREST),c===!0&&(ue.length=0,ne.length=0,ue.push(n.COLOR_ATTACHMENT0+Le),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ue.push(X),ne.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<_.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const te=i.get(_[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function K(w){return Math.min(r.maxSamples,w.samples)}function ye(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function re(w){const _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Me(w,_){const B=w.colorSpace,W=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==is&&B!==Ai&&(ut.getTransfer(B)===mt?(W!==Pn||ee!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Ve(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=E,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ye}function MS(n,e){function t(i,r=Ai){let s;const o=ut.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xf)return n.BYTE;if(i===Sf)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===Nl)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===Mf)return n.ALPHA;if(i===Ef)return n.RGB;if(i===Pn)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===bf)return n.RED;if(i===Bl)return n.RED_INTEGER;if(i===Tf)return n.RG;if(i===zl)return n.RG_INTEGER;if(i===kl)return n.RGBA_INTEGER;if(i===$o||i===Zo||i===Ko||i===Jo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qc||i===Yc||i===$c||i===Zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Jc||i===jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kc||i===Jc)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qc||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll||i===ul||i===hl||i===fl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===el)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ol)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===al)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===dl||i===pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jo)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wf||i===ml||i===gl||i===_l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bS=`
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

}`;class TS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bi({vertexShader:ES,fragmentShader:bS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wS extends hs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const x=new TS,m=t.getContextAttributes();let h=null,A=null;const T=[],y=[],N=new ae;let D=null;const P=new nn;P.viewport=new gt;const U=new nn;U.viewport=new gt;const M=[P,U],S=new q0;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=T[Z];return le===void 0&&(le=new hc,T[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=T[Z];return le===void 0&&(le=new hc,T[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=T[Z];return le===void 0&&(le=new hc,T[Z]=le),le.getHandSpace()};function z(Z){const le=y.indexOf(Z.inputSource);if(le===-1)return;const De=T[le];De!==void 0&&(De.update(Z.inputSource,Z.frame,l||o),De.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<T.length;Z++){const le=y[Z];le!==null&&(y[Z]=null,T[Z].disconnect(le))}L=null,G=null,x.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,A=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ve=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=m.stencil?Ys:qs,ve=m.stencil?Xs:ur);const qe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new hr(d.textureWidth,d.textureHeight,{format:Pn,type:Xn,depthTexture:new kf(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const De={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,De),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new hr(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(Z){for(let le=0;le<Z.removed.length;le++){const De=Z.removed[le],ve=y.indexOf(De);ve>=0&&(y[ve]=null,T[ve].disconnect(De))}for(let le=0;le<Z.added.length;le++){const De=Z.added[le];let ve=y.indexOf(De);if(ve===-1){for(let qe=0;qe<T.length;qe++)if(qe>=y.length){y.push(De),ve=qe;break}else if(y[qe]===null){y[qe]=De,ve=qe;break}if(ve===-1)break}const Ie=T[ve];Ie&&Ie.connect(De)}}const q=new R,Q=new R;function V(Z,le,De){q.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(De.matrixWorld);const ve=q.distanceTo(Q),Ie=le.projectionMatrix.elements,qe=De.projectionMatrix.elements,Ne=Ie[14]/(Ie[10]-1),St=Ie[14]/(Ie[10]+1),at=(Ie[9]+1)/Ie[5],Ye=(Ie[9]-1)/Ie[5],E=(Ie[8]-1)/Ie[0],ue=(qe[8]+1)/qe[0],ne=Ne*E,he=Ne*ue,K=ve/(-E+ue),ye=K*-E;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ye),Z.translateZ(K),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const re=Ne+K,Me=St+K,Ve=ne-ye,w=he+(ve-ye),_=at*St/Me*re,B=Ye*St/Me*re;Z.projectionMatrix.makePerspective(Ve,w,_,B,re,Me),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,De=Z.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(De=x.depthFar)),S.near=U.near=P.near=le,S.far=U.far=P.far=De,(L!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),P.layers.mask=Z.layers.mask|2,U.layers.mask=Z.layers.mask|4,S.layers.mask=P.layers.mask|U.layers.mask;const ve=Z.parent,Ie=S.cameras;fe(S,ve);for(let qe=0;qe<Ie.length;qe++)fe(Ie[qe],ve);Ie.length===2?V(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),Se(Z,S,ve)};function Se(Z,le,De){De===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(De.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let we=null;function Xe(Z,le){if(u=le.getViewerPose(l||o),g=le,u!==null){const De=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ve=!1;De.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let Ne=0;Ne<De.length;Ne++){const St=De[Ne];let at=null;if(p!==null)at=p.getViewport(St);else{const E=f.getViewSubImage(d,St);at=E.viewport,Ne===0&&(e.setRenderTargetTextures(A,E.colorTexture,E.depthStencilTexture),e.setRenderTarget(A))}let Ye=M[Ne];Ye===void 0&&(Ye=new nn,Ye.layers.enable(Ne),Ye.viewport=new gt,M[Ne]=Ye),Ye.matrix.fromArray(St.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(St.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(at.x,at.y,at.width,at.height),Ne===0&&(S.matrix.copy(Ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Ye)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ne=f.getDepthInformation(De[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,r.renderState)}}for(let De=0;De<T.length;De++){const ve=y[De],Ie=T[De];ve!==null&&Ie!==void 0&&Ie.update(ve,le,l||o)}we&&we(Z,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const tt=new Kf;tt.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}}const Ki=new In,AS=new xt;function RS(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Nf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,A,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,A,T):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,y=A.envMapRotation;T&&(m.envMap.value=T,Ki.copy(y),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Ki)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,A,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const y=T.program;i.uniformBlockBinding(A,y)}function l(A,T){let y=r[A.id];y===void 0&&(g(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const N=T.program;i.updateUBOMapping(A,N);const D=e.render.frame;s[A.id]!==D&&(d(A),s[A.id]=D)}function u(A){const T=f();A.__bindingPointIndex=T;const y=n.createBuffer(),N=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,N,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],y=A.uniforms,N=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,P=y.length;D<P;D++){const U=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,S=U.length;M<S;M++){const L=U[M];if(p(L,D,M,N)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let Y=0;Y<z.length;Y++){const q=z[Y],Q=x(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+$,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,y,N){const D=A.value,P=T+"_"+y;if(N[P]===void 0)return typeof D=="number"||typeof D=="boolean"?N[P]=D:N[P]=D.clone(),!0;{const U=N[P];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return N[P]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function g(A){const T=A.uniforms;let y=0;const N=16;for(let P=0,U=T.length;P<U;P++){const M=Array.isArray(T[P])?T[P]:[T[P]];for(let S=0,L=M.length;S<L;S++){const G=M[S],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Y=z.length;$<Y;$++){const q=z[$],Q=x(q),V=y%N,fe=V%Q.boundary,Se=V+fe;y+=fe,Se!==0&&N-Se<Q.storage&&(y+=N-Se),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=Q.storage}}}const D=y%N;return D>0&&(y+=N-D),A.__size=y,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class PS{constructor(e={}){const{canvas:t=Em(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let N=!1;this._outputColorSpace=Dt;let D=0,P=0,U=null,M=-1,S=null;const L=new gt,G=new gt;let z=null;const $=new st(0);let Y=0,q=t.width,Q=t.height,V=1,fe=null,Se=null;const we=new gt(0,0,q,Q),Xe=new gt(0,0,q,Q);let tt=!1;const Z=new ql;let le=!1,De=!1;const ve=new xt,Ie=new xt,qe=new R,Ne=new gt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Ye(){return U===null?V:1}let E=i;function ue(v,F){return t.getContext(v,F)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",j,!1),E===null){const F="webgl2";if(E=ue(F,v),E===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ne,he,K,ye,re,Me,Ve,w,_,B,W,ee,X,Pe,de,Ae,Le,te,Ee,Be,Oe,pe,Ge,I;function ge(){ne=new kv(E),ne.init(),pe=new MS(E,ne),he=new Iv(E,ne,e,pe),K=new SS(E,ne),he.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),ye=new Vv(E),re=new aS,Me=new yS(E,ne,K,re,he,pe,ye),Ve=new Nv(y),w=new zv(y),_=new Z0(E),Ge=new Lv(E,_),B=new Hv(E,_,ye,Ge),W=new Xv(E,B,_,ye),Ee=new Wv(E,he,Me),Ae=new Uv(re),ee=new oS(y,Ve,w,ne,he,Ge,Ae),X=new RS(y,re),Pe=new lS,de=new mS(ne),te=new Pv(y,Ve,w,K,W,p,c),Le=new vS(y,W,he),I=new CS(E,ye,he,K),Be=new Dv(E,ne,ye),Oe=new Gv(E,ne,ye),ye.programs=ee.programs,y.capabilities=he,y.extensions=ne,y.properties=re,y.renderLists=Pe,y.shadowMap=Le,y.state=K,y.info=ye}ge();const ie=new wS(y,E);this.xr=ie,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const v=ne.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ne.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(q,Q,!1))},this.getSize=function(v){return v.set(q,Q)},this.setSize=function(v,F,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,Q=F,t.width=Math.floor(v*V),t.height=Math.floor(F*V),k===!0&&(t.style.width=v+"px",t.style.height=F+"px"),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(q*V,Q*V).floor()},this.setDrawingBufferSize=function(v,F,k){q=v,Q=F,V=k,t.width=Math.floor(v*k),t.height=Math.floor(F*k),this.setViewport(0,0,v,F)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,F,k,H){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,F,k,H),K.viewport(L.copy(we).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,F,k,H){v.isVector4?Xe.set(v.x,v.y,v.z,v.w):Xe.set(v,F,k,H),K.scissor(G.copy(Xe).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(v){K.setScissorTest(tt=v)},this.setOpaqueSort=function(v){fe=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,k=!0){let H=0;if(v){let O=!1;if(U!==null){const oe=U.texture.format;O=oe===kl||oe===zl||oe===Bl}if(O){const oe=U.texture.type,_e=oe===Xn||oe===ur||oe===Ws||oe===Xs||oe===Fl||oe===Ol,Ce=te.getClearColor(),be=te.getClearAlpha(),ze=Ce.r,He=Ce.g,Ue=Ce.b;_e?(g[0]=ze,g[1]=He,g[2]=Ue,g[3]=be,E.clearBufferuiv(E.COLOR,0,g)):(x[0]=ze,x[1]=He,x[2]=Ue,x[3]=be,E.clearBufferiv(E.COLOR,0,x))}else H|=E.COLOR_BUFFER_BIT}F&&(H|=E.DEPTH_BUFFER_BIT),k&&(H|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",j,!1),te.dispose(),Pe.dispose(),de.dispose(),re.dispose(),Ve.dispose(),w.dispose(),W.dispose(),Ge.dispose(),I.dispose(),ee.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Iu),ie.removeEventListener("sessionend",Uu),Vi.stop()};function Te(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const v=ye.autoReset,F=Le.enabled,k=Le.autoUpdate,H=Le.needsUpdate,O=Le.type;ge(),ye.autoReset=v,Le.enabled=F,Le.autoUpdate=k,Le.needsUpdate=H,Le.type=O}function j(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Re(v){const F=v.target;F.removeEventListener("dispose",Re),We(F)}function We(v){yt(v),re.remove(v)}function yt(v){const F=re.get(v).programs;F!==void 0&&(F.forEach(function(k){ee.releaseProgram(k)}),v.isShaderMaterial&&ee.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,k,H,O,oe){F===null&&(F=St);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Ce=gp(v,F,k,H,O);K.setMaterial(H,_e);let be=k.index,ze=1;if(H.wireframe===!0){if(be=B.getWireframeAttribute(k),be===void 0)return;ze=2}const He=k.drawRange,Ue=k.attributes.position;let Qe=He.start*ze,pt=(He.start+He.count)*ze;oe!==null&&(Qe=Math.max(Qe,oe.start*ze),pt=Math.min(pt,(oe.start+oe.count)*ze)),be!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,be.count)):Ue!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Ue.count));const At=pt-Qe;if(At<0||At===1/0)return;Ge.setup(O,H,Ce,k,be);let Mt,_t=Be;if(be!==null&&(Mt=_.get(be),_t=Oe,_t.setIndex(Mt)),O.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*Ye()),_t.setMode(E.LINES)):_t.setMode(E.TRIANGLES);else if(O.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),K.setLineWidth(Fe*Ye()),O.isLineSegments?_t.setMode(E.LINES):O.isLineLoop?_t.setMode(E.LINE_LOOP):_t.setMode(E.LINE_STRIP)}else O.isPoints?_t.setMode(E.POINTS):O.isSprite&&_t.setMode(E.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))_t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Fe=O._multiDrawStarts,Tt=O._multiDrawCounts,lt=O._multiDrawCount,sn=be?_.get(be).bytesPerElement:1,Mr=re.get(H).currentProgram.getUniforms();for(let on=0;on<lt;on++)Mr.setValue(E,"_gl_DrawID",on),_t.render(Fe[on]/sn,Tt[on])}else if(O.isInstancedMesh)_t.renderInstances(Qe,At,O.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Tt=Math.min(k.instanceCount,Fe);_t.renderInstances(Qe,At,Tt)}else _t.render(Qe,At)};function ht(v,F,k){v.transparent===!0&&v.side===An&&v.forceSinglePass===!1?(v.side=rn,v.needsUpdate=!0,_o(v,F,k),v.side=Oi,v.needsUpdate=!0,_o(v,F,k),v.side=An):_o(v,F,k)}this.compile=function(v,F,k=null){k===null&&(k=v),h=de.get(k),h.init(F),T.push(h),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),v!==k&&v.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const H=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Ce=oe[_e];ht(Ce,k,O),H.add(Ce)}else ht(oe,k,O),H.add(oe)}),h=T.pop(),H},this.compileAsync=function(v,F,k=null){const H=this.compile(v,F,k);return new Promise(O=>{function oe(){if(H.forEach(function(_e){re.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){O(v);return}setTimeout(oe,10)}ne.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let xn=null;function Kn(v){xn&&xn(v)}function Iu(){Vi.stop()}function Uu(){Vi.start()}const Vi=new Kf;Vi.setAnimationLoop(Kn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(v){xn=v,ie.setAnimationLoop(v),v===null?Vi.stop():Vi.start()},ie.addEventListener("sessionstart",Iu),ie.addEventListener("sessionend",Uu),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,F,U),h=de.get(v,T.length),h.init(F),T.push(h),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),De=this.localClippingEnabled,le=Ae.init(this.clippingPlanes,De),m=Pe.get(v,A.length),m.init(),A.push(m),ie.enabled===!0&&ie.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Ga(oe,F,-1/0,y.sortObjects)}Ga(v,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,Se),at=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,at&&te.addToRenderList(m,v),this.info.render.frame++,le===!0&&Ae.beginShadows();const k=h.state.shadowsArray;Le.render(k,v,F),le===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(h.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let _e=0,Ce=oe.length;_e<Ce;_e++){const be=oe[_e];Fu(H,O,v,be)}at&&te.render(v);for(let _e=0,Ce=oe.length;_e<Ce;_e++){const be=oe[_e];Nu(m,v,be,be.viewport)}}else O.length>0&&Fu(H,O,v,F),at&&te.render(v),Nu(m,v,F);U!==null&&P===0&&(Me.updateMultisampleRenderTarget(U),Me.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(y,v,F),Ge.resetDefaultState(),M=-1,S=null,T.pop(),T.length>0?(h=T[T.length-1],le===!0&&Ae.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ga(v,F,k,H){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Z.intersectsSprite(v)){H&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ie);const _e=W.update(v),Ce=v.material;Ce.visible&&m.push(v,_e,Ce,k,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Z.intersectsObject(v))){const _e=W.update(v),Ce=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ne.copy(_e.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ce)){const be=_e.groups;for(let ze=0,He=be.length;ze<He;ze++){const Ue=be[ze],Qe=Ce[Ue.materialIndex];Qe&&Qe.visible&&m.push(v,_e,Qe,k,Ne.z,Ue)}}else Ce.visible&&m.push(v,_e,Ce,k,Ne.z,null)}}const oe=v.children;for(let _e=0,Ce=oe.length;_e<Ce;_e++)Ga(oe[_e],F,k,H)}function Nu(v,F,k,H){const O=v.opaque,oe=v.transmissive,_e=v.transparent;h.setupLightsView(k),le===!0&&Ae.setGlobalState(y.clippingPlanes,k),H&&K.viewport(L.copy(H)),O.length>0&&go(O,F,k),oe.length>0&&go(oe,F,k),_e.length>0&&go(_e,F,k),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Fu(v,F,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new hr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?co:Xn,minFilter:or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const oe=h.state.transmissionRenderTarget[H.id],_e=H.viewport||L;oe.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const Ce=y.getRenderTarget(),be=y.getActiveCubeFace(),ze=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor($),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),at&&te.render(k);const He=y.toneMapping;y.toneMapping=Ni;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),le===!0&&Ae.setGlobalState(y.clippingPlanes,H),go(v,k,H),Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let pt=0,At=F.length;pt<At;pt++){const Mt=F[pt],_t=Mt.object,Fe=Mt.geometry,Tt=Mt.material,lt=Mt.group;if(Tt.side===An&&_t.layers.test(H.layers)){const sn=Tt.side;Tt.side=rn,Tt.needsUpdate=!0,Ou(_t,k,H,Fe,Tt,lt),Tt.side=sn,Tt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe))}y.setRenderTarget(Ce,be,ze),y.setClearColor($,Y),Ue!==void 0&&(H.viewport=Ue),y.toneMapping=He}function go(v,F,k){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=v.length;O<oe;O++){const _e=v[O],Ce=_e.object,be=_e.geometry,ze=_e.group;let He=_e.material;He.allowOverride===!0&&H!==null&&(He=H),Ce.layers.test(k.layers)&&Ou(Ce,F,k,be,He,ze)}}function Ou(v,F,k,H,O,oe){v.onBeforeRender(y,F,k,H,O,oe),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(y,F,k,H,v,oe),O.transparent===!0&&O.side===An&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,y.renderBufferDirect(k,F,H,O,v,oe),O.side=Oi,O.needsUpdate=!0,y.renderBufferDirect(k,F,H,O,v,oe),O.side=An):y.renderBufferDirect(k,F,H,O,v,oe),v.onAfterRender(y,F,k,H,O,oe)}function _o(v,F,k){F.isScene!==!0&&(F=St);const H=re.get(v),O=h.state.lights,oe=h.state.shadowsArray,_e=O.state.version,Ce=ee.getParameters(v,O.state,oe,F,k),be=ee.getProgramCacheKey(Ce);let ze=H.programs;H.environment=v.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(v.isMeshStandardMaterial?w:Ve).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,ze===void 0&&(v.addEventListener("dispose",Re),ze=new Map,H.programs=ze);let He=ze.get(be);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===_e)return zu(v,Ce),He}else Ce.uniforms=ee.getUniforms(v),v.onBeforeCompile(Ce,y),He=ee.acquireProgram(Ce,be),ze.set(be,He),H.uniforms=Ce.uniforms;const Ue=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ue.clippingPlanes=Ae.uniform),zu(v,Ce),H.needsLights=vp(v),H.lightsStateVersion=_e,H.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function Bu(v){if(v.uniformsList===null){const F=v.currentProgram.getUniforms();v.uniformsList=Qo.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function zu(v,F){const k=re.get(v);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function gp(v,F,k,H,O){F.isScene!==!0&&(F=St),Me.resetTextureUnits();const oe=F.fog,_e=H.isMeshStandardMaterial?F.environment:null,Ce=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:is,be=(H.isMeshStandardMaterial?w:Ve).get(H.envMap||_e),ze=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,pt=!!k.morphAttributes.color;let At=Ni;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=y.toneMapping);const Mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=Mt!==void 0?Mt.length:0,Fe=re.get(H),Tt=h.state.lights;if(le===!0&&(De===!0||v!==S)){const Kt=v===S&&H.id===M;Ae.setState(H,v,Kt)}let lt=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Tt.state.version||Fe.outputColorSpace!==Ce||O.isBatchedMesh&&Fe.batching===!1||!O.isBatchedMesh&&Fe.batching===!0||O.isBatchedMesh&&Fe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Fe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Fe.instancing===!1||!O.isInstancedMesh&&Fe.instancing===!0||O.isSkinnedMesh&&Fe.skinning===!1||!O.isSkinnedMesh&&Fe.skinning===!0||O.isInstancedMesh&&Fe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Fe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Fe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Fe.instancingMorph===!1&&O.morphTexture!==null||Fe.envMap!==be||H.fog===!0&&Fe.fog!==oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ae.numPlanes||Fe.numIntersection!==Ae.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==He||Fe.morphTargets!==Ue||Fe.morphNormals!==Qe||Fe.morphColors!==pt||Fe.toneMapping!==At||Fe.morphTargetsCount!==_t)&&(lt=!0):(lt=!0,Fe.__version=H.version);let sn=Fe.currentProgram;lt===!0&&(sn=_o(H,F,O));let Mr=!1,on=!1,Ss=!1;const Et=sn.getUniforms(),fn=Fe.uniforms;if(K.useProgram(sn.program)&&(Mr=!0,on=!0,Ss=!0),H.id!==M&&(M=H.id,on=!0),Mr||S!==v){K.buffers.depth.getReversed()?(ve.copy(v.projectionMatrix),Tm(ve),wm(ve),Et.setValue(E,"projectionMatrix",ve)):Et.setValue(E,"projectionMatrix",v.projectionMatrix),Et.setValue(E,"viewMatrix",v.matrixWorldInverse);const tn=Et.map.cameraPosition;tn!==void 0&&tn.setValue(E,qe.setFromMatrixPosition(v.matrixWorld)),he.logarithmicDepthBuffer&&Et.setValue(E,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(E,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,on=!0,Ss=!0)}if(O.isSkinnedMesh){Et.setOptional(E,O,"bindMatrix"),Et.setOptional(E,O,"bindMatrixInverse");const Kt=O.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(E,"boneTexture",Kt.boneTexture,Me))}O.isBatchedMesh&&(Et.setOptional(E,O,"batchingTexture"),Et.setValue(E,"batchingTexture",O._matricesTexture,Me),Et.setOptional(E,O,"batchingIdTexture"),Et.setValue(E,"batchingIdTexture",O._indirectTexture,Me),Et.setOptional(E,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(E,"batchingColorTexture",O._colorsTexture,Me));const dn=k.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ee.update(O,k,sn),(on||Fe.receiveShadow!==O.receiveShadow)&&(Fe.receiveShadow=O.receiveShadow,Et.setValue(E,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fn.envMap.value=be,fn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(fn.envMapIntensity.value=F.environmentIntensity),on&&(Et.setValue(E,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&_p(fn,Ss),oe&&H.fog===!0&&X.refreshFogUniforms(fn,oe),X.refreshMaterialUniforms(fn,H,V,Q,h.state.transmissionRenderTarget[v.id]),Qo.upload(E,Bu(Fe),fn,Me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qo.upload(E,Bu(Fe),fn,Me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(E,"center",O.center),Et.setValue(E,"modelViewMatrix",O.modelViewMatrix),Et.setValue(E,"normalMatrix",O.normalMatrix),Et.setValue(E,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Kt=H.uniformsGroups;for(let tn=0,Va=Kt.length;tn<Va;tn++){const Wi=Kt[tn];I.update(Wi,sn),I.bind(Wi,sn)}}return sn}function _p(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function vp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,F,k){const H=re.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),re.get(v.texture).__webglTexture=F,re.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){const k=re.get(v);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const xp=E.createFramebuffer();this.setRenderTarget=function(v,F=0,k=0){U=v,D=F,P=k;let H=!0,O=null,oe=!1,_e=!1;if(v){const be=re.get(v);if(be.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(E.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)Me.setupRenderTarget(v);else if(be.__hasExternalTextures)Me.rebindTextures(v,re.get(v.texture).__webglTexture,re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(be.__boundDepthTexture!==Ue){if(Ue!==null&&re.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(v)}}const ze=v.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const He=re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(He[F])?O=He[F][k]:O=He[F],oe=!0):v.samples>0&&Me.useMultisampledRTT(v)===!1?O=re.get(v).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[k]:O=He,L.copy(v.viewport),G.copy(v.scissor),z=v.scissorTest}else L.copy(we).multiplyScalar(V).floor(),G.copy(Xe).multiplyScalar(V).floor(),z=tt;if(k!==0&&(O=xp),K.bindFramebuffer(E.FRAMEBUFFER,O)&&H&&K.drawBuffers(v,O),K.viewport(L),K.scissor(G),K.setScissorTest(z),oe){const be=re.get(v.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,k)}else if(_e){const be=re.get(v.texture),ze=F;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,be.__webglTexture,k,ze)}else if(v!==null&&k!==0){const be=re.get(v.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,be.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(v,F,k,H,O,oe,_e,Ce=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){K.bindFramebuffer(E.FRAMEBUFFER,be);try{const ze=v.textures[Ce],He=ze.format,Ue=ze.type;if(!he.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-H&&k>=0&&k<=v.height-O&&(v.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ce),E.readPixels(F,k,H,O,pe.convert(He),pe.convert(Ue),oe))}finally{const ze=U!==null?re.get(U).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(v,F,k,H,O,oe,_e,Ce=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be)if(F>=0&&F<=v.width-H&&k>=0&&k<=v.height-O){K.bindFramebuffer(E.FRAMEBUFFER,be);const ze=v.textures[Ce],He=ze.format,Ue=ze.type;if(!he.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Qe),E.bufferData(E.PIXEL_PACK_BUFFER,oe.byteLength,E.STREAM_READ),v.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ce),E.readPixels(F,k,H,O,pe.convert(He),pe.convert(Ue),0);const pt=U!==null?re.get(U).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,pt);const At=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await bm(E,At,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Qe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,oe),E.deleteBuffer(Qe),E.deleteSync(At),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,k=0){const H=Math.pow(2,-k),O=Math.floor(v.image.width*H),oe=Math.floor(v.image.height*H),_e=F!==null?F.x:0,Ce=F!==null?F.y:0;Me.setTexture2D(v,0),E.copyTexSubImage2D(E.TEXTURE_2D,k,0,0,_e,Ce,O,oe),K.unbindTexture()};const Sp=E.createFramebuffer(),yp=E.createFramebuffer();this.copyTextureToTexture=function(v,F,k=null,H=null,O=0,oe=null){oe===null&&(O!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let _e,Ce,be,ze,He,Ue,Qe,pt,At;const Mt=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(k!==null)_e=k.max.x-k.min.x,Ce=k.max.y-k.min.y,be=k.isBox3?k.max.z-k.min.z:1,ze=k.min.x,He=k.min.y,Ue=k.isBox3?k.min.z:0;else{const dn=Math.pow(2,-O);_e=Math.floor(Mt.width*dn),Ce=Math.floor(Mt.height*dn),v.isDataArrayTexture?be=Mt.depth:v.isData3DTexture?be=Math.floor(Mt.depth*dn):be=1,ze=0,He=0,Ue=0}H!==null?(Qe=H.x,pt=H.y,At=H.z):(Qe=0,pt=0,At=0);const _t=pe.convert(F.format),Fe=pe.convert(F.type);let Tt;F.isData3DTexture?(Me.setTexture3D(F,0),Tt=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Me.setTexture2DArray(F,0),Tt=E.TEXTURE_2D_ARRAY):(Me.setTexture2D(F,0),Tt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=E.getParameter(E.UNPACK_ROW_LENGTH),sn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Mr=E.getParameter(E.UNPACK_SKIP_PIXELS),on=E.getParameter(E.UNPACK_SKIP_ROWS),Ss=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Mt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Mt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ze),E.pixelStorei(E.UNPACK_SKIP_ROWS,He),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ue);const Et=v.isDataArrayTexture||v.isData3DTexture,fn=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){const dn=re.get(v),Kt=re.get(F),tn=re.get(dn.__renderTarget),Va=re.get(Kt.__renderTarget);K.bindFramebuffer(E.READ_FRAMEBUFFER,tn.__webglFramebuffer),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,Va.__webglFramebuffer);for(let Wi=0;Wi<be;Wi++)Et&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.get(v).__webglTexture,O,Ue+Wi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.get(F).__webglTexture,oe,At+Wi)),E.blitFramebuffer(ze,He,_e,Ce,Qe,pt,_e,Ce,E.DEPTH_BUFFER_BIT,E.NEAREST);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||re.has(v)){const dn=re.get(v),Kt=re.get(F);K.bindFramebuffer(E.READ_FRAMEBUFFER,Sp),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,yp);for(let tn=0;tn<be;tn++)Et?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,dn.__webglTexture,O,Ue+tn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,dn.__webglTexture,O),fn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Kt.__webglTexture,oe,At+tn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Kt.__webglTexture,oe),O!==0?E.blitFramebuffer(ze,He,_e,Ce,Qe,pt,_e,Ce,E.COLOR_BUFFER_BIT,E.NEAREST):fn?E.copyTexSubImage3D(Tt,oe,Qe,pt,At+tn,ze,He,_e,Ce):E.copyTexSubImage2D(Tt,oe,Qe,pt,ze,He,_e,Ce);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else fn?v.isDataTexture||v.isData3DTexture?E.texSubImage3D(Tt,oe,Qe,pt,At,_e,Ce,be,_t,Fe,Mt.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(Tt,oe,Qe,pt,At,_e,Ce,be,_t,Mt.data):E.texSubImage3D(Tt,oe,Qe,pt,At,_e,Ce,be,_t,Fe,Mt):v.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,oe,Qe,pt,_e,Ce,_t,Fe,Mt.data):v.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,oe,Qe,pt,Mt.width,Mt.height,_t,Mt.data):E.texSubImage2D(E.TEXTURE_2D,oe,Qe,pt,_e,Ce,_t,Fe,Mt);E.pixelStorei(E.UNPACK_ROW_LENGTH,lt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,sn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Mr),E.pixelStorei(E.UNPACK_SKIP_ROWS,on),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ss),oe===0&&F.generateMipmaps&&E.generateMipmap(Tt),K.unbindTexture()},this.copyTextureToTexture3D=function(v,F,k=null,H=null,O=0){return Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,F,k,H,O)},this.initRenderTarget=function(v){re.get(v).__webglFramebuffer===void 0&&Me.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Me.setTextureCube(v,0):v.isData3DTexture?Me.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Me.setTexture2DArray(v,0):Me.setTexture2D(v,0),K.unbindTexture()},this.resetState=function(){D=0,P=0,U=null,K.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}class LS{constructor(){this.enabled=!0,this.ctx=null,this.master=null,this.ambient=null,this.nextStep=0,this.nextAlarm=0,this.music={sources:["./audio/theme-01.mp3","./audio/theme-02.mp3","./audio/theme-03.mp3"],index:0,audio:null,wantsPlay:!1},this.setupMusicPlayer()}setupMusicPlayer(){if(typeof document>"u")return;const e=document.querySelector("#music-player")||document.body,t=document.createElement("audio");t.preload="auto",t.volume=.48,t.setAttribute("aria-hidden","true"),t.src=this.music.sources[0],t.addEventListener("ended",()=>this.nextMusic()),e.appendChild(t),this.music.audio=t}playMusic(){if(!this.enabled||!this.music.audio)return;this.music.wantsPlay=!0,this.music.audio.play()?.catch(()=>{})}pauseMusic(){this.music.wantsPlay=!1,this.music.audio?.pause()}nextMusic(){this.music.audio&&(this.music.index=(this.music.index+1)%this.music.sources.length,this.music.audio.src=this.music.sources[this.music.index],this.music.audio.currentTime=0,this.music.wantsPlay&&this.playMusic())}ensure(){if(!this.enabled)return!1;const e=window.AudioContext||window.webkitAudioContext;return e?(this.ctx||(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.7,this.master.connect(this.ctx.destination)),this.ctx.state==="suspended"&&this.ctx.resume(),!0):!1}tone(e=440,t=.09,i="square",r=.035,s=0){if(!this.ensure())return;const o=this.ctx.currentTime+s,a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(e,o),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(c).connect(this.master),a.start(o),a.stop(o+t)}start(){if(this.playMusic(),!this.ensure()||this.ambient)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.createOscillator(),r=this.ctx.createGain();e.type="sawtooth",e.frequency.value=47,t.gain.value=.012,i.frequency.value=.18,r.gain.value=.004,i.connect(r).connect(t.gain),e.connect(t).connect(this.master),e.start(),i.start(),this.ambient={osc:e,gain:t,lfo:i}}event(e){const i={jump:[320,.055,"square",.035],checkpoint:[740,.15,"square",.04],death:[120,.24,"sawtooth",.045],hit:[520,.08,"square",.05],win:[880,.4,"square",.05],punch:[250,.05,"square",.03],defeat:[920,.28,"square",.05]}[e];i&&this.tone(...i)}update({moving:e=!1,grounded:t=!1,hunter:i=!1,now:r=0}){this.enabled&&(e&&t&&r>=this.nextStep&&(this.tone(95,.045,"square",.012),this.nextStep=r+.31),i&&r>=this.nextAlarm&&(this.tone(630,.08,"square",.018),this.tone(420,.1,"square",.014,.1),this.nextAlarm=r+2.4))}setEnabled(e){this.enabled=e,e?(this.ensure(),this.start()):(this.pauseMusic(),this.ctx&&this.ctx.suspend())}pause(){this.pauseMusic(),this.ctx?.state==="running"&&this.ctx.suspend()}resume(){this.enabled&&(this.ensure(),this.start())}}const vr={escape:{stageCount:20,title:"经典越狱",winTitle:"越狱成功！",winCopy:"本次 20 关逃脱用时"},math:{stageCount:12,title:"数学期末考试",winTitle:"期末满分！",winCopy:"梅东老师认可了你的 12 关成绩"},rescue:{stageCount:15,title:"球星拯救",winTitle:"全员获救！",winCopy:"你带领球员们完成了 15 关撤离"},rosister:{stageCount:5,title:"萝姐挑战",winTitle:"萝姐获救！",winCopy:"你在限时答题中救出了萝姐"}},Yr=64,td="dot-eyes-smile",DS=Object.freeze({beard:3810589,facialHair:"short-full-beard"}),mi=[{name:"萝姐",buff:"attack",country:"葡萄牙",team:"portugal",number:7,color:11869998,accent:1532735,shortsColor:1532735,appearance:{skin:13671026,hair:1641735,style:"swept-forelock",faceWidth:.75,faceHeight:.74}},{name:"小狐狸",buff:"attack",country:"葡萄牙",team:"portugal",number:11,color:11869998,accent:1532735,shortsColor:1532735,appearance:{skin:14197115,hair:2167049,style:"fluffy-curls",faceWidth:.71,faceHeight:.76}},{name:"外马尔",buff:"strength",country:"巴西",team:"brazil",number:10,color:15914283,accent:1410119,shortsColor:2381220,appearance:{skin:12155221,hair:5584159,style:"spiky-highlight-crop",faceWidth:.72,faceHeight:.73}},{name:"黄金小兔兔",buff:"strength",country:"克罗地亚",team:"croatia",number:10,color:15921901,accent:14035259,shortsColor:1523575,appearance:{skin:14724742,hair:9398072,hairAccent:6833699,style:"dark-golden-pageboy",faceWidth:.68,faceHeight:.82}},{name:"姆久佩",buff:"attack",country:"法国",team:"france",number:10,color:1523064,accent:13968954,shortsColor:1256535,appearance:{skin:9131838,hair:592137,style:"close-crop",faceWidth:.77,faceHeight:.72}},{name:"朱古力",buff:"speed",country:"英格兰",team:"england",number:10,color:15856366,accent:1781072,shortsColor:1781072,appearance:{skin:8278074,hair:1904392,style:"rounded-curly-top",faceWidth:.74,faceHeight:.76}},{name:"哈哈哈",buff:"speed",country:"挪威",team:"norway",number:9,color:14100535,accent:1321812,shortsColor:1321812,appearance:{skin:15055768,hair:15717029,style:"short-blond-brush",faceWidth:.73,faceHeight:.82}},{name:"小孩哥",buff:"strength",country:"西班牙",team:"spain",number:19,color:11869998,accent:15779113,shortsColor:2505584,appearance:{skin:10380617,hair:9537913,hairAccent:1183758,style:"bleached-tight-curls",faceWidth:.72,faceHeight:.73}},{name:"小美叔叔",buff:"jump",country:"英格兰",team:"england",number:9,color:15856366,accent:1781072,shortsColor:1781072,appearance:{skin:14396553,hair:10915692,beard:7755837,facialHair:"short-full-beard",style:"blond-side-sweep",faceWidth:.76,faceHeight:.78}},{name:"德克米",buff:"jump",country:"英格兰",team:"england",number:4,color:15856366,accent:1781072,shortsColor:1781072,appearance:{skin:14132094,hair:1051915,style:"messy-short-crop",faceWidth:.74,faceHeight:.74}},{name:"拉墨水",buff:"attack",country:"西班牙",team:"spain",number:4,color:11869998,accent:15779113,shortsColor:2505584,appearance:{skin:10249546,hair:1708815,style:"lms-short-undercut",faceWidth:.74,faceHeight:.75}},{name:"白雪公主-卡",buff:"strength",country:"巴西",team:"brazil",number:10,color:15914283,accent:1410119,shortsColor:2381220,appearance:{skin:15055768,hair:1051657,style:"kk-modeled-crown",sleeve:"long",faceWidth:.75,faceHeight:.76}},{name:"饿的糕",buff:"speed",country:"挪威",team:"norway",number:10,color:14100535,accent:1321812,shortsColor:1321812,appearance:{skin:14791310,hair:6243891,style:"edg-flat-crop",faceWidth:.74,faceHeight:.77}},{name:"小马宝莉",buff:"jump",country:"法国",team:"france",number:9,color:1523064,accent:13968954,shortsColor:1256535,appearance:{skin:12089688,hair:2430994,style:"bzm-widow",faceWidth:.76,faceHeight:.74}},{name:"带刀侍卫",buff:"strength",country:"葡萄牙",team:"portugal",number:3,color:11869998,accent:1532735,shortsColor:1532735,appearance:{skin:12155221,hair:1511951,style:"bald",faceWidth:.76,faceHeight:.76}}],Js=Object.freeze(mi.slice(1).map((n,e)=>e+1)),fi=Object.freeze(Js.map(n=>mi[n])),xr=Object.freeze([{id:"club-dekimi",name:"德克米 · 阿森纳",shortName:"德克米",club:"阿森纳",clubStyle:"arsenal",sourceIndex:9,color:14096672,accent:16777215,weight:55,number:4},{id:"club-uncle",name:"小美叔叔 · 拜仁",shortName:"小美叔叔",club:"拜仁",clubStyle:"bayern",sourceIndex:8,color:14096672,accent:16777215,weight:20,number:9},{id:"club-courtois",name:"裤袜 · 皇家马德里门将",shortName:"裤袜",club:"皇家马德里",clubStyle:"real-gk",color:1484449,accent:15913547,weight:15,number:1,appearance:{skin:12089698,hair:3810328,style:"short-side-sweep",faceWidth:.78,faceHeight:.8,beard:4861469,facialHair:"short-full-beard"}},{id:"club-hahaha",name:"哈哈哈 · 曼城",shortName:"哈哈哈",club:"曼城",clubStyle:"mancity",sourceIndex:6,color:7122398,accent:1518936,weight:7.5,number:9},{id:"club-waimar",name:"外马尔 · 巴萨",shortName:"外马尔",club:"巴萨",clubStyle:"barca",sourceIndex:2,color:8197947,accent:1518440,weight:2,number:10},{id:"club-rosister",name:"萝姐 · 皇家马德里",shortName:"萝姐",club:"皇家马德里",clubStyle:"real",sourceIndex:0,color:16053485,accent:1453665,weight:.5,number:7}]),nd=Object.freeze(xr.map(n=>n.id));function IS(n=Math.random){const e=Math.max(0,Math.min(.999999999,Number(n())||0))*100;let t=0;for(const i of xr)if(t+=i.weight,e<t)return i.id;return nd.at(-1)}const id=Object.freeze([{name:"地下接应暗道",mission:"绕过掩体找到钥匙",kind:"cover-maze"},{name:"巡逻犬舍外围",mission:"利用犬舍间隙避开巡逻灯",kind:"patrol-yard"},{name:"高压配电中心",mission:"沿绝缘平台穿过电缆区",kind:"power-grid"},{name:"隔离医务通道",mission:"避开移动病床完成营救",kind:"medical-run"},{name:"访客登记迷宫",mission:"穿过交错隔墙寻找牢笼",kind:"visitor-maze"},{name:"货运升降井",mission:"踩稳货台越过深坑",kind:"freight-lift"},{name:"监控服务器层",mission:"避开扫描激光爬上平台",kind:"server-floor"},{name:"垃圾压缩站",mission:"观察压缩机节奏穿过通道",kind:"compactor"},{name:"排水泵房",mission:"沿泵房踏板跨过积水",kind:"pump-room"},{name:"伪造证件库",mission:"绕过档案柜和安检门",kind:"identity-vault"},{name:"监狱厕所入口",mission:"进入监狱厕所",kind:"shared-toilet"},{name:"四选一隔间",mission:"找到固定的正确隔间",kind:"shared-toilet"},{name:"厕所下水道",mission:"沿厕所地洞爬过下水道",kind:"shared-toilet"},{name:"地下押运月台",mission:"避开横移行李车抵达出口",kind:"transfer-platform"},{name:"梅东最终围捕",mission:"与全体获救球员击败最终梅东",kind:"shared-final-boss"}]),rd=Object.freeze([0,1,2,3,4,5,6,7,8,9,13]),wa=14,sd=Object.freeze({freight:Object.freeze([[-1.6,157],[1.5,161],[-1.5,165],[1.5,169],[-1.6,173],[0,177]]),pump:Object.freeze([[0,248],[-1.3,251.6],[1.3,255.2],[-1.3,258.8],[1.3,262.4],[0,266],[0,270]])}),US=Object.freeze({attack:"攻击力",strength:"力量",jump:"弹跳",speed:"速度"}),Bs=Object.freeze({attackDamage:1,strengthRange:.16,strengthKnockback:.16,jumpVelocity:.65,speed:.55}),lr=Object.freeze({staticBeamZ:416,staticBeamWidth:7.4,rotatingArmLength:6.2,rotatingArmSpeed:.48,hitPadding:.08,hunterSpawnOffset:7});function od(n=[]){const e={attack:0,strength:0,jump:0,speed:0};for(const t of n){const i=mi[t]?.buff;i&&e[i]++}return e}function eu(n=[]){const e={attack:0,strength:0,jump:0,speed:0};for(const t of n){const i=fi[t]?.buff;i&&e[i]++}return e}function ad(n,{isMech:e=!1,stageLength:t=30}={}){return e?{x:0,z:n*t+22}:n===wa?{x:0,z:n*t+16}:n===13?{x:0,z:n*t+lr.hunterSpawnOffset}:{x:n%2?4:-4,z:n*t+16}}function NS(n=""){const t=new URLSearchParams(n).get("play"),i=fi.map((r,s)=>s);return t==="rescue-toilet"?{mode:"rescue",stage:10,rescuedIndices:i}:t==="rescue-stage14"?{mode:"rescue",stage:13,rescuedIndices:i}:t==="final-boss"?{mode:"escape",stage:19,rescuedIndices:[]}:t==="rosister"?{mode:"rosister",stage:0,rescuedIndices:[]}:null}const bl=[{id:"prisoner",name:"默认囚犯",color:14251807,kind:"default"},{id:"ponytail",name:"马尾女孩",color:15108908,kind:"default"},{id:"medong",name:"梅东",color:7653614,kind:"medong"},...mi.map((n,e)=>({id:`rescue-${e}`,name:n.name,country:n.country,color:n.color,accent:n.accent,kind:"rescue"})),...xr.map(n=>({...n,kind:"club"}))],FS=Js.map(n=>`rescue-${n}`),OS="rescue-0";function BS({claimedMedong:n=!1,rescueCompleted:e=!1,rosisterCompleted:t=!1,clubPackSkins:i=[]}={}){const r=["prisoner","ponytail"];return n&&r.push("medong"),e&&r.push(...FS),t&&r.push(OS),Array.isArray(i)&&r.push(...i.filter(s=>nd.includes(s))),r}const cd=Object.freeze(["corpse","tunnel","medong","corpse"]);function ld(n,e){return(n==="escape"||n==="rescue")&&e===11}const zS=Object.freeze([[-1.45,-1.3],[1.05,-2.15],[-.25,-3.05],[2.2,-3.55],[-2.4,-4.05],[.75,-4.8],[-1.15,-5.55],[2.45,-5.95],[-2.65,-6.55],[.15,-7.05],[-2.8,-7.7],[2.8,-8.2],[-1.2,-8.8],[1.3,-9.3],[-.2,-10.1]]),kS=Object.freeze([[-1.2,-.15],[1.35,.1],[-2.05,.55],[2.15,-.5],[-1.65,-1.25],[1.8,-1.45],[-2.65,-.65],[2.7,.7],[-.65,-2.05],[.8,-1.95],[-2.4,-1.7],[2.4,-1.7],[-1.8,-2.3],[1.8,-2.3],[0,-2.6]]),HS=[{key:[-4.6,.15,8],cage:[4.7,0,18]},{key:[4.4,.15,36],cage:[-4.4,0,56]},{key:[-1.5,.65,66],cage:[0,.65,84.5]},{key:[-4.8,.15,94],cage:[4.8,0,116]},{key:[4.8,.15,124],cage:[-4.8,0,146]},{key:[-1.6,.7,157],cage:[-1.6,.7,173]},{key:[-1.35,.5,185],cage:[1.35,1.4,205]},{key:[-5.5,.15,214],cage:[0,0,236]},{key:[0,.15,244],cage:[0,0,266]},{key:[-4.5,.15,274],cage:[4.5,0,296]},{key:[4.6,.15,304],cage:[-4.6,0,326]},{key:[-4.6,.15,334],cage:[4.6,0,356]},{key:[4.6,.15,364],cage:[-4.6,0,386]},{key:[-4.6,.15,394],cage:[4.6,0,406]},{key:[4.6,.15,424],cage:[-4.6,0,446]}],ft=(n,e,t)=>Math.floor(n()*(t-e+1))+e,mn=(n,e)=>({prompt:n,answer:Number(e.toFixed?.(4)??e)});function ud(n,e=Math.random){const t=Math.max(0,Math.min(11,n));if(t===0){const o=ft(e,4,12),a=ft(e,3,10);return mn(`${o} + ${a} = ?`,o+a)}if(t===1){const o=ft(e,5,18),a=ft(e,4,16);return mn(`${o+a} − ${o} = ?`,a)}if(t===2){const o=ft(e,3,8),a=ft(e,3,9);return mn(`${o} × ${a} = ?`,o*a)}if(t===3){const o=ft(e,3,12),a=ft(e,2,9);return mn(`${o*a} ÷ ${a} = ?`,o)}if(t===4){const o=ft(e,3,9),a=ft(e,2,7),c=ft(e,2,12);return mn(`${o} × ${a} + ${c} = ?`,o*a+c)}if(t===5){const o=ft(e,4,18),a=ft(e,3,14);return mn(`x + ${a} = ${o+a}，x = ?`,o)}if(t===6){const o=ft(e,4,10),a=ft(e,1,o-2),c=ft(e,1,o-a),l=a+c;return mn(`${a}/${o} + ${c}/${o} = ?（填小数）`,l/o)}if(t===7){const o=[10,20,25,50][ft(e,0,3)],a=ft(e,2,12)*20;return mn(`${a} 的 ${o}% 是多少？`,a*o/100)}if(t===8){const o=ft(e,2,5),a=ft(e,2,3),c=ft(e,1,8);return mn(`${o} 的 ${a} 次方 − ${c} = ?`,o**a-c)}if(t===9){const o=ft(e,5,14),a=ft(e,3,9);return mn(`长方形长 ${o}、宽 ${a}，面积是多少？`,o*a)}if(t===10){const o=ft(e,3,12),a=ft(e,2,6),c=ft(e,4,18);return mn(`${a}x + ${c} = ${a*o+c}，x = ?`,o)}const i=ft(e,3,10),r=ft(e,2,5),s=ft(e,2,9);return mn(`${r}(x + ${s}) = ${r*(i+s)}，x = ?`,i)}function hd(n,e){const t=Number(String(e).trim());return Number.isFinite(t)&&Math.abs(t-n.answer)<.01}const Yh=Object.freeze([{prompt:"C罗第一次获得欧洲冠军联赛冠军是哪一年？",choices:["2004","2006","2008","2010"],answer:"2008"},{prompt:"C罗第一次参加世界杯是哪一年？",choices:["2002","2006","2010","2014"],answer:"2006"},{prompt:"C罗第一次获得金球奖是哪一年？",choices:["2007","2008","2013","2014"],answer:"2008"},{prompt:"C罗在葡萄牙国家队最经典的球衣号码是多少？",choices:["3","7","9","17"],answer:"7"},{prompt:"葡萄牙第一次赢得欧洲杯冠军是哪一年？",choices:["2004","2012","2016","2020"],answer:"2016"}]);function GS(n,e=Math.random){const t=Math.max(0,Math.min(Yh.length-1,n));if(t>=3){const r=ud(t===3?10:11,e);return Object.freeze({...r,kind:"math",limit:18})}const i=Yh[t];return Object.freeze({...i,kind:"choice",limit:14+t*2,choices:Object.freeze([...i.choices])})}function VS(n,e){const t=String(e??"").trim();return n.kind==="math"?hd(n,t):t===String(n.answer)}function WS(n){return n>=1&&n<=fi.length?n-1:null}function XS(n){return 170+Math.max(0,n)*24}const $h=["不错，脑子转得很快！","答得漂亮，继续保持！","梅东老师认可你了！","这一步很稳，下一间教室见！","完全正确，有点东西！"],as=1.65,sa=.4,fd=.05;function oa(n,e,t=sa){return n.x>e.min.x-t&&n.x<e.max.x+t&&n.z>e.min.z-t&&n.z<e.max.z+t}function dd(n,e,t=as,i=fd){return n.y<e.max.y-i&&n.y+t>e.min.y+i}function qS(n,e,t=.5,i=as){return oa(n,e,t)&&n.y+i>e.min.y&&n.y<e.max.y+.15}function YS(n,e,t,i,r,s,o=sa,a=as){const c=n.x-e.x,l=n.z-e.z,u=Math.cos(t),f=Math.sin(t),d=u*c-f*l,p=f*c+u*l;return Math.abs(d)<i/2+o&&Math.abs(p)<s/2+o&&n.y+a>e.y-r/2&&n.y<e.y+r/2+.15}function $S(n,e,t,i,r=as,s=fd){return t<=0&&n>=i.max.y-s&&e<=i.max.y+s?{y:i.max.y,velocityY:0,grounded:!0}:t>0&&n+r<=i.min.y+s&&e+r>=i.min.y-s?{y:i.min.y-r,velocityY:0,grounded:!1}:null}const ZS=1.65,KS=1.9,JS=.58,jS=.72;function pd(n,e=.8){n.mode="alert",n.modeTimer=e,n.stun=0,n.steerSign=n.stage%2?1:-1}function md(n,e){n.stun=Math.max(n.stun,e),n.mode="stunned",n.modeTimer=n.stun}function QS(n,e,t){return n.stun>0?(n.stun=Math.max(0,n.stun-e),n.mode=n.stun>0?"stunned":"chase",n.modeTimer=n.stun,null):n.mode==="alert"?(n.modeTimer=Math.max(0,n.modeTimer-e),n.modeTimer===0&&(n.mode="chase"),null):n.mode==="windup"?(n.modeTimer-=e,n.modeTimer<=0?(n.mode="recovery",n.modeTimer=jS,"strike"):null):n.mode==="recovery"?(n.modeTimer=Math.max(0,n.modeTimer-e),n.modeTimer===0&&(n.mode="chase"),null):t<=ZS?(n.mode="windup",n.modeTimer=JS,"windup"):(n.mode="chase",null)}function ey(n){return[24,28,34][Math.max(0,Math.min(2,n-1))]}function ty(n){return 100+Math.max(0,n)*6}function ny(n,e,t){const i=e==="left"?"leftArmHp":"rightArmHp",r=n[i];return r<=0?"destroyed":(n[i]=Math.max(0,r-Math.max(0,t)),n.leftArmHp<=0&&n.rightArmHp<=0?"defeated":r>0&&n[i]===0?"arm-destroyed":"hit")}const iy=document.querySelector("#game"),gd=vr.escape.stageCount,Aa=gd-1,ke=30,ry=602,_d=matchMedia("(pointer:coarse)").matches||innerWidth<700,tu=_d||navigator.deviceMemory&&navigator.deviceMemory<=4;let Cn=tu;const qn=new LS,Rt=new PS({antialias:!1,powerPreference:"high-performance"});Rt.setPixelRatio(Math.min(devicePixelRatio,Cn?1:1.5));Rt.setSize(innerWidth,innerHeight);Rt.shadowMap.enabled=!Cn;Rt.shadowMap.type=mf;Rt.outputColorSpace=Dt;Rt.toneMapping=_f;Rt.toneMappingExposure=1.05;iy.appendChild(Rt.domElement);const zt=new Jm;zt.background=new st(1582379);zt.fog=new Xl(1582379,34,78);const Hn=new nn(58,innerWidth/innerHeight,.1,130);zt.add(new z0(11191485,1120285,1.25));const gi=new X0(13163743,2.2);gi.position.set(-12,18,-8);gi.castShadow=!Cn;gi.shadow.mapSize.set(Cn?512:2048,Cn?512:2048);gi.shadow.camera.left=-18;gi.shadow.camera.right=18;gi.shadow.camera.top=24;gi.shadow.camera.bottom=-6;zt.add(gi);function sy(n,e,t){const i=document.createElement("canvas");i.width=i.height=32;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.fillStyle=e,r.fillRect(0,0,32,32);let s=n.length*997;const o=()=>(s=s*1664525+1013904223>>>0)/4294967296;if(n==="brick"){r.strokeStyle=t,r.lineWidth=2;for(let c=0;c<=32;c+=8){r.beginPath(),r.moveTo(0,c),r.lineTo(32,c),r.stroke();for(let l=c/8%2?0:8;l<32;l+=16)r.beginPath(),r.moveTo(l,c),r.lineTo(l,c+8),r.stroke()}}if(n==="tile"){r.strokeStyle=t,r.lineWidth=1;for(let c=0;c<33;c+=8)r.beginPath(),r.moveTo(c,0),r.lineTo(c,32),r.stroke();for(let c=0;c<33;c+=8)r.beginPath(),r.moveTo(0,c),r.lineTo(32,c),r.stroke()}if(n==="metal"){r.fillStyle=t;for(let c of[2,28])for(let l of[2,28])r.fillRect(c,l,2,2);r.fillStyle="#ffffff18",r.fillRect(0,4,32,2),r.fillRect(0,19,32,1)}if(n==="stripe"){r.fillStyle=t;for(let c=-32;c<64;c+=12)r.beginPath(),r.moveTo(c,32),r.lineTo(c+8,32),r.lineTo(c+40,0),r.lineTo(c+32,0),r.fill()}n==="crate"&&(r.strokeStyle=t,r.lineWidth=3,r.strokeRect(2,2,28,28),r.beginPath(),r.moveTo(3,3),r.lineTo(29,29),r.moveTo(29,3),r.lineTo(3,29),r.stroke());for(let c=0;c<36;c++){r.fillStyle=o()>.5?"#ffffff10":"#00000012";const l=o()>.85?2:1;r.fillRect(Math.floor(o()*32),Math.floor(o()*32),l,l)}const a=new Gi(i);return a.magFilter=Gt,a.minFilter=Gn,a.colorSpace=Dt,a}const nt=(n,e,t,i=0)=>new Nt({map:sy(n,e,t),roughness:.88,metalness:n==="metal"?.55:.05,emissive:i||0,emissiveIntensity:i?1.35:0}),C={brick:nt("brick","#47545a","#2c353a"),brickDark:nt("brick","#303b40","#1c2529"),floor:nt("tile","#7c817b","#606661"),floorDark:nt("tile","#4d5858","#343e40"),metal:nt("metal","#55636a","#1e282d"),rust:nt("metal","#754932","#34251f"),bar:nt("metal","#273238","#7f8e91"),orange:nt("stripe","#d66f1c","#f09b35"),hazard:nt("stripe","#191d20","#d88b18",7086592),toxic:nt("tile","#405f26","#99d135",3235081),water:nt("tile","#173e42","#247d77",471346),ice:nt("tile","#76aeb7","#bce7e5",1523270),crate:nt("crate","#82552d","#4b301c"),green:nt("metal","#719a29","#d0ff63",6133005),greenOff:nt("metal","#3e4c42","#1d2622"),red:nt("stripe","#8e281e","#e96a36",8261640),white:nt("tile","#b9bdac","#83897e"),black:nt("metal","#171d20","#485359"),skin:new Nt({color:14129776,roughness:1}),hair:new Nt({color:2694167,roughness:1})},Pt=new ct;zt.add(Pt);const Zt=[],$n=[],en=[],nu=[],vd=[],iu=9.8,xd=9.5;function ce(n,e,t,i,r,s,o=C.brick,a=!1,c=!0,l=Pt){const u=new Ht(new Hi(i,r,s),o);return u.position.set(n,e,t),u.castShadow=c,u.receiveShadow=!0,l.add(u),a&&Zt.push(u),u}function Wt(n,e,t,i,r,s,o=C.red){const a=ce(n,e,t,i,r,s,o,!1,!0);return $n.push(a),a}function Sd(n,e,t="#e8e8d8"){const{canvas:i,context:r}=n.userData;r.clearRect(0,0,i.width,i.height),r.fillStyle="#10171dcc",r.fillRect(8,20,496,88),r.strokeStyle="#87938e",r.lineWidth=5,r.strokeRect(8,20,496,88),r.fillStyle=t,r.font=`900 ${e.length>22?28:e.length>16?34:42}px monospace`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,256,64),n.material.map.needsUpdate=!0}function bt(n,e,t,i,r=1,s="#e8e8d8",o=Pt){const a=document.createElement("canvas");a.width=512,a.height=128;const c=a.getContext("2d");c.imageSmoothingEnabled=!1;const l=new Qm(new Bf({map:new Gi(a),transparent:!0}));return l.userData={canvas:a,context:c},Sd(l,n,s),l.position.set(e,t,i),l.scale.set(6.4*r,1.6*r,1),o.add(l),l}function cs(n,e,t=1,i=6){for(let r=-i/2;r<=i/2;r+=1)ce(n,2.1,e+r,.13,4.2,.13,C.bar,!1,!1);ce(n,4.05,e,.18,.18,i+.5,C.bar),ce(n,.15,e,.18,.18,i+.5,C.bar)}function _i(n,e,t,i,r="z",s=C.rust,o=Pt){ce(n,e,t,...r==="z"?[.34,.34,i]:r==="x"?[i,.34,.34]:[.34,i,.34],s,!1,!0,o);for(let c=-1;c<=1;c+=2){const l=r==="z"?[n,e,t+c*i/2]:r==="x"?[n+c*i/2,e,t]:[n,e+c*i/2,t];ce(...l,.52,.52,.28,s,!1,!0,o)}}function oy(n,e){ce(n,9.25,e,2.2,.18,.8,C.metal);const t=ce(n,9.1,e,1.55,.08,.45,new Nt({color:16766074,emissive:16756782,emissiveIntensity:2}));vd.push(t);const i=new V0(16762219,11,17,2);i.position.set(n,8.6,e),Pt.add(i)}function aa(n,e,t=1){ce(n,.52,e,2.5,.18,1.1,C.metal),ce(n,2.05,e,2.5,.18,1.1,C.metal);for(let i of[-1.1,1.1])ce(n+i,.95,e,.13,2.9,.13,C.bar);ce(n,.66,e,2.2,.22,.9,C.white),ce(n,2.2,e,2.2,.22,.9,C.white),ce(n+t*.7,.86,e,52/100,.18,.65,C.brickDark)}function ay(n,e=C.floor,t=C.brick,i=!1){const r=n*ke+ke/2;ce(0,-.35,r,15,.7,ke,e,!0),i?(ce(-7.5,1,r,.5,2,ke,t,!0),ce(7.5,1,r,.5,2,ke,t,!0)):(ce(-7.5,4.8,r,.6,9.6,ke,t,!0),ce(7.5,4.8,r,.6,9.6,ke,t,!0),ce(0,iu,r,15,.4,ke,C.brickDark,!0));for(let s=-12;s<=12;s+=6)ce(0,xd,r+s,15,.35,.35,C.metal),!i&&s%12===0&&oy(0,r+s)}const cy=["牢房区 · 01","洗衣封锁区 · 02","地下排污渠 · 03","锅炉房 · 04","安检走廊 · 05","监狱厨房 · 06","通风管道 · 07","放风操场 · 08","警戒屋顶 · 09","假撤离点 · 10","监狱厕所入口 · 11","四选一隔间 · 12","厕所下水道 · 13","维修竖井 · 14","守卫营房 · 15","押运车库 · 16","外圈排水渠 · 17","探照灯广场 · 18","外墙脚手架 · 19","最终停机坪 · 20"],ly=["翻过牢房警戒线","避开横冲直撞的洗衣车","踩着浮箱越过污水渠","躲开旋转的高温管道","穿过交错的安检闸门","跳过灼热炉台","沿维修踏板爬出风管","穿过带刺封锁区","避开屋顶排风扇","突破假撤离点的封锁","进入监狱厕所","正确位置固定，靠近四扇相同的门选择","沿厕所地洞爬过下水道","沿维修平台穿过竖井","跳过营房警戒线","避开移动的押运车辆","踩着旧箱越过外圈污水","穿过交错的探照光束","沿脚手架登上外墙","击败梅东，抵达直升机"],ru=Array.from({length:vr.math.stageCount},(n,e)=>`数学教室 · ${String(e+1).padStart(2,"0")}`),yd=ru.map((n,e)=>`答对梅东老师的第 ${e+1} 道题`),uy=id.map((n,e)=>`${n.name} · ${String(e+1).padStart(2,"0")}`),hy=id.map((n,e)=>e<fi.length?`${n.mission}，营救 ${fi[e].name}`:n.mission),Md=Array.from({length:vr.rosister.stageCount},(n,e)=>`萝姐挑战 · ${String(e+1).padStart(2,"0")}`),Ed=Md.map((n,e)=>`在倒计时结束前答对第 ${e+1} 题，解锁下一个检查点`),fy={escape:cy,math:ru,rescue:uy,rosister:Md},dy={escape:ly,math:yd,rescue:hy,rosister:Ed};[C.floor,C.floorDark,C.floorDark,C.floorDark,C.floor,C.floor,C.metal,C.floorDark,C.black,C.black,C.floorDark,C.crate,C.ice,C.metal,C.floor,C.black,C.floorDark,C.floorDark,C.metal,C.black].forEach((n,e)=>ay(e,n,e>6?C.brickDark:C.brick,e>=7));for(let n of[7,14,21])cs(-6.7,n,1,5),cs(6.7,n,-1,5),aa(-5.25,n,-1),aa(5.25,n,1);for(let n of[9,16,23])Wt(0,.58,n,13,.22,.28,C.red);bt("CELL BLOCK A",0,4.3,5,.8,"#ffb140");for(let n=35;n<57;n+=5)for(let e of[-6.3,6.3]){ce(e,1.2,n,1.6,2.4,1.6,C.white);const t=new Ht(new Sa(.5,.5,.12,12),C.black);t.rotation.x=Math.PI/2,t.position.set(e,1.2,n+(e<0?.86:-.86)),Pt.add(t)}for(let n=0;n<4;n++){const e=Wt(n%2?-5:5,.55,38+n*5,2.5,1.1,1.5,C.orange);e.userData={move:"x",base:e.position.x,amp:8.3,speed:1.05+n*.08,phase:n*1.4},en.push(e)}Wt(0,.03,75,14,.15,22,C.toxic);_i(-6.7,2.6,75,24,"z",C.rust);_i(6.7,1.3,75,24,"z",C.metal);const py=[[-1.5,-9],[0,-5.2],[1.5,-1.4],[0,2.4],[-1.5,6.2],[0,9.5]];py.forEach(([n,e],t)=>ce(n,.32,75+e,3.2,.65,2.9,t%2?C.crate:C.metal,!0));for(let n of[95,108])for(let e of[-5.8,5.8])ce(e,1.6,n,2.1,3.2,3.2,C.rust),_i(e,3.4,n,2.5,"y",C.rust);for(let n=0;n<2;n++){const e=new ct;e.position.set(0,.55,99+n*11),Pt.add(e);const t=ce(0,0,0,7.2,.32,.4,C.hazard,!1,!0,e);$n.push(t),e.userData={rotate:!0,speed:.52+n*.12},en.push(e)}for(let n=0;n<5;n++){const e=126+n*5,t=n%2?-4.6:4.6;ce(0,4.3,e,14,.5,.65,C.metal);for(let i=-5.5;i<=5.5;i+=1.55)Math.abs(i-t)>1.2&&Wt(i,1.85,e,.52,3.7,.52,C.red)}for(let n of[157,164,171])for(let e of[-5.7,5.7])ce(e,1,n,2.6,2,3.3,C.metal,!0);Wt(0,.06,165,13,.16,20,C.red);[-8,-4,0,4,8].forEach((n,e)=>ce(e%2?1.6:-1.6,.35,165+n,3.3,.7,2.6,C.white,!0));for(let n=185,e=0;n<207;n+=4,e++)ce(e%2?1.35:-1.35,.25+(n-185)*.045,n,3.2,.5,2.6,C.metal,!0),_i(-6.6,3,n,8,"z",C.metal);for(let n=0;n<2;n++){const e=new ct;e.position.set(0,1.3,190+n*12),Pt.add(e);for(let t=0;t<4;t++){const i=Wt(0,0,0,5.5,.24,.55,C.black);i.rotation.y=t*Math.PI/2,e.add(i)}e.userData={rotate:!0,speed:2.1},en.push(e)}for(let n=215;n<237;n+=3.5)cs(-7.1,n,1,3),cs(7.1,n,-1,3);for(let n=0;n<16;n++){const e=-4.5+n%4*3,t=218+Math.floor(n/4)*5,i=new Ht(new Yl(.5,1.5,4),C.bar);i.position.set(e,.73,t),i.rotation.y=Math.PI/4,i.castShadow=!0,Pt.add(i),$n.push(i)}ce(-5.8,2.4,236,2.4,4.8,2.4,C.brickDark);ce(5.8,2.4,236,2.4,4.8,2.4,C.brickDark);for(let n=247;n<267;n+=5)ce(-5.7,.75,n,2,1.5,2,C.metal),ce(5.7,.75,n,2,1.5,2,C.metal);for(let n=0;n<4;n++){const e=Wt(n%2?-5:5,.75,247+n*5,3,1.5,1.1,C.black);e.userData={move:"x",base:e.position.x,amp:8,speed:1.28,phase:n},en.push(e)}for(let n=0;n<4;n++){const e=Wt(0,.55,278+n*5,11,.25,.32,C.red);e.userData={move:"y",base:.55,amp:1.65,speed:1.8,phase:n*.8},en.push(e)}for(let n=307;n<=327;n+=5)for(const e of[-5.8,5.8])ce(e,1.45,n,2.2,2.9,1.25,C.crate,!0),ce(e,3.2,n,2.2,.22,1.25,C.metal);for(let n=0;n<4;n++){const e=n%2?-2.8:2.8,t=309+n*5.2;ce(e,.55,t,4.2,1.1,1.2,n%2?C.metal:C.crate,!0)}bt("ARCHIVE  RESTRICTED",0,4.7,305,.62,"#f4c66e");Wt(0,.03,345,14,.15,20,C.water);const my=[[-2.5,337],[0,341],[2.5,345],[0,349],[-2.5,353],[0,356]];my.forEach(([n,e],t)=>ce(n,.34,e,2.8,.68,2.5,t%2?C.crate:C.metal,!0));for(const n of[337,356])for(const e of[-6.1,6.1])ce(e,1.4,n,1.5,2.8,2.2,C.crate);for(let n=367,e=0;n<=387;n+=6.7,e++){const t=Wt(e%2?-5:5,.72,n,3.1,1.45,1.35,C.ice);t.userData={move:"x",base:t.position.x,amp:8.1,speed:.86+e*.07,phase:e*1.2},en.push(t)}for(const n of[365,375,385])for(const e of[-6.35,6.35])ce(e,1.2,n,1.5,2.4,2.2,C.ice);bt("COLD STORAGE",0,4.7,364,.62,"#a9f3ff");for(let n=397,e=0;n<=417;n+=5,e++)ce(e%2?-4.9:4.9,.65,n,2.6,1.3,2.2,C.metal,!0);{const n=Wt(0,.5,lr.staticBeamZ,lr.staticBeamWidth,.18,.3,C.hazard);n.userData.hitPad=lr.hitPadding}{const n=new ct;n.position.set(0,.5,408),Pt.add(n);const e=ce(0,0,0,lr.rotatingArmLength,.22,.34,C.hazard,!1,!0,n);e.userData.hitPad=lr.hitPadding,$n.push(e),n.userData={rotate:!0,speed:lr.rotatingArmSpeed},en.push(n)}for(const n of[425,432,439,446])aa(-5.2,n,-1),aa(5.2,n,1);for(const n of[428,436,444])Wt(0,.58,n,12.6,.22,.28,C.red);bt("GUARD BARRACKS",0,4.7,424,.62,"#ff9d63");for(const n of[456,468])ce(-5.8,.8,n,2.3,1.6,3.6,C.black),ce(5.8,.8,n+5,2.3,1.6,3.6,C.black);for(let n=0;n<3;n++){const e=Wt(n%2?-5:5,.78,458+n*7.3,3.6,1.55,1.6,C.black);e.userData={move:"x",base:e.position.x,amp:7.8,speed:.78+n*.08,phase:n*1.5},en.push(e)}bt("TRANSFER GARAGE",0,4.7,454,.62,"#ffbd4d");Wt(0,.03,495,14,.15,20,C.toxic);const gy=[[2.5,487],[0,491],[-2.5,495],[0,499],[2.5,503],[0,506]];gy.forEach(([n,e],t)=>ce(n,.34,e,2.8,.68,2.5,t%2?C.metal:C.crate,!0));_i(-6.7,2.1,495,22,"z",C.rust);_i(6.7,3.3,495,22,"z",C.metal);for(const[n,e]of[[520,.82],[531,-.95]]){const t=new ct;t.position.set(0,.55,n),Pt.add(t);const i=Wt(0,0,0,11,.22,.42,C.red);t.add(i),t.userData={rotate:!0,speed:e},en.push(t)}for(const n of[516,526,536]){const e=new H0(16770208,18,24,.38,.45,1.2);e.position.set(n%2?5:-5,7,n),e.target.position.set(0,0,n+3),Pt.add(e,e.target)}bt("SEARCHLIGHT YARD",0,4.7,514,.62,"#ffef9a");Wt(0,.03,555,14,.15,22,C.water);const _y=[[-2.5,546,.28],[0,550,.48],[2.5,554,.68],[0,558,.88],[-2.5,562,1.08],[0,566,.72]];_y.forEach(([n,e,t],i)=>{ce(n,t,e,3,.55,2.6,i%2?C.metal:C.crate,!0),_i(n,t+1.3,e,2.6,"y",C.rust)});cs(-7,555,1,24);cs(7,555,-1,24);{const n=Wt(0,.55,578,11.5,.25,.34,C.red);n.userData={move:"y",base:.55,amp:1.65,speed:1.55,phase:0},en.push(n)}const Dn=new ct;Dn.position.set(-4.8,0,575);Pt.add(Dn);ce(0,.12,0,2.3,.24,2.3,C.green,!1,!0,Dn);ce(0,.78,0,1.45,.5,.45,C.green,!1,!0,Dn);ce(.65,.63,0,.75,.22,.22,C.metal,!1,!0,Dn);ce(-.45,.48,0,.3,.55,.28,C.black,!1,!0,Dn);bt("💵 MONEY GUN",0,2.25,0,.38,"#d6ff68",Dn);ce(0,-.25,600.8,15,.5,4,C.black,!0);ce(0,.03,600.8,12,.08,3.5,C.hazard);const zi=new ct;zi.position.set(0,3.3,602);Pt.add(zi);ce(0,0,0,5,2.2,3,C.black,!1,!0,zi);ce(0,.8,-2.4,1.1,1,3.2,C.black,!1,!0,zi);ce(0,1.5,0,10,.15,.28,C.bar,!1,!0,zi);ce(0,.2,2.1,2.7,1.5,1.5,C.black,!1,!0,zi);bt("FINAL EVAC  →",0,5.1,597,.78,"#bfff4f");for(const n of[...Zt,...$n])n.userData.modes=["escape","rescue"];const bd=new Set(rd),Td=[],ca=new R;zt.updateMatrixWorld(!0);for(const n of[...Pt.children]){n.getWorldPosition(ca);const e=Math.floor(ca.z/ke);bd.has(e)&&Td.push(n)}for(const n of[...Zt,...$n]){n.getWorldPosition(ca);const e=Math.floor(ca.z/ke);bd.has(e)&&(n.userData.modes=["escape"])}const Sr=new ct;zt.add(Sr);Sr.visible=!1;const wd=nt("tile","#253c4a","#3d6478"),su=nt("brick","#314b5d","#1a2d3a"),hn=nt("metal","#28627a","#7bd1eb",1064786),_s=nt("metal","#59476e","#b083d0",3284293),vs=nt("stripe","#4a2638","#ef6384",6034731),vy=nt("tile","#26464b","#5bb6bd",868165),lo=nt("tile","#aeb9b5","#687976");function rt(n,e,t,i,r,s,o=su,a=!1,c=!0,l=Sr){const u=ce(n,e,t,i,r,s,o,a,c,l);return u.userData.modes=["rescue"],u}function vi(n,e,t,i,r,s,o=vs,a=Sr){const c=rt(n,e,t,i,r,s,o,!1,!0,a);return $n.push(c),c}function ou(n,e,t,i,r="z",s=hn,o=Sr){rt(n,e,t,...r==="z"?[.34,.34,i]:r==="x"?[i,.34,.34]:[.34,i,.34],s,!1,!0,o);for(let c=-1;c<=1;c+=2){const l=r==="z"?[n,e,t+c*i/2]:r==="x"?[n+c*i/2,e,t]:[n,e+c*i/2,t];rt(...l,.52,.52,.28,s,!1,!0,o)}}function xy(n,{open:e=!1,floor:t=wd,walls:i=su}={}){const r=n*ke+ke/2;rt(0,-.35,r,15,.7,ke,t,!0),e?(rt(-7.5,1,r,.5,2,ke,i,!0),rt(7.5,1,r,.5,2,ke,i,!0)):(rt(-7.5,4.8,r,.6,9.6,ke,i,!0),rt(7.5,4.8,r,.6,9.6,ke,i,!0),rt(0,iu,r,15,.4,ke,C.black,!0));for(let s=-12;s<=12;s+=6)rt(0,xd,r+s,15,.28,.28,hn)}function On(n,e,t="#94e7ff"){bt(e,0,5.9,n*ke+5,.58,t,Sr)}for(const n of rd)xy(n,{open:[1,5,8,13].includes(n),floor:[5,8].includes(n)?C.black:wd,walls:n===3?lo:su});On(0,"UNDERGROUND CONTACT");for(const[n,e]of[[11,-4.6],[16,4.6],[21,-4.6],[26,4.6]])for(const t of[-4.5,0,4.5])Math.abs(t-e)>1.4&&rt(t,1,n,4,2,.75,C.crate,!0);for(const[n,e]of[[-5.7,7],[5.7,19],[-5.7,25]])rt(n,.8,e,1.7,1.6,2.2,hn,!0);On(1,"K9 PATROL YARD","#ffd17d");for(const[n,e]of[[-5.4,38],[5.4,42],[-5.4,49],[5.4,54]])rt(n,1,e,2.8,2,3,C.black,!0),rt(n,2.15,e,3.1,.22,3.3,hn);for(let n=0;n<2;n++){const e=vi(0,.34,44+n*8,2.2,.18,1.1,vs);Object.assign(e.userData,{move:"x",base:0,amp:4.5,speed:.58+n*.08,phase:n*2.2}),en.push(e)}On(2,"HIGH VOLTAGE","#8cecff");for(const[n,e]of[[-5.5,68],[5.5,74],[-5.5,82],[5.5,88]])rt(n,1.45,e,2.2,2.9,2.3,_s,!0),ou(n,3.25,e,2.2,"y",hn);for(const[n,e]of[[71,-2.6],[77,2.6],[83,-2.6],[89,2.6]])vi(e,.08,n,7,.16,.55,hn);for(const[n,e]of[[-1.5,66],[0,84.5]])rt(n,.18,e,3,.36,2.6,lo,!0);On(3,"ISOLATION WARD","#d8fff2");for(const n of[98,106,114])for(const e of[-5.8,5.8])rt(e,.8,n,2.2,1.6,2.7,lo,!0),rt(e,1.75,n,1.6,.2,2.1,hn);for(let n=0;n<3;n++){const e=vi(0,.52,100+n*6.2,2.8,1.04,1.3,n%2?_s:vs);Object.assign(e.userData,{move:"x",base:0,amp:4.1,speed:.5+n*.05,phase:n*1.7}),en.push(e)}On(4,"VISITOR CHECK-IN","#ffd993");for(const[n,e]of[[130,-4.4],[136,4.4],[142,-4.4],[148,4.4]])for(const t of[-4.7,0,4.7])Math.abs(t-e)>1.6&&rt(t,1.15,n,4.1,2.3,.55,_s,!0);for(const[n,e]of[[-5.8,126],[5.8,139],[-5.8,146]])rt(n,1.45,e,2,2.9,1.2,C.crate,!0);On(5,"FREIGHT LIFT SHAFT","#f3bf68");vi(0,.03,165,13,.16,21,C.black);for(const[n,e]of sd.freight)rt(n,.36,e,3.4,.72,2.9,C.crate,!0);for(const n of[-6.2,6.2])ou(n,2.2,165,22,"z",C.rust),rt(n,4.2,165,1.4,8.4,5,hn,!0);On(6,"SERVER SURVEILLANCE","#bba4ff");for(const[n,e]of[[-5.7,187],[5.7,193],[-5.7,201],[5.7,207]]){rt(n,1.8,e,2.2,3.6,2.3,_s,!0);for(const t of[.7,1.5,2.3])rt(n,t,e-1.18,1.4,.12,.12,hn)}for(const[n,e]of[[191,-2.8],[198,2.8]])vi(e,.45,n,7.2,.15,.36,vs);rt(-1.35,.2,185,3,.4,2.6,lo,!0);rt(0,.45,201,3.2,.9,2.8,C.crate,!0);rt(1.35,.7,205,3.2,1.4,3,lo,!0);On(7,"WASTE COMPACTOR","#ff9b78");for(const[n,e]of[[-5.8,219],[5.8,225],[-5.8,232]])rt(n,1.2,e,2.5,2.4,4,C.rust,!0);for(let n=0;n<3;n++){const e=vi(0,.72,220+n*7,3,1.44,1.5,n%2?C.rust:vs);Object.assign(e.userData,{move:"x",base:0,amp:4.2,speed:.45+n*.05,phase:n*1.9}),en.push(e)}On(8,"DRAINAGE PUMP ROOM","#72e3dd");vi(0,.03,257,13,.16,22,vy);for(const[n,e]of sd.pump)rt(n,.34,e,3.3,.68,2.8,hn,!0);for(const[n,e]of[[-5.7,250],[5.7,261]])rt(n,1.7,e,2.4,3.4,3.8,_s,!0),ou(n,3.65,e,3.2,"y",hn);On(9,"FORGED ID VAULT","#e6c9ff");for(const[n,e]of[[-5.7,278],[5.7,283],[-5.7,290],[5.7,296]])for(const t of[.7,1.7,2.7])rt(n,t,e,2.3,.72,1.4,t===1.7?_s:C.crate,!0);for(const[n,e]of[[282,-4.5],[288,4.5],[294,-4.5]]){rt(0,4.2,n,14,.36,.5,hn);for(let t=-5.7;t<=5.7;t+=1.4)Math.abs(t-e)>1.45&&vi(t,1.75,n,.28,3.5,.38,vs)}On(13,"UNDERGROUND TRANSFER","#ffc66f");rt(0,.04,407,2.1,.08,23,hn);for(const n of[-6.2,6.2])rt(n,.55,405,1.2,1.1,24,C.rust,!0);for(let n=0;n<3;n++){const e=vi(0,.65,401+n*7,3.2,1.3,1.45,n%2?C.black:C.rust);Object.assign(e.userData,{move:"x",base:0,amp:4.3,speed:.5+n*.06,phase:n*1.6}),en.push(e)}for(const[n,e]of[[-5.3,397],[5.3,405],[-5.3,415]])rt(n,.8,e,2.2,1.6,3,C.crate,!0);const dr=new ct,au=[],Ad=[];zt.add(dr);dr.visible=!1;function En(n,e,t,i,r,s,o=C.brick,a=!1,c=!0){const l=ce(n,e,t,i,r,s,o,a,c,dr);return l.userData.modes=["math"],l}for(let n=0;n<vr.math.stageCount;n++){const e=n*ke,t=e+ke/2;En(0,-.35,t,15,.7,ke,C.floor,!0),En(-7.5,4.8,t,.6,9.6,ke,C.brick,!0),En(7.5,4.8,t,.6,9.6,ke,C.brick,!0),En(0,iu,t,15,.4,ke,C.brickDark,!0),En(0,3.2,e+20,8.8,4,.32,C.black),En(0,1.18,e+19.78,9.5,.18,.55,C.crate),bt(`MATH  EXAM  ${String(n+1).padStart(2,"0")}`,0,6.15,e+19.6,.55,"#dff6d2",dr),Ad.push(bt("等待梅东出题",0,3.35,e+19.72,.72,"#f0f5de",dr));for(const i of[7,11,15])for(const r of[-3,0,3]){En(r,.72,e+i,2.1,.18,1.15,C.crate),En(r,1.25,e+i+.45,2,.9,.14,C.metal);for(const s of[-.78,.78])En(r+s,.34,e+i,.12,.7,.12,C.metal)}En(0,9.25,e+9,2.2,.18,.8,C.metal),En(0,9.1,e+9,1.55,.08,.45,new Nt({color:16766074,emissive:16756782,emissiveIntensity:2}))}function Rd(n,e=Pt,t=nu,i="CHECKPOINT"){const r=n*ke+2,s=new ct;s.position.set(0,0,r),e.add(s);const o=ce(0,.08,0,4.8,.16,2.5,C.greenOff,!1,!0,s),a=ce(0,.2,0,3.9,.18,1.75,C.greenOff,!1,!0,s),c=ce(-2.05,1.1,0,.42,2.1,.42,C.greenOff,!1,!0,s);ce(-2.05,2.1,0,1.15,.12,.12,C.bar,!1,!0,s);const l=ce(-1.55,1.72,0,.9,.55,.08,C.greenOff,!1,!0,s),u=bt(i,-4.25,2.55,.1,.38,"#bfff57",s);s.userData={pad:o,rim:a,beacon:c,flag:l,marker:u,index:n},t.push(s)}for(let n=0;n<gd;n++)Rd(n);for(let n=0;n<vr.math.stageCount;n++)Rd(n,dr,au,"DESK CHECKPOINT");zt.updateMatrixWorld(!0);const Cd=[],$r=new R;for(const n of[...Pt.children])n.getWorldPosition($r),!nu.includes(n)&&$r.z>=300&&$r.z<390&&Cd.push(n);for(const n of[...Zt,...$n])n.getWorldPosition($r),$r.z>=300&&$r.z<390&&(n.userData.modes=[]);const _n=new ct,Zr=[],la=[],cu=[];Pt.add(_n);_n.visible=!1;const js=nt("tile","#aeb7ae","#69736d"),Sy=nt("tile","#66716f","#343e3e"),yy=nt("metal","#62736e","#263733"),My=nt("stripe","#74c8ee","#f2f1e8"),lu=nt("brick","#394b49","#1e302e"),Ey=new ms({transparent:!0,opacity:0,depthWrite:!1});function ot(n,e,t,i,r,s,o=C.white,a=!1,c=!0,l=_n){const u=ce(n,e,t,i,r,s,o,a,c,l);return u.userData.modes=["escape","rescue"],u}function Pd(n,e=9.8,t=7.5){ot(0,-.35,n,15,.7,30,Sy,!0),ot(-t,4.8,n,.6,9.6,30,js,!0),ot(t,4.8,n,.6,9.6,30,js,!0),ot(0,e,n,15,.4,30,C.brickDark,!0)}Pd(315);Pd(345);bt("PRISON  RESTROOM",0,6.4,304,.68,"#d9f1df",_n);ot(0,.03,305,12,.08,2.2,C.black);ot(0,.08,305,10.6,.1,1.45,C.white);for(const n of[310,316,322])ot(-5.85,1,n,2.1,.32,1.4,C.white),ot(-5.85,1.52,n+.42,1.4,1.15,.18,C.metal),ot(-5.85,2.3,n+.46,1.65,1.05,.12,C.black),_i(5.9,1.7,n,4.2,"y",C.rust,_n);bt("进入厕所  →",0,4.8,326,.56,"#f3d989",_n);const ea=[-5.1,-1.7,1.7,5.1],Tl=344;for(const n of[-6.75,-3.4,0,3.4,6.75])ot(n,1.75,349,.18,3.5,10,js,!0);ot(0,3.55,349,13.5,.22,10,js,!0);ot(0,1.8,354,13.5,3.6,.3,js,!0);bt("四扇门 · 只有一条生路",0,6.15,339,.55,"#ffdf82",_n);function Zh(n){ot(0,.44,.35,1.1,.5,1.25,C.white,!1,!0,n),ot(0,.9,.78,1.05,1.2,.45,C.white,!1,!0,n),ot(0,.72,-.08,.72,.26,.8,C.black,!1,!0,n)}const by=Ud();for(const n of ea){const e=new ct;e.position.set(n-1.08,0,Tl),_n.add(e);const t=ot(1.08,1.38,0,2.16,2.76,.18,yy,!1,!0,e);ot(1.78,1.35,-.13,.13,.13,.15,C.greenOff,!1,!0,e),e.userData={targetRotation:0,door:t},Zr.push(e);const i=ot(n,1.38,Tl,2.2,2.76,.24,Ey,!0,!1);i.userData.dynamicBounds=!0,la.push(i);const r=new ct,s=new ct,o=new ct;for(const a of[r,s,o])a.position.set(n,0,349),a.visible=!1,_n.add(a);ot(0,.025,0,2.15,.05,2.45,C.black,!1,!1,r);for(const a of[-1.18,1.18])ot(a,.12,0,.18,.24,2.7,C.rust,!1,!0,r);bt("下水道入口",0,1.15,.3,.3,"#9ed9b5",r),Zh(s),ot(0,1.25,.12,.72,.48,1.15,C.toxic,!1,!0,s),ot(0,1.62,-.2,.64,.55,.62,C.skin,!1,!0,s),bt("☠  发臭",0,2.85,.3,.3,"#b7e05b",s),Zh(o),ot(0,1.42,.33,1.02,1.05,.66,My,!1,!0,o),ot(0,2.2,.18,.76,.76,.7,[C.skin,C.skin,C.hair,C.skin,by,C.skin],!1,!0,o),ot(0,2.55,.16,.8,.24,.72,C.hair,!1,!0,o),ot(-.55,1.45,.05,.26,.82,.3,C.skin,!1,!0,o),ot(.55,1.45,.05,.26,.82,.3,C.skin,!1,!0,o),bt("梅东",0,3.15,.25,.28,"#8edcff",o),cu.push({tunnel:r,corpse:s,medong:o})}ot(0,-.35,375,15,.7,30,lu,!0);ot(-5.2,4.8,375,.6,9.6,30,lu,!0);ot(5.2,4.8,375,.6,9.6,30,lu,!0);ot(0,9.8,375,10.8,.4,30,C.brickDark,!0);ot(-5.95,1.2,375,1.05,2.4,30,C.water);ot(5.95,1.2,375,1.05,2.4,30,C.water);for(const n of[366,374,382,388])_i(-4.55,2.2,n,8.5,"z",C.rust,_n),ot(0,.08,n,8.3,.16,.35,C.metal);bt("SEWER  ESCAPE  →",0,4.75,365,.58,"#9ed9b5",_n);const It={layout:[...cd],opened:-1,resolving:!1,timers:[]};function Ty(){const n=document.createElement("canvas");n.width=n.height=16;const e=n.getContext("2d");e.fillStyle="#d79a70",e.fillRect(0,0,16,16),e.fillStyle="#2b201c",e.fillRect(3,6,3,3),e.fillRect(10,6,3,3),e.fillRect(5,12,6,1);const t=new Gi(n);return t.magFilter=Gt,t.colorSpace=Dt,new Nt({map:t,roughness:1})}function et(n,e,t,i){const r=new Ht(new Hi(n,e,t),i);return r.castShadow=!0,r}const Ld=Ty(),xe=new ct;zt.add(xe);const Vr=et(1.05,1.2,.65,C.orange),nr=et(.82,.82,.78,[C.skin,C.skin,C.hair,C.skin,Ld,C.skin]),ir=et(.86,.28,.81,C.hair),Ri=et(.36,.82,.38,C.hair),Ci=et(.42,.72,.46,C.orange),Pi=et(.42,.72,.46,C.orange),ui=et(.3,1.05,.36,C.skin),hi=et(.3,1.05,.36,C.skin),Bn=et(.31,.36,.37,C.orange),zn=et(.31,.36,.37,C.orange),Ra=et(.44,.2,.58,C.black),uu=Ra.clone();Vr.position.y=1.25;nr.position.y=2.27;ir.position.y=2.63;Ri.position.set(0,2.28,-.48);Ri.visible=!1;Ci.position.set(-.29,.45,0);Pi.position.set(.29,.45,0);ui.position.set(-.72,1.3,0);hi.position.set(.72,1.3,0);Bn.position.y=.34;zn.position.y=.34;ui.add(Bn);hi.add(zn);Ra.position.set(-.29,.12,.08);uu.position.set(.29,.12,.08);xe.add(Vr,nr,ir,Ri,Ci,Pi,ui,hi,Ra,uu);const Kh=new Map;function di(n){return`#${n.toString(16).padStart(6,"0")}`}function zs(n,e="front"){const t=document.createElement("canvas");t.width=t.height=32;const i=t.getContext("2d"),r=di(n.color),s=di(n.accent);if(i.imageSmoothingEnabled=!1,i.fillStyle=r,i.fillRect(0,0,32,32),n.team==="portugal")i.fillStyle=s,i.fillRect(0,0,7,32),i.fillRect(12,0,8,3),i.fillStyle="#e7c44a",i.fillRect(7,4,2,5);else if(n.team==="brazil")i.fillStyle=s,i.fillRect(0,0,5,32),i.fillRect(27,0,5,32),i.fillRect(11,0,10,3),i.fillStyle="#2455a4",i.fillRect(14,4,4,3);else if(n.team==="croatia"){for(let a=0;a<32;a+=8)for(let c=0;c<32;c+=8)(c+a)/8%2===0&&(i.fillStyle=s,i.fillRect(c,a,8,8));i.fillStyle="#173f77",i.fillRect(11,0,10,3)}else n.team==="france"?(i.fillStyle="#f3f1ea",i.fillRect(13,0,3,32),i.fillStyle=s,i.fillRect(16,0,3,32),i.fillStyle="#d8b64a",i.fillRect(4,4,3,4)):n.team==="england"?(i.fillStyle=s,i.fillRect(0,0,32,5),i.fillRect(0,5,5,4),i.fillRect(27,5,5,4),i.fillStyle="#c92938",i.fillRect(13,0,6,2)):n.team==="norway"?(i.fillStyle="#f2f1e9",i.fillRect(10,0,8,32),i.fillStyle=s,i.fillRect(12,0,4,32),i.fillStyle="#f2f1e9",i.fillRect(0,8,32,7),i.fillStyle=s,i.fillRect(0,10,32,3)):n.team==="spain"&&(i.fillStyle=s,i.fillRect(0,0,5,32),i.fillRect(27,0,5,32),i.fillRect(11,0,10,3),i.fillStyle="#263b70",i.fillRect(5,5,3,4));e!=="side"&&(i.font=`900 ${e==="back"?18:13}px monospace`,i.textAlign="center",i.textBaseline="middle",i.lineWidth=3,i.strokeStyle=n.team==="brazil"||n.team==="croatia"||n.team==="england"?"#ffffff":"#101820",i.fillStyle=n.team==="brazil"?"#168447":n.team==="croatia"||n.team==="england"?"#1b2d50":"#ffffff",i.strokeText(String(n.number),16,e==="back"?18:20),i.fillText(String(n.number),16,e==="back"?18:20));const o=new Gi(t);return o.magFilter=Gt,o.minFilter=Gn,o.colorSpace=Dt,new Nt({map:o,roughness:.9})}function Dd(n){let e=Kh.get(n.name);if(e)return e;const t=zs(n,"side"),i=zs(n,"front"),r=zs(n,"back"),s=new Nt({color:n.shortsColor,roughness:.92});return e={body:[t,t,t,s,i,r],shorts:s},Kh.set(n.name,e),e}const Jh=new Map;function Tc(n,e="front"){const t=document.createElement("canvas");t.width=t.height=32;const i=t.getContext("2d");i.imageSmoothingEnabled=!1;const r=di(n.color),s=di(n.accent);i.fillStyle=r,i.fillRect(0,0,32,32),n.clubStyle==="arsenal"?(i.fillStyle="#ffffff",i.fillRect(0,0,7,32),i.fillRect(25,0,7,32),i.fillStyle="#172b50",i.fillRect(11,0,10,3)):n.clubStyle==="bayern"?(i.fillStyle="#f2f2e9",i.fillRect(0,4,32,4),i.fillStyle="#8d1020",i.fillRect(0,17,32,3),i.fillStyle="#ffffff",i.fillRect(12,0,8,3)):n.clubStyle==="real-gk"?(i.fillStyle="#111d2c",i.fillRect(0,0,5,32),i.fillRect(27,0,5,32),i.fillStyle=s,i.fillRect(12,0,8,3),i.fillStyle="#ffffff",i.fillRect(4,5,4,3)):n.clubStyle==="mancity"?(i.fillStyle=s,i.fillRect(0,0,5,32),i.fillRect(27,0,5,32),i.fillStyle="#ffffff",i.fillRect(11,0,10,3)):n.clubStyle==="barca"?(i.fillStyle=s,i.fillRect(5,0,5,32),i.fillRect(15,0,5,32),i.fillRect(25,0,5,32),i.fillStyle="#e7c14b",i.fillRect(12,0,2,32)):n.clubStyle==="real"&&(i.fillStyle=s,i.fillRect(0,0,4,32),i.fillRect(28,0,4,32),i.fillStyle="#d9b34d",i.fillRect(12,0,8,3)),e!=="side"&&(i.font=`900 ${e==="back"?18:13}px monospace`,i.textAlign="center",i.textBaseline="middle",i.lineWidth=3,i.strokeStyle="#101820",i.fillStyle="#ffffff",i.strokeText(String(n.number),16,e==="back"?18:20),i.fillText(String(n.number),16,e==="back"?18:20));const o=new Gi(t);return o.magFilter=Gt,o.minFilter=Gn,o.colorSpace=Dt,new Nt({map:o,roughness:.9})}function wy(n){let e=Jh.get(n.id);if(e)return e;const t=Tc(n,"side"),i=Tc(n,"front"),r=Tc(n,"back"),s=n.clubStyle==="arsenal"?15921902:n.clubStyle==="real-gk"?1515564:n.clubStyle==="barca"?1518440:n.clubStyle==="bayern"?14096672:n.clubStyle==="real"?15921902:16777215;return e={body:[t,t,t,new Nt({color:s,roughness:.92}),i,r],shorts:new Nt({color:s,roughness:.92}),side:t},Jh.set(n.id,e),e}const Kr=new Map;function Jr(n,e){const t=`${n.name}-${e}`;if(Kr.has(t))return Kr.get(t);const i=n.appearance,r=e==="skin"?i.skin:e==="accent"?i.hairAccent??i.hair:i.hair,s=new Nt({color:r,roughness:e==="skin"?1:.96});return Kr.set(t,s),s}function Wo(n,e){n.beginPath(),n.moveTo(...e[0]);for(const t of e.slice(1))n.lineTo(...t);n.closePath(),n.fill()}const Ay=[[15,[[0,6],[17,46],[55,63]]],[16,[[0,6],[24,37],[45,48],[56,63]]],[17,[[0,6],[23,27],[34,37],[46,48],[56,63]]],[18,[[0,5],[22,26],[35,38],[47,49],[56,63]]],[19,[[0,5],[22,25],[35,38],[48,49],[57,63]]],[20,[[0,5],[22,25],[36,39],[48,50],[57,63]]],[21,[[0,5],[21,24],[36,39],[48,50],[58,63]]],[22,[[0,4],[21,24],[37,40],[49,50],[58,63]]],[23,[[0,4],[21,23],[37,40],[49,49],[58,63]]],[24,[[0,4],[21,23],[37,40],[49,49],[58,63]]],[25,[[0,5],[21,23],[37,40],[48,49],[58,63]]],[26,[[0,5],[21,23],[37,40],[48,48],[58,63]]],[27,[[0,5],[21,23],[38,40],[48,48],[58,63]]],[28,[[0,6],[22,23],[38,40],[47,47],[57,63]]],[29,[[0,2],[4,6],[22,23],[38,40],[56,58],[61,63]]],[30,[[0,2],[5,7],[23,24],[37,40],[56,56],[61,63]]],[31,[[0,2],[6,8],[23,24],[37,39],[62,63]]],[32,[[0,1],[9,9],[24,25],[37,39],[62,63]]],[33,[[37,39]]],[34,[[36,38]]],[35,[[36,37]]],[36,[[36,37]]],[37,[[35,36]]],[38,[[34,35]]],[39,[[33,34]]],[40,[[31,32]]]];function Ry(n,e){if(n.fillStyle=di(e.appearance.hair),e.name==="萝姐")for(const[t,i]of Ay)for(const[r,s]of i)n.fillRect(r,t,s-r+1,1);else if(e.name==="德克米")Wo(n,[[25,9],[31,10],[31,18],[29,25],[26,21]]),Wo(n,[[34,9],[40,10],[39,18],[36,25],[34,20]]);else if(e.name==="白雪公主-卡"){n.fillRect(8,8,48,10);const t=i=>{for(const[r,s,o]of i)n.fillRect(s,r,o-s+1,1)};t([[15,9,20],[16,9,21],[17,10,22],[18,11,23],[19,12,24],[20,13,25],[21,14,25],[22,15,26],[23,16,26],[24,17,26],[25,18,25],[26,19,24],[27,20,23],[28,21,22],[29,21,22]]),t([[14,23,35],[15,23,36],[16,24,36],[17,25,37],[18,26,37],[19,27,38],[20,28,38],[21,29,38],[22,30,38],[23,30,37],[24,31,36],[25,31,35],[26,31,34],[27,31,33],[28,31,32],[29,31,32]]),t([[15,38,51],[16,39,52],[17,40,53],[18,41,54],[19,42,55],[20,43,55],[21,44,54],[22,45,53],[23,46,52],[24,46,51],[25,47,50],[26,48,50],[27,48,49],[28,48,49],[29,48,49]])}else e.name==="小马宝莉"&&(Wo(n,[[11,13],[23,14],[31,21],[27,31],[20,28],[14,37]]),Wo(n,[[42,14],[54,12],[50,29],[44,35]]))}function Id(n,e){n.fillStyle=di(e);for(const[t,i,r,s]of[[13,42,4,11],[47,42,4,11],[16,51,4,6],[44,51,4,6],[20,55,5,5],[39,55,5,5],[25,58,14,4],[23,46,8,2],[34,46,8,2]])n.fillRect(t,i,r,s)}function Cy(n){const e=`${n.name}-${td}`;if(Kr.has(e))return Kr.get(e);const t=n.appearance,i=document.createElement("canvas");i.width=i.height=Yr;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.fillStyle=di(t.skin),r.fillRect(0,0,Yr,Yr),Ry(r,n),r.fillStyle="#241b18",r.fillRect(18,31,3,7),r.fillRect(43,31,3,7),t.beard&&Id(r,t.beard),r.fillStyle="#241b18";for(const[a,c,l]of[[17,48,3],[20,51,3],[23,53,4],[27,55,10],[37,53,4],[41,51,3],[44,48,3]])r.fillRect(a,c,l,2);const s=new Gi(i);s.magFilter=Gt,s.minFilter=Gn,s.colorSpace=Dt;const o=new Nt({map:s,roughness:1});return Kr.set(e,o),o}const hu={"swept-forelock":[{depth:.085,points:[[-.54,.54],[.54,.54],[.54,.29],[.49,.27],[.39,.3],[.27,.27],[.14,.3],[.02,.27],[-.11,.3],[-.25,.27],[-.39,.3],[-.5,.27],[-.54,.29]]}],"spiky-highlight-crop":[{points:[[-.55,.08],[-.62,.22],[-.5,.29],[-.47,.51],[-.34,.74],[-.21,.49],[-.04,.75],[.09,.49],[.25,.78],[.36,.5],[.47,.68],[.5,.31],[.62,.24],[.54,.08]]}],"dark-golden-pageboy":[{points:[[-.56,.7],[-.02,.7],[-.01,.42],[-.12,.3],[-.28,.12],[-.48,-.38],[-.56,-.28]]},{points:[[.02,.7],[.56,.7],[.56,-.28],[.48,-.38],[.28,.12],[.12,.3],[.01,.42]]}],"bleached-tight-curls":[{material:"accent",points:[[-.56,.34],[.56,.34],[.56,.08],[-.56,.08]]},{points:[[-.58,.33],[-.51,.52],[-.42,.39],[-.34,.61],[-.25,.4],[-.16,.64],[-.07,.4],[.04,.66],[.13,.4],[.23,.61],[.32,.4],[.42,.59],[.49,.4],[.58,.49],[.55,.29],[-.55,.29]]}],"fluffy-curls":[{points:[[-.55,.12],[-.58,.33],[-.48,.5],[-.37,.66],[-.24,.5],[-.08,.75],[.1,.48],[.26,.61],[.43,.48],[.55,.58],[.58,.31],[.5,.08],[.42,.2],[.18,.19],[.06,.13],[-.15,.19],[-.34,.19],[-.47,.06]]}],"rounded-curly-top":[{points:[[-.55,.1],[-.55,.53],[-.47,.69],[-.38,.51],[-.28,.75],[-.18,.51],[-.06,.72],[.04,.5],[.16,.7],[.27,.49],[.39,.66],[.48,.48],[.55,.55],[.55,.1],[.49,.18],[-.49,.18]]}],"blond-side-sweep":[{points:[[-.55,.08],[-.55,.5],[-.43,.66],[-.27,.82],[-.08,.57],[.06,.69],[.27,.52],[.55,.51],[.55,.08],[.49,.18],[-.45,.19]]}],"close-crop":[{points:[[-.55,.12],[-.55,.51],[.55,.51],[.55,.12]]}],"short-blond-brush":[{points:[[-.55,.12],[-.55,.5],[.55,.5],[.55,.12]]}],"messy-short-crop":[{points:[[-.55,.12],[-.55,.46],[-.44,.62],[-.28,.46],[-.12,.56],[.02,.47],[.17,.61],[.31,.46],[.46,.57],[.55,.45],[.55,.12],[.48,.18],[-.48,.18]]}],"short-curly-crop":[{points:[[-.55,.1],[-.55,.48],[-.42,.61],[-.3,.5],[-.18,.68],[-.04,.52],[.1,.67],[.23,.5],[.38,.62],[.55,.48],[.55,.1],[.48,.18],[-.48,.18]]}],"short-slick-back":[{points:[[-.55,.1],[-.55,.48],[-.38,.64],[-.16,.6],[.1,.72],[.34,.54],[.55,.48],[.55,.1],[.48,.18],[-.48,.18]]}],"short-side-sweep":[{points:[[-.55,.1],[-.55,.48],[-.38,.62],[-.08,.78],[.25,.58],[.55,.48],[.55,.1],[.48,.18],[-.48,.18]]}],"short-textured-crop":[{points:[[-.55,.1],[-.55,.5],[-.4,.64],[-.25,.52],[-.1,.66],[.06,.53],[.22,.66],[.4,.5],[.55,.54],[.55,.1],[.48,.18],[-.48,.18]]}],"lms-short-undercut":[{points:[[-.55,.18],[-.55,.5],[-.42,.62],[-.25,.55],[-.08,.65],[.12,.56],[.32,.64],[.55,.5],[.55,.18],[.38,.22],[.18,.28],[0,.24],[-.2,.28],[-.4,.22]]}],"kk-long-fringe":[{points:[[-.55,.1],[-.55,.56],[-.4,.62],[-.22,.5],[-.08,.68],[.08,.52],[.25,.72],[.55,.58],[.55,.1],[.45,-.02],[.34,-.25],[.2,-.08],[.04,-.32],[-.1,-.08],[-.26,-.28],[-.4,-.04]]}],"painted-kk-fringe":[],"kk-modeled-crown":[{points:[[-.55,.1],[-.55,.52],[-.42,.62],[-.26,.69],[-.08,.61],[.08,.68],[.28,.6],[.44,.64],[.55,.52],[.55,.1],[.48,.18],[-.48,.18]]}],"edg-flat-crop":[{points:[[-.55,.18],[-.55,.5],[-.4,.58],[-.28,.69],[-.12,.6],[.04,.7],[.2,.6],[.36,.67],[.55,.54],[.55,.18],[.35,.22],[.12,.23],[-.12,.22],[-.35,.23]]}],"bzm-widow":[{points:[[-.55,.12],[-.55,.5],[-.4,.6],[-.22,.55],[-.08,.62],[0,.48],[.08,.62],[.26,.55],[.44,.6],[.55,.5],[.55,.12],[.34,.18],[.16,.12],[0,-.06],[-.16,.12],[-.35,.18]]}],bald:[],"medong-side-part":[{points:[[-.55,.08],[-.55,.45],[-.43,.61],[-.3,.55],[-.02,.78],[.4,.47],[.55,.2],[.5,.08],[.43,.18],[-.43,.18]]}]};function fu(n,e,t,i,r=.356,s=0){const o=new ya;o.moveTo(n[0][0]*e,n[0][1]*t);for(const[l,u]of n.slice(1))o.lineTo(l*e,u*t);o.closePath();const a=s>0?new Kl(o,{depth:s,steps:1,bevelEnabled:!1}):new Ea(o),c=new Ht(a,i);return c.position.z=r,c.castShadow=!0,c.name=s>0?"modeled-thick-front-hair":"front-hair-silhouette",c}function du(n,e,t,i){const r=new ya;r.moveTo(-t/2,-e/2),r.lineTo(-t/2,e/2),r.lineTo(t/2,e/2),r.lineTo(t/2,e*.3),r.closePath();const s=new Ea(r),o=i.clone();o.side=An;const a=new ct,c=new Ht(s,o),l=new Ht(s,o);c.position.x=-n/2-.006,c.rotation.y=-Math.PI/2,l.position.x=n/2+.006,l.rotation.y=Math.PI/2,l.scale.x=-1;for(const[u,f]of[[c,"modeled-left-side-hair"],[l,"modeled-right-side-hair"]])u.name=f,u.castShadow=!0,a.add(u);return a.userData={referenceProfile:"rear-bottom-to-front-30-percent",hairColor:i.color.getHex()},a}function pu(n){const e=n.appearance,t=new ct,i=Jr(n,"skin"),r=Jr(n,"hair"),s=Jr(n,"accent"),o=e.style==="bleached-tight-curls"?s:r,a=et(e.faceWidth,e.faceHeight,.7,[i,i,o,i,Cy(n),i]),c=e.faceHeight/2;t.add(a);for(const u of hu[e.style]||[])t.add(fu(u.points,e.faceWidth,e.faceHeight,u.material==="accent"?s:r,.356,u.depth??0));const l=et(e.faceWidth+.035,.12,.72,o);if(l.position.set(0,c+.045,-.02),t.add(l),e.style==="dark-golden-pageboy"){const u=et(.1,.62,.65,r),f=u.clone(),d=et(e.faceWidth+.04,.64,.1,r);u.position.set(-e.faceWidth/2-.035,c-.25,-.03),f.position.set(e.faceWidth/2+.035,c-.25,-.03),d.position.set(0,c-.25,-.4),t.add(u,f,d)}else if(e.style!=="bald"){const u=et(e.faceWidth+.035,e.faceHeight+.02,.1,o);u.position.set(0,0,-.4),u.name="modeled-full-short-hair-back",t.add(u,du(e.faceWidth,e.faceHeight,.7,r))}return t.userData={headMesh:a,style:e.style,faceStyle:td,hairConstruction:e.style==="dark-golden-pageboy"?"modeled-short-pageboy":"modeled-front-plus-full-short-back"},t}const jh=mi.map(n=>{const e=pu(n);return e.position.y=2.27,e.scale.setScalar(1.1),e.visible=!1,xe.add(e),e}),mu=xr.map(n=>n.sourceIndex!==void 0?{...mi[n.sourceIndex],name:`${n.shortName}·俱乐部`}:{name:"裤袜·俱乐部",country:"比利时",team:"belgium",number:n.number,appearance:n.appearance}),Qh=mu.map(n=>{const e=pu(n);return e.position.y=2.27,e.scale.setScalar(1.1),e.visible=!1,xe.add(e),e}),Ca=new ct,ua=[],ha=[],pr=[];Pt.add(Ca);Ca.visible=!1;for(const[n,e]of mi.entries()){const t=new ct,i=new ct,r=HS[n],s=n===0?r:{key:[r.key[0],r.key[1],r.key[2]-30],cage:[r.cage[0],r.cage[1],r.cage[2]-30]};t.position.set(...s.cage),i.position.set(...s.key),Ca.add(t,i),ce(0,.12,0,3.1,.24,2.6,C.metal,!1,!0,t);for(const A of[-1.4,-.7,0,.7,1.4])ce(A,1.65,0,.12,3.1,2.45,C.bar,!1,!0,t);ce(0,3.16,0,3.1,.18,2.6,C.rust,!1,!0,t),bt(`营救 ${e.name}`,0,4.15,0,.36,"#ffd76c",t),ce(0,.12,0,.95,.24,.34,C.green,!1,!0,i),ce(.48,.12,0,.38,.18,.18,C.green,!1,!0,i),ce(-.43,.12,0,.22,.65,.22,C.green,!1,!0,i),bt("KEY",0,1.35,0,.28,"#d7ff67",i);const o=new ct,a=Dd(e),c=Jr(e,"skin"),l=zs(e,"side"),u=et(.92,1,.62,a.body),f=pu(e),d=et(.34,.65,.4,a.shorts),p=et(.34,.65,.4,a.shorts),g=et(.25,.82,.32,c),x=et(.25,.82,.32,c),m=et(.26,.28,.33,l),h=et(.26,.28,.33,l);m.position.y=.27,h.position.y=.27,g.add(m),x.add(h),e.appearance.sleeve==="long"&&(m.scale.y=h.scale.y=2.8,m.position.y=h.position.y=0),u.position.y=1.25,f.position.y=2.08,d.position.set(-.25,.43,0),p.position.set(.25,.43,0),g.position.set(-.62,1.25,0),x.position.set(.62,1.25,0),o.add(u,f,d,p,g,x),bt(e.name,0,3,0,.28,"#ffffff",o),o.visible=!1,o.userData={fLeg1:d,fLeg2:p,fArm1:g,fArm2:x,index:n},zt.add(o),pr.push(o),ua.push(t),ha.push(i)}function Ud(){const n=document.createElement("canvas");n.width=n.height=Yr;const e=n.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#d79a70",e.fillRect(0,0,Yr,Yr),e.fillStyle="#241b18",e.fillRect(18,31,3,7),e.fillRect(43,31,3,7),Id(e,DS.beard),e.fillStyle="#241b18";for(const[i,r,s]of[[17,48,3],[20,51,3],[23,53,4],[27,55,10],[37,53,4],[41,51,3],[44,48,3]])e.fillRect(i,r,s,2);const t=new Gi(n);return t.magFilter=Gt,t.minFilter=Gn,t.colorSpace=Dt,new Nt({map:t,roughness:1})}function Nd(n=!1){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d");t.fillStyle="#f2f1e8",t.fillRect(0,0,32,32),t.fillStyle="#74c8ee";for(let r=0;r<32;r+=12)t.fillRect(r,0,7,32);t.fillStyle="#172d4f",t.fillRect(12,0,8,3),t.font=`900 ${n?18:12}px monospace`,t.textAlign="center",t.textBaseline="middle",t.fillText("10",16,n?18:20),t.fillStyle="#d7af37",t.fillRect(14,5,4,3);const i=new Gi(e);return i.magFilter=Gt,i.minFilter=Gn,i.colorSpace=Dt,new Nt({map:i,roughness:.9})}const Qs=new Nt({color:7653614,roughness:.9}),Pa=new Nt({color:15921640,roughness:.95}),Fd=new Nt({color:1453136,roughness:.9}),xi=new Nt({color:328965,roughness:1}),Py=Nd(),Ly=Nd(!0),je=new ct,ar=new ct;zt.add(je);je.add(ar);const La=et(1.12,1.12,.7,[Qs,Qs,Pa,Fd,Py,Ly]),uo=et(.86,.84,.8,[C.skin,C.skin,xi,C.skin,Ud(),C.skin]),Od=et(.88,.25,.82,xi),gu=et(.89,.86,.1,xi),Bd=et(1.08,.38,.7,Fd),Li=et(.42,.7,.46,Pa),Di=et(.42,.7,.46,Pa),ai=et(.31,.96,.37,C.skin),ci=et(.31,.96,.37,C.skin),zd=et(.32,.32,.38,Qs),kd=et(.32,.32,.38,Qs),_u=et(.45,.2,.6,C.black),Hd=_u.clone(),Dy=fu(hu["medong-side-part"][0].points,.86,.84,xi,.406);uo.add(Dy);const Iy=du(.86,.84,.8,xi);uo.add(Iy);gu.position.set(0,2.3,-.45);gu.name="modeled-full-short-hair-back";La.position.y=1.45;uo.position.y=2.3;Od.position.y=2.67;Bd.position.y=.88;Li.position.set(-.3,.47,0);Di.position.set(.3,.47,0);ai.position.set(-.75,1.48,0);ci.position.set(.75,1.48,0);zd.position.y=.3;kd.position.y=.3;ai.add(zd);ci.add(kd);_u.position.set(-.3,.12,.1);Hd.position.set(.3,.12,.1);ar.add(La,uo,Od,gu,Bd,Li,Di,ai,ci,_u,Hd);const Uy=bt("★ 10  梅东",0,3.38,0,.38,"#8edcff",ar),eo=fu(hu["medong-side-part"][0].points,.82,.82,xi,.396);eo.position.y=2.27;eo.visible=!1;xe.add(eo);const ls=et(.855,.84,.1,xi);ls.position.set(0,2.27,-.44);ls.visible=!1;ls.name="modeled-full-short-hair-back";xe.add(ls);const to=du(.82,.82,.78,xi);to.position.y=2.27;to.visible=!1;xe.add(to);const Gd="block-break-skin-profile-v1";function Ny(){try{const n=JSON.parse(localStorage.getItem(Gd)||"{}");return{claimedMedong:!!n.claimedMedong,rescueCompleted:!!n.rescueCompleted,rosisterCompleted:!!n.rosisterCompleted,clubPackSkins:Array.isArray(n.clubPackSkins)?n.clubPackSkins:[],packCount:Math.max(0,Number(n.packCount)||0),selected:typeof n.selected=="string"?n.selected:"prisoner"}}catch{return{claimedMedong:!1,rescueCompleted:!1,rosisterCompleted:!1,clubPackSkins:[],packCount:0,selected:"prisoner"}}}const vt=Ny();function Da(){try{localStorage.setItem(Gd,JSON.stringify(vt))}catch{}}function Vd(){return new Set(BS(vt))}function Ia(){Vd().has(vt.selected)||(vt.selected="prisoner");const e=bl.find(t=>t.id===vt.selected)||bl[0];for(const t of jh)t.visible=!1;for(const t of Qh)t.visible=!1;if(eo.visible=ls.visible=to.visible=!1,nr.visible=ir.visible=!0,Ri.visible=e.id==="ponytail",ui.material=hi.material=C.skin,Bn.material=zn.material=C.orange,Bn.scale.y=zn.scale.y=1,Bn.position.y=zn.position.y=.34,Ra.material=uu.material=C.black,e.id==="medong")Vr.material=La.material,Ci.material=Pi.material=Pa,nr.material=uo.material,ir.material=Ri.material=xi,eo.visible=ls.visible=to.visible=!0,Bn.material=zn.material=Qs;else if(e.kind==="rescue"){const t=Number(e.id.split("-")[1]),i=mi[t],r=Dd(i);Vr.material=r.body,Ci.material=Pi.material=r.shorts,nr.visible=ir.visible=Ri.visible=!1,jh[t].visible=!0,ui.material=hi.material=Jr(i,"skin"),Bn.material=zn.material=zs(i,"side"),i.appearance.sleeve==="long"&&(Bn.scale.y=zn.scale.y=2.8,Bn.position.y=zn.position.y=0)}else if(e.kind==="club"){const t=xr.findIndex(s=>s.id===e.id),i=mu[t],r=wy(e);Vr.material=r.body,Ci.material=Pi.material=r.shorts,nr.visible=ir.visible=Ri.visible=!1,Qh[t].visible=!0,ui.material=hi.material=Jr(i,"skin"),Bn.material=zn.material=r.side}else Vr.material=Ci.material=Pi.material=C.orange,nr.material=[C.skin,C.skin,C.hair,C.skin,Ld,C.skin],ir.material=Ri.material=C.hair;cM.textContent=e.name,Da()}const Un=new ct,Tn=new ct,wn=new ct;je.add(Un);Un.visible=!1;const vu=nt("metal","#202c34","#61727d"),Wd=nt("metal","#51616b","#a7bac2"),Fy=new Nt({color:2248546,roughness:.25,metalness:.3,transparent:!0,opacity:.72,emissive:881038,emissiveIntensity:.55}),Oy=nt("metal","#317ca2","#82dcff",1196635),By=nt("metal","#317ca2","#82dcff",1196635),zy=nt("stripe","#d58519","#ffe063",9059328);ce(0,1.7,0,2.65,1.65,1.75,vu,!1,!0,Un);ce(0,2.55,.08,2.05,1.25,1.35,Fy,!1,!0,Un);ce(0,3.28,0,2.5,.22,1.55,Wd,!1,!0,Un);for(const n of[-.82,.82])ce(n,.58,0,.75,1.75,.85,Wd,!1,!0,Un),ce(n,.12,.2,1.05,.32,1.5,vu,!1,!0,Un);Tn.position.set(-1.75,2.12,0);wn.position.set(1.75,2.12,0);Un.add(Tn,wn);for(const[n,e,t]of[[Tn,Oy,-1],[wn,By,1]])ce(0,0,0,1.25,1.05,1.2,e,!1,!0,n),ce(t*.05,-1,0,.72,1.25,.72,e,!1,!0,n),ce(t*.05,-1.78,.12,1.05,.55,1.15,vu,!1,!0,n),ce(0,.05,-.66,.55,.55,.18,zy,!1,!0,n);ce(0,1.62,-.98,1.5,.55,.35,C.hazard,!1,!0,Un);bt("MEDONG MECH",0,4.25,0,.38,"#ffb94d",Un);const Zn=new ct;Zn.visible=!1;Zn.position.set(.7,1.42,.28);Zn.rotation.set(0,0,-.2);xe.add(Zn);ce(0,0,0,.85,.34,.32,C.green,!1,!0,Zn);ce(.52,0,0,.5,.18,.18,C.metal,!1,!0,Zn);ce(-.18,-.32,0,.22,.5,.22,C.black,!1,!0,Zn);const ky=new Hi(.42,.035,.22),Hy=new ms({color:13238117}),jr=[],ln=new Ht(new Jl(.9,1.25,16),new ms({color:16726820,transparent:!0,opacity:.72,side:An,depthWrite:!1}));ln.rotation.x=-Math.PI/2;ln.position.y=.035;ln.visible=!1;je.add(ln);je.visible=!1;const xu=[1,3,6,8,9,11,13,15,17,19],ho=new Map,Gy=new ms({transparent:!0,opacity:0,depthWrite:!1});function Vy(n){const e=new ct;e.position.set(0,0,(n+1)*ke-1),Pt.add(e);for(let i=-6.2;i<=6.2;i+=1.15)ce(i,2.2,0,.22,4.4,.22,C.bar,!1,!0,e);ce(0,4.35,0,13.3,.35,.45,C.rust,!1,!0,e);const t=ce(0,2.2,0,13.4,4.4,.35,Gy,!0,!1,e);t.userData.dynamicBounds=!0,t.userData.modes=["escape","rescue"],e.userData={collider:t,targetY:0,locked:!0,stage:n},ho.set(n,e)}xu.forEach(Vy);const ef=new WeakMap,tf=new R;zt.updateMatrixWorld(!0);for(const n of[...Zt,...$n])n.getWorldPosition(tf),n.userData.stageIndex=$t.clamp(Math.floor(tf.z/ke),0,Aa),n.userData.stageIndex<5&&n.userData.modes?.includes("escape")&&n.userData.modes.push("rosister");function ks(n){let e=ef.get(n);return e||(e=new ds,ef.set(n,e)),(n.userData.dynamicBounds||n.userData.move||n.parent?.userData.rotate||!n.userData.boundsReady)&&(e.setFromObject(n),n.userData.boundsReady=!0),e}function Ds(n){return!n.userData.modes||n.userData.modes.includes(b.mode)}const b={mode:"escape",started:!1,won:!1,paused:!1,pauseStarted:0,wonTime:0,stage:0,start:0,checkpoint:new R(0,.02,2),velocity:new R,grounded:!0,coyote:.1,jumpBuffer:0,yaw:0,pitch:.48,cameraDistance:8,keys:{},last:0,attackCooldown:0,attackAnim:0,combo:0,comboTimer:0,invulnerable:0,moneyGun:!1,mathQuestion:null},J={active:!1,hp:100,maxHp:100,stage:-1,stun:0,mode:"idle",modeTimer:0,steerSign:1,hitFlash:0,lastUiMode:"",isMech:!1,isRosister:!1,armMaxHp:100,leftArmHp:100,rightArmHp:100},it={keys:new Set,rescued:new Set,reminderCooldown:0,allyCooldown:0},Ct={question:null,answerOpen:!1,remaining:0,selected:""},wc=new R,wl=()=>vr[b.mode],Nn=()=>wl().stageCount,Ii=()=>Nn()-1,Wy=()=>b.mode==="escape"?ry:Nn()*ke+2,Su=()=>fy[b.mode],Ua=()=>dy[b.mode],Na=()=>b.mode==="math"?au:nu.slice(0,Nn()),Hs=new R(0,1,0),Ji=new R,nf=new R,Xy=new R,Ac=new R,qy=new R,Xo=new R,ni=new R,Yy=new R,bn=new R,rf=new R,wi=new R,rr=new R,Rc=[],$y=new R,Zy=new R,Cs=new R,Gs=new R,Ky=new R,sf=new R,of=new fs,af=new In;let cr=0;const Fa=document.querySelector("#stage"),Oa=document.querySelector("#bar"),Fn=document.querySelector("#missionText"),Cc=document.querySelector("#toast"),Jy=document.querySelector("#time"),ki=document.querySelector("#hunterHud"),cf=document.querySelector("#hunterTitle"),Al=document.querySelector("#hunterMainBar"),jy=document.querySelector("#hunterHp"),Xd=document.querySelector("#hunterHpText"),Qy=document.querySelector("#hunterIntent"),Rl=document.querySelector("#mechArms"),eM=document.querySelector("#leftArmHp"),tM=document.querySelector("#rightArmHp"),yu=document.querySelector("#weaponHud"),Fi=document.querySelector("#aimReticle"),pi=document.querySelector("#attack"),no=document.querySelector("#attackLabel"),fa=document.querySelector("#rescueHud"),nM=document.querySelector("#rescueBuffs"),fo=document.querySelector("#mathPanel"),iM=document.querySelector("#mathQuestion"),da=document.querySelector("#mathAnswer"),mr=document.querySelector("#rosisterPanel"),rM=document.querySelector("#rosisterQuestion"),Pc=document.querySelector("#rosisterChoices"),Hr=document.querySelector("#rosisterAnswer"),qd=document.querySelector("#rosisterTimer"),pa=document.querySelector("#pauseMenu"),Yd=document.querySelector("#quality"),sM=document.querySelector("#fpsReadout"),oM=document.querySelector("#winTitle"),aM=document.querySelector("#winCopy"),$d=document.querySelector("#skinsPanel"),Mu=document.querySelector("#skinReward"),lf=document.querySelector("#skinGrid"),cM=document.querySelector("#selectedSkinName"),qo=document.querySelector("#unlockReward"),io=document.querySelector("#toiletEvent"),Eu=document.querySelector("#packReward"),lM=document.querySelector("#packCount"),uM=document.querySelector("#packCountPanel"),Zd=document.querySelector("#packCopy"),Qr=document.querySelector("#packResult"),Kd=document.querySelector("#openPack"),Jd=document.querySelector("#openPackWin"),jd="block-break-quality-v1";let gr="auto",ma=!1;try{gr=localStorage.getItem(jd)||"auto"}catch{}["auto","high","low"].includes(gr)||(gr="auto");function bu(n=gr,e=!0){if(gr=n,Cn=n==="low"||n==="auto"&&(tu||ma),Rt.shadowMap.enabled=!Cn,gi.castShadow=!Cn,Rt.setPixelRatio(Math.min(devicePixelRatio,Cn?1:1.5)),Rt.setSize(innerWidth,innerHeight),Yd.value=n,document.body.dataset.renderQuality=Cn?"low":"high",e)try{localStorage.setItem(jd,n)}catch{}}function hM(){const n=b.mode==="rescue";Sr.visible=n;for(const e of Td)e.visible=!n}function fM(){const n=b.mode==="escape"||b.mode==="rescue";_n.visible=n;for(const e of Cd)e.visible=!1}function dM(){for(const n of It.timers)clearTimeout(n);It.timers.length=0}function Is(n,e){const t=setTimeout(n,e);return It.timers.push(t),t}function Qd(){dM(),io.classList.add("hidden"),It.resolving=!1,It.opened=-1,It.layout=[...cd];for(let n=0;n<Zr.length;n++){Zr[n].rotation.y=0,Zr[n].userData.targetRotation=0;for(const e of Object.values(cu[n]))e.visible=!1;Zt.includes(la[n])||Zt.push(la[n])}}function Cl(n){io.querySelector("b").textContent=n,io.classList.remove("hidden"),Ft(85,.22),un([90,45,100])}function uf(){io.classList.add("hidden"),It.resolving=!1,yr(),b.invulnerable=1.15}function pM(n){if(It.opened>=0||It.resolving)return;const e=It.layout[n];It.opened=n,Zr[n].userData.targetRotation=-Math.PI*.48;const t=Zt.indexOf(la[n]);if(t>=0&&Zt.splice(t,1),cu[n][e].visible=!0,Ft(410,.12),e==="tunnel"){Ke("✓ 没有马桶，是通往下水道的地洞！"),Fn.textContent="走进地洞，继续从下水道逃离";return}It.resolving=!0,e==="corpse"?(Ke("门后传来令人作呕的臭味……"),Is(()=>Cl("你被尸体吓晕了"),1e3),Is(uf,2400)):(Ke("你撞见了正在上厕所的梅东！"),Is(()=>Cl("梅东把你敲晕了"),550),Is(uf,1900))}function mM(){It.resolving||(It.resolving=!0,Cl("你钻进了通往下水道的地洞"),Is(()=>{io.classList.add("hidden"),It.resolving=!1,Ru(12),xe.position.copy(b.checkpoint),b.velocity.set(0,0,0),Ke("✓ 已进入厕所下水道")},700))}function gM(){if(!(b.mode!=="escape"&&b.mode!=="rescue"||b.stage!==11||It.resolving)){if(It.opened>=0){const n=It.opened;It.layout[n]==="tunnel"&&Math.abs(xe.position.x-ea[n])<1.2&&xe.position.z>346.1&&mM();return}for(let n=0;n<ea.length;n++)if(Math.abs(xe.position.x-ea[n])<1.15&&Math.abs(xe.position.z-Tl)<1.25){pM(n);break}}}function xs(){const n=Vd();lf.replaceChildren();for(const e of bl){const t=n.has(e.id),i=document.createElement("button"),r=document.createElement("i"),s=document.createElement("span"),o=document.createElement("b"),a=document.createElement("small"),c=e.kind==="rescue"?mi[Number(e.id.split("-")[1])]:e.kind==="club"?mu[xr.findIndex(l=>l.id===e.id)]:null;i.type="button",i.className=`skin-card${t?"":" locked"}${e.id===vt.selected?" selected":""}`,i.style.setProperty("--skin-color",di(e.color)),i.style.setProperty("--skin-accent",di(e.accent??e.color)),r.textContent=c?String(c.number):"",o.textContent=e.name,a.textContent=e.kind==="club"?`${e.club}俱乐部 · ${t?e.id===vt.selected?"使用中":"点击使用":"开启卡包获得"}`:c?`${c.country}国家队 · ${t?e.id===vt.selected?"使用中":"点击使用":"通关解锁"}`:t?e.id===vt.selected?"使用中":"点击使用":"拯救模式通关解锁",s.append(o,a),i.append(r,s),i.onclick=()=>{if(!t){Ke(e.kind==="club"?"开启俱乐部球衣卡包获得这套皮肤":"通关拯救模式即可解锁这位球星");return}vt.selected=e.id,Ia(),xs(),Ke(`已换上 ${e.name} 皮肤`)},lf.append(i)}}let ga=!1;function _M(){ga=b.started&&!b.won&&!b.paused,ga&&(b.paused=!0,b.pauseStarted=performance.now(),qn.pause()),xs(),$d.classList.remove("hidden")}function vM(){$d.classList.add("hidden"),ga&&(b.start+=performance.now()-b.pauseStarted,b.paused=!1,b.last=performance.now(),qn.resume()),ga=!1}function us(n,e){const t=ho.get(n);if(!t)return;t.userData.locked=e,t.userData.targetY=e?0:5.4;const i=Zt.indexOf(t.userData.collider);e&&i<0&&Zt.push(t.userData.collider),!e&&i>=0&&Zt.splice(i,1)}function ep(n,e=1){for(const t of La.material)t.emissive.setHex(n),t.emissiveIntensity=e}function Ba(){jy.style.width=`${Math.max(0,J.hp/J.maxHp*100)}%`,Xd.textContent=`${Math.max(0,J.hp)} / ${J.maxHp}`}function tp(){eM.style.width=`${Math.max(0,J.leftArmHp/J.armMaxHp*100)}%`,tM.style.width=`${Math.max(0,J.rightArmHp/J.armMaxHp*100)}%`,Xd.textContent=`${Math.max(0,J.leftArmHp+J.rightArmHp)} ARM HP`}function po(n=!1){!n&&J.lastUiMode===J.mode||(J.lastUiMode=J.mode,Qy.textContent=J.isMech&&J.mode==="stunned"?"⚡ 驾驶员眩晕 · 5秒攻击窗口":{alert:"正在锁定目标",chase:"持续追击中",windup:"⚠ 即将发动冲撞",recovery:"攻击落空 · 短暂硬直",stunned:"受创后退",idle:"等待目标"}[J.mode]||"持续追击中",ki.classList.toggle("danger",J.mode==="windup"))}function Tu(n){J.isMech=n,Un.visible=n,Uy.visible=!n,n?(ar.position.set(0,1.38,-.12),ar.scale.setScalar(.72),Li.rotation.x=Di.rotation.x=-1.18,ai.rotation.x=ci.rotation.x=.72):(ar.position.set(0,0,0),ar.scale.setScalar(1),Li.rotation.x=Di.rotation.x=ai.rotation.x=ci.rotation.x=0)}function np(){J.leftArmHp=J.rightArmHp=J.armMaxHp;for(const n of[Tn,wn])n.rotation.set(0,0,0),n.userData.destroyed=!1;tp()}function ip(n=.42){zt.updateMatrixWorld(!0);let e=null,t=n;for(const[i,r,s,o]of[["left",Tn,J.leftArmHp,$y],["right",wn,J.rightArmHp,Zy]]){if(s<=0||(r.getWorldPosition(o),Cs.copy(o).project(Hn),Cs.z<0||Cs.z>1))continue;const a=Math.hypot(Cs.x,Cs.y);a<t&&(t=a,e={side:i,arm:r,world:o.clone()})}return e}function hf(n){const e=new Ht(ky,Hy);Gs.copy(xe.position).addScaledVector(Hs,1.35),e.position.copy(Gs),e.rotation.y=xe.rotation.y,e.userData={start:Gs.clone(),end:n.clone(),progress:0},jr.push(e),zt.add(e)}function xM(){if(!b.moneyGun){Ke("先到绿色武器箱取得钞票枪");return}const n=ip();if(Gs.copy(xe.position).addScaledVector(Hs,1.35),!n){Hn.getWorldDirection(rr),hf(Ky.copy(Gs).addScaledVector(rr,20)),Ke("只攻击蓝色机械臂 · 用准星瞄准"),Ft(220,.06);return}hf(n.world);const e=ny(J,n.side,20);J.hitFlash=.18,tp(),Ft(e==="hit"?610:820,.09),un([18,22,28]),e==="arm-destroyed"||e==="defeated"?(n.arm.userData.destroyed=!0,md(J,5),po(!0),Ke(`${n.side==="left"?"左":"右"}机械臂摧毁 · 梅东眩晕 5 秒`)):Ke(`💵 命中${n.side==="left"?"左":"右"}臂 · 20 DAMAGE`),e==="defeated"&&setTimeout(()=>{J.active&&J.isMech&&J.leftArmHp<=0&&J.rightArmHp<=0&&wu()},300)}function un(n){_d&&navigator.vibrate?.(n)}function rp(n){const e=b.mode==="escape"&&n===Aa,t=b.mode==="rescue"&&n===wa,i=b.mode==="rosister",r=xu.indexOf(n);J.active=!0,J.stage=n,J.isRosister=i,J.hp=J.maxHp=i?9999:b.mode==="rescue"?XS(n):ty(r),J.hitFlash=0,J.lastUiMode="",Tu(e),pd(J,e?2.4:.8);const s=ad(n,{isMech:e,stageLength:ke});je.position.set(s.x,.02,s.z),e?(np(),cf.textContent="⚠ 梅东机甲 · 双臂弱点",Al.classList.add("hidden"),Rl.classList.remove("hidden"),no.textContent=b.moneyGun?"发射 [F]":"获取武器",Fn.textContent=b.moneyGun?"瞄准并摧毁机甲两条手臂":"前往绿色武器箱取得钞票枪",Fi.classList.toggle("hidden",!b.moneyGun),Ke("⚠ 梅东机甲启动 · 只有手臂会受伤！")):(cf.textContent=i?"⚠ 梅东 · 萝姐挑战（不可击败）":t?"⚠ 最终 Boss 梅东 · 全员决战":b.mode==="rescue"?"⚠ 强化梅东 · 呼叫队友":"⚠ 梅东 · 阿根廷10号",Al.classList.remove("hidden"),Rl.classList.add("hidden"),no.textContent="攻击 [F]",Fi.classList.add("hidden"),Fn.textContent=i?"答题倒计时结束前完成题目":t?"与十位获救球员围攻最终梅东":b.mode==="rescue"?"与获救球员一起击退梅东":"击败梅东，解除封锁",Ba(),Ke(i?`⚠ 梅东出现 · 生命 ${J.maxHp}（无法击败）`:t?`⚠ 最终围捕开始 · 梅东生命 ${J.maxHp}`:`⚠ 梅东出现 · 生命 ${J.maxHp}`)),je.visible=!0,ln.visible=!1,us(n,!0),ki.classList.remove("hidden"),pi.classList.remove("hidden"),po(!0),un([40,35,40])}function wu(){const n=J.isMech,e=b.mode==="rescue"&&J.stage===wa;J.active=!1,J.mode="idle",je.visible=!1,ln.visible=!1,ep(0),us(J.stage,!1),ki.classList.add("hidden"),ki.classList.remove("danger","hit"),pi.classList.add("hidden"),Fi.classList.add("hidden"),yu.classList.add("hidden"),Zn.visible=!1,Fn.textContent=n?"机甲摧毁 · 登上直升机撤离":e?"最终梅东已被击败 · 穿过终点撤离":b.mode==="rescue"?Ua()[b.stage]:"封锁解除 · 前往下一个检查点",Ke(n?"✓ 两条机械臂已摧毁 · 梅东机甲失效":e?"✓ 十位队友合力击败最终梅东":b.mode==="rescue"?"✓ 队友合力击退梅东":"✓ 梅东已被击退 · 封锁解除"),Ft(n?1080:920,n?.42:.28),un([30,40,70])}function Lc(n){for(const e of Zt){if(!Ds(e)||Math.abs(e.userData.stageIndex-J.stage)>1)continue;const t=ks(e);if(oa(n,t,J.isMech?1.35:.58)&&dd(n,t,J.isMech?4.35:2.85))return!0}return!1}function SM(n,e,t){const i=e*t;if(ni.copy(je.position).addScaledVector(n,i),!Lc(ni)){je.position.copy(ni);return}if(Xo.set(-n.z,0,n.x).multiplyScalar(J.steerSign),ni.copy(je.position).addScaledVector(Xo,i*.9),!Lc(ni)){je.position.copy(ni);return}J.steerSign*=-1,Xo.multiplyScalar(-1),ni.copy(je.position).addScaledVector(Xo,i*.9),Lc(ni)||je.position.copy(ni)}function Au(){if(!b.started||b.won||b.paused||b.attackCooldown>0)return;if(b.mode==="math"){Ke("考试模式不可以攻击梅东");return}if(b.mode==="rosister"){Ke("萝姐挑战中不能攻击梅东 · 先完成限时题目");return}if(ld(b.mode,b.stage)){Ke("厕所隔间里的梅东没有血条，无法攻击");return}if(J.active&&J.isMech){b.attackCooldown=.3,b.attackAnim=.12,pi.classList.add("cooldown"),xM();return}if(b.attackCooldown=.38,b.attackAnim=.24,pi.classList.add("cooldown"),Ft(250,.05),un(18),!J.active)return;const n=b.mode==="rescue"?eu(it.rescued):od(),e=Yy.copy(je.position).sub(xe.position),t=Math.hypot(e.x,e.z),i=3.45+n.strength*Bs.strengthRange;if(t>i){b.combo=0,b.comboTimer=0,Ke("距离太远");return}e.y=0,e.lengthSq()&&(xe.rotation.y=Math.atan2(e.x,e.z)),b.combo=b.comboTimer>0?Math.min(3,b.combo+1):1,b.comboTimer=.95;const r=ey(b.combo)+n.attack*Bs.attackDamage;J.hp-=r,md(J,.48+b.combo*.05),J.hitFlash=.2,e.lengthSq()&&(e.normalize(),je.position.addScaledVector(e,.48+b.combo*.12+n.strength*Bs.strengthKnockback),xe.position.addScaledVector(e,.12));const s=J.stage*ke+3,o=(J.stage+1)*ke-3;je.position.x=$t.clamp(je.position.x,-6.5,6.5),je.position.z=$t.clamp(je.position.z,s,o),Ba(),po(!0),Ft(500+b.combo*90,.09),un([20,25,35]),Ke(`${b.combo>1?`${b.combo} 连击 · `:""}${r} DAMAGE`),J.hp<=0&&wu()}function _a(){const n=fi[b.stage],e=it.keys.has(b.stage),t=eu(it.rescued);fa.querySelector("b").textContent=n&&!it.rescued.has(b.stage)?e?"🔑 已取得本区钥匙":`🔑 寻找 ${n.name} 的钥匙`:"🔑 当前区域已完成",fa.querySelector("span").textContent=`已营救 ${it.rescued.size} / ${fi.length}`,nM.textContent=`攻击 +${t.attack} · 力量 +${t.strength} · 弹跳 +${t.jump} · 速度 +${t.speed}`}function Pl(){for(const[n,e]of Js.entries())ua[e].visible=!it.rescued.has(n),ha[e].visible=!it.keys.has(n)&&!it.rescued.has(n),pr[e].visible=b.mode==="rescue"&&it.rescued.has(n);ua[0].visible=!1,ha[0].visible=!1,pr[0].visible=!1,_a()}function yM(){const n=Ct.question;if(n){if(rM.textContent=n.prompt,Pc.replaceChildren(),Hr.value="",Ct.selected="",n.kind==="choice"){Hr.placeholder="也可输入选项文字";for(const e of n.choices){const t=document.createElement("button");t.type="button",t.textContent=e,t.onclick=()=>{Ct.selected=e,Hr.value=e;for(const i of Pc.children)i.classList.toggle("selected",i===t)},Pc.append(t)}}else Hr.placeholder="输入数字答案";qd.textContent=`${Math.ceil(Ct.remaining)} 秒`,mr.classList.remove("hidden"),setTimeout(()=>Hr.focus(),80)}}function sp(n){Ct.question=GS(n),Ct.remaining=Ct.question.limit,Ct.answerOpen=!0,yM(),Fn.textContent=Ed[n],Ke(`🥕 萝姐挑战：第 ${n+1} 题开始，梅东正在逼近！`)}function op(n){Ct.answerOpen=!1,mr.classList.add("hidden"),Vs(n)}function MM(){if(!Ct.answerOpen)return;const n=Hr.value||Ct.selected;if(!VS(Ct.question,n)){op("回答错误，梅东把你击杀了");return}const e=b.stage;if(Ct.answerOpen=!1,mr.classList.add("hidden"),Ft(900,.18),e===Ii()){Lu();return}b.stage=e+1,ho.forEach((t,i)=>us(i,!1)),b.checkpoint.set(0,.02,b.stage*ke+2),xe.position.copy(b.checkpoint),b.velocity.set(0,0,0),J.stage=b.stage,Na().forEach((t,i)=>za(t,i<=b.stage)),Fa.textContent=Su()[b.stage],Oa.style.width=`${(b.stage+1)/Nn()*100}%`,Fn.textContent=Ua()[b.stage],Ke(`✓ 答案正确 · 检查点 ${b.stage+1} 已解锁`),b.mode==="rosister"&&b.stage===Ii()&&sp(b.stage)}function Ll(n){b.stage=n,b.checkpoint.set(0,.02,n*ke+2),xe.position.copy(b.checkpoint),b.velocity.set(0,0,0),Fa.textContent=ru[n],Oa.style.width=`${(n+1)/vr.math.stageCount*100}%`,Fn.textContent=yd[n],au.forEach((e,t)=>za(e,t<=n)),J.active=!1,Tu(!1),je.position.set(0,.02,n*ke+17),je.rotation.y=Math.PI,je.visible=!0,ln.visible=!1,b.mathQuestion=ud(n),iM.textContent=b.mathQuestion.prompt,Sd(Ad[n],b.mathQuestion.prompt,"#f0f5de"),da.value="",fo.classList.remove("hidden"),setTimeout(()=>da.focus(),120)}function yr(n=!1){if((n||b.mode==="escape"||b.mode==="rescue")&&Qd(),n){cr&&(clearTimeout(cr),cr=0),b.stage=0,b.start=performance.now(),b.checkpoint.set(0,.02,2),b.won=!1,b.paused=!1,b.invulnerable=0,b.moneyGun=!1,b.mathQuestion=null,b.keys={},so=oo=0,va=!1,pa.classList.add("hidden"),b.yaw=0,b.pitch=.48,b.cameraDistance=8,Ia(),Pt.visible=!0,dr.visible=b.mode==="math",Ca.visible=b.mode==="rescue",hM(),fM(),fo.classList.toggle("hidden",b.mode!=="math"),mr.classList.toggle("hidden",b.mode!=="rosister"),fa.classList.toggle("hidden",b.mode!=="rescue"),document.body.dataset.mode=b.mode,b.mode==="rescue"&&(it.keys.clear(),it.rescued.clear(),it.reminderCooldown=0,it.allyCooldown=0),Ct.question=null,Ct.answerOpen=!1,Ct.remaining=0,mr.classList.add("hidden");for(const e of pr)e.visible=!1;Pl(),J.active=!1,J.isRosister=!1,J.mode="idle",Tu(!1),je.visible=!1,ln.visible=!1,ki.classList.add("hidden"),ki.classList.remove("danger","hit"),Al.classList.remove("hidden"),Rl.classList.add("hidden"),yu.classList.add("hidden"),Fi.classList.add("hidden"),pi.classList.add("hidden"),no.textContent="攻击 [F]",Zn.visible=!1,Dn.visible=!0;for(const e of jr)zt.remove(e);jr.length=0,ho.forEach((e,t)=>us(t,b.mode!=="rosister")),document.querySelector("#win").classList.add("hidden"),Fa.textContent=Su()[0],Oa.style.width=`${100/Nn()}%`,Fn.textContent=Ua()[0],Na().forEach((e,t)=>za(e,t===0)),b.mode==="math"&&Ll(0),b.mode==="rosister"&&rp(0)}else if(b.mode==="math")Ll(b.stage);else if(J.active){J.hp=J.maxHp,J.hitFlash=0,pd(J,J.isMech?2.4:1);const e=ad(J.stage,{isMech:J.isMech,stageLength:ke});je.position.set(e.x,.02,e.z),ln.visible=!1,us(J.stage,b.mode!=="rosister"),J.isMech?(np(),no.textContent=b.moneyGun?"发射 [F]":"获取武器",Fi.classList.toggle("hidden",!b.moneyGun),Fn.textContent=b.moneyGun?"瞄准并摧毁机甲两条手臂":"前往绿色武器箱取得钞票枪"):Ba(),po(!0)}b.mode==="rescue"&&Pl(),xe.position.copy(b.checkpoint),xe.visible=!0,b.velocity.set(0,0,0),b.grounded=!0,b.coyote=.1,b.jumpBuffer=0,b.attackCooldown=0,b.attackAnim=0,b.combo=0,b.comboTimer=0,pi.classList.remove("cooldown")}function za(n,e){for(const t of["pad","rim","beacon","flag"])n.userData[t].material=e?C.green:C.greenOff}function Ft(n=440,e=.09){qn.tone(n,e)}function Ke(n){Cc.textContent=n,Cc.classList.add("show"),clearTimeout(Ke.t),Ke.t=setTimeout(()=>Cc.classList.remove("show"),1200)}function Ru(n){if(b.mode==="math"||n<=b.stage)return;if(b.mode==="rosister"){xe.position.z=n*ke-.85,b.velocity.z=Math.min(0,b.velocity.z),Ct.answerOpen||sp(b.stage);return}if(b.mode==="rescue"){const r=WS(n);if(r!==null&&!it.rescued.has(r)){xe.position.z=n*ke-.85,b.velocity.z=Math.min(0,b.velocity.z),it.reminderCooldown<=0&&(Ke(`你需要找到钥匙营救 ${fi[r].name} 球员！`),it.reminderCooldown=1.4);return}}b.stage=n,b.checkpoint.set(0,.02,n*ke+2),Fa.textContent=Su()[n],Oa.style.width=`${(n+1)/Nn()*100}%`,Fn.textContent=Ua()[n],Na().forEach((r,s)=>za(r,s<=n));const e=(b.mode==="escape"||b.mode==="rescue")&&n===10,t=ld(b.mode,n),i=b.mode==="rescue"&&n===wa;Ke(e?"🚻 地下证件库后方竟然是监狱厕所":t?"提示：正确隔间的位置每局都固定":i?"⚑ 最终检查点 · 九位球员准备围攻梅东":n===Ii()?`⚑ 最终检查点 · ${b.mode==="rescue"?"带领全员撤离":"准备撤离"}`:`⚑ 检查点 ${n+1} / ${Nn()} 已激活`),Ft(e?330:740,.15),un(e?[45,35,70]:45),b.mode==="rescue"&&_a(),t&&us(n,!1),(xu.includes(n)||i)&&!t&&(cr&&clearTimeout(cr),cr=setTimeout(()=>{cr=0,b.started&&!b.won&&b.stage===n&&rp(n)},350))}function EM(n,e=.5){return qS(xe.position,ks(n),e)}function bM(n,e=.28){const t=n.geometry?.parameters;return n.parent?.userData.rotate&&t?.width?(n.getWorldPosition(sf),n.getWorldQuaternion(of),af.setFromQuaternion(of,"YXZ"),YS(xe.position,sf,af.y,t.width,t.height,t.depth,e)):EM(n,e)}function Vs(n="被抓住了"){b.invulnerable>0||(Ke(`✖ ${n} · 返回检查点`),Ft(120,.24),un([90,50,90]),yr(),b.invulnerable=1.15)}function Cu(n){const e=Math.floor(n/60).toString().padStart(2,"0"),t=Math.floor(n%60).toString().padStart(2,"0");return`${e}:${t}`}const ff=document.querySelector("#bestTime");function ap(){return`block-break-best-${b.mode}-${Nn()}-stage-v1`}function cp(){try{return Number(localStorage.getItem(ap()))||0}catch{return 0}}function Pu(){if(b.mode==="math"){ff.textContent="不限时作答";return}const n=cp();ff.textContent=n?`${Nn()}关最佳 ${Cu(n)}`:`${Nn()}关最佳 --:--`}function TM(n){if(b.mode==="math")return;const e=cp();if(!e||n<e){try{localStorage.setItem(ap(),String(n))}catch{}Ke(`★ 新的${Nn()}关最佳纪录！`)}Pu()}function ka(){lM.textContent=String(vt.packCount),uM.textContent=String(vt.packCount),Eu.classList.contains("hidden")===!1&&!Qr.classList.contains("hidden")&&(Zd.textContent=`剩余未开启卡包：${vt.packCount} 包`),Jd.classList.toggle("hidden",vt.packCount<=0)}function lp(){Qr.classList.add("hidden"),Qr.classList.remove("duplicate"),Zd.textContent=`未开启卡包：${vt.packCount} 包`,Eu.classList.remove("hidden"),ka()}function wM(){if(vt.packCount<=0){Ke("当前没有未开启的卡包");return}const n=IS(),e=xr.find(i=>i.id===n),t=vt.clubPackSkins.includes(n);vt.packCount--,t||vt.clubPackSkins.push(n),Da(),xs(),ka(),Qr.classList.remove("hidden"),Qr.classList.toggle("duplicate",t),Qr.innerHTML=t?`抽中了 <b>${e.name}</b>！<br>这套皮肤已经拥有，本次不重复增加。`:`🎉 抽中了 <b>${e.name}</b>！<br>已加入皮肤衣柜，可在任意模式使用。`,Kd.textContent=vt.packCount?"再开一包":"关闭",Ia()}function Lu(n=performance.now()){b.won||(b.won=!0,b.wonTime=(n-b.start)/1e3,Ft(880,.4),un([50,40,100]),oM.textContent=wl().winTitle,aM.textContent=wl().winCopy,document.querySelector("#finalTime").textContent=b.mode==="math"?"PASS":Cu(b.wonTime),TM(b.wonTime),vt.packCount++,b.mode==="rescue"?(vt.rescueCompleted=!0,qo.textContent="🏆 已解锁其余球星皮肤！ · 🎁 获得 1 包俱乐部球衣卡包"):b.mode==="rosister"?(vt.rosisterCompleted=!0,qo.textContent="🥕 萝姐皮肤已解锁！ · 🎁 获得 1 包俱乐部球衣卡包"):qo.textContent="🎁 获得 1 包俱乐部球衣卡包！",Da(),xs(),ka(),qo.classList.remove("hidden"),fo.classList.add("hidden"),mr.classList.add("hidden"),document.querySelector("#win").classList.remove("hidden"))}function Ha(n){!b.started||b.won||(n&&!b.paused?(b.paused=!0,b.pauseStarted=performance.now(),pa.classList.remove("hidden"),qn.pause()):!n&&b.paused&&(b.start+=performance.now()-b.pauseStarted,b.paused=!1,b.last=performance.now(),pa.classList.add("hidden"),qn.resume(),Ke("▶ 已继续游戏")))}const Yt={frames:0,sampleStart:0,fps:60,lowSamples:0};function AM(n){for(let e=jr.length-1;e>=0;e--){const t=jr[e],i=t.userData;i.progress+=n*4.8,t.position.lerpVectors(i.start,i.end,Math.min(1,i.progress)),t.rotation.y+=n*14,i.progress>=1&&(zt.remove(t),jr.splice(e,1))}}function RM(n,e){it.reminderCooldown=Math.max(0,it.reminderCooldown-n),it.allyCooldown=Math.max(0,it.allyCooldown-n);for(const[l,u]of Js.entries()){if(it.rescued.has(l))continue;const f=ha[u],d=ua[u],p=fi[l],g=Math.hypot(xe.position.x-f.position.x,xe.position.z-f.position.z),x=Math.hypot(xe.position.x-d.position.x,xe.position.z-d.position.z);if(!it.keys.has(l)&&g<1.45&&(it.keys.add(l),f.visible=!1,Ke(`🔑 找到 ${p.name} 的钥匙`),Ft(720,.14),_a()),!it.keys.has(l)&&x<2&&it.reminderCooldown<=0&&(Ke(`先找到 ${p.name} 的钥匙`),it.reminderCooldown=1.4),it.keys.has(l)&&x<2){it.rescued.add(l),d.visible=!1;const m=pr[u],h=US[p.buff];m.position.copy(xe.position).add(new R(0,0,-1)),m.visible=!0,Ke(`✓ 成功营救 ${p.name} · ${h} +1`),Ft(940,.25),un([30,25,60]),_a()}}const t=[...it.rescued].sort((l,u)=>l-u),i=J.active;let r=Math.sin(xe.rotation.y),s=Math.cos(xe.rotation.y);if(i){const l=je.position.x-xe.position.x,u=je.position.z-xe.position.z,f=Math.max(.001,Math.hypot(l,u));r=l/f,s=u/f}const o=s,a=-r,c=i?kS:zS;for(const[l,u]of t.entries()){const f=Js[u],[d,p]=c[l],g=i?.1:.32,x=d+Math.sin(e*75e-5+u*2.17)*g,m=p+Math.cos(e*61e-5+u*1.73)*g*.75;wc.set(xe.position.x+r*m+o*x,.02,xe.position.z+s*m+a*x);const h=pr[f],A=h.position.distanceTo(wc);h.position.lerp(wc,1-Math.pow(i?8e-5:.006,n)),h.rotation.y=i?Math.atan2(je.position.x-h.position.x,je.position.z-h.position.z):xe.rotation.y+Math.sin(e*9e-4+u)*.08;const T=Math.min(1,A*1.15),y=Math.sin(e*.013+l*1.31)*.42*T,N=i&&it.allyCooldown>.58;h.userData.fLeg1.rotation.x=y,h.userData.fLeg2.rotation.x=-y,h.userData.fArm1.rotation.x=N?-1.15:-y,h.userData.fArm2.rotation.x=N?-1.15:y}if(i&&it.allyCooldown<=0&&Math.hypot(xe.position.x-je.position.x,xe.position.z-je.position.z)<7.2&&t.length){const l=t.length*5;J.hp-=l,J.hitFlash=.16,it.allyCooldown=.8,Ba(),Ft(420+t.length*18,.04),J.hp<=0&&wu()}}function up(n){requestAnimationFrame(up);const e=Math.min((n-b.last)/1e3||0,.035);if(b.last=n,b.started&&!b.won&&!b.paused&&!It.resolving){b.attackCooldown=Math.max(0,b.attackCooldown-e),b.comboTimer=Math.max(0,b.comboTimer-e),b.invulnerable=Math.max(0,b.invulnerable-e),b.comboTimer===0&&(b.combo=0),pi.classList.toggle("cooldown",b.attackCooldown>0),xe.visible=b.invulnerable<=0||Math.floor(n/85)%2===0;const l=(b.keys.KeyW||b.keys.ArrowUp?1:0)-(b.keys.KeyS||b.keys.ArrowDown?1:0)+oo,u=(b.keys.KeyD||b.keys.ArrowRight?1:0)-(b.keys.KeyA||b.keys.ArrowLeft?1:0)+so;Hn.getWorldDirection(Ji),Ji.y=0,Ji.lengthSq()<.001&&Ji.set(0,0,1),Ji.normalize(),nf.crossVectors(Ji,Hs).normalize();const f=Xy.copy(Ji).multiplyScalar(l).addScaledVector(nf,u),d=b.mode==="rescue"?eu(it.rescued):od(),p=7.2+d.speed*Bs.speed;f.length()>1&&f.normalize(),b.velocity.x=f.x*p,b.velocity.z=f.z*p,va&&(b.jumpBuffer=.15,va=!1),b.jumpBuffer=Math.max(0,b.jumpBuffer-e),b.coyote=b.grounded?.11:Math.max(0,b.coyote-e),b.jumpBuffer>0&&b.coyote>0&&(b.velocity.y=10+d.jump*Bs.jumpVelocity,b.grounded=!1,b.coyote=0,b.jumpBuffer=0,Ft(320,.055)),b.velocity.y-=22*e,Ac.copy(xe.position);const g=$t.clamp(Math.floor(xe.position.z/ke),0,Ii());xe.position.x+=b.velocity.x*e,xe.position.z+=b.velocity.z*e,b.mode==="math"&&(xe.position.z=$t.clamp(xe.position.z,b.stage*ke+1,(b.stage+1)*ke-2));for(const h of Zt){if(!Ds(h)||Math.abs(h.userData.stageIndex-g)>1)continue;const A=ks(h);if(oa(xe.position,A,sa)&&dd(xe.position,A,as)){xe.position.x=Ac.x,xe.position.z=Ac.z;break}}const x=xe.position.y;xe.position.y+=b.velocity.y*e,b.grounded=!1;for(const h of Zt){if(!Ds(h)||Math.abs(h.userData.stageIndex-g)>1)continue;const A=ks(h);if(!oa(xe.position,A,sa))continue;const T=$S(x,xe.position.y,b.velocity.y,A,as);if(T){xe.position.y=T.y,b.velocity.y=T.velocityY,b.grounded=T.grounded;break}}if(xe.position.y<=.02&&(xe.position.y=.02,b.velocity.y=0,b.grounded=!0),f.lengthSq()>.1){xe.rotation.y=Math.atan2(f.x,f.z);const h=Math.sin(n*.013)*.5;Ci.rotation.x=h,Pi.rotation.x=-h,ui.rotation.x=-h,hi.rotation.x=h}else Ci.rotation.x*=.75,Pi.rotation.x*=.75,ui.rotation.x*=.75,hi.rotation.x*=.75;if(b.attackAnim>0&&(b.attackAnim-=e,ui.rotation.x=-1.65,hi.rotation.x=-1.65),b.mode==="escape"&&b.stage===Aa&&!b.moneyGun&&Math.hypot(xe.position.x-Dn.position.x,xe.position.z-Dn.position.z)<1.55&&(b.moneyGun=!0,Dn.visible=!1,Zn.visible=!0,yu.classList.remove("hidden"),no.textContent="发射 [F]",Fn.textContent=J.active?"瞄准并摧毁机甲两条手臂":"钞票枪就绪 · 准备迎战梅东机甲",J.active&&Fi.classList.remove("hidden"),Ke("💵 已取得钞票枪 · 瞄准蓝色机械臂"),Ft(760,.18),un([25,30,55])),gM(),b.mode==="rescue"&&RM(e,n),b.mode==="rosister"&&Ct.answerOpen&&(Ct.remaining-=e,qd.textContent=`${Math.max(0,Math.ceil(Ct.remaining))} 秒`,Ct.remaining<=0&&op("答题超时，梅东把你击杀了")),J.active){const h=qy.copy(xe.position).sub(je.position),A=Math.abs(h.y);h.y=0;const T=h.length(),y=J.mode,N=QS(J,e,T);if(N==="windup"&&(Ke(J.isMech?"⚠ 机甲蓄力冲撞 · 快闪开！":"⚠ 梅东蓄力冲撞 · 快闪开！"),Ft(175,.16),un([35,35,35])),J.mode==="chase"&&T>.1){const M=J.isMech?3.05:J.isRosister?4.1:3.4+J.stage*.1;SM(h.normalize(),M,e)}N==="strike"&&(Ft(95,.18),un([70,35,90]),T<KS&&A<1.45?Vs("被梅东撞倒"):Ke("✓ 闪避成功 · 趁现在反击"));const D=J.stage*ke+3,P=(J.stage+1)*ke-3;if(je.position.x=$t.clamp(je.position.x,-6.5,6.5),je.position.z=$t.clamp(je.position.z,D,P),je.rotation.y=Math.atan2(h.x,h.z),J.hitFlash=Math.max(0,J.hitFlash-e),ln.visible=J.mode==="windup",ln.visible){const M=(J.isMech?1.8:1)*(1+Math.sin(n*.035)*.12);ln.scale.setScalar(M),ln.material.opacity=.52+Math.sin(n*.04)*.2}ep(J.hitFlash>0?16777215:J.mode==="windup"?10098176:0,J.hitFlash>0?1.4:1),ki.classList.toggle("hit",J.hitFlash>0),y!==J.mode&&po(!0);const U=Math.sin(n*.015)*.58;if(J.isMech){Li.rotation.x=Di.rotation.x=-1.18,ai.rotation.x=ci.rotation.x=.72;const M=J.mode==="windup"?-.62:Math.sin(n*.006)*.08;Tn.rotation.x=$t.lerp(Tn.rotation.x,Tn.userData.destroyed?0:M,.12),wn.rotation.x=$t.lerp(wn.rotation.x,wn.userData.destroyed?0:M,.12),Tn.rotation.z=$t.lerp(Tn.rotation.z,Tn.userData.destroyed?-1.28:0,.1),wn.rotation.z=$t.lerp(wn.rotation.z,wn.userData.destroyed?1.28:0,.1)}else J.mode==="windup"?(ai.rotation.x=-1.25,ci.rotation.x=-1.25,Li.rotation.x=.35,Di.rotation.x=-.35):J.mode==="recovery"?(ai.rotation.x=.9,ci.rotation.x=.9,Li.rotation.x=-.2,Di.rotation.x=.2):(Li.rotation.x=U,Di.rotation.x=-U,ai.rotation.x=-U,ci.rotation.x=U)}AM(e),qn.update({moving:f.lengthSq()>.1,grounded:b.grounded,hunter:J.active,now:n/1e3});for(const h of $n)if(!(!Ds(h)||Math.abs(h.userData.stageIndex-g)>1)&&bM(h,h.userData.hitPad??.28)){Vs("触碰危险机关");break}(Math.abs(xe.position.x)>7.2||xe.position.y<-3)&&Vs();const m=Math.max(0,Math.min(Ii(),Math.floor((xe.position.z-1)/ke)));m>b.stage&&Ru(m),b.mode!=="math"&&xe.position.z>Wy()&&b.stage===Ii()&&!J.active&&Lu(n),Jy.textContent=Cu((n-b.start)/1e3)}for(const l of en)l.userData.rotate?l.rotation.y=n*.001*l.userData.speed:l.userData.move==="x"?l.position.x=l.userData.base+Math.sin(n*.001*l.userData.speed+l.userData.phase)*l.userData.amp:l.position.y=l.userData.base+Math.abs(Math.sin(n*.001*l.userData.speed+l.userData.phase))*l.userData.amp;for(const l of Zr)l.rotation.y=$t.lerp(l.rotation.y,l.userData.targetRotation,.16);Na().forEach((l,u)=>{const f=u<=b.stage;l.userData.beacon.scale.y=1+Math.sin(n*.004+u)*.08,l.userData.marker.material.opacity=f?.95:.35}),vd.forEach((l,u)=>l.material.emissiveIntensity=1.55+Math.sin(n*.006+u)*.18),ho.forEach(l=>l.position.y=$t.lerp(l.position.y,l.userData.targetY,.12)),zi.position.y=3.3+Math.sin(n*.002)*.18,zi.rotation.y=Math.sin(n*8e-4)*.08,bn.copy(xe.position).addScaledVector(Hs,J.active&&J.isMech&&b.moneyGun?2.05:1.35),rf.set(0,Math.sin(b.pitch)*b.cameraDistance,-Math.cos(b.pitch)*b.cameraDistance).applyAxisAngle(Hs,b.yaw),wi.copy(bn).add(rf),zt.updateMatrixWorld(),rr.copy(wi).sub(bn);const t=rr.length();rr.normalize(),Dc.set(bn,rr),Dc.far=t,Rc.length=0;const i=$t.clamp(Math.floor(bn.z/ke),0,Ii()),r=Math.min(bn.x,wi.x)-1,s=Math.max(bn.x,wi.x)+1,o=Math.min(bn.z,wi.z)-1,a=Math.max(bn.z,wi.z)+1;for(const l of Zt){if(!Ds(l)||Math.abs(l.userData.stageIndex-i)>1)continue;const u=ks(l);u.max.x>=r&&u.min.x<=s&&u.max.z>=o&&u.min.z<=a&&Rc.push(l)}const c=Dc.intersectObjects(Rc,!1)[0];c&&wi.copy(bn).addScaledVector(rr,Math.max(1.35,c.distance-.35)),Hn.position.lerp(wi,1-Math.pow(4e-4,e)),Hn.lookAt(bn),Hn.updateMatrixWorld(),J.active&&J.isMech&&b.moneyGun?Fi.classList.toggle("locked",!!ip()):Fi.classList.remove("locked"),Rt.render(zt,Hn),b.started&&!b.paused&&!b.won&&(Yt.sampleStart||(Yt.sampleStart=n),Yt.frames++,n-Yt.sampleStart>=2e3&&(Yt.fps=Math.round(Yt.frames*1e3/(n-Yt.sampleStart)),sM.textContent=`${Yt.fps} FPS`,document.body.dataset.fps=String(Yt.fps),gr==="auto"&&!tu&&!ma&&(Yt.lowSamples=Yt.fps<42?Yt.lowSamples+1:0,Yt.lowSamples>=2&&(ma=!0,bu("auto",!1),Ke("已自动切换为流畅画质"))),Yt.frames=0,Yt.sampleStart=n))}const Dc=new Y0;addEventListener("keydown",n=>{if(n.target instanceof HTMLInputElement){n.code==="Escape"&&da.blur();return}b.keys[n.code]=!0,n.code==="Escape"&&!n.repeat&&Ha(!b.paused),n.code==="Space"&&!n.repeat&&(b.jumpBuffer=.15),n.code==="KeyF"&&!n.repeat&&Au(),n.code==="KeyC"&&(b.yaw=xe.rotation.y,b.pitch=.48,b.cameraDistance=8),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault()});addEventListener("keyup",n=>{n.target instanceof HTMLInputElement||(b.keys[n.code]=!1)});let ro=null,Dl=0,Il=0,Du=0;Rt.domElement.addEventListener("pointerdown",n=>{ro===null&&(ro=n.pointerId,Du=0,Dl=n.clientX,Il=n.clientY,Rt.domElement.setPointerCapture?.(n.pointerId))});Rt.domElement.addEventListener("pointermove",n=>{if(n.pointerId===ro){const e=n.clientX-Dl,t=n.clientY-Il;Du+=Math.abs(e)+Math.abs(t),b.yaw-=e*.006,b.pitch=$t.clamp(b.pitch+t*.004,.12,1.05),Dl=n.clientX,Il=n.clientY}});const hp=n=>{n.pointerId===ro&&(n.type==="pointerup"&&Du<6&&J.active&&Au(),ro=null,Rt.domElement.releasePointerCapture?.(n.pointerId))};Rt.domElement.addEventListener("pointerup",hp);Rt.domElement.addEventListener("pointercancel",hp);Rt.domElement.addEventListener("wheel",n=>{n.preventDefault(),b.cameraDistance=$t.clamp(b.cameraDistance+Math.sign(n.deltaY)*.65,4.5,10.5)},{passive:!1});Rt.domElement.addEventListener("contextmenu",n=>n.preventDefault());let so=0,oo=0,va=!1,ao=null;const _r=document.querySelector("#stick"),fp=_r.querySelector("i");function dp(n){const e=_r.getBoundingClientRect(),t=n.clientX-(e.left+e.width/2),i=n.clientY-(e.top+e.height/2),r=Math.max(1,Math.hypot(t,i)),s=Math.min(34,r);so=t/r*s/34,oo=-i/r*s/34,fp.style.transform=`translate(${so*34}px,${-oo*34}px)`}_r.addEventListener("pointerdown",n=>{ao===null&&(ao=n.pointerId,_r.setPointerCapture(n.pointerId),dp(n))});_r.addEventListener("pointermove",n=>{n.pointerId===ao&&dp(n)});const pp=n=>{n.pointerId===ao&&(ao=null,so=oo=0,fp.style.transform="")};_r.addEventListener("pointerup",pp);_r.addEventListener("pointercancel",pp);document.querySelector("#jump").addEventListener("pointerdown",n=>{n.stopPropagation(),va=!0});pi.addEventListener("pointerdown",n=>{n.stopPropagation(),Au()});fo.addEventListener("submit",n=>{n.preventDefault(),b.mathQuestion&&(hd(b.mathQuestion,da.value)?(Ke(`✓ ${$h[Math.floor(Math.random()*$h.length)]}`),Ft(820,.18),b.stage===Ii()?Lu():Ll(b.stage+1)):Vs("答错了，被梅东老师直接击败"))});mr.addEventListener("submit",n=>{n.preventDefault(),MM()});function mo(n){b.mode=n,document.querySelector("#start").classList.add("hidden"),b.started=!0,b.start=performance.now(),qn.start(),yr(!0),Pu()}document.querySelector("#playRosister").onclick=()=>mo("rosister");function CM(n){mo(n.mode);for(const e of n.rescuedIndices||[])it.keys.add(e),it.rescued.add(e);Pl(),Ru(n.stage),xe.position.copy(b.checkpoint),b.velocity.set(0,0,0),Mu.classList.add("hidden"),Ke(n.mode==="escape"&&n.stage===Aa?"🤖 最终 Boss 试玩 · 先到绿色箱子拿钞票枪":n.stage===13?"🔧 第 14 关试玩 · 梅东即将进入安全战区":"🚻 厕所关卡试玩 · 10 位球员与全部增益已就绪")}function mp(){b.started=!1,b.won=!1,b.paused=!1,Qd(),pa.classList.add("hidden"),document.querySelector("#win").classList.add("hidden"),fo.classList.add("hidden"),fa.classList.add("hidden"),je.visible=!1,ki.classList.add("hidden"),pi.classList.add("hidden");for(const n of pr)n.visible=!1;qn.pause(),document.querySelector("#start").classList.remove("hidden")}document.querySelector("#play").onclick=()=>mo("escape");document.querySelector("#playMath").onclick=()=>mo("math");document.querySelector("#playRescue").onclick=()=>mo("rescue");document.querySelector("#reset").onclick=()=>yr(!0);document.querySelector("#again").onclick=()=>yr(!0);document.querySelector("#changeMode").onclick=mp;document.querySelector("#changeModeWin").onclick=mp;document.querySelector("#packs").onclick=lp;Jd.onclick=lp;Kd.onclick=wM;document.querySelector("#closePack").onclick=()=>Eu.classList.add("hidden");let Yo=!0;document.querySelector("#sound").onclick=n=>{Yo=!Yo,qn.setEnabled(Yo),n.currentTarget.textContent=Yo?"🔊":"🔇"};document.querySelector("#pauseButton").onclick=()=>Ha(!0);document.querySelector("#resume").onclick=()=>Ha(!1);document.querySelector("#pauseRestart").onclick=()=>{yr(!0),qn.resume()};Yd.onchange=n=>{ma=!1,Yt.lowSamples=0,bu(n.target.value),Ke(`画质：${n.target.selectedOptions[0].text}`)};for(const n of["skins","openSkins","winSkins"])document.querySelector(`#${n}`).onclick=_M;document.querySelector("#closeSkins").onclick=vM;document.querySelector("#claimMedong").onclick=()=>{vt.claimedMedong=!0,vt.selected="medong",Da(),Mu.classList.add("hidden"),Ia(),xs(),Ke("✓ 梅东皮肤已永久领取")};document.addEventListener("visibilitychange",()=>{document.hidden&&b.started&&!b.won&&Ha(!0)});addEventListener("resize",()=>{Hn.aspect=innerWidth/innerHeight,Hn.fov=innerWidth<innerHeight?66:58,Hn.updateProjectionMatrix(),Rt.setPixelRatio(Math.min(devicePixelRatio,Cn?1:1.5)),Rt.setSize(innerWidth,innerHeight)});Mu.classList.toggle("hidden",vt.claimedMedong);xs();ka();bu(gr,!1);Pu();yr(!0);const df=NS(location.search);df&&CM(df);up(0);
