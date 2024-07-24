// App.js

import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "PRE PRIMARY ACTIVITY ROOM ",
    description: "BPPS is developing a unique activity room for the pre primary and primary kids. This room will be adequately equipped with modern toys, cycles and different types of slides and play houses. Kids can even watch movies, educational videos and power point presentation in this room. Preschool provides kids with a lifetime of knowledge. ",
    imageUrl: "/images/Infrastructureimgonly/img1.webp ",
  },
  {
    title: "COMPOSITE SCIENCE LAB",
    description: "BPPS will also have composite science lab which will cater to the students Of middle school where they can unravel and explore the world Of science. At the initial level students are familiarized with the apparatus, equipments and specimens along with demonstrations of various experiments by teachers to develop skills and scientific temperament ",
    imageUrl: "/images/Infrastructureimgonly/img2.webp ",
  },
  {
    title: " LIBRARY ", 
    description: "The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills",
    imageUrl: " /images/Infrastructureimgonly/img3.webp ",
  },
  {
    title: " COMPUTER LAB",
    description: "The State Of the art computer centre provides plenty opportunities to the students to get an exposure of IT environment and learn to use various tools and software in their daily life and across the syllabus.Easy access to the internet means instant access to information, allowing students to conduct independent research right in the classroom. Technology allows students to become content creators themselves. They can create wiki pages collaboratively, write student blogs, create videos, webpages and other online content ",
    imageUrl: "  /images/Infrastructureimgonly/img4.webp ",
  },
  {
    title: "DANCE ROOM",
    description: "  There is a provision of spacious and well equipped dance studio at BPPS which will facilitate the creative, aesthetic and artistic talents of the school children. This room will be well equipped with musical and dance instruments and the technical equipment required bringing out the performing art skills of the students    ",
    imageUrl: "/images/Infrastructureimgonly/img5.webp ",
  },
  {
    title: " ART & CRAFT ROOM",
    description: "The splashes of colour reverberate with the diversity & vividity of human emotion in the art room at the junior level. Individual styles and techniques get honed and displayed at the middle and senior school level. BPPS will have a separate Art Room' where creativity of students is nurtured with necessary equipment to sensitize their aesthetic qualities",
    imageUrl: " /images/Infrastructureimgonly/img6.webp",
  },
  {
    title: "ENGLISH LANGUAGE LAB",
    description: "English language lab at BPPS is designed to provide the learners with a strong platform for practical training in the language. A good language lab skilfully and efficiently develops the language skills of the learners. Students at BPPS would be exposed to functional English language and will be familiarized with the pronunciation styles that are vital in everyday usage of the English language in today's world. Learn English & get comfortable speaking the world's language",
    imageUrl: " /images/Infrastructureimgonly/img7.webp",
  },
  {
    title: "MATHS LAB",
    description: "The Mathematics laboratory at BPPS is a place where the students can experiment and explore patterns ideas. Students can find a collection of games, puzzles, and other teaching and learning materials. The state of the art world class Math Lab will sharpen the skills of students. Mathematics laboratory serves to teach students about different methodologies and bridges the gap between the real and the abstract world. Their skills of reasoning, logical thinking and connecting ideas enhance with every lab session",
    imageUrl: " /images/Infrastructureimgonly/img8.webp ",
  },
  {
    title: "THE DISCOVERY ROOM",
    description: "The Discovery Room for Primary Classes I - V provides an opportunity to ascertain the principles of science through hands on activities and the use of audio visual material. A questioning scientific temperament is nurtured",
    imageUrl: " /images/Infrastructureimgonly/img9.webp",
  },
  {
    title: " LEARNING HUB",
    description: "Teachers the change-makers of tomorrow are empowered through regular and constant research in the inviting ambience of the Learning Hub. Our latest addition to foster technology enabled education",
    imageUrl: "/images/Infrastructureimgonly/img10.webp ",
  },
  {
    title: "AUDIO VISUAL ROOM",
    description: " The use of audio visual aids is well integrated with the school curriculum and used by the staff and students alike. The Audio-Visual Room with its slide projector and screens is equipped both for teaching and presentations by students. A large collection of educational CDs and DVDs are used regularly as teaching aids for enhancement of the student's learning",
    imageUrl: " public/images/Infrastructureimgonly/img11.webp",
  },
  {
    title: "YOGA SESSIONS",
    description: "BPP School has concept of Yoga classes for the students. Flexibility of body and mental peace are some of the key benefits of regular yoga. Yoga is accepted worldwide as one of the most effective form of exercise to influence the mental control. It is a Compulsory activity at BPP School and there are no extra charges. A qualified yoga trainer imparts basic yoga knowledge",
    imageUrl: "/images/Infrastructureimgonly/img12.webp ",
  },
  // Add more card data as needed
];

const MainCard = () => {
  return (
    <div className=" sm:grid sm:grid-cols-3 sm:gap-4 grid-rows-1  ">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default MainCard;
