import { GiftsController } from "./Controllers/GiftsController.js";
import { SandboxController } from "./Controllers/SandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();


  giftsController = new GiftsController()

  sandboxService = new SandboxController()
  

}

window["app"] = new App();
