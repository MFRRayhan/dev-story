export default async function StoryDetails({ params }) {
  const { id } = await params;

  const singleStorys = [
    {
      id: 1,
      name: "Aarav Sharma",
      designation: "Frontend SingleStory",
      company: "TechNova Solutions",
      experience: "2 Years",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      story:
        "Aarav started as a self-taught singleStory and built several freelance projects before joining TechNova Solutions. He enjoys creating fast and accessible web applications. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Passionate frontend singleStory with a strong focus on UI/UX, performance optimization, and clean code practices.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sophia Williams",
      designation: "Full Stack SingleStory",
      company: "CodeCraft Labs",
      experience: "4 Years",
      skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
      story:
        "Sophia transitioned from graphic design into software development and now builds scalable web applications for startups. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Experienced full-stack singleStory specializing in modern JavaScript technologies and cloud-based applications.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Liam Johnson",
      designation: "Backend SingleStory",
      company: "DataSphere Inc.",
      experience: "5 Years",
      skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      story:
        "Liam enjoys solving backend challenges and designing reliable APIs for enterprise applications. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Backend engineer focused on scalable architectures, database optimization, and microservices.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emma Brown",
      designation: "UI/UX Designer",
      company: "Pixel Studio",
      experience: "3 Years",
      skills: [
        "Figma",
        "Adobe XD",
        "UI Design",
        "Prototyping",
        "Design Systems",
      ],
      story:
        "Emma combines creativity with usability to design intuitive digital experiences loved by users. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Creative UI/UX designer passionate about human-centered design and interactive interfaces.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Noah Martinez",
      designation: "Software Engineer",
      company: "InnovateX",
      experience: "6 Years",
      skills: ["JavaScript", "TypeScript", "Next.js", "AWS", "GraphQL"],
      story:
        "Noah has worked on multiple SaaS platforms and enjoys mentoring junior singleStorys. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Software engineer experienced in building cloud-native applications with modern technologies.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Olivia Davis",
      designation: "Mobile App SingleStory",
      company: "AppVerse",
      experience: "4 Years",
      skills: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
      story:
        "Olivia develops cross-platform mobile applications that deliver seamless user experiences. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Mobile singleStory focused on performant and user-friendly React Native applications.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "Ethan Wilson",
      designation: "DevOps Engineer",
      company: "CloudBridge",
      experience: "7 Years",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
      story:
        "Ethan automates deployment pipelines and ensures reliable cloud infrastructure for global products. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. DevOps engineer passionate about automation, scalability, and infrastructure as code.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Mia Anderson",
      designation: "Frontend Engineer",
      company: "BrightWeb",
      experience: "3 Years",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      story:
        "Mia specializes in building modern, responsive interfaces with a strong emphasis on animations and accessibility. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Frontend engineer who loves crafting pixel-perfect user experiences using the latest web technologies.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "James Taylor",
      designation: "MERN Stack SingleStory",
      company: "DevFusion",
      experience: "5 Years",
      skills: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      story:
        "James has delivered multiple enterprise-grade MERN applications and enjoys tackling challenging full-stack problems. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ullam cum possimus perferendis saepe expedita modi reprehenderit in blanditiis illo rem quibusdam quas omnis dolor nam itaque eligendi tempore sed neque, ea animi temporibus. Harum eos dignissimos odio, eius commodi, optio quisquam, inventore asperiores et autem alias ullam incidunt iure. Results-driven MERN stack singleStory with expertise in REST APIs, authentication, and scalable web applications.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];

  const singleStory = singleStorys.find((story) => story.id === Number(id));

  if (!singleStory)
    return <h2 className="text-red-500 text-5xl">No Story found</h2>;

  return (
    <section className="max-w-5xl px-5 py-12 mx-auto">
      <div className="overflow-hidden rounded-3xl bg-base-100 shadow-xl">
        {/* Cover */}
        <div className="h-52 bg-linear-to-r from-primary to-secondary"></div>

        <div className="px-8 pb-10">
          {/* Profile */}
          <div className="-mt-20">
            <img
              src={singleStory.image}
              alt={singleStory.name}
              className="h-40 w-40 rounded-full border-4 border-base-100 object-cover"
            />
          </div>

          {/* Info */}
          <div className="mt-6">
            <h1 className="text-4xl font-bold">{singleStory.name}</h1>

            <p className="mt-2 text-lg text-base-content/70">
              {singleStory.designation} at{" "}
              <span className="font-semibold">{singleStory.company}</span>
            </p>

            <div className="badge badge-primary mt-4 badge-lg">
              {singleStory.experience} Experience
            </div>
          </div>

          {/* About */}
          <div className="mt-10">
            <h2 className="mb-3 text-2xl font-bold">About</h2>

            <p className="leading-8 text-base-content/80">
              {singleStory.about}
            </p>
          </div>

          {/* Story */}
          <div className="mt-10">
            <h2 className="mb-3 text-2xl font-bold">SingleStory Journey</h2>

            <p className="leading-8 text-base-content/80">
              {singleStory.story}
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold">Skills</h2>

            <div className="flex flex-wrap gap-3">
              {singleStory.skills.map((skill) => (
                <span key={skill} className="badge badge-outline badge-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
