import { POST } from "./types";

const initialState = [
  {
    id: "B7EU2II7IU",
    user: {
      id: 356,
      username: "@Keshavbhanu",
      alias: "Nameless",
      profile_update_time: 0,
      user_hash: "@Keshavbhanu",
      name: "Godkiller",
      profile: {
        photo: null,
        photo_url:
          "https://cdn.sayches.com/static/assets/images/avatars/babyAvatar_360x360.png",
        bio: "Tech geek \r\nInterested in technology \r\nCurious",
        pgp_fingerprint: "",
        btc_address: "",
        website: "",
      },
      warrant_canary: true,
    },
    text: "Nice platform combination of Twitter and social media",
    flair: "Mood Post",
    post_option: "normal",
    pinned_post: false,
    image: null,
    post_followers: [48],
  },
];
export const postReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case POST:
      return actions.payload;

    default:
      return state;
  }
};
