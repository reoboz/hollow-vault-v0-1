import{bj as Ct,bk as ta,bl as Pt,o as na,C as et,bm as ia,bn as Je,bo as We,bp as _t,bq as si,d as $t,br as vr,bs as li,X as Mt,ba as nt,w as Kt,Y as Dt,D as Lt,j as St,K as sn,V as Ne,bt as ra,s as ci,bu as aa,bv as oa,bw as tn,bx as sa,by as la,bz as ca,bA as fa,bB as da,bC as ua,bD as pa,bE as ha,bF as ma,bG as _a,bH as ga,bI as va,bJ as Sa,bK as Ea,bL as xa,bM as Ma,bN as Wn,v as Ta,bO as Pn,L as vt,bP as pn,bQ as Aa,bR as Vt,bS as Ra,bT as ba,bU as qn,bV as Ca,bW as Zn,bX as Pa,bY as La,bZ as Ua,b_ as wa,b$ as Da,S as It,a3 as gt,e as fn,b5 as En,h as Nt,c0 as _n,ag as Ia,a1 as wt,c1 as an,c2 as Qt,_ as xn,c3 as Bt,a0 as Jt,c4 as Na,$ as Wt,F as fi,b9 as ya,W as Sr,bb as $e,c5 as Fa,ae as gn,c6 as Oa,c7 as Ln,R as Ut,c8 as qt,c9 as ln,ca as Ba,u as Ga,cb as Ha,cc as Yt,cd as Fe,aR as Va,ce as Er,cf as xr,cg as Mr,ch as Mn,ci as Tr,cj as Ar,ck as Wa,t as ka,cl as za,cm as Xa,cn as Ya,a2 as Ka,co as qa,cp as Za,cq as di,cr as $a,cs as vn,ct as Qa,cu as ui,cv as pi,a6 as hi,b7 as Ja,cw as Tn,cx as mi,cy as ja,B as $n,cz as kn,g as Rr,cA as br,cB as Cr,cC as eo,cD as Pr,cE as to,cF as no,cG as io,cH as ro,cI as Lr,cJ as ao,cK as oo,cL as so,cM as Un,cN as wn,cO as Dn,cP as In,cQ as _i,cR as gi,cS as vi,cT as Si,cU as Ei,cV as xi,cW as Mi,cX as Ti,cY as Ai,cZ as zn,c_ as Ri,c$ as bi,d0 as Ci,d1 as Pi,d2 as Li,d3 as Ui,d4 as wi,d5 as Di,d6 as Ii,d7 as Ni,d8 as yi,d9 as Fi,da as Oi,db as Bi,dc as Gi,dd as Hi,de as Vi,df as Wi,dg as ki,dh as zi,di as Xn,dj as Xi,dk as Ur,dl as Yi,dm as wr,dn as Ki,dp as mt,dq as lo,bh as Dr,bg as Ir,bf as Nr,af as yr,be as Fr,bd as Or,bc as Br,dr as Nn,ds as yn,dt as co,du as fo,Z as Gr,dv as cn,dw as jt,m as uo,dx as po,dy as ho,dz as mo,dA as _o,dB as go,T as vo,dC as So,dD as Eo,dE as xo,dF as Mo,dG as qi,dH as To}from"./animationPlayback-Dj6ZrIXM.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hr(){let e=null,n=!1,t=null,i=null;function l(a,f){i=e.requestAnimationFrame(l),t(a,f)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Ao(e){const n=new WeakMap;function t(h,A){const T=h.array,C=h.usage,b=T.byteLength,p=e.createBuffer();e.bindBuffer(A,p),e.bufferData(A,T,C),h.onUploadCallback();let g;if(T instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&T instanceof Float16Array)g=e.HALF_FLOAT;else if(T instanceof Uint16Array)h.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(T instanceof Int16Array)g=e.SHORT;else if(T instanceof Uint32Array)g=e.UNSIGNED_INT;else if(T instanceof Int32Array)g=e.INT;else if(T instanceof Int8Array)g=e.BYTE;else if(T instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(T instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+T);return{buffer:p,type:g,bytesPerElement:T.BYTES_PER_ELEMENT,version:h.version,size:b}}function i(h,A,T){const C=A.array,b=A.updateRanges;if(e.bindBuffer(T,h),b.length===0)e.bufferSubData(T,0,C);else{b.sort((g,U)=>g.start-U.start);let p=0;for(let g=1;g<b.length;g++){const U=b[p],G=b[g];G.start<=U.start+U.count+1?U.count=Math.max(U.count,G.start+G.count-U.start):(++p,b[p]=G)}b.length=p+1;for(let g=0,U=b.length;g<U;g++){const G=b[g];e.bufferSubData(T,G.start*C.BYTES_PER_ELEMENT,C,G.start,G.count)}A.clearUpdateRanges()}A.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const A=n.get(h);A&&(e.deleteBuffer(A.buffer),n.delete(h))}function f(h,A){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const C=n.get(h);(!C||C.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const T=n.get(h);if(T===void 0)n.set(h,t(h,A));else if(T.version<h.version){if(T.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(T.buffer,h,A),T.version=h.version}}return{get:l,remove:a,update:f}}var Ro=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bo=`#ifdef USE_ALPHAHASH
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
#endif`,Co=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Po=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wo=`#ifdef USE_AOMAP
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
#endif`,Do=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Io=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,No=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bo=`#ifdef USE_IRIDESCENCE
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
#endif`,Go=`#ifdef USE_BUMPMAP
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
#endif`,Ho=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ko=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ko=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qo=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Zo=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$o=`vec3 transformedNormal = objectNormal;
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
#endif`,Qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,es=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ts="gl_FragColor = linearToOutputTexel( gl_FragColor );",ns=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,is=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rs=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,as=`#ifdef USE_ENVMAP
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
#endif`,os=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ss=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ls=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ds=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,us=`#ifdef USE_GRADIENTMAP
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
}`,ps=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ms=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_s=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,gs=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ss=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Es=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ms=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ts=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,As=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bs=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cs=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ps=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ls=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Us=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ws=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ds=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Is=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ns=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ys=`#if defined( USE_POINTS_UV )
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
#endif`,Fs=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Os=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vs=`#ifdef USE_MORPHTARGETS
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
#endif`,Ws=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ks=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zs=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ys=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ks=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qs=`#ifdef USE_NORMALMAP
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
#endif`,Zs=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$s=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qs=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Js=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,js=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,el=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,il=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,al=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ol=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ll=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,cl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,fl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,dl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ul=`#ifdef USE_SKINNING
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
#endif`,pl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hl=`#ifdef USE_SKINNING
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
#endif`,ml=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_l=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sl=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,El=`#ifdef USE_TRANSMISSION
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
#endif`,xl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Al=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bl=`uniform sampler2D t2D;
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
}`,Cl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ll=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ul=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wl=`#include <common>
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
}`,Dl=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Il=`#define DISTANCE
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
}`,Nl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ol=`uniform float scale;
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
}`,Bl=`uniform vec3 diffuse;
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
}`,Gl=`#include <common>
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
}`,Hl=`uniform vec3 diffuse;
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
}`,Vl=`#define LAMBERT
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
}`,Wl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kl=`#define MATCAP
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
}`,zl=`#define MATCAP
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
}`,Xl=`#define NORMAL
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
}`,Yl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kl=`#define PHONG
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
}`,ql=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Zl=`#define STANDARD
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
}`,$l=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Ql=`#define TOON
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
}`,Jl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jl=`uniform float size;
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
}`,ec=`uniform vec3 diffuse;
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
}`,tc=`#include <common>
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
}`,nc=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ic=`uniform float rotation;
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
}`,rc=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Ro,alphahash_pars_fragment:bo,alphamap_fragment:Co,alphamap_pars_fragment:Po,alphatest_fragment:Lo,alphatest_pars_fragment:Uo,aomap_fragment:wo,aomap_pars_fragment:Do,batching_pars_vertex:Io,batching_vertex:No,begin_vertex:yo,beginnormal_vertex:Fo,bsdfs:Oo,iridescence_fragment:Bo,bumpmap_pars_fragment:Go,clipping_planes_fragment:Ho,clipping_planes_pars_fragment:Vo,clipping_planes_pars_vertex:Wo,clipping_planes_vertex:ko,color_fragment:zo,color_pars_fragment:Xo,color_pars_vertex:Yo,color_vertex:Ko,common:qo,cube_uv_reflection_fragment:Zo,defaultnormal_vertex:$o,displacementmap_pars_vertex:Qo,displacementmap_vertex:Jo,emissivemap_fragment:jo,emissivemap_pars_fragment:es,colorspace_fragment:ts,colorspace_pars_fragment:ns,envmap_fragment:is,envmap_common_pars_fragment:rs,envmap_pars_fragment:as,envmap_pars_vertex:os,envmap_physical_pars_fragment:gs,envmap_vertex:ss,fog_vertex:ls,fog_pars_vertex:cs,fog_fragment:fs,fog_pars_fragment:ds,gradientmap_pars_fragment:us,lightmap_pars_fragment:ps,lights_lambert_fragment:hs,lights_lambert_pars_fragment:ms,lights_pars_begin:_s,lights_toon_fragment:vs,lights_toon_pars_fragment:Ss,lights_phong_fragment:Es,lights_phong_pars_fragment:xs,lights_physical_fragment:Ms,lights_physical_pars_fragment:Ts,lights_fragment_begin:As,lights_fragment_maps:Rs,lights_fragment_end:bs,lightprobes_pars_fragment:Cs,logdepthbuf_fragment:Ps,logdepthbuf_pars_fragment:Ls,logdepthbuf_pars_vertex:Us,logdepthbuf_vertex:ws,map_fragment:Ds,map_pars_fragment:Is,map_particle_fragment:Ns,map_particle_pars_fragment:ys,metalnessmap_fragment:Fs,metalnessmap_pars_fragment:Os,morphinstance_vertex:Bs,morphcolor_vertex:Gs,morphnormal_vertex:Hs,morphtarget_pars_vertex:Vs,morphtarget_vertex:Ws,normal_fragment_begin:ks,normal_fragment_maps:zs,normal_pars_fragment:Xs,normal_pars_vertex:Ys,normal_vertex:Ks,normalmap_pars_fragment:qs,clearcoat_normal_fragment_begin:Zs,clearcoat_normal_fragment_maps:$s,clearcoat_pars_fragment:Qs,iridescence_pars_fragment:Js,opaque_fragment:js,packing:el,premultiplied_alpha_fragment:tl,project_vertex:nl,dithering_fragment:il,dithering_pars_fragment:rl,roughnessmap_fragment:al,roughnessmap_pars_fragment:ol,shadowmap_pars_fragment:sl,shadowmap_pars_vertex:ll,shadowmap_vertex:cl,shadowmask_pars_fragment:fl,skinbase_vertex:dl,skinning_pars_vertex:ul,skinning_vertex:pl,skinnormal_vertex:hl,specularmap_fragment:ml,specularmap_pars_fragment:_l,tonemapping_fragment:gl,tonemapping_pars_fragment:vl,transmission_fragment:Sl,transmission_pars_fragment:El,uv_pars_fragment:xl,uv_pars_vertex:Ml,uv_vertex:Tl,worldpos_vertex:Al,background_vert:Rl,background_frag:bl,backgroundCube_vert:Cl,backgroundCube_frag:Pl,cube_vert:Ll,cube_frag:Ul,depth_vert:wl,depth_frag:Dl,distance_vert:Il,distance_frag:Nl,equirect_vert:yl,equirect_frag:Fl,linedashed_vert:Ol,linedashed_frag:Bl,meshbasic_vert:Gl,meshbasic_frag:Hl,meshlambert_vert:Vl,meshlambert_frag:Wl,meshmatcap_vert:kl,meshmatcap_frag:zl,meshnormal_vert:Xl,meshnormal_frag:Yl,meshphong_vert:Kl,meshphong_frag:ql,meshphysical_vert:Zl,meshphysical_frag:$l,meshtoon_vert:Ql,meshtoon_frag:Jl,points_vert:jl,points_frag:ec,shadow_vert:tc,shadow_frag:nc,sprite_vert:ic,sprite_frag:rc},ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ne},probesMax:{value:new Ne},probesResolution:{value:new Ne}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},bt={basic:{uniforms:mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:mt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:mt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:mt([ce.points,ce.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:mt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:mt([ce.common,ce.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:mt([ce.sprite,ce.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:mt([ce.common,ce.displacementmap,{referencePosition:{value:new Ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:mt([ce.lights,ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};bt.physical={uniforms:mt([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const hn={r:0,b:0,g:0},ac=new $t,Vr=new Fe;Vr.set(-1,0,0,0,1,0,0,0,1);function oc(e,n,t,i,l,a){const f=new et(0);let h=l===!0?0:1,A,T,C=null,b=0,p=null;function g(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const m=D.backgroundBlurriness>0;z=n.get(z,m)}return z}function U(D){let z=!1;const m=g(D);m===null?d(f,h):m&&m.isColor&&(d(m,1),z=!0);const E=e.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(e.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function G(D,z){const m=g(z);m&&(m.isCubeTexture||m.mapping===Tn)?(T===void 0&&(T=new Nt(new $n(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:kn(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),T.geometry.deleteAttribute("normal"),T.geometry.deleteAttribute("uv"),T.onBeforeRender=function(E,_,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(T.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(T)),T.material.uniforms.envMap.value=m,T.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,T.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,T.material.uniforms.backgroundRotation.value.setFromMatrix4(ac.makeRotationFromEuler(z.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&T.material.uniforms.backgroundRotation.value.premultiply(Vr),T.material.toneMapped=nt.getTransfer(m.colorSpace)!==$e,(C!==m||b!==m.version||p!==e.toneMapping)&&(T.material.needsUpdate=!0,C=m,b=m.version,p=e.toneMapping),T.layers.enableAll(),D.unshift(T,T.geometry,T.material,0,0,null)):m&&m.isTexture&&(A===void 0&&(A=new Nt(new Rr(2,2),new It({name:"BackgroundMaterial",uniforms:kn(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(A)),A.material.uniforms.t2D.value=m,A.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,A.material.toneMapped=nt.getTransfer(m.colorSpace)!==$e,m.matrixAutoUpdate===!0&&m.updateMatrix(),A.material.uniforms.uvTransform.value.copy(m.matrix),(C!==m||b!==m.version||p!==e.toneMapping)&&(A.material.needsUpdate=!0,C=m,b=m.version,p=e.toneMapping),A.layers.enableAll(),D.unshift(A,A.geometry,A.material,0,0,null))}function d(D,z){D.getRGB(hn,br(e)),t.buffers.color.setClear(hn.r,hn.g,hn.b,z,a)}function s(){T!==void 0&&(T.geometry.dispose(),T.material.dispose(),T=void 0),A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,z=1){f.set(D),h=z,d(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,d(f,h)},render:U,addToRenderList:G,dispose:s}}function sc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=p(null);let a=l,f=!1;function h(O,V,q,w,Y){let Q=!1;const K=b(O,w,q,V);a!==K&&(a=K,T(a.object)),Q=g(O,w,q,Y),Q&&U(O,w,q,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(Q||f)&&(f=!1,m(O,V,q,w),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function A(){return e.createVertexArray()}function T(O){return e.bindVertexArray(O)}function C(O){return e.deleteVertexArray(O)}function b(O,V,q,w){const Y=w.wireframe===!0;let Q=i[V.id];Q===void 0&&(Q={},i[V.id]=Q);const K=O.isInstancedMesh===!0?O.id:0;let ne=Q[K];ne===void 0&&(ne={},Q[K]=ne);let Z=ne[q.id];Z===void 0&&(Z={},ne[q.id]=Z);let j=Z[Y];return j===void 0&&(j=p(A()),Z[Y]=j),j}function p(O){const V=[],q=[],w=[];for(let Y=0;Y<t;Y++)V[Y]=0,q[Y]=0,w[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:w,object:O,attributes:{},index:null}}function g(O,V,q,w){const Y=a.attributes,Q=V.attributes;let K=0;const ne=q.getAttributes();for(const Z in ne)if(ne[Z].location>=0){const ee=Y[Z];let be=Q[Z];if(be===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(be=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(be=O.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;K++}return a.attributesNum!==K||a.index!==w}function U(O,V,q,w){const Y={},Q=V.attributes;let K=0;const ne=q.getAttributes();for(const Z in ne)if(ne[Z].location>=0){let ee=Q[Z];ee===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),Y[Z]=be,K++}a.attributes=Y,a.attributesNum=K,a.index=w}function G(){const O=a.newAttributes;for(let V=0,q=O.length;V<q;V++)O[V]=0}function d(O){s(O,0)}function s(O,V){const q=a.newAttributes,w=a.enabledAttributes,Y=a.attributeDivisors;q[O]=1,w[O]===0&&(e.enableVertexAttribArray(O),w[O]=1),Y[O]!==V&&(e.vertexAttribDivisor(O,V),Y[O]=V)}function D(){const O=a.newAttributes,V=a.enabledAttributes;for(let q=0,w=V.length;q<w;q++)V[q]!==O[q]&&(e.disableVertexAttribArray(q),V[q]=0)}function z(O,V,q,w,Y,Q,K){K===!0?e.vertexAttribIPointer(O,V,q,Y,Q):e.vertexAttribPointer(O,V,q,w,Y,Q)}function m(O,V,q,w){G();const Y=w.attributes,Q=q.getAttributes(),K=V.defaultAttributeValues;for(const ne in Q){const Z=Q[ne];if(Z.location>=0){let j=Y[ne];if(j===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const ee=j.normalized,be=j.itemSize,Re=n.get(j);if(Re===void 0)continue;const it=Re.buffer,ke=Re.type,ze=Re.bytesPerElement,W=ke===e.INT||ke===e.UNSIGNED_INT||j.gpuType===Lr;if(j.isInterleavedBufferAttribute){const $=j.data,Ee=$.stride,Ue=j.offset;if($.isInstancedInterleavedBuffer){for(let me=0;me<Z.locationSize;me++)s(Z.location+me,$.meshPerAttribute);O.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<Z.locationSize;me++)d(Z.location+me);e.bindBuffer(e.ARRAY_BUFFER,it);for(let me=0;me<Z.locationSize;me++)z(Z.location+me,be/Z.locationSize,ke,ee,Ee*ze,(Ue+be/Z.locationSize*me)*ze,W)}else{if(j.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)s(Z.location+$,j.meshPerAttribute);O.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let $=0;$<Z.locationSize;$++)d(Z.location+$);e.bindBuffer(e.ARRAY_BUFFER,it);for(let $=0;$<Z.locationSize;$++)z(Z.location+$,be/Z.locationSize,ke,ee,be*ze,be/Z.locationSize*$*ze,W)}}else if(K!==void 0){const ee=K[ne];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(Z.location,ee);break;case 3:e.vertexAttrib3fv(Z.location,ee);break;case 4:e.vertexAttrib4fv(Z.location,ee);break;default:e.vertexAttrib1fv(Z.location,ee)}}}}D()}function E(){v();for(const O in i){const V=i[O];for(const q in V){const w=V[q];for(const Y in w){const Q=w[Y];for(const K in Q)C(Q[K].object),delete Q[K];delete w[Y]}}delete i[O]}}function _(O){if(i[O.id]===void 0)return;const V=i[O.id];for(const q in V){const w=V[q];for(const Y in w){const Q=w[Y];for(const K in Q)C(Q[K].object),delete Q[K];delete w[Y]}}delete i[O.id]}function N(O){for(const V in i){const q=i[V];for(const w in q){const Y=q[w];if(Y[O.id]===void 0)continue;const Q=Y[O.id];for(const K in Q)C(Q[K].object),delete Q[K];delete Y[O.id]}}}function c(O){for(const V in i){const q=i[V],w=O.isInstancedMesh===!0?O.id:0,Y=q[w];if(Y!==void 0){for(const Q in Y){const K=Y[Q];for(const ne in K)C(K[ne].object),delete K[ne];delete Y[Q]}delete q[w],Object.keys(q).length===0&&delete i[V]}}}function v(){y(),f=!0,a!==l&&(a=l,T(a.object))}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:v,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:_,releaseStatesOfObject:c,releaseStatesOfProgram:N,initAttributes:G,enableAttribute:d,disableUnusedAttributes:D}}function lc(e,n,t){let i;function l(A){i=A}function a(A,T){e.drawArrays(i,A,T),t.update(T,i,1)}function f(A,T,C){C!==0&&(e.drawArraysInstanced(i,A,T,C),t.update(T,i,C))}function h(A,T,C){if(C===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,A,0,T,0,C);let p=0;for(let g=0;g<C;g++)p+=T[g];t.update(p,i,1)}this.setMode=l,this.render=a,this.renderInstances=f,this.renderMultiDraw=h}function cc(e,n,t,i){let l;function a(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Ut&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const c=N===Dt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Ct&&N!==Bt&&!c&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function A(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let T=t.precision!==void 0?t.precision:"highp";const C=A(T);C!==T&&(We("WebGLRenderer:",T,"not supported, using",C,"instead."),T=C);const b=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),U=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),G=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),s=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),z=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),_=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:A,textureFormatReadable:f,textureTypeReadable:h,precision:T,logarithmicDepthBuffer:b,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:U,maxTextureSize:G,maxCubemapSize:d,maxAttributes:s,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:m,maxSamples:E,samples:_}}function fc(e){const n=this;let t=null,i=0,l=!1,a=!1;const f=new Va,h=new Fe,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(b,p){const g=b.length!==0||p||i!==0||l;return l=p,i=b.length,g},this.beginShadows=function(){a=!0,C(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(b,p){t=C(b,p,0)},this.setState=function(b,p,g){const U=b.clippingPlanes,G=b.clipIntersection,d=b.clipShadows,s=e.get(b);if(!l||U===null||U.length===0||a&&!d)a?C(null):T();else{const D=a?0:i,z=D*4;let m=s.clippingState||null;A.value=m,m=C(U,p,z,g);for(let E=0;E!==z;++E)m[E]=t[E];s.clippingState=m,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=D}};function T(){A.value!==t&&(A.value=t,A.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function C(b,p,g,U){const G=b!==null?b.length:0;let d=null;if(G!==0){if(d=A.value,U!==!0||d===null){const s=g+G*4,D=p.matrixWorldInverse;h.getNormalMatrix(D),(d===null||d.length<s)&&(d=new Float32Array(s));for(let z=0,m=g;z!==G;++z,m+=4)f.copy(b[z]).applyMatrix4(D,h),f.normal.toArray(d,m),d[m+3]=f.constant}A.value=d,A.needsUpdate=!0}return n.numPlanes=G,n.numIntersection=0,d}}const Zt=4,dc=6,uc=20,pc=256,nn=new Sr,Zi=new et;let Fn=null,On=0,Bn=0,Gn=!1;const hc=new Ne,Ht=new Ne;class $i{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,a={}){const{size:f=256,position:h=hc}=a;Fn=this._renderer.getRenderTarget(),On=this._renderer.getActiveCubeFace(),Bn=this._renderer.getActiveMipmapLevel(),Gn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(n,i,l,A,h),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ji(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ji(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Fn,On,Bn),this._renderer.xr.enabled=Gn,n.scissorTest=!1,Xt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===cn||n.mapping===jt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Fn=this._renderer.getRenderTarget(),On=this._renderer.getActiveCubeFace(),Bn=this._renderer.getActiveMipmapLevel(),Gn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Dt,format:Ut,colorSpace:Gr,depthBuffer:!1},l=Qi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qi(n,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mc(a)),this._blurMaterial=gc(a,n,t),this._ggxMaterial=_c(a,n,t)}return l}_compileMaterial(n){const t=new Nt(new fn,n);this._renderer.compile(t,nn)}_sceneToCubeUV(n,t,i,l,a){const A=new gn(90,1,t,i),T=[1,-1,1,1,1,1],C=[1,1,1,-1,-1,-1],b=this._renderer,p=b.autoClear,g=b.toneMapping;b.getClearColor(Zi),b.toneMapping=Pt,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(l),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new $n,new uo({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1})));const G=this._backgroundBox,d=G.material;let s=!1;const D=n.background;D?D.isColor&&(d.color.copy(D),n.background=null,s=!0):(d.color.copy(Zi),s=!0);for(let z=0;z<6;z++){const m=z%3;m===0?(A.up.set(0,T[z],0),A.position.set(a.x,a.y,a.z),A.lookAt(a.x+C[z],a.y,a.z)):m===1?(A.up.set(0,0,T[z]),A.position.set(a.x,a.y,a.z),A.lookAt(a.x,a.y+C[z],a.z)):(A.up.set(0,T[z],0),A.position.set(a.x,a.y,a.z),A.lookAt(a.x,a.y,a.z+C[z]));const E=this._cubeSize;Xt(l,m*E,z>2?E:0,E,E),b.setRenderTarget(l),s&&b.render(G,A),b.render(n,A)}b.toneMapping=g,b.autoClear=p,n.background=D}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===cn||n.mapping===jt;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ji()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ji());const a=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=a;const h=a.uniforms;h.envMap.value=n;const A=this._cubeSize;Xt(t,0,0,3*A,2*A),i.setRenderTarget(t),i.render(f,nn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let a=1;a<l;a++)this._applyGGXFilter(n,a-1,a);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,a=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[i];h.material=f;const A=f.uniforms,T=i/(this._lodMeshes.length-1),C=t/(this._lodMeshes.length-1),b=Math.sqrt(T*T-C*C),p=T*1.25,g=b*p,{_lodMax:U}=this,G=this._sizeLods[i],d=3*G*(i>U-Zt?i-U+Zt:0),s=4*(this._cubeSize-G);A.envMap.value=n.texture,A.roughness.value=g,A.mipInt.value=U-t,Xt(a,d,s,3*G,2*G),l.setRenderTarget(a),l.render(h,nn),A.envMap.value=a.texture,A.roughness.value=0,A.mipInt.value=U-i,Xt(n,d,s,3*G,2*G),l.setRenderTarget(n),l.render(h,nn)}_blur(n,t,i,l){const a=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(n,a,t,i,f),this._blurPass(a,n,i,i,f)}_blurPass(n,t,i,l,a){const f=this._renderer,h=this._blurMaterial,A=this._lodMeshes[l];A.material=h;const T=h.uniforms;T.envMap.value=n.texture,T.sigma.value=a,T.mipInt.value=this._lodMax-i;const C=this._sizeLods[l],b=3*C*(l>this._lodMax-Zt?l-this._lodMax+Zt:0),p=4*(this._cubeSize-C);Xt(t,b,p,3*C,2*C),f.setRenderTarget(t),f.render(A,nn)}}function mc(e){const n=[],t=[];let i=e;const l=e-Zt+1+dc;for(let a=0;a<l;a++){const f=Math.pow(2,i);n.push(f);const h=1/(f-2),A=-h,T=1+h,C=[A,A,T,A,T,T,A,A,T,T,A,T],b=6,p=6,g=3,U=new Float32Array(g*p*b),G=new Float32Array(g*p*b);for(let s=0;s<b;s++){const D=s%3*2/3-1,z=s>2?0:-1,m=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];U.set(m,g*p*s);for(let E=0;E<p;E++){const _=C[E*2]*2-1,N=C[E*2+1]*2-1;s===0?Ht.set(1,N,_):s===1?Ht.set(-_,1,-N):s===2?Ht.set(-_,N,1):s===3?Ht.set(-1,N,-_):s===4?Ht.set(-_,-1,N):Ht.set(_,N,-1),Ht.toArray(G,(s*p+E)*g)}}const d=new fn;d.setAttribute("position",new En(U,g)),d.setAttribute("outputDirection",new En(G,g)),t.push(new Nt(d,null)),i>Zt&&i--}return{lodMeshes:t,sizeLods:n}}function Qi(e,n,t){const i=new Mt(e,n,t);return i.texture.mapping=Tn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xt(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function _c(e,n,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:An(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function gc(e,n,t){return new It({name:"SphericalGaussianBlur",defines:{SAMPLES:uc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:An(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Ji(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:An(),fragmentShader:`

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
		`,blending:wt,depthTest:!1,depthWrite:!1})}function ji(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:An(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function An(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wr extends Mt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new Cr(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $n(5,5,5),a=new It({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:St,blending:wt});a.uniforms.tEquirect.value=t;const f=new Nt(l,a),h=t.minFilter;return t.minFilter===Kt&&(t.minFilter=vt),new eo(1,10,this).update(n,f),t.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const a=n.getRenderTarget();for(let f=0;f<6;f++)n.setRenderTarget(this,f),n.clear(t,i,l);n.setRenderTarget(a)}}function vc(e){let n=new WeakMap,t=new WeakMap,i=null;function l(p,g=!1){return p==null?null:g?f(p):a(p)}function a(p){if(p&&p.isTexture){const g=p.mapping;if(g===Nn||g===yn)if(n.has(p)){const U=n.get(p).texture;return h(U,p.mapping)}else{const U=p.image;if(U&&U.height>0){const G=new Wr(U.height);return G.fromEquirectangularTexture(e,p),n.set(p,G),p.addEventListener("dispose",T),h(G.texture,p.mapping)}else return null}}return p}function f(p){if(p&&p.isTexture){const g=p.mapping,U=g===Nn||g===yn,G=g===cn||g===jt;if(U||G){let d=t.get(p);const s=d!==void 0?d.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==s)return i===null&&(i=new $i(e)),d=U?i.fromEquirectangular(p,d):i.fromCubemap(p,d),d.texture.pmremVersion=p.pmremVersion,t.set(p,d),d.texture;if(d!==void 0)return d.texture;{const D=p.image;return U&&D&&D.height>0||G&&D&&A(D)?(i===null&&(i=new $i(e)),d=U?i.fromEquirectangular(p):i.fromCubemap(p),d.texture.pmremVersion=p.pmremVersion,t.set(p,d),p.addEventListener("dispose",C),d.texture):null}}}return p}function h(p,g){return g===Nn?p.mapping=cn:g===yn&&(p.mapping=jt),p}function A(p){let g=0;const U=6;for(let G=0;G<U;G++)p[G]!==void 0&&g++;return g===U}function T(p){const g=p.target;g.removeEventListener("dispose",T);const U=n.get(g);U!==void 0&&(n.delete(g),U.dispose())}function C(p){const g=p.target;g.removeEventListener("dispose",C);const U=t.get(g);U!==void 0&&(t.delete(g),U.dispose())}function b(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:b}}function Sc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&Ha("WebGLRenderer: "+i+" extension not supported."),l}}}function Ec(e,n,t,i){const l={},a=new WeakMap;function f(b){const p=b.target;p.index!==null&&n.remove(p.index);for(const U in p.attributes)n.remove(p.attributes[U]);p.removeEventListener("dispose",f),delete l[p.id];const g=a.get(p);g&&(n.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function h(b,p){return l[p.id]===!0||(p.addEventListener("dispose",f),l[p.id]=!0,t.memory.geometries++),p}function A(b){const p=b.attributes;for(const g in p)n.update(p[g],e.ARRAY_BUFFER)}function T(b){const p=[],g=b.index,U=b.attributes.position;let G=0;if(U===void 0)return;if(g!==null){const D=g.array;G=g.version;for(let z=0,m=D.length;z<m;z+=3){const E=D[z+0],_=D[z+1],N=D[z+2];p.push(E,_,_,N,N,E)}}else{const D=U.array;G=U.version;for(let z=0,m=D.length/3-1;z<m;z+=3){const E=z+0,_=z+1,N=z+2;p.push(E,_,_,N,N,E)}}const d=new(U.count>=65535?co:fo)(p,1);d.version=G;const s=a.get(b);s&&n.remove(s),a.set(b,d)}function C(b){const p=a.get(b);if(p){const g=b.index;g!==null&&p.version<g.version&&T(b)}else T(b);return a.get(b)}return{get:h,update:A,getWireframeAttribute:C}}function xc(e,n,t){let i;function l(b){i=b}let a,f;function h(b){a=b.type,f=b.bytesPerElement}function A(b,p){e.drawElements(i,p,a,b*f),t.update(p,i,1)}function T(b,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,b*f,g),t.update(p,i,g))}function C(b,p,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,b,0,g);let G=0;for(let d=0;d<g;d++)G+=p[d];t.update(G,i,1)}this.setMode=l,this.setIndex=h,this.render=A,this.renderInstances=T,this.renderMultiDraw=C}function Mc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,f,h){switch(t.calls++,f){case e.TRIANGLES:t.triangles+=h*(a/3);break;case e.LINES:t.lines+=h*(a/2);break;case e.LINE_STRIP:t.lines+=h*(a-1);break;case e.LINE_LOOP:t.lines+=h*a;break;case e.POINTS:t.points+=h*a;break;default:Je("WebGLInfo: Unknown draw mode:",f);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function Tc(e,n,t){const i=new WeakMap,l=new _t;function a(f,h,A){const T=f.morphTargetInfluences,C=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,b=C!==void 0?C.length:0;let p=i.get(h);if(p===void 0||p.count!==b){let v=function(){N.dispose(),i.delete(h),h.removeEventListener("dispose",v)};p!==void 0&&p.texture.dispose();const g=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,G=h.morphAttributes.color!==void 0,d=h.morphAttributes.position||[],s=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let z=0;g===!0&&(z=1),U===!0&&(z=2),G===!0&&(z=3);let m=h.attributes.position.count*z,E=1;m>n.maxTextureSize&&(E=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);const _=new Float32Array(m*E*4*b),N=new Ur(_,m,E,b);N.type=Bt,N.needsUpdate=!0;const c=z*4;for(let y=0;y<b;y++){const O=d[y],V=s[y],q=D[y],w=m*E*4*y;for(let Y=0;Y<O.count;Y++){const Q=Y*c;g===!0&&(l.fromBufferAttribute(O,Y),_[w+Q+0]=l.x,_[w+Q+1]=l.y,_[w+Q+2]=l.z,_[w+Q+3]=0),U===!0&&(l.fromBufferAttribute(V,Y),_[w+Q+4]=l.x,_[w+Q+5]=l.y,_[w+Q+6]=l.z,_[w+Q+7]=0),G===!0&&(l.fromBufferAttribute(q,Y),_[w+Q+8]=l.x,_[w+Q+9]=l.y,_[w+Q+10]=l.z,_[w+Q+11]=q.itemSize===4?l.w:1)}}p={count:b,texture:N,size:new gt(m,E)},i.set(h,p),h.addEventListener("dispose",v)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)A.getUniforms().setValue(e,"morphTexture",f.morphTexture,t);else{let g=0;for(let G=0;G<T.length;G++)g+=T[G];const U=h.morphTargetsRelative?1:1-g;A.getUniforms().setValue(e,"morphTargetBaseInfluence",U),A.getUniforms().setValue(e,"morphTargetInfluences",T)}A.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),A.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:a}}function Ac(e,n,t,i,l){let a=new WeakMap;function f(T){const C=l.render.frame,b=T.geometry,p=n.get(T,b);if(a.get(p)!==C&&(n.update(p),a.set(p,C)),T.isInstancedMesh&&(T.hasEventListener("dispose",A)===!1&&T.addEventListener("dispose",A),a.get(T)!==C&&(t.update(T.instanceMatrix,e.ARRAY_BUFFER),T.instanceColor!==null&&t.update(T.instanceColor,e.ARRAY_BUFFER),a.set(T,C))),T.isSkinnedMesh){const g=T.skeleton;a.get(g)!==C&&(g.update(),a.set(g,C))}return p}function h(){a=new WeakMap}function A(T){const C=T.target;C.removeEventListener("dispose",A),i.releaseStatesOfObject(C),t.remove(C.instanceMatrix),C.instanceColor!==null&&t.remove(C.instanceColor)}return{update:f,dispose:h}}const Rc={[Br]:"LINEAR_TONE_MAPPING",[Or]:"REINHARD_TONE_MAPPING",[Fr]:"CINEON_TONE_MAPPING",[yr]:"ACES_FILMIC_TONE_MAPPING",[Nr]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[Dr]:"CUSTOM_TONE_MAPPING"};function bc(e,n,t,i,l,a){const f=new Mt(n,t,{type:e,depthBuffer:l,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,A=null;const T=new fn;T.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),T.setAttribute("uv",new fi([0,2,0,0,2,0],2));const C=new ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),b=new Nt(T,C),p=new Sr(-1,1,1,-1,0,1);let g=null,U=null,G=!1,d,s=null,D=[],z=!1;this.setSize=function(m,E){f.setSize(m,E),h!==null&&h.setSize(m,E),A!==null&&A.setSize(m,E);for(let _=0;_<D.length;_++){const N=D[_];N.setSize&&N.setSize(m,E)}},this.setEffects=function(m){D=m,z=D.length>0&&D[0].isRenderPass===!0;const E=f.width,_=f.height;D.length>0&&h===null&&(h=new Mt(E,_,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),A=new Mt(E,_,{type:Dt,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<D.length;N++){const c=D[N];c.setSize&&c.setSize(E,_)}},this.begin=function(m,E){if(G||m.toneMapping===Pt&&D.length===0)return!1;if(s=E,E!==null){const _=E.width,N=E.height;(f.width!==_||f.height!==N)&&this.setSize(_,N)}return z===!1&&m.setRenderTarget(f),d=m.toneMapping,m.toneMapping=Pt,!0},this.hasRenderPass=function(){return z},this.end=function(m,E){m.toneMapping=d,G=!0;let _=f,N=h;for(let c=0;c<D.length;c++){const v=D[c];v.enabled!==!1&&(v.render(m,N,_,E),v.needsSwap!==!1&&(_=N,N=N===h?A:h))}if(g!==m.outputColorSpace||U!==m.toneMapping){g=m.outputColorSpace,U=m.toneMapping,C.defines={},nt.getTransfer(g)===$e&&(C.defines.SRGB_TRANSFER="");const c=Rc[U];c&&(C.defines[c]=""),C.needsUpdate=!0}C.uniforms.tDiffuse.value=_.texture,m.setRenderTarget(s),m.render(b,p),s=null,G=!1},this.isCompositing=function(){return G},this.dispose=function(){f.dispose(),h!==null&&h.dispose(),A!==null&&A.dispose(),T.dispose(),C.dispose()}}const kr=new vo,Yn=new xn(1,1),zr=new Ur,Xr=new go,Yr=new Cr,er=[],tr=[],nr=new Float32Array(16),ir=new Float32Array(9),rr=new Float32Array(4);function en(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let a=er[l];if(a===void 0&&(a=new Float32Array(l),er[l]=a),n!==0){i.toArray(a,0);for(let f=1,h=0;f!==n;++f)h+=t,e[f].toArray(a,h)}return a}function lt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Rn(e,n){let t=tr[n];t===void 0&&(t=new Int32Array(n),tr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Cc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Pc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function Lc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(lt(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function Uc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function wc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;rr.set(i),e.uniformMatrix2fv(this.addr,!1,rr),ct(t,i)}}function Dc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;ir.set(i),e.uniformMatrix3fv(this.addr,!1,ir),ct(t,i)}}function Ic(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;nr.set(i),e.uniformMatrix4fv(this.addr,!1,nr),ct(t,i)}}function Nc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function yc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function Fc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function Oc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function Bc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Gc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function Hc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function Vc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function Wc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let a;this.type===e.SAMPLER_2D_SHADOW?(Yn.compareFunction=t.isReversedDepthBuffer()?qn:Zn,a=Yn):a=kr,t.setTexture2D(n||a,l)}function kc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||Xr,l)}function zc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||Yr,l)}function Xc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||zr,l)}function Yc(e){switch(e){case 5126:return Cc;case 35664:return Pc;case 35665:return Lc;case 35666:return Uc;case 35674:return wc;case 35675:return Dc;case 35676:return Ic;case 5124:case 35670:return Nc;case 35667:case 35671:return yc;case 35668:case 35672:return Fc;case 35669:case 35673:return Oc;case 5125:return Bc;case 36294:return Gc;case 36295:return Hc;case 36296:return Vc;case 35678:case 36198:case 36298:case 36306:case 35682:return Wc;case 35679:case 36299:case 36307:return kc;case 35680:case 36300:case 36308:case 36293:return zc;case 36289:case 36303:case 36311:case 36292:return Xc}}function Kc(e,n){e.uniform1fv(this.addr,n)}function qc(e,n){const t=en(n,this.size,2);e.uniform2fv(this.addr,t)}function Zc(e,n){const t=en(n,this.size,3);e.uniform3fv(this.addr,t)}function $c(e,n){const t=en(n,this.size,4);e.uniform4fv(this.addr,t)}function Qc(e,n){const t=en(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Jc(e,n){const t=en(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function jc(e,n){const t=en(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ef(e,n){e.uniform1iv(this.addr,n)}function tf(e,n){e.uniform2iv(this.addr,n)}function nf(e,n){e.uniform3iv(this.addr,n)}function rf(e,n){e.uniform4iv(this.addr,n)}function af(e,n){e.uniform1uiv(this.addr,n)}function of(e,n){e.uniform2uiv(this.addr,n)}function sf(e,n){e.uniform3uiv(this.addr,n)}function lf(e,n){e.uniform4uiv(this.addr,n)}function cf(e,n,t){const i=this.cache,l=n.length,a=Rn(t,l);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));let f;this.type===e.SAMPLER_2D_SHADOW?f=Yn:f=kr;for(let h=0;h!==l;++h)t.setTexture2D(n[h]||f,a[h])}function ff(e,n,t){const i=this.cache,l=n.length,a=Rn(t,l);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let f=0;f!==l;++f)t.setTexture3D(n[f]||Xr,a[f])}function df(e,n,t){const i=this.cache,l=n.length,a=Rn(t,l);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let f=0;f!==l;++f)t.setTextureCube(n[f]||Yr,a[f])}function uf(e,n,t){const i=this.cache,l=n.length,a=Rn(t,l);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let f=0;f!==l;++f)t.setTexture2DArray(n[f]||zr,a[f])}function pf(e){switch(e){case 5126:return Kc;case 35664:return qc;case 35665:return Zc;case 35666:return $c;case 35674:return Qc;case 35675:return Jc;case 35676:return jc;case 5124:case 35670:return ef;case 35667:case 35671:return tf;case 35668:case 35672:return nf;case 35669:case 35673:return rf;case 5125:return af;case 36294:return of;case 36295:return sf;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return uf}}class hf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yc(t.type)}}class mf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pf(t.type)}}class _f{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let a=0,f=l.length;a!==f;++a){const h=l[a];h.setValue(n,t[h.id],i)}}}const Hn=/(\w+)(\])?(\[|\.)?/g;function ar(e,n){e.seq.push(n),e.map[n.id]=n}function gf(e,n,t){const i=e.name,l=i.length;for(Hn.lastIndex=0;;){const a=Hn.exec(i),f=Hn.lastIndex;let h=a[1];const A=a[2]==="]",T=a[3];if(A&&(h=h|0),T===void 0||T==="["&&f+2===l){ar(t,T===void 0?new hf(h,e,n):new mf(h,e,n));break}else{let b=t.map[h];b===void 0&&(b=new _f(h),ar(t,b)),t=b}}}class Sn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let f=0;f<i;++f){const h=n.getActiveUniform(t,f),A=n.getUniformLocation(t,h.name);gf(h,A,this)}const l=[],a=[];for(const f of this.seq)f.type===n.SAMPLER_2D_SHADOW||f.type===n.SAMPLER_CUBE_SHADOW||f.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(f):a.push(f);l.length>0&&(this.seq=l.concat(a))}setValue(n,t,i,l){const a=this.map[t];a!==void 0&&a.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let a=0,f=t.length;a!==f;++a){const h=t[a],A=i[h.id];A.needsUpdate!==!1&&h.setValue(n,A.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,a=n.length;l!==a;++l){const f=n[l];f.id in t&&i.push(f)}return i}}function or(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const vf=37297;let Sf=0;function Ef(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let f=l;f<a;f++){const h=f+1;i.push(`${h===n?">":" "} ${h}: ${t[f]}`)}return i.join(`
