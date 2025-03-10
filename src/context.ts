import { createContext } from 'react'
import { YogaNode } from 'yoga-layout-prebuilt'
import { Group } from 'three'
import { R3FlexProps } from './props'

export interface SharedFlexContext {
  scaleFactor: number
  requestReflow(): void
  registerBox(node: YogaNode, group: Group, flexProps: R3FlexProps, centerAnchor?: boolean): boolean
  unregisterBox(node: YogaNode): void
  notInitialized?: boolean
}

const initialSharedFlexContext: SharedFlexContext = {
  scaleFactor: 100,
  requestReflow() {
    console.warn('Flex not initialized! Please report')
  },
  registerBox() {
    console.warn('Flex not initialized! Please report')
    return false
  },
  unregisterBox() {
    console.warn('Flex not initialized! Please report')
  },
  notInitialized: true,
}

export const flexContext = createContext<SharedFlexContext>(initialSharedFlexContext)

export interface SharedBoxContext {
  node: YogaNode | null
  size: [number, number]
  centerAnchor?: boolean
  notInitialized?: boolean
}

const initialSharedBoxContext: SharedBoxContext = {
  node: null,
  size: [0, 0],
  notInitialized: true,
}

export const boxContext = createContext<SharedBoxContext>(initialSharedBoxContext)
