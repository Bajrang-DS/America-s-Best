
export const AnswerExperienceConfig = {
  limit:5,
  locale: "en",
  apiKey : "b88e27af2c8b5d5b7fe52d29786f3b57",//b88e27af2c8b5d5b7fe52d29786f3b57//e50394eef36ba2e27e8f8ec8420116d7
  verticalKey : "locations",
  experienceKey : "americas-best",
  experienceVersion: "STAGING", 
  locationRadius: 8046720,
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

    
  }
  
}
export const googleMapsConfig =  {
  centerLatitude:38.573936,
  centerLongitude: -92.603760,
  googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
};
// export const googleMapsApiKey = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";