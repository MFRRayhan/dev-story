import StoryCard from "@/components/StoryCard";
import Title from "@/components/Title";

export default function Stories() {
  const developers = [
    {
      id: 1,
      name: "Aarav Sharma",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "2 Years",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      story:
        "Aarav started as a self-taught developer and built several freelance projects before joining TechNova Solutions. He enjoys creating fast and accessible web applications. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Passionate frontend developer with a strong focus on UI/UX, performance optimization, and clean code practices.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sophia Williams",
      designation: "Full Stack Developer",
      company: "CodeCraft Labs",
      experience: "4 Years",
      skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
      story:
        "Sophia transitioned from graphic design into software development and now builds scalable web applications for startups. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Experienced full-stack developer specializing in modern JavaScript technologies and cloud-based applications.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Liam Johnson",
      designation: "Backend Developer",
      company: "DataSphere Inc.",
      experience: "5 Years",
      skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      story:
        "Liam enjoys solving backend challenges and designing reliable APIs for enterprise applications. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Backend engineer focused on scalable architectures, database optimization, and microservices.",
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
        "Creative UI/UX designer passionate about human-centered design and interactive interfaces.",
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
        "Noah has worked on multiple SaaS platforms and enjoys mentoring junior developers. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Software engineer experienced in building cloud-native applications with modern technologies.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Olivia Davis",
      designation: "Mobile App Developer",
      company: "AppVerse",
      experience: "4 Years",
      skills: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
      story:
        "Olivia develops cross-platform mobile applications that deliver seamless user experiences. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Mobile developer focused on performant and user-friendly React Native applications.",
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
        "DevOps engineer passionate about automation, scalability, and infrastructure as code.",
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
        "Frontend engineer who loves crafting pixel-perfect user experiences using the latest web technologies.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "James Taylor",
      designation: "MERN Stack Developer",
      company: "DevFusion",
      experience: "5 Years",
      skills: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      story:
        "James has delivered multiple enterprise-grade MERN applications and enjoys tackling challenging full-stack problems. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores neque asperiores iure earum quae ad deleniti cumque, eveniet mollitia, nam harum quod debitis quis quia repellendus vero magnam nesciunt voluptatem sapiente tenetur culpa ea! Facilis nostrum rerum atque quas. Doloribus asperiores ipsam autem beatae eligendi sit aliquam. Sequi, animi!",
      about:
        "Results-driven MERN stack developer with expertise in REST APIs, authentication, and scalable web applications.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];

  return (
    <div>
      <Title>Explore Stories</Title>

      <div className="py-10 grid grid-cols-3 gap-5">
        {developers.map((developer) => (
          <StoryCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
}
