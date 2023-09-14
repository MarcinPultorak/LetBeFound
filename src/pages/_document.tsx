import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html className="scroll-smooth" lang="pl">
      <Head>
        <meta
          name="description"
          content="Tworzymy profesjonalne strony internetowe dla Twojego biznesu. Nasze usługi obejmują projektowanie, rozwijanie i optymalizację stron, aby pomóc Ci osiągnąć sukces online. Zaufaj nam i zainwestuj w swoją obecność w internecie!"
        />
        <meta
          name="keywords"
          content="tworzenie stron internetowych, projektowanie stron internetowych, rozwijanie stron internetowych, strony dla biznesu, strony internetowe dla firmy, letbefound, let be found, stwórz swoją strone internetową"
        />
        <meta name="author" content="Let Be Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Tworzenie Profesjonalnych Stron Internetowych dla Biznesu"
        />
        <meta
          property="og:description"
          content="Zaufaj nam, aby stworzyć skuteczną stronę internetową dla Twojego biznesu. Projektujemy, rozwijamy i optymalizujemy strony internetowe, by pomóc Ci osiągnąć sukces online."
        />
        <meta property="og:url" content="awww.letbefound.pl" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta
          name="twitter:title"
          content="Tworzenie Profesjonalnych Stron Internetowych dla Biznesu"
        />
        <meta
          name="twitter:description"
          content="Zaufaj nam, aby stworzyć skuteczną stronę internetową dla Twojego biznesu. Projektujemy, rozwijamy i optymalizujemy strony internetowe, by pomóc Ci osiągnąć sukces online."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
