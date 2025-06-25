async function pictureOfTheDay(){

    try{
        const apiKey = "w5vy83dfxyqTwuWvTZbwe4vjhZyPOfw8LHkAZ3hR"
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        const data = await response.json()
        console.log(data);
        document.querySelector(".apod-image img").src = data.url
    }

    catch(error){
        console.error(error);
    }
}

pictureOfTheDay()

async function pictureOfTheDayPage(){

    try{
        const apiKey = "w5vy83dfxyqTwuWvTZbwe4vjhZyPOfw8LHkAZ3hR"
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        const data = await response.json()
        console.log(data);
        document.querySelector(".apod-image-page img").src = data.url
        document.querySelector(".apod-image-explanation").innerHTML = data.explanation
        document.querySelector(".apod-image-title").innerHTML = data.title
    }

    catch(error){
        console.error(error);
    }
}

pictureOfTheDayPage()


async function latestCuriosityPhoto(){
    try{
        const apikey = "w5vy83dfxyqTwuWvTZbwe4vjhZyPOfw8LHkAZ3hR"
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apikey}`)
        const data = await response.json()
        console.log(data)

        const latestCuriosityPhotoContainer = document.querySelector(".latest-curiosity-photo")
        latestCuriosityPhotoContainer.innerHTML = "<h2>Latest Curiosity Photo</h2>" + data.latest_photos[0].earth_date + "<p>Image taken using the " + data.latest_photos[0].camera.full_name + " camera</p>" + `<img src="${data.latest_photos[0].img_src}" alt="Latest Curiosity Photo">`
    }

    catch(error){}
}

latestCuriosityPhoto()

    async function curiosityMSP (){  // MSP = MARS SMALL PICTURE
        try{
            const apikey = "w5vy83dfxyqTwuWvTZbwe4vjhZyPOfw8LHkAZ3hR"
            const earthDate = document.querySelector("#earth-date").value
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=${apikey}`)
            const data = await response.json()
            console.log(data)

            const emptyPictures = document.querySelector(".mars-small-pictures")
            emptyPictures.innerHTML = ""

            for(let i = 0; i < 21; i++){

                let marsImg = document.createElement('img')
                marsImg.src = data.photos[i].img_src
                marsImg.title = `Photo taken by ${data.photos[i].camera.full_name}`
                document.querySelector(".mars-small-pictures").appendChild(marsImg)
            }
        }
        catch(error){
            console.error(error)
        }
    }
    curiosityMSP()