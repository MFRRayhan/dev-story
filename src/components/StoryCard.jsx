export default function StoryCard({ developer }) {
  console.log(developer);
  return (
    <div className="p-5 rounded border flex items-start gap-5">
      <img
        src={developer.image}
        alt={developer.name}
        className="rounded-full object-cover object-fit"
      />
      <div className="space-y-5">
        <div>
          <h3 className="text-lg text-primary">{developer.name}</h3>
          <p className="text-sm text-gray-500">{developer.designation}</p>
        </div>
        <p>
          {developer.story.split(" ").slice(0, 20).join(" ")}{" "}
          {developer.story.split(" ").length > 20 ? "..." : ""}
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  );
}
