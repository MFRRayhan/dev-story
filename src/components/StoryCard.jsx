import Link from "next/link";

export default function StoryCard({ developer }) {
  const shortStory =
    developer.story.split(" ").slice(0, 20).join(" ") +
    (developer.story.split(" ").length > 20 ? "..." : "");

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Profile Image */}
        <img
          src={developer.image}
          alt={developer.name}
          className="h-24 w-24 rounded-full border-4 border-primary/20 object-cover"
        />

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold">{developer.name}</h3>

              <p className="text-primary font-medium">
                {developer.designation}
              </p>

              <p className="mt-1 text-sm text-base-content/60">
                {developer.company}
              </p>
            </div>

            <div className="badge badge-primary badge-outline h-fit px-4 py-3">
              {developer.experience}
            </div>
          </div>

          {/* Story */}
          <p className="mt-5 leading-7 text-base-content/70">{shortStory}</p>

          {/* Skills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {developer.skills.slice(0, 4).map((skill) => (
              <span key={skill} className="badge badge-outline badge-sm">
                {skill}
              </span>
            ))}

            {developer.skills.length > 4 && (
              <span className="badge badge-neutral badge-sm">
                +{developer.skills.length - 4}
              </span>
            )}
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link
              href={`/stories/${developer.id}`}
              className="btn btn-primary btn-sm"
            >
              Read Full Story →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
