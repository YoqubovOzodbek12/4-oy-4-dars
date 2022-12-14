let cars = [
    {
        id: 1,
        name: 'Mercedes',
        years: 2021,
        price: 70000,
        imgLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/22c0235-001-1656486402.jpg?crop=0.949xw:0.711xh;0.0506xw,0.259xh&resize=1200:*",
        type: 'Sport',
    },
    {
        id: 2,
        name: 'Tesla',
        years: 2021,
        price: 80000,
        imgLink: "https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80",
        type: 'Sport',
    },
    {
        id: 3,
        name: 'Lexis',
        years: 2016,
        price: 60000,
        imgLink: "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2021/06/26/08/4735888/120e90f5fc68e3d18419f1f13d17043abbe6db72.jpeg",
        type: 'Suv',
    },
    {
        id: 4,
        name: 'BMW',
        years: 2017,
        price: 80000,
        imgLink: "https://www.topgear.com/sites/default/files/2022/11/P90485000_highRes_bmw-330e-xdrive-tour.jpg",
        type: 'Sport',
    },
    {
        id: 5,
        name: 'Mustang',
        years: 2018,
        price: 90000,
        imgLink: "https://i.gaw.to/content/photos/40/01/400118_2020_Ford_Mustang.jpg",
        type: 'Sport',
    },

    {
        id: 6,
        name: 'Mustang',
        years: 2019,
        price: 90000,
        imgLink: "https://i.gaw.to/content/photos/40/01/400118_2020_Ford_Mustang.jpg",
        type: 'Sport',
    }
]

let yearsYil = document.querySelector('.years');
let marka = document.querySelector('.marka');
let cost = document.querySelector('.cost');
let btn = document.querySelector('.btn')

let box = document.querySelector('.box')


function render(arr) {

    for (let i = 0; i < arr.length; i++) {
        let carsBox = document.createElement('div');
        let carsImg = document.createElement('img');
        let carsTitle = document.createElement('h3');
        let carsPrice = document.createElement('p');
        let carsType = document.createElement('p');
        let carsYears = document.createElement('p');
        // let carsButtom = document.createElement('button');

        carsBox.setAttribute('class', 'carsBox')
        carsImg.setAttribute('class', 'carsImg')
        carsTitle.setAttribute('class', 'carsTitle')
        carsPrice.setAttribute('class', 'carsDesc')
        carsType.setAttribute('class', 'carsDesc')
        carsYears.setAttribute('class', 'carsDesc')

        carsImg.src = arr[i].imgLink
        carsTitle.textContent = arr[i].name
        carsPrice.textContent = arr[i].price
        carsType.textContent = arr[i].type
        carsYears.textContent = arr[i].years

        carsBox.append(carsImg, carsTitle, carsPrice, carsType, carsYears,)

        box.append(carsBox)
    }

}

render(cars)


btn.addEventListener('click', function (e) {
    e.preventDefault();

    const result = []

    box.innerHTML = '';
    cars.map(item => {
        if (item.years == yearsYil.value) {
            result.push(item)
            render(result)
        } else  if (item.name == marka.value) {
            result.push(item)
            render(result)
        } else if(item.price < cost.value ) {
            result.push(item);
            render(result)
        }
    })

    // let filteredCars = cars.filter(item => item.years == yearsYil.value || item.name == marka.value)
})

