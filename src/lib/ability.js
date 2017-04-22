export const AgentRules = {
  tickets: {
    update: true,
    read: true
  },
  reports: {
    create: true,
    read: true
  },
  users: {
    read: true
  }
}

export const CustomerRules = {
  tickets: {
    create: true,
    read: true
  }
}

export const AdminRules = {
  tickets: true,
  users: true,
  ticket_kinds: true,
  reports: true
}

export const AbilityRules = {
  customer: CustomerRules,
  agent: AgentRules,
  admin: AdminRules
}

export const can = (user, action, resource) => {
  if(!user) return false
  const rules = AbilityRules[user.role][resource]
  if (typeof rules == 'object') return !!rules[action]
  return !!rules
}
