import { QuestionnaireDto } from "@/interfaces/types";

export const questionnaireData: QuestionnaireDto = {
  questionsArray: [
    {
      id: "1",
      question: "Jakiego typu stronę oczekujesz?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "1a",
          answer: "Wizytówka, bez dodatkowych podstron tzw. Landing Page",
        },
        {
          id: "1b",
          answer: "Rozbudowana strona z odnośnikami do poszczególnych podstron",
        },
      ],
    },
    {
      id: "2",
      question:
        "Ilość sekcji/podstron na stronie? (np. Strona główna, O nas, Oferta, Realizacje, Kontakt itp.)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "2a",
          answer: "1-5",
        },
        {
          id: "2b",
          answer: "6-10",
        },
        {
          id: "2c",
          answer: "11-15",
        },
        {
          id: "2d",
          answer: "16+",
        },
      ],
    },
    {
      id: "3",
      question: "Funkcjonalność na stronie",
      isMultiSelect: true,
      isAnswered: false,
      answers: [
        {
          id: "3a",
          answer: "Formularz kontaktowy",
        },
        {
          id: "3b",
          answer: "Mapa z lokalizacją firmy",
        },
        {
          id: "3c",
          answer: "Wdrożenie Google Analytics",
        },
        {
          id: "3d",
          answer: "Przewijany slider ze zdjęciami",
        },
        {
          id: "3e",
          answer: "Galeria zdjęć",
        },
        {
          id: "3f",
          answer: "",
          label: "Inne:",
        },
      ],
    },
    {
      id: "4",
      question: "Czy posiadasz swój projekt graficzny strony?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "4a",
          answer: "Tak",
        },
        {
          id: "4b",
          answer: "Nie",
        },
      ],
    },
    {
      id: "5",
      question:
        "Czy potrzebujesz pomocy w przygotowaniu treści na stronę (nagłówki, teksty)?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "5a",
          answer: "Tak",
        },
        {
          id: "5b",
          answer: "Nie",
        },
      ],
    },
    {
      id: "6",
      question:
        "Dodatkowe uwagi (Możesz tutaj wpisać np. Swoje preferencję co do wyglądu strony, podać linki do stron, które Ci się podobają lub opisać bardziej szczegółowo czego oczekujesz na swojej stronie internetowej)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "6a",
          answer: "",
          label: "Twoje uwagi",
        },
      ],
    },
    {
      id: "7",
      question: "Dane kontaktowe",
      contactForm: true,
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "7a",
          answer: "",
          label: "Imię",
        },
        {
          id: "7b",
          answer: "",
          label: "Telefon kontaktowy",
        },
        {
          id: "7c",
          answer: "",
          label: "Adres email",
        },
      ],
    },
  ],
};
