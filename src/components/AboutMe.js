import React from 'react'
import Alakazam from "../assets/images/Alakazam_v2.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-content items-center">
      <h1>About Me</h1>
      <img
        src={Alakazam}
        alt="Docks"
        width="700"
        height="400"
        className="object-cover"
      />
      <p className="pt-10">
        My name is Dylan Storm Johnson. I have studied animation, programming
        (HTML/CSS/JavaScript), and Japanese. I like to draw and create things,
        making them visually interesting or evoking of particular moods.
      </p>
      <p className="pt-10">
        If hired, I will work diligently to not only meet, but exceed the
        parameters of the tasks I'm entrusted with. In Colossians 3:23 (NIV),
        Paul advised us: "Whatever you do, work at it with all your heart, as
        working for the Lord, not for human masters,..." It is for this reason I
        will work to accomplish the tasks given to me in such a way as to honor
        the Lord as a hard worker.
      </p>
    </div>
  );
}

export default AboutMe