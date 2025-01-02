let arr = ["jay", "smith"];

let object = {
    name: "jay",
    city: "almora",
    getIntro: function() { 
        console.log(this.name + " from " + this.city);
    }
}

object.getIntro();