
let ul = document.querySelector("ul")
let input = document.querySelector("input")
let list = []



fetch("https://randomuser.me/api?results=50")
    .then((response) => {
        return response.json()
    })
    .then((obj) => {
        obj.results.forEach(element => {
            list.push(element)

        });
        list.forEach((item) => {
            ul.innerHTML += `<li><img src="${item.picture.medium}"></li><span><h3>${item.name.first}  ${item.name.last}</h3><p>${item.location.city}</p></span>`
        })

    })
console.log(list)


input.addEventListener("keyup", () => {
    ul.innerHTML=""
    let newLIst = list.filter((user) => {
        if (user.name.last.includes(input.value))
            return user



    }).forEach((user) => {
        ul.innerHTML += `<li><img src="${user.picture.medium}"></li><span><h3>${user.name.first}  ${user.name.last}</h3><p>${user.location.city}</p></span>`
        console.log(user);
    })
})