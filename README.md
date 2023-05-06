# PlanPoker

This is a project built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/) that allows teams to estimate the relative size of their backlog items using Planning Poker.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/RuanAragao/planpoker.git`
2. Install the dependencies using `yarn install`
3. Set up a Firebase project and Firestore database (see instructions below)
4. Add the Firebase configuration to the project (see instructions below)
5. Start the development server using `yarn dev`
6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app

## Firebase Configuration

To set up a Firebase project and Firestore database for this project, follow these steps:

1. Go to the [Firebase console](https://console.firebase.google.com/) and create a new project
2. Click on "Firestore Database" in the sidebar and create a new database
3. In the "Rules" tab of your database, replace the default rules with the following:

```lua
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

```

4. Click on the gear icon next to "Project Overview" in the sidebar and select "Project settings"
5. Scroll down to the "Firebase SDK snippet" section and select "Config"
6. Copy the object that appears, which should look something like this:
```js
{
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
}
```

7. Create a new file in the root of your project called `.env.local` and add the following lines, replacing the values with your Firebase project's config values:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your-database-url
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework used
- [TypeScript](https://www.typescriptlang.org/) - The programming language used
- [Firebase Firestore](https://firebase.google.com/products/firestore) - The cloud database used
- [Tailwind CSS](https://tailwindcss.com/) - The UI library used

## Contributing

Contributions are always welcome! If you'd like to contribute, please see [CONTRIBUTING](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.


