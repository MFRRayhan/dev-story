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
        "Aarav started as a self-taught developer and built several freelance projects before joining TechNova Solutions. He enjoys creating fast and accessible web applications.",
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
        "Sophia transitioned from graphic design into software development and now builds scalable web applications for startups.",
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
        "Liam enjoys solving backend challenges and designing reliable APIs for enterprise applications.",
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
        "Emma combines creativity with usability to design intuitive digital experiences loved by users.",
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
        "Noah has worked on multiple SaaS platforms and enjoys mentoring junior developers.",
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
        "Olivia develops cross-platform mobile applications that deliver seamless user experiences.",
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
        "Ethan automates deployment pipelines and ensures reliable cloud infrastructure for global products.",
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
        "Mia specializes in building modern, responsive interfaces with a strong emphasis on animations and accessibility.",
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
        "James has delivered multiple enterprise-grade MERN applications and enjoys tackling challenging full-stack problems.",
      about:
        "Results-driven MERN stack developer with expertise in REST APIs, authentication, and scalable web applications.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];

  return (
    <div>
      <Title>Explore Stories</Title>

      <div>
        {developers.map((developer) => (
          <li key={developer.id}>{developer.name}</li>
        ))}
      </div>
    </div>
  );
}