`)}const sr=new Fe;function xf(e){nt._getMatrix(sr,nt.workingColorSpace,e);const n=`mat3( ${sr.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case wr:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function lr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const f=/ERROR: 0:(\d+)/.exec(a);if(f){const h=parseInt(f[1]);return t.toUpperCase()+`

`+a+`

`+Ef(e.getShaderSource(n),h)}else return a}function Mf(e,n){const t=xf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Tf={[Br]:"Linear",[Or]:"Reinhard",[Fr]:"Cineon",[yr]:"ACESFilmic",[Nr]:"AgX",[Ir]:"Neutral",[Dr]:"Custom"};function Af(e,n){const t=Tf[n];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mn=new Ne;function Rf(){nt.getLuminanceCoefficients(mn);const e=mn.x.toFixed(4),n=mn.y.toFixed(4),t=mn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(on).join(`
`)}function Cf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Pf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const a=e.getActiveAttrib(n,l),f=a.name;let h=1;a.type===e.FLOAT_MAT2&&(h=2),a.type===e.FLOAT_MAT3&&(h=3),a.type===e.FLOAT_MAT4&&(h=4),t[f]={type:a.type,location:e.getAttribLocation(n,f),locationSize:h}}return t}function on(e){return e!==""}function cr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function fr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kn(e){return e.replace(Lf,wf)}const Uf=new Map;function wf(e,n){let t=Le[n];if(t===void 0){const i=Uf.get(n);if(i!==void 0)t=Le[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return Kn(t)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dr(e){return e.replace(Df,If)}function If(e,n,t,i){let l="";for(let a=parseInt(n);a<parseInt(t);a++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return l}function ur(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Nf={[_n]:"SHADOWMAP_TYPE_PCF",[an]:"SHADOWMAP_TYPE_VSM"};function yf(e){return Nf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ff={[cn]:"ENVMAP_TYPE_CUBE",[jt]:"ENVMAP_TYPE_CUBE",[Tn]:"ENVMAP_TYPE_CUBE_UV"};function Of(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Ff[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bf={[jt]:"ENVMAP_MODE_REFRACTION"};function Gf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Bf[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hf={[_o]:"ENVMAP_BLENDING_MULTIPLY",[mo]:"ENVMAP_BLENDING_MIX",[ho]:"ENVMAP_BLENDING_ADD"};function Vf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Hf[e.combine]||"ENVMAP_BLENDING_NONE"}function Wf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kf(e,n,t,i){const l=e.getContext(),a=t.defines;let f=t.vertexShader,h=t.fragmentShader;const A=yf(t),T=Of(t),C=Gf(t),b=Vf(t),p=Wf(t),g=bf(t),U=Cf(a),G=l.createProgram();let d,s,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U].filter(on).join(`
`),d.length>0&&(d+=`
`),s=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U].filter(on).join(`
`),s.length>0&&(s+=`
`)):(d=[ur(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+C:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),s=[ur(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+T:"",t.envMap?"#define "+C:"",t.envMap?"#define "+b:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pt?"#define TONE_MAPPING":"",t.toneMapping!==Pt?Le.tonemapping_pars_fragment:"",t.toneMapping!==Pt?Af("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Mf("linearToOutputTexel",t.outputColorSpace),Rf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(on).join(`
`)),f=Kn(f),f=cr(f,t),f=fr(f,t),h=Kn(h),h=cr(h,t),h=fr(h,t),f=dr(f),h=dr(h),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,s=["#define varying in",t.glslVersion===Ki?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ki?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+s);const z=D+d+f,m=D+s+h,E=or(l,l.VERTEX_SHADER,z),_=or(l,l.FRAGMENT_SHADER,m);l.attachShader(G,E),l.attachShader(G,_),t.index0AttributeName!==void 0?l.bindAttribLocation(G,0,t.index0AttributeName):t.hasPositionAttribute===!0&&l.bindAttribLocation(G,0,"position"),l.linkProgram(G);function N(O){if(e.debug.checkShaderErrors){const V=l.getProgramInfoLog(G)||"",q=l.getShaderInfoLog(E)||"",w=l.getShaderInfoLog(_)||"",Y=V.trim(),Q=q.trim(),K=w.trim();let ne=!0,Z=!0;if(l.getProgramParameter(G,l.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,G,E,_);else{const j=lr(l,E,"vertex"),ee=lr(l,_,"fragment");Je("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(G,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Y+`
`+j+`
`+ee)}else Y!==""?We("WebGLProgram: Program Info Log:",Y):(Q===""||K==="")&&(Z=!1);Z&&(O.diagnostics={runnable:ne,programLog:Y,vertexShader:{log:Q,prefix:d},fragmentShader:{log:K,prefix:s}})}l.deleteShader(E),l.deleteShader(_),c=new Sn(l,G),v=Pf(l,G)}let c;this.getUniforms=function(){return c===void 0&&N(this),c};let v;this.getAttributes=function(){return v===void 0&&N(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=l.getProgramParameter(G,vf)),y},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(G),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sf++,this.cacheKey=n,this.usedTimes=1,this.program=G,this.vertexShader=E,this.fragmentShader=_,this}let zf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const l=this._getShaderCacheForMaterial(n);return l.has(t)===!1&&(l.add(t),t.usedTimes++),l.has(i)===!1&&(l.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Yf(n),t.set(n,i)),i}}class Yf{constructor(n){this.id=zf++,this.code=n,this.usedTimes=0}}function Kf(e){return e===Qt||e===zn||e===Xn}function qf(e,n,t,i,l,a){const f=new lo,h=new Xf,A=new Set,T=[],C=new Map,b=i.logarithmicDepthBuffer;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function U(c){return A.add(c),c===0?"uv":`uv${c}`}function G(c,v,y,O,V,q){const w=O.fog,Y=V.geometry,Q=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?O.environment:null,K=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap,ne=n.get(c.envMap||Q,K),Z=ne&&ne.mapping===Tn?ne.image.height:null,j=g[c.type];c.precision!==null&&(p=i.getMaxPrecision(c.precision),p!==c.precision&&We("WebGLProgram.getParameters:",c.precision,"not supported, using",p,"instead."));const ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=ee!==void 0?ee.length:0;let Re=0;Y.morphAttributes.position!==void 0&&(Re=1),Y.morphAttributes.normal!==void 0&&(Re=2),Y.morphAttributes.color!==void 0&&(Re=3);let it,ke,ze,W;if(j){const qe=bt[j];it=qe.vertexShader,ke=qe.fragmentShader}else{it=c.vertexShader,ke=c.fragmentShader;const qe=h.getVertexShaderStage(c),Ge=h.getFragmentShaderStage(c);h.update(c,qe,Ge),ze=qe.id,W=Ge.id}const $=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),Ue=V.isInstancedMesh===!0,me=V.isBatchedMesh===!0,ye=!!c.map,st=!!c.matcap,we=!!ne,Be=!!c.aoMap,Ke=!!c.lightMap,Ie=!!c.bumpMap&&c.wireframe===!1,je=!!c.normalMap,ft=!!c.displacementMap,ht=!!c.emissiveMap,tt=!!c.metalnessMap,at=!!c.roughnessMap,M=c.anisotropy>0,dt=c.clearcoat>0,Ve=c.dispersion>0,u=c.retroreflectivity>0,r=c.iridescence>0,R=c.sheen>0,I=c.transmission>0,B=M&&!!c.anisotropyMap,te=dt&&!!c.clearcoatMap,ie=dt&&!!c.clearcoatNormalMap,H=dt&&!!c.clearcoatRoughnessMap,X=r&&!!c.iridescenceMap,re=r&&!!c.iridescenceThicknessMap,xe=R&&!!c.sheenColorMap,le=R&&!!c.sheenRoughnessMap,ae=!!c.specularMap,Me=!!c.specularColorMap,Ae=!!c.specularIntensityMap,Ce=I&&!!c.transmissionMap,x=I&&!!c.thicknessMap,oe=!!c.gradientMap,k=!!c.alphaMap,se=c.alphaTest>0,ue=!!c.alphaHash,J=!!c.extensions;let Te=Pt;c.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Te=e.toneMapping);const ve={shaderID:j,shaderType:c.type,shaderName:c.name,vertexShader:it,fragmentShader:ke,defines:c.defines,customVertexShaderID:ze,customFragmentShaderID:W,isRawShaderMaterial:c.isRawShaderMaterial===!0,glslVersion:c.glslVersion,precision:p,batching:me,batchingColor:me&&V._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&V.instanceColor!==null,instancingMorph:Ue&&V.morphTexture!==null,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!c.alphaToCoverage,map:ye,matcap:st,envMap:we,envMapMode:we&&ne.mapping,envMapCubeUVHeight:Z,aoMap:Be,lightMap:Ke,bumpMap:Ie,normalMap:je,displacementMap:ft,emissiveMap:ht,normalMapObjectSpace:je&&c.normalMapType===ja,normalMapTangentSpace:je&&c.normalMapType===mi,packedNormalMap:je&&c.normalMapType===mi&&Kf(c.normalMap.format),metalnessMap:tt,roughnessMap:at,anisotropy:M,anisotropyMap:B,clearcoat:dt,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:H,dispersion:Ve,retroreflection:u,iridescence:r,iridescenceMap:X,iridescenceThicknessMap:re,sheen:R,sheenColorMap:xe,sheenRoughnessMap:le,specularMap:ae,specularColorMap:Me,specularIntensityMap:Ae,transmission:I,transmissionMap:Ce,thicknessMap:x,gradientMap:oe,opaque:c.transparent===!1&&c.blending===vn&&c.alphaToCoverage===!1,alphaMap:k,alphaTest:se,alphaHash:ue,combine:c.combine,mapUv:ye&&U(c.map.channel),aoMapUv:Be&&U(c.aoMap.channel),lightMapUv:Ke&&U(c.lightMap.channel),bumpMapUv:Ie&&U(c.bumpMap.channel),normalMapUv:je&&U(c.normalMap.channel),displacementMapUv:ft&&U(c.displacementMap.channel),emissiveMapUv:ht&&U(c.emissiveMap.channel),metalnessMapUv:tt&&U(c.metalnessMap.channel),roughnessMapUv:at&&U(c.roughnessMap.channel),anisotropyMapUv:B&&U(c.anisotropyMap.channel),clearcoatMapUv:te&&U(c.clearcoatMap.channel),clearcoatNormalMapUv:ie&&U(c.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&U(c.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&U(c.iridescenceMap.channel),iridescenceThicknessMapUv:re&&U(c.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&U(c.sheenColorMap.channel),sheenRoughnessMapUv:le&&U(c.sheenRoughnessMap.channel),specularMapUv:ae&&U(c.specularMap.channel),specularColorMapUv:Me&&U(c.specularColorMap.channel),specularIntensityMapUv:Ae&&U(c.specularIntensityMap.channel),transmissionMapUv:Ce&&U(c.transmissionMap.channel),thicknessMapUv:x&&U(c.thicknessMap.channel),alphaMapUv:k&&U(c.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(je||M),vertexNormals:!!Y.attributes.normal,vertexColors:c.vertexColors,vertexAlphas:c.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(ye||k),fog:!!w,useFog:c.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:c.wireframe===!1&&(c.flatShading===!0||Y.attributes.normal===void 0&&je===!1&&(c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshPhysicalMaterial)),sizeAttenuation:c.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Ee,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Re,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:c.dithering,shadowMapEnabled:e.shadowMap.enabled&&y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:ye&&c.map.isVideoTexture===!0&&nt.getTransfer(c.map.colorSpace)===$e,decodeVideoTextureEmissive:ht&&c.emissiveMap.isVideoTexture===!0&&nt.getTransfer(c.emissiveMap.colorSpace)===$e,premultipliedAlpha:c.premultipliedAlpha,doubleSided:c.side===Lt,flipSided:c.side===St,useDepthPacking:c.depthPacking>=0,depthPacking:c.depthPacking||0,index0AttributeName:c.index0AttributeName,extensionClipCullDistance:J&&c.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J&&c.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:c.customProgramCacheKey()};return ve.vertexUv1s=A.has(1),ve.vertexUv2s=A.has(2),ve.vertexUv3s=A.has(3),A.clear(),ve}function d(c){const v=[];if(c.shaderID?v.push(c.shaderID):(v.push(c.customVertexShaderID),v.push(c.customFragmentShaderID)),c.defines!==void 0)for(const y in c.defines)v.push(y),v.push(c.defines[y]);return c.isRawShaderMaterial===!1&&(s(v,c),D(v,c),v.push(e.outputColorSpace)),v.push(c.customProgramCacheKey),v.join()}function s(c,v){c.push(v.precision),c.push(v.outputColorSpace),c.push(v.envMapMode),c.push(v.envMapCubeUVHeight),c.push(v.mapUv),c.push(v.alphaMapUv),c.push(v.lightMapUv),c.push(v.aoMapUv),c.push(v.bumpMapUv),c.push(v.normalMapUv),c.push(v.displacementMapUv),c.push(v.emissiveMapUv),c.push(v.metalnessMapUv),c.push(v.roughnessMapUv),c.push(v.anisotropyMapUv),c.push(v.clearcoatMapUv),c.push(v.clearcoatNormalMapUv),c.push(v.clearcoatRoughnessMapUv),c.push(v.iridescenceMapUv),c.push(v.iridescenceThicknessMapUv),c.push(v.sheenColorMapUv),c.push(v.sheenRoughnessMapUv),c.push(v.specularMapUv),c.push(v.specularColorMapUv),c.push(v.specularIntensityMapUv),c.push(v.transmissionMapUv),c.push(v.thicknessMapUv),c.push(v.combine),c.push(v.fogExp2),c.push(v.sizeAttenuation),c.push(v.morphTargetsCount),c.push(v.morphAttributeCount),c.push(v.numSunLights),c.push(v.numDirLights),c.push(v.numPointLights),c.push(v.numSpotLights),c.push(v.numSpotLightMaps),c.push(v.numHemiLights),c.push(v.numRectAreaLights),c.push(v.numSunLightShadows),c.push(v.numDirLightShadows),c.push(v.numPointLightShadows),c.push(v.numSpotLightShadows),c.push(v.numSpotLightShadowsWithMaps),c.push(v.numLightProbes),c.push(v.shadowMapType),c.push(v.toneMapping),c.push(v.numClippingPlanes),c.push(v.numClipIntersection),c.push(v.depthPacking)}function D(c,v){f.disableAll(),v.instancing&&f.enable(0),v.instancingColor&&f.enable(1),v.instancingMorph&&f.enable(2),v.matcap&&f.enable(3),v.envMap&&f.enable(4),v.normalMapObjectSpace&&f.enable(5),v.normalMapTangentSpace&&f.enable(6),v.clearcoat&&f.enable(7),v.iridescence&&f.enable(8),v.alphaTest&&f.enable(9),v.vertexColors&&f.enable(10),v.vertexAlphas&&f.enable(11),v.vertexUv1s&&f.enable(12),v.vertexUv2s&&f.enable(13),v.vertexUv3s&&f.enable(14),v.vertexTangents&&f.enable(15),v.anisotropy&&f.enable(16),v.alphaHash&&f.enable(17),v.batching&&f.enable(18),v.dispersion&&f.enable(19),v.retroreflection&&f.enable(24),v.batchingColor&&f.enable(20),v.gradientMap&&f.enable(21),v.packedNormalMap&&f.enable(22),v.vertexNormals&&f.enable(23),c.push(f.mask),f.disableAll(),v.fog&&f.enable(0),v.useFog&&f.enable(1),v.flatShading&&f.enable(2),v.logarithmicDepthBuffer&&f.enable(3),v.reversedDepthBuffer&&f.enable(4),v.skinning&&f.enable(5),v.morphTargets&&f.enable(6),v.morphNormals&&f.enable(7),v.morphColors&&f.enable(8),v.premultipliedAlpha&&f.enable(9),v.shadowMapEnabled&&f.enable(10),v.doubleSided&&f.enable(11),v.flipSided&&f.enable(12),v.useDepthPacking&&f.enable(13),v.dithering&&f.enable(14),v.transmission&&f.enable(15),v.sheen&&f.enable(16),v.opaque&&f.enable(17),v.pointsUvs&&f.enable(18),v.decodeVideoTexture&&f.enable(19),v.decodeVideoTextureEmissive&&f.enable(20),v.alphaToCoverage&&f.enable(21),v.numLightProbeGrids>0&&f.enable(22),v.hasPositionAttribute&&f.enable(23),c.push(f.mask)}function z(c){const v=g[c.type];let y;if(v){const O=bt[v];y=Ja.clone(O.uniforms)}else y=c.uniforms;return y}function m(c,v){let y=C.get(v);return y!==void 0?++y.usedTimes:(y=new kf(e,v,c,l),T.push(y),C.set(v,y)),y}function E(c){if(--c.usedTimes===0){const v=T.indexOf(c);T[v]=T[T.length-1],T.pop(),C.delete(c.cacheKey),c.destroy()}}function _(c){h.remove(c)}function N(){h.dispose()}return{getParameters:G,getProgramCacheKey:d,getUniforms:z,acquireProgram:m,releaseProgram:E,releaseShaderCache:_,programs:T,dispose:N}}function Zf(){let e=new WeakMap;function n(f){return e.has(f)}function t(f){let h=e.get(f);return h===void 0&&(h={},e.set(f,h)),h}function i(f){e.delete(f)}function l(f,h,A){e.get(f)[h]=A}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:a}}function $f(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function pr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function hr(){const e=[];let n=0;const t=[],i=[],l=[];function a(){n=0,t.length=0,i.length=0,l.length=0}function f(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function h(p,g,U,G,d,s){let D=e[n];return D===void 0?(D={id:p.id,object:p,geometry:g,material:U,materialVariant:f(p),groupOrder:G,renderOrder:p.renderOrder,z:d,group:s},e[n]=D):(D.id=p.id,D.object=p,D.geometry=g,D.material=U,D.materialVariant=f(p),D.groupOrder=G,D.renderOrder=p.renderOrder,D.z=d,D.group=s),n++,D}function A(p,g,U,G,d,s,D){D.reversedDepth===!0&&(d=-d);const z=h(p,g,U,G,d,s);U.transmission>0?i.push(z):U.transparent===!0?l.push(z):t.push(z)}function T(p,g,U,G,d,s){const D=h(p,g,U,G,d,s);U.transmission>0?i.unshift(D):U.transparent===!0?l.unshift(D):t.unshift(D)}function C(p,g){t.length>1&&t.sort(p||$f),i.length>1&&i.sort(g||pr),l.length>1&&l.sort(g||pr)}function b(){for(let p=n,g=e.length;p<g;p++){const U=e[p];if(U.id===null)break;U.id=null,U.object=null,U.geometry=null,U.material=null,U.group=null}}return{opaque:t,transmissive:i,transparent:l,init:a,push:A,unshift:T,finish:b,sort:C}}function Qf(){let e=new WeakMap;function n(i,l){const a=e.get(i);let f;return a===void 0?(f=new hr,e.set(i,[f])):l>=a.length?(f=new hr,a.push(f)):f=a[l],f}function t(){e=new WeakMap}return{get:n,dispose:t}}function Jf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new Ne,color:new et};break;case"SpotLight":t={position:new Ne,direction:new Ne,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ne,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ne,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new Ne,halfWidth:new Ne,halfHeight:new Ne};break}return e[n.id]=t,t}}}function jf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let ed=0;function td(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function nd(e){const n=new Jf,t=jf(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let T=0;T<9;T++)i.probe.push(new Ne);const l=new Ne,a=new $t,f=new $t;function h(T){let C=0,b=0,p=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,U=0,G=0,d=0,s=0,D=0,z=0,m=0,E=0,_=0,N=0,c=0,v=0,y=0;T.sort(td);for(let V=0,q=T.length;V<q;V++){const w=T[V],Y=w.color,Q=w.intensity,K=w.distance;let ne=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Qt?ne=w.shadow.map.texture:ne=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)C+=Y.r*Q,b+=Y.g*Q,p+=Y.b*Q;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(w.sh.coefficients[Z],Q);y++}else if(w.isSunLight){const Z=n.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,ee=t.get(w);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[U]=ee,i.sunShadowMap[U]=ne;const be=j.getViewportCount();for(let Re=0;Re<be;Re++)i.sunShadowMatrix[G+Re]=j.getMatrix(Re),i.sunShadowCascade[G+Re]=j._cascadeData[Re];G+=be,U++}i.sun[g]=Z,g++}else if(w.isDirectionalLight){const Z=n.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,ee=t.get(w);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.directionalShadow[d]=ee,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=w.shadow.matrix,E++}i.directional[d]=Z,d++}else if(w.isSpotLight){const Z=n.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(Y).multiplyScalar(Q),Z.distance=K,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,i.spot[D]=Z;const j=w.shadow;if(w.map&&(i.spotLightMap[c]=w.map,c++,j.updateMatrices(w),w.castShadow&&v++),i.spotLightMatrix[D]=j.matrix,w.castShadow){const ee=t.get(w);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.spotShadow[D]=ee,i.spotShadowMap[D]=ne,N++}D++}else if(w.isRectAreaLight){const Z=n.get(w);Z.color.copy(Y).multiplyScalar(Q),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),i.rectArea[z]=Z,z++}else if(w.isPointLight){const Z=n.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){const j=w.shadow,ee=t.get(w);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,i.pointShadow[s]=ee,i.pointShadowMap[s]=ne,i.pointShadowMatrix[s]=w.shadow.matrix,_++}i.point[s]=Z,s++}else if(w.isHemisphereLight){const Z=n.get(w);Z.skyColor.copy(w.color).multiplyScalar(Q),Z.groundColor.copy(w.groundColor).multiplyScalar(Q),i.hemi[m]=Z,m++}}z>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=C,i.ambient[1]=b,i.ambient[2]=p;const O=i.hash;(O.sunLength!==g||O.directionalLength!==d||O.pointLength!==s||O.spotLength!==D||O.rectAreaLength!==z||O.hemiLength!==m||O.numSunShadows!==U||O.numDirectionalShadows!==E||O.numPointShadows!==_||O.numSpotShadows!==N||O.numSpotMaps!==c||O.numLightProbes!==y)&&(i.sun.length=g,i.directional.length=d,i.spot.length=D,i.rectArea.length=z,i.point.length=s,i.hemi.length=m,i.sunShadow.length=U,i.sunShadowMap.length=U,i.sunShadowMatrix.length=G,i.sunShadowCascade.length=G,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+c-v,i.spotLightMap.length=c,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=y,O.sunLength=g,O.directionalLength=d,O.pointLength=s,O.spotLength=D,O.rectAreaLength=z,O.hemiLength=m,O.numSunShadows=U,O.numDirectionalShadows=E,O.numPointShadows=_,O.numSpotShadows=N,O.numSpotMaps=c,O.numLightProbes=y,i.version=ed++)}function A(T,C){let b=0,p=0,g=0,U=0,G=0,d=0;const s=C.matrixWorldInverse;for(let D=0,z=T.length;D<z;D++){const m=T[D];if(m.isSunLight){const E=i.sun[b];E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(s),b++}else if(m.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(m.matrixWorld),l.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(l),E.direction.transformDirection(s),p++}else if(m.isSpotLight){const E=i.spot[U];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(s),E.direction.setFromMatrixPosition(m.matrixWorld),l.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(l),E.direction.transformDirection(s),U++}else if(m.isRectAreaLight){const E=i.rectArea[G];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(s),f.identity(),a.copy(m.matrixWorld),a.premultiply(s),f.extractRotation(a),E.halfWidth.set(m.width*.5,0,0),E.halfHeight.set(0,m.height*.5,0),E.halfWidth.applyMatrix4(f),E.halfHeight.applyMatrix4(f),G++}else if(m.isPointLight){const E=i.point[g];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(s),g++}else if(m.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(s),d++}}}return{setup:h,setupView:A,state:i}}function mr(e){const n=new nd(e),t=[],i=[],l=[];function a(p){b.camera=p,t.length=0,i.length=0,l.length=0}function f(p){t.push(p)}function h(p){i.push(p)}function A(p){l.push(p)}function T(){n.setup(t)}function C(p){n.setupView(t,p)}const b={lightsArray:t,shadowsArray:i,lightProbeGridArray:l,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:b,setupLights:T,setupLightsView:C,pushLight:f,pushShadow:h,pushLightProbeGrid:A}}function id(e){let n=new WeakMap;function t(l,a=0){const f=n.get(l);let h;return f===void 0?(h=new mr(e),n.set(l,[h])):a>=f.length?(h=new mr(e),f.push(h)):h=f[a],h}function i(){n=new WeakMap}return{get:t,dispose:i}}const rd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ad=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,od=[new Ne(1,0,0),new Ne(-1,0,0),new Ne(0,1,0),new Ne(0,-1,0),new Ne(0,0,1),new Ne(0,0,-1)],sd=[new Ne(0,-1,0),new Ne(0,-1,0),new Ne(0,0,1),new Ne(0,0,-1),new Ne(0,-1,0),new Ne(0,-1,0)],_r=new $t,rn=new Ne,Vn=new Ne;function ld(e,n,t){let i=new vr;const l=new gt,a=new gt,f=new _t,h=new wa,A=new Da,T={},C=t.maxTextureSize,b={[sn]:St,[St]:sn,[Lt]:Lt},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:rd,fragmentShader:ad}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const U=new fn;U.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const G=new Nt(U,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_n;let s=this.type;this.render=function(_,N,c){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;this.type===Ia&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_n);const v=e.getRenderTarget(),y=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),V=e.state;V.setBlending(wt),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=s!==this.type;q&&N.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(Y=>Y.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,Y=_.length;w<Y;w++){const Q=_[w],K=Q.shadow;if(K===void 0){We("WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const ne=K.getFrameExtents();l.multiply(ne),a.copy(K.mapSize),(l.x>C||l.y>C)&&(l.x>C&&(a.x=Math.floor(C/ne.x),l.x=a.x*ne.x,K.mapSize.x=a.x),l.y>C&&(a.y=Math.floor(C/ne.y),l.y=a.y*ne.y,K.mapSize.y=a.y));const Z=e.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===an){if(Q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Mt(l.x,l.y,{format:Qt,type:Dt,minFilter:vt,magFilter:vt,generateMipmaps:!1}),K.map.texture.name=Q.name+".shadowMap",K.map.depthTexture=new xn(l.x,l.y,Bt),K.map.depthTexture.name=Q.name+".shadowMapDepth",K.map.depthTexture.format=Jt,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vt,K.map.depthTexture.magFilter=Vt}else Q.isPointLight?(K.map=new Wr(l.x),K.map.depthTexture=new Na(l.x,Wt)):(K.map=new Mt(l.x,l.y),K.map.depthTexture=new xn(l.x,l.y,Wt)),K.map.depthTexture.name=Q.name+".shadowMap",K.map.depthTexture.format=Jt,this.type===_n?(K.map.depthTexture.compareFunction=Z?qn:Zn,K.map.depthTexture.minFilter=vt,K.map.depthTexture.magFilter=vt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vt,K.map.depthTexture.magFilter=Vt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==l.x||K.map.height!==l.y)&&K.map.setSize(l.x,l.y);const j=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Q.isPointLight!==!0&&K.updateMatrices(Q,c);for(let ee=0;ee<j;ee++){const be=K.getCamera(ee);if(Q.isPointLight){const Re=K.camera,it=K.matrix,ke=Q.distance||Re.far;ke!==Re.far&&(Re.far=ke,Re.updateProjectionMatrix()),rn.setFromMatrixPosition(Q.matrixWorld),Re.position.copy(rn),Vn.copy(Re.position),Vn.add(od[ee]),Re.up.copy(sd[ee]),Re.lookAt(Vn),Re.updateMatrixWorld(),it.makeTranslation(-rn.x,-rn.y,-rn.z),_r.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),K._frustum.setFromProjectionMatrix(_r,Re.coordinateSystem,Re.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)e.setRenderTarget(K.map,ee),e.clear();else{ee===0&&(e.setRenderTarget(K.map),e.clear());const Re=K.getViewport(ee);f.set(a.x*Re.x,a.y*Re.y,a.x*Re.z,a.y*Re.w),V.viewport(f)}i=K.getFrustum(ee),m(N,c,be,Q,this.type)}K.isPointLightShadow!==!0&&this.type===an&&D(K,c),K.needsUpdate=!1}s=this.type,d.needsUpdate=!1,e.setRenderTarget(v,y,O)};function D(_,N){const c=n.update(G);p.defines.VSM_SAMPLES!==_.blurSamples&&(p.defines.VSM_SAMPLES=_.blurSamples,g.defines.VSM_SAMPLES=_.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),_.mapPass===null?_.mapPass=new Mt(l.x,l.y,{format:Qt,type:Dt}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),p.uniforms.shadow_pass.value=_.map.depthTexture,p.uniforms.resolution.value.set(_.map.width,_.map.height),p.uniforms.radius.value=_.radius,e.setRenderTarget(_.mapPass),e.clear(),e.renderBufferDirect(N,null,c,p,G,null),g.uniforms.shadow_pass.value=_.mapPass.texture,g.uniforms.resolution.value.set(_.map.width,_.map.height),g.uniforms.radius.value=_.radius,e.setRenderTarget(_.map),e.clear(),e.renderBufferDirect(N,null,c,g,G,null)}function z(_,N,c,v){let y=null;const O=c.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(O!==void 0)y=O;else if(y=c.isPointLight===!0?A:h,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const V=y.uuid,q=N.uuid;let w=T[V];w===void 0&&(w={},T[V]=w);let Y=w[q];Y===void 0&&(Y=y.clone(),w[q]=Y,N.addEventListener("dispose",E)),y=Y}if(y.visible=N.visible,y.wireframe=N.wireframe,v===an?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:b[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,c.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=e.properties.get(y);V.light=c}return y}function m(_,N,c,v,y){if(_.visible===!1)return;if(_.layers.test(N.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===an)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,_.matrixWorld);const q=n.update(_),w=_.material;if(Array.isArray(w)){const Y=q.groups;for(let Q=0,K=Y.length;Q<K;Q++){const ne=Y[Q],Z=w[ne.materialIndex];if(Z&&Z.visible){const j=z(_,Z,v,y);_.onBeforeShadow(e,_,N,c,q,j,ne),e.renderBufferDirect(c,null,q,j,_,ne),_.onAfterShadow(e,_,N,c,q,j,ne)}}}else if(w.visible){const Y=z(_,w,v,y);_.onBeforeShadow(e,_,N,c,q,Y,null),e.renderBufferDirect(c,null,q,Y,_,null),_.onAfterShadow(e,_,N,c,q,Y,null)}}const V=_.children;for(let q=0,w=V.length;q<w;q++)m(V[q],N,c,v,y)}function E(_){_.target.removeEventListener("dispose",E);for(const c in T){const v=T[c],y=_.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function cd(e,n){function t(){let x=!1;const oe=new _t;let k=null;const se=new _t(0,0,0,0);return{setMask:function(ue){k!==ue&&!x&&(e.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){x=ue},setClear:function(ue,J,Te,ve,qe){qe===!0&&(ue*=ve,J*=ve,Te*=ve),oe.set(ue,J,Te,ve),se.equals(oe)===!1&&(e.clearColor(ue,J,Te,ve),se.copy(oe))},reset:function(){x=!1,k=null,se.set(-1,0,0,0)}}}function i(){let x=!1,oe=!1,k=null,se=null,ue=null;return{setReversed:function(J){if(oe!==J){const Te=n.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),oe=J;const ve=ue;ue=null,this.setClear(ve)}},getReversed:function(){return oe},setTest:function(J){J?$(e.DEPTH_TEST):Ee(e.DEPTH_TEST)},setMask:function(J){k!==J&&!x&&(e.depthMask(J),k=J)},setFunc:function(J){if(oe&&(J=So[J]),se!==J){switch(J){case qa:e.depthFunc(e.NEVER);break;case Ka:e.depthFunc(e.ALWAYS);break;case Ya:e.depthFunc(e.LESS);break;case ci:e.depthFunc(e.LEQUAL);break;case Xa:e.depthFunc(e.EQUAL);break;case za:e.depthFunc(e.GEQUAL);break;case ka:e.depthFunc(e.GREATER);break;case Wa:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=J}},setLocked:function(J){x=J},setClear:function(J){ue!==J&&(ue=J,oe&&(J=1-J),e.clearDepth(J))},reset:function(){x=!1,k=null,se=null,ue=null,oe=!1}}}function l(){let x=!1,oe=null,k=null,se=null,ue=null,J=null,Te=null,ve=null,qe=null;return{setTest:function(Ge){x||(Ge?$(e.STENCIL_TEST):Ee(e.STENCIL_TEST))},setMask:function(Ge){oe!==Ge&&!x&&(e.stencilMask(Ge),oe=Ge)},setFunc:function(Ge,xt,Tt){(k!==Ge||se!==xt||ue!==Tt)&&(e.stencilFunc(Ge,xt,Tt),k=Ge,se=xt,ue=Tt)},setOp:function(Ge,xt,Tt){(J!==Ge||Te!==xt||ve!==Tt)&&(e.stencilOp(Ge,xt,Tt),J=Ge,Te=xt,ve=Tt)},setLocked:function(Ge){x=Ge},setClear:function(Ge){qe!==Ge&&(e.clearStencil(Ge),qe=Ge)},reset:function(){x=!1,oe=null,k=null,se=null,ue=null,J=null,Te=null,ve=null,qe=null}}}const a=new t,f=new i,h=new l,A=new WeakMap,T=new WeakMap;let C={},b={},p={},g=new WeakMap,U=[],G=null,d=!1,s=null,D=null,z=null,m=null,E=null,_=null,N=null,c=new et(0,0,0),v=0,y=!1,O=null,V=null,q=null,w=null,Y=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ne=0;const Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=ne>=1):Z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=ne>=2);let j=null,ee={};const be=e.getParameter(e.SCISSOR_BOX),Re=e.getParameter(e.VIEWPORT),it=new _t().fromArray(be),ke=new _t().fromArray(Re);function ze(x,oe,k,se){const ue=new Uint8Array(4),J=e.createTexture();e.bindTexture(x,J),e.texParameteri(x,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(x,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Te=0;Te<k;Te++)x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY?e.texImage3D(oe,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,ue):e.texImage2D(oe+Te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ue);return J}const W={};W[e.TEXTURE_2D]=ze(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=ze(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=ze(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=ze(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),f.setClear(1),h.setClear(0),$(e.DEPTH_TEST),f.setFunc(ci),Ie(!1),je(di),$(e.CULL_FACE),Be(wt);function $(x){C[x]!==!0&&(e.enable(x),C[x]=!0)}function Ee(x){C[x]!==!1&&(e.disable(x),C[x]=!1)}function Ue(x,oe){return p[x]!==oe?(e.bindFramebuffer(x,oe),p[x]=oe,x===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=oe),x===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(x,oe){let k=U,se=!1;if(x){k=g.get(oe),k===void 0&&(k=[],g.set(oe,k));const ue=x.textures;if(k.length!==ue.length||k[0]!==e.COLOR_ATTACHMENT0){for(let J=0,Te=ue.length;J<Te;J++)k[J]=e.COLOR_ATTACHMENT0+J;k.length=ue.length,se=!0}}else k[0]!==e.BACK&&(k[0]=e.BACK,se=!0);se&&e.drawBuffers(k)}function ye(x){return G!==x?(e.useProgram(x),G=x,!0):!1}const st={[tn]:e.FUNC_ADD,[oa]:e.FUNC_SUBTRACT,[aa]:e.FUNC_REVERSE_SUBTRACT};st[Eo]=e.MIN,st[xo]=e.MAX;const we={[xa]:e.ZERO,[Ea]:e.ONE,[Sa]:e.SRC_COLOR,[va]:e.SRC_ALPHA,[ga]:e.SRC_ALPHA_SATURATE,[_a]:e.DST_COLOR,[ma]:e.DST_ALPHA,[ha]:e.ONE_MINUS_SRC_COLOR,[pa]:e.ONE_MINUS_SRC_ALPHA,[ua]:e.ONE_MINUS_DST_COLOR,[da]:e.ONE_MINUS_DST_ALPHA,[fa]:e.CONSTANT_COLOR,[ca]:e.ONE_MINUS_CONSTANT_COLOR,[la]:e.CONSTANT_ALPHA,[sa]:e.ONE_MINUS_CONSTANT_ALPHA};function Be(x,oe,k,se,ue,J,Te,ve,qe,Ge){if(x===wt){d===!0&&(Ee(e.BLEND),d=!1);return}if(d===!1&&($(e.BLEND),d=!0),x!==Qa){if(x!==s||Ge!==y){if((D!==tn||E!==tn)&&(e.blendEquation(e.FUNC_ADD),D=tn,E=tn),Ge)switch(x){case vn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hi:e.blendFunc(e.ONE,e.ONE);break;case pi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ui:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Je("WebGLState: Invalid blending: ",x);break}else switch(x){case vn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case pi:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ui:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",x);break}z=null,m=null,_=null,N=null,c.set(0,0,0),v=0,s=x,y=Ge}return}ue=ue||oe,J=J||k,Te=Te||se,(oe!==D||ue!==E)&&(e.blendEquationSeparate(st[oe],st[ue]),D=oe,E=ue),(k!==z||se!==m||J!==_||Te!==N)&&(e.blendFuncSeparate(we[k],we[se],we[J],we[Te]),z=k,m=se,_=J,N=Te),(ve.equals(c)===!1||qe!==v)&&(e.blendColor(ve.r,ve.g,ve.b,qe),c.copy(ve),v=qe),s=x,y=!1}function Ke(x,oe){x.side===Lt?Ee(e.CULL_FACE):$(e.CULL_FACE);let k=x.side===St;oe&&(k=!k),Ie(k),x.blending===vn&&x.transparent===!1?Be(wt):Be(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),f.setFunc(x.depthFunc),f.setTest(x.depthTest),f.setMask(x.depthWrite),a.setMask(x.colorWrite);const se=x.stencilWrite;h.setTest(se),se&&(h.setMask(x.stencilWriteMask),h.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),h.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),ht(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):Ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(x){O!==x&&(x?e.frontFace(e.CW):e.frontFace(e.CCW),O=x)}function je(x){x!==Za?($(e.CULL_FACE),x!==V&&(x===di?e.cullFace(e.BACK):x===$a?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ee(e.CULL_FACE),V=x}function ft(x){x!==q&&(K&&e.lineWidth(x),q=x)}function ht(x,oe,k){x?($(e.POLYGON_OFFSET_FILL),(w!==oe||Y!==k)&&(w=oe,Y=k,f.getReversed()&&(oe=-oe),e.polygonOffset(oe,k))):Ee(e.POLYGON_OFFSET_FILL)}function tt(x){x?$(e.SCISSOR_TEST):Ee(e.SCISSOR_TEST)}function at(x){x===void 0&&(x=e.TEXTURE0+Q-1),j!==x&&(e.activeTexture(x),j=x)}function M(x,oe,k){k===void 0&&(j===null?k=e.TEXTURE0+Q-1:k=j);let se=ee[k];se===void 0&&(se={type:void 0,texture:void 0},ee[k]=se),(se.type!==x||se.texture!==oe)&&(j!==k&&(e.activeTexture(k),j=k),e.bindTexture(x,oe||W[x]),se.type=x,se.texture=oe)}function dt(){const x=ee[j];x!==void 0&&x.type!==void 0&&(e.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function Ve(){try{e.compressedTexImage2D(...arguments)}catch(x){Je("WebGLState:",x)}}function u(){try{e.compressedTexImage3D(...arguments)}catch(x){Je("WebGLState:",x)}}function r(){try{e.texSubImage2D(...arguments)}catch(x){Je("WebGLState:",x)}}function R(){try{e.texSubImage3D(...arguments)}catch(x){Je("WebGLState:",x)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(x){Je("WebGLState:",x)}}function B(){try{e.compressedTexSubImage3D(...arguments)}catch(x){Je("WebGLState:",x)}}function te(){try{e.texStorage2D(...arguments)}catch(x){Je("WebGLState:",x)}}function ie(){try{e.texStorage3D(...arguments)}catch(x){Je("WebGLState:",x)}}function H(){try{e.texImage2D(...arguments)}catch(x){Je("WebGLState:",x)}}function X(){try{e.texImage3D(...arguments)}catch(x){Je("WebGLState:",x)}}function re(x){return b[x]!==void 0?b[x]:e.getParameter(x)}function xe(x,oe){b[x]!==oe&&(e.pixelStorei(x,oe),b[x]=oe)}function le(x){it.equals(x)===!1&&(e.scissor(x.x,x.y,x.z,x.w),it.copy(x))}function ae(x){ke.equals(x)===!1&&(e.viewport(x.x,x.y,x.z,x.w),ke.copy(x))}function Me(x,oe){let k=T.get(oe);k===void 0&&(k=new WeakMap,T.set(oe,k));let se=k.get(x);se===void 0&&(se=e.getUniformBlockIndex(oe,x.name),k.set(x,se))}function Ae(x,oe){const se=T.get(oe).get(x);A.get(oe)!==se&&(e.uniformBlockBinding(oe,se,x.__bindingPointIndex),A.set(oe,se))}function Ce(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),f.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),C={},b={},j=null,ee={},p={},g=new WeakMap,U=[],G=null,d=!1,s=null,D=null,z=null,m=null,E=null,_=null,N=null,c=new et(0,0,0),v=0,y=!1,O=null,V=null,q=null,w=null,Y=null,it.set(0,0,e.canvas.width,e.canvas.height),ke.set(0,0,e.canvas.width,e.canvas.height),a.reset(),f.reset(),h.reset()}return{buffers:{color:a,depth:f,stencil:h},enable:$,disable:Ee,bindFramebuffer:Ue,drawBuffers:me,useProgram:ye,setBlending:Be,setMaterial:Ke,setFlipSided:Ie,setCullFace:je,setLineWidth:ft,setPolygonOffset:ht,setScissorTest:tt,activeTexture:at,bindTexture:M,unbindTexture:dt,compressedTexImage2D:Ve,compressedTexImage3D:u,texImage2D:H,texImage3D:X,pixelStorei:xe,getParameter:re,updateUBOMapping:Me,uniformBlockBinding:Ae,texStorage2D:te,texStorage3D:ie,texSubImage2D:r,texSubImage3D:R,compressedTexSubImage2D:I,compressedTexSubImage3D:B,scissor:le,viewport:ae,reset:Ce}}function fd(e,n,t,i,l,a,f){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new gt,C=new WeakMap,b=new Set;let p;const g=new WeakMap;let U=!1;try{U=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function G(u,r){return U?new OffscreenCanvas(u,r):po("canvas")}function d(u,r,R){let I=1;const B=Ve(u);if((B.width>R||B.height>R)&&(I=R/Math.max(B.width,B.height)),I<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const te=Math.floor(I*B.width),ie=Math.floor(I*B.height);p===void 0&&(p=G(te,ie));const H=r?G(te,ie):p;return H.width=te,H.height=ie,H.getContext("2d").drawImage(u,0,0,te,ie),We("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+te+"x"+ie+")."),H}else return"data"in u&&We("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),u;return u}function s(u){return u.generateMipmaps}function D(u){e.generateMipmap(u)}function z(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(u,r,R,I,B,te=!1){if(u!==null){if(e[u]!==void 0)return e[u];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let ie;I&&(ie=n.get("EXT_texture_norm16"),ie||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=r;if(r===e.RED&&(R===e.FLOAT&&(H=e.R32F),R===e.HALF_FLOAT&&(H=e.R16F),R===e.UNSIGNED_BYTE&&(H=e.R8),R===e.UNSIGNED_SHORT&&ie&&(H=ie.R16_EXT),R===e.SHORT&&ie&&(H=ie.R16_SNORM_EXT)),r===e.RED_INTEGER&&(R===e.UNSIGNED_BYTE&&(H=e.R8UI),R===e.UNSIGNED_SHORT&&(H=e.R16UI),R===e.UNSIGNED_INT&&(H=e.R32UI),R===e.BYTE&&(H=e.R8I),R===e.SHORT&&(H=e.R16I),R===e.INT&&(H=e.R32I)),r===e.RG&&(R===e.FLOAT&&(H=e.RG32F),R===e.HALF_FLOAT&&(H=e.RG16F),R===e.UNSIGNED_BYTE&&(H=e.RG8),R===e.UNSIGNED_SHORT&&ie&&(H=ie.RG16_EXT),R===e.SHORT&&ie&&(H=ie.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(R===e.UNSIGNED_BYTE&&(H=e.RG8UI),R===e.UNSIGNED_SHORT&&(H=e.RG16UI),R===e.UNSIGNED_INT&&(H=e.RG32UI),R===e.BYTE&&(H=e.RG8I),R===e.SHORT&&(H=e.RG16I),R===e.INT&&(H=e.RG32I)),r===e.RGB_INTEGER&&(R===e.UNSIGNED_BYTE&&(H=e.RGB8UI),R===e.UNSIGNED_SHORT&&(H=e.RGB16UI),R===e.UNSIGNED_INT&&(H=e.RGB32UI),R===e.BYTE&&(H=e.RGB8I),R===e.SHORT&&(H=e.RGB16I),R===e.INT&&(H=e.RGB32I)),r===e.RGBA_INTEGER&&(R===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),R===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),R===e.UNSIGNED_INT&&(H=e.RGBA32UI),R===e.BYTE&&(H=e.RGBA8I),R===e.SHORT&&(H=e.RGBA16I),R===e.INT&&(H=e.RGBA32I)),r===e.RGB&&(R===e.UNSIGNED_SHORT&&ie&&(H=ie.RGB16_EXT),R===e.SHORT&&ie&&(H=ie.RGB16_SNORM_EXT),R===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),R===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),r===e.RGBA){const X=te?wr:nt.getTransfer(B);R===e.FLOAT&&(H=e.RGBA32F),R===e.HALF_FLOAT&&(H=e.RGBA16F),R===e.UNSIGNED_BYTE&&(H=X===$e?e.SRGB8_ALPHA8:e.RGBA8),R===e.UNSIGNED_SHORT&&ie&&(H=ie.RGBA16_EXT),R===e.SHORT&&ie&&(H=ie.RGBA16_SNORM_EXT),R===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),R===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function E(u,r){let R;return u?r===null||r===Wt||r===ln?R=e.DEPTH24_STENCIL8:r===Bt?R=e.DEPTH32F_STENCIL8:r===Mn&&(R=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===Wt||r===ln?R=e.DEPTH_COMPONENT24:r===Bt?R=e.DEPTH_COMPONENT32F:r===Mn&&(R=e.DEPTH_COMPONENT16),R}function _(u,r){return s(u)===!0||u.isFramebufferTexture&&u.minFilter!==Vt&&u.minFilter!==vt?Math.log2(Math.max(r.width,r.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?r.mipmaps.length:1}function N(u){const r=u.target;r.removeEventListener("dispose",N),v(r),r.isVideoTexture&&C.delete(r),r.isHTMLTexture&&b.delete(r)}function c(u){const r=u.target;r.removeEventListener("dispose",c),O(r)}function v(u){const r=i.get(u);if(r.__webglInit===void 0)return;const R=u.source,I=g.get(R);if(I){const B=I[r.__cacheKey];B.usedTimes--,B.usedTimes===0&&y(u),Object.keys(I).length===0&&g.delete(R)}i.remove(u)}function y(u){const r=i.get(u);e.deleteTexture(r.__webglTexture);const R=u.source,I=g.get(R);delete I[r.__cacheKey],f.memory.textures--}function O(u){const r=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(r.__webglFramebuffer[I]))for(let B=0;B<r.__webglFramebuffer[I].length;B++)e.deleteFramebuffer(r.__webglFramebuffer[I][B]);else e.deleteFramebuffer(r.__webglFramebuffer[I]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[I])}else{if(Array.isArray(r.__webglFramebuffer))for(let I=0;I<r.__webglFramebuffer.length;I++)e.deleteFramebuffer(r.__webglFramebuffer[I]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let I=0;I<r.__webglColorRenderbuffer.length;I++)r.__webglColorRenderbuffer[I]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[I]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const R=u.textures;for(let I=0,B=R.length;I<B;I++){const te=i.get(R[I]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),f.memory.textures--),i.remove(R[I])}i.remove(u)}let V=0;function q(){V=0}function w(){return V}function Y(u){V=u}function Q(){const u=V;return u>=l.maxTextures&&We("WebGLTextures: Trying to use "+(u+1)+" texture units while this GPU supports only "+l.maxTextures),V+=1,u}function K(u){const r=[];return r.push(u.wrapS),r.push(u.wrapT),r.push(u.wrapR||0),r.push(u.magFilter),r.push(u.minFilter),r.push(u.anisotropy),r.push(u.internalFormat),r.push(u.format),r.push(u.type),r.push(u.generateMipmaps),r.push(u.premultiplyAlpha),r.push(u.flipY),r.push(u.unpackAlignment),r.push(u.colorSpace),r.join()}function ne(u,r){const R=i.get(u);if(u.isVideoTexture&&M(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&R.__version!==u.version){const I=u.image;if(I===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(R,u,r);return}}else u.isExternalTexture&&(R.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,R.__webglTexture,e.TEXTURE0+r)}function Z(u,r){const R=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&R.__version!==u.version){Ee(R,u,r);return}else u.isExternalTexture&&(R.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,R.__webglTexture,e.TEXTURE0+r)}function j(u,r){const R=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&R.__version!==u.version){Ee(R,u,r);return}t.bindTexture(e.TEXTURE_3D,R.__webglTexture,e.TEXTURE0+r)}function ee(u,r){const R=i.get(u);if(u.isCubeDepthTexture!==!0&&u.version>0&&R.__version!==u.version){Ue(R,u,r);return}t.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+r)}const be={[Ta]:e.REPEAT,[Wn]:e.CLAMP_TO_EDGE,[Ma]:e.MIRRORED_REPEAT},Re={[Vt]:e.NEAREST,[Aa]:e.NEAREST_MIPMAP_NEAREST,[pn]:e.NEAREST_MIPMAP_LINEAR,[vt]:e.LINEAR,[Pn]:e.LINEAR_MIPMAP_NEAREST,[Kt]:e.LINEAR_MIPMAP_LINEAR},it={[Ua]:e.NEVER,[La]:e.ALWAYS,[Pa]:e.LESS,[Zn]:e.LEQUAL,[Ca]:e.EQUAL,[qn]:e.GEQUAL,[ba]:e.GREATER,[Ra]:e.NOTEQUAL};function ke(u,r){if(r.type===Bt&&n.has("OES_texture_float_linear")===!1&&(r.magFilter===vt||r.magFilter===Pn||r.magFilter===pn||r.magFilter===Kt||r.minFilter===vt||r.minFilter===Pn||r.minFilter===pn||r.minFilter===Kt)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,be[r.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,be[r.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,be[r.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Re[r.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Re[r.minFilter]),r.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,it[r.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===Vt||r.minFilter!==pn&&r.minFilter!==Kt||r.type===Bt&&n.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const R=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,l.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function ze(u,r){let R=!1;u.__webglInit===void 0&&(u.__webglInit=!0,r.addEventListener("dispose",N));const I=r.source;let B=g.get(I);B===void 0&&(B={},g.set(I,B));const te=K(r);if(te!==u.__cacheKey){B[te]===void 0&&(B[te]={texture:e.createTexture(),usedTimes:0},f.memory.textures++,R=!0),B[te].usedTimes++;const ie=B[u.__cacheKey];ie!==void 0&&(B[u.__cacheKey].usedTimes--,ie.usedTimes===0&&y(r)),u.__cacheKey=te,u.__webglTexture=B[te].texture}return R}function W(u,r,R){return Math.floor(Math.floor(u/R)/r)}function $(u,r,R,I){const te=u.updateRanges;if(te.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,R,I,r.data);else{te.sort((xe,le)=>xe.start-le.start);let ie=0;for(let xe=1;xe<te.length;xe++){const le=te[ie],ae=te[xe],Me=le.start+le.count,Ae=W(ae.start,r.width,4),Ce=W(le.start,r.width,4);ae.start<=Me+1&&Ae===Ce&&W(ae.start+ae.count-1,r.width,4)===Ae?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++ie,te[ie]=ae)}te.length=ie+1;const H=t.getParameter(e.UNPACK_ROW_LENGTH),X=t.getParameter(e.UNPACK_SKIP_PIXELS),re=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let xe=0,le=te.length;xe<le;xe++){const ae=te[xe],Me=Math.floor(ae.start/4),Ae=Math.ceil(ae.count/4),Ce=Me%r.width,x=Math.floor(Me/r.width),oe=Ae,k=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(e.UNPACK_SKIP_ROWS,x),t.texSubImage2D(e.TEXTURE_2D,0,Ce,x,oe,k,R,I,r.data)}u.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,H),t.pixelStorei(e.UNPACK_SKIP_PIXELS,X),t.pixelStorei(e.UNPACK_SKIP_ROWS,re)}}function Ee(u,r,R){let I=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(I=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(I=e.TEXTURE_3D);const B=ze(u,r),te=r.source;t.bindTexture(I,u.__webglTexture,e.TEXTURE0+R);const ie=i.get(te);if(te.version!==ie.__version||B===!0){if(t.activeTexture(e.TEXTURE0+R),(typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)===!1){const k=nt.getPrimaries(nt.workingColorSpace),se=r.colorSpace===Yt?null:nt.getPrimaries(r.colorSpace),ue=r.colorSpace===Yt||k===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let X=d(r.image,!1,l.maxTextureSize);X=dt(r,X);const re=a.convert(r.format,r.colorSpace),xe=a.convert(r.type);let le=m(r.internalFormat,re,xe,r.normalized,r.colorSpace,r.isVideoTexture);ke(I,r);let ae;const Me=r.mipmaps,Ae=r.isVideoTexture!==!0,Ce=ie.__version===void 0||B===!0,x=te.dataReady,oe=_(r,X);if(r.isDepthTexture)le=E(r.format===qt,r.type),Ce&&(Ae?t.texStorage2D(e.TEXTURE_2D,1,le,X.width,X.height):t.texImage2D(e.TEXTURE_2D,0,le,X.width,X.height,0,re,xe,null));else if(r.isDataTexture)if(Me.length>0){Ae&&Ce&&t.texStorage2D(e.TEXTURE_2D,oe,le,Me[0].width,Me[0].height);for(let k=0,se=Me.length;k<se;k++)ae=Me[k],Ae?x&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,ae.width,ae.height,re,xe,ae.data):t.texImage2D(e.TEXTURE_2D,k,le,ae.width,ae.height,0,re,xe,ae.data);r.generateMipmaps=!1}else Ae?(Ce&&t.texStorage2D(e.TEXTURE_2D,oe,le,X.width,X.height),x&&$(r,X,re,xe)):t.texImage2D(e.TEXTURE_2D,0,le,X.width,X.height,0,re,xe,X.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){Ae&&Ce&&t.texStorage3D(e.TEXTURE_2D_ARRAY,oe,le,Me[0].width,Me[0].height,X.depth);for(let k=0,se=Me.length;k<se;k++)if(ae=Me[k],r.format!==Ut)if(re!==null)if(Ae){if(x)if(r.layerUpdates.size>0){const ue=Yi(ae.width,ae.height,r.format,r.type);for(const J of r.layerUpdates){const Te=ae.data.subarray(J*ue/ae.data.BYTES_PER_ELEMENT,(J+1)*ue/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,J,ae.width,ae.height,1,re,Te)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,ae.width,ae.height,X.depth,re,ae.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,k,le,ae.width,ae.height,X.depth,0,ae.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?x&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,ae.width,ae.height,X.depth,re,xe,ae.data):t.texImage3D(e.TEXTURE_2D_ARRAY,k,le,ae.width,ae.height,X.depth,0,re,xe,ae.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{Ae&&Ce&&t.texStorage2D(e.TEXTURE_2D,oe,le,Me[0].width,Me[0].height);for(let k=0,se=Me.length;k<se;k++)ae=Me[k],r.format!==Ut?re!==null?Ae?x&&t.compressedTexSubImage2D(e.TEXTURE_2D,k,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(e.TEXTURE_2D,k,le,ae.width,ae.height,0,ae.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?x&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,ae.width,ae.height,re,xe,ae.data):t.texImage2D(e.TEXTURE_2D,k,le,ae.width,ae.height,0,re,xe,ae.data)}else if(r.isDataArrayTexture)if(Ae){if(Ce&&t.texStorage3D(e.TEXTURE_2D_ARRAY,oe,le,X.width,X.height,X.depth),x)if(r.layerUpdates.size>0){const k=Yi(X.width,X.height,r.format,r.type);for(const se of r.layerUpdates){const ue=X.data.subarray(se*k/X.data.BYTES_PER_ELEMENT,(se+1)*k/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,X.width,X.height,1,re,xe,ue)}r.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,re,xe,X.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,le,X.width,X.height,X.depth,0,re,xe,X.data);else if(r.isData3DTexture)Ae?(Ce&&t.texStorage3D(e.TEXTURE_3D,oe,le,X.width,X.height,X.depth),x&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,re,xe,X.data)):t.texImage3D(e.TEXTURE_3D,0,le,X.width,X.height,X.depth,0,re,xe,X.data);else if(r.isFramebufferTexture){if(Ce)if(Ae)t.texStorage2D(e.TEXTURE_2D,oe,le,X.width,X.height);else{let k=X.width,se=X.height;for(let ue=0;ue<oe;ue++)t.texImage2D(e.TEXTURE_2D,ue,le,k,se,0,re,xe,null),k>>=1,se>>=1}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const k=e.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),X.parentNode!==k){k.appendChild(X),b.add(r),k.onpaint=se=>{const ue=se.changedElements;for(const J of b)ue.includes(J.image)&&(J.needsUpdate=!0)},k.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,X);else{const ue=e.RGBA,J=e.RGBA,Te=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ue,J,Te,X)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Ae&&Ce){const k=Ve(Me[0]);t.texStorage2D(e.TEXTURE_2D,oe,le,k.width,k.height)}for(let k=0,se=Me.length;k<se;k++)ae=Me[k],Ae?x&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,re,xe,ae):t.texImage2D(e.TEXTURE_2D,k,le,re,xe,ae);r.generateMipmaps=!1}else if(Ae){if(Ce){const k=Ve(X);t.texStorage2D(e.TEXTURE_2D,oe,le,k.width,k.height)}x&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,re,xe,X)}else t.texImage2D(e.TEXTURE_2D,0,le,re,xe,X);s(r)&&D(I),ie.__version=te.version,r.onUpdate&&r.onUpdate(r)}u.__version=r.version}function Ue(u,r,R){if(r.image.length!==6)return;const I=ze(u,r),B=r.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+R);const te=i.get(B);if(B.version!==te.__version||I===!0){t.activeTexture(e.TEXTURE0+R);const ie=nt.getPrimaries(nt.workingColorSpace),H=r.colorSpace===Yt?null:nt.getPrimaries(r.colorSpace),X=r.colorSpace===Yt||ie===H?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const re=r.isCompressedTexture||r.image[0].isCompressedTexture,xe=r.image[0]&&r.image[0].isDataTexture,le=[];for(let J=0;J<6;J++)!re&&!xe?le[J]=d(r.image[J],!0,l.maxCubemapSize):le[J]=xe?r.image[J].image:r.image[J],le[J]=dt(r,le[J]);const ae=le[0],Me=a.convert(r.format,r.colorSpace),Ae=a.convert(r.type),Ce=m(r.internalFormat,Me,Ae,r.normalized,r.colorSpace),x=r.isVideoTexture!==!0,oe=te.__version===void 0||I===!0,k=B.dataReady;let se=_(r,ae);ke(e.TEXTURE_CUBE_MAP,r);let ue;if(re){x&&oe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,se,Ce,ae.width,ae.height);for(let J=0;J<6;J++){ue=le[J].mipmaps;for(let Te=0;Te<ue.length;Te++){const ve=ue[Te];r.format!==Ut?Me!==null?x?k&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Ce,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):x?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,ve.width,ve.height,Me,Ae,ve.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Ce,ve.width,ve.height,0,Me,Ae,ve.data)}}}else{if(ue=r.mipmaps,x&&oe){ue.length>0&&se++;const J=Ve(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,se,Ce,J.width,J.height)}for(let J=0;J<6;J++)if(xe){x?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le[J].width,le[J].height,Me,Ae,le[J].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,le[J].width,le[J].height,0,Me,Ae,le[J].data);for(let Te=0;Te<ue.length;Te++){const qe=ue[Te].image[J].image;x?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,qe.width,qe.height,Me,Ae,qe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Ce,qe.width,qe.height,0,Me,Ae,qe.data)}}else{x?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me,Ae,le[J]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,Me,Ae,le[J]);for(let Te=0;Te<ue.length;Te++){const ve=ue[Te];x?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Me,Ae,ve.image[J]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Ce,Me,Ae,ve.image[J])}}}s(r)&&D(e.TEXTURE_CUBE_MAP),te.__version=B.version,r.onUpdate&&r.onUpdate(r)}u.__version=r.version}function me(u,r,R,I,B,te){const ie=a.convert(R.format,R.colorSpace),H=a.convert(R.type),X=m(R.internalFormat,ie,H,R.normalized,R.colorSpace),re=i.get(r),xe=i.get(R);if(xe.__renderTarget=r,!re.__hasExternalTextures){const le=Math.max(1,r.width>>te),ae=Math.max(1,r.height>>te);B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?t.texImage3D(B,te,X,le,ae,r.depth,0,ie,H,null):t.texImage2D(B,te,X,le,ae,0,ie,H,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),at(r)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,I,B,xe.__webglTexture,0,tt(r)):(B===e.TEXTURE_2D||B>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,I,B,xe.__webglTexture,te),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(u,r,R){if(e.bindRenderbuffer(e.RENDERBUFFER,u),r.depthBuffer){const I=r.depthTexture,B=I&&I.isDepthTexture?I.type:null,te=E(r.stencilBuffer,B),ie=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;at(r)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,tt(r),te,r.width,r.height):R?e.renderbufferStorageMultisample(e.RENDERBUFFER,tt(r),te,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,te,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,u)}else{const I=r.textures;for(let B=0;B<I.length;B++){const te=I[B],ie=a.convert(te.format,te.colorSpace),H=a.convert(te.type),X=m(te.internalFormat,ie,H,te.normalized,te.colorSpace);at(r)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,tt(r),X,r.width,r.height):R?e.renderbufferStorageMultisample(e.RENDERBUFFER,tt(r),X,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,X,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function st(u,r,R){const I=r.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const B=i.get(r.depthTexture);if(B.__renderTarget=r,(!B.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),I){if(B.__webglInit===void 0&&(B.__webglInit=!0,r.depthTexture.addEventListener("dispose",N)),B.__webglTexture===void 0){B.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture),ke(e.TEXTURE_CUBE_MAP,r.depthTexture);const re=a.convert(r.depthTexture.format),xe=a.convert(r.depthTexture.type);let le;r.depthTexture.format===Jt?le=e.DEPTH_COMPONENT24:r.depthTexture.format===qt&&(le=e.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,r.width,r.height,0,re,xe,null)}}else ne(r.depthTexture,0);const te=B.__webglTexture,ie=tt(r),H=I?e.TEXTURE_CUBE_MAP_POSITIVE_X+R:e.TEXTURE_2D,X=r.depthTexture.format===qt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===Jt)at(r)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,H,te,0,ie):e.framebufferTexture2D(e.FRAMEBUFFER,X,H,te,0);else if(r.depthTexture.format===qt)at(r)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,H,te,0,ie):e.framebufferTexture2D(e.FRAMEBUFFER,X,H,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(u){const r=i.get(u),R=u.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==u.depthTexture){const I=u.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),I){const B=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,I.removeEventListener("dispose",B)};I.addEventListener("dispose",B),r.__depthDisposeCallback=B}r.__boundDepthTexture=I}if(u.depthTexture&&!r.__autoAllocateDepthBuffer)if(R)for(let I=0;I<6;I++)st(r.__webglFramebuffer[I],u,I);else{const I=u.texture.mipmaps;I&&I.length>0?st(r.__webglFramebuffer[0],u,0):st(r.__webglFramebuffer,u,0)}else if(R){r.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[I]),r.__webglDepthbuffer[I]===void 0)r.__webglDepthbuffer[I]=e.createRenderbuffer(),ye(r.__webglDepthbuffer[I],u,!1);else{const B=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer[I];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,te)}}else{const I=u.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ye(r.__webglDepthbuffer,u,!1);else{const B=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,te)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Be(u,r,R){const I=i.get(u);r!==void 0&&me(I.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),R!==void 0&&we(u)}function Ke(u){const r=u.texture,R=i.get(u),I=i.get(r);u.addEventListener("dispose",c);const B=u.textures,te=u.isWebGLCubeRenderTarget===!0,ie=B.length>1;if(ie||(I.__webglTexture===void 0&&(I.__webglTexture=e.createTexture()),I.__version=r.version,f.memory.textures++),te){R.__webglFramebuffer=[];for(let H=0;H<6;H++)if(r.mipmaps&&r.mipmaps.length>0){R.__webglFramebuffer[H]=[];for(let X=0;X<r.mipmaps.length;X++)R.__webglFramebuffer[H][X]=e.createFramebuffer()}else R.__webglFramebuffer[H]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){R.__webglFramebuffer=[];for(let H=0;H<r.mipmaps.length;H++)R.__webglFramebuffer[H]=e.createFramebuffer()}else R.__webglFramebuffer=e.createFramebuffer();if(ie)for(let H=0,X=B.length;H<X;H++){const re=i.get(B[H]);re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture(),f.memory.textures++)}if(u.samples>0&&at(u)===!1){R.__webglMultisampledFramebuffer=e.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let H=0;H<B.length;H++){const X=B[H];R.__webglColorRenderbuffer[H]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,R.__webglColorRenderbuffer[H]);const re=a.convert(X.format,X.colorSpace),xe=a.convert(X.type),le=m(X.internalFormat,re,xe,X.normalized,X.colorSpace,u.isXRRenderTarget===!0),ae=tt(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,ae,le,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+H,e.RENDERBUFFER,R.__webglColorRenderbuffer[H])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(R.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(R.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture),ke(e.TEXTURE_CUBE_MAP,r);for(let H=0;H<6;H++)if(r.mipmaps&&r.mipmaps.length>0)for(let X=0;X<r.mipmaps.length;X++)me(R.__webglFramebuffer[H][X],u,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H,X);else me(R.__webglFramebuffer[H],u,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);s(r)&&D(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let H=0,X=B.length;H<X;H++){const re=B[H],xe=i.get(re);let le=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(le=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(le,xe.__webglTexture),ke(le,re),me(R.__webglFramebuffer,u,re,e.COLOR_ATTACHMENT0+H,le,0),s(re)&&D(le)}t.unbindTexture()}else{let H=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(H=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(H,I.__webglTexture),ke(H,r),r.mipmaps&&r.mipmaps.length>0)for(let X=0;X<r.mipmaps.length;X++)me(R.__webglFramebuffer[X],u,r,e.COLOR_ATTACHMENT0,H,X);else me(R.__webglFramebuffer,u,r,e.COLOR_ATTACHMENT0,H,0);s(r)&&D(H),t.unbindTexture()}u.depthBuffer&&we(u)}function Ie(u){const r=u.textures;for(let R=0,I=r.length;R<I;R++){const B=r[R];if(s(B)){const te=z(u),ie=i.get(B).__webglTexture;t.bindTexture(te,ie),D(te),t.unbindTexture()}}}const je=[],ft=[];function ht(u){if(u.samples>0){if(at(u)===!1){const r=u.textures,R=u.width,I=u.height;let B=e.COLOR_BUFFER_BIT;const te=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=i.get(u),H=r.length>1;if(H)for(let re=0;re<r.length;re++)t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const X=u.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let re=0;re<r.length;re++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(B|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(B|=e.STENCIL_BUFFER_BIT)),H){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ie.__webglColorRenderbuffer[re]);const xe=i.get(r[re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xe,0)}e.blitFramebuffer(0,0,R,I,0,0,R,I,B,e.NEAREST),A===!0&&(je.length=0,ft.length=0,je.push(e.COLOR_ATTACHMENT0+re),u.depthBuffer&&u.storeMultisampledDepthBuffer===!1&&(je.push(te),ft.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ft)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),H)for(let re=0;re<r.length;re++){t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,ie.__webglColorRenderbuffer[re]);const xe=i.get(r[re]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,xe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.storeMultisampledDepthBuffer===!1&&A){const r=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function tt(u){return Math.min(l.maxSamples,u.samples)}function at(u){const r=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function M(u){const r=f.render.frame;C.get(u)!==r&&(C.set(u,r),u.update())}function dt(u,r){const R=u.colorSpace,I=u.format,B=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||R!==Gr&&R!==Yt&&(nt.getTransfer(R)===$e?(I!==Ut||B!==Ct)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",R)),r}function Ve(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(T.width=u.naturalWidth||u.width,T.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(T.width=u.displayWidth,T.height=u.displayHeight):(T.width=u.width,T.height=u.height),T}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.getTextureUnits=w,this.setTextureUnits=Y,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=ee,this.rebindTextures=Be,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dd(e,n){function t(i,l=Yt){let a;const f=nt.getTransfer(l);if(i===Ct)return e.UNSIGNED_BYTE;if(i===Tr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ar)return e.UNSIGNED_SHORT_5_5_5_1;if(i===to)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===no)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===io)return e.BYTE;if(i===ro)return e.SHORT;if(i===Mn)return e.UNSIGNED_SHORT;if(i===Lr)return e.INT;if(i===Wt)return e.UNSIGNED_INT;if(i===Bt)return e.FLOAT;if(i===Dt)return e.HALF_FLOAT;if(i===ao)return e.ALPHA;if(i===oo)return e.RGB;if(i===Ut)return e.RGBA;if(i===Jt)return e.DEPTH_COMPONENT;if(i===qt)return e.DEPTH_STENCIL;if(i===so)return e.RED;if(i===Mr)return e.RED_INTEGER;if(i===Qt)return e.RG;if(i===xr)return e.RG_INTEGER;if(i===Er)return e.RGBA_INTEGER;if(i===Un||i===wn||i===Dn||i===In)if(f===$e)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Un)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===In)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Un)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===In)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_i||i===gi||i===vi||i===Si)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===_i)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vi)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Si)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ei||i===xi||i===Mi||i===Ti||i===Ai||i===zn||i===Ri)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ei||i===xi)return f===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Mi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ti)return a.COMPRESSED_R11_EAC;if(i===Ai)return a.COMPRESSED_SIGNED_R11_EAC;if(i===zn)return a.COMPRESSED_RG11_EAC;if(i===Ri)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bi||i===Ci||i===Pi||i===Li||i===Ui||i===wi||i===Di||i===Ii||i===Ni||i===yi||i===Fi||i===Oi||i===Bi||i===Gi)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ci)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Li)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ui)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Di)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ii)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ni)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gi)return f===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hi||i===Vi||i===Wi)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Hi)return f===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vi)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wi)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ki||i===zi||i===Xn||i===Xi)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===ki)return a.COMPRESSED_RED_RGTC1_EXT;if(i===zi)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xi)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ln?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const ud=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pd=`
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

}`;class hd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Pr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new It({vertexShader:ud,fragmentShader:pd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class md extends Fa{constructor(n,t){super();const i=this;let l=null,a=1,f=null,h="local-floor",A=1,T=null,C=null,b=null,p=null,g=null,U=null;const G=typeof XRWebGLBinding<"u",d=new hd,s={},D=t.getContextAttributes();let z=null,m=null;const E=[],_=[],N=new gt;let c=null,v=null;const y=new gn;y.viewport=new _t;const O=new gn;O.viewport=new _t;const V=[y,O],q=new Oa;let w=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=E[W];return $===void 0&&($=new Ln,E[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=E[W];return $===void 0&&($=new Ln,E[W]=$),$.getGripSpace()},this.getHand=function(W){let $=E[W];return $===void 0&&($=new Ln,E[W]=$),$.getHandSpace()};function Q(W){const $=_.indexOf(W.inputSource);if($===-1)return;const Ee=E[$];Ee!==void 0&&(Ee.update(W.inputSource,W.frame,T||f),Ee.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",K),l.removeEventListener("inputsourceschange",ne);for(let W=0;W<E.length;W++){const $=_[W];$!==null&&(_[W]=null,E[W].disconnect($))}w=null,Y=null,d.reset();for(const W in s)delete s[W];if(n.setRenderTarget(z),g=null,p=null,b=null,l=null,m=null,ze.stop(),i.isPresenting=!1,n.setPixelRatio(c),n.setSize(N.width,N.height,!1),v!==null){const W=v.camera;W.fov=v.fov,W.zoom=v.zoom,W.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return T||f},this.setReferenceSpace=function(W){T=W},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return b===null&&G&&(b=new XRWebGLBinding(l,t)),b},this.getFrame=function(){return U},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(z=n.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",K),l.addEventListener("inputsourceschange",ne),D.xrCompatible!==!0&&await t.makeXRCompatible(),c=n.getPixelRatio(),n.getSize(N),G&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,me=null;D.depth&&(me=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=D.stencil?qt:Jt,Ue=D.stencil?ln:Wt);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};b=this.getBinding(),p=b.createProjectionLayer(ye),l.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),m=new Mt(p.textureWidth,p.textureHeight,{format:Ut,type:Ct,depthTexture:new xn(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:D.stencil,colorSpace:n.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Ee={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(l,t,Ee),l.updateRenderState({baseLayer:g}),n.setPixelRatio(1),n.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Mt(g.framebufferWidth,g.framebufferHeight,{format:Ut,type:Ct,colorSpace:n.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(A),T=null,f=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(W){for(let $=0;$<W.removed.length;$++){const Ee=W.removed[$],Ue=_.indexOf(Ee);Ue>=0&&(_[Ue]=null,E[Ue].disconnect(Ee))}for(let $=0;$<W.added.length;$++){const Ee=W.added[$];let Ue=_.indexOf(Ee);if(Ue===-1){for(let ye=0;ye<E.length;ye++)if(ye>=_.length){_.push(Ee),Ue=ye;break}else if(_[ye]===null){_[ye]=Ee,Ue=ye;break}if(Ue===-1)break}const me=E[Ue];me&&me.connect(Ee)}}const Z=new Ne,j=new Ne;function ee(W,$,Ee){Z.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(Ee.matrixWorld);const Ue=Z.distanceTo(j),me=$.projectionMatrix.elements,ye=Ee.projectionMatrix.elements,st=me[14]/(me[10]-1),we=me[14]/(me[10]+1),Be=(me[9]+1)/me[5],Ke=(me[9]-1)/me[5],Ie=(me[8]-1)/me[0],je=(ye[8]+1)/ye[0],ft=st*Ie,ht=st*je,tt=Ue/(-Ie+je),at=tt*-Ie;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(at),W.translateZ(tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),me[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const M=st+tt,dt=we+tt,Ve=ft-at,u=ht+(Ue-at),r=Be*we/dt*M,R=Ke*we/dt*M;W.projectionMatrix.makePerspective(Ve,u,r,R,M,dt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function be(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let $=W.near,Ee=W.far;d.texture!==null&&(d.depthNear>0&&($=d.depthNear),d.depthFar>0&&(Ee=d.depthFar)),q.near=O.near=y.near=$,q.far=O.far=y.far=Ee,(w!==q.near||Y!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),w=q.near,Y=q.far),q.layers.mask=W.layers.mask|6,y.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;const Ue=W.parent,me=q.cameras;be(q,Ue);for(let ye=0;ye<me.length;ye++)be(me[ye],Ue);me.length===2?ee(q,y,O):q.projectionMatrix.copy(y.projectionMatrix),v===null&&W.isPerspectiveCamera&&(v={camera:W,fov:W.fov,zoom:W.zoom}),Re(W,q,Ue)};function Re(W,$,Ee){Ee===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(Ee.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ba*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(p===null&&g===null))return A},this.setFoveation=function(W){A=W,p!==null&&(p.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(q)},this.getCameraTexture=function(W){return s[W]};let it=null;function ke(W,$){if(C=$.getViewerPose(T||f),U=$,C!==null){const Ee=C.views;g!==null&&(n.setRenderTargetFramebuffer(m,g.framebuffer),n.setRenderTarget(m));let Ue=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,Ue=!0);for(let we=0;we<Ee.length;we++){const Be=Ee[we];let Ke=null;if(g!==null)Ke=g.getViewport(Be);else{const je=b.getViewSubImage(p,Be);Ke=je.viewport,we===0&&(n.setRenderTargetTextures(m,je.colorTexture,je.depthStencilTexture),n.setRenderTarget(m))}let Ie=V[we];Ie===void 0&&(Ie=new gn,Ie.layers.enable(we),Ie.viewport=new _t,V[we]=Ie),Ie.matrix.fromArray(Be.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Be.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),we===0&&(q.matrix.copy(Ie.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ue===!0&&q.cameras.push(Ie)}const me=l.enabledFeatures;if(me&&me.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&G){b=i.getBinding();const we=b.getDepthInformation(Ee[0]);we&&we.isValid&&we.texture&&d.init(we,l.renderState)}if(me&&me.includes("camera-access")&&G){n.state.unbindTexture(),b=i.getBinding();for(let we=0;we<Ee.length;we++){const Be=Ee[we].camera;if(Be){let Ke=s[Be];Ke||(Ke=new Pr,s[Be]=Ke);const Ie=b.getCameraImage(Be);Ke.sourceTexture=Ie}}}}for(let Ee=0;Ee<E.length;Ee++){const Ue=_[Ee],me=E[Ee];Ue!==null&&me!==void 0&&me.update(Ue,$,T||f)}it&&it(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),U=null}const ze=new Hr;ze.setAnimationLoop(ke),this.setAnimationLoop=function(W){it=W},this.dispose=function(){}}}const _d=new $t,Kr=new Fe;Kr.set(-1,0,0,0,1,0,0,0,1);function gd(e,n){function t(d,s){d.matrixAutoUpdate===!0&&d.updateMatrix(),s.value.copy(d.matrix)}function i(d,s){s.color.getRGB(d.fogColor.value,br(e)),s.isFog?(d.fogNear.value=s.near,d.fogFar.value=s.far):s.isFogExp2&&(d.fogDensity.value=s.density)}function l(d,s,D,z,m){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?a(d,s):s.isMeshLambertMaterial?(a(d,s),s.envMap&&(d.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(a(d,s),b(d,s)):s.isMeshPhongMaterial?(a(d,s),C(d,s),s.envMap&&(d.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(a(d,s),p(d,s),s.isMeshPhysicalMaterial&&g(d,s,m)):s.isMeshMatcapMaterial?(a(d,s),U(d,s)):s.isMeshDepthMaterial?a(d,s):s.isMeshDistanceMaterial?(a(d,s),G(d,s)):s.isMeshNormalMaterial?a(d,s):s.isLineBasicMaterial?(f(d,s),s.isLineDashedMaterial&&h(d,s)):s.isPointsMaterial?A(d,s,D,z):s.isSpriteMaterial?T(d,s):s.isShadowMaterial?(d.color.value.copy(s.color),d.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}function a(d,s){d.opacity.value=s.opacity,s.color&&d.diffuse.value.copy(s.color),s.emissive&&d.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(d.map.value=s.map,t(s.map,d.mapTransform)),s.alphaMap&&(d.alphaMap.value=s.alphaMap,t(s.alphaMap,d.alphaMapTransform)),s.bumpMap&&(d.bumpMap.value=s.bumpMap,t(s.bumpMap,d.bumpMapTransform),d.bumpScale.value=s.bumpScale,s.side===St&&(d.bumpScale.value*=-1)),s.normalMap&&(d.normalMap.value=s.normalMap,t(s.normalMap,d.normalMapTransform),d.normalScale.value.copy(s.normalScale),s.side===St&&d.normalScale.value.negate()),s.displacementMap&&(d.displacementMap.value=s.displacementMap,t(s.displacementMap,d.displacementMapTransform),d.displacementScale.value=s.displacementScale,d.displacementBias.value=s.displacementBias),s.emissiveMap&&(d.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,d.emissiveMapTransform)),s.specularMap&&(d.specularMap.value=s.specularMap,t(s.specularMap,d.specularMapTransform)),s.alphaTest>0&&(d.alphaTest.value=s.alphaTest);const D=n.get(s),z=D.envMap,m=D.envMapRotation;z&&(d.envMap.value=z,d.envMapRotation.value.setFromMatrix4(_d.makeRotationFromEuler(m)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Kr),d.reflectivity.value=s.reflectivity,d.ior.value=s.ior,d.refractionRatio.value=s.refractionRatio),s.lightMap&&(d.lightMap.value=s.lightMap,d.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,d.lightMapTransform)),s.aoMap&&(d.aoMap.value=s.aoMap,d.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,d.aoMapTransform))}function f(d,s){d.diffuse.value.copy(s.color),d.opacity.value=s.opacity,s.map&&(d.map.value=s.map,t(s.map,d.mapTransform))}function h(d,s){d.dashSize.value=s.dashSize,d.totalSize.value=s.dashSize+s.gapSize,d.scale.value=s.scale}function A(d,s,D,z){d.diffuse.value.copy(s.color),d.opacity.value=s.opacity,d.size.value=s.size*D,d.scale.value=z*.5,s.map&&(d.map.value=s.map,t(s.map,d.uvTransform)),s.alphaMap&&(d.alphaMap.value=s.alphaMap,t(s.alphaMap,d.alphaMapTransform)),s.alphaTest>0&&(d.alphaTest.value=s.alphaTest)}function T(d,s){d.diffuse.value.copy(s.color),d.opacity.value=s.opacity,d.rotation.value=s.rotation,s.map&&(d.map.value=s.map,t(s.map,d.mapTransform)),s.alphaMap&&(d.alphaMap.value=s.alphaMap,t(s.alphaMap,d.alphaMapTransform)),s.alphaTest>0&&(d.alphaTest.value=s.alphaTest)}function C(d,s){d.specular.value.copy(s.specular),d.shininess.value=Math.max(s.shininess,1e-4)}function b(d,s){s.gradientMap&&(d.gradientMap.value=s.gradientMap)}function p(d,s){d.metalness.value=s.metalness,s.metalnessMap&&(d.metalnessMap.value=s.metalnessMap,t(s.metalnessMap,d.metalnessMapTransform)),d.roughness.value=s.roughness,s.roughnessMap&&(d.roughnessMap.value=s.roughnessMap,t(s.roughnessMap,d.roughnessMapTransform)),s.envMap&&(d.envMapIntensity.value=s.envMapIntensity)}function g(d,s,D){d.ior.value=s.ior,s.sheen>0&&(d.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),d.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(d.sheenColorMap.value=s.sheenColorMap,t(s.sheenColorMap,d.sheenColorMapTransform)),s.sheenRoughnessMap&&(d.sheenRoughnessMap.value=s.sheenRoughnessMap,t(s.sheenRoughnessMap,d.sheenRoughnessMapTransform))),s.clearcoat>0&&(d.clearcoat.value=s.clearcoat,d.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(d.clearcoatMap.value=s.clearcoatMap,t(s.clearcoatMap,d.clearcoatMapTransform)),s.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap,t(s.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),s.clearcoatNormalMap&&(d.clearcoatNormalMap.value=s.clearcoatNormalMap,t(s.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),s.side===St&&d.clearcoatNormalScale.value.negate())),s.dispersion>0&&(d.dispersion.value=s.dispersion),s.retroreflectivity>0&&(d.retroreflectivity.value=s.retroreflectivity),s.iridescence>0&&(d.iridescence.value=s.iridescence,d.iridescenceIOR.value=s.iridescenceIOR,d.iridescenceThicknessMinimum.value=s.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=s.iridescenceThicknessRange[1],s.iridescenceMap&&(d.iridescenceMap.value=s.iridescenceMap,t(s.iridescenceMap,d.iridescenceMapTransform)),s.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=s.iridescenceThicknessMap,t(s.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),s.transmission>0&&(d.transmission.value=s.transmission,d.transmissionSamplerMap.value=D.texture,d.transmissionSamplerSize.value.set(D.width,D.height),s.transmissionMap&&(d.transmissionMap.value=s.transmissionMap,t(s.transmissionMap,d.transmissionMapTransform)),d.thickness.value=s.thickness,s.thicknessMap&&(d.thicknessMap.value=s.thicknessMap,t(s.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=s.attenuationDistance,d.attenuationColor.value.copy(s.attenuationColor)),s.anisotropy>0&&(d.anisotropyVector.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation)),s.anisotropyMap&&(d.anisotropyMap.value=s.anisotropyMap,t(s.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=s.specularIntensity,d.specularColor.value.copy(s.specularColor),s.specularColorMap&&(d.specularColorMap.value=s.specularColorMap,t(s.specularColorMap,d.specularColorMapTransform)),s.specularIntensityMap&&(d.specularIntensityMap.value=s.specularIntensityMap,t(s.specularIntensityMap,d.specularIntensityMapTransform))}function U(d,s){s.matcap&&(d.matcap.value=s.matcap)}function G(d,s){const D=n.get(s).light;d.referencePosition.value.setFromMatrixPosition(D.matrixWorld),d.nearDistance.value=D.shadow.camera.near,d.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function vd(e,n,t,i){let l={},a={},f=[];const h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function A(m,E){const _=E.program;i.uniformBlockBinding(m,_)}function T(m,E){let _=l[m.id];_===void 0&&(d(m),_=C(m),l[m.id]=_,m.addEventListener("dispose",D));const N=E.program;i.updateUBOMapping(m,N);const c=n.render.frame;a[m.id]!==c&&(p(m),a[m.id]=c)}function C(m){const E=b();m.__bindingPointIndex=E;const _=e.createBuffer(),N=m.__size,c=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,N,c),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,_),_}function b(){for(let m=0;m<h;m++)if(f.indexOf(m)===-1)return f.push(m),m;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const E=l[m.id],_=m.uniforms,N=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let c=0,v=_.length;c<v;c++){const y=_[c];if(Array.isArray(y))for(let O=0,V=y.length;O<V;O++)g(y[O],c,O,N);else g(y,c,0,N)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(m,E,_,N){if(G(m,E,_,N)===!0){const c=m.__offset,v=m.value;if(Array.isArray(v)){let y=0;for(let O=0;O<v.length;O++){const V=v[O],q=s(V);U(V,m.__data,y),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else U(v,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,c,m.__data)}}function U(m,E,_){typeof m=="number"||typeof m=="boolean"?E[0]=m:m.isMatrix3?(E[0]=m.elements[0],E[1]=m.elements[1],E[2]=m.elements[2],E[3]=0,E[4]=m.elements[3],E[5]=m.elements[4],E[6]=m.elements[5],E[7]=0,E[8]=m.elements[6],E[9]=m.elements[7],E[10]=m.elements[8],E[11]=0):ArrayBuffer.isView(m)?E.set(new m.constructor(m.buffer,m.byteOffset,E.length)):m.toArray(E,_)}function G(m,E,_,N){const c=m.value,v=E+"_"+_;if(N[v]===void 0)return typeof c=="number"||typeof c=="boolean"?N[v]=c:ArrayBuffer.isView(c)?N[v]=c.slice():N[v]=c.clone(),!0;{const y=N[v];if(typeof c=="number"||typeof c=="boolean"){if(y!==c)return N[v]=c,!0}else{if(ArrayBuffer.isView(c))return!0;if(y.equals(c)===!1)return y.copy(c),!0}}return!1}function d(m){const E=m.uniforms;let _=0;const N=16;for(let v=0,y=E.length;v<y;v++){const O=Array.isArray(E[v])?E[v]:[E[v]];for(let V=0,q=O.length;V<q;V++){const w=O[V],Y=Array.isArray(w.value)?w.value:[w.value];for(let Q=0,K=Y.length;Q<K;Q++){const ne=Y[Q],Z=s(ne),j=_%N,ee=j%Z.boundary,be=j+ee;_+=ee,be!==0&&N-be<Z.storage&&(_+=N-be),w.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=_,_+=Z.storage}}}const c=_%N;return c>0&&(_+=N-c),m.__size=_,m.__cache={},this}function s(m){const E={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(E.boundary=4,E.storage=4):m.isVector2?(E.boundary=8,E.storage=8):m.isVector3||m.isColor?(E.boundary=16,E.storage=12):m.isVector4?(E.boundary=16,E.storage=16):m.isMatrix3?(E.boundary=48,E.storage=48):m.isMatrix4?(E.boundary=64,E.storage=64):m.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(E.boundary=16,E.storage=m.byteLength):We("WebGLRenderer: Unsupported uniform value type.",m),E}function D(m){const E=m.target;E.removeEventListener("dispose",D);const _=f.indexOf(E.__bindingPointIndex);f.splice(_,1),e.deleteBuffer(l[E.id]),delete l[E.id],delete a[E.id]}function z(){for(const m in l)e.deleteBuffer(l[m]);f=[],l={},a={}}return{bind:A,update:T,dispose:z}}const Sd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rt=null;function Ed(){return Rt===null&&(Rt=new Ga(Sd,16,16,Qt,Dt),Rt.name="DFG_LUT",Rt.minFilter=vt,Rt.magFilter=vt,Rt.wrapS=Wn,Rt.wrapT=Wn,Rt.generateMipmaps=!1,Rt.needsUpdate=!0),Rt}class Md{constructor(n={}){const{canvas:t=ta(),context:i=null,depth:l=!0,stencil:a=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:T=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:p=!1,outputBufferType:g=Ct}=n;this.isWebGLRenderer=!0;let U;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=i.getContextAttributes().alpha}else U=f;const G=g,d=new Set([Er,xr,Mr]),s=new Set([Ct,Wt,Mn,ln,Tr,Ar]),D=new Uint32Array(4),z=new Int32Array(4),m=new Ne;let E=null,_=null;const N=[],c=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let O=!1,V=null,q=null,w=null,Y=null;this._outputColorSpace=na;let Q=0,K=0,ne=null,Z=-1,j=null;const ee=new _t,be=new _t;let Re=null;const it=new et(0);let ke=0,ze=t.width,W=t.height,$=1,Ee=null,Ue=null;const me=new _t(0,0,ze,W),ye=new _t(0,0,ze,W);let st=!1;const we=new vr;let Be=!1,Ke=!1;const Ie=new $t,je=new Ne,ft=new _t,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function at(){return ne===null?$:1}let M=i;function dt(o,S){return t.getContext(o,S)}let Ve,u,r,R,I,B,te,ie,H,X,re,xe,le,ae,Me,Ae,Ce,x,oe,k,se,ue,J;try{const o={alpha:!0,depth:l,stencil:a,antialias:h,premultipliedAlpha:A,preserveDrawingBuffer:T,powerPreference:C,failIfMajorPerformanceCaveat:b};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",xt,!1),M===null){const S="webgl2";if(M=dt(S,o),M===null)throw dt(S)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(o){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Je("WebGLRenderer: "+o.message),o}function Te(){Ve=new Sc(M),Ve.init(),se=new dd(M,Ve),u=new cc(M,Ve,n,se),r=new cd(M,Ve),u.reversedDepthBuffer&&p&&r.buffers.depth.setReversed(!0),q=M.createFramebuffer(),w=M.createFramebuffer(),Y=M.createFramebuffer(),R=new Mc(M),I=new Zf,B=new fd(M,Ve,r,I,u,se,R),te=new vc(y),ie=new Ao(M),ue=new sc(M,ie),H=new Ec(M,ie,R,ue),X=new Ac(M,H,ie,ue,R),x=new Tc(M,u,B),Me=new fc(I),re=new qf(y,te,Ve,u,ue,Me),xe=new gd(y,I),le=new Qf,ae=new id(Ve),Ce=new oc(y,te,r,X,U,A),Ae=new ld(y,X,u),J=new vd(M,R,u,r),oe=new lc(M,Ve,R),k=new xc(M,Ve,R),R.programs=re.programs,y.capabilities=u,y.extensions=Ve,y.properties=I,y.renderLists=le,y.shadowMap=Ae,y.state=r,y.info=R}G!==Ct&&(v=new bc(G,t.width,t.height,h,l,a));const ve=new md(y,M);this.xr=ve,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const o=Ve.get("WEBGL_lose_context");o&&o.loseContext()},this.forceContextRestore=function(){const o=Ve.get("WEBGL_lose_context");o&&o.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(o){o!==void 0&&($=o,this.setSize(ze,W,!1))},this.getSize=function(o){return o.set(ze,W)},this.setSize=function(o,S,F=!0){if(ve.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=o,W=S,t.width=Math.floor(o*$),t.height=Math.floor(S*$),F===!0&&(t.style.width=o+"px",t.style.height=S+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,o,S)},this.getDrawingBufferSize=function(o){return o.set(ze*$,W*$).floor()},this.setDrawingBufferSize=function(o,S,F){ze=o,W=S,$=F,t.width=Math.floor(o*F),t.height=Math.floor(S*F),this.setViewport(0,0,o,S)},this.setEffects=function(o){if(G===Ct){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(o){for(let S=0;S<o.length;S++)if(o[S].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(o||[])},this.getCurrentViewport=function(o){return o.copy(ee)},this.getViewport=function(o){return o.copy(me)},this.setViewport=function(o,S,F,P){o.isVector4?me.set(o.x,o.y,o.z,o.w):me.set(o,S,F,P),r.viewport(ee.copy(me).multiplyScalar($).round())},this.getScissor=function(o){return o.copy(ye)},this.setScissor=function(o,S,F,P){o.isVector4?ye.set(o.x,o.y,o.z,o.w):ye.set(o,S,F,P),r.scissor(be.copy(ye).multiplyScalar($).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(o){r.setScissorTest(st=o)},this.setOpaqueSort=function(o){Ee=o},this.setTransparentSort=function(o){Ue=o},this.getClearColor=function(o){return o.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(o=!0,S=!0,F=!0){let P=0;if(o){let L=!1;if(ne!==null){const de=ne.texture.format;L=d.has(de)}if(L){const de=ne.texture.type,he=s.has(de),fe=Ce.getClearColor(),_e=Ce.getClearAlpha(),Se=fe.r,Pe=fe.g,De=fe.b;he?(D[0]=Se,D[1]=Pe,D[2]=De,D[3]=_e,M.clearBufferuiv(M.COLOR,0,D)):(z[0]=Se,z[1]=Pe,z[2]=De,z[3]=_e,M.clearBufferiv(M.COLOR,0,z))}else P|=M.COLOR_BUFFER_BIT}S&&(P|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(P|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&M.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(o){o.setRenderer(this),V=o},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Ce.dispose(),le.dispose(),ae.dispose(),I.dispose(),te.dispose(),X.dispose(),ue.dispose(),J.dispose(),re.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Jn),ve.removeEventListener("sessionend",jn),Gt.stop()};function qe(o){o.preventDefault(),si("WebGLRenderer: Context Lost."),O=!0}function Ge(){si("WebGLRenderer: Context Restored."),O=!1;const o=R.autoReset,S=Ae.enabled,F=Ae.autoUpdate,P=Ae.needsUpdate,L=Ae.type;Te(),R.autoReset=o,Ae.enabled=S,Ae.autoUpdate=F,Ae.needsUpdate=P,Ae.type=L}function xt(o){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",o.statusMessage)}function Tt(o){const S=o.target;S.removeEventListener("dispose",Tt),qr(S)}function qr(o){Zr(o),I.remove(o)}function Zr(o){const S=I.get(o).programs;S!==void 0&&(S.forEach(function(F){re.releaseProgram(F)}),o.isShaderMaterial&&re.releaseShaderCache(o))}this.renderBufferDirect=function(o,S,F,P,L,de){S===null&&(S=ht);const he=L.isMesh&&L.matrixWorld.determinantAffine()<0,fe=Jr(o,S,F,P,L);r.setMaterial(P,he);let _e=F.index,Se=1;if(P.wireframe===!0){if(_e=H.getWireframeAttribute(F),_e===void 0)return;Se=2}const Pe=F.drawRange,De=F.attributes.position;let ge=Pe.start*Se,He=(Pe.start+Pe.count)*Se;de!==null&&(ge=Math.max(ge,de.start*Se),He=Math.min(He,(de.start+de.count)*Se)),_e!==null?(ge=Math.max(ge,0),He=Math.min(He,_e.count)):De!=null&&(ge=Math.max(ge,0),He=Math.min(He,De.count));const ot=He-ge;if(ot<0||ot===1/0)return;ue.setup(L,P,fe,F,_e);let Qe,Ye=oe;if(_e!==null&&(Qe=ie.get(_e),Ye=k,Ye.setIndex(Qe)),L.isMesh)P.wireframe===!0?(r.setLineWidth(P.wireframeLinewidth*at()),Ye.setMode(M.LINES)):Ye.setMode(M.TRIANGLES);else if(L.isLine){let ut=P.linewidth;ut===void 0&&(ut=1),r.setLineWidth(ut*at()),L.isLineSegments?Ye.setMode(M.LINES):L.isLineLoop?Ye.setMode(M.LINE_LOOP):Ye.setMode(M.LINE_STRIP)}else L.isPoints?Ye.setMode(M.POINTS):L.isSprite&&Ye.setMode(M.TRIANGLES);if(L.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Ye.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const ut=L._multiDrawStarts,pe=L._multiDrawCounts,pt=L._multiDrawCount,Oe=_e?ie.get(_e).bytesPerElement:1,Et=I.get(P).currentProgram.getUniforms();for(let At=0;At<pt;At++)Et.setValue(M,"_gl_DrawID",At),Ye.render(ut[At]/Oe,pe[At])}else if(L.isInstancedMesh)Ye.renderInstances(ge,ot,L.count);else if(F.isInstancedBufferGeometry){const ut=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,pe=Math.min(F.instanceCount,ut);Ye.renderInstances(ge,ot,pe)}else Ye.render(ge,ot)};function Qn(o,S,F,P){V!==null&&o.isNodeMaterial&&V.setObject(P,o),Be===!0&&Me.setState(o,F,!1),o.transparent===!0&&o.side===Lt&&o.forceSinglePass===!1?(o.side=St,o.needsUpdate=!0,un(o,S,P),o.side=sn,o.needsUpdate=!0,un(o,S,P),o.side=Lt):un(o,S,P)}this.compile=function(o,S,F=null){F===null&&(F=o),V!==null&&V.renderStart(o,S,F),_=ae.get(F),_.init(S),c.push(_),F.traverseVisible(function(L){L.isLight&&L.layers.test(S.layers)&&(_.pushLight(L),L.castShadow&&_.pushShadow(L))}),o!==F&&o.traverseVisible(function(L){L.isLight&&L.layers.test(S.layers)&&(_.pushLight(L),L.castShadow&&_.pushShadow(L))}),_.setupLights(),V!==null&&V.updateLights(_.state.lightsArray),Ke=this.localClippingEnabled,Be=Me.init(this.clippingPlanes,Ke),Be===!0&&Me.setGlobalState(this.clippingPlanes,S),V!==null&&Ae.render(_.state.shadowsArray,F,S);const P=new Set;return o.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const de=L.material;if(de)if(Array.isArray(de))for(let he=0;he<de.length;he++){const fe=de[he];Qn(fe,F,S,L),P.add(fe)}else Qn(de,F,S,L),P.add(de)}),_=c.pop(),V!==null&&V.renderEnd(),P},this.compileAsync=function(o,S,F=null){const P=this.compile(o,S,F);return new Promise(L=>{function de(){if(P.forEach(function(he){const _e=I.get(he).currentProgram;(_e===void 0||_e.isReady())&&P.delete(he)}),P.size===0){L(o);return}setTimeout(de,10)}Ve.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let bn=null;function $r(o){bn&&bn(o)}function Jn(){Gt.stop()}function jn(){Gt.start()}const Gt=new Hr;Gt.setAnimationLoop($r),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(o){bn=o,ve.setAnimationLoop(o),o===null?Gt.stop():Gt.start()},ve.addEventListener("sessionstart",Jn),ve.addEventListener("sessionend",jn),this.render=function(o,S){if(S!==void 0&&S.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(o,S);const F=ve.enabled===!0&&ve.isPresenting===!0,P=v!==null&&(ne===null||F)&&v.begin(y,ne);if(o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(S),S=ve.getCamera()),o.isScene===!0&&o.onBeforeRender(y,o,S,ne),_=ae.get(o,c.length),_.init(S),_.state.textureUnits=B.getTextureUnits(),c.push(_),Ie.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),we.setFromProjectionMatrix(Ie,li,S.reversedDepth),Ke=this.localClippingEnabled,Be=Me.init(this.clippingPlanes,Ke),E=le.get(o,N.length),E.init(),N.push(E),ve.enabled===!0&&ve.isPresenting===!0){const he=y.xr.getDepthSensingMesh();he!==null&&Cn(he,S,-1/0,y.sortObjects)}Cn(o,S,0,y.sortObjects),E.finish(),V!==null&&V.updateLights(_.state.lightsArray),y.sortObjects===!0&&E.sort(Ee,Ue),tt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,tt&&Ce.addToRenderList(E,o),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Me.beginShadows();const L=_.state.shadowsArray;if(Ae.render(L,o,S),Be===!0&&Me.endShadows(),(P&&v.hasRenderPass())===!1){const he=E.opaque,fe=E.transmissive;if(_.setupLights(),S.isArrayCamera){const _e=S.cameras;if(fe.length>0)for(let Se=0,Pe=_e.length;Se<Pe;Se++){const De=_e[Se];ti(he,fe,o,De)}tt&&Ce.render(o);for(let Se=0,Pe=_e.length;Se<Pe;Se++){const De=_e[Se];ei(E,o,De,De.viewport)}}else fe.length>0&&ti(he,fe,o,S),tt&&Ce.render(o),ei(E,o,S)}ne!==null&&K===0&&(B.updateMultisampleRenderTarget(ne),B.updateRenderTargetMipmap(ne)),P&&v.end(y),o.isScene===!0&&o.onAfterRender(y,o,S),ue.resetDefaultState(),Z=-1,j=null,c.pop(),c.length>0?(_=c[c.length-1],B.setTextureUnits(_.state.textureUnits),Be===!0&&Me.setGlobalState(y.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?E=N[N.length-1]:E=null,V!==null&&V.renderEnd()};function Cn(o,S,F,P){if(o.visible===!1)return;if(o.layers.test(S.layers)){if(o.isGroup)F=o.renderOrder;else if(o.isLOD)o.autoUpdate===!0&&o.update(S);else if(o.isLightProbeGrid)_.pushLightProbeGrid(o);else if(o.isLight)_.pushLight(o),o.castShadow&&_.pushShadow(o);else if(o.isSprite){if(!o.frustumCulled||o.intersectsFrustum(we)){P&&ft.setFromMatrixPosition(o.matrixWorld).applyMatrix4(Ie);const he=X.update(o),fe=o.material;fe.visible&&E.push(o,he,fe,F,ft.z,null,S)}}else if((o.isMesh||o.isLine||o.isPoints)&&(!o.frustumCulled||o.intersectsFrustum(we))){const he=X.update(o),fe=o.material;if(P&&(o.boundingSphere!==void 0?(o.boundingSphere===null&&o.computeBoundingSphere(),ft.copy(o.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ft.copy(he.boundingSphere.center)),ft.applyMatrix4(o.matrixWorld).applyMatrix4(Ie)),Array.isArray(fe)){const _e=he.groups;for(let Se=0,Pe=_e.length;Se<Pe;Se++){const De=_e[Se],ge=fe[De.materialIndex];ge&&ge.visible&&E.push(o,he,ge,F,ft.z,De,S)}}else fe.visible&&E.push(o,he,fe,F,ft.z,null,S)}}const de=o.children;for(let he=0,fe=de.length;he<fe;he++)Cn(de[he],S,F,P)}function ei(o,S,F,P){const{opaque:L,transmissive:de,transparent:he}=o;_.setupLightsView(F),Be===!0&&Me.setGlobalState(y.clippingPlanes,F),P&&r.viewport(ee.copy(P)),L.length>0&&dn(L,S,F),de.length>0&&dn(de,S,F),he.length>0&&dn(he,S,F),r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),r.setPolygonOffset(!1)}function ti(o,S,F,P){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[P.id]===void 0){const ge=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[P.id]=new Mt(1,1,{generateMipmaps:!0,type:ge?Dt:Ct,minFilter:Kt,samples:Math.max(4,u.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const de=_.state.transmissionRenderTarget[P.id],he=P.viewport||ee;de.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const fe=y.getRenderTarget(),_e=y.getActiveCubeFace(),Se=y.getActiveMipmapLevel();y.setRenderTarget(de),y.getClearColor(it),ke=y.getClearAlpha(),ke<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Ce.render(F);const Pe=y.toneMapping;y.toneMapping=Pt;const De=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),_.setupLightsView(P),Be===!0&&Me.setGlobalState(y.clippingPlanes,P),dn(o,F,P),B.updateMultisampleRenderTarget(de),B.updateRenderTargetMipmap(de),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let He=0,ot=S.length;He<ot;He++){const Qe=S[He],{object:Ye,geometry:ut,material:pe,group:pt}=Qe;if(pe.side===Lt&&Ye.layers.test(P.layers)){const Oe=pe.side;pe.side=St,pe.needsUpdate=!0,ni(Ye,F,P,ut,pe,pt),pe.side=Oe,pe.needsUpdate=!0,ge=!0}}ge===!0&&(B.updateMultisampleRenderTarget(de),B.updateRenderTargetMipmap(de))}y.setRenderTarget(fe,_e,Se),y.setClearColor(it,ke),De!==void 0&&(P.viewport=De),y.toneMapping=Pe}function dn(o,S,F){const P=S.isScene===!0?S.overrideMaterial:null;for(let L=0,de=o.length;L<de;L++){const he=o[L],{object:fe,geometry:_e,group:Se}=he;let Pe=he.material;Pe.allowOverride===!0&&P!==null&&(Pe=P),fe.layers.test(F.layers)&&ni(fe,S,F,_e,Pe,Se)}}function ni(o,S,F,P,L,de){V!==null&&L.isNodeMaterial&&V.setObject(o,L),o.onBeforeRender(y,S,F,P,L,de),o.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,o.matrixWorld),o.normalMatrix.getNormalMatrix(o.modelViewMatrix),L.onBeforeRender(y,S,F,P,o,de),L.transparent===!0&&L.side===Lt&&L.forceSinglePass===!1?(L.side=St,L.needsUpdate=!0,y.renderBufferDirect(F,S,P,L,o,de),L.side=sn,L.needsUpdate=!0,y.renderBufferDirect(F,S,P,L,o,de),L.side=Lt):y.renderBufferDirect(F,S,P,L,o,de),o.onAfterRender(y,S,F,P,L,de)}function un(o,S,F){S.isScene!==!0&&(S=ht);const P=I.get(o),L=_.state.lights,de=_.state.shadowsArray,he=L.state.version,fe=re.getParameters(o,L.state,de,S,F,_.state.lightProbeGridArray),_e=re.getProgramCacheKey(fe);let Se=P.programs;P.environment=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?S.environment:null,P.fog=S.fog;const Pe=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap;P.envMap=te.get(o.envMap||P.environment,Pe),P.envMapRotation=P.environment!==null&&o.envMap===null?S.environmentRotation:o.envMapRotation,Se===void 0&&(o.addEventListener("dispose",Tt),Se=new Map,P.programs=Se);let De=Se.get(_e);if(De!==void 0){if(P.currentProgram===De&&P.lightsStateVersion===he)return ri(o,fe),De}else fe.uniforms=re.getUniforms(o),V!==null&&o.isNodeMaterial&&V.build(o,F,fe),o.onBeforeCompile(fe,y),De=re.acquireProgram(fe,_e),Se.set(_e,De),P.uniforms=fe.uniforms;const ge=P.uniforms;return(!o.isShaderMaterial&&!o.isRawShaderMaterial||o.clipping===!0)&&(ge.clippingPlanes=Me.uniform),ri(o,fe),P.needsLights=ea(o),P.lightsStateVersion=he,P.needsLights&&(ge.ambientLightColor.value=L.state.ambient,ge.lightProbe.value=L.state.probe,ge.sunLights.value=L.state.sun,ge.sunLightShadows.value=L.state.sunShadow,ge.directionalLights.value=L.state.directional,ge.directionalLightShadows.value=L.state.directionalShadow,ge.spotLights.value=L.state.spot,ge.spotLightShadows.value=L.state.spotShadow,ge.rectAreaLights.value=L.state.rectArea,ge.ltc_1.value=L.state.rectAreaLTC1,ge.ltc_2.value=L.state.rectAreaLTC2,ge.pointLights.value=L.state.point,ge.pointLightShadows.value=L.state.pointShadow,ge.hemisphereLights.value=L.state.hemi,ge.sunShadowMatrix.value=L.state.sunShadowMatrix,ge.sunShadowCascade.value=L.state.sunShadowCascade,ge.directionalShadowMatrix.value=L.state.directionalShadowMatrix,ge.spotLightMatrix.value=L.state.spotLightMatrix,ge.spotLightMap.value=L.state.spotLightMap,ge.pointShadowMatrix.value=L.state.pointShadowMatrix),P.lightProbeGrid=_.state.lightProbeGridArray.length>0,P.currentProgram=De,P.uniformsList=null,De}function ii(o){if(o.uniformsList===null){const S=o.currentProgram.getUniforms();o.uniformsList=Sn.seqWithValue(S.seq,o.uniforms)}return o.uniformsList}function ri(o,S){const F=I.get(o);F.outputColorSpace=S.outputColorSpace,F.batching=S.batching,F.batchingColor=S.batchingColor,F.instancing=S.instancing,F.instancingColor=S.instancingColor,F.instancingMorph=S.instancingMorph,F.skinning=S.skinning,F.morphTargets=S.morphTargets,F.morphNormals=S.morphNormals,F.morphColors=S.morphColors,F.morphTargetsCount=S.morphTargetsCount,F.numClippingPlanes=S.numClippingPlanes,F.numIntersection=S.numClipIntersection,F.vertexAlphas=S.vertexAlphas,F.vertexTangents=S.vertexTangents,F.toneMapping=S.toneMapping}function Qr(o,S){if(o.length===0)return null;if(o.length===1)return o[0].texture!==null?o[0]:null;m.setFromMatrixPosition(S.matrixWorld);for(let F=0,P=o.length;F<P;F++){const L=o[F];if(L.texture!==null&&L.boundingBox.containsPoint(m))return L}return null}function Jr(o,S,F,P,L){S.isScene!==!0&&(S=ht),B.resetTextureUnits();const de=S.fog,he=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?S.environment:null,fe=ne===null?y.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,_e=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Se=te.get(P.envMap||he,_e),Pe=P.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),ge=!!F.morphAttributes.position,He=!!F.morphAttributes.normal,ot=!!F.morphAttributes.color;let Qe=Pt;P.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Qe=y.toneMapping);const Ye=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=Ye!==void 0?Ye.length:0,pe=I.get(P),pt=_.state.lights;if(Be===!0&&(Ke===!0||o!==j)){const Ze=o===j&&P.id===Z;Me.setState(P,o,Ze)}let Oe=!1;P.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==pt.state.version||pe.outputColorSpace!==fe||L.isBatchedMesh&&pe.batching===!1||!L.isBatchedMesh&&pe.batching===!0||L.isBatchedMesh&&pe.batchingColor===!0&&L._colorsTexture===null||L.isBatchedMesh&&pe.batchingColor===!1&&L._colorsTexture!==null||L.isInstancedMesh&&pe.instancing===!1||!L.isInstancedMesh&&pe.instancing===!0||L.isSkinnedMesh&&pe.skinning===!1||!L.isSkinnedMesh&&pe.skinning===!0||L.isInstancedMesh&&pe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&pe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&pe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&pe.instancingMorph===!1&&L.morphTexture!==null||pe.envMap!==Se||P.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Me.numPlanes||pe.numIntersection!==Me.numIntersection)||pe.vertexAlphas!==Pe||pe.vertexTangents!==De||pe.morphTargets!==ge||pe.morphNormals!==He||pe.morphColors!==ot||pe.toneMapping!==Qe||pe.morphTargetsCount!==ut||!!pe.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,pe.__version=P.version);let Et=pe.currentProgram;Oe===!0&&(Et=un(P,S,L),V&&P.isNodeMaterial&&V.onUpdateProgram(P,Et,pe));let At=!1,yt=!1,kt=!1;const Xe=Et.getUniforms(),rt=pe.uniforms;if(r.useProgram(Et.program)&&(At=!0,yt=!0,kt=!0),P.id!==Z&&(Z=P.id,yt=!0),pe.needsLights){const Ze=Qr(_.state.lightProbeGridArray,L);pe.lightProbeGrid!==Ze&&(pe.lightProbeGrid=Ze,yt=!0)}if(At||j!==o){r.buffers.depth.getReversed()&&o.reversedDepth!==!0&&(o._reversedDepth=!0,o.updateProjectionMatrix()),Xe.setValue(M,"projectionMatrix",o.projectionMatrix),Xe.setValue(M,"viewMatrix",o.matrixWorldInverse);const Ot=Xe.map.cameraPosition;Ot!==void 0&&Ot.setValue(M,je.setFromMatrixPosition(o.matrixWorld)),u.logarithmicDepthBuffer&&Xe.setValue(M,"logDepthBufFC",2/(Math.log(o.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Xe.setValue(M,"isOrthographic",o.isOrthographicCamera===!0),j!==o&&(j=o,yt=!0,kt=!0)}if(pe.needsLights&&(pt.state.sunShadowMap.length>0&&Xe.setValue(M,"sunShadowMap",pt.state.sunShadowMap,B),pt.state.directionalShadowMap.length>0&&Xe.setValue(M,"directionalShadowMap",pt.state.directionalShadowMap,B),pt.state.spotShadowMap.length>0&&Xe.setValue(M,"spotShadowMap",pt.state.spotShadowMap,B),pt.state.pointShadowMap.length>0&&Xe.setValue(M,"pointShadowMap",pt.state.pointShadowMap,B)),L.isSkinnedMesh){Xe.setOptional(M,L,"bindMatrix"),Xe.setOptional(M,L,"bindMatrixInverse");const Ze=L.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Xe.setValue(M,"boneTexture",Ze.boneTexture,B))}L.isBatchedMesh&&(Xe.setOptional(M,L,"batchingTexture"),Xe.setValue(M,"batchingTexture",L._matricesTexture,B),Xe.setOptional(M,L,"batchingIdTexture"),Xe.setValue(M,"batchingIdTexture",L._indirectTexture,B),Xe.setOptional(M,L,"batchingColorTexture"),L._colorsTexture!==null&&Xe.setValue(M,"batchingColorTexture",L._colorsTexture,B));const Ft=F.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&x.update(L,F,Et),(yt||pe.receiveShadow!==L.receiveShadow)&&(pe.receiveShadow=L.receiveShadow,Xe.setValue(M,"receiveShadow",L.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&S.environment!==null&&(rt.envMapIntensity.value=S.environmentIntensity),rt.dfgLUT!==void 0&&(rt.dfgLUT.value=Ed()),yt){if(Xe.setValue(M,"toneMappingExposure",y.toneMappingExposure),pe.needsLights&&jr(rt,kt),de&&P.fog===!0&&xe.refreshFogUniforms(rt,de),xe.refreshMaterialUniforms(rt,P,$,W,_.state.transmissionRenderTarget[o.id]),pe.needsLights&&pe.lightProbeGrid){const Ze=pe.lightProbeGrid;rt.probesSH.value=Ze.texture,rt.probesMin.value.copy(Ze.boundingBox.min),rt.probesMax.value.copy(Ze.boundingBox.max),rt.probesResolution.value.copy(Ze.resolution)}Sn.upload(M,ii(pe),rt,B)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Sn.upload(M,ii(pe),rt,B),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Xe.setValue(M,"center",L.center),Xe.setValue(M,"modelViewMatrix",L.modelViewMatrix),Xe.setValue(M,"normalMatrix",L.normalMatrix),Xe.setValue(M,"modelMatrix",L.matrixWorld),P.uniformsGroups!==void 0){const Ze=P.uniformsGroups;for(let Ot=0,zt=Ze.length;Ot<zt;Ot++){const oi=Ze[Ot];J.update(oi,Et),J.bind(oi,Et)}}return Et}function jr(o,S){o.ambientLightColor.needsUpdate=S,o.lightProbe.needsUpdate=S,o.sunLights.needsUpdate=S,o.sunLightShadows.needsUpdate=S,o.directionalLights.needsUpdate=S,o.directionalLightShadows.needsUpdate=S,o.pointLights.needsUpdate=S,o.pointLightShadows.needsUpdate=S,o.spotLights.needsUpdate=S,o.spotLightShadows.needsUpdate=S,o.rectAreaLights.needsUpdate=S,o.hemisphereLights.needsUpdate=S}function ea(o){return o.isMeshLambertMaterial||o.isMeshToonMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isShadowMaterial||o.isShaderMaterial&&o.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(o,S,F){const P=I.get(o);P.__autoAllocateDepthBuffer=o.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),I.get(o.texture).__webglTexture=S,I.get(o.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:F,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(o,S){const F=I.get(o);F.__webglFramebuffer=S,F.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(o,S=0,F=0){ne=o,Q=S,K=F;let P=null,L=!1,de=!1;if(o){const fe=I.get(o);if(fe.__useDefaultFramebuffer!==void 0){r.bindFramebuffer(M.FRAMEBUFFER,fe.__webglFramebuffer),ee.copy(o.viewport),be.copy(o.scissor),Re=o.scissorTest,r.viewport(ee),r.scissor(be),r.setScissorTest(Re),Z=-1;return}else if(fe.__webglFramebuffer===void 0)B.setupRenderTarget(o);else if(fe.__hasExternalTextures)B.rebindTextures(o,I.get(o.texture).__webglTexture,I.get(o.depthTexture).__webglTexture);else if(o.depthBuffer){const Pe=o.depthTexture;if(fe.__boundDepthTexture!==Pe){if(Pe!==null&&I.has(Pe)&&(o.width!==Pe.image.width||o.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(o)}}const _e=o.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(de=!0);const Se=I.get(o).__webglFramebuffer;o.isWebGLCubeRenderTarget?(Array.isArray(Se[S])?P=Se[S][F]:P=Se[S],L=!0):o.samples>0&&B.useMultisampledRTT(o)===!1?P=I.get(o).__webglMultisampledFramebuffer:Array.isArray(Se)?P=Se[F]:P=Se,ee.copy(o.viewport),be.copy(o.scissor),Re=o.scissorTest}else ee.copy(me).multiplyScalar($).floor(),be.copy(ye).multiplyScalar($).floor(),Re=st;if(F!==0&&(P=q),r.bindFramebuffer(M.FRAMEBUFFER,P)&&r.drawBuffers(o,P),r.viewport(ee),r.scissor(be),r.setScissorTest(Re),L){const fe=I.get(o.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+S,fe.__webglTexture,F)}else if(de){const fe=S;for(let _e=0;_e<o.textures.length;_e++){const Se=I.get(o.textures[_e]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+_e,Se.__webglTexture,F,fe)}}else if(o!==null&&F!==0){const fe=I.get(o.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,fe.__webglTexture,F)}Z=-1};function ai(o){const S=I.get(o);return(S.__readFormat!==o.format||S.__readType!==o.type)&&(S.__readFormat=o.format,S.__readType=o.type,S.__formatReadable=u.textureFormatReadable(o.format),S.__typeReadable=u.textureTypeReadable(o.type)),S}this.readRenderTargetPixels=function(o,S,F,P,L,de,he,fe=0){if(!(o&&o.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=I.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){r.bindFramebuffer(M.FRAMEBUFFER,_e);try{const Se=o.textures[fe],Pe=Se.format,De=Se.type;o.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+fe);const ge=ai(Se);if(ge.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ge.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=o.width-P&&F>=0&&F<=o.height-L&&M.readPixels(S,F,P,L,se.convert(Pe),se.convert(De),de)}finally{const Se=ne!==null?I.get(ne).__webglFramebuffer:null;r.bindFramebuffer(M.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(o,S,F,P,L,de,he,fe=0){if(!(o&&o.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=I.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(S>=0&&S<=o.width-P&&F>=0&&F<=o.height-L){r.bindFramebuffer(M.FRAMEBUFFER,_e);const Se=o.textures[fe],Pe=Se.format,De=Se.type;o.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+fe);const ge=ai(Se);if(ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,He),M.bufferData(M.PIXEL_PACK_BUFFER,de.byteLength,M.STREAM_READ),M.readPixels(S,F,P,L,se.convert(Pe),se.convert(De),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);const ot=ne!==null?I.get(ne).__webglFramebuffer:null;r.bindFramebuffer(M.FRAMEBUFFER,ot);const Qe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await ra(M,Qe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,He),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,de),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(He),M.deleteSync(Qe),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(o,S=null,F=0){const P=Math.pow(2,-F),L=Math.floor(o.image.width*P),de=Math.floor(o.image.height*P),he=S!==null?S.x:0,fe=S!==null?S.y:0;B.setTexture2D(o,0),M.copyTexSubImage2D(M.TEXTURE_2D,F,0,0,he,fe,L,de),r.unbindTexture()},this.copyTextureToTexture=function(o,S,F=null,P=null,L=0,de=0){let he,fe,_e,Se,Pe,De,ge,He,ot;const Qe=o.isCompressedTexture?o.mipmaps[de]:o.image;if(F!==null)he=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.isBox3?F.max.z-F.min.z:1,Se=F.min.x,Pe=F.min.y,De=F.isBox3?F.min.z:0;else{const rt=Math.pow(2,-L);he=Math.floor(Qe.width*rt),fe=Math.floor(Qe.height*rt),o.isDataArrayTexture?_e=Qe.depth:o.isData3DTexture?_e=Math.floor(Qe.depth*rt):_e=1,Se=0,Pe=0,De=0}P!==null?(ge=P.x,He=P.y,ot=P.z):(ge=0,He=0,ot=0);const Ye=se.convert(S.format),ut=se.convert(S.type);let pe;S.isData3DTexture?(B.setTexture3D(S,0),pe=M.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(B.setTexture2DArray(S,0),pe=M.TEXTURE_2D_ARRAY):(B.setTexture2D(S,0),pe=M.TEXTURE_2D),r.activeTexture(M.TEXTURE0),r.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(M.UNPACK_ALIGNMENT,S.unpackAlignment);const pt=r.getParameter(M.UNPACK_ROW_LENGTH),Oe=r.getParameter(M.UNPACK_IMAGE_HEIGHT),Et=r.getParameter(M.UNPACK_SKIP_PIXELS),At=r.getParameter(M.UNPACK_SKIP_ROWS),yt=r.getParameter(M.UNPACK_SKIP_IMAGES);r.pixelStorei(M.UNPACK_ROW_LENGTH,Qe.width),r.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Qe.height),r.pixelStorei(M.UNPACK_SKIP_PIXELS,Se),r.pixelStorei(M.UNPACK_SKIP_ROWS,Pe),r.pixelStorei(M.UNPACK_SKIP_IMAGES,De);const kt=o.isDataArrayTexture||o.isData3DTexture,Xe=S.isDataArrayTexture||S.isData3DTexture;if(o.isDepthTexture){const rt=I.get(o),Ft=I.get(S),Ze=I.get(rt.__renderTarget),Ot=I.get(Ft.__renderTarget);r.bindFramebuffer(M.READ_FRAMEBUFFER,Ze.__webglFramebuffer),r.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let zt=0;zt<_e;zt++)kt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,I.get(o).__webglTexture,L,De+zt),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,I.get(S).__webglTexture,de,ot+zt)),M.blitFramebuffer(Se,Pe,he,fe,ge,He,he,fe,M.DEPTH_BUFFER_BIT,M.NEAREST);r.bindFramebuffer(M.READ_FRAMEBUFFER,null),r.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(L!==0||o.isRenderTargetTexture||I.has(o)){const rt=I.get(o),Ft=I.get(S);r.bindFramebuffer(M.READ_FRAMEBUFFER,w),r.bindFramebuffer(M.DRAW_FRAMEBUFFER,Y);for(let Ze=0;Ze<_e;Ze++)kt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,rt.__webglTexture,L,De+Ze):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,rt.__webglTexture,L),Xe?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ft.__webglTexture,de,ot+Ze):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ft.__webglTexture,de),L!==0?M.blitFramebuffer(Se,Pe,he,fe,ge,He,he,fe,M.COLOR_BUFFER_BIT,M.NEAREST):Xe?M.copyTexSubImage3D(pe,de,ge,He,ot+Ze,Se,Pe,he,fe):M.copyTexSubImage2D(pe,de,ge,He,Se,Pe,he,fe);r.bindFramebuffer(M.READ_FRAMEBUFFER,null),r.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Xe?o.isDataTexture||o.isData3DTexture?M.texSubImage3D(pe,de,ge,He,ot,he,fe,_e,Ye,ut,Qe.data):S.isCompressedArrayTexture?M.compressedTexSubImage3D(pe,de,ge,He,ot,he,fe,_e,Ye,Qe.data):M.texSubImage3D(pe,de,ge,He,ot,he,fe,_e,Ye,ut,Qe):o.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,de,ge,He,he,fe,Ye,ut,Qe.data):o.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,de,ge,He,Qe.width,Qe.height,Ye,Qe.data):M.texSubImage2D(M.TEXTURE_2D,de,ge,He,he,fe,Ye,ut,Qe);r.pixelStorei(M.UNPACK_ROW_LENGTH,pt),r.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Oe),r.pixelStorei(M.UNPACK_SKIP_PIXELS,Et),r.pixelStorei(M.UNPACK_SKIP_ROWS,At),r.pixelStorei(M.UNPACK_SKIP_IMAGES,yt),de===0&&S.generateMipmaps&&M.generateMipmap(pe),r.unbindTexture()},this.initRenderTarget=function(o){I.get(o).__webglFramebuffer===void 0&&B.setupRenderTarget(o)},this.initTexture=function(o){o.isCubeTexture?B.setTextureCube(o,0):o.isData3DTexture?B.setTexture3D(o,0):o.isDataArrayTexture||o.isCompressedArrayTexture?B.setTexture2DArray(o,0):B.setTexture2D(o,0),r.unbindTexture()},this.resetState=function(){Q=0,K=0,ne=null,r.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}function Td(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),l=new Set(Object.keys(e[0].morphAttributes)),a={},f={},h=e[0].morphTargetsRelative,A=new fn;let T=0;for(let C=0;C<e.length;++C){const b=e[C];let p=0;if(t!==(b.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in b.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(b.attributes[g]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". Make sure all geometries have the same number of attributes."),null;if(h!==b.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in b.morphAttributes){if(!l.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+".  .morphAttributes must be consistent throughout all geometries."),null;f[g]===void 0&&(f[g]=[]),f[g].push(b.morphAttributes[g])}if(n){let g;if(t)g=b.index.count;else if(b.attributes.position!==void 0)g=b.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". The geometry must have either an index or a position attribute"),null;A.addGroup(T,g,C),T+=g}}if(t){let C=0;const b=[];for(let p=0;p<e.length;++p){const g=e[p].index;for(let U=0;U<g.count;++U)b.push(g.getX(U)+C);C+=e[p].attributes.position.count}A.setIndex(b)}for(const C in a){const b=gr(a[C]);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+C+" attribute."),null;A.setAttribute(C,b)}for(const C in f){const b=f[C][0].length;if(b!==0){A.morphAttributes=A.morphAttributes||{},A.morphAttributes[C]=[];for(let p=0;p<b;++p){const g=[];for(let G=0;G<f[C].length;++G)g.push(f[C][G][p]);const U=gr(g);if(!U)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+C+" morphAttribute."),null;A.morphAttributes[C].push(U)}}}return A}function gr(e){let n,t,i,l=-1,a=0;for(let T=0;T<e.length;++T){const C=e[T];if(n===void 0&&(n=C.array.constructor),n!==C.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=C.itemSize),t!==C.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=C.normalized),i!==C.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=C.gpuType),l!==C.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=C.count*t}const f=new n(a),h=new En(f,t,i);let A=0;for(let T=0;T<e.length;++T){const C=e[T];if(C.isInterleavedBufferAttribute){const b=A/t;for(let p=0,g=C.count;p<g;p++)for(let U=0;U<t;U++){const G=C.getComponent(p,U);h.setComponent(p+b,U,G)}}else f.set(C.array,A);A+=C.count*t}return l!==void 0&&(h.gpuType=l),h}function Ad(e,n){if(n===Mo)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(n===qi||n===To){let t=e.getIndex();if(t===null){const a=[],f=e.getAttribute("position");if(f!==void 0){for(let h=0;h<f.count;h++)a.push(h);e.setIndex(a),t=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=t.count-2,l=[];if(n===qi)for(let a=1;a<=i;a++)l.push(t.getX(0)),l.push(t.getX(a)),l.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(l.push(t.getX(a)),l.push(t.getX(a+1)),l.push(t.getX(a+2))):(l.push(t.getX(a+2)),l.push(t.getX(a+1)),l.push(t.getX(a)));return l.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(l),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),e}export{Le as S,Md as W,Td as m,Ad as t};
