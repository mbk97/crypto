export const options = {
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
  params: {
    q: "cryptocurrency",
    pageNumber: "1",
    pageSize: "8",
    autoCorrect: "true",
    fromPublishedDate: "null",
    toPublishedDate: "null",
    withThumbnails: "true",
  },
  headers: {
    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "a8e7b07c4bmsh181d58aead32579p15de63jsnfaffb3adfeb9",
  },
};
