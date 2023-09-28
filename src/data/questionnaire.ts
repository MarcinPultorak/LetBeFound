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
          id: "a",
          answer: "Wizytówka, bez dodatkowych podstron tzw. Landing Page",
        },
        {
          id: "b",
          answer: "Rozbudowana strona z odnośnikami do poszczególnych podstron",
        },
      ],
    },
    {
      id: "2",
      question: "Ilość sekcji/podstron na stronie? (np. Strona główna, O nas, Oferta, Realizacje, Kontakt itp.)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "1-5",
        },
        {
          id: "b",
          answer: "6-10",
        },
        {
          id: "c",
          answer: "11-15",
        },
        {
          id: "d",
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
          id: "a",
          answer: "Formularz kontaktowy",
        },
        {
          id: "b",
          answer: "Mapa z lokalizacją firmy",
        },
        {
          id: "c",
          answer: "Wdrożenie Google Analytics",
        },
        {
          id: "d",
          answer: "Przewijany slider ze zdjęciami",
        },
        {
          id: "e",
          answer: "Galeria zdjęć",
        },
        {
          id: "d",
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
          id: "a",
          answer: "Tak",
        },
        {
          id: "b",
          answer: "Nie",
        },
      ],
    },
    {
      id: "5",
      question: "Czy potrzebujesz pomocy w przygotowaniu treści na stronę (nagłówki, teksty)?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "Tak",
        },
        {
          id: "b",
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
          id: "a",
          answer: "",
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
          id: "a",
          answer: "",
          label: "Imię",
        },
        {
          id: "b",
          answer: "",
          label: "Telefon kontaktowy",
        },
        {
          id: "c",
          answer: "",
          label: "Adres email",
        },
      ],
    },
  ],
};
