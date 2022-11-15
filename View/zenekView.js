import zeneView from "./zeneView.js";

class zenekView {
    
    constructor(tomb, szuloElem) {
        console.log("zenek view");
        szuloElem.html(`<header>Zenék<br><br></header><div class="foDiv"></div>`);
        this.divElem = szuloElem.children("div:last-child");
console.log(tomb)
        tomb.forEach(zene => {
            console.log(zene)
            const zeneim = new zeneView(zene,this.divElem);
        });

    }
}

export default zenekView;