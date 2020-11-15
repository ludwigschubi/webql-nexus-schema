/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { core } from 'webql-nexus-schema'
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    title(...args: any): void
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    title(options: { escape: boolean }): void
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    body: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostSearchInput: {
    // input type
    body?: string | null // String
    title?: string | null // String
  }
}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Mutation: {}
  OfI: {
    // root type
    hello?: string | null // String
  }
  OfI2: {
    // root type
    hello?: string | null // String
  }
  Post: {
    // root type
    body?: string | null // String
    title?: string | null // String
  }
  Query: {}
  Subscription: {}
  User: { firstName: string; lastName: string }
  I: NexusGenRootTypes['OfI'] | NexusGenRootTypes['OfI2']
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostSearchInput: NexusGenInputs['PostSearchInput']
  String: NexusGenScalars['String']
  Int: NexusGenScalars['Int']
  Float: NexusGenScalars['Float']
  Boolean: NexusGenScalars['Boolean']
  ID: NexusGenScalars['ID']
}

export interface NexusGenFieldTypes {
  Mutation: {
    // field return type
    createUser: NexusGenRootTypes['User'] | null // User
  }
  OfI: {
    // field return type
    hello: string | null // String
  }
  OfI2: {
    // field return type
    hello: string | null // String
  }
  Post: {
    // field return type
    body: string | null // String
    title: string | null // String
  }
  Query: {
    // field return type
    foo: string | null // String
    searchPosts: Array<NexusGenRootTypes['Post'] | null> | null // [Post]
    user: NexusGenRootTypes['User'] | null // User
  }
  Subscription: {
    // field return type
    someBoolean: boolean | null // Boolean
    someField: number | null // Int
    someFields: Array<number | null> | null // [Int]
    someFloat: number | null // Float
    someID: string | null // ID
    someInt: number | null // Int
    someInts: Array<number | null> | null // [Int]
    someString: string | null // String
  }
  User: {
    // field return type
    firstName: string | null // String
    lastName: string | null // String
  }
  I: {
    // field return type
    hello: string | null // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: {
    // field return type name
    createUser: 'User'
  }
  OfI: {
    // field return type name
    hello: 'String'
  }
  OfI2: {
    // field return type name
    hello: 'String'
  }
  Post: {
    // field return type name
    body: 'String'
    title: 'String'
  }
  Query: {
    // field return type name
    foo: 'String'
    searchPosts: 'Post'
    user: 'User'
  }
  Subscription: {
    // field return type name
    someBoolean: 'Boolean'
    someField: 'Int'
    someFields: 'Int'
    someFloat: 'Float'
    someID: 'ID'
    someInt: 'Int'
    someInts: 'Int'
    someString: 'String'
  }
  User: {
    // field return type name
    firstName: 'String'
    lastName: 'String'
  }
  I: {
    // field return type name
    hello: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: {
      // args
      firstName?: string | null // String
      lastName?: string | null // String
    }
  }
  Query: {
    searchPosts: {
      // args
      input?: NexusGenInputs['PostSearchInput'] | null // PostSearchInput
    }
    user: {
      // args
      id?: string | null // ID
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  I: 'OfI' | 'OfI2'
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Mutation' | 'OfI' | 'OfI2' | 'Post' | 'Query' | 'Subscription' | 'User'

export type NexusGenInputNames = 'PostSearchInput'

export type NexusGenEnumNames = never

export type NexusGenInterfaceNames = 'I'

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String'

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = 'I'

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: true
    __typename: false
    isTypeOf: false
  }
}

export interface NexusGenTypes {
  context: any
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  inheritedFields: NexusGenInheritedFields
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
}
