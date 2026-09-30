let imgArray = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52LrRYXu9c-Vb1wadGX94icS18htusmCG80pNExMRgIOStlRgTE8BhqFC&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5483pVl77V-3lQtwRlucUtZXyZW5ij24dx6OHzluWouPOB-o7rjZdwFw&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrUYKN8DolXLy9D6_Wpo1OiIba4EmUOeHhPv1yvJloLfkJ5ts6795P2lT&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEhWhFzmWqUVgzeiPN3I9qhJ1s9wKewnBXH4cMzZ2k6sWx5YrHm7-GG7h&s=10',
    'https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/3:2/w_2560%2Cc_limit/Gear-Photos-597589287.jpg',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60',
    'https://plus.unsplash.com/premium_photo-1671805322278-13793483b464?w=600&auto=format&fit=crop&q=60',
    'https://plus.unsplash.com/premium_photo-1720706435477-bb1d79c2224c?q=80&w=687&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60'
]

let display = document.getElementById('img-section')
let next = document.getElementById('next')
let preview = document.getElementById('preview')
let count = 0
let setImage = imgArray[0]
display.src = setImage
preview.style.display = 'none'

function imageChanger(value) {

    if (value === 'previous') {
        count -= 1
        display.src = imgArray[count]
        if (count === 0) {
            preview.style.display = 'none'
        }
        else if (count < imgArray.length - 1) {
            preview.style.display = 'block'
            next.style.display = 'block'
        }
    }

    else if (value === 'next') {
        count += 1
        display.src = imgArray[count]
        if (count === imgArray.length - 1) {
            next.style.display = 'none'
        }
        else if (count < imgArray.length - 1) {
            next.style.display = 'block'
            preview.style.display = 'block'
        }
    }
}