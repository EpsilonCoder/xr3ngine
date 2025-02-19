import { MapStateUnwrapped, FeatureKey, SupportedFeature, TaskStatus, TileKey, VectorTile } from '../types'
import { SUPPORTED_LAYERS, SUPPORTED_GEOMETRIES, TILE_ZOOM } from '../constants'
import zipIndexes from '../zipIndexes'
import getFeaturesFromVectorTileLayer from '../functions/getFeaturesFromVectorTileLayer'

export const name = 'extract tile features'
export const isAsyncPhase = false
export const isCachingPhase = true

export function getTaskKeys(state: MapStateUnwrapped) {
  console.log('tileCache size', state.tileCache.map.map.size)
  return state.tileCache.keys()
}

export function getTaskStatus(state: MapStateUnwrapped, key: TileKey) {
  return state.extractTilesTasks.get(key)
}
export function setTaskStatus(state: MapStateUnwrapped, key: TileKey, status: TaskStatus) {
  return state.extractTilesTasks.set(key, status)
}

export function execTask(state: MapStateUnwrapped, key: TileKey) {
  const vectorTile = state.tileCache.get(key)
  const [x, y] = key
  if (vectorTile) {
    for (const layerName of SUPPORTED_LAYERS) {
      const layer = vectorTile.layers[layerName]

      if (!layer) continue

      for (const [index, feature] of zipIndexes(
        getFeaturesFromVectorTileLayer(layerName, vectorTile, x, y, TILE_ZOOM)
      )) {
        if (SUPPORTED_GEOMETRIES.includes(feature.geometry.type)) {
          const featureKey = [layerName, x, y, `${index}`] as FeatureKey
          state.featureCache.set(featureKey, feature as SupportedFeature)
          state.featureMeta.set(featureKey, { tileKey: key })
          state.tileMeta.get(key).cachedFeatureKeys.add(featureKey)
        }
      }
    }
  }
}

export function cleanup(state: MapStateUnwrapped) {
  for (const [featureKey] of state.featureCache.evictLeastRecentlyUsedItems()) {
    const { tileKey } = state.featureMeta.get(featureKey)
    const { cachedFeatureKeys } = state.tileMeta.get(tileKey)
    cachedFeatureKeys.delete(featureKey)
    if (cachedFeatureKeys.size === 0) {
      state.extractTilesTasks.delete(tileKey)
      state.tileCache.delete(tileKey)
      state.tileMeta.delete(tileKey)
    }
  }
}

export function reset(state: MapStateUnwrapped) {
  state.extractTilesTasks.clear()
  state.tileMeta.clear()
  state.featureCache.clear()
  state.featureMeta.clear()
}
