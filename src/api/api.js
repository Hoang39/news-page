export const getListNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeData = [
        {
          id: 1,
          content:
            "Morning is the best time to work out. Not only does it boost your energy for the rest of the day, but it also gives you a sense of accomplishment before most people are even awake.",
          user: {
            name: "nguyenvana",
            avatar:
              "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
          },
          comment: [
            {
              id: 1,
              user: {
                name: "nguyenvana",
                avatar:
                  "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
              },
              content: "That's right",
              createdAt: "2024-09-11T14:30:00Z",
            },
            {
              id: 2,
              user: {
                name: "nguyenvana",
                avatar:
                  "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
              },
              content: "That's right",
              createdAt: "2024-09-11T14:30:00Z",
            },
            {
              id: 3,
              user: {
                name: "nguyenvana",
                avatar:
                  "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
              },
              content:
                "Morning is the best time to work out. Not only does it boost your energy for the rest of the day, but it also gives you a sense of accomplishment before most people are even awake.",
              createdAt: "2024-09-11T14:30:00Z",
            },
          ],
          createdAt: "2024-09-11T14:30:00Z",
        },
        {
          id: 2,
          content:
            "Morning is the best time to work out. Not only does it boost your energy for the rest of the day, but it also gives you a sense of accomplishment before most people are even awake.",
          user: {
            name: "nguyenvana",
            avatar:
              "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
          },
          comment: [],
          createdAt: "2024-09-11T14:30:00Z",
        },
        {
          id: 3,
          content:
            "Morning is the best time to work out. Not only does it boost your energy for the rest of the day, but it also gives you a sense of accomplishment before most people are even awake.",
          user: {
            name: "nguyenvana",
            avatar:
              "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
          },
          comment: [],
          createdAt: "2024-09-11T14:30:00Z",
        },
      ];
      resolve(fakeData);
    }, 1000);
  });
};
