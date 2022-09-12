import * as components from "@/components";
import type { App } from "vue";

function install(app: App) {
  for (const component in components) {
    app.component(component, (components as never)[component]);
  }
}
export default { install };
