import '../globals.css';

export const metadata = {
  title: 'Exam Prep With Me',
  description: 'Prepare for your exams with a structured to-do list.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
