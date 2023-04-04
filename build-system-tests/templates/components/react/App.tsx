import React, { useEffect } from 'react';
import { Amplify, Notifications } from 'aws-amplify';
import {
  Authenticator,
  FileUploader,
  MapView,
  Text,
  InAppMessagingProvider,
  InAppMessageDisplay,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const { InAppMessaging } = Notifications;

export default function Home() {
  useEffect(() => {
    // sync remote in-app messages
    InAppMessaging.syncMessages();
  }, []);

  return (
    <>
      <InAppMessagingProvider>
        <InAppMessageDisplay />
        <Text>In-App Messaging Example</Text>
      </InAppMessagingProvider>
      <FileUploader acceptedFileTypes={['image/*']} accessLevel="public" />
      <Authenticator>
        {({
          signOut,
          user = { username: '' },
        }: {
          signOut: React.MouseEventHandler<HTMLButtonElement> | undefined;
          user: { username: string };
        }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      <MapView />
    </>
  );
}
