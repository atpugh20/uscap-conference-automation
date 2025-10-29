/**
 * This data is pulled from the XCD API and cleaned using python.
 * The python project is: https://github.com/atpugh20/course-data-cleanup
 * 
 * Make sure to delete any events that are not to be displayed. 
 * 
 * In Divi, you will need to combine this and index.js into one file.
 * (place this above code in index.js)
 */

// Scroll past to see the JS code

// Local API key here (Do not upload to WordPress)

/***** DATA FOR CARDS *****/
const courseData = [
{
"event_name": "Tips and Hints in Surgical Pathology",
"date_string": "November 13 - 15, 2025",
"start_date": "11/13/2025",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/CvvexHs/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/11-13-2025.png",
},
{
"event_name": "Unusual But Non-Esoteric Tumors of the Genitourinary Tract From Which You Cannot Hide",
"date_string": "December 3 - 5, 2025",
"start_date": "12/03/2025",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/7oODLsr/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/12-03-2025.png",
},
{
"event_name": "Practical Neoplastic and Non-Neoplastic Bone Pathology for the Surgical Pathologist",
"date_string": "December 8 - 9, 2025",
"start_date": "12/08/2025",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/2u37LZ8/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/12-08-2025.png",
},
{
"event_name": "Gynecological Pathology – Essential Knowledge for Diagnostic Practice (Presidential Edition) ",
"date_string": "January 21 - 24, 2026",
"start_date": "01/21/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/5Jvvj1h/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/01-21-2026.png",
},
{
"event_name": "Modern Surgical Pathology Through the Expert Eyes of APSS-USCAP: Seventh Edition",
"date_string": "January 27 - 30, 2026",
"start_date": "01/27/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/MFmt73a/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/01-27-2026.png",
},
{
"event_name": "Modern Breast Pathology: Practical Updates from the International Society of Breast Pathology (ISBP)",
"date_string": "February 9 - 11, 2026",
"start_date": "02/09/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/fV4irMX/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/02-09-2026.png",
},
{
"event_name": "Confronting the Unfamiliar and Unnerving in Dermpath: Practical Tips to Curb Hair Pulling and Nail Biting at the Microscope",
"date_string": "April 14 - 16, 2026",
"start_date": "04/14/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/YzL6xLF/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/04-14-2026.png",
},
{
"event_name": "Gynecologic Pathology Masterclass: Contemporary Issues in Light of Shifting Nomenclature, Criteria, and Ancillary Testing",
"date_string": "April 28 - May 1, 2026",
"start_date": "04/28/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/mq9zNVD/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/04-28-2026.png",
},
{
"event_name": "Cytopathology: Paradigms, Pearls and Pitfalls in Practice",
"date_string": "May 6 - 8, 2026",
"start_date": "05/06/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/m7wZFQq/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/05-06-2026.png",
},
{
"event_name": "Practical Approaches to Everyday Head and Neck/Endocrine Pathology: Recognizing the Common and Not So Common",
"date_string": "May 14 - 15, 2026",
"start_date": "05/14/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/hOzc8be/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/05-14-2026.png",
},
{
"event_name": "An Inside Peek Into the GU Consult Vault: Problematic Consultation Cases and How We Approach Them",
"date_string": "September 30 - October 2, 2026",
"start_date": "09/30/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/849DjWR/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/09-30-2026.png",
},
{
"event_name": "Placental and Gestational Trophoblastic Pathology for General Pathologists: How to Keep Calm and Carry On",
"date_string": "November 2 - 4, 2026",
"start_date": "11/02/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/6HfXxsq/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/11-02-2026.png",
},
{
"event_name": "Inside Thyroid Pathology in Three Days: All You Need to Know and Discover from the New Bethesda System to the WHO 5th Edition",
"date_string": "November 16 - 18, 2026",
"start_date": "11/16/2026",
"event_location": "Palm Springs, CA",
"conference_website_url": "https://my.uscap.org/app/program/TxMSiPR/index.cfm",
"image_url": "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/11-16-2026.png",
},
]; 