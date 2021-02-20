import React from "react";

function getAge(birthday) {
  const today = new Date();
  let thisYear = 0;
  if (today.getMonth() < birthday.getMonth()) {
    thisYear = 1;
  } else if (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() < birthday.getDate()
  ) {
    thisYear = 1;
  }
  const age = today.getFullYear() - birthday.getFullYear() - thisYear;
  return age;
}

function About() {
  return (
    <div className="About" id="About">
      <br />
      <p>
        Hi! My name is Petar! I am currently {getAge(new Date("07-14-1997"))}{" "}
        years old. Try out the terminal! Use &apos;clear&apos; to reset.
      </p>
      <p>
        I like technology, writting code and doing DIY projects, usually with
        raspberry pis and arduinos. I like typed languages like GO and
        Typescript. Ironically this portfolio is written in JavaScript.
      </p>
      <p>
        Some of my other hobbies include meditation. My goal is to become free
        from suffering, gain insight and wisdom and achieve ultimate freedom,
        experience nothing. The technique is called zazen. It means sitting,
        it&apos;s from zen buddhism. What is zen? Can&apos;t say, cause
        it&apos;s not a word ;)
      </p>
      <p>
        I like to exercise as well. I practice MMA and it&apos;s a lot of fun. I
        like the violence of it, it puts me in this special spot where I am just
        100% in the moment.
      </p>
      <p>
        My mission in life is to be a good person, don&apos;t cause any
        unnecessary suffering, be compassionate and helpful. Love every sentient
        being unconditionally.
      </p>
      <p>I like to pet dogs</p>
    </div>
  );
}

export default About;
