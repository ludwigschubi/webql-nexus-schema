import { extendType, objectType } from "@webql-nexus/schema"

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("user", {
      type: "User",
      resolve() {
        return {
          active: true,
          email: "newton@prisma.io",
        }
      },
    })
  },
})

export const User = objectType({
  name: "User",
  definition(t) {
    t.boolean("active")
    t.string("email")
  },
})
