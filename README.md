# Project Title
Consmocloud Employee CRUD

## Demo link:
You can check this Demo Video at [Youtube](https://youtu.be/Qky1j5XXt6M)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App
<strong>CosmoCloud Employee CRUD</strong> is simple React based webapp using CosmoCloud to delegate the API services and using MongoDB Atlas for DB.

## Screenshots

![View](/src/assets/employee_listing_page.png)
![View](/src/assets/add_employee.png)
![View](/src/assets/more_details_employee.png)


## Technologies
I used `React`, `React Router`, `CosmoCloud for Backend as a Service`, `MongoDB Atlas`, `tailwindcss`, `CSS`, `HTML` and `JavaScript` to build it from scratch.

## Setup
- clone the repository
- run `npm install` in your terminal
- run `npm run dev` in your terminal {all the credentials are in `.env` file and i did commit that for Assessment purpose}

## Approach
1. Initial Assessment:
    - Reviewed the project idea document from internet to understand and think about the requirements and visual design.
2. Backend Perspective :
    - Created a CosmoCloud Profile and made an `employee_crud` Project of Free Tier.
    - I created a data model keeping in mind the necessity of the project.
    - Then i integrated my `MongoDb Atlsas` with cosmoCloud to store the data.
    - Created API's in the CosmoCloud keeping in mind the data model and needs for the assignment.
    - Obtained the `API_URl`, `environmentId` and `projectId`.      
3. Frontend Development Perspective:
    - Adopted the mindset of a Frontend Developer, focusing on Route management, data management and the overall structure of the user interface.
4. Route management Breakdown:
    - created 3 routes and its respective page to fullfill the need of the assignment such as `/`,`/adding-employee`and `/employee/:empId` and also i have created an error page to handle any route errors.
5. API Management :
    - create `apiService.js` file to make all my methods for API call to clean up the clutter from the UI page files.    
5. Design Consideration:
    - Leveraged Tailwind CSS framework to build pages with a focus on building clean UI in dark mode.

## Status
[CosmoCloud-CRUD-assessment] is `Completed` as per project need.

## Credits
List of Help Guides:
- [google](https://google.com)
- [CosmoCloud Docs](https://docs.cosmocloud.io/)
- [tailwindcss official doc](https://tailwindcss.com/)
- [chatGPT](https://chat.openai.com)
- [MongoDB](https://mongodb.com)

## License

This is brought to you by [Alhera Ahmad](https://gentleshah.netlify.app)
