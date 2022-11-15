function addSuccess(s) {
    const item = document.createElement("li")
    item.textContent = "✅ " + s
    document.getElementById("tests").append(item)
}

const RunTest = {
    test1() {

        try {
            const switchButton = () => document.querySelectorAll("#app button")[0];

            (function appInitialStateShouldShowButtonText(t) {
                const buttonText = switchButton().textContent
                if (buttonText !== t) {
                    throw new Error("expecting button to say 'heroes'")
                }
                addSuccess("appInitialStateShouldShowButtonText")
            })("heroes");


            (function appInitialStateShouldShowTwoEntries() {
                let numberOfListItems = document.querySelectorAll("#app li").length;
                if (numberOfListItems !== 2) {
                    throw new Error("expecting two list entries but was " + numberOfListItems)
                }
                addSuccess("appInitialStateShouldShowTwoEntries")

            })();

            (function removingAnEntryDecreasesListSize() {
                let initialNumberOfListItems = document.querySelectorAll("#app li").length;
                document.querySelectorAll("#app li button")[0].click()
                let newNumberOfListItems = document.querySelectorAll("#app li").length;
                if (newNumberOfListItems !== initialNumberOfListItems - 1) {
                    throw new Error("expecting one less entries")
                }
                addSuccess("removingAnEntryDecreasesListSize")
            })();
        } catch (e) {
            document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
            throw e
        }
    }
}