import Title from "@/components/Title";

export default async function Tutorials({ params }) {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <Title>Tutorials</Title>
    </div>
  );
}
