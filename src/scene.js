import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
export function createScene(host, getFinish) {
 const scene=new T.Scene(), camera=new T.PerspectiveCamera(34,1,.1,100);
 camera.position.set(4.6,3.1,5.7);camera.lookAt(0,.7,0);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)); renderer.shadowMap.enabled=true; renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping; host.appendChild(renderer.domElement);
 scene.add(new T.HemisphereLight(0xfff4d7,0x6b7258,3));const light=new T.DirectionalLight(0xffefce,5);light.position.set(3,7,4);light.castShadow=true;light.shadow.mapSize.set(1024,1024);light.shadow.camera.left=-5;light.shadow.camera.right=5;light.shadow.camera.top=5;light.shadow.camera.bottom=-5;scene.add(light);
 const group=new T.Group();scene.add(group);
 const grain=document.createElement('canvas');grain.width=256;grain.height=256;const ctx=grain.getContext('2d');ctx.fillStyle='#a68a60';ctx.fillRect(0,0,256,256);for(let i=0;i<450;i++){const x=i*.7;ctx.strokeStyle=`rgba(45,25,12,${.04+(i%8)*.008})`;ctx.beginPath();ctx.moveTo(x,0);for(let y=0;y<260;y+=8)ctx.lineTo(x+Math.sin(y*.025+i)*4,y);ctx.stroke();}const texture=new T.CanvasTexture(grain);texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.repeat.set(2,2);
 const wood=new T.MeshStandardMaterial({color:getFinish(),map:texture,roughness:.47});const fabric=new T.MeshStandardMaterial({color:0xe8dcc3,roughness:1});const black=new T.MeshStandardMaterial({color:0x272b22,roughness:.7});
 function box(w,h,d,x,y,z,mat=wood,rz=0){let m=new T.Mesh(new RoundedBoxGeometry(w,h,d,5,Math.min(w,h,d)*.32),mat);m.position.set(x,y,z);m.rotation.z=rz;m.castShadow=m.receiveShadow=true;group.add(m);return m;}
 // Original illustrative lounge chair: bent solid frame, upholstered seat and back.
 box(1.6,.17,1.65,0,.72,0);let seat=new T.Mesh(new T.SphereGeometry(1,48,24),fabric);seat.scale.set(.81,.19,.83);seat.position.set(0,.91,.03);seat.castShadow=true;group.add(seat);
 let back=new T.Mesh(new T.SphereGeometry(1,48,24),fabric);back.scale.set(.79,.69,.18);back.position.set(0,1.53,-.61);back.rotation.x=-.17;back.castShadow=true;group.add(back);
 for(const x of [-.95,.95]){box(.14,.86,.15,x,.42,.56,wood,x>0?-.1:.1);box(.14,1.48,.15,x,.77,-.61,wood,x>0?.1:-.1);box(.18,.14,1.85,x,1.28,-.03);box(.13,.55,.14,x,1.05,.64);}
 box(1.65,.12,.12,0,1.8,-.74);box(.12,.12,1.7,-.89,.3,0);box(.12,.12,1.7,.89,.3,0);
 // Sculptural side table.
 const table=new T.Group();let top=new T.Mesh(new T.CylinderGeometry(.56,.56,.12,64),wood);top.position.y=.85;top.castShadow=true;table.add(top);let base=new T.Mesh(new T.CylinderGeometry(.18,.24,.8,40),wood);base.position.y=.4;table.add(base);table.position.set(1.9,0,.05);group.add(table);
 let vase=new T.Mesh(new T.LatheGeometry([new T.Vector2(0,0),new T.Vector2(.13,.01),new T.Vector2(.17,.2),new T.Vector2(.08,.33),new T.Vector2(.07,.4)],32),black);vase.position.set(1.9,.92,.05);group.add(vase);
 const floor=new T.Mesh(new T.CircleGeometry(3.9,80),new T.ShadowMaterial({opacity:.15}));floor.rotation.x=-Math.PI/2;floor.position.y=-.02;floor.receiveShadow=true;scene.add(floor);
 const ro=new ResizeObserver(()=>{const {width,height}=host.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();});ro.observe(host);
 let frame=0,drag=false,last=0,manual=0,visible=true;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const down=e=>{drag=true;last=e.clientX;host.setPointerCapture(e.pointerId);};const move=e=>{if(drag){manual+=(e.clientX-last)*.008;last=e.clientX;}};const up=()=>drag=false;
 host.addEventListener('pointerdown',down);host.addEventListener('pointermove',move);host.addEventListener('pointerup',up);host.addEventListener('pointercancel',up);
 const io=new IntersectionObserver(e=>visible=e[0].isIntersecting);io.observe(host);
 function animate(){frame=requestAnimationFrame(animate);if(!visible||document.hidden)return;wood.color.set(getFinish());const target=manual+(reduced?0:window.scrollY*.0018)-.18;group.rotation.y+=(target-group.rotation.y)*.07;renderer.render(scene,camera);}animate();
 return ()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();host.removeEventListener('pointerdown',down);host.removeEventListener('pointermove',move);host.removeEventListener('pointerup',up);host.removeEventListener('pointercancel',up);scene.traverse(o=>{o.geometry?.dispose();if(o.material){[].concat(o.material).forEach(m=>m.dispose());}});texture.dispose();renderer.dispose();renderer.domElement.remove();};
}

