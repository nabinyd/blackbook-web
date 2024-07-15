// const BASE_URL = 'https://blackbook-gamma.vercel.app';
const BASE_URL = 'http://localhost:8000';
const USER_API = `${BASE_URL}/api/v1/users`;
const PROJECT_API = `${BASE_URL}/api/v1/projects`;
const DATASTORELIST_API = `${BASE_URL}/api/v1/datastorelist`;



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
    notificationsEnabled: false,
    preferredLanguage: '',
    preferredTheme: '',
    loginHistory: [],
    usageStatistics: {},
    friends: [],
    groups: [],
    birthDate: '',
    gender: '',
    country: '',
    region: '',
    deviceInfo: {},
    ipAddress: '',
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
    projectStatus: '',
    appAndPlatforms: [],
    college: '',
    projectLevel: '',
    projectUrl: '',
    collaborators: [],
}






export { BASE_URL, USER_API, PROJECT_API, initialUserData, initialProjectData, DATASTORELIST_API };