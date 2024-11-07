"use client"
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const musicSchoolCourses = [
 
  {
    title: "Advanced Vocal Training",
    description: "A comprehensive training program for advanced vocalists, focusing on voice control, range expansion, and performance techniques."
  },
  {
    title: "Music Theory Essentials",
    description: "Learn the basics of music theory, including reading sheet music, understanding scales, chords, and harmony in a structured way."
  },
  {
    title: "Jazz Improvisation",
    description: "A specialized course in jazz improvisation, teaching chord progressions, scales, and spontaneous composition techniques."
  },
  {
    title: "Drum Mastery for Beginners",
    description: "An introductory drumming course covering rhythm basics, beats, and simple fills, perfect for aspiring drummers."
  },
  {
    title: "Songwriting Workshop",
    description: "A creative workshop that guides students through the songwriting process, from idea development to composing lyrics and melodies."
  },
  {
    title: "Electronic Music Production",
    description: "A course on electronic music production using software tools to create, mix, and master electronic music tracks."
  }
];



const WhyChooseUs = () => {
  return (
    <div>
     <StickyScroll content={musicSchoolCourses}/>
    </div>
  )
}

export default WhyChooseUs
