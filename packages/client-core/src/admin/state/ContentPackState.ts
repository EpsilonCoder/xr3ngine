import { ContentPackActionType } from './ContentPackActions'
import _ from 'lodash'
import { createState, DevTools, useState, none, Downgraded } from '@hookstate/core'
import { AdminContentPack } from '@xrengine/common/src/interfaces/AdminContentPack'
import { store } from '../../store'

const state = createState({
  contentPacks: [] as Array<AdminContentPack>,
  updateNeeded: true
})

store.receptors.push((action: ContentPackActionType): any => {
  state.batch((s) => {
    switch (action.type) {
      case 'LOADED_CONTENT_PACKS':
        return s.merge({ updateNeeded: false, contentPacks: action.contentPacks })
      case 'CONTENT_PACK_CREATED':
        return s.merge({ updateNeeded: true })
      case 'CONTENT_PACK_PATCHED':
        return s.merge({ updateNeeded: true })
    }
  }, action.type)
})

export const accessContentPackState = () => state

export const useContentPackState = () => useState(state) as any as typeof state
