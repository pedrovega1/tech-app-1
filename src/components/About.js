import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Обо мне</h1>
      <p className="text-lg mb-4">
        Добро пожаловать на мой информационный сайт! Я Владислав, и я занимаюсь
        Frontend-разработкой. Моя цель - предоставить вам полезную информацию о
        себе и показать свои возможности.
      </p>
      <p className="mb-4">
        У меня есть знания и опыт работы с HTML, CSS и JavaScript. Я также
        знаком с популярными фреймворками и библиотеками, такими как React.
      </p>
      <p className="mb-4">
        Я постоянно обучаюсь и исследую новые технологии, чтобы улучшить свои
        навыки и быть в курсе последних трендов в веб-разработке.
      </p>
      <p className="mb-4">
        Спасибо за посещение моего сайта и заинтересованность в моей работе.
      </p>

      <p className="mb-4">
        Более подробно обо мне, можно узнать по этой ссылке:
        <Link
          to="https://drive.google.com/drive/u/1/folders/1on5F9P0amRXI5d2f2GfIvwLL-QH_YBoC"
          className="text-blue-500 font-bold ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </p>

      <Link to="/" className="text-blue-500 underline">
        Назад
      </Link>
    </div>
  );
};

export default About;
