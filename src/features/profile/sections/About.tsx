function getAge(birthday: Date) {
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
        Hi! My name is Petar! I am currently {getAge(new Date("07/14/1997"))}{" "}
        years old. Try out the terminal! Use &apos;clear&apos; to reset.
      </p>
      <p>I like technology, writting code and doing DIY projects.</p>
      <p>Some of my other hobbies include cooking and riding bicycle.</p>
      <p>I like to exercise as well. It keeps you healthy and happy.</p>
      <p>
        My mission in life is to be a good person, don&apos;t cause any
        unnecessary suffering, be compassionate and helpful.
      </p>
      <p>My favorite drink is Cola.</p>
    </div>
  );
}

export default About;
