import ThreeMeshUI from "three-mesh-ui";

import {
    BackSide,
    BoxBufferGeometry,
    CubeCamera,
    CubeTexture,
    Mesh,
    Object3D,
    Scene,
    ShaderMaterial,
    UniformsLib,
    UniformsUtils,
    Vector3,
    WebGLCubeRenderTarget,
    WebGLRenderer
  } from "three";

export class UI extends Object3D {
    constructor() {
        // const container = new ThreeMeshUI.Block({
        //     width: 1.2,
        //     height: 0.5,
        //     padding: 0.05,
        //     justifyContent: 'center',
        //     alignContent: 'left',
        //     fontFamily: 'https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.json',
        //     fontTexture: 'https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.png'
        // });
    
        // container.position.set( 0, 0, 0 );
        // container.rotation.x = -0.3;
        // scene.add( container );
    
        // container.add(    
        //     new ThreeMeshUI.Text({
        //         content: "This library supports line-break-friendly-characters,",
        //         fontSize: 0.055
        //     }),
    
        //     new ThreeMeshUI.Text({
        //         content: " As well as multi-font-size lines with consistent vertical spacing.",
        //         fontSize: 0.08
        //     })
        // );

        // this.add(container);
    }
}