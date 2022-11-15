class zeneView {

    #elem;

    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`<div class="kisdiv">
        <h2>${elem.cim}</h2>
        <h4>Előadó(k): </h4> <p>${elem.eloado}</p>
        <h4>Megjelenés éve: ${elem.ev}</h4>
        <h4>Cikkszám: ${elem.id} </h4>
        <td><button id="minusz${elem.id}">-1</button></td>
        </tr></div>`);
        this.tablaElem = szuloElem.children("table:last-child");
    
        //gombok eseménykezelői

        this.sorElem=szuloElem.children("tr:last-child");
        this.minuszElem=$(`#minusz${elem.id}`);

        this.minuszElem.on("click", ()=>{
            this.kattintasTrigger("minuszElem");
        })
    }

    kattintasTrigger(esemenynev){
        const esemeny=new CustomEvent(esemenynev,{detail:this.#elem.id});
        window.dispatchEvent(esemeny);
    }


}

export default zeneView;