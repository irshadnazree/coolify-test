'use client';
import CrashComponent from '@/components/CrashComponent';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <h1>
      Hello, Home page!
      <CrashComponent />
    </h1>
  );
}
