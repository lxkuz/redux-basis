import R from 'ramda'
import type { ActType, RequestResultType } from 'flow/types'

type FiltersType = {
  by_organization?: string,
  by_tag?: string
}

type PropsType = {
  actsResult: RequestResultType<Array<ActType>>,
  favorite?: boolean,
  filter?: FiltersType
}

export const defaultComparator = (a: ActType, b: ActType) => b.created_at - a.created_at

export const savedAtComparator = (a: ActType, b: ActType) => {
  return (b.saved_at || 0) - (a.saved_at || 0)
}

export const buildComparator = (props: PropsType) => {
  if (props.favorite) return savedAtComparator
  return defaultComparator
}


export const buildConditions = (props: PropsType) => {
  // const {by_tag, by_organization } = props.filter
  // TODO implement via jexl
  props
  return undefined
}

export const buildFilters = (props: PropsType) => {
  const { favorite } = props
  const res = []

  const intArray = val => val.split(',').map(o => parseInt(o))

  if (favorite) {
    const favoriteFilter = R.filter(R.propEq('saved', true))
    res.push(favoriteFilter)
  }
  // eslint-disable-next-line camelcase
  if (props.filter && props.filter.by_tag) {
    const byTag = props.filter.by_tag
    const byTagFilter = R.filter((act) => {
      const actTagIds = act.tags.map(tag => tag.id)
      const filterTagIds = intArray(byTag)
      const intersection = R.intersection(actTagIds, filterTagIds)
      return intersection.length > 0
    })
    res.push(byTagFilter)
  }
  // eslint-disable-next-line camelcase
  if (props.filter && props.filter.by_organization) {
    const byOrganization = props.filter.by_organization
    const byTorganizationFilter = R.filter((act) => {
      const filterOrganizationIds = intArray(byOrganization)
      const actOrganizationId = act.organization_id
      return filterOrganizationIds.indexOf(actOrganizationId) > -1
    })
    res.push(byTorganizationFilter)
  }
  return res
}


export const applyFilters = (filters: Array<Object>, data: Array<ActType> = []) => {
  if(filters.length > 0) {
    return R.pipe(...filters)(data)
  } else {
    return data
  }
}
