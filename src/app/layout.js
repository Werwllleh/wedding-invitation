import "@/styles/index.scss";


export const metadata = {
  title: "Свадебное приглашение",
  description: "Свадебное приглашение Алексея и Анастасии",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
