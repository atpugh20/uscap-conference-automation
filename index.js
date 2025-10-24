 // When using divi, this code will need to be pasted into a code section using 
 // the <script> tag.

/**
 * The purpose of this code is to automatically generate and update the
 * upcoming courses cards on the home page of uscap.org.
 */


/***** XCD API HANLDER *****/

const upcomingCoursesSection = document.getElementById("upcoming-courses-section");

const courseData = [
    {
        title: "Tips and Hints in Surgical Pathology",
        location: "Palm Springs, CA",
        startDate: "November 13, 2025",
        endDate: "November 15, 2025",
        link: "https://google.com",
        imageLink: "https://uscap.org/wp-content/uploads/2025/07/Surgical-Pathology-COURSE-IMAGE.jpg"
    },
    {
        title: "Unusual But Non-Esoteric Tumors of the Genitourinary Tract From Which You Cannot Hide",
        location: "Palm Springs, CA",
        startDate: "December 3, 2025",
        endDate: "December 5, 2025",
        link: "https://google.com",
        imageLink: "https://uscap.org/wp-content/uploads/2025/10/GEN450X325.png"
    }
];

/***** FRONTEND ELEMENT CREATION *****/

function getCard(courseObject) { 
    /**
     * Takes in a single course, generates the HTML for it
     * as a single card, then returns it as a string.
     */
    return `
        <div class="course-card" id="course-card">
            <img class="course-image" id="course-image" src="${courseObject.imageLink}" alt="">
            <div class="course-lower" id="course-lower">
                <h4 class="course-title" id="course-title">${courseObject.title}</h4>
                <p class="course-location" id="course-location">${courseObject.location}</p>
                <p class="course-date" id="course-date">${courseObject.startDate} to <br> ${courseObject.endDate}</p>
                <a class="et_pb_button et_pb_promo_button" href="${courseObject.link}" target="_blank" data-feathr-click-track="true" data-feathr-link-aids="5ba2ae703ef109532f9c7513">Learn More</a>
            </div>
        </div>
    `;
}

function createCards(allCardData, targetElement) {
    /**
     * Uses the course data [allCardData] to generate all cards, then places
     * the cards in the upcoming courses section [targetElement].
     */
    for (let i = 0; i < allCardData.length; i++) {
        targetElement.innerHTML += getCard(allCardData[i]);
    }
}

/***** MAIN *****/

function main() {
    createCards(courseData, upcomingCoursesSection);
}

main();  // Execute code