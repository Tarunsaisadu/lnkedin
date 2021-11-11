import React from "react";

export const fetchdata = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        method: "GET",
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjZWFlZTVmMzRhZDAwMTUzOWYxNjEiLCJpYXQiOjE2MzY2MjUxMzQsImV4cCI6MTYzNzgzNDczNH0.NgYMfuCr8iggCo3A2apdsYI5C4c-9L3fNTAnEhj_v80",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchMe = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        method: "GET",
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjZWFlZTVmMzRhZDAwMTUzOWYxNjEiLCJpYXQiOjE2MzY2MjUxMzQsImV4cCI6MTYzNzgzNDczNH0.NgYMfuCr8iggCo3A2apdsYI5C4c-9L3fNTAnEhj_v80",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + userId,
      {
        method: "GET",
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjZWFlZTVmMzRhZDAwMTUzOWYxNjEiLCJpYXQiOjE2MzY2MjUxMzQsImV4cCI6MTYzNzgzNDczNH0.NgYMfuCr8iggCo3A2apdsYI5C4c-9L3fNTAnEhj_v80",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch Experiences

export const fetchMyExperience = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me/experiences",
      {
        method: "GET",
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjZWFlZTVmMzRhZDAwMTUzOWYxNjEiLCJpYXQiOjE2MzY2MjUxMzQsImV4cCI6MTYzNzgzNDczNH0.NgYMfuCr8iggCo3A2apdsYI5C4c-9L3fNTAnEhj_v80",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchExperiences = async (userId) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
      {
        method: "GET",
        headers: {
          Authorization:
            " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjZWFlZTVmMzRhZDAwMTUzOWYxNjEiLCJpYXQiOjE2MzY2MjUxMzQsImV4cCI6MTYzNzgzNDczNH0.NgYMfuCr8iggCo3A2apdsYI5C4c-9L3fNTAnEhj_v80",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchExperience = async (userId, experienceId) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
      {
        method: "GET",
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjZWFlZTVmMzRhZDAwMTUzOWYxNjEiLCJpYXQiOjE2MzY2MjUxMzQsImV4cCI6MTYzNzgzNDczNH0.NgYMfuCr8iggCo3A2apdsYI5C4c-9L3fNTAnEhj_v80",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch Feeds Posts

// export const fetchPosts = async () => {
//   try {
//     const response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/posts/`,
//       {
//         method: "GET",
//         headers: {
//           Authorization:
//             " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3Mjk5YmIwMWIwZDAwMTUxNjY5MDQiLCJpYXQiOjE2MzEwMDUwODMsImV4cCI6MTYzMjIxNDY4M30.yJM7cebFnDP0ayfuxT3X6Wl47Nhme9pIbmgYBPwhViM",
//         },
//       }
//     );
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
