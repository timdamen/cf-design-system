export default defineAppConfig({
  myLayer: {
    name: 'Hello from cf-design-system'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
