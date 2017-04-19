import R from 'ramda'

import builder from './builder'

const Conditions = {
  byQuery: R.curry(() => {
    return true
  })
}

// todo default extractor
function extractValueForCondition(conditionName, values) {
  switch (conditionName) {
    case 'byQuery':
      return values.query
  }
  return values[conditionName]
}

export default builder(Conditions, extractValueForCondition)
