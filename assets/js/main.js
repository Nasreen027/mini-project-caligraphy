const root = $("#root")
const defaultImageUrl = "./assets/image/"
const headerContainer = $("#header-container")
const footerContainer = $("#footer-container")
const newArrivalsContainer = $("#new-arrivals-container")
const threePanelContainer = $("#three-panel-container")
const fourPanelContainer = $("#four-panel-container")
const fivePanelContainer = $("#five-panel-container")
const woodenFramesContainer = $("#wooden-container")
const westernContainer = $("#western-container")
const eastAsianContainer = $("#east-asian-container")
const qalamContainer = $("#qalam-container")
const arabicFontsContainer = $("#arabic-fonts-container")
const westernFontsContainer = $("#western-fonts-container")
const eastAsianFontsContainer = $("#east-asian-fonts-container")
const aboutContainer = $("#about")
const faqContainer = $("#faq-container")
const videoContainer = $("#video")



/////////////////////////////////
///////////New Arrivals//////////
/////////////////////////////////

//onload loading new arrivals
$.getJSON("./data/new-arrivals.json", function (data) {
    newArrivalsContainer.html(makeProductGrid("New Arrivals", data, 3, "new-arrivals-btn"))
})

//on click to show all new arrivals
$(document).on("click", ".new-arrivals-btn", function () {
    $.getJSON("./data/new-arrivals.json", function (data) {
        newArrivalsContainer.html(makeProductGrid("New Arrivals", data, null, "new-arrivals-btn-back"))
    })
})

//on click to show less new arrivals
$(document).on("click", ".new-arrivals-btn-back", function () {
    $.getJSON("./data/new-arrivals.json", function (data) {
        newArrivalsContainer.html(makeProductGrid("New Arrivals", data, 3, "new-arrivals-btn"))
    })
})




/////////////////////////////////
///////////Three Panels//////////
/////////////////////////////////

//onload loading three panel data
$.getJSON("./data/three-panel.json", function (data) {
    threePanelContainer.html(
        makeProductGrid("Three Panels Canvas Set", data, 3, "three-panel-btn")
    )
})

//onclick show all three panel data
$(document).on("click", ".three-panel-btn", function () {
    $.getJSON("./data/three-panel.json", function (data) {
        threePanelContainer.html(
            makeProductGrid("Three Panels Canvas Set", data, null, "three-panel-btn-back")
        )
    })

})

//onclick show less three panel data
$(document).on("click", ".three-panel-btn-back", function () {
    $.getJSON("./data/three-panel.json", function (data) {
        threePanelContainer.html(
            makeProductGrid("Three Panels Canvas Set", data, 3, "three-panel-btn")
        )
    })
})

/////////////////////////////////
///////////Four Panels//////////
/////////////////////////////////

//onloading four panel data
$.getJSON("./data/four-panel.json", function (data) {
    fourPanelContainer.html(
        makeProductGrid("Four Panels Canvas Set", data, 3, "four-panel-btn")
    )
})

//onclick show more four panel data
$(document).on("click", ".four-panel-btn", function () {
    $.getJSON("./data/three-panel.json", function (data) {
        fourPanelContainer.html(
            makeProductGrid("Four Panels Canvas Set", data, null, "four-panel-btn-back")
        )
    })
})

//onclick show less four panel data
$(document).on("click", ".four-panel-btn-back", function () {
    $.getJSON("./data/four-panel.json", function (data) {
        fourPanelContainer.html(
            makeProductGrid("Four Panels Canvas Set", data, 3, "four-panel-btn")
        )
    })
})

/////////////////////////////////
///////////Five Panels//////////
/////////////////////////////////

//onload load five panels less data
$.getJSON("./data/five-panel.json", function (data) {
    fivePanelContainer.html(
        makeProductGrid("Five Panels Canvas Set", data, 3, "five-panel-btn")
    )
})

//onclick show more five panel data
$(document).on("click", ".five-panel-btn", function () {
    $.getJSON("./data/five-panel.json", function (data) {
        fivePanelContainer.html(
            makeProductGrid("Five Panels Canvas Set", data, null, "five-panel-btn-back")
        )
    })
})

