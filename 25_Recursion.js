let user = {
    name: "Jay",
    address: {
        personal: {
            city: "Almora",
            state: "UK"
        },
        office: {
            city: "Noida",
            state: "UP",
            area: {
                landmark: "Sector 62"
            }
        }
    }
}

let findObj = {};
let magic = (obj, path) => {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            magic(obj[key], path + "_" + key);
        } else {
             findObj[path + "_" + key] = obj[key];
        }
    }
}
magic(user, "user");
console.log(findObj);