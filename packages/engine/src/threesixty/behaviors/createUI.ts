import { ui } from '@xr3ngine/engine/src/threesixty/classes/UI';
import { isClient } from '../../common/functions/isClient';
import { Engine } from '../../ecs/classes/Engine';
import { addComponent, getComponent, getMutableComponent } from '../../ecs/functions/EntityFunctions';
import { ScaleComponent } from '../../transform/components/ScaleComponent';
// import { Object3DComponent } from '../components/Object3DComponent';
// import { addObject3DComponent } from './addObject3DComponent';

export default function createUI(): void {
  Engine.scene.add(ui);
}
