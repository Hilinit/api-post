let name = document.getElementById('name')
let lastName = document.getElementById('lastName')
let userName = document.getElementById('userName')
let motto = document.getElementById('motto')

let image = ""
function changeAvatar(img){image = img}

function submitData() {
    const nameValue = name.value
    const lastValue = lastName.value
    const userValue = userName.value
    const mottoValue = motto.value

    const data = {
        name: nameValue,
        image: image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        lastName: lastValue || "anonim",
        userName: userValue || "anonim",
        motto: mottoValue || "anonim"
    }

    fetch("https://69b99a1ce69653ffe6a8318b.mockapi.io/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(() => {
            allDatas()

            // formu növbəti daxiletmə üçün sıfırlasin
            name.value = ""
            lastName.value = ""
            userName.value = ""
            motto.value = ""
            image = ""
        })
}
let allData = []

function allDatas() {
    fetch('https://69b99a1ce69653ffe6a8318b.mockapi.io/users')
        .then(res => res.json())
        .then(res => {
            allData = res
            getData()
        })
}
allDatas()

let cards = document.getElementById("cards")

function getData() {
    cards.innerHTML = ""
    allData.map(item => {
        cards.innerHTML += `<div class="bg-green-900 px-6 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mt-4 mx-2">
        <div class="flex flex-col items-center">
          <img src='${item.image}' class="w-60 h-60 rounded-full" />
          <div class="mt-4 text-center">
            <h3 class="text-xl text-white font-semibold">${item.name} ${item.lastName}</h3>
            <p class="text-slate-300  mt-2 leading-relaxed">@${item.userName}</p>
            <p class="text-slate-300  mt-2 leading-relaxed">${item.motto}</p>
          </div>
        </div>
      </div>`
    })
}


