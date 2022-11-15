class ZeneModel {
    #zenekTomb = [];

    constructor() {
    }

    adahelp(adat){
        for (const zene of this.#zenekTomb) {
            if (adat == zene.id){
                zene.darab=zene.darab-1;
                console.log(zene.darab)
            }

        }
        
    }


    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#zenekTomb = data.zenek;
                console.log(this.#zenekTomb);
                myCallBack(this.#zenekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default ZeneModel;