/**
 * The purpose of this code is to automatically generate and update the
 * upcoming courses cards on the home page of uscap.org.
 * 
 * When using divi, this code will need to be pasted into a code section using 
 * the <script> tag. You will also need to grab data.js and put it at the top
 * of the element (above everything here).
 */

/***** FRONTEND ELEMENT CREATION *****/

const upcomingCoursesSection = document.getElementById("upcoming-courses-section");

function getCard(courseObject) { 
    /**
     * Takes in a single course, generates the HTML for it
     * as a single card, then returns it as a string.
     */
    return `
        <div class="course-card" id="course-card" onclick="location.href='${courseObject.link}'">
            <div class="course-image-frame" id="course-image-frame">
                <img class="course-image" id="course-image" src="${courseObject.image_url}" alt="">
            </div>
            <div class="course-lower" id="course-lower">
                <h3 class="course-title et_pb_module_header" id="course-title">${courseObject.event_name}</h3>
                <strong>
                    <p class="course-location" id="course-location">${courseObject.event_location}</p>
                    <p class="course-date" id="course-date">${courseObject.date_string}</p>
                </strong>
                <a class="learn-more-button et_pb_button et_pb_promo_button" href="${courseObject.conference_website_url}" target="_blank" data-feathr-click-track="true" data-feathr-link-aids="5ba2ae703ef109532f9c7513">Learn More</a>
            </div>
        </div>
    `;
}

function createCards(allCardData, targetElement) {
    /**
     * Uses the course data [allCardData] to generate all cards, then places
     * the cards in the upcoming courses section [targetElement].
     */

    let counter = 0;
    let today = Date.now(); 
    // let today = new Date("2025", 11, "07"); // Month is 0 indexed (Jan = 0, Dec = 11)

    for (let i = 0; i < allCardData.length; i++) {
        let splitDate = allCardData[i].start_date.split('/');
        let courseDate = new Date(splitDate[2], splitDate[0] - 1, splitDate[1]); 
        
        // If the course has not passed, create a card. Do not create a card if today or in the past 
        if (courseDate > today) {
            targetElement.innerHTML += getCard(allCardData[i]);
            counter++;
        }
        
        if (counter === 4) return;
    }
}

/***** MAIN *****/

function main() {
    createCards(courseData, upcomingCoursesSection);
}

main();  // Execute code