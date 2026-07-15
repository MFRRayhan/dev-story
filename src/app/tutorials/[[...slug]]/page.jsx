import Title from "@/components/Title";

export default async function Tutorials({ params }) {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];

  return (
    <div>
      <Title>{technology} Tutorials</Title>
      <h2>{topic}</h2>
      <div className="divider"></div>
      <div className="flex justify-between">
        <h3>{subject}</h3>
        <p>Page No. {page_no}</p>
      </div>
    </div>
  );
}
