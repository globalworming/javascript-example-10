
const state = {
    heroes: ["lightning", "thunder"],
    villains: ["fire", "brimstone"],
    tab: "heroes"
}

const app = {
    render() {
        let e = document.getElementById("app");
        [...e.children].forEach(child => child.remove())
        const tabSwitch = document.createElement("button")
        tabSwitch.textContent = state.tab
        tabSwitch.onclick = function (ev) {
            state.tab = state.tab === "heroes" ? "villains" : "heroes"
            app.render()
        }
        const list = document.createElement("ol");
        let persons = state.tab === "heroes" ? state.heroes : state.villains;
        persons.forEach(s => {
            const listItem = document.createElement("li")
            listItem.textContent = s
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "❌"
            deleteButton.onclick = () => {
                delete persons[persons.indexOf(s)]
                app.render()
            }
            listItem.append(deleteButton)
            list.append(listItem)
        })
        e.append(tabSwitch, list)
    }
}

app.render()
