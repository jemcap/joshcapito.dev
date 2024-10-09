import Timeline from "./Timeline";

const MoreAboutMe = () => {
  return (
    <div className="h-screen py-10">
      <div className="flex flex-col gap-10 align-elements my-32 text-start">
        <h1 className="text-4xl font-bold text-start ">
          joshua emmanuel capito
          <hr />
        </h1>
        <div className="text-xl flex flex-col gap-8">
          <p>
            Hi, I'm Josh, a frontend web developer with a background in product
            design. After graduating from Nottingham Trent University and as a
            proud alumnus of the NTUDI cohort of 2022, where I led the website
            team for our final-year showcase, I made the switch to web
            development. I've always been passionate about blending creativity
            with technology, particularly through digital media. I love the
            rewarding feeling of bringing innovative concepts to life by solving
            complex problems through code and creating visually striking
            interfaces for improving the user's experience.
          </p>

          <p>
            When I'm not working on a project, I'm likely experimenting with
            other creative passions like cinematography, photography, and
            exploring Three.js. Otherwise, you'll find me at the gym (I'm a
            powerlifter).
          </p>
        </div>
        <div className="flex text-start gap-8 text-2xl font-bold">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
