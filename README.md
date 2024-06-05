# DevStream Client

This is the client-side code for DevStream, a social media platform designed for developers to share knowledge, showcase projects, and learn through video courses.

## Live Domain

The client is live at: [https://your-live-domain-link](https://your-live-domain-link)

## Features

- Home page with leftbar (menu), add post form, posts lists, searchbar, and additional features like "people you may know"
- User profile page displaying photo, name, email, and posts
- Read single post details by ID
- Search user by email
- Login/register using Firebase email/password and Google logins

## Upcoming Features

We are constantly working on new features and improvements. Here are some of the upcoming features:

- Additional routes like community, messages, notifications, and channel (video stream)
- Profile enhancements: cover photos and edit profile feature
- Full responsiveness across devices

## Installation

To install and run the client locally:

1. Clone the repository:

   ```sh
   git clone https://github.com/marjanhasan/DevStream-Client.git
   cd devstream-client
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the client:

   For development:

   ```sh
   npm run dev
   ```

   To build for production:

   ```sh
   npm run build
   ```

   To preview the production build:

   ```sh
   npm run preview
   ```

## Routes

1. **Home**

   - **URL:** `/`
   - **Description:** Home page with leftbar (menu), add post form, posts lists, searchbar, and additional features like "people you may know"

2. **Profile**

   - **URL:** `/profile`
   - **Description:** User profile page displaying photo, name, email, and posts

3. **Single Post**

   - **URL:** `/posts/:id`
   - **Description:** Read single post details by ID

4. **Search User**

   - **Description:** Search user by email

5. **Authentication**
   - **Description:** Login/register using Firebase email/password and Google logins

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the ISC License.

## GitHub Repository

You can find the source code and contribute to the project at the GitHub repository:

[https://github.com/marjanhasan/DevStream-Client](https://github.com/marjanhasan/DevStream-Client)

## Author

- **Marjan**
