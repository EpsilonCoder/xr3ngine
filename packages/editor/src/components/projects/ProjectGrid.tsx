import React from 'react'
import styled from 'styled-components'
import ProjectGridItem from './ProjectGridItem'
import { FlexRow } from '../layout/Flex'
import StringInput from '../inputs/StringInput'
import { useHistory } from 'react-router-dom'
import { Plus } from '@styled-icons/fa-solid/Plus'
import { useTranslation } from 'react-i18next'

/**
 *
 *@author Robert Long
 */
const ProjectGridItemContainer = (styled as any).div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  height: 220px;
  border-radius: 6px;
  text-decoration: none;
  background-color: ${(props) => props.theme.toolbar};
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;

  &:hover {
    color: ${(props) => props.theme.text};
    cursor: pointer;
    border-color: ${(props) => props.theme.selected};
  }

  svg {
    width: 3em;
    height: 3em;
    margin-bottom: 20px;
  }
`

/**
 *
 * @author Robert Long
 * @param {string} path
 * @param {string} label
 * @returns
 */
export function NewProjectGridItem({ path, label }: { path: string; label: string }) {
  const history = useHistory()

  const routeTo = (route: string) => () => {
    history.push(route)
  }
  return (
    <ProjectGridItemContainer as="button" onClick={routeTo(path)}>
      <Plus />
      <h3>{label}</h3>
    </ProjectGridItemContainer>
  )
}

/**
 *
 * @author Robert Long
 * @returns
 */
export function LoadingProjectGridItem() {
  const { t } = useTranslation()

  return (
    <ProjectGridItemContainer>
      <h3>{t('editor:projects.grid.loading')}</h3>
    </ProjectGridItemContainer>
  )
}

NewProjectGridItem.defaultProps = {
  label: 'New Project'
}

/**
 *
 * @author Robert Long
 */
const StyledProjectGrid = (styled as any).div`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`

interface ProjectGridProp {
  projects?: any
  newProjectPath?: any
  newProjectLabel?: any
  contextMenuId?: any
  loading?: boolean
  onSelectProject?: Function
}

/**
 *
 * @author Robert Long
 * @param {any} projects
 * @param {any} newProjectPath
 * @param {any} newProjectLabel
 * @param {any} contextMenuId
 * @param {any} loading
 * @returns
 */
export function ProjectGrid({ projects, newProjectPath, newProjectLabel, contextMenuId, loading }: ProjectGridProp) {
  return (
    <StyledProjectGrid>
      {newProjectPath && !loading && <NewProjectGridItem path={newProjectPath} label={newProjectLabel} />}
      {projects.map((project) => (
        <ProjectGridItem
          key={project.project_id || project.id || project.name}
          project={project}
          contextMenuId={contextMenuId}
        />
      ))}
      {loading && <LoadingProjectGridItem />}
    </StyledProjectGrid>
  )
}

/**
 *
 * @author Robert Long
 */
export const ProjectGridContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.panel2};
  border-radius: 3px;
`

/**
 *
 * @author Robert Long
 */
export const ProjectGridContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`

/**
 *
 * @author Robert Long
 */
export const ProjectGridHeader = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.toolbar2};
  border-radius: 3px 3px 0px 0px;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

/**
 *
 * @author Robert Long
 */
export const Filter = styled.a<{ active?: boolean }>`
  font-size: 1.25em;
  cursor: pointer;
  color: ${(props) => (props.active ? props.theme.blue : props.theme.text)};
`

/**
 *
 * @author Robert Long
 */
export const Separator = styled.div`
  height: 48px;
  width: 1px;
  background-color: ${(props) => props.theme.border};
`

/**
 *
 * @author Robert Long
 */
export const ProjectGridHeaderRow = styled(FlexRow)`
  align-items: center;

  & > * {
    margin: 0 10px;
  }
`

/**
 *
 * @author Robert Long
 */
export const SearchInput = styled<any>(StringInput)`
  width: auto;
  min-width: 200px;
  height: 28px;
`

/**
 *
 * @author Robert Long
 */
export const CenteredMessage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

/**
 *
 * @author Robert Long
 */
export const ErrorMessage = styled(CenteredMessage)`
  color: ${(props) => props.theme.red};
`
