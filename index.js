 // When using divi, this code will need to be pasted into a code section using 
 // the <script> tag.

/**
 * The purpose of this code is to automatically generate and update the
 * upcoming courses cards on the home page of uscap.org.
 */


/***** XCD API HANLDER *****/

const upcomingCoursesSection = document.getElementById("upcoming-courses-section");

// Image: Can use XCD file system and use the course ID as the filename

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
    },
    {
        title: "Practical Neoplastic and Non-Neoplastic Bone Pathology for the Surgical Pathologist",
        location: "Palm Springs, CA",
        startDate: "December 8, 2025",
        endDate: "December 9, 2025",
        link: "https://google.com",
        imageLink: "https://uscap.org/wp-content/uploads/2025/10/Neoplastic_COURSE-IMAGE450x325-scaled.png"
    },
];

/***** FRONTEND ELEMENT CREATION *****/

function getCard(courseObject) { 
    /**
     * Takes in a single course, generates the HTML for it
     * as a single card, then returns it as a string.
     */
    return `
        <div class="course-card" id="course-card" onclick="location.href='${courseObject.link}'">
            <div class="course-image-frame" id="course-image-frame">
                <img class="course-image" id="course-image" src="${courseObject.imageLink}" alt="">
            </div>
            <div class="course-lower" id="course-lower">
                <h3 class="course-title et_pb_module_header" id="course-title">${courseObject.title}</h3>
                <strong>
                    <p class="course-location" id="course-location">${courseObject.location}</p>
                    <p class="course-date" id="course-date">${courseObject.startDate}<br>to<br>${courseObject.endDate}</p>
                </strong>
                <a class="learn-more-button et_pb_button et_pb_promo_button" href="${courseObject.link}" target="_blank" data-feathr-click-track="true" data-feathr-link-aids="5ba2ae703ef109532f9c7513">Learn More</a>
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