// @flow

import R from 'ramda'

function validateConditionName(name: string, ConditionsKeys: [string]) {
  // https://www.youtube.com/watch?v=Oqa9tKarkNA
  if (!ConditionsKeys.includes(name)) throw `Unacceptable condition. UNACCEPTABLE!! NAME=${name}`
}

type ConditionsType = { [key: string]: () => boolean }
type ValueExtractorType = (name: string, values: {[key: string]: any}) => any

export default function buildFilter(conditionsArg: ConditionsType, extractValueForCondition: ValueExtractorType) {
  const ConditionsKeys = R.keys(conditionsArg)

  function buildFilterWithConditions(conditions: ?string | [string] = null) {

    if (typeof conditions === 'string') {
      const condition: string = conditions
      validateConditionName(condition, ConditionsKeys)
      const filterTemplate = R.curry((_method, value, collection) => {
        return R[_method](conditionsArg[condition](value), collection)
      })
      const filter = filterTemplate('filter')
      filter.test = filterTemplate('any')
      return filter

    } else if (Array.isArray(conditions) || conditions === null) {
      (conditions || []).map(x => validateConditionName(x, ConditionsKeys))
      const _conditions = conditions || ConditionsKeys
      const filterTemplate = R.curry((_method, values, collection) => {
        const activeConditions = _conditions.map(conditionName => (
          conditionsArg[conditionName](extractValueForCondition(conditionName, values))
        ))
        return R[_method](R.allPass(activeConditions), collection)
      })
      const filter = filterTemplate('filter')
      filter.test = filterTemplate('any')
      return filter

    }
    throw `Bad argument. Argument=conditions Value=${String(conditions)}`
  }

  const fullFilter = buildFilterWithConditions()
  fullFilter.use = buildFilterWithConditions
  return fullFilter
}

//Example:
//  filter({byQuery: '123', accountableId: 3}, requests);
//  filter.use(['byQuery'])({byQuery: '123'}, requests)
//  filter.use('byQuery')('123', requests)

// test: return bool
//  is any results for filter values
//
//  filter.test({byQuery: '123', accountableId: 3}, requests);
//  filter.use(['byQuery']).test({byQuery: '123'}, requests)
//  filter.use('byQuery').test('123', requests)
