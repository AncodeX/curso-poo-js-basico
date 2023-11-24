class Banda {
    constructor({
        name,
        genres = [],
        members = [],
        bateristCount = 0,
    }) {
        this.name = name;
        this.genres = genres;
        this.members = members;
        this.bateristCount = bateristCount;
    }

    addMembers(member) {
        if (member.instrument == "Bateria") {
            if (this.bateristCount < 1) {
                this.members.push(member);
                this.bateristCount = 1;
            }
        } else {
            this.members.push(member);
        }
    }
}

class Member {
    constructor({
        name,
        instrument,
    }) {
        this.name = name;
        this.instrument = instrument;
    }
}

const data = {
    name: "Los Jacks",
    genres: ["rock", "pop", "post-punk"],
    members: [],
}

const banda = new Banda(data)
banda.addMembers(new Member({ name: "Erik", instrument: "Guitarra" }));
banda.addMembers(new Member({ name: "Paul", instrument: "Bateria" }));
banda.addMembers(new Member({ name: "Pedro", instrument: "Bajo" }));
banda.addMembers(new Member({ name: "Maria", instrument: "Bateria" }));