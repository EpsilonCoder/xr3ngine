import { Component } from "../../ecs/classes/Component";
import { Entity } from '../../ecs/classes/Entity';
import { Network } from '../../networking/classes/Network';
import { GameManagerSystem } from '../../game/systems/GameManagerSystem';
import { addComponent, getComponent, getMutableComponent, hasComponent, removeComponent } from '../../ecs/functions/EntityFunctions';

import { Game } from "../components/Game";
import { GameObject } from "../components/GameObject";
import { GamePlayer } from "../components/GamePlayer";
/**
 * @author HydraFire <github.com/HydraFire>
 */
export const getHisGameEntity = (name: string): Entity => {
  return GameManagerSystem.createdGames.find(entity => getComponent(entity, Game).name === name);
};

export const getHisEntity = (game: Game, role: string, uuid: string): Entity => {
  return (game.gameObjects[role] || game.gamePlayers[role]).find(entity => {
    const gameObject = hasComponent(entity, GameObject) ? getComponent(entity, GameObject): getComponent(entity, GamePlayer);
    return gameObject.uuid === uuid;
  })
};

export const getRole = (entity: Entity) => {
  return hasComponent(entity, GameObject) ? getComponent(entity, GameObject).role : getComponent(entity, GamePlayer).role;
};
export const getGame = (entity: Entity): Game => {
  return hasComponent(entity, GameObject) ? getComponent(entity, GameObject).game as Game : getComponent(entity, GamePlayer).game as Game;
};
export const getUuid = (entity: Entity) => {
  return hasComponent(entity, GameObject) ? getComponent(entity, GameObject).uuid : getComponent(entity, GamePlayer).uuid;
};