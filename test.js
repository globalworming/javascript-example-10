const RunTest = {
    test1() {
        setTimeout(() => {
            try {
                if (!document.getElementById("exception").textContent.startsWith("Error")) {
                    document.getElementsByClassName("error")[0].textContent = "expected error to be thrown"
                    return
                }
                document.getElementById("next").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)

    },
    test2() {
        setTimeout(() => {
            try {
                let error = document.getElementById("exception").textContent;
                if (!error.startsWith("ServerError")) {
                    document.getElementsByClassName("error")[0].textContent = "expected ServerError to be thrown but got " + (error || "nothing")
                    return
                }
                document.getElementById("next").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)

    },
    test3() {
        setTimeout(() => {
            document.getElementById("next").hidden = false
        }, 2000)
    },
}

const runCatching = (f) => {
    try {
        f()
    } catch (e) {
        document.getElementById("exception").textContent = e.name
    }
}

const runCatchingAsync = (f) => {
        f().catch(e=> {
            document.getElementById("exception").textContent = e.name
        })
}

