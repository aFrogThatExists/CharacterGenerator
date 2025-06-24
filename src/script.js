let changeable = Array(7);
changeable.fill(true)

function LockGenerator(index) {
    changeable[index] = !changeable[index]
    if (changeable[index] === true) {
        document.getElementById(ids[index]).parentElement.parentElement.className =
            document.getElementById(ids[index]).parentElement.parentElement.className.replaceAll("border-black", "border-transparent")
    } else {
        document.getElementById(ids[index]).parentElement.parentElement.className =
            document.getElementById(ids[index]).parentElement.parentElement.className.replaceAll("border-transparent", "border-black")
    }
    console.log(index, changeable[index])

}

function Spin() {
    for (let i = 0; i < changeable.length; i++) {
        if (changeable[i]) {
            setElementContent(ids[i], generators[i]())
        }
    }
}
Spin()