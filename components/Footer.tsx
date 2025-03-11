// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-4 z-50">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
