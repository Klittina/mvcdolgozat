import zenekView from "../View/zenekView.js";
import ZeneModel from "../Model/ZeneModel.js";

class ZeneController {
    constructor() {
        console.log("KonyvController");
        const zenemodel = new ZeneModel();

        zenemodel.adatBe("../adat.json", this.zeneAdatok);


        $(window).on("minuszElem",(event)=>{
            zenemodel.adahelp(event.detail);

        })
    }
    zeneAdatok(tomb) {
        const szuloelem=$("main");
        console.log(tomb)
        new zenekView(tomb,szuloelem);

    }

}

export default ZeneController;