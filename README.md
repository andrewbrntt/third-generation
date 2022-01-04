This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Add Before/During/After images
#### *Do these steps after the images have been compressed using photoshop
1. Log into [Cloudinary CDN](https://cloudinary.com/).
2. Go to the Media Library tab.
3. Open the `image-gallery` folder.
4. Create a new project folder in the desktop, mobile, and tablet folders with the same name. <br />
Such as `desktop -> project-6`
5. Inside each of the new project folders create a folder named `hero`.
6. Upload the new hero image and place it inside the hero folder.
7. Add a Metadata Tag with the window size, and project folder name. <br />
Ex. `desktop-project-5` or `mobile-project-5`
8. Navigate back to the project folder.
9. Upload all the thumbnail images and full size images to the folder.
10. Give each image a metadata tag like step 6.
11. Give each image a tag with the window size and the related phase. <br />
Ex. `desktop-during` or `mobile-after`
12. Go back to the project folders
13. Open the `src/Helpers/GLOBAL_DEFS.js` file
14. Add your new project name to the `IMAGE_GROUPS` object. <br />
Ex. `IMAGE_GROUPS: {
    PROJECT_1: 'project-1',
    PROJECT_2: 'project-2',
    PROJECT_3: 'project-3',
    PROJECT_4: 'project-4',
    PROJECT_5: 'project-5',
    NEW_PROJECT_NAME: 'new-project-name'
    },`
15. Open the javascript page file you want to add the images to. <br />
Ex. `pages -> OurWork.js`
16. In an `useEffect` hook add the call to retrieve the new image files. <br />
Ex. `const galleryImageGroup5 = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_5)`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
