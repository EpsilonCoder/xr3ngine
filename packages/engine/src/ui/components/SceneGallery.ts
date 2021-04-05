import ThreeMeshUI, { Block, Keyboard } from "../../assets/three-mesh-ui";
import { Group, Object3D, Color, TextureLoader } from "three";
import SceneOverview from "../components/SceneOverview";  
import SceneButton from "../components/SceneButton";
import ScenePanel from "../components/ScenePanel";
import image from "../../assets/vusr/1.jpg";

class SceneGallery extends Object3D {
  constructor(){
    super();

    this.init();
  }

  init(){
    let ov = new SceneOverview("Scene Title", "Scene Description\nSecode line of description", image);
    this.add(ov);

    for(var i= 0;i<3;i++){
      for(var j=0;j<2;j++){

        var x = 1.1*i-1;
        var y = j*0.6;

        let panel = new ScenePanel("Scene Title", "Scene Description", image);
        panel.position.set(x, y, 0);
      
        this.add(panel);
      }
    }

    let button1 = new SceneButton('Marketplace', 0);
    let button2 = new SceneButton('Library', 1);

    this.add(button1);
    this.add(button2);
}
}

export default SceneGallery;