//onclick show less five panel data
$(document).on("click", ".five-panel-btn-back", function () {
    $.getJSON("./data/five-panel.json", function (data) {
        fivePanelContainer.html(
            makeProductGrid("Five Panels Canvas Set", data, 3, "five-panel-btn")
        )
    })
})

/////////////////////////////////
///////////Wooden Frames//////////
/////////////////////////////////

//onload load wooden less data
$.getJSON("./data/wooden.json", function (data) {
    woodenFramesContainer.html(
        makeProductGrid("Wooden Frames", data, 3, "wooden-btn")
    )
})

//onclick show more wooden frames data
$(document).on("click", ".wooden-btn", function () {
    $.getJSON("./data/wooden.json", function (data) {
        woodenFramesContainer.html(
            makeProductGrid("Wooden Frames", data, null, "wooden-btn-back")
        )
    })
})

//onclick show less wooden frames data
$(document).on("click", ".wooden-btn-back", function () {
    $.getJSON("./data/wooden.json", function (data) {
        woodenFramesContainer.html(
            makeProductGrid("Wooden Frames", data, 3, "wooden-btn")
        )
    })
})

/////////////////////////////////
///////////Western Calligraphy//////////
/////////////////////////////////

//onload show less western calligraphy data
$.getJSON("./data/western.json", function (data) {
    westernContainer.html(
        makeProductGrid("Western Calligraphy Canvas", data, 3, "western-btn")
    )
})

//onclick show more western calligraphy data
$(document).on("click", ".western-btn", function () {
    $.getJSON("./data/western.json", function (data) {
        westernContainer.html(
            makeProductGrid("Western Calligraphy Canvas", data, null, "western-btn-back")
        )
    })
})

//onclick show less western calligraphy data
$(document).on("click", ".western-btn-back", function () {
    $.getJSON("./data/western.json", function (data) {
        westernContainer.html(
            makeProductGrid("Western Calligraphy Canvas", data, 3, "western-btn")
        )
    })
})

/////////////////////////////////
///////////East Asian Calligraphy//////////
/////////////////////////////////

//onload show less eastasian calligraphy data
$.getJSON("./data/east-asian.json", function (data) {
    eastAsianContainer.html(
        makeProductGrid("East Asian Calligraphy Canvas", data, 3, "east-btn")
    )
})

//onclick show more eastasian calligraphy data 
$(document).on("click", ".east-btn", function () {
    $.getJSON("./data/east-asian.json", function (data) {
        eastAsianContainer.html(
            makeProductGrid("East Asian Calligraphy Canvas", data, null, "east-btn-back")
        )
    })
})

//onclick show less eastasian calligraphy data
$(document).on("click", ".east-btn-back", function () {
    $.getJSON("./data/east-asian.json", function (data) {
        eastAsianContainer.html(
            makeProductGrid("East Asian Calligraphy Canvas", data, 3, "east-btn")
        )
    })
})





///////////////////////
/////Navbar functions//
//////////////////////

//detecting click on nav buttons with class nav-go
$(document).on("click", ".nav-go", function () {

    //getting current button
    const button = $(this)

    //getting stored data from data- attributes
    const dataContainerId = button.attr("data-container-id")
    const fileName = button.attr("data-file")
    const sectionTitle = button.attr("data-section-title")

    //hiding all data containers
    newArrivalsContainer.hide()
    threePanelContainer.hide()
    fourPanelContainer.hide()
    fivePanelContainer.hide()
    woodenFramesContainer.hide()
    westernContainer.hide()
    eastAsianContainer.hide()
    qalamContainer.hide()
    arabicFontsContainer.hide()
    westernFontsContainer.hide()
    eastAsianFontsContainer.hide()
    aboutContainer.hide()
    faqContainer.hide()
    videoContainer.hide()

    window.scrollTo(0,0)

    //getting our selected container from data-container-id
    const selectedCotainer = $(dataContainerId)

    if (fileName) {

        //getting json from our data-file
        $.getJSON(`./data/${fileName}`, function (data) {

            //setting html of our selected container
            selectedCotainer.html(

                //making grid for our selected container
                makeProductGrid(sectionTitle, data, null, "", false)
            )
        })
    }


    //showing only our selected container
    selectedCotainer.show()
})