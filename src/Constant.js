// const BASE_URL = 'https://blackbook-gamma.vercel.app';
const BASE_URL =process.env.REACT_APP_BASE_URL;
console.log("base url : ", BASE_URL);
const USER_API = `${BASE_URL}/api/v1/users`;
const PROJECT_API = `${BASE_URL}/api/v1/projects`;
const FEEDBACK_API = `${BASE_URL}/api/v1/feedback`;
const EDITUSER_API = `${BASE_URL}/api/v1/edituser`;
const DATASTORELIST_API = `${BASE_URL}/api/v1/datastorelist`;

const ID_TOKEN = localStorage.getItem("idToken");



const initialUserData = {
    uid: '',
    email: '',
    fullName: '',
    userName: '',
    favourites: [],
    phoneNumber: '',
    address: '',
    profilePictureUrl: '',
    bio: '',
    friends: [],
    groups: [],
    birthDate: '',
    gender: '',
    country: '',

};

const initialProjectData = {
    authorName: '',
    email: '',
    title: '',
    description: '',
    stream: '',
    category: '',
    tags: [],
    isFinalYearProject: false,
    imagesUrl: [],
    pdfUrl: '',
    viewCount: 0,
    components: [],
    projectType: '',
    projectStatus: 'Pending',
    appAndPlatforms: [],
    college: 'N/A',
    projectUrl: '',
    collaborators: [],
    projectPdf: '',
}






export { BASE_URL, USER_API, PROJECT_API, initialUserData, initialProjectData, DATASTORELIST_API, FEEDBACK_API, EDITUSER_API, ID_TOKEN };