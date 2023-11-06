import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  //   const [resumeContent, setResumeContent] = useState({
  //     firstName: "",
  //     lastName: "",
  //     occupation: "",
  //     link1: "",
  //     link2: "",
  //     link3: "",
  //   });
  //   let name, value;
  //   const handleResumeInputs = (e) => {
  //     name = e.target.name;
  //     value = e.target.value;
  //     setResumeContent({ ...resumeContent, [name]: value });
  //   };
  //   const navigate = useNavigate();
  //   const callAboutpage = async () => {
  //     try {
  //       const res = await fetch("/about", {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });

  //       const data = await res.json();
  //       console.log(data);
  //       setUserData(data);
  //       if (res.status !== 200) {
  //         const error = new Error(res.statusText);
  //         console.log(error);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       navigate("/login");
  //     }
  //   };

  //   useEffect(() => {
  //     callAboutpage();
  //   }, []);
  return (
    <div>
      <div className="container  mt-5 bg-black  lg:space-x-8 xl:space-x-8 ">
        <form className="w-full max-w-lg space-y-3">
          <div className="w-full md:w-1/2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstName"
              //   value={resumeContent.firstName}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="lastName"
              //   value={resumeContent.lastName}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className="w-full md:w-1/2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Occupation
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="lastName"
              //   value={resumeContent.lastName}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className=" w-full md:w-1/2 space-y-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Links
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="link1"
              //   value={resumeContent.link1}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Doe"
            />
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="link2"
              //   value={resumeContent.link2}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className=" w-full md:w-1/2 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="link1"
              //   value={resumeContent.link1}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className=" w-full md:w-1/2 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="link1"
              //   value={resumeContent.link1}
              //   onChange={handleResumeInputs}
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className=" w-full md:w-1/2 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Write About Yourself
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-5 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="link1"
              //   value={resumeContent.link1}
              //   onChange={handleResumeInputs}
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
