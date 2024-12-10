// src/shim.d.ts or simply shim.d.ts
// declare module "@swarmakit/vue" {
//   const content: any;
//   export default content;
// }

// src/shims-vue.d.ts
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